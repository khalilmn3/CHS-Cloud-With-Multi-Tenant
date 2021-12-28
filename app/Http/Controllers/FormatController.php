<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Configurations\ConfigurationController;
use DateInterval;
use DatePeriod;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;

class FormatController extends Controller
{
    public static function boolToString($value)
    {
        return $value ? '-1' : '0';
    }

    public static function formatLongDate($dateX){
        $date = date_create($dateX);
        return date_format($date,'D d/m/Y');
    }

    public static function formatDayDate($dateX){
        $date = date_create($dateX);
        return date_format($date,'d');
    }

    public static function formatDate($dateX){
        if($dateX == '0000-00-00' || $dateX == '' || $dateX == null){
            return '0000-00-00';
        }
        // $date = date_create($dateX);
        return date_format(new DateTime($dateX),'Y-m-d');
    }

    public static function customFormatDate($format, $dateX){
        $date = date_create($dateX);
        return empty($dateX) ? '' : date_format($date,$format);
    }

    public static function formatDateTime($dateTimeX){
        if($dateTimeX){
        $date = date_create($dateTimeX);
        return date_format($date,'Y-m-d H:i:s');
        } else {
            return '0000-00-00 00:00:00';
        }
    }

    public static function firstDayOfMonth($dateX){
        $date = date_create($dateX);
        return empty($dateX) ? '' : date_format($date,'Y-m-01');
    }

    public static function formatMonth($dateTimeX){
        $date = date_create($dateTimeX);
        return empty($dateTimeX) ? '' : date_format($date,'m');
    }

    public static function formatYear($dateTimeX){
        $date = date_create($dateTimeX);
        return empty($dateTimeX) ? '' : date_format($date,'Y');
    }

    public static function timesBetween($startTime, $endTime){
        $timeBetween =  $endTime - $startTime;

        return $timeBetween;
    }

    public static function daysBetween($now, $then){
        $daybetween =  strtotime($then) - strtotime($now);

        return $daybetween / (60 * 60 * 24);
    }

    public static function priodeOfDates($fromDate,$toDate){
        $period = new DatePeriod(new DateTime(Self::formatDate($fromDate)),new DateInterval('P1D'),new DateTime(self::formatDate(FormatController::incDay($toDate,1))));
        foreach( $period as $date) {
            $dates[] = $date->format('Y-m-d');
        }
        return $dates;
    }

    public static function incDay($dateTime, int $count){
        $date = strtotime("+".$count." day", strtotime($dateTime));
        $result = date("Y-m-d", $date);
        return $result;
    }

    public static function decDay($dateTime, int $count){
        $date = strtotime("-".$count." day", strtotime($dateTime));
        $result = date("Y-m-d", $date);
        return $result;
    }

    public static function dayOfWeekNumber($date){
        $timestamp= strtotime($date);
        $day = date('w', $timestamp);
        return $day;
    }

    public static function dayOfWeekFullText($date){
        $timestamp= strtotime($date);
        $day = date('l', $timestamp);
        return $day;
    }

    public static function round3($value){
        return round($value,3);
    }

    public static function round2($value){
        return round($value,2);
    }

    public static function leftStr($str, $length) {
        return substr($str, 0, $length);
    }

    public static  function rightStr($str, $length) {
        return substr($str, -$length);
    }

    public static function makeDateTime($dateString){
        return new DateTime($dateString);
    }

    public static function mergetDateW8TimeNow($date){
        $date = self::formatDate(($date));
        $dateNow = new DateTime();
        $timezone =  ConfigurationController::value(null,null,'TIMEZONES');
        if(empty($timezone)){
            $timezone = 'Asia/Makassar';
        }
        $dateNow->setTimezone(new DateTimeZone($timezone));
        $time = date_format($dateNow,'H:i:s');
        $newDate = date('Y-m-d H:i:s',strtotime("$date $time"));
        return $newDate;
    }

    public static function replaceTime($dateString, $time){
        $date = self::makeDateTime($dateString);
        $timeArray = explode(':', $time);
        return date_format(date_time_set($date, intval($timeArray[0]), intval($timeArray[1]), intval($timeArray[2])), 'Y-m-d H:i:s');
    }
}
