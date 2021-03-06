<?php
namespace App\Http\Middleware;

use App\Domain;
use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class IsVerifyEmail
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
        if (!Auth::user()->is_email_verified) {
            auth()->logout();
            return redirect(RouteServiceProvider::HOME)
                ->with('message', 'You need to confirm your account. We have sent you an activation code, please check your email.');
        } else if(!(Domain::where('uid',Auth::user()->id)->where('is_ready','1')->first())){
            return redirect('/progress');
        }

        return $next($request);
    }
}
