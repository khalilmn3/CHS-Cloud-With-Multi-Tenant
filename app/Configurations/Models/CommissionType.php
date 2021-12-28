<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class CommissionType extends Model
{
    protected $table = 'const_commission_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
