<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class SubDepartment extends Model
{
    protected $table = 'cfg_init_sub_department';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
