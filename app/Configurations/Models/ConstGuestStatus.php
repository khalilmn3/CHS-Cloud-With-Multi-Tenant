<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class ConstGuestStatus extends Model
{
    protected $table = 'const_guest_status';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
