<?php
namespace App\Http\Middleware;

use App\Domain;
use App\Providers\AppServiceProvider;
use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class IsDomainReady
{
    /**
    * Handle an incoming request.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \Closure  $next
    * @return mixed
    */
    public function handle(Request $request, Closure $next)
    {
        if(Domain::where('uid',Auth::user()->id)->where('is_ready','1')->first()){
             return redirect(RouteServiceProvider::HOME);
        }
        return $next($request);
    }
}
