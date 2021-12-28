<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class LoanItem extends Model
{
    protected $table = 'cfg_init_loan_item';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
