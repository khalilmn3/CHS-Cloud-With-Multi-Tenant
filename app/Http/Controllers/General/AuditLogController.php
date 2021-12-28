<?php

namespace App\Http\Controllers\General;

use App\General\Models\AuditLog;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuditLogController extends Controller
{
    public static function index(){
        $query= AuditLog::orderBy('id','DESC')->first()->audit_date;

        return response()->json($query);
    }

    public static function auditDate(){
        $query= AuditLog::orderBy('id','DESC')->first()->audit_date;

        return $query;
    }
}
