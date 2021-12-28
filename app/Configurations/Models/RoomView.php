<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomView extends Model
{
    protected $table = 'cfg_init_room_view';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
