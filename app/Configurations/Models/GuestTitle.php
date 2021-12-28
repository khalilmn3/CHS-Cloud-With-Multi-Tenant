<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class GuestTitle extends Model
{
    protected $table = 'cfg_init_title';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
