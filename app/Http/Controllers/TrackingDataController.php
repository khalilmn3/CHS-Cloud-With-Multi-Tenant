<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Configurations\Models\Log;

class TrackingDataController extends Controller
{

    protected $mainTableName = 'log';

    public function dataAgGrid(Request $request)
    {

        $idLog = $request->id_log;
        $tableName = $request->table;
        
        if(is_numeric($tableName)){
            $tableName = GlobalVariableController::$tableName[$tableName];
        }

        $query = Log::select(
            'id',
            'id_table',
            'table_name_log',
            'user_id',
            'log_date',
            'data_query',
            'log_mode.name AS mode'
        )
            ->join('log_mode', $this->mainTableName . '.mode', 'log_mode.code')
            ->where('id_table', $idLog)
            ->where('table_name_log', $tableName)
            ->get();

        return response()->json([
            'modelGrid' => $query
        ]);
    }
}
