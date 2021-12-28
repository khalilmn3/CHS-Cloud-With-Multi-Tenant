<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table = 'cfg_init_account';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;

    public function getChargePercentAttribute($value)
    {
        return $value == null ? 0 : $value;
    }
}
