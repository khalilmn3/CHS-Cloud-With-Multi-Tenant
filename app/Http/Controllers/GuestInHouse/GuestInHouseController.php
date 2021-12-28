<?php

namespace App\Http\Controllers\GuestInHouse;

use App\Configurations\Models\Room;
use App\Folio\Models\Folio;
use App\Folio\Models\SubFolio;
use App\Http\Controllers\AuditDateController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Folio\FolioController;
use App\Http\Controllers\Folio\SubFolioController;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use App\Http\Controllers\ServerDS\MethodController;
use App\Http\Controllers\ServerDS\MethodStringListController;
use Illuminate\Support\Facades\Date;

class GuestInHouseController extends Controller
{

    public $auditDate;

    public function __construct()
    {
        $this->auditDate = AuditLogController::auditDate();
    }

    public function index(Request $request)
    {
        $search= $request->all();

        // using API
        if(GlobalVariableController::$useApiService){
            $search['limit'] = Arr::get($search, 'limit','');
            $data = MethodController::getAPI(MethodStringListController::$guestInHouse['getGuestInHouse'], $search,'');

            return $data;
        }
        // using local DB
        $filterList = [
            'folio.number',
            'folio.reservation_number',
            'cfg_init_guest_type.name',
            'const_folio_status.name',
            'reservation.reservation_by',
            'CONCAT(contact_person.title_code, contact_person.full_name)',
            'guest_detail.room_number',
            'room_type.name',
            'cfg_init_bed_type.name',
            'room_rate.name',
            'folio.voucher_number',
            'folio.voucher_number_ta',
            'guest_group.name',
            'company.name',
            'cfg_init_market.name',
            'TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code))',
            'cfg_init_state.name',
            'cfg_init_country.name',
            '(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END)',
            'contact_person.fax',
            'folio.document_number',
            'folio.notes',
            'folio.hk_note',
            'folio.insert_by',
            'guest_detail.bill_instruction',
            'folio.user_id'
        ];
        $params = $request->all();
        $keyword = Arr::get($params, 'keyword','');
        $searchBy = Arr::get($params, 'searchBy','');
        $searchBy =  is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 26 ? $filterList[$searchBy] : '';
        $departure = Arr::get($params, 'departure','');
        $checkedIn = Arr::get($params, 'checkedIn','');
        $walkedIn = Arr::get($params, 'walkedIn','');
        $limit= Arr::get($params,'limit',1000);

        $subFolio = SubFolio::select(
            'folio_number',
            'sub_folio.type_code',
            'amount',
            DB::raw('SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN IFNULL(sub_folio.amount, 0) ELSE -IFNULL(sub_folio.amount, 0) END) AS balance'))
            ->leftJoin('cfg_init_account','sub_folio.account_code', 'cfg_init_account.code')
            ->leftJoin('cfg_init_account_sub_group', 'cfg_init_account.sub_group_code', 'cfg_init_account_sub_group.code')
            ->where('sub_folio.void','0')
            ->where('sub_folio.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode'])
            ->groupBy('folio_number');

        $totalBalance = Folio::select(
            DB::raw('SUM(SubFolio.balance) as balance'),
            // DB::raw('SUM(CASE WHEN folio.status_code="'.GlobalVariableController::$folioStatus['Open'].'" THEN 1 ELSE 0 END) AS room_number')
            // DB::raw('COUNT(folio.number) as room_number')
            DB::raw('SUM(guest_detail.weekday_rate) as weekday_rate'),
            DB::raw('SUM(guest_detail.weekend_rate) as weekend_rate'),
            DB::raw('SUM(guest_detail.adult) as adult'),
            DB::raw('SUM(guest_detail.child) as child')
            )
            ->leftJoin('guest_detail','folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_market','guest_detail.market_code', 'cfg_init_market.code')
            ->leftJoin('cfg_init_room','guest_detail.room_number', 'cfg_init_room.number')
            ->leftJoin('reservation','folio.reservation_number', 'reservation.number')
            ->leftJoin('contact_person','folio.contact_person_id', 'contact_person.id')
            ->leftJoin('cfg_init_country', 'contact_person.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state', 'contact_person.state_code','cfg_init_state.code')
            ->leftJoin('cfg_init_nationality', 'contact_person.nationality_code', 'cfg_init_nationality.code')
            ->leftJoin('company' ,'contact_person.company_code', 'company.code')
            ->leftJoin('const_folio_type' ,'folio.type_code', 'const_folio_type.code')
            ->leftJoin('const_folio_status' ,'folio.status_code', 'const_folio_status.code')
            ->leftJoin('cfg_init_guest_type', 'contact_person.guest_type_code', 'cfg_init_guest_type.code')
            ->leftJoin('cfg_init_bed_type', 'guest_detail.bed_type_code', 'cfg_init_bed_type.code')
            ->leftJoin('cfg_init_room_type as room_type', 'guest_detail.room_type_code', 'room_type.code')
            ->leftJoin('cfg_init_room_rate as room_rate', 'guest_detail.room_rate_code', 'room_rate.code')
            ->leftJoin('guest_group', 'folio.group_code', 'guest_group.code')
            ->leftJoinSub($subFolio, 'SubFolio', function($query){
                $query->on('folio.number', 'SubFolio.folio_number');
            })
            ->where('folio.reservation_number','<',0)
            ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
        $query = Folio::select(
            DB::raw('DATE(guest_detail.arrival) AS date_arrival'),
            DB::raw('DATE(guest_detail.departure) AS date_departure'),
            DB::raw('TIME(guest_detail.arrival) AS time_arrival'),
            DB::raw('TIME(guest_detail.departure) AS time_departure'),
            DB::raw('SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN IFNULL(sub_folio.amount, 0) ELSE -IFNULL(sub_folio.amount, 0) END) AS balance'),
            DB::raw('IFNULL(folio.reservation_number,0) as reservation_number'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS FullName'),
            DB::raw('TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
            DB::raw('CONCAT(room_type.name, " ", IFNULL(cfg_init_bed_type.name, "")) AS RoomType'),
            'guest_detail.room_number AS room_number',
            'guest_detail.bill_instruction',
            'guest_detail.weekday_rate',
            'guest_detail.weekend_rate',
            'room_type.name AS room_type',
            'folio.number AS folio_number',
            'folio.is_lock AS is_lock',
            'folio.is_incognito',
            'folio.compliment_hu',
            'room_rate.name AS room_rate',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_group.name as guest_group',
            'folio.voucher_number_ta',
            'folio.voucher_number',
            'folio.hk_note',
            'folio.notes',
            'folio.insert_by AS insert_by',
            'folio.user_id as user_id',
            'company.name as company',
            'cfg_init_market.name as market',
            'cfg_init_guest_type.name as guest_type',
            'const_folio_status.name as folio_status',
            'reservation.reservation_by',
            'cfg_init_nationality.name as nationality',
            'cfg_init_bed_type.name as bed_type'
            )
            ->leftJoin('guest_detail','folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_market','guest_detail.market_code', 'cfg_init_market.code')
            ->leftJoin('cfg_init_room','guest_detail.room_number', 'cfg_init_room.number')
            ->leftJoin('reservation','folio.reservation_number', 'reservation.number')
            ->leftJoin('contact_person','folio.contact_person_id', 'contact_person.id')
            ->leftJoin('cfg_init_country', 'contact_person.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state', 'contact_person.state_code','cfg_init_state.code')
            ->leftJoin('cfg_init_nationality', 'contact_person.nationality_code', 'cfg_init_nationality.code')
            ->leftJoin('company' ,'contact_person.company_code', 'company.code')
            ->leftJoin('const_folio_type' ,'folio.type_code', 'const_folio_type.code')
            ->leftJoin('const_folio_status' ,'folio.status_code', 'const_folio_status.code')
            ->leftJoin('cfg_init_guest_type', 'contact_person.guest_type_code', 'cfg_init_guest_type.code')
            ->leftJoin('cfg_init_bed_type', 'guest_detail.bed_type_code', 'cfg_init_bed_type.code')
            ->leftJoin('cfg_init_room_type as room_type', 'guest_detail.room_type_code', 'room_type.code')
            ->leftJoin('cfg_init_room_rate as room_rate', 'guest_detail.room_rate_code', 'room_rate.code')
            ->leftJoin('guest_group', 'folio.group_code', 'guest_group.code')
            ->leftJoin('sub_folio', function($query){
                $query->on('folio.number', 'sub_folio.folio_number')
                    ->where('sub_folio.void','0')
                    ->where('sub_folio.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode']);
            })
            ->groupBy('folio.number')
            ->orderBy('guest_detail.room_number')
            // ->where('folio.reservation_number','<',0)
            ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);

            if($checkedIn == 'true'){
                $query->orWhere('folio.reservation_number','<>',0)
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                    if(!empty($searchBy)){
                        $query->whereRaw($searchBy.' like "%'.$keyword.'%"');
                    }

                $totalBalance->orWhere('folio.reservation_number','<>',0)
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                    if(!empty($searchBy)){
                        $totalBalance->whereRaw($searchBy.' like "%'.$keyword.'%"');
                    }
            }
            if($walkedIn == 'true'){
                $query->orWhere('folio.reservation_number',0)
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                    if(!empty($searchBy)){
                        $query->whereRaw($searchBy.' like "%'.$keyword.'%"');
                    }

                $totalBalance->orWhere('folio.reservation_number',0)
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                    if(!empty($searchBy)){
                        $totalBalance->whereRaw($searchBy.' like "%'.$keyword.'%"');
                    }
            }
            if($departure == 'true' && $checkedIn == 'false' && $walkedIn == 'false'){
                $query->orWhereDate('departure', AuditDateController::index())
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                if(!empty($searchBy)){
                    $query->whereRaw($searchBy.' like "%'.$keyword.'%"');
                }

                $totalBalance->orWhereDate('departure', AuditDateController::index())
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                if(!empty($searchBy)){
                    $totalBalance->whereRaw($searchBy.' like "%'.$keyword.'%"');
                }
            } else if($departure == 'true' && $checkedIn == 'false'){
                $query->orWhereDate('departure', AuditDateController::index())
                    ->where('folio.reservation_number',0)
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                if(!empty($searchBy)){
                    $query->whereRaw($searchBy.' like "%'.$keyword.'%"');
                }

                $totalBalance->orWhereDate('departure', AuditDateController::index())
                    ->where('folio.reservation_number',0)
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                if(!empty($searchBy)){
                    $totalBalance->whereRaw($searchBy.' like "%'.$keyword.'%"');
                }
            } else if ($departure == 'true' && $walkedIn == 'false'){
                $query->orWhereDate('departure', AuditDateController::index())
                    ->where('folio.reservation_number','<>',0)
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                if(!empty($searchBy)){
                    $query->whereRaw($searchBy.' like "%'.$keyword.'%"');
                }

                $totalBalance->orWhereDate('departure', AuditDateController::index())
                    ->where('folio.reservation_number','<>',0)
                    ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio']);
                if(!empty($searchBy)){
                    $totalBalance->whereRaw($searchBy.' like "%'.$keyword.'%"');
                }
            }

        return response()->json([
            'data' => $query->limit($limit)->get(),
            'total' => $totalBalance->limit($limit)->get()
        ]);
    }

    public function store(Request $request){
        if(HelperController::isRoomBlockedNow($request['room_number'])){ //Chek room block
            return 5;
        } else if (HelperController::isRoomOccupiedNow($request['room_number'])){ //Check Room Still Ready & not Occupied
            return 4;
        }
        else if(FormatController::formatDate($request['arrival']) !== FormatController::formatDate(AuditLogController::auditDate())){ //check Arrival = Audit Date
            return 3;
        }
        else if(FormatController::formatDate($request['departure']) < FormatController::formatDate($request['arrival'])){ //Check If Arrival > Departure Date
            return 2;
        }
        if(!HelperController::isRoomReadyNow($request['room_number'])){
            return 6; //Room ready
        }
        else if (!HelperController::isRoomAvailable($request['room_number'], $request['arrival'], $request['departure'], 0, 0, 0, 0, true, false)){
            return 1;
        }
        else {
            FolioController::store($request, GlobalVariableController::$folioType['GuestFolio'], GlobalVariableController::$system['CakrasoftHotelSystem'], GlobalVariableController::$mode['Insert']);
            return 0;
        }
    }

    public function edit($id){
        $query = FolioController::edit($id);
        return response()->json($query);
    }

    public function update(Request $request){
        $auditDate =  AuditLogController::auditDate();
        if(FormatController::formatDate($request['arrival']) > $auditDate){
            return 2;
        }
        else if(FormatController::formatDate($request['departure']) <= FormatController::formatDate($request['arrival'])){
            return 3;
        }
        else if(!HelperController::isRoomAvailable($request['room_number'], $auditDate, $request['departure'], 0, $request['folio_number'], 0, 0, false, false)){
            return 1;
        }
        else{
            FolioController::store($request,null,null, GlobalVariableController::$mode['Update']);
            return 0;
        }
    }

    public function guestDetailTransaction(){

    }

    public function checkOut(Request $request){
        //Return
        // 0 = success
        // 1 = Folio not balance
        // 2 = Cek Folio jika masih digunakan untuk transfer otomatis
        $balance = ProcedureQueryController::getFolioBalance($request['number']);
        if($balance !== FormatController::round3(0)){
            return response()->json([
                'value' => 1,
                'message' => ''
            ]);
        }
        else {
            $folioTransferMessage = ProcedureQueryController::checkFolioReceiveTransfer($request['number']);
            if ($folioTransferMessage <> ''){
                return response()->json([
                    'value' => 2,
                    'message' => $folioTransferMessage.' '
                ]);
            }

            ProcedureQueryController:: deleteFolioRouting($request['number'], $request['user_id']);
            $timeServer = ProcedureQueryController::getTimeServer();
            $auditDate = AuditLogController::auditDate();
            $departure = FormatController::replaceTime($auditDate, $timeServer);
            ProcedureQueryController::checkOut($request['number'], $departure, $request['user_id']);


            $folioType = ProcedureQueryController::getFolioType($request['number']);
            if($folioType === GlobalVariableController::$folioType['GuestFolio']){
                $queryDB = DB::table('folio')
                    ->select('reservation_number', 'room_number')
                    ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                    ->where('number', $request['number'])
                    ->first();

                $reservationNumber = HelperController::ifNullInt($queryDB->reservation_number);
                $roomNumber = $queryDB->room_number;
                if($reservationNumber > 0){
                    ProcedureQueryController::updateReservationStatus($reservationNumber, GlobalVariableController::$reservationStatus['CheckOut'], $request['user_id']);
                }
                ProcedureQueryController::updateRoomStatus($roomNumber, GlobalVariableController::$roomStatus['Dirty'], $request['user_id']);
                $logParams = ['actionId' => GlobalVariableController::$logUserAction['DirtyRoom'], 'link1' => $roomNumber, 'link3' => 'SYSTEM', 'remark' => 'Check Out', 'userid' => $request['user_id']];
                ProcedureQueryController::insertLogUserX($logParams);
            }

            return response()->json([
                'value' => 0,
                'message' => $folioTransferMessage
            ]);
        }
    }

    public function complimentHu(Request $request){
        $params=$request->all();
        $compHu= HelperController::ifNull(Arr::get($params,'compliment_hu',''));
        DB::select(
            'CALL update_folio_compliment_hu(?,?,?)',[
                $request['number'], $compHu, $request['user_id']
            ]);

        $actionId = 0;
        if ($compHu === GlobalVariableController::$roomStatus['Compliment']){
            $actionId = GlobalVariableController::$logUserAction['ComplimentGuest'];
        }
        else if ($compHu === GlobalVariableController::$roomStatus['HouseUse']){
            $actionId = GlobalVariableController::$logUserAction['HouseUseGuest'];
        }
        else if ($compHu === ''){
            $actionId = GlobalVariableController::$logUserAction['DefaultGuest'];
        }

        if($actionId !== 0){
            $logParams = ['actionId' => $actionId, 'link1' => $request['number'], 'remark' => $params['reason'], 'userid' => $params['userBy']];
            ProcedureQueryController::insertLogUserX($logParams);
        }

        return $params;
}

    public function moveRoom(Request $request){
        //0 = success
        //1 = Room Occupied
        //2 = Room blocked
        //3 = Room not Ready
        //4 = Data Changed/Unknomn
        //5 = Room not Available

        if(HelperController::isRoomOccupiedNow($request->new_room_number)){
            return 1;
        }
        else if(HelperController::isRoomBlockedNow($request->new_room_number)){
            return 2;
        }
        else if(!HelperController::isRoomReadyNow($request->new_room_number)){
            return 3;
        }
        else {
            $queryDB = DB::table('guest_detail')->select('departure')->where('id', $request->guest_detail_id)->first();
            if($queryDB){
                if(!HelperController::isRoomAvailable($request->new_room_number, $this->auditDate, $queryDB->departure, 0, 0, 0, 0, true, false)){
                    return 5;
                }
                else{
                    ProcedureQueryController::updateFolioMoveRoom($request->new_room_number, $request->room_type_code, $request->bed_type_code, $request->room_rate_code, $request->weekday_rate, $request->weekend_rate, $request->guest_detail_id, $request->user_id);
                    ProcedureQueryController::updateRoomStatus($request->new_room_number, GlobalVariableController::$roomStatus['Clean'], $request->user_id);

                    if($request->room_rate_code != $request->old_room_rate_code){
                        //delete package sebelumnya
                        ProcedureQueryController::deleteGuestBreakdownByFolio($request->folio_number, $request->user_id);
                        //Salin Package Dari Room Rate
                        ProcedureQueryController::insertGuestBreakdown($request->folio_number, $request->room_rate_code, $request->user_id);
                    }

                    //Update room status old
                    ProcedureQueryController::updateRoomStatus($request->old_room_number, $request->room_status, $request->user_id);

                    //insert log user change status room old
                    $actionId = 0;
                    if($request->room_status === GlobalVariableController::$roomStatus['Ready']){
                        $actionId = GlobalVariableController::$logUserAction['ReadyRoom'];
                    }
                    else if($request->room_status === GlobalVariableController::$roomStatus['Clean']){
                        $actionId = GlobalVariableController::$logUserAction['CleanRoom'];
                    }
                    else if($request->room_status === GlobalVariableController::$roomStatus['Dirty']){
                        $actionId = GlobalVariableController::$logUserAction['DirtyRoom'];
                    }
                    if($actionId !== 0){
                        $logParams = ['actionId' => $actionId, 'link1' => $request->old_room_number, 'link3' => 'Move Room', 'remark' => $request->user_id, 'userid' => $request->user_id];
                        ProcedureQueryController::insertLogUserX($logParams);
                    }

                    //log User move room
                    $logParams = ['actionId' => GlobalVariableController::$logUserAction['MoveRoom'], 'link1' => $request['folio_number'], 'link2' => $request['old_room_number'], 'link3'=>$request['new_room_number'], 'remark' => $request['reason'], 'userid' => $request['userBy']];
                    ProcedureQueryController::insertLogUserX($logParams);

                    return 0;
                }
            }
            else{
                return 4;
            }
        }
    }

    public function listSwitchRoom(Request $request){
        $mainTableName = 'folio';
        $query1 = folio::select(
            $mainTableName.'.number AS folio_number_from',
            $mainTableName.'.guest_detail_id AS guest_detail_id_from',
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name_from'),
            'guest_detail.room_number AS room_number_from',
            'guest_detail.room_rate_code AS room_rate_code_from',
            'guest_detail.weekday_rate AS weekday_rate_from',
            'guest_detail.weekend_rate AS weekend_rate_from',
            'guest_detail.arrival',
            'guest_detail.departure',
            'guest_detail.room_type_code as room_type_code_from',
            'guest_detail.bed_type_code as bed_type_code_from',
            DB::raw('CONCAT(cfg_init_room_type.name, " ", cfg_init_bed_type.name) AS room_type_from'),
            'cfg_init_room_rate.name as room_rate_from'
        )
        ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
        ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
        ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
        ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
        ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
        ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
        ->where('folio.number',$request['number']);
        $query2= folio::select(
            $mainTableName.'.number AS folio_number_to',
            $mainTableName.'.guest_detail_id AS guest_detail_id_to',
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name_to'),
            'guest_detail.room_number AS room_number_to',
            'guest_detail.room_rate_code AS room_rate_code_to',
            'guest_detail.weekday_rate AS weekday_rate_to',
            'guest_detail.weekend_rate AS weekend_rate_to',
            'guest_detail.room_type_code as room_type_code_to',
            'guest_detail.bed_type_code as bed_type_code_to',
            DB::raw('CONCAT(cfg_init_room_type.name, " ", cfg_init_bed_type.name) AS room_type_to'),
            'cfg_init_room_rate.name AS room_rate_to'
        )
        ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
        ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
        ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
        ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
        ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
        ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
        ->where($mainTableName.'.status_code',GlobalVariableController::$folioStatus['Open'])
        ->where($mainTableName.'.type_code',GlobalVariableController::$folioType['GuestFolio'])
        ->where($mainTableName.'.number','!=',$request['number'])
        ->whereDate('guest_detail.arrival',FormatController::formatDate($query1->first()->arrival))
        ->whereDate('guest_detail.departure',FormatController::formatDate($query1->first()->departure))
        ->orderBy('guest_detail.room_number');

        return response()->json([
            'from' => $query1->first(),
            'to' => $query2->get()
            ]);
    }

    public function switchRoom(Request $request){
        DB::select(
            'CALL update_folio_switch_room(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $request['room_number_from'], $request['room_type_code_from'], $request['bed_type_code_from'], $request['room_rate_code_from'], $request['weekday_rate_from'], $request['weekend_rate_from'], $request['guest_detail_id_from'],
                $request['room_number_to'], $request['room_type_code_to'], $request['bed_type_code_to'], $request['room_rate_code_to'], $request['weekday_rate_to'], $request['weekend_rate_to'], $request['guest_detail_id_to'],
                $request['user_id']
            ]);

        //log User
        $logParams = ['actionId' => GlobalVariableController::$logUserAction['SwitchRoom'], 'link1' => $request['folio_number_from'], 'link2' => $request['room_number_from'], 'link3'=>$request['room_number_to'], 'userid' => $request['user_id']];
        ProcedureQueryController::insertLogUserX($logParams);
    }

    public function lockFolio(Request $request){
        DB::select(
            'CALL update_folio_lock(?,?,?)',[
                $request['number'], $request['is_lock'], $request['user_id']
            ]);
    }

    public function setIncognito(Request $request){
        DB::select(
            'CALL update_folio_incognito(?,?,?)',[
                $request['number'], $request['is_incognito'], $request['user_id']
            ]);
    }

    public function cancelCheckIn(Request $request){
        $params = $request->all();
        //return
        //1=Arrival <> Audit Date
        //2=Cek Transaksi yang sudah ada payment AP, Recon
        //3=Cek Folio jika masih digunakan untuk transfer otomatis
        //4=Cek Transaksi transfer dari folio lain

        if(FormatController::formatDate($request['arrival']) !== FormatController::formatDate(AuditLogController::auditDate())){
            return response()->json([
                'value' => 1,
                'transferMessage' => ''
            ]);
        }
        else if (!ProcedureQueryController::isCanCancelCheckInFolio($request['number'])){
            return response()->json([
                'value' => 2,
                'transferMessage' => ''
            ]);
        }
        else{
            $folioTransferMessage = ProcedureQueryController::checkFolioReceiveTransfer($request['number']);
            if($folioTransferMessage !== ''){
                return response()->json([
                    'value' => 3,
                    'transferMessage' => $folioTransferMessage
                ]);
            }

            $folioHaveTransferMessage = ProcedureQueryController::checkFolioHaveTransactionFromOtherFolio($request['number']);
            if($folioHaveTransferMessage !== ''){
                return response()->json([
                    'value' => 4,
                    'transferMessage' => $folioHaveTransferMessage
                ]);
            }
            //Void Semua Sub Folio termasuk yg sudah tertransfer
            ProcedureQueryController::voidSubFolioByFolioNumber($request['number'], $request['user_by'], $request['reason'], $request['user_id']);

            //Cancel Check In Folio
            ProcedureQueryController::deleteFolioRouting($request['number'], $request['user_id']);
            $auditDate = AuditLogController::auditDate();
            $timeServer = ProcedureQueryController::getTimeServer();
            $departure = FormatController::replaceTime($auditDate, $timeServer);
            $departureRes = $request['departure'];

            ProcedureQueryController::deleteGuestInHouse($auditDate, $request['number'], $request['user_id']);
            ProcedureQueryController::cancelCheckInFolio($request['number'], $departure, $request['user_by'], $request['user_id']);

            //Reservation Cancel Check In
            $reservationNumber =  intval(HelperController::ifNullInt(Arr::get($params, 'reservation_number', 0)));
            if ($reservationNumber > 0){
                ProcedureQueryController::updateReservationCancelCheckIn($reservationNumber, $departureRes, $request['user_id']);
            }

            //log User
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['CancelCheckIn'], 'link1' => $request['number'], 'remark' => $request['reason'],  'userid' => $request['user_by']];
            ProcedureQueryController::insertLogUserX($logParams);

            return response()->json([
                'value' => 0,
                'transferMessage' => ''
            ]);
        }
    }

    public function message(Request $request){
        DB::select(
            'CALL update_guest_message(?,?,?,?,?)',[
                $request['id_log'], $request['title'], $request['body'], $request['reminder_date'], $request['user_id']
            ]);
    }

    public function toDo(Request $request){
        DB::select(
            'CALL update_guest_to_do(?,?,?,?)',[
                $request['id_log'], $request['description'], $request['reminder_date'], $request['user_id']
            ]);
    }

    public function postingRoomCharge(Request $request){
        $params = $request->all();
        $subFolioGroupCode= Arr::get($params,'sub_folio','A');
        $folioNumber= Arr::get($params,'folio_number','');
        $allowZeroAmount= Arr::get($params,'allow_zero_amount',GlobalVariableController::allowZeroAmount());
        $currencyCode= Arr::get($params,'currency_code', HelperController::getDefaultCurrency());
        $exchangeRate= Arr::get($params,'exchange_rate', HelperController::getExchangeRateCurrency($currencyCode));
        $auditDate = AuditLogController::auditDate();
        $userId = Arr::get($params, 'user_id', '');
        $subFolioID = '';
        $isRoomChargeAlreadyPosted = HelperController::isRoomChargeAlreadyPosted($folioNumber);
        $isStayOfDate = HelperController::isStayOfDate($folioNumber, FormatController::formatDate($auditDate));
        if($isStayOfDate){
            if(!$isRoomChargeAlreadyPosted){
                $folio = Folio::select(
                        'folio.group_code',
                        'folio.currency_code',
                        'folio.exchange_rate',
                        'folio.marketing_code',
                        'folio.voucher_number',
                        'folio.notes',
                        'folio.compliment_hu',
                        'guest_detail.arrival',
                        'contact_person.title_code',
                        'contact_person.full_name',
                        'contact_person.street',
                        'contact_person.city',
                        'contact_person.city_code',
                        'contact_person.nationality_code',
                        'contact_person.country_code',
                        'contact_person.state_code',
                        'contact_person.postal_code',
                        'contact_person.phone1',
                        'contact_person.phone2',
                        'contact_person.fax',
                        'contact_person.email',
                        'contact_person.website',
                        'contact_person.company_code',
                        'contact_person.guest_type_code',
                        'guest_detail.adult',
                        'guest_detail.child',
                        'guest_detail.room_type_code',
                        'guest_detail.bed_type_code',
                        'guest_detail.room_number',
                        'guest_detail.room_rate_code',
                        'guest_detail.weekday_rate',
                        'guest_detail.weekend_rate',
                        'guest_detail.discount_percent',
                        'guest_detail.discount',
                        'guest_detail.business_source_code',
                        'guest_detail.commission_type_code',
                        'guest_detail.commission_value',
                        'guest_detail.payment_type_code',
                        'guest_detail.market_code',
                        'guest_detail.booking_source_code',
                        'cfg_init_room_rate.tax_and_service_code',
                        'cfg_init_room_rate.charge_frequency_code')
                        ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                        ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                        ->leftJoin('cfg_init_room_rate', 'guest_detail.room_rate_code', 'cfg_init_room_rate.code')
                        ->where('folio.number',$folioNumber)->first();


                if(!empty($folio)){
                    $isBreakfast = HelperController::isHaveBreakfast($folioNumber);
                    $isCanPostRoomCharge = HelperController::isCanPostRoomCharge($folio->charge_frequency_code, $folio->arrival);
                    $complimentHu = $folio->compliment_hu;
                    $isScheduledRate= HelperController::isScheduledRate($folioNumber, $auditDate);
                    if($isScheduledRate){
                        $complimentHu = HelperController::getScheduledRateComplimentHu($folioNumber, $auditDate);
                    }
                    $isActiveVoucher = false;
                    if(!(!$allowZeroAmount && $complimentHu != '')){
                        if($isCanPostRoomCharge){
                            $roomNumber = $folio->room_number;
                            $currencyCode = $folio->currency_code;
                            $exchangeRate= $folio->exchange_rate <= 0 ? 1 : $folio->exchange_rate;
                            if($isScheduledRate){
                                $roomRateCode = HelperController::getScheduledRoomRateCode($folioNumber, $auditDate);
                                if($roomRateCode == ''){
                                    $roomRateCode = $folio->room_rate_code;
                                    $roomRateTaxServiceCode = $folio->tax_and_service_code;
                                } else {
                                    $roomRateTaxServiceCode= HelperController::getRoomRateTaxAndServiceCode($roomRateCode);
                                }
                                $roomChargeWithBreakdown= HelperController::getScheduledRoomRate($folioNumber, $auditDate);
                                $roomRateAmount = $roomChargeWithBreakdown;

                                $roomRateAmountOriginal = HelperController::getRoomRate($roomRateCode, $auditDate, $folio->adult, $folio->child, false);
                                $complimentHu = HelperController::getScheduledRateComplimentHu($folioNumber, $auditDate);
                                $discount = 0;
                            } else {
                                $roomRateCode = $folio->room_rate_code;
                                $roomRateTaxServiceCode = $folio->tax_and_service_code;
                                if(HelperController::isWeekend($auditDate)){
                                    $roomChargeWithBreakdown = $folio->weekend_rate;
                                } else {
                                    $roomChargeWithBreakdown = $folio->weekday_rate;
                                }

                                $roomRateAmount = $roomChargeWithBreakdown;
                                $roomRateAmountOriginal = HelperController::getRoomRate($roomRateCode, $auditDate, $folio->adult, $folio->child, false);
                                $complimentHu = $folio->compliment_hu;

                                if($isActiveVoucher){

                                } else {
                                    if(HelperController::variant($folio->discount_percent)){
                                        $discount = round(($roomChargeWithBreakdown * $folio->discount / 100),3);
                                    } else {
                                        $discount = $folio->discount;
                                    }
                                }

                                if(!GlobalVariableController::postDiscount()){
                                    $roomChargeWithBreakdown = $roomChargeWithBreakdown - $discount;
                                    $discount = 0;
                                }
                            }
                            if($complimentHu != '' && $roomChargeWithBreakdown > 0){
                                if($allowZeroAmount){
                            //POST ROOM CHARGE
                                    $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
                                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                                    ProcedureQueryController::insertSubFolio2($folioNumber, $subFolioGroupCode, $roomNumber, GlobalVariableController::globalSubDepartment(GlobalVariableController::$configurationName['SDFrontOffice']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),
                                        GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), '', '',
                                        $currencyCode, 'Auto Room Charge', '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, GlobalVariableController::$postingType['Room'], 0, 0, 0, 0, $exchangeRate, $allowZeroAmount, True, $subFolioID, $userId);

                                    if(HelperController::isInHousePosted($auditDate, $folioNumber, $userId)){
                                        ProcedureQueryController::deleteGuestInHouse($auditDate, $folioNumber, $userId);
                                    }

                                    ProcedureQueryController::insertGuestInHouse($auditDate, $folioNumber, $folio->group_code, $folio->room_type_code, $folio->bed_type_code, $folio->room_number, $roomRateCode, $folio->business_source_code, $folio->commission_type_code, $folio->payment_type_code, $folio->market_code, $folio->booking_source_code, $folio->title_code,
                                        $folio->full_name, $folio->street, $folio->city, $folio->city_code, $folio->nationality_code, $folio->country_code, $folio->state_code, $folio->postal_code, $folio->phone1, $folio->phone2, $folio->fax, $folio->email, $folio->website, $folio->company_code, $folio->guest_type_code, $folio->marketing_code, $complimentHu, $folio->notes,
                                        $folio->adult, $folio->child, 0, 0, 0, $folio->commission_value, HelperController::variant($folio->discount_percent), False, $isScheduledRate, $isBreakfast, $userId);

                                    return response()->json('sukses');
                                } else {
                                    return 4;
                                }
                            } else {
                                $roomChargeWithBreakdown = HelperController::getBasicTaxService(GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), $roomRateTaxServiceCode, $roomChargeWithBreakdown);
                                $roomChargeWithBreakdown = $roomChargeWithBreakdown['total'];
                                $totalBreakdown= 0;
                                if($isScheduledRate){
                                    $roomRateBreakdown= DB::table('cfg_init_room_rate_breakdown')->select(
                                        'cfg_init_room_rate_breakdown.outlet_code',
                                        'cfg_init_room_rate_breakdown.product_code',
                                        'cfg_init_room_rate_breakdown.sub_department_code',
                                        'cfg_init_room_rate_breakdown.account_code',
                                        'cfg_init_room_rate_breakdown.company_code',
                                        'cfg_init_room_rate_breakdown.quantity',
                                        'cfg_init_room_rate_breakdown.is_amount_percent',
                                        'cfg_init_room_rate_breakdown.amount',
                                        'cfg_init_room_rate_breakdown.per_pax',
                                        'cfg_init_room_rate_breakdown.include_child',
                                        'cfg_init_room_rate_breakdown.remark',
                                        'cfg_init_room_rate_breakdown.tax_and_service_code',
                                        'cfg_init_room_rate_breakdown.charge_frequency_code',
                                        'cfg_init_room_rate_breakdown.max_pax',
                                        'cfg_init_room_rate_breakdown.extra_pax',
                                        'cfg_init_room_rate_breakdown.per_pax_extra',
                                        'cfg_init_room_rate_breakdown.user_id',
                                        'cfg_init_room_rate_breakdown.id_log'
                                        )
                                        ->where('cfg_init_room_rate_breakdown.room_rate_code', $roomRateCode)->first();
                                } else {
                                    $roomRateBreakdown = Db::table('guest_breakdown')->select(
                                        'guest_breakdown.outlet_code',
                                        'guest_breakdown.product_code',
                                        'guest_breakdown.sub_department_code',
                                        'guest_breakdown.account_code',
                                        'guest_breakdown.company_code',
                                        'guest_breakdown.quantity',
                                        'guest_breakdown.is_amount_percent',
                                        'guest_breakdown.amount',
                                        'guest_breakdown.per_pax',
                                        'guest_breakdown.include_child',
                                        'guest_breakdown.remark',
                                        'guest_breakdown.tax_and_service_code',
                                        'guest_breakdown.charge_frequency_code',
                                        'guest_breakdown.max_pax',
                                        'guest_breakdown.extra_pax',
                                        'guest_breakdown.per_pax_extra',
                                        'guest_breakdown.user_id',
                                        'guest_breakdown.id_log'
                                        )
                                        ->where('folio_number', $folioNumber)->first();
                                }
                                if(!empty($roomRateBreakdown)){
                                    if(HelperController::isCanPostRoomCharge($roomRateBreakdown->charge_frequency_code, $folio->date_arrival)){
                                        if(HelperController::variant($roomRateBreakdown->is_amount_percent)){
                                            $breakdownAmount= HelperController::getTotalBreakdownAmount($roomRateBreakdown->quantity, $roomChargeWithBreakdown * $roomRateBreakdown->amount / 100,$roomRateBreakdown->extra_pax, HelperController::variant($roomRateBreakdown->per_pax),
                                                HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $roomRateBreakdown->max_pax, $folio->adult, $folio->child ) / $exchangeRate;
                                        } else {
                                            $breakdownAmount = HelperController::getTotalBreakdownAmount($roomRateBreakdown->quantity,$roomRateBreakdown->amount , $roomRateBreakdown->extra_pax, HelperController::variant($roomRateBreakdown->per_pax),
                                                HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $roomRateBreakdown->max_pax, $folio->adult, $folio->child ) / $exchangeRate;
                                        }
                                        $breakdownAmountTaxService = HelperController::getBasicTaxService($roomRateBreakdown->account_code, $roomRateBreakdown->tax_and_service_code, $breakdownAmount);
                                        $breakdownAmount = $breakdownAmountTaxService['total'];
                                        $totalBreakdown = $totalBreakdown + $breakdownAmount;
                                    }
                                }

                                $businessSourceCode = $folio->business_source_code;
                                $commission = 0;
                                $roomChargeBasic = 0;
                                if($businessSourceCode != ''){
                                    $commission = HelperController::getCommission($folio->commission_type_code, $folio->commission_value, $roomChargeWithBreakdown, $roomChargeBasic, $folio->date_arrival) / $exchangeRate;
                                }
                                $roomChargeWithoutBreakdown = $roomChargeWithBreakdown - $totalBreakdown - $commission;

                                if($roomChargeWithoutBreakdown > 0 || $allowZeroAmount && $roomChargeWithoutBreakdown == 0){
                                    $roomChargeWithoutBreakdown = HelperController::getBasicTaxService2(GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), $roomRateTaxServiceCode, $roomChargeWithoutBreakdown);
                                    $roomChargeBasic = $roomChargeWithoutBreakdown['basic'];
                                    $roomChargeTax = $roomChargeWithoutBreakdown['tax'];
                                    $roomChargeService = $roomChargeWithoutBreakdown['service'];

                                    //POST ROOM CHARGE
                                    $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
                                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                                    ProcedureQueryController::insertSubFolio2($folioNumber, $subFolioGroupCode, $roomNumber, GlobalVariableController::globalSubDepartment(GlobalVariableController::$configurationName['SDFrontOffice']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),
                                        GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), '', '',
                                        $currencyCode, 'Auto Room Charge', '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, GlobalVariableController::$postingType['Room'], 0, $roomChargeBasic, $roomChargeTax, $roomChargeService, $exchangeRate, $allowZeroAmount, True, $subFolioID, $userId);

                                    if(HelperController::isInHousePosted($auditDate, $folioNumber, $userId)){
                                        ProcedureQueryController::deleteGuestInHouse($auditDate, $folioNumber, $userId);
                                    }
                                    ProcedureQueryController::insertGuestInHouse($auditDate, $folioNumber, $folio->group_code, $folio->room_type_code, $folio->bed_type_code, $folio->room_number, $roomRateCode, $folio->business_source_code, $folio->commission_type_code, $folio->payment_type_code, $folio->market_code, $folio->booking_source_code,$folio->title_code,
                                        $folio->full_name, $folio->street, $folio->city, $folio->city_code, $folio->nationality_code, $folio->country_code, $folio->state_code, $folio->postal_code, $folio->phone1, $folio->phone2, $folio->fax, $folio->email, $folio->website, $folio->company_code, $folio->guest_type_code, $folio->marketing_code, $complimentHu, $folio->notes,
                                        $folio->adult, $folio->child, $roomRateAmountOriginal, $roomRateAmount, $folio->discount, $folio->commission_value, $folio->commission_value, HelperController::variant($folio->discount_percent), False, $isScheduledRate, $isBreakfast, $userId);
                                    //POST BREAKDOWN
                                    if(!empty($roomRateBreakdown)){
                                        if(HelperController::isCanPostRoomCharge($roomRateBreakdown->charge_frequency_code, $folio->date_arrival)){
                                            if(HelperController::variant($roomRateBreakdown->is_amount_percent)){
                                                $breakdownAmount= HelperController::getTotalBreakdownAmount($roomRateBreakdown->quantity, $roomChargeWithBreakdown * $roomRateBreakdown->amount / 100,$roomRateBreakdown->extra_pax, HelperController::variant($roomRateBreakdown->per_pax),
                                                    HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $roomRateBreakdown->max_pax, $folio->adult, $folio->child ) / $exchangeRate;
                                            } else {
                                                $breakdownAmount = HelperController::getTotalBreakdownAmount($roomRateBreakdown->quantity,$roomRateBreakdown->amount , $roomRateBreakdown->extra_pax, HelperController::variant($roomRateBreakdown->per_pax),
                                                    HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $roomRateBreakdown->max_pax, $folio->adult, $folio->child ) / $exchangeRate;
                                            }

                                            ProcedureQueryController::insertSubFolio1($folioNumber, $subFolioGroupCode, $roomNumber, $roomRateBreakdown->sub_department_code, $roomRateBreakdown->account_code, GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),
                                                $roomRateBreakdown->product_code, '', $currencyCode, 'Breakdown: ' .$roomRateBreakdown->remark, '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, $roomRateBreakdown->company_code,
                                                GlobalVariableController::$postingType['Room'], $roomRateBreakdown->tax_and_service_code, $roomRateBreakdown->id_log, 1, $breakdownAmount, $exchangeRate, False, True, $subFolioID, $userId);
                                            ProcedureQueryController::insertGuestInHouseBreakdown($auditDate, $folioNumber, $roomRateBreakdown->outlet_code, $roomRateBreakdown->product_code, $roomRateBreakdown->sub_department_code,
                                                $roomRateBreakdown->account_code, $roomRateBreakdown->remark, $roomRateBreakdown->tax_and_service_code, $roomRateBreakdown->charge_frequency_code, $roomRateBreakdown->quantity, $roomRateBreakdown->amount,
                                                $roomRateBreakdown->extra_pax, $roomRateBreakdown->max_pax, HelperController::variant($roomRateBreakdown->per_pax), HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $userId);
                                        }
                                    }
                                    //POST COMMISSION
                                    if($commission > 0){
                                        ProcedureQueryController::insertSubFolio1($folioNumber, $subFolioGroupCode, $roomNumber, GlobalVariableController::globalSubDepartment(GlobalVariableController::$configurationName['SDFrontOffice']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountAPCommission']),  GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),
                                            '', '', $currencyCode, 'Breakdown Commission', '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, $businessSourceCode, GlobalVariableController::$postingType['Room'], '', 0, 1, $commission, $exchangeRate, False, True, $subFolioID, $userId);
                                    }
                                    return 0;
                                } else {
                                    return 1;
                                }
                            }
                        } else {
                            return 3;
                        }
                    } else {
                        return 2;
                    }
                }
            } else {
                return 5;
            }
        } else {
            return 6;
        }
    }

    public function logUserUpdateGuestInHouse(Request $request){
        $dataB4 = $request['dataB4'];
        $dataAfter = $request['dataAfter'];
        $userId = $request['userId'];
        $folioNumber = $dataAfter['number'];

        //Arrival
        $arrivalB4 = Arr::get($dataB4, 'arrival', '');
        $arrivalAfter = Arr::get($dataAfter, 'arrival', '');
        if($arrivalB4 !== $arrivalAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIArrival'], 'link1' => $folioNumber, 'link2' => $arrivalB4, 'link3' => $arrivalAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Night
        $nightB4 = Arr::get($dataB4, 'night', 0);
        $nightAfter = $request['nightAfter'];
        if($nightB4 !== $nightAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSINights'], 'link1' => $folioNumber, 'link2' => $nightB4, 'link3' => $nightAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Departure
        $departureB4 = Arr::get($dataB4, 'departure', '');
        $departureAfter = Arr::get($dataAfter, 'departure', '');
        if($departureB4 !== $departureAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIDeparture'], 'link1' => $folioNumber, 'link2' => $departureB4, 'link3' => $departureAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Adult
        $adultB4 = Arr::get($dataB4, 'adult', '');
        $adultAfter = Arr::get($dataAfter, 'adult', '');
        if($adultB4 !== $adultAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIAdult'], 'link1' => $folioNumber, 'link2' => $adultB4, 'link3' => $adultAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Child
        $childB4 = Arr::get($dataB4, 'child', '');
        $childAfter = Arr::get($dataAfter, 'child', '');
        if($childB4 !== $childAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIChild'], 'link1' => $folioNumber, 'link2' => $childB4, 'link3' => $childAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Room Type
        $roomTypeCodeB4 = Arr::get($dataB4, 'room_type_code', '');
        $roomTypeCodeAfter = Arr::get($dataAfter, 'room_type_code', '');
        if($roomTypeCodeB4 !== $roomTypeCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIRoomType'], 'link1' => $folioNumber, 'link2' => $roomTypeCodeB4, 'link3' => $roomTypeCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Room
        $roomNumberB4 = Arr::get($dataB4, 'room_number', '');
        $roomNumberAfter = Arr::get($dataAfter, 'room_number', '');
        if($roomNumberB4 !== $roomNumberAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIRoom'], 'link1' => $folioNumber, 'link2' => $roomNumberB4, 'link3' => $roomNumberAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Room Rate
        $roomRateCodeB4 = Arr::get($dataB4, 'room_rate_code', '');
        $roomRateCodeAfter = Arr::get($dataAfter, 'room_rate_code', '');
        if($roomRateCodeB4 !== $roomRateCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIRoomRate'], 'link1' => $folioNumber, 'link2' => $roomRateCodeB4, 'link3' => $roomRateCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Business Source
        $businessSourceCodeB4 = Arr::get($dataB4, 'business_source_code', '');
        $businessSourceCodeAfter = Arr::get($dataAfter, 'business_source_code', '');
        if($businessSourceCodeB4 !== $businessSourceCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIBusinessSource'], 'link1' => $folioNumber, 'link2' => $businessSourceCodeB4, 'link3' => $businessSourceCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Commission Type
        $commissionTypeCodeB4 = Arr::get($dataB4, 'commission_type_code', '');
        $commissionTypeCodeAfter = Arr::get($dataAfter, 'commission_type_code', '');
        if($commissionTypeCodeB4 !== $commissionTypeCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSICommissionType'], 'link1' => $folioNumber, 'link2' => $commissionTypeCodeB4, 'link3' => $commissionTypeCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Commission Value
        $commissionValueB4 = Arr::get($dataB4, 'commission_value', '');
        $commissionValueAfter = Arr::get($dataAfter, 'commission_value', '');
        if($commissionValueB4 !== $commissionValueAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSICommissionValue'], 'link1' => $folioNumber, 'link2' => $commissionValueB4, 'link3' => $commissionValueAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Weekday Rate
        $weekdayRateB4 = Arr::get($dataB4, 'weekday_rate', '');
        $weekdayRateAfter = Arr::get($dataAfter, 'weekday_rate', '');
        if($weekdayRateB4 !== $weekdayRateAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIWeekdayRate'], 'link1' => $folioNumber, 'link2' => $weekdayRateB4, 'link3' => $weekdayRateAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Weekend Rate
        $weekendRateB4 = Arr::get($dataB4, 'weekend_rate', '');
        $weekendRateAfter = Arr::get($dataAfter, 'weekend_rate', '');
        if($weekendRateB4 !== $weekendRateAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIWeekendRate'], 'link1' => $folioNumber, 'link2' => $weekendRateB4, 'link3' => $weekendRateAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Discount
        $discountB4 = Arr::get($dataB4, 'discount', '');
        $discountAfter = Arr::get($dataAfter, 'discount', '');
        if($discountB4 !== $discountAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIDiscount'], 'link1' => $folioNumber, 'link2' => $discountB4, 'link3' => $discountAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Payment Type
        $paymentTypeCodeB4 = Arr::get($dataB4, 'payment_type_code', '');
        $paymentTypeCodeAfter = Arr::get($dataAfter, 'payment_type_code', '');
        if($paymentTypeCodeB4 !== $paymentTypeCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIPaymentType'], 'link1' => $folioNumber, 'link2' => $paymentTypeCodeB4, 'link3' => $paymentTypeCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Market
        $marketCodeB4 = Arr::get($dataB4, 'market_code', '');
        $marketCodeAfter = Arr::get($dataAfter, 'market_code', '');
        if($marketCodeB4 !== $marketCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIMarket'], 'link1' => $folioNumber, 'link2' => $marketCodeB4, 'link3' => $marketCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Bill Instruction
        $billInstructionB4 = Arr::get($dataB4, 'bill_instruction', '');
        $billInstructionAfter = Arr::get($dataAfter, 'bill_instruction', '');
        if($billInstructionB4 !== $billInstructionAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIBillInstruction'], 'link1' => $folioNumber, 'link2' => $billInstructionB4, 'link3' => $billInstructionAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Currency
        $currencyCodeB4 = Arr::get($dataB4, 'currency_code', '');
        $currencyCodeAfter = Arr::get($dataAfter, 'currency_code', '');
        if($currencyCodeB4 !== $currencyCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSICurrency'], 'link1' => $folioNumber, 'link2' => $currencyCodeB4, 'link3' => $currencyCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Exchange Rate
        $exchangeRateB4 = Arr::get($dataB4, 'exchange_rate', '');
        $exchangeRateAfter = Arr::get($dataAfter, 'exchange_rate', '');
        if($exchangeRateB4 !== $exchangeRateAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFSIExchangeRate'], 'link1' => $folioNumber, 'link2' => $exchangeRateB4, 'link3' => $exchangeRateAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Title
        $titleB4 = Arr::get($dataB4, 'title_code', '');
        $titleAfter = Arr::get($dataAfter, 'title_code', '');
        if($titleB4 !== $titleAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPITitle'], 'link1' => $folioNumber, 'link2' => $titleB4, 'link3' => $titleAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Full Name
        $fullNameB4 = Arr::get($dataB4, 'full_name', '');
        $fullNameAfter = Arr::get($dataAfter, 'full_name', '');
        if($fullNameB4 !== $fullNameAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIFullName'], 'link1' => $folioNumber, 'link2' => $fullNameB4, 'link3' => $fullNameAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Reservation By
        $reservationByB4 = Arr::get($dataB4, 'reservation_by', '');
        $reservationByAfter = Arr::get($dataAfter, 'reservation_by', '');
        if($reservationByB4 !== $reservationByAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIReservationBy'], 'link1' => $folioNumber, 'link2' => $reservationByB4, 'link3' => $reservationByAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Street
        $streetB4 = Arr::get($dataB4, 'street', '');
        $streetAfter = Arr::get($dataAfter, 'street', '');
        if($streetB4 !== $streetAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIStreet'], 'link1' => $folioNumber, 'link2' => $streetB4, 'link3' => $streetAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //City
        $cityCodeB4 = Arr::get($dataB4, 'city_code', '');
        $cityCodeAfter = Arr::get($dataAfter, 'city_code', '');
        if($cityCodeB4 !== $cityCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPICity'], 'link1' => $folioNumber, 'link2' => $cityCodeB4, 'link3' => $cityCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Country
        $countryCodeB4 = Arr::get($dataB4, 'country_code', '');
        $countryCodeAfter = Arr::get($dataAfter, 'country_code', '');
        if($countryCodeB4 !== $countryCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPICountry'], 'link1' => $folioNumber, 'link2' => $countryCodeB4, 'link3' => $countryCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //State
        $stateCodeB4 = Arr::get($dataB4, 'state_code', '');
        $stateCodeAfter = Arr::get($dataAfter, 'state_code', '');
        if($stateCodeB4 !== $stateCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIState'], 'link1' => $folioNumber, 'link2' => $stateCodeB4, 'link3' => $stateCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //State
        $postCodeB4 = Arr::get($dataB4, 'postal_code', '');
        $postCodeAfter = Arr::get($dataAfter, 'postal_code', '');
        if($postCodeB4 !== $postCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIPostCode'], 'link1' => $folioNumber, 'link2' => $postCodeB4, 'link3' => $postCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Phone1
        $phone1B4 = Arr::get($dataB4, 'phone1', '');
        $phone1After = Arr::get($dataAfter, 'phone1', '');
        if($phone1B4 !== $phone1After){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIPhone1'], 'link1' => $folioNumber, 'link2' => $phone1B4, 'link3' => $phone1After, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Phone2
        $phone2B4 = Arr::get($dataB4, 'phone2', '');
        $phone2After = Arr::get($dataAfter, 'phone2', '');
        if($phone2B4 !== $phone2After){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIPhone2'], 'link1' => $folioNumber, 'link2' => $phone2B4, 'link3' => $phone2After, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Fax
        $faxB4 = Arr::get($dataB4, 'fax', '');
        $faxAfter = Arr::get($dataAfter, 'fax', '');
        if($faxB4 !== $faxAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIFax'], 'link1' => $folioNumber, 'link2' => $faxB4, 'link3' => $faxAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Email
        $emailB4 = Arr::get($dataB4, 'email', '');
        $emailAfter = Arr::get($dataAfter, 'email', '');
        if($emailB4 !== $emailAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIEmail'], 'link1' => $folioNumber, 'link2' => $emailB4, 'link3' => $emailAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Website
        $websiteB4 = Arr::get($dataB4, 'website', '');
        $websiteAfter = Arr::get($dataAfter, 'website', '');
        if($websiteB4 !== $websiteAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIWebsite'], 'link1' => $folioNumber, 'link2' => $websiteB4, 'link3' => $websiteAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Company
        $companyCodeB4 = Arr::get($dataB4, 'company_code', '');
        $companyCodeAfter = Arr::get($dataAfter, 'company_code', '');
        if($companyCodeB4 !== $companyCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPICompany'], 'link1' => $folioNumber, 'link2' => $companyCodeB4, 'link3' => $companyCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Guest Type
        $guestTypeCodeB4 = Arr::get($dataB4, 'guest_type_code', '');
        $guestTypeCodeAfter = Arr::get($dataAfter, 'guest_type_code', '');
        if($guestTypeCodeB4 !== $guestTypeCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIGuestType'], 'link1' => $folioNumber, 'link2' => $guestTypeCodeB4, 'link3' => $guestTypeCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //ID Card
        $idCardCodeB4 = Arr::get($dataB4, 'id_card_code', '');
        $idCardCodeAfter = Arr::get($dataAfter, 'id_card_code', '');
        if($idCardCodeB4 !== $idCardCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIIDCardType'], 'link1' => $folioNumber, 'link2' => $idCardCodeB4, 'link3' => $idCardCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //ID Card Number
        $idCardNumberB4 = Arr::get($dataB4, 'id_card_number', '');
        $idCardNumberAfter = Arr::get($dataAfter, 'id_card_number', '');
        if($idCardNumberB4 !== $idCardNumberAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIIDCardNumber'], 'link1' => $folioNumber, 'link2' => $idCardNumberB4, 'link3' => $idCardNumberAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Birthday Place
        $birthPlaceB4 = Arr::get($dataB4, 'birth_place', '');
        $birthPlaceAfter = Arr::get($dataAfter, 'birth_place', '');
        if($birthPlaceB4 !== $birthPlaceAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIBirthdayPlace'], 'link1' => $folioNumber, 'link2' => $birthPlaceB4, 'link3' => $birthPlaceAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Birth Date
        $birthDateB4 = Arr::get($dataB4, 'birth_date', '');
        $birthDateAfter = Arr::get($dataAfter, 'birth_date', '');
        if($birthDateB4 !== $birthDateAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFPIBirthdate'], 'link1' => $folioNumber, 'link2' => $birthDateB4, 'link3' => $birthDateAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Group
        $groupCodeB4 = Arr::get($dataB4, 'group_code', '');
        $groupCodeAfter = Arr::get($dataAfter, 'group_code', '');
        if($groupCodeB4 !== $groupCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGIGroup'], 'link1' => $folioNumber, 'link2' => $groupCodeB4, 'link3' => $groupCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Document Number
        $documentNumberB4 = Arr::get($dataB4, 'document_number', '');
        $documentNumberAfter = Arr::get($dataAfter, 'document_number', '');
        if($documentNumberB4 !== $documentNumberAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGIDocumentNumber'], 'link1' => $folioNumber, 'link2' => $documentNumberB4, 'link3' => $documentNumberAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Flight Number
        $flightNumberB4 = Arr::get($dataB4, 'flight_number', '');
        $flightNumberAfter = Arr::get($dataAfter, 'flight_number', '');
        if($flightNumberB4 !== $flightNumberAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGIFlightNumber'], 'link1' => $folioNumber, 'link2' => $flightNumberB4, 'link3' => $flightNumberAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Flight Arrival
        $flightArrivalB4 = Arr::get($dataB4, 'flight_arrival', '');
        $flightArrivalAfter = Arr::get($dataAfter, 'flight_arrival', '');
        if($flightArrivalB4 !== $flightArrivalAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGIFlightArrival'], 'link1' => $folioNumber, 'link2' => $flightArrivalB4, 'link3' => $flightArrivalAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Flight Departure
        $flightDepartureB4 = Arr::get($dataB4, 'flight_departure', '');
        $flightDepartureAfter = Arr::get($dataAfter, 'flight_departure', '');
        if($flightDepartureB4 !== $flightDepartureAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGIFlightDeparture'], 'link1' => $folioNumber, 'link2' => $flightDepartureB4, 'link3' => $flightDepartureAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Notes
        $notesB4 = Arr::get($dataB4, 'notes', '');
        $notesAfter = Arr::get($dataAfter, 'notes', '');
        if($notesB4 !== $notesAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGINotes'], 'link1' => $folioNumber, 'link2' => $notesB4, 'link3' => $notesAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //HK Notes
        $hkNoteB4 = Arr::get($dataB4, 'hk_note', '');
        $hkNoteAfter = Arr::get($dataAfter, 'hk_note', '');
        if($hkNoteB4 !== $hkNoteAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGIHKNotes'], 'link1' => $folioNumber, 'link2' => $hkNoteB4, 'link3' => $hkNoteAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Marketing
        $marketingB4 = Arr::get($dataB4, 'marketing_code', '');
        $marketingAfter = Arr::get($dataAfter, 'marketing_code', '');
        if($marketingB4 !== $marketingAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGIMarketing'], 'link1' => $folioNumber, 'link2' => $marketingB4, 'link3' => $marketingAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Voucher Number TA
        $voucherNumberTAB4 = Arr::get($dataB4, 'voucher_number_ta', '');
        $voucherNumberTAAfter = Arr::get($dataAfter, 'voucher_number_ta', '');
        if($voucherNumberTAB4 !== $voucherNumberTAAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UFGITAVoucherNumber'], 'link1' => $folioNumber, 'link2' => $voucherNumberTAB4, 'link3' => $voucherNumberTAAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }

        return response()->json([
            'status' => 0
        ]);
    }

}
