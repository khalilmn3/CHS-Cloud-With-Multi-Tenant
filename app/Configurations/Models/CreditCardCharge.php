<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class CreditCardCharge extends Model
{
    protected $table = 'cfg_init_credit_card_charge';
    protected $primaryKey = 'id_log';
    protected $keyType = 'string';
    public $timestamps = false;
}
