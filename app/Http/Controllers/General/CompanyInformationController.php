<?php

namespace App\Http\Controllers\General;

use App\General\CompanyInformation;
use App\General\Models\AuditLog;
use App\Http\Controllers\Controller;
use App\Http\Controllers\HelperController;
use Illuminate\Http\Request;

class CompanyInformationController extends Controller
{
    public Function HotelInformation(){
        $query= HelperController::getCompanyProfile();

        return response()->json($query);
    }
}
