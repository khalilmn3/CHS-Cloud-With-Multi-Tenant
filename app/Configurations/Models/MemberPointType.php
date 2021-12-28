<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class MemberPointType extends Model
{
    protected $table = 'cfg_init_member_point_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
