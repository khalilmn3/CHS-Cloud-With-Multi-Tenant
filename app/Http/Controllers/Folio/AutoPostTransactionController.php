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

class DeskFolioController extends Controller
{
    public function index(Request $request){
        $folioType = GlobalVariableController::$folioType['DeskFolio'];
        $folioStatus = GlobalVariableController::$folioStatus['Open'];
        $query = FolioController::index($request, $folioType, $folioStatus);

        return response()->json($query);
    }

    public function store(Request $request){
        FolioController::store($request, GlobalVariableController::$folioType['DeskFolio'], GlobalVariableController::$system['CakrasoftHotelSystem'],GlobalVariableController::$mode['Insert']);
    }
}
