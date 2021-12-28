<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    protected $table="cfg_init_currency";
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}