<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class VoucherReason extends Model
{
    protected $table = 'cfg_init_voucher_reason';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
