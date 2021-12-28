<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class IDCardType extends Model
{
    protected $table = 'cfg_init_id_card_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
