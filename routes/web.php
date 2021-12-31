<?php

// use Livewire\Auth\Login;
// use Livewire\Auth\Register;
// use Livewire\Dashboard;
// use Livewire\Profile;


Route::redirect('/', 'dashboard');

// /**
//  * App Routes
//  */
Route::middleware(['auth','is_verify_email'])->group(function () {
    Route::get('/dashboard', \App\Http\Livewire\Dashboard::class);
    Route::get('/profile', \App\Http\Livewire\Profile::class);
});

/**
 * Authentication
 */
Route::middleware('guest')->group(function () {
    Route::get('/login', \App\Http\Livewire\Auth\Login::class)->name('auth.login');
    Route::get('/register', \App\Http\Livewire\Auth\Register::class)->name('auth.register');
});



// Route::get('login', [AuthController::class, 'index'])->name('login');
// Route::post('post-login', [AuthController::class, 'postLogin'])->name('login.post');
// Route::get('registration', [AuthController::class, 'registration'])->name('register');
// Route::post('post-registration', [AuthController::class, 'postRegistration'])->name('register.post');
// Route::get('logout', [AuthController::class, 'logout'])->name('logout');

/* New Added Routes */
// Route::get('dashboard', [AuthController::class, 'dashboard'])->middleware(['auth', 'is_verify_email']);
Route::get('account/verify/{token}', [\App\Http\Livewire\Auth\Register::class, 'verifyAccount'])->name('user.verify');
