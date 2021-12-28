<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;
use Image;

class RoomAmenities extends Model
{
    protected $table = 'cfg_init_room_amenities';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
    protected $guarded =[];

    public function setDescriptionAttribute($value)
    {
        if (!$value || $value == 'null') {
            $this->attributes['description'] = Null;
        } else {
            $this->attributes['description'] = $value;
        }
    }

    public function resizeImage($file)
    {
        $row = '64';
        $imageType = $file->getClientOriginalExtension();
        $resizeImage  = Image::make($file)->resize($row, $row, function ($constraint) {
            $constraint->aspectRatio();
        });

        return $resizeImage->encode($imageType, 80);
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

}
