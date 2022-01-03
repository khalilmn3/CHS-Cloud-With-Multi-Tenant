<?php

Route::redirect('/', 'dashboard');
// /**
//  * App Routes
//  */
Route::middleware(['auth','is_verify_email'])->group(function () {
    Route::get('/dashboard', \App\Http\Livewire\Dashboard::class);
    Route::get('/profile', \App\Http\Livewire\Profile::class);
    Route::get('/logout', function(){
        Auth::logout();
        return redirect()->intended('/');
    });
});

/**
 * Authentication
 */
Route::middleware('guest')->group(function () {
    Route::get('/login', \App\Http\Livewire\Auth\Login::class)->name('auth.login');
    Route::get('/register', \App\Http\Livewire\Auth\Register::class)->name('auth.register');
});

Route::middleware('is_domain_ready')->group(function(){
    Route::get('/progress', \App\Http\Livewire\Progress::class);
});


Route::get('account/verify/{token}', [\App\Http\Livewire\Auth\Register::class, 'verifyAccount'])->name('user.verify');
