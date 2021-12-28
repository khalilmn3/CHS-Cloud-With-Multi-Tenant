<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    protected $table = 'cfg_init_owner';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
