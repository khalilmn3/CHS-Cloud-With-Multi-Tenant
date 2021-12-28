<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'cfg_init_country';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
