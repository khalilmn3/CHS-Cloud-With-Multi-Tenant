<?php

namespace App\Http\Controllers\Reservations;

use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use App\Reservation;
use App\ReservationScheduleRate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationScheduledRateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $dataGrid = DB::table('reservation_scheduled_rate')->select(
            'cfg_init_room_rate.name as room_rate',
            'reservation_scheduled_rate.*',
            DB::raw('(CASE WHEN reservation_scheduled_rate.compliment_hu = "P" THEN "Compliment" WHEN reservation_scheduled_rate.compliment_hu = "H" THEN "House Use" ELSE "" END) as compliment_hu')
            )
            ->where('reservation_number',$request['number'])
            ->leftJoin('cfg_init_room_rate','reservation_scheduled_rate.room_rate_code','cfg_init_room_rate.code')
            ->orderBy('from_date','ASC')
            ->get();
        return response()->json($dataGrid);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $checkConflictData = ReservationScheduleRate::select('from_date','to_date')
            ->whereDate('to_date','>=',$request['from_date'])->whereDate('to_date','<=', $request['to_date'])
            ->where('reservation_number',$request['number'])
            ->orWhereDate('from_date','=',$request['from_date'])->whereDate('to_date', $request['to_date'])
            ->where('reservation_number',$request['number'])
            ->orWhereDate('from_date','>=',$request['from_date'])->whereDate('from_date','<=', $request['to_date'])
            ->where('reservation_number',$request['number'])
            ->orWhereDate('from_date','<=',$request['from_date'])->whereDate('to_date','>=', $request['to_date'])
            ->where('reservation_number',$request['number'])
            ->first();
        $status = 'error';
        $reservation= Reservation::select(DB::raw('DATE(guest_detail.arrival) as arrival'),DB::raw('DATE(guest_detail.departure) as departure'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->where('number',$request['number'])
            ->whereIn('reservation.status_code',[GlobalVariableController::$reservationStatus['New'],GlobalVariableController::$reservationStatus['WaitList']])
            ->first();
        if(!empty($reservation)){
            if($request['from_date'] >= $reservation->arrival && $request['to_date'] < $reservation->departure ){
                if($checkConflictData == null){
                    ProcedureQueryController::insertReservationScheduledRate($request['number'], $request['from_date'], $request['to_date'], $request['room_rate_code'], $request['rate'], HelperController::ifNull($request['compliment_hu']), $request['user_id']);
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        ProcedureQueryController::deleteReservationScheduledRate($request['id_log'], $request['user_id']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = ReservationScheduleRate::find($id);
        return response()->json($edit);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $checkConflictData = ReservationScheduleRate::select('from_date','to_date')
            ->whereDate('to_date','>=',$request['from_date'])->whereDate('to_date','<=', $request['to_date'])
            ->where('reservation_number',$request['number'])
            ->where('id_log','!=',$request['id_log'])
            ->orWhereDate('from_date','=',$request['from_date'])->whereDate('to_date', $request['to_date'])
            ->where('reservation_number',$request['number'])
            ->where('id_log','!=',$request['id_log'])
            ->orWhereDate('from_date','>=',$request['from_date'])->whereDate('from_date','<=', $request['to_date'])
            ->where('reservation_number',$request['number'])
            ->where('id_log','!=',$request['id_log'])
            ->orWhereDate('from_date','<=',$request['from_date'])->whereDate('to_date','>=', $request['to_date'])
            ->where('reservation_number',$request['number'])
            ->where('id_log','!=',$request['id_log'])
            ->first();
        $reservation= Reservation::select(DB::raw('DATE(guest_detail.arrival) as arrival'),DB::raw('DATE(guest_detail.departure) as departure'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->where('number',$request['number'])
            ->whereIn('reservation.status_code',[GlobalVariableController::$reservationStatus['New'],GlobalVariableController::$reservationStatus['WaitList']])
            ->first();
        if(!empty($reservation)){
            if($request['from_date'] >= $reservation->arrival && $request['to_date'] < $reservation->departure ){
                if($checkConflictData == null){
                    ProcedureQueryController::updateReservationScheduledRate($request['id_log'], $request['from_date'], $request['to_date'], $request['room_rate_code'], $request['rate'], HelperController::ifNull($request['compliment_hu']), $request['user_id']);

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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
