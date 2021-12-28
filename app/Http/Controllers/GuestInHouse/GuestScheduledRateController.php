<?php

namespace App\Http\Controllers\GuestInHouse;

use App\Folio\Models\Folio;
use App\Http\Controllers\Controller;
use App\Http\Controllers\HelperController;
use App\GuestScheduledRate;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GuestScheduledRateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = DB::table('guest_scheduled_rate')
            ->select(
                'cfg_init_room_rate.name as room_rate',
                'guest_scheduled_rate.*',
                DB::raw('(CASE WHEN guest_scheduled_rate.compliment_hu = "P" THEN "Compliment" WHEN guest_scheduled_rate.compliment_hu = "H" THEN "House Use" ELSE "" END) as ComplimentHu')
                )
                ->where('folio_number', $request['number'])
                ->leftJoin('cfg_init_room_rate','guest_scheduled_rate.room_rate_code','cfg_init_room_rate.code')
                ->orderBy('from_date','ASC')
                ->get();

        return response()->json($query);
    }

    public function store(Request $request)
    {
        $checkConflictData = GuestScheduledRate::select('from_date','to_date')
            ->whereDate('to_date','>=',$request['from_date'])->whereDate('to_date','<=', $request['to_date'])
            ->where('folio_number',$request['number'])
            ->orWhereDate('from_date','=',$request['from_date'])->whereDate('to_date', $request['to_date'])
            ->where('folio_number',$request['number'])
            ->orWhereDate('from_date','>=',$request['from_date'])->whereDate('from_date','<=', $request['to_date'])
            ->where('folio_number',$request['number'])
            ->orWhereDate('from_date','<=',$request['from_date'])->whereDate('to_date','>=', $request['to_date'])
            ->where('folio_number',$request['number'])
            ->first();

        $folio= Folio::select(DB::raw('DATE(guest_detail.arrival) as arrival'),DB::raw('DATE(guest_detail.departure) as departure'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->where('number',$request['number'])
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->first();
        if(!empty($folio)){
            if($request['from_date'] >= $folio->arrival && $request['to_date'] < $folio->departure ){
                if($checkConflictData == null){
                    ProcedureQueryController::insertGuestScheduledRate($request['number'], $request['from_date'], $request['to_date'], $request['room_rate_code'], $request['rate'], HelperController::ifNull($request['compliment_hu']), $request['user_id']);

                    return 0;
                }else{
                    return 1;
                }
            }else{
                return 2;
            }
        }else{
            return 3;
        }
    }

    public function delete(Request $request)
    {
        ProcedureQueryController::deleteGuestScheduledRate($request['id_log'], $request['user_id']);
    }

    public function edit($id)
    {
        $edit = GuestScheduledRate::find($id);
        return response()->json($edit);
    }

    public function update(Request $request, $id)
    {
        $checkConflictData = GuestScheduledRate::select('from_date','to_date')
            ->whereDate('to_date','>=',$request['from_date'])->whereDate('to_date','<=', $request['to_date'])->where('folio_number',$request['number'])
            ->where('id_log','!=',$request['id_log'])
            ->orWhereDate('from_date','=',$request['from_date'])->whereDate('to_date', $request['to_date'])->where('folio_number',$request['number'])
            ->where('id_log','!=',$request['id_log'])
            ->orWhereDate('from_date','>=',$request['from_date'])->whereDate('from_date','<=', $request['to_date'])
            ->where('folio_number',$request['number'])
            ->where('id_log','!=',$request['id_log'])
            ->orWhereDate('from_date','<=',$request['from_date'])->whereDate('to_date','>=', $request['to_date'])
            ->where('folio_number',$request['number'])
            ->where('id_log','!=',$request['id_log'])
            ->first();
        $folio= Folio::select(DB::raw('DATE(guest_detail.arrival) as arrival'),DB::raw('DATE(guest_detail.departure) as departure'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->where('number',$request['number'])
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->first();
        if(!empty($folio)){
            if($request['from_date'] >= $folio->arrival && $request['to_date'] < $folio->departure ){
                if($checkConflictData == null){
                    ProcedureQueryController::updateGuestScheduledRate($request['id_log'], $request['from_date'], $request['to_date'], $request['room_rate_code'], $request['rate'], HelperController::ifNull($request['compliment_hu']), $request['user_id']);

                    return 0;
                }else{
                    return 1;
                }
            }else{
                return 2;
            }
        }else{
            return 3;
        }
    }

    public function destroy($id)
    {
        //
    }
}
