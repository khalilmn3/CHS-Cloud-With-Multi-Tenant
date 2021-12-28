<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReservationScheduleRate extends Model
{
    protected $table = 'reservation_scheduled_rate';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;

    public function getComplimentHuAttribute($value)
    {
        return $value == '' ? ' ' : $value;
    }

}
