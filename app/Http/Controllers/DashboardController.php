<?php

namespace App\Http\Controllers;

use App\Configurations\Models\Room;
use App\Configurations\Models\RoomUnavailable;
use App\Folio\Models\Folio;
use App\Http\Controllers\General\AuditLogController;
use App\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public $auditDate;

    public function __construct(){
        $this->auditDate = AuditLogController::auditDate();
    }

    public function roomStatistic(){
        $toDate = AuditLogController::auditDate();
        $fromDate = FormatController::incDay($toDate,1);
        $union1 = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"In House" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<=', $this->auditDate)
            ->whereDate('guest_detail.departure','>=', $this->auditDate)
            ->groupBy('Code');
        $union2 = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('IF(folio.compliment_hu="", "Room Sold", const_room_status.name) AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->leftJoin('const_room_status','folio.compliment_hu','const_room_status.code')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<=', $this->auditDate)
            ->whereDate('guest_detail.departure','>', $this->auditDate)
            ->groupBy('Code');

        $union3= RoomUnavailable::select(
            DB::raw('COUNT(cfg_init_room.room_type_code) rooms'),
            DB::raw('"1" as sort'),
            DB::raw('"0" as pax'),
            DB::raw('"Under Construction" AS Code'))
            ->leftJoin('cfg_init_room_unavailable_reason','room_unavailable.reason_code','cfg_init_room_unavailable_reason.code')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<=',$this->auditDate)
            ->whereDate('room_unavailable.to_date','>=',$this->auditDate)
            ->where('room_unavailable.status_code',GlobalVariableController::$roomStatus['UnderConstruction'])
            ->groupBy('Code');

        $union4 = Reservation::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Expected Arrival" AS Code'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'));

        $union5 = Reservation::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Check In" AS Code'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['InHouse'])
            ->whereDate('guest_detail.arrival','=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->orWhere('reservation.status_code',GlobalVariableController::$reservationStatus['CheckOut'])
            ->whereDate('guest_detail.arrival','=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'));

        $union6 = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Walk In" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code','<>',GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->whereDate('guest_detail.arrival','=',$toDate)
            // ->whereDate('guest_detail.departure','>=',$fromDate)
            ->where('folio.reservation_number','0')
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('Code');

        $union7 = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Expected Departure" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','=',$toDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.departure)'));

        $union8 = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Check Out" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Closed'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','=',$toDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.departure)'));


        $union9 = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Arrival" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code','<>',GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->whereDate('guest_detail.arrival','=',$toDate)
            // ->whereDate('guest_detail.departure','>=',$fromDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('Code');

        $union10= RoomUnavailable::select(
            DB::raw('COUNT(cfg_init_room.room_type_code) rooms'),
            DB::raw('"1" as sort'),
            DB::raw('"0" as pax'),
            DB::raw('"Out Of Order" AS Code'))
            ->leftJoin('cfg_init_room_unavailable_reason','room_unavailable.reason_code','cfg_init_room_unavailable_reason.code')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<=',$this->auditDate)
            ->whereDate('room_unavailable.to_date','>=',$this->auditDate)
            ->where('room_unavailable.status_code',GlobalVariableController::$roomStatus['OutOfOrder'])
            ->groupBy('Code');

        $union11= RoomUnavailable::select(
            DB::raw('COUNT(IFNULL(cfg_init_room.room_type_code,0)) rooms'),
            DB::raw('"1" as sort'),
            DB::raw('"0" as pax'),
            DB::raw('"Office Use" AS Code'))
            ->leftJoin('cfg_init_room_unavailable_reason','room_unavailable.reason_code','cfg_init_room_unavailable_reason.code')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<=',$this->auditDate)
            ->whereDate('room_unavailable.to_date','>=',$this->auditDate)
            ->where('room_unavailable.status_code',GlobalVariableController::$roomStatus['OfficeUse'])
            ->groupBy('Code');

        $roomData = Reservation::select(
            DB::raw('COUNT(IFNULL(guest_detail.room_type_code,0)) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Reservation" AS Code'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            // ->whereDate('guest_detail.departure','>',$fromDate)
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'))
            // ->groupBy(DB::raw('DATE(guest_detail.departure)'))
            ->union($union1)
            ->union($union2)
            ->union($union3)
            ->union($union4)
            ->union($union5)
            ->union($union6)
            ->union($union7)
            ->union($union8)
            ->union($union9)
            ->union($union10)
            ->union($union11)
            ->orderBy('sort')
            ->get();

        $totalRoom = Room::select(
            DB::raw('COUNT(number) as totalRoom')
        )->first();

            $data= [
                0=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Arrival"
                ],
                1=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Check In"
                ],
                2=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Walk In"
                ],
                3=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Expected Arrival"
                ],
                4=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Expected Departure"
                ],
                5=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Departure"
                ],
                6=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "In House"
                ],
                7=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Room Sold"
                ],
                8=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Compliment"
                ],
                9=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "House Use"
                ],
                10=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Out Of Order"
                ],
                11=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Office Use"
                ],
                12=>[
                    "rooms"=> 0,
                    "pax"=> 0,
                    "Code"=> "Under Construction"
                ],

            ];
            $series= [0,0,0,0,0,0];
            foreach($roomData as $roomDataX){
                if($roomDataX->Code == "Arrival"){
                    $data[0] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                }

                if($roomDataX->Code == "Check In"){
                    $data[1] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                }

                if($roomDataX->Code == "Walk In"){
                    $data[2] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                }

                if($roomDataX->Code == "Expected Arrival"){
                    $data[3] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                    $series[1] = $roomDataX->rooms;
                }

                if($roomDataX->Code == "Expected Departure"){
                    $data[4] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                }

                if($roomDataX->Code == "Departure"){
                    $data[5] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                }

                if($roomDataX->Code == "In House"){
                    $data[6] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                }

                if($roomDataX->Code == "Room Sold"){
                    $data[7] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                    $series[5] = $roomDataX->rooms;
                }

                if($roomDataX->Code == "Compliment"){
                    $data[8] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                    $series[0] = $roomDataX->rooms;
                }

                if($roomDataX->Code == "House Use"){
                    $data[9] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                    $series[2] = $roomDataX->rooms;
                }

                if($roomDataX->Code == "Out Of Order"){
                    $data[10] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                    $series[3] += $roomDataX->rooms;
                }

                if($roomDataX->Code == "Office Use"){
                    $data[11] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                    $series[3] += $roomDataX->rooms;
                }

                if($roomDataX->Code == "Under Construction"){
                    $data[12] = [
                        'rooms' => $roomDataX->rooms,
                        'pax' => $roomDataX->pax,
                        'Code' => $roomDataX->Code
                    ];
                    $series[3] += $roomDataX->rooms;
                }
            }
            $series[4] = $totalRoom->totalRoom - $series[0] - $series[1] - $series[2] - $series[3] - $series[5];
            $roomSaleable = $totalRoom->totalRoom  - $series[2] - $series[3];
            $roomSold = $series[0];
            $occupancy = round((($data[6]['rooms'] / $roomSaleable) * 100),2);

            return response()->json([
                'dataTable' => $data,
                'graphic' => $series,
                'occupancy' => $occupancy,
                'totalRoom' => $totalRoom,
                'saleableRoom' => $roomSaleable
            ]);

    }

    public function roomStatistic2(){
        $this->auditDate = AuditLogController::auditDate();
        $reservation = Reservation::select(
            DB::raw('COUNT(IFNULL(guest_detail.room_type_code,0)) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Reservation" AS Code'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->groupBy('Code')
            ->first();

        $departure = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Departure" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Closed'])
            ->whereDate('guest_detail.arrival','<=',$this->auditDate)
            ->whereDate('guest_detail.departure','=',$this->auditDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.departure)'))
            ->first();

        $expectedDeparture = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Expected Departure" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->whereDate('guest_detail.departure','=',$this->auditDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.departure)'))
            ->first();

        $expectedArrival = Reservation::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Expected Arrival" AS Code'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','=',$this->auditDate)
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'))->first();

        $arrival = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"Arrival" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code','<>',GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->whereDate('guest_detail.arrival','=',$this->auditDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('Code')
            ->first();

        $inHouse = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"In House" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('Code')
            ->first();


            return response()->json([
                'arrival' => $arrival,
                'expected_arrival' => $expectedArrival,
                'departure' => $departure,
                'expected_departure' => $expectedDeparture,
                'reservation' => $reservation,
                'in_house' => $inHouse,
            ]);
    }

    public function expectedArrivalDeparture(){
        $expectedArrival = Reservation::select(
            'reservation.number',
            'contact_person.full_name',
            'guest_detail.arrival',
            'guest_detail.departure',
            DB::raw('SUM(guest_detail.adult) as pax'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','=',$this->auditDate)
            ->groupBy('reservation.number')->get();

        $expectedDeparture = Folio::select(
            'folio.number',
            'contact_person.full_name',
            'guest_detail.arrival',
            'guest_detail.departure',
            DB::raw('"Expected Departure" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->whereDate('guest_detail.departure','=',$this->auditDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('folio.number')
            ->get();

            return response()->json([
                'expected_arrival' => $expectedArrival,
                'expected_departure' => $expectedDeparture
            ]);
    }

    public function roomStatus(){
        $unavailable=DB::table('room_unavailable')
        ->select(
            'room_number',
            'from_date',
            'to_date',
            'status_code',
            'note',
            'id_log')
        ->where('from_date','<=',$this->auditDate)
        ->where('to_date','>=',$this->auditDate)
        ->groupBy('room_number');
        $folio = DB::table('folio')
            ->select(
                'number as folio_number',
                'room_status_code',
                'compliment_hu',
                'hk_note',
                'contact_person.full_name as full_name',
                'guest_detail.arrival as dateArrival',
                'guest_detail.departure as dateDeparture',
                'guest_detail.room_number as room_number',
                'guest_group.name as group'
                )
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('guest_group','folio.group_code','guest_group.code')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')

            ->where('folio.status_code','O')
            ->where('folio.type_code','F');

        $reservation=DB::table('reservation')
            ->select(
                'reservation.number as nr_number',
                'reservation.hk_note as nr_housekeeping_note',
                DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS nr_guest_name'),
                'guest_detail.arrival as nr_date_arrival',
                'guest_detail.room_number as nr_room_number')
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                ->where('reservation.status_code','N')
                ->groupBy('guest_detail.arrival','guest_detail.room_number');

        $roomStatus = Room::select([
            'cfg_init_room.number',
            DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", unavailable.status_code, CONCAT(IF(IFNULL(foliox.full_name, "") <> "", "O", "V"), cfg_init_room.status_code)) AS status_room'),
            DB::raw('CONCAT(cfg_init_room_type.name," ", cfg_init_bed_type.name) AS room_type'),
            DB::raw('CONCAT(cfg_init_room_type.code," ", cfg_init_bed_type.code) AS room_type_code'),
        ])
            ->leftJoin('const_room_block_status','cfg_init_room.block_status_code','const_room_block_status.code')
            ->leftJoin('cfg_init_room_view','cfg_init_room.view_code','cfg_init_room_view.code')
            ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoinSub($reservation,'nr_reservation','cfg_init_room.number','nr_reservation.nr_room_number')
            ->leftJoinSub($unavailable,'unavailable','cfg_init_room.number','unavailable.room_number')
            ->leftJoinSub($folio,'foliox','cfg_init_room.number','foliox.room_number')
            ->groupBy('cfg_init_room.number')
            ->orderBy('cfg_init_room.number', 'ASC')
            ->get();

        $roomType = Room::select(
            DB::raw('CONCAT(cfg_init_room_type.code," ", cfg_init_bed_type.code) AS room_type_code'),
            DB::raw('CONCAT(cfg_init_room_type.name," ", cfg_init_bed_type.name) AS room_type'),
            DB::raw('COUNT(cfg_init_room.number) AS count_room'))
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
            ->groupBy('room_type')
            ->orderBy('room_type_code')
            ->get();

            $result =[];
            $VR=[];
            $VD=[];
            $VC=[];
            $OC=[];
            $OD=[];
            $OO=[];
            $OF=[];
            $UC=[];
            $categories = [];
            foreach($roomType as $roomTypeX){
                $cVR=0;
                $cVD=0;
                $cVC=0;
                $cOC=0;
                $cOD=0;
                $cOO=0;
                $cOF=0;
                $cUC=0;
                foreach($roomStatus as $roomStatusX){
                    if($roomTypeX->room_type_code == $roomStatusX->room_type_code){
                        if($roomStatusX->status_room == 'VR'){
                            $cVR += 1;
                        }
                        if($roomStatusX->status_room == 'VC'){
                            $cVC +=1;
                        }
                        if($roomStatusX->status_room == 'VD'){
                            $cVD +=1;
                        }
                        if($roomStatusX->status_room == 'OC'){
                            $cOC +=1;
                        }
                        if($roomStatusX->status_room == 'OD'){
                            $cOD +=1;
                        }
                        if($roomStatusX->status_room == 'OO'){
                            $cOO +=1;
                        }
                        if($roomStatusX->status_room == 'UC'){
                            $cUC +=1;
                        }
                        if($roomStatusX->status_room == 'OF'){
                            $cOF +=1;
                        }
                    }

                }

               $VR[] = $cVR;
               $VC[] = $cVC;
               $VD[] = $cVD;
               $OC[] = $cOC;
               $OD[] = $cOD;
               $OO[] = $cOO;
               $OF[] = $cOF;
               $UC[] = $cUC;

               $categories[] = $roomTypeX->room_type;
            }
            $data[] = [
                'name' => 'Vacant Ready',
                'data' => $VR
            ];
            $data[] = [
                'name' => 'Vacant Clean',
                'data' => $VC
            ];
            $data[] = [
                'name' => 'Vacant Dirty',
                'data' => $VD
            ];
            $data[] = [
                'name' => 'Occupied Clean',
                'data' => $OC
            ];
            $data[] = [
                'name' => 'Occupied Dirty',
                'data' => $OD
            ];
            $data[] = [
                'name' => 'Out Of Order',
                'data' => $OO
            ];
            $data[] = [
                'name' => 'Office Use',
                'data' => $OF
            ];
            $data[] = [
                'name' => 'Under Construction',
                'data' => $UC
            ];



        return response()->json([
            'categories' => $categories,
            'series' => $data
        ]);
    }

    public function roomSold(){
        $fromDate = FormatController::decDay($this->auditDate,6);
        $toDate = $this->auditDate;
        $union1 = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('DATE(guest_detail.arrival) as arrival'),
            DB::raw('DATE(guest_detail.departure) as departure'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"RV" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->leftJoin('const_room_status','folio.compliment_hu','const_room_status.code')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->where('folio.reservation_number','<>','0')
            ->whereDate('guest_detail.arrival','<=', $toDate)
            ->whereDate('guest_detail.departure','>=', $fromDate)
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'))
            ->groupBy(DB::raw('DATE(guest_detail.departure)'));
        $union2 = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('DATE(guest_detail.arrival) as arrival'),
            DB::raw('DATE(guest_detail.departure) as departure'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('"WI" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->leftJoin('const_room_status','folio.compliment_hu','const_room_status.code')
            ->where('folio.status_code','<>',GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->where('folio.reservation_number','0')
            ->whereDate('guest_detail.arrival','<=', $toDate)
            ->whereDate('guest_detail.departure','>=', $fromDate)
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'));
        $roomSold = Folio::select(
            DB::raw('COUNT(guest_detail.room_type_code) rooms'),
            DB::raw('DATE(guest_detail.arrival) as arrival'),
            DB::raw('DATE(guest_detail.departure) as departure'),
            DB::raw('SUM(guest_detail.adult) as pax'),
            DB::raw('"1" as sort'),
            DB::raw('IF(folio.compliment_hu="", "RS", const_room_status.code) AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->leftJoin('const_room_status','folio.compliment_hu','const_room_status.code')
            ->where('folio.status_code','<>',GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<=', $toDate)
            ->whereDate('guest_detail.departure','>=', $fromDate)
            ->groupBy('Code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'))
            ->groupBy(DB::raw('DATE(guest_detail.departure)'))
            ->get();


                $RS = [0,0,0,0,0,0,0];
                $RC = [0,0,0,0,0,0,0];
                $HU = [0,0,0,0,0,0,0];

                $dRS = [];
                $dRC = [];
                $dHU = [];
                $datePeriode = FormatController::priodeOfDates($fromDate,$toDate);

                foreach($roomSold as $roomDataX){
                    $diffStart = FormatController::daysBetween($fromDate, $roomDataX->arrival);
                    $diffEnd = FormatController::daysBetween($roomDataX->arrival, $roomDataX->departure);
                    $diff=($diffEnd + $diffStart) < 8 ? ($diffEnd + $diffStart) : 7;
                    $CountStart = $diffStart;
                        for($i = $CountStart; $i < $diff; $i++){
                            if($i >= 0){
                                if ($roomDataX->Code == 'RS'){
                                    $RS[$i] += $roomDataX->rooms;
                                } else if ($roomDataX->Code == GlobalVariableController::$roomStatus['Compliment']){
                                    $RC[$i] += $roomDataX->rooms;
                                } else if ($roomDataX->Code == GlobalVariableController::$roomStatus['HouseUse']){
                                    $HU[$i] += $roomDataX->rooms;
                                }
                            }
                        }
                }
                for($i = 0; $i < count($datePeriode); $i++){
                    if($i >= 0){
                        $dRS[] = [
                           intval(strtotime($datePeriode[$i])."000"),$RS[$i]
                        ];
                        $dRC[] = [
                            intval(strtotime($datePeriode[$i])."000"),$RC[$i]
                        ];
                        $dHU[] = [
                            intval(strtotime($datePeriode[$i])."000"),$HU[$i]
                        ];
                    }
                }


        // return response()->json($datePeriode);
        return response()->json([
            [
                'name' => 'Room Sold',
                'data' => $dRS
            ],
            [
                'name' => 'Compliment',
                'data' => $dRC
            ],
            [
                'name' => 'House Use',
                'data' => $dHU
            ],
        ]);
    }
}
