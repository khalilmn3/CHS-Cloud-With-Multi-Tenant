<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyType extends Model
{
    protected $table = "cfg_init_company_type";
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
