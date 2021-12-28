<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class DynamicRateType extends Model
{
    protected $table = 'const_dynamic_rate_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;

}
