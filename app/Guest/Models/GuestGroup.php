<?php

namespace App\Guest\Models;

use Illuminate\Database\Eloquent\Model;

class GuestGroup extends Model
{
    protected $table = 'guest_group';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
    protected $guarded = [];
}
