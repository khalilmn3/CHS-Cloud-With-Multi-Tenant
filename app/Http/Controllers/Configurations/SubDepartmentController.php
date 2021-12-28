<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\SubDepartment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubDepartmentController extends Controller
{
    public static function index(Request $request){
        $query = SubDepartment::select('name','code')->get();

        return response()->json($query);
    }
}
