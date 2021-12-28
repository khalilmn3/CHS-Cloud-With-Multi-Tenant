<?php

namespace App\Guest\Models;

use Illuminate\Database\Eloquent\Model;

class GuestDeposit extends Model
{
    protected $table = 'guest_deposit';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;
    protected $guarded = [];

    public function getIsCorrectionAttribute($value)
    {
        return $value == '-1' ? true : false;
    }

    public function getVoidAttribute($value)
    {
        return $value == '-1' ? true : false;
    }
}
