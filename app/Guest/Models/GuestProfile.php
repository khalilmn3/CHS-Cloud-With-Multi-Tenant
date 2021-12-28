<?php

namespace App\Guest\Models;

use Illuminate\Database\Eloquent\Model;

class GuestProfile extends Model
{
    protected $table = 'guest_profile';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;
    protected $guarded = [];

}
