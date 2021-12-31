<?php

namespace App\Http\Livewire\Auth;

use App\Models\User;
use App\Models\UserVerify;
use App\Tenant;
use Illuminate\Support\Facades\DB;
use Livewire\Component;
use Illuminate\Support\Facades\Hash;
use Mail;
use Str;

class Register extends Component
{
    public $domain = '';
    public $fullName ='';
    public $company = '';
    public $email = '';
    public $password = '';
    public $passwordConfirmation = '';
    public $createError = '';
    public $subDomain = '';
    public $showModal = false;

    protected $rules = [
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6|same:passwordConfirmation',
        'domain' => 'required|unique:domains',
        'fullName' => 'required',
        'company' => 'required'
    ];

    public function updatedEmail()
    {
        $this->validate(['email' => 'unique:users']);
    }

    public function updatedSubDomain()
    {
        $this->domain = $this->subDomain.'.localhost';
        $this->validate(['domain' => 'unique:domains']);
    }

    public function updatedPasswordConfirmation()
    {
        $this->validate(['passwordConfirmation' => 'same:password']);
    }

    public function register()
    {
        $this->validate();
        $this->postRegistration();
    }

    public function login(){
        session()->flash('message', 'Post successfully updated.');

    }

    public function postRegistration()
    {
        DB::beginTransaction();
        try
        {
            $createUser = User::create([
                'name' => $this->fullName,
                'email' => $this->email,
                'password' => Hash::make($this->password),
            ]);
            $token = Str::random(64);
            UserVerify::create([
                'user_id' => $createUser->id,
                'token' => $token,
            ]);
            // Create tenan/domain
            $tenant = Tenant::create(['id' => $this->subDomain]);
            $tenant->domains()->create(['domain' => $this->domain]);

            Mail::send('email.emailVerification', ['token' => $token], function ($message){
                $message->to($this->email);
                $message->subject('Email Verification Mail');
            });
            DB::commit();

            session()->flash('email', $this->email);
            return redirect()->to('login');

        } catch(\Exception $e){
            DB::rollBack();
            $this->addError('createError', 'Opss, Something is wrong!');
            dd($e);
        }
    }

    public function verifyAccount($token)
    {
        $verifyUser = UserVerify::where('token', $token)->first();
        $message = 'Sorry your email cannot be identified.';
        if (!is_null($verifyUser)) {
            $user = $verifyUser->user;
            if (!$user->is_email_verified) {
                $verifyUser->user->is_email_verified = 1;
                $verifyUser->user->email_verified_at = now();
                $verifyUser->user->save();
                $message = "Your e-mail is verified. You can now login.";
            } else {
                $message = "Your e-mail is already verified. You can now login.";
            }
        }
        return redirect()->route('auth.login')->with('message', $message);
    }

    public function render()
    {
        return view('livewire.auth.register')
            ->layout('layouts.auth');
    }
}
