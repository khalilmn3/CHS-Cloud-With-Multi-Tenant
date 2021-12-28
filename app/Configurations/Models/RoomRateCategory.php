<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomRateCategory extends Model
{
    protected $table = 'cfg_init_room_rate_category';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
