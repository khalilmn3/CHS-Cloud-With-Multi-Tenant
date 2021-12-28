<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Marketing extends Model
{
    protected $table = 'cfg_init_marketing';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
