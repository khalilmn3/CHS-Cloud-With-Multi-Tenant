<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class GuestType extends Model
{
    protected $table = 'cfg_init_guest_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
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
}
