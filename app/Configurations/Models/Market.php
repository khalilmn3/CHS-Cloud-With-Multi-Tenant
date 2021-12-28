<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Market extends Model
{
    protected $table = 'cfg_init_market';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
