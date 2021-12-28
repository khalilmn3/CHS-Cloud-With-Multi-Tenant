<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;

class ClientProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(){
        if($this->app->runningInConsole()){
            return;
        }

        // if($request->getHttpHost() == 'tenant1.app.com'){

        // if(Auth::check()){
            DB::purge('client');
            config(['database.connections.client.database' => 'db_cakrasoft_hotel_system_cloud']);

            DB::purge('client');

            DB::reconnect('client');
        //  }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
