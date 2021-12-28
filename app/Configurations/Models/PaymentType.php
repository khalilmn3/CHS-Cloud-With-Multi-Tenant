<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentType extends Model
{
    protected $table = 'cfg_init_payment_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
