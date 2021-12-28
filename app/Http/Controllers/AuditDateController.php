<?php

namespace App\Http\Controllers;

use App\General\Models\AuditLog;
use Illuminate\Http\Request;

class AuditDateController extends Controller
{
    public static function index(){
        $auditDate = AuditLog::select('audit_date')->orderBy('id','DESC')->first()->audit_date;

        return $auditDate;
    }
}
