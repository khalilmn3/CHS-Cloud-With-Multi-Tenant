<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = "company";
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
