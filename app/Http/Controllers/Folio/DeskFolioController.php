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

class DeskFolioController extends Controller
{
    public function index(Request $request){
        $folioType = GlobalVariableController::$folioType['DeskFolio'];
        $folioStatus = GlobalVariableController::$folioStatus['Open'];
        $query = FolioController::index($request, $folioType, $folioStatus);

        return response()->json($query);
    }

    public function update(Request $request){
        return 0;
    }

    public function edit($id){
        return FolioController::edit($id);
    }


    // public function update(Request $request){
    //     $auditDate =  AuditLogController::auditDate();
    //     if(FormatController::formatDate($request['arrival']) > $auditDate){
    //         return 2;
    //     }
    //     else if(FormatController::formatDate($request['departure']) <= FormatController::formatDate($request['arrival'])){
    //         return 3;
    //     }
    //     else{
    //         FolioController::store($request,null,null, GlobalVariableController::$mode['Update']);
    //         return 0;
    //     }
    // }

    public function store(Request $request){
        FolioController::store($request, GlobalVariableController::$folioType['DeskFolio'], GlobalVariableController::$system['CakrasoftHotelSystem'],GlobalVariableController::$mode['Insert']);
    }

}
