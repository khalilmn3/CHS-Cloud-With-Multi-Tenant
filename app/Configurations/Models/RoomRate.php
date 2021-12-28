<?php

namespace App\Configurations\Models;

use Illuminate\Database\Eloquent\Model;

class RoomRate extends Model
{
    protected $table= "cfg_init_room_rate";
    protected $primaryKey= "code";

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

    public function getIsLastDealAttribute($value)
    {
        if($value == 0){
            $value = false;
        }else{
            $value = true;
        }
        return $value;
    }

    public function getIncludeChlidAttribute($value)
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
     public function getIsRateStructureAttribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getIsComplimentAttribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getIncludeBreakfastAttribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getDay1Attribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getDay2Attribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getDay3Attribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getDay4Attribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getDay5Attribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getDay6Attribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getDay7Attribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getCmStopSellAttribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getIsCmUpdatedAttribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getIsSentAttribute($value)
      {
          if($value == 0){
              $value = false;
          }else{
              $value = true;
          }
          return $value;
      }
      public function getRoomTypeCodeAttribute($value)
      {
          $value = explode('|',$value);
          return $value;
      }



}
