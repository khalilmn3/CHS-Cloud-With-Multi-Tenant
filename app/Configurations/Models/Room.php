<?php

namespace App\Configurations\Models;

use App\Http\Controllers\ImageController as convert;
use App\Http\Controllers\ImageController;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Image;

class Room extends Model
{
    protected $table = 'cfg_init_room';
    protected $primaryKey = 'number';
    protected $keyType = 'string';
    public $timestamps = false;
    protected $guarded = [];

    protected $casts = [
        'is_smoking' => 'boolean',
    ];

    public function setStartDateAttribute($value)
    {
        $this->attributes['start_date'] = \Carbon\Carbon::parse($value)->format('Y-m-d');
    }
    public function setIsSmokingAttribute($value)
    {
        if ($value == 'true') {
            $this->attributes['is_smoking'] = '-1';
        } else {
            $this->attributes['is_smoking'] = '0';
        }
    }
    public function setPhoneNumberAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['phone_number'] = ' ';
        } else {
            $this->attributes['phone_number'] = $value;
        }
    }
    public function setViewCodeAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['view_code'] = ' ';
        } else {
            $this->attributes['view_code'] = $value;
        }
    }
    public function setNameAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['name'] = ' ';
        } else {
            $this->attributes['name'] = $value;
        }
    }
    public function setLockNumberAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['lock_number'] = ' ';
        } else {
            $this->attributes['lock_number'] = $value;
        }
    }
    public function setDescriptionAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['description'] = ' ';
        } else {
            $this->attributes['description'] = $value;
        }
    }
    public function setRemarkAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['remark'] = ' ';
        } else {
            $this->attributes['remark'] = $value;
        }
    }

    public function setOwnerCodeAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['owner_code'] = ' ';
        } else {
            $this->attributes['owner_code'] = $value;
        }
    }

    public function setImageAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['image'] = Null;
        } else if (base64_encode(base64_decode($value, true)) === $value) {
            $this->attributes['image'] = base64_decode($value);
        } else {
            $this->attributes['image'] = $this->resizeImage($value);
        }
    }
    public function getImageAttribute($value)
    {
        if (!$value) {
            return $value;
        } else {
            return base64_encode($value);
        }
    }
    // public function getRoomTypeAttribute($value)
    // {
    //     return $value . ' ' . $this->bed_type;
    // }
    public function resizeImage($file)
    {
        $row = '300';
        $imageType = $file->getClientOriginalExtension();
        $resizeImage  = Image::make($file)->resize($row, $row, function ($constraint) {
            $constraint->aspectRatio();
        });

        return $resizeImage->encode($imageType, 80);
    }

    //-----------HOUSEKEEPING -----------------------//
    public function getDateArrival($value){
        $this->attributes[''];
    }

}

