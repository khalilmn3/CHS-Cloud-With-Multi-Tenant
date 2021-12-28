<?php

namespace App\Reservations\Models;

use Illuminate\Database\Eloquent\Model;

class ReservationExtraCharge extends Model
{
    protected $table = 'reservation_extra_charge';
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
