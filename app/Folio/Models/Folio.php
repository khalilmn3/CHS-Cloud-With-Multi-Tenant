<?php

namespace App\Folio\Models;

use Illuminate\Database\Eloquent\Model;

class Folio extends Model
{
    protected $table = 'folio';
    protected $primaryKey = 'number';
    protected $keyType = 'integer';
    public $timestamps = false;
    protected $guarded = [];

    public function getIsIncognitoAttribute($value)
    {
        if($value == '0' || $value == 0){
            $value = false;
        } else if($value == '-1' || $value == -1){
            $value = true;
        } else if($value){
            $value = '-1';
        } else if(!$value){
            $value = '0';
        }
        return $value;
    }

    public function getShowNotesAttribute($value)
    {
        if($value == '0' || $value == 0){
            $value = false;
        } else if($value == '-1' || $value == -1){
            $value = true;
        } else if($value){
            $value = '-1';
        } else if(!$value){
            $value = '0';
        }
        return $value;
    }
}
