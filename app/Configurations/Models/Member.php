<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $table = 'member';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
