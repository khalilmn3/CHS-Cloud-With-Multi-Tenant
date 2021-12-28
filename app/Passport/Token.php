<?php

namespace App\Passport;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\Token as PassportToken;

class Token extends PassportToken
{
    protected $connection = 'master';
}
