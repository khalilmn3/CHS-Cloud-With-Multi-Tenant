<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class MemberOutletDiscount extends Model
{
    protected $table = 'pos_cfg_init_member_outlet_discount';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
