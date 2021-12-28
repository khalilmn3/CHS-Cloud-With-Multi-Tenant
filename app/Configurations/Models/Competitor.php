<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Competitor extends Model
{
    protected $table = 'competitor';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
