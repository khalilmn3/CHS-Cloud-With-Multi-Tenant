<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomRateBreakdown extends Model
{
    protected $table = 'cfg_init_room_rate_breakdown';
    protected $primaryKey = 'id_log';

    public function getPerPaxAttribute($value)
    {
        if($value == 0){
            $value = false;
        }else{
            $value = true;
        }
        return $value;
    }
    public function getPerPaxExtraAttribute($value)
    {
        if($value == 0){
            $value = false;
        }else{
            $value = true;
        }
        return $value;
    }
    public function getIncludeChildAttribute($value)
    {
        if($value == 0){
            $value = false;
        }else{
            $value = true;
        }
        return $value;
    }
}
