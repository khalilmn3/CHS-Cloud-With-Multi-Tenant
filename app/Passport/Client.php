<?php

namespace App\Passport;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\Client as PassportClient;

class Client extends PassportClient
{
    protected $connection = 'master';
}
