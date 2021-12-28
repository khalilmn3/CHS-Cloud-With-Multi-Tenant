<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class MarketCategory extends Model
{
    protected $table = 'cfg_init_market_category';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
