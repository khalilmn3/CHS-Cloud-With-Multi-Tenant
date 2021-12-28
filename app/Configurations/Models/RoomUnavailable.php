<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomUnavailable extends Model
{
    protected $table = 'room_unavailable';
    protected $primaryKey = 'room_number';
    protected $keyType = 'string';
    public $timestamps = false;
}
