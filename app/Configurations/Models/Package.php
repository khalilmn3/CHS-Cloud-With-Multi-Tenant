<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $table='cfg_init_package';
    protected $primaryKey = 'code';

    public function setIsActiveAttribute($value){
        if ($value == 'true') {
            $this->attributes['is_active'] = '-1';
        } else {
            $this->attributes['is_active'] = '0';
        }
    }
    public function setIsOnlineAttribute($value){
        if ($value == 'true') {
            $this->attributes['is_online'] = '-1';
        } else {
            $this->attributes['is_online'] = '0';
        }
    }
    public function setShowInTransactionAttribute($value){
        if ($value == 'true') {
            $this->attributes['show_in_transaction'] = '-1';
        } else {
            $this->attributes['show_in_transaction'] = '0';
        }
    }
    public function setPerPaxAttribute($value){
        if ($value == 'true') {
            $this->attributes['per_pax'] = '-1';
        } else {
            $this->attributes['per_pax'] = '0';
        }
    }
    public function setIncludeChildAttribute($value){
        if ($value == 'true') {
            $this->attributes['include_child'] = '-1';
        } else {
            $this->attributes['include_child'] = '0';
        }
    }
    public function setPerPaxExtraAttribute($value){
        if ($value == 'true') {
            $this->attributes['per_pax_extra'] = '-1';
        } else {
            $this->attributes['per_pax_extra'] = '0';
        }
    }
    public function getCodeAttribute($value)
    {

        return strval($value);
    }


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
    public function getIsOnlineAttribute($value)
    {
        if($value == 0){
            $value = false;
        }else{
            $value = true;
        }
        return $value;
    }
    public function getIsActiveAttribute($value)
     {
         if($value == 0){
             $value = false;
         }else{
             $value = true;
         }
         return $value;
     }
     public function getShowInTransactionAttribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
}
