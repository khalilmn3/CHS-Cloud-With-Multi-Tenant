<?php

namespace App\Http\Controllers\ServerDS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfigurationController extends Controller
{
    public static function uri(){
        $uri = 'http://25.8.6.106:8093/dschs/api/Tsvrmethod/';

        return $uri;
    }
}
