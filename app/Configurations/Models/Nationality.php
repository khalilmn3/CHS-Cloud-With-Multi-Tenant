<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Nationality extends Model
{
    protected $table = 'cfg_init_nationality';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
