<?php

namespace App\Reservations\Models;

use Illuminate\Database\Eloquent\Model;

class ReservationScheduledRate extends Model
{
    protected $table = 'reservation_scheduled_rate';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;
}
