<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Continent extends Model
{
    protected $table = 'cfg_init_continent';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
