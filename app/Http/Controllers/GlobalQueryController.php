<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GlobalQueryController extends Controller
{
   public static function inHouseBreakdown(){
       $query= DB ::table('guest_breakdown')->all();
   }
}
