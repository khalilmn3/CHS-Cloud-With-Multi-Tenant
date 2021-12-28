<?php

namespace App\Http\Middleware;

use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class ClientLogin
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
        $db_client = '';
        if(Auth::check()){
            $db_client = Auth::user()->database;
        } else {
            $decryptPassword = HelperController::decrypt(request('password') ,GlobalVariableController::$cryptoKey);
            if(Auth::attempt(['code' => request('user_id'), 'password' => $decryptPassword])){
                $db_client = Auth::user()->database;
            }
        }

        DB::purge('client');                       //line added
        Config::set('database.connections.client.database', $db_client);

        DB::reconnect('client');                   //line added

        return $next($request);
    }
}
