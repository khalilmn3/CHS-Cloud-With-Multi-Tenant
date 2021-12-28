<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class PackageBreakdown extends Model
{
    protected $table='cfg_init_package_breakdown';
    protected $primaryKey = 'package_code';

    public function getPerPaxAttribute($value)
    {
        if($value == 0){
            $value = false;
        }else{
            $value = true;
        }
        return $value;
    }
    public function getPerPaxExtraAttribute($value)
    {
        if($value == 0){
            $value = false;
        }else{
            $value = true;
        }
        return $value;
    }
    public function getIncludeChildAttribute($value)
    {
        if($value == 0){
            $value = false;
        }else{
            $value = true;
        }
        return $value;
    }
}
