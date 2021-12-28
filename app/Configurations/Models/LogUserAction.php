<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class LogUserAction extends Model
{
    protected $table = 'log_user_action';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
