<?php

namespace App\Folio\Models;

use Illuminate\Database\Eloquent\Model;

class SubFolio extends Model
{
    protected $table = 'sub_folio';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;
    protected $guarded = [];
}
