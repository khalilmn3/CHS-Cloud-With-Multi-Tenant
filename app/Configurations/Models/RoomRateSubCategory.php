<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomRateSubCategory extends Model
{
    protected $table = 'cfg_init_room_rate_sub_category';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
