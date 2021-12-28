<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class CompetitorCategory extends Model
{
    protected $table = 'cfg_init_competitor_category';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
