<?php

namespace App\Http\Controllers\General;

use App\General\Models\ShiftLog;
use App\Http\Controllers\Controller;
use App\Http\Controllers\HelperController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShiftLogController extends Controller
{
    public function workingShift(){
        $wShift= DB::table('working_shift')->get();

        return response()->json($wShift);
    }

    public function openShift(Request $request){
        $shift= HelperController::getShiftUserID($request['user_id']);
        return response()->json($shift);
    }

}
