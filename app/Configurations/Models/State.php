<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $table = 'cfg_init_state';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
