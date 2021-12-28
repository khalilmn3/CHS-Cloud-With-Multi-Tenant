<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{
    protected $table = 'cfg_init_room_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
