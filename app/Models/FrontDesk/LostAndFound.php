<?php

namespace App\Models\FrontDesk;

use Illuminate\Database\Eloquent\Model;

class LostAndFound extends Model
{
    protected $table = 'lost_and_found';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;

    public function getColorAttribute($value){
        $result = dechex($value);
        $def = 6;
        $a = [];
        $initial="#";
        $min = $def - strlen($result);
        for($x =0; $x < $min; $x++ ){
            array_push($a,"0");
        }
        $b= strval(implode($a));
        return "#".$b.$result;
    }

    public function getIsReturnAttribute($value){
        return $value == '-1';
    }

    public function getIsActiveAttribute($value){
        return $value == '-1';
    }

    public function getDateReturnAttribute($value){
        return $value == '0000-00-00' ? '' : $value;
    }
}
