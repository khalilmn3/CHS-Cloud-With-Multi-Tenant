<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomUnavailableReason extends Model
{
    protected $table = 'cfg_init_room_unavailable_reason';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
