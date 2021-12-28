<?php

namespace App\Http\Controllers\Housekeeping;

use App\Configurations\Models\Room;
use App\Http\Controllers\Configurations\Company;
use App\Http\Controllers\Controller;
use App\Http\Controllers\General\AuditLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Arr;
class ReportController extends Controller
{
    public function CheckList(Request $request){
        $params=$request->all();
        $a= $request->selected;
        $selected = explode(", ",$a);

        $audit_date = AuditLogController::auditDate();
        $unavailable=DB::table('room_unavailable')
            ->select(
                'room_number',
                'from_date',
                'to_date',
                'status_code',
                'note',
                'id_log')
            ->where('from_date','<=',$audit_date)
            ->where('to_date','>=',$audit_date)
            ->groupBy('room_number');
        $reservation=DB::table('reservation')
            ->select(
                DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS name'),
                'guest_detail.room_number as room',
                'guest_detail.arrival',
                'const_room_status.name as room_status',
                'cfg_init_room_type.name as room_type',
                )
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
                ->leftJoin('const_room_status','cfg_init_room.status_code','const_room_status.code')
                ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
                ->where('reservation.status_code','N');
        $folio = DB::table('folio')
            ->select(
                'number as folio_number',
                'room_status_code',
                'compliment_hu',
                'hk_note',
                'status_code',
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
        $inHouse = Room::select(['number as room','cfg_init_room_type.name as room_type','folio.full_name as name','const_room_status.name as room_status',
                    ])
            ->leftJoinSub($folio, 'folio', 'cfg_init_room.number', 'folio.room_number')
            ->leftJoin('const_room_status','cfg_init_room.status_code','const_room_status.code')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoinSub($unavailable, 'unavailable', 'cfg_init_room.number', 'unavailable.room_number')
            ->orderBy('cfg_init_room.number','ASC')
            ->whereDate('folio.dateDeparture','!=', $audit_date)
            ->where('folio.full_name','<>','');
        $departure = Room::select(['number as room','cfg_init_room_type.name as room_type','folio.full_name as name','const_room_status.name as room_status',
                    DB::raw('IF(IFNULL(unavailable.status_code, "")="" AND IFNULL(folio.full_name, "") <> "", "-1", "0") AS is_occupied'),
                    'folio.dateDeparture'
                ])
            ->leftJoinSub($folio, 'folio', 'cfg_init_room.number', 'folio.room_number')
            ->leftJoin('const_room_status','cfg_init_room.status_code','const_room_status.code')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoinSub($unavailable, 'unavailable', 'cfg_init_room.number', 'unavailable.room_number')
            ->orderBy('cfg_init_room.number','ASC')
            ->whereDate('folio.dateDeparture', $audit_date);

        $vacant =Room::select(['number as room','cfg_init_room_type.name as room_type','reservation.name as name','const_room_status.name as room_status',
            DB::raw('IF(IFNULL(unavailable.status_code, "")="" AND IFNULL(folio.full_name, "") <> "", "-1", "0") AS is_occupied'),
                ])

            ->leftJoinSub($folio, 'folio', 'cfg_init_room.number', 'folio.room_number')
            ->leftJoinSub($reservation, 'reservation', 'cfg_init_room.number', 'reservation.room')
            ->leftJoin('const_room_status','cfg_init_room.status_code','const_room_status.code')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoinSub($unavailable, 'unavailable', 'cfg_init_room.number', 'unavailable.room_number')
            ->orderBy('cfg_init_room.number','ASC')
            ->groupBy('cfg_init_room.number')
            ->where('folio.full_name',null)
            ->where('reservation.name',null);
        $hotelInformation = DB::table('hotel_information')
            ->select(['hotel_information.*','cfg_init_country.name as country', 'cfg_init_state.name as state' ])
            ->leftJoin('cfg_init_country','hotel_information.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state','hotel_information.state_code','cfg_init_state.code');

        if(!empty($a)){
            $inHouse->whereIn('cfg_init_room.number',$selected);
            $departure->whereIn('cfg_init_room.number',$selected);
            $reservation->whereIn('cfg_init_room.number',$selected);
            $vacant->whereIn('cfg_init_room.number',$selected);
        };


        // return $vacant->get();
        return response()->json([
            'inHouse' => $inHouse->get(),
            'departure' => $departure->get(),
            'arrival' => $reservation
            ->whereDate('guest_detail.arrival',$audit_date)
            ->orderBy('guest_detail.room_number','ASC')
            ->get(),
            'vacant' => !empty($a) ? $vacant->get() : [],
            'titleInHouse' => $inHouse->get() != '[]' ? 'Guest in House' : '',
            'titleDeparture' => $departure->get() != '[]' ? 'Expected Departure' : '',
            'titleArrival' => $reservation
            ->whereDate('guest_detail.arrival',$audit_date)
            ->orderBy('guest_detail.room_number','ASC')
            ->get()  != '[]'  ? 'Expected Arrival' : '',
            'titleVacant' => !empty($a) ? 'Vacant' : '',
            'hotelInformation' => $hotelInformation->first()
            ]);
    }
}
