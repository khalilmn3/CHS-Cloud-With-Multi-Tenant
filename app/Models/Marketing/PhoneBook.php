<?php

namespace App\Models\Marketing;

use Illuminate\Database\Eloquent\Model;

class PhoneBook extends Model
{
    protected $table = 'phone_book';
    protected $primaryKey = 'id_log';
    protected $keyType = 'integer';
    public $timestamps = false;
}
