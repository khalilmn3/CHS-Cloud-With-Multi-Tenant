<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class PhoneBookType extends Model
{
    protected $table = 'cfg_init_phone_book_type';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
