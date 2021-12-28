<?php

namespace App\Tools\UserSetting;

use Illuminate\Database\Eloquent\Model;

class UserGroup extends Model
{
    protected $table = 'user_group';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
