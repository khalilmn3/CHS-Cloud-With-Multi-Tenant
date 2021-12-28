<?php

namespace App\Models\BackOffice;

use Illuminate\Database\Eloquent\Model;

class ARCityLedger extends Model
{
    protected $table = 'lost_and_found';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;

    
}
