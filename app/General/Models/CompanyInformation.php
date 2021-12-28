<?php

namespace App\General\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyInformation extends Model
{
    protected $table = 'hotel_information';
    // protected $primaryKey = 'code';
    public $timestamps = false;
    protected $guarded = ['code','name','city','street'];
}
