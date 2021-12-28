<?php

namespace App\Providers;

use Laravel\Passport\Passport;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Passport::ignoreMigrations();
        Passport::routes(null, ['middleware' => [
            'universal', 
            InitializeTenancyByDomain::class
        ]]);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Passport::loadKeysFrom(base_path(config('passport.key_path')));
        // $registrar = new \App\Custom\Routing\ResourceRegistrar($this->app['router']);

        // $this->app->bind('Illuminate\Routing\ResourceRegistrar', function () use ($registrar) {
        //     return $registrar;
        // });
    }
}
