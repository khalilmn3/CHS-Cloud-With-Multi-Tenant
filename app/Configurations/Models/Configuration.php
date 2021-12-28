<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
    protected $table = 'configuration';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;
}
