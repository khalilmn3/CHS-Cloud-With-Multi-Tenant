<?php

namespace App\Inventory\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'inv_cfg_init_item';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
