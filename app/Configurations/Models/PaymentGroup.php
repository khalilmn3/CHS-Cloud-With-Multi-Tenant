<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentGroup extends Model
{
    protected $table = 'const_payment_group';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
