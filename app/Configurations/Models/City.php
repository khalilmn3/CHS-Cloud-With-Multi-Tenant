<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = 'cfg_init_city';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
