<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class ReportPageController extends Controller
{
    public function __invoke()
    {
        return view('report');
        // return view('testpage');
    }
}
