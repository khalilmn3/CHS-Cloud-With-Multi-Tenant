<?php

namespace App\Guest\Models;

use Illuminate\Database\Eloquent\Model;

class ContactPerson extends Model
{
    protected $table = 'contact_person';
    protected $primaryKey = 'id';
    protected $keyType = 'integer';
    public $timestamps = false;
    protected $guarded = [];
}
