<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class CardBank extends Model
{
    protected $table = 'cfg_init_card_bank';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
