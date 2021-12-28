<?php

namespace App\Http\Controllers\Folio;

use App\Folio\Models\Folio;
use App\Http\Controllers\AuditDateController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Folio\FolioController;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\HelperController;
use App\Reservation;

class MasterFolioController extends Controller
{
    public function index(Request $request){
        $folioType = GlobalVariableController::$folioType['MasterFolio'];
        $folioStatus = GlobalVariableController::$folioStatus['Open'];
        $query = FolioController::index($request, $folioType, $folioStatus);

        return response()->json($query);
    }

    public function store(Request $request){
        FolioController::store($request, GlobalVariableController::$folioType['MasterFolio'], GlobalVariableController::$system['CakrasoftHotelSystem'],GlobalVariableController::$mode['Insert']);
    }

    public function update(Request $request){
        $auditDate =  AuditLogController::auditDate();
        if(FormatController::formatDate($request['arrival']) > $auditDate){
            return 2;
        }
        else if(FormatController::formatDate($request['departure']) <= FormatController::formatDate($request['arrival'])){
            return 3;
        }
        else{
            FolioController::store($request,null,null, GlobalVariableController::$mode['Update']);
            return 0;
        }
    }

    public function edit($id){
        return FolioController::edit($id);
    }

    public function createMasterFolioGroup(Request $request){
        $params=$request->all();
        $night= Arr::get($params,'night',1);
        $query = Reservation::select('contact_person.full_name', 'guest_group.code as group_code')
            ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
            ->leftJoin('guest_group','reservation.group_code','guest_group.code')
            ->where('reservation.number', $request['reservation_number'])->first();

        $isFolioGroupExist = Folio::select('number')->where('group_code',$query->group_code)->first();
            if(!empty($query)){
                $request['full_name'] = $query->full_name;
                $request['reservation_number'] = '';
                $request['group_code'] = $query->group_code;
                $request['arrival'] = AuditLogController::auditDate();
                $request['departure'] = FormatController::incDay(AuditLogController::auditDate(), $night);
                FolioController::store($request, GlobalVariableController::$folioType['MasterFolio'], GlobalVariableController::$system['CakrasoftHotelSystem'],GlobalVariableController::$mode['Insert']);

            }
            $folio = Folio::select('number')->where('user_id',$request['user_id'])->orderBy('number','DESC')->first();
            return response()->json($folio->number);
    }

    public function isMasterFolioExist(Request $request){
        $params=$request->all();
        $query = Reservation::select('guest_group.code as group_code')
            ->leftJoin('guest_group','reservation.group_code','guest_group.code')
            ->where('reservation.number', $request['reservation_number'])
            ->first();

        $isMasterFolioGroupExist = Folio::select('number')->where('group_code',$query->group_code)->where('type_code',GlobalVariableController::$folioType['MasterFolio'])->where('status_code',GlobalVariableController::$folioStatus['Open'])->first();

        return response()->json(!empty($isMasterFolioGroupExist));
    }

    public function getMasterFolioGroup(Request $request){
        $params=$request->all();
        $group= Arr::get($params,'group','');
        if(!empty($group)){
            $query = Folio::select('number')
                ->where('group_code',$group)
                ->where('type_code', GlobalVariableController::$folioType['MasterFolio'])
                ->where('status_code',GlobalVariableController::$folioStatus['Open'])
                ->orderBy('number','DESC')
                ->first();
            if(!empty($query)){
                return response()->json($query->number);
            }
        }
    }
}
