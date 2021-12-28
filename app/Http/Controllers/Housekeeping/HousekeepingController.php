<?php

namespace App\Http\Controllers\Housekeeping;

use App\Configurations\Models\BedType;
use App\Http\Controllers\Controller;
use App\Http\Resources\HousekeepingResource;
use App\Configurations\Models\Room;
use App\Configurations\Models\RoomType;
use App\Configurations\Models\RoomUnavailable;
use App\Configurations\Models\RoomUnavailableReason;
use App\Configurations\Models\RoomView;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Validator;
use App\Http\Controllers\GlobalVariableController as variable;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Support\Arr;
class HousekeepingController extends Controller
{
    private $mainTableName;
    private $joinTable1;
    private $joinTable2;
    private $joinTable3;
    private $joinTable4;
    private $joinTable5;
    private $joinTable6;
    private $joinTable7;
    private $joinTable8;
    private $joinTable9;
    private $joinTable10;
    private $auditDate;


    public function __construct()
    {
        $this->mainTableName = 'cfg_init_room';
        $this->joinTable1 = 'folio';
        $this->joinTable2 = 'guest_detail';
        $this->joinTable3 = 'reservation';
        $this->joinTable4 = 'const_room_status';
        $this->joinTable5 = 'room_unavailable';
        $this->joinTable6 = 'cfg_init_room_type';
        $this->joinTable7 = 'cfg_init_bed_type';
        $this->joinTable7 = 'cfg_init_room_view';
        $this->joinTable7 = 'const_room_block_status';
        $this->auditDate = AuditLogController::auditDate();

    }

    public function index(Request $request){
        $filterList = [
            'cfg_init_room.number',
            'cfg_init_room.floor',
            'cfg_init_room_type.name',
            'cfg_init_bed_type.name',
            'foliox.full_name',
            'foliox.group',
            'cfg_init_room.remark',
            'foliox.hk_note',
            'nr_reservation.nr_number',
            'nr_reservation.nr_guest_name',
            'nr_reservation.nr_housekeeping_note',
            'lc_folio.lc_number',
            'lc_folio.lc_guest_name',
            'cfg_init_room.user_id',
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 10000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $roomTypeCode = Arr::get($search, 'roomTypeCode', '');
        $bedTypeCode = Arr::get($search, 'bedTypeCode', '');
        $roomViewCode = Arr::get($search, 'roomViewCode', '');
        $roomStatusCode = Arr::get($search, 'roomStatusCode', '');
        $building = Arr::get($search, 'building', '');
        $floor = Arr::get($search, 'floor', '');
        $smokingRoom = Arr::get($search, 'smokingRoom', '');
        $smokingRoom = $smokingRoom == 'Yes' ? '-1' : ( $smokingRoom == 'No' ? '0' : '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 14 ? $filterList[$searchBy] : '';

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
            $lc_folio=DB::table('folio')
                    ->select(
                        'folio.number as lc_number',
                        DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS lc_guest_name'),
                        'guest_detail.departure as lc_date_departure',
                        'guest_detail.room_number as lc_room_number')

                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->where('folio.status_code','C')
                    ->whereDate('guest_detail.departure',$this->auditDate)
                    ->groupBy('guest_detail.room_number')
                    // ->groupBy('lc_number')
                    ->distinct();

                    $housekeeping = Room::select([
                        $this->mainTableName . '.number',
                        $this->mainTableName . '.is_smoking',
                        $this->mainTableName . '.building',
                        $this->mainTableName . '.floor',
                        $this->mainTableName . '.block_status_code',
                        $this->mainTableName . '.name as room_name',
                        $this->mainTableName . '.id_sort',
                        $this->mainTableName . '.id_log',
                        $this->mainTableName . '.user_id',
                        DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", unavailable.status_code, CONCAT(IF(IFNULL(foliox.full_name, "") <> "", "O", "V"), cfg_init_room.status_code)) AS status_room'),
                        DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", unavailable.status_code, CONCAT(IF(IFNULL(foliox.full_name, "") <> "", "", ""), cfg_init_room.status_code)) AS status_room2'),
                        DB::raw('IF(IFNULL(unavailable.status_code, "")="" AND IFNULL(foliox.full_name, "") <> "", "-1", "0") AS is_occupied'),
                        DB::raw('IF(IFNULL(cfg_init_room.block_status_code, "")<>"", "-1", "0") AS is_blocked'),
                        DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", "-1", "0") AS is_unavailable'),
                        DB::raw('IF(IFNULL(unavailable.status_code, "")="", foliox.dateArrival, unavailable.from_date) AS date_arrival'),
                        DB::raw('IF(IFNULL(unavailable.status_code, "")="", foliox.dateDeparture, unavailable.to_date) AS date_departure'),
                        DB::raw('IF(IFNULL(unavailable.status_code, "")="", foliox.hk_note, "") AS house_keeping_note'),
                        DB::raw('IF(IFNULL(unavailable.status_code, "")="", foliox.full_name, unavailable.note) AS guest_info'),
                        DB::raw('CONCAT(cfg_init_room_type.name," ", cfg_init_bed_type.name) AS room_type'),
                        'cfg_init_room_view.name as room_view',
                        'unavailable.id_log as ID_log',
                        'const_room_block_status.name as rb_status',
                        'nr_reservation.*',
                        'foliox.*',
                        'lc_folio.*',
                    ])
                        ->leftJoin('const_room_block_status','cfg_init_room.block_status_code','const_room_block_status.code')
                        ->leftJoin('cfg_init_room_view','cfg_init_room.view_code','cfg_init_room_view.code')
                        ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
                        ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
                        ->leftJoinSub($reservation,'nr_reservation','cfg_init_room.number','nr_reservation.nr_room_number')
                        ->leftJoinSub($lc_folio,'lc_folio','cfg_init_room.number','lc_folio.lc_room_number')
                        ->leftJoinSub($unavailable,'unavailable','cfg_init_room.number','unavailable.room_number')
                        ->leftJoinSub($folio,'foliox','cfg_init_room.number','foliox.room_number')
                        ->where($this->mainTableName.'.room_type_code','like', '%'.$roomTypeCode.'%')
                        ->where($this->mainTableName.'.bed_type_code','like', '%'.$bedTypeCode.'%')
                        ->where($this->mainTableName.'.status_code','like', '%'.$roomStatusCode.'%')
                        ->where($this->mainTableName.'.building','like', '%'.$building.'%')
                        ->where($this->mainTableName.'.floor','like', '%'.$floor.'%')
                        ->where($this->mainTableName.'.view_code','like', '%'.$roomViewCode.'%')
                        ->where($this->mainTableName.'.is_smoking','like', '%'.$smokingRoom.'%')
                        ->groupBy('cfg_init_room.number')
                        ->orderBy('cfg_init_room.id_sort', 'ASC')
                        ->orderBy('cfg_init_room.number', 'ASC');

                        if(!empty($keyword) && !empty($searchBy)){
                            $housekeeping->where($searchBy, 'like', '%'.$keyword.'%');
                        };
                        // return response()->json($unavailable->get());

        return HousekeepingResource::collection($housekeeping->limit($limit)->get());
    }

    public function update(Request $request){
        $roomNumber = $request->number;
        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(false)
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            if($request->mode == 'room block' ){
                ProcedureQueryController::updateRoomBlockStatus($roomNumber, $request->status_code, $request->user_id);
            }
            else if($request->mode == 'room available' ){
                $roomNumber = $request->number;
                $roomData = $this->roomData();
                $status = $request->status_code;
                $result=[];
                foreach($roomNumber as $roomNumberX){
                    foreach($roomData as $roomDataX){
                        if($roomDataX->number == $roomNumberX && $roomDataX->is_unavailable == '0' && $roomDataX->status_room2 != $status){
                            if($status == GlobalVariableController::$roomStatus['Ready'] && $roomDataX->is_occupied != '-1'){
                                ProcedureQueryController::updateRoomStatus($roomNumberX, $status, $request->user_id);

                                //log User
                                $actionId = 0;
                                if($status === variable::$roomStatus['Ready']){
                                    $actionId = variable::$logUserAction['ReadyRoom'];
                                }
                                else if($status === variable::$roomStatus['Clean']){
                                    $actionId = variable::$logUserAction['CleanRoom'];
                                }
                                else if($status === variable::$roomStatus['Dirty']){
                                    $actionId = variable::$logUserAction['DirtyRoom'];
                                }

                                if($actionId !== 0){
                                    $logParams = ['actionId' => $actionId, 'link1' => $roomNumberX, 'link2' => $roomDataX->status_room2, 'link3' => $request->room_boy_code, 'remark' => $request->room_boy_name, 'userid' => $request->user_id];
                                    ProcedureQueryController::insertLogUserX($logParams);
                                }
                            }else if($status != GlobalVariableController::$roomStatus['Ready']){
                                ProcedureQueryController::updateRoomStatus($roomNumberX, $status, $request->user_id);

                                //log User
                                $actionId = 0;
                                if($status === variable::$roomStatus['Ready']){
                                    $actionId = variable::$logUserAction['ReadyRoom'];
                                }
                                else if($status === variable::$roomStatus['Clean']){
                                    $actionId = variable::$logUserAction['CleanRoom'];
                                }
                                else if($status === variable::$roomStatus['Dirty']){
                                    $actionId = variable::$logUserAction['DirtyRoom'];
                                }

                                if($actionId !== 0){
                                    $logParams = ['actionId' => $actionId, 'link1' => $roomNumberX, 'link2' => $roomDataX->status_room2, 'link3' => $request->room_boy_code, 'remark' => $request->room_boy_name, 'userid' => $request->user_id];
                                    ProcedureQueryController::insertLogUserX($logParams);
                                }
                            }
                        }
                    }
                }
            }

        }
    }

    public function roomData(){
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
        $lc_folio=DB::table('folio')
                ->select(
                    'folio.number as lc_number',
                    DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS lc_guest_name'),
                    'guest_detail.departure as lc_date_departure',
                    'guest_detail.room_number as lc_room_number')

                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->where('folio.status_code','C')
                ->whereDate('guest_detail.departure',$this->auditDate)
                ->groupBy('guest_detail.room_number')
                // ->groupBy('lc_number')
                ->distinct();

        $housekeeping = Room::select([
            $this->mainTableName . '.number',
            $this->mainTableName . '.is_smoking',
            $this->mainTableName . '.building',
            $this->mainTableName . '.floor',
            $this->mainTableName . '.block_status_code',
            $this->mainTableName . '.name as room_name',
            $this->mainTableName . '.id_sort',
            $this->mainTableName . '.id_log',
            $this->mainTableName . '.user_id',
            DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", unavailable.status_code, CONCAT(IF(IFNULL(foliox.full_name, "") <> "", "O", "V"), cfg_init_room.status_code)) AS status_room'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", unavailable.status_code, CONCAT(IF(IFNULL(foliox.full_name, "") <> "", "", ""), cfg_init_room.status_code)) AS status_room2'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")="" AND IFNULL(foliox.full_name, "") <> "", "-1", "0") AS is_occupied'),
            DB::raw('IF(IFNULL(cfg_init_room.block_status_code, "")<>"", "-1", "0") AS is_blocked'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", "-1", "0") AS is_unavailable'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")="", foliox.dateArrival, unavailable.from_date) AS date_arrival'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")="", foliox.dateDeparture, unavailable.to_date) AS date_departure'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")="", foliox.hk_note, "") AS house_keeping_note'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")="", foliox.full_name, unavailable.note) AS guest_info'),
            DB::raw('CONCAT(cfg_init_room_type.name," ", cfg_init_bed_type.name) AS room_type'),
            'cfg_init_room_view.name as room_view',
            'unavailable.id_log as ID_log',
            'const_room_block_status.name as rb_status',
            'nr_reservation.*',
            'foliox.*',
            'lc_folio.*',
        ])
            ->leftJoin('const_room_block_status','cfg_init_room.block_status_code','const_room_block_status.code')
            ->leftJoin('cfg_init_room_view','cfg_init_room.view_code','cfg_init_room_view.code')
            ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoinSub($reservation,'nr_reservation','cfg_init_room.number','nr_reservation.nr_room_number')
            ->leftJoinSub($lc_folio,'lc_folio','cfg_init_room.number','lc_folio.lc_room_number')
            ->leftJoinSub($unavailable,'unavailable','cfg_init_room.number','unavailable.room_number')
            ->leftJoinSub($folio,'foliox','cfg_init_room.number','foliox.room_number')
            ->groupBy('cfg_init_room.number')
            ->orderBy('cfg_init_room.id_sort', 'ASC');
        return $housekeeping->get();
    }

    public function store(Request $request){
        $params = $request->all();
        $roomUnavailableID = HelperController::ifNullInt(Arr::get($params, 'room_unavailable_id', 0));
        $note= Arr::get($params, 'note','');
        $fromDate = $request->from_date;
        $toDate = FormatController::incDay($request->to_date,1);
        $result = 404;
        if($this->auditDate < $fromDate && $roomUnavailableID === 0){
            $result = 2;
        } else if (!HelperController::isRoomAvailable($request->room_number, $fromDate, $toDate, 0, 0, $roomUnavailableID, 0, false, false)){
            $result = 1;
        } else{
            if($roomUnavailableID > 0){ //Mode Update
                ProcedureQueryController::updateRoomUnavailable($roomUnavailableID, $this->auditDate, $request->to_date, $request->status_code, $request->reason_code, $note, $request->user_id);
            }
            else{ //Mode Insert
                ProcedureQueryController::insertRoomUnavailable($request->room_number, $request->from_date, $request->to_date, $request->status_code, $request->reason_code, $note, $request->user_id);
            }


            $actionId = 0;
            if($request->status_code === variable::$roomStatus['OutOfOrder']){
                $actionId = variable::$logUserAction['OutOfOrder'];
            }
            else if($request->status_code === variable::$roomStatus['OfficeUse']){
                $actionId = variable::$logUserAction['OfficeUse'];
            }
            else if($request->status_code === variable::$roomStatus['UnderConstruction']){
                $actionId = variable::$logUserAction['UnderConstruction'];
            }

            if($actionId !== 0){
                $logParams = ['actionId' => $actionId, 'link1' => $request->room_number, 'link2' => ($roomUnavailableID > 0) ? 'Update':'Insert', 'link3' => $request->note, 'remark' => $request->from_date.'-'.$request->to_date, 'userid' => $request->user_id];
                ProcedureQueryController::insertLogUserX($logParams);
            }

            $result = 0;
        }
        return $result;
    }

    public function edit($id){
        $unavailable= RoomUnavailable::select('room_unavailable.*')->where('room_number',$id)->orderBy('id_log','DESC')->first();
        return response()->json($unavailable);
    }

    public function delete(Request $request){
        $roomUnavailable = ProcedureQueryController::getDetailRoomUnavailable($request->id_log);

        if(!$roomUnavailable){
            return 1;
        } else {
            $roomNumber = $roomUnavailable->room_number;
            $fromDate = $roomUnavailable->from_date;
            $toDate = FormatController::incDay($this->auditDate, 1);
            $statusCode = $roomUnavailable->status_code;
            $reasonCode = $roomUnavailable->reason_code;
            $note = $roomUnavailable->note;

            //Checking Avaibility
            if (!HelperController::isRoomAvailable($roomNumber, $this->auditDate, $toDate, 0, 0, $request->id_log, 0, false, false)){
                return 2;
            }

            //Process Update or Delete
            if (FormatController::formatDate($fromDate) >= $this->auditDate){
                ProcedureQueryController::deleteRoomUnavailable($request->id_log, $request->user_id);
                ProcedureQueryController::updateRoomStatus($roomNumber, GlobalVariableController::$roomStatus['Dirty'], $request->user_id);
            } else{
                ProcedureQueryController::updateRoomUnavailable($request->id_log, $fromDate, FormatController::incDay($this->auditDate, -1), $statusCode, $reasonCode, $note, $request->user_id);
            }

            return 0;
        }
    }

    public function dataLookUp(){
        $type = DB::table('const_room_status')->select('code', 'name', 'type_code')->where('type_code','U')->get();
        $reason = RoomUnavailableReason::select('code','description')->get();

        return response()->json([
                'type' => $type,
                'reason' => $reason
            ]);
    }

    public function roomStatus(Request $request){
        $params = $request->all();
        $roomNumber = Arr::get($params, 'room_number','');

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

        $room = Room::select(
            DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", unavailable.status_code, cfg_init_room.status_code) AS status_room'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")="" AND IFNULL(foliox.full_name, "") <> "", "-1", "0") AS is_occupied'),
            DB::raw('IF(IFNULL(cfg_init_room.block_status_code, "")<>"", "-1", "0") AS is_blocked'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", "-1", "0") AS is_unavailable'),
            'cfg_init_room.number'
        )
            ->leftJoin('const_room_block_status','cfg_init_room.block_status_code','const_room_block_status.code')
            ->leftJoinSub($unavailable,'unavailable','cfg_init_room.number','unavailable.room_number')
            ->leftJoinSub($folio,'foliox','cfg_init_room.number','foliox.room_number')
            ->where('cfg_init_room.number',$roomNumber);

            return response()->json($room->first());

    }

    public function filterLookup(){
        $roomType = RoomType::select('code','name')->get();
        $bedType = BedType::select('code','name')->get();
        $roomStatus = [
            ['code' => '', 'name' => 'All'],
            ['code' => 'R', 'name' => 'Ready'],
            ['code' => 'C', 'name' => 'Clean'],
            ['code' => 'D', 'name' => 'Dirty']
        ];
        $roomView = RoomView::select('code','name')->get();
        $smokingRoom = ['All','Yes','No'];
        $building = Room::select('building')->distinct()->get();
        $floor = Room::select('floor')->distinct()->get();

        return  response()->json([
            'dlRoomType' => $roomType,
            'dlBedType' => $bedType,
            'dlBuilding' => $building,
            'dlFloor' => $floor,
            'dlRoomStatus' => $roomStatus,
            'dlRoomView' => $roomView,
            'dlSmokingRoom' => $smokingRoom,
        ]);
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'number' => 'required',
            'status_code' => 'max:2',
            'user_id' => 'required'
        ];
    }
    private function null($value){
        if (!$value){
            return ' ';
        } else {
            return $value;
        }
    }

}
