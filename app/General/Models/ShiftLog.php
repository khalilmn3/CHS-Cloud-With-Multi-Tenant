<?php

namespace App\General\Models;

use Illuminate\Database\Eloquent\Model;

class ShiftLog extends Model
{
    protected $table = 'log_shift';
    protected $primaryKey = 'id';
    protected $keyType = 'integer';
    public $timestamps = false;
    protected $guarded = [];
}
