<?php

namespace App\GuestInHouse\Models;

use Illuminate\Database\Eloquent\Model;

class GuestExtraCharge extends Model
{
    protected $table = 'guest_extra_charge';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;

    public function getPerPaxAttribute($value)
    {
        return $value == '0' ? false : true;
    }
    public function getIncludeChildAttribute($value)
    {
        return $value == '0' ? false : true;
    }
    public function getPerPaxExtraAttribute($value)
    {
        return $value == '0' ? false : true;
    }
}
