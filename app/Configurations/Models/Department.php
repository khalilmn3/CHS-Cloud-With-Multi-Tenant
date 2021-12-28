<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = "cfg_init_department";
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
