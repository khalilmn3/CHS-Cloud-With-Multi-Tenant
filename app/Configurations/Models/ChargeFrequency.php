<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class ChargeFrequency extends Model
{
    protected $table = 'const_charge_frequency';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
