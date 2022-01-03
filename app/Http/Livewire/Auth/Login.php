<?php

namespace App\Http\Livewire\Auth;

use App\Domain;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Login extends Component
{
    public $email = '';
    public $password = '';
    public $showModal = true;

    protected $rules = [
        'email' => 'required|email',
        'password' => 'required',
    ];

    public function login()
    {
        $credentials = $this->validate();
        if(auth()->attempt($credentials)){
            // Check if user need to verify email
            if (!Auth::user()->is_email_verified) {
                auth()->logout();
                $this->addError('email', 'You need to confirm your account. We have sent you an activation code, please check your email.');
                $this->password = '';
            } else if(!(Domain::where('uid',Auth::user()->id)->where('is_ready','1'))){
                redirect()->intended('/progress');
            } else {
                redirect()->intended('/');
            }
        } else {
            $this->addError('email', trans('auth.failed'));
        }
    }

    public function render()
    {
        return view('livewire.auth.login')
            ->layout('layouts.auth');
    }
}
