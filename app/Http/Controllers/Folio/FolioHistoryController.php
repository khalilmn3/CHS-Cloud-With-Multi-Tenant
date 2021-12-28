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
use App\Http\Controllers\ProcedureQueryController;

class FolioHistoryController extends Controller
{
    public function index(Request $request){
        $params = $request->all();
        $folioType = Arr::get($params, 'folioType', []);
        $isShowChancelCheckIn = HelperController::trueFalseString(Arr::get($params, 'cancelCheckIn', true));
        $folioStatus = [GlobalVariableController::$folioStatus['Closed'], $isShowChancelCheckIn ? GlobalVariableController::$folioStatus['CancelCheckIn'] : ''];
        $query = FolioController::index($request, $folioType, $folioStatus);

        return response()->json($query);
    }

    public function edit($id){
        return FolioController::edit($id);
    }

    public function cancelCheckOut(Request $request){
        $params = $request->all();

        $queryDB = Folio::select('reservation_number', 'guest_detail_id', 'folio.type_code', 'status_code','arrival','departure','room_number', 'is_from_allotment')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            // ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            // ->where('folio.system_code',GlobalVariableController::$system['CakrasoftHotelSystem'])
            // ->where('folio.status_code','<>', GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->where('number',$params['folio_number'])
            ->first();

        //Return
        //1 = System code Not CHS
        //2 = folio not guest folio
        //3 = folio not cancel check in
        //4 = folio not close
        //5 = Departure !== Audit Date
        //6 = Room not Available

        $auditDate = AuditLogController::auditDate();
        if($queryDB){
            if($queryDB->type_code !== GlobalVariableController::$folioType['GuestFolio']){
                return 2;
            }
            else if($queryDB->status_code === GlobalVariableController::$folioStatus['CancelCheckIn']){
                return 3;
            }
            else if($queryDB->status_code !== GlobalVariableController::$folioStatus['Closed']){
                return 4;
            }
            else if(FormatController::formatDate($queryDB->departure) !== $auditDate){
                return 5;
            }
            else if (!HelperController::isRoomAvailable($queryDB->room_number, $auditDate, FormatController::incDay($auditDate, 1), 0, 0, 0, 0, false, HelperController::variant($queryDB->is_from_allotment))){
                return 6;
            }
            else{
                //process cancel check out
                $reservationNumberX = HelperController::ifNullInt($queryDB->reservation_number);
                ProcedureQueryController::updateFolioStatusCancelCheckOut($params['folio_number'],$queryDB->guest_detail_id, $params['user_id']);

                if($reservationNumberX > 0){
                    ProcedureQueryController::updateReservationStatus($reservationNumberX, GlobalVariableController::$reservationStatus['InHouse'], $params['user_id']);
                }

                $logParams = ['actionId' => GlobalVariableController::$logUserAction['CancelCheckOut'], 'link1' => $params['folio_number'], 'remark' => $params['reason'], 'userid' => $params['user_by']];
                ProcedureQueryController::insertLogUserX($logParams);

                return 0;
            }
        }
        else{
            return 1;
        }
    }
}
