<?php

namespace App\Http\Controllers\Transactions;

use App\Http\Controllers\Controller;
use App\ReservationScheduleRate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ScheduledRateController extends Controller
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

    public function store(Request $request)
    {
        DB::select(
            'CALL insert_reservation_scheduled_rate(?,?,?,?,?,?,?)',[
                $request['reservation_number'], $request['from_date'], $request['to_date'], $request['room_rate_code'], $request['rate'], HelperController::ifNull($request['compliment_hu']), $request['user_id']
            ]
            );
    }

    public function delete(Request $request)
    {
        DB::select(
            'CALL delete_reservation_scheduled_rate(?,?)',[
                $request['id_log'], $request['user_id']
            ]
            );
    }

    public function edit($id)
    {
        $edit = ReservationScheduleRate ::find($id);
        return response()->json($edit);
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
