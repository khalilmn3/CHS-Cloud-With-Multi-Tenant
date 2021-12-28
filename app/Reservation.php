<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $table = 'reservation';
    protected $primaryKey = 'number';
    protected $keyType = 'integer';
    public $timestamps = false;

    public function getIsIncognitoAttribute($value)
    {
        return $value == '0' ? false : true;
    }

    public function getShowNotesAttribute($value)
    {
        return $value == '0' ? false : true;
    }
}
