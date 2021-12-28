<?php

namespace App\Guest\Models;

use Illuminate\Database\Eloquent\Model;

class GuestDetail extends Model
{
    protected $table = 'guest_detail';
    protected $primaryKey = 'id';
    protected $keyType = 'integer';
    public $timestamps = false;
    protected $guarded = [];
}
