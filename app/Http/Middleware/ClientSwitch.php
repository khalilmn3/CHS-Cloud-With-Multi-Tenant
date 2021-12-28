<?php

namespace App\Http\Middleware;

use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class ClientSwitch
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if(Auth::check()){
            $db_client = 'chs_client1';
        // } else {
        //     $db_client = '';
        // }
           //line added
        Config::set('database.connections.client.database', $db_client);

        DB::purge('client');
        DB::reconnect('client');                   //line added

        return $next($request);
    }
}
