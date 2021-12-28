<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class CardType extends Model
{
    protected $table = 'cfg_init_card_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
