<?php

namespace App\Passport;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\PersonalAccessClient as PassportPersonalAccessClient;

class PersonalAccessClient extends PassportPersonalAccessClient
{
    protected $connection = 'master';
}
