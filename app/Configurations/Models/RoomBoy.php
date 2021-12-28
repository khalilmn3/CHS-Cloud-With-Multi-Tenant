<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomBoy extends Model
{
    protected $table = 'cfg_init_room_boy';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;

    public function getIsActiveAttribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
}
