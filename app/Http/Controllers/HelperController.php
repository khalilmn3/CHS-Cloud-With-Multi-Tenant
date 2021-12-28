<?php

namespace App\Http\Controllers;

use App\Configurations\Models\Account;
use App\Configurations\Models\BedType;
use App\Configurations\Models\Configuration;
use App\Configurations\Models\Country;
use App\Configurations\Models\Currency;
use App\Configurations\Models\Room;
use App\Configurations\Models\RoomRate;
use App\Configurations\Models\RoomType;
use App\Configurations\Models\RoomUnavailable;
use App\Configurations\Models\State;
use App\Configurations\Models\TaxService;
use App\Configurations\Models\Company;
use App\User;
use App\General\Models\AuditLog;
use App\General\Models\CompanyInformation;
use App\GuestScheduledRate;
use App\Http\Controllers\Configurations\ConfigurationController;
use Illuminate\Http\Request;
use App\Http\Controllers\General\AuditLogController;
use App\Folio\Models\Folio;
use App\Folio\Models\SubFolio;
use App\General\Models\ShiftLog;
use App\Guest\Models\GuestDeposit;
use App\Guest\Models\GuestDetail;
use App\Http\Controllers\Folio\SubFolioController;
use App\Http\Controllers\General\ShiftLogController;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\GlobalVariableController as VariableGlobal;
use App\Reservation;
use DateInterval;
use DatePeriod;
use DateTime;
use DateTimeZone;
use FormatController as Format;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Mockery\Undefined;
use phpDocumentor\Reflection\Types\Integer;

class HelperController extends Controller
{
    public static function ifNullInt($value){
        if($value == 'null' || $value == '' || $value == null ){
            return 0;
        } else {
            return $value;
        }
    }

    public static function ifNull($value){
        if($value == 'null' || $value == '' || $value == null ){
            return '';
        } else {
            return $value;
        }
    }

    public static function varianString($value){
        if($value == true || $value == 'true' || $value == 'True'){
            return 'True';
        } else {
            return 'False';
        }
    }

    public static function hourOf($time){
        return substr($time,0, 2);

    }

    public static function trueFalse($value){
        if($value == true || $value == '-1' || $value == '1' || $value == 1 || $value == 'true' || $value == 'True'){
            return '-1';
        } else {
            return '0';
        }
    }

    public static function boolToString($value){
        if($value == true || $value == '-1' || $value == -1 || $value == 'true'){
            return '-1';
        } else {
            return '0';
        }
    }

    public static function variant($value){
        if($value == '-1' || $value == -1){
            $result= true;
        } else {
            $result= false;
        }
        return $result;
    }

    public static function trueFalseString($value){
        if($value != true || $value != false ){
            return $value == 'true' || $value == 'True' || $value == '-1' || $value == '1';
        } else {
            $value;
        }
    }

    public static function arrayEquivalent($array, $equivalent) {
        if(is_array($array)){
            for($i = 0; $i < count($array); $i++){
                if($array[$i] == $equivalent){
                    return true;
                }
            }
        return false;
        }
        return false;
    }


    public static function nullColor($value){
        return $value == '' ? '536870911' : intval(hexdec(str_replace('#','',$value)));
    }
//ENCRYPT DATA
//     public static function encrypt($value, string $passphrase)
//     {
//         $salt = openssl_random_pseudo_bytes(8);
//         $salted = '';
//         $dx = '';
//         while (strlen($salted) < 48) {
//             $dx = md5($dx . $passphrase . $salt, true);
//             $salted .= $dx;
//         }
//         $key = substr($salted, 0, 32);
//         $iv = substr($salted, 32, 16);
//         $encrypted_data = openssl_encrypt(json_encode($value), 'aes-256-cbc', $key, true, $iv);
//         $data = ["ct" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "s" => bin2hex($salt)];
//         return json_encode($data);
//     }

// //DECRYPT DATA
//     public static function decrypt(string $jsonStr, string $passphrase)
//     {
//         $json = json_decode($jsonStr, true);
//         $salt = hex2bin($json["s"]);
//         $iv = hex2bin($json["iv"]);
//         $ct = base64_decode($json["ct"]);
//         $concatedPassphrase = $passphrase . $salt;
//         $md5 = [];
//         $md5[0] = md5($concatedPassphrase, true);
//         $result = $md5[0];
//         for ($i = 1; $i < 3; $i++) {
//             $md5[$i] = md5($md5[$i - 1] . $concatedPassphrase, true);
//             $result .= $md5[$i];
//         }
//         $key = substr($result, 0, 32);
//         $data = openssl_decrypt($ct, 'aes-256-cbc', $key, true, $iv);
//         return json_decode($data, true);
//     }

    /**
    * Decrypt data from a CryptoJS json encoding string
    *
    * @param mixed $passphrase
    * @param mixed $jsonString
    * @return mixed
    */
    public static function decrypt($jsonString, $passphrase){
        $jsondata = json_decode($jsonString, true);
        $salt = hex2bin($jsondata["s"]);
        $ct = base64_decode($jsondata["ct"]);
        $iv  = hex2bin($jsondata["iv"]);
        $concatedPassphrase = $passphrase.$salt;
        $md5 = array();
        $md5[0] = md5($concatedPassphrase, true);
        $result = $md5[0];
        for ($i = 1; $i < 3; $i++) {
            $md5[$i] = md5($md5[$i - 1].$concatedPassphrase, true);
            $result .= $md5[$i];
        }
        $key = substr($result, 0, 32);
        $data = openssl_decrypt($ct, 'aes-256-cbc', $key, true, $iv);
        return json_decode($data, true);
    }

    /**
    * Encrypt value to a cryptojs compatiable json encoding string
    *
    * @param mixed $passphrase
    * @param mixed $value
    * @return string
    */
    public static function encrypt($value, $passphrase){
        $salt = openssl_random_pseudo_bytes(8);
        $salted = '';
        $dx = '';
        while (strlen($salted) < 48) {
            $dx = md5($dx.$passphrase.$salt, true);
            $salted .= $dx;
        }
        $key = substr($salted, 0, 32);
        $iv  = substr($salted, 32,16);
        $encrypted_data = openssl_encrypt(json_encode($value), 'aes-256-cbc', $key, true, $iv);
        $data = array("ct" => base64_encode($encrypted_data), "iv" => bin2hex($iv), "s" => bin2hex($salt));
        return json_encode($data);
    }

    public static function auditDate(){
       $auditDate = AuditLog::select('audit_date')->orderBy('id','DESC')->first()->audit_date;
       return $auditDate;
    }

    public static function getDateTimeNow(){
        $date = new DateTime();
        $timezone =  ConfigurationController::value(null,null,GlobalVariableController::$configurationName['Timezone']);
        if(empty($timezone)){
            $timezone = 'Asia/Makassar';
        }
        $date->setTimezone(new DateTimeZone($timezone));

        return date_format($date,'Y-m-d H:i:s');
    }

    public static function getSubFolioBreakdown1(){
        $breakdown = DB::table('sub_folio')->select('breakdown1')->orderByDesc('breakdown1')->first();
        if(empty($breakdown)){
            $breakdown = 1;
        } else {
            $breakdown = $breakdown->breakdown1 + 1;
        }
        return $breakdown;
    }

    public static function getSubFolioBreakdown2($breakdown1){
        $breakdown = DB::table('sub_folio')->select('breakdown2')->where('breakdown1',$breakdown1)->orderByDesc('breakdown2')->first();
        if(empty($breakdown)){
            $breakdown = 1  ;
        } else {
            $breakdown = $breakdown->breakdown2 + 1;
        }
        return $breakdown;
    }

    public static function getLogShiftID($userId){
        $result = '';
        $shift= ShiftLog::where('user_id',$userId)->where('is_open','-1')->orderBy('id','desc')->first();

        if($shift){
            $result = $shift->id;
        }
        return $result;

    }

    public static function getStartDateShiftUserID($userId){
        $result = '';
        $shift= ShiftLog::where('user_id',$userId)->where('is_open','-1')->orderBy('id','desc')->first();

        if($shift){
            $result = $shift->start_date;
        }
        return $result;
    }

    public static function getOpeningBalanceShiftUserID($userId){
        $result = '';
        $shift= ShiftLog::where('user_id',$userId)->where('is_open','-1')->orderBy('id','desc')->first();

        if($shift){
            $result = $shift->opening_balance;
        }
        return $result;
    }

    public static function getShiftUserID($userId){
        $result = '';
        $shift= ShiftLog::where('user_id',$userId)->where('is_open','-1')->orderBy('id','desc')->first();

        if($shift){
            $result = $shift->shift;
        }
        return $result;
    }

    public static function getIDLogTable($tableName, $userId){
        $result= DB::table($tableName)->select('id_log')->where('user_id',$userId)->orderByDesc('id_log')->first();
        return $result->id_log;
    }

    public static function getSubFolioCorrectionBreakdown(){
        $correctionBreakdown = SubFolio::select('correction_breakdown')->orderByDesc('correction_breakdown')->first();
        if(empty($correctionBreakdown)){
            $correctionBreakdown = 1;
        } else {
            $correctionBreakdown= $correctionBreakdown->correction_breakdown + 1;
        }
        return $correctionBreakdown;
    }

    public static function getSubFolioCorrectionBreakdownByIdLog($idLog){
        $correctionBreakdown = SubFolio::select('correction_breakdown')->where('id_log',$idLog)->first();
        if(!empty($correctionBreakdown)){
            $correctionBreakdown=$correctionBreakdown->correction_breakdown;
        }
        return $correctionBreakdown;
    }

    public static function getGuestDepositCorrectionBreakdownByIdLog($idLog){
        $correctionBreakdown = GuestDeposit::select('correction_breakdown')->where('id_log',$idLog)->first();
        if(!empty($correctionBreakdown)){
            $correctionBreakdown=$correctionBreakdown->correction_breakdown;
        }
        return $correctionBreakdown;
    }

    public static function getSubFolioBreakdown1ByIdLog($idLog){
        $breakdown1 = SubFolio::select('breakdown1')->where('id_log',$idLog)->first();
        if(!empty($breakdown1)){
            $breakdown1=$breakdown1->breakdown1;
        }
        return $breakdown1;
    }

    public static function getSubFolioBreakdown2ByIdLog($idLog){
        $breakdown2 = SubFolio::select('breakdown2')->where('id_log',$idLog)->first();
        if(!empty($breakdown2)){
            $breakdown2=$breakdown2->breakdown2;
        }
        return $breakdown2;
    }

    public static function getGuestDepositId($userId){
        $result = GuestDeposit::select('id_log')->where('user_id',$userId)->orderBy('id_log','DESC')->first();

        if(!empty($result)){
            $result=$result->id_log;
        }
        return $result;
    }

    public static function getGuestDepositCorrectionBreakdown(){
        $correctionBreakdown = GuestDeposit::select('correction_breakdown')->orderByDesc('correction_breakdown')->first();
        if(empty($correctionBreakdown)){
            $correctionBreakdown = 1;
        } else {
            $correctionBreakdown= $correctionBreakdown->correction_breakdown + 1;
        }
        return $correctionBreakdown;
    }

    public static function getAutoRouting($belongsTo, $account){
        $result = DB::table('folio_routing')->select('folio_transfer', 'sub_folio_transfer')
            ->where('folio_number',$belongsTo)
            ->where('account_code', $account)->first();
        return $result;
    }

    public static function getDefaultCurrency(){
        $currency = Currency::select('code')->where('is_default','-1')->first();
        return $currency->code;
    }

    public static function getExchangeRateCurrency($currencyCode){
        $exchange = Currency::select('exchange_rate')->where('code',$currencyCode)->first();
        $result= 0;
        if(!empty($exchange)){
            $result = $exchange->exchange_rate;
        }
        return $result;
    }

    public static function getRoomType($roomNumber){
        $result = Room::select('room_type_code')->where('number',$roomNumber)->first();
        if(!empty($result)){
            $result = $result->room_type_code;
        } else {
            $result = [];
        }
        return $result;
    }

    public static function getCompanyBankAccount(){
        $result = [
            'BankName1' => Configuration::select('value')->where('category',GlobalVariableController::$configurationCategory['CompanyBankAccount'])->where('name',GlobalVariableController::$configurationName['BankName1'])->first()->value,
            'BankAccount1' => Configuration::select('value')->where('category',GlobalVariableController::$configurationCategory['CompanyBankAccount'])->where('name',GlobalVariableController::$configurationName['BankAccount1'])->first()->value,
            'BankHolder1' => Configuration::select('value')->where('category',GlobalVariableController::$configurationCategory['CompanyBankAccount'])->where('name',GlobalVariableController::$configurationName['HolderName1'])->first()->value,
            'BankName2' => Configuration::select('value')->where('category',GlobalVariableController::$configurationCategory['CompanyBankAccount'])->where('name',GlobalVariableController::$configurationName['BankName2'])->first()->value,
            'BankAccount2' => Configuration::select('value')->where('category',GlobalVariableController::$configurationCategory['CompanyBankAccount'])->where('name',GlobalVariableController::$configurationName['BankAccount2'])->first()->value,
            'BankHolder2' => Configuration::select('value')->where('category',GlobalVariableController::$configurationCategory['CompanyBankAccount'])->where('name',GlobalVariableController::$configurationName['HolderName2'])->first()->value
        ];

        return $result;
    }

    public static function getAvailableRoomCountByType($RoomType, $BedType, $ArrivalDate, $DepartureDate, $ReservationNumber, $FolioNumber, $RoomUnavailableID, $RoomAllotmentID, $ReadyOnly, $AllotmentOnly)
    {
        $Result = 0;
        $FieldCountRoomTotal = '';
        $FieldCountRoom = '';
        $FieldCountReservation = '';
        $FieldCountFolio = '';
        $FieldCountUnavailable = '';
        $FieldCountAllotment = '';
        $CountDay = FormatController::daysBetween(FormatController::formatDate($ArrivalDate), FormatController::formatDate($DepartureDate));

        if ($CountDay <= 0){
            $FieldCountRoomTotal = ' SUM(IFNULL(A.RoomCount, 0)) AS TotalRoom0 ';
            $FieldCountRoom = ' COUNT(number) AS RoomCount ';
            $FieldCountReservation = ' -COUNT(guest_detail.room_number) AS RoomCount ';
            $FieldCountFolio = ' -COUNT(DISTINCT guest_detail.room_number, NULL) AS RoomCount ';
            $FieldCountUnavailable = ' -COUNT(DISTINCT cfg_init_room.number) AS RoomCount ';
            if ($AllotmentOnly){
                $FieldCountAllotment = ' COUNT(DISTINCT cfg_init_room.number) AS RoomCount ';
            }
            else{
                $FieldCountAllotment = ' -COUNT(DISTINCT cfg_init_room.number) AS RoomCount ';
            }
        }
        else{
            for ($Count = 1;  $Count <= $CountDay; $Count++){
                $CurrentDateStr =  FormatController::formatDate(FormatController::incDay($ArrivalDate, $Count - 1));
                $FieldCountRoomTotal = $FieldCountRoomTotal . ' SUM(IFNULL(A.RoomCount' .$Count. ', 0)) AS TotalRoom'.($Count-1).'';
                $FieldCountRoom = $FieldCountRoom . ' COUNT(number) AS RoomCount' .$Count;
                $FieldCountReservation = $FieldCountReservation . ' -COUNT(IF(DATE(guest_detail.arrival)<="' .$CurrentDateStr. '" AND DATE(guest_detail.departure)>"' .$CurrentDateStr. '", guest_detail.room_number, NULL)) AS RoomCount' .$Count;
                $FieldCountFolio = $FieldCountFolio . ' -COUNT(DISTINCT IF(DATE(guest_detail.arrival)<="' .$CurrentDateStr. '" AND DATE(guest_detail.departure)>"' .$CurrentDateStr. '", guest_detail.room_number, NULL)) AS RoomCount' .$Count;
                $FieldCountUnavailable = $FieldCountUnavailable . ' -COUNT(DISTINCT IF(DATE(room_unavailable.from_date)<="' .$CurrentDateStr. '" AND DATE(room_unavailable.to_date)>="' .$CurrentDateStr. '", cfg_init_room.number, NULL)) AS RoomCount' .$Count;
                if ($AllotmentOnly){
                    $FieldCountAllotment = $FieldCountAllotment . ' COUNT(DISTINCT IF(DATE(room_allotment.from_date)<="' .$CurrentDateStr. '" AND DATE(room_allotment.to_date)>="' .$CurrentDateStr. '", cfg_init_room.number, NULL)) AS RoomCount' .$Count;
                }
                else{
                    $FieldCountAllotment = $FieldCountAllotment . ' -COUNT(DISTINCT IF(DATE(room_allotment.from_date)<="' .$CurrentDateStr. '" AND DATE(room_allotment.to_date)>="' .$CurrentDateStr. '", cfg_init_room.number, NULL)) AS RoomCount' .$Count;
                }
                if ($Count === $CountDay){
                    $FieldCountRoomTotal = $FieldCountRoomTotal . ' ';
                    $FieldCountRoom = $FieldCountRoom . ' ';
                    $FieldCountReservation = $FieldCountReservation . ' ';
                    $FieldCountFolio = $FieldCountFolio . ' ';
                    $FieldCountUnavailable = $FieldCountUnavailable . ' ';
                    $FieldCountAllotment = $FieldCountAllotment . ' ';
                }
                else{
                    $FieldCountRoomTotal = $FieldCountRoomTotal . ',';
                    $FieldCountRoom = $FieldCountRoom . ',';
                    $FieldCountReservation = $FieldCountReservation . ',';
                    $FieldCountFolio = $FieldCountFolio . ',';
                    $FieldCountUnavailable = $FieldCountUnavailable . ',';
                    $FieldCountAllotment = $FieldCountAllotment . ',';
                }
            }
        }

        $ArrivalDateStr = FormatController::formatDate($ArrivalDate);
        $DepartureDateStr = FormatController::formatDate($DepartureDate);
        $QueryCondition1 = '';
        $QueryCondition2A = '';
        $QueryCondition2B = '';
        if ($ReservationNumber){
            $QueryCondition1 = ' AND reservation.number<>"' .$ReservationNumber. '"';
            $QueryCondition2B = ' AND folio.reservation_number<>"' .$ReservationNumber. '"';
        }

        if ($FolioNumber != 0){
            $QueryCondition2A = ' AND folio.number<>"' .$FolioNumber. '"';
        }

        $QueryCondition3 = '';
        if ($RoomUnavailableID != 0){
            $QueryCondition3 = ' AND room_unavailable.id_log<>"' .$RoomUnavailableID. '"';
        }

        $QueryCondition4 = '';
        $QueryCondition4x = '';
        if ($BedType != ''){
            $QueryCondition4 = ' AND cfg_init_room.bed_type_code="' .$BedType. '"';
            $QueryCondition4x = ' AND guest_detail.bed_type_code="' .$BedType. '"';
        }

    //Allotment Only
        $QueryCondition1 = $QueryCondition1 . ' AND reservation.is_from_allotment="' .FormatController::boolToString($AllotmentOnly). '"';
        $QueryNot = '';
        $QueryRoom = '';
        $QueryRoomUnavailable = '';
        if ($AllotmentOnly) {
            $QueryCondition2A = $QueryCondition2A . ' AND folio.is_from_allotment="' .FormatController::boolToString($AllotmentOnly). '"';
            $QueryRoomAllotment =
                ' WHERE DATE(room_allotment.from_date)<="' .$ArrivalDateStr. '"' .
                ' AND ADDDATE(DATE(room_allotment.to_date), INTERVAL 1 DAY)>="' .$DepartureDateStr. '"';
        }
        else{
            $QueryNot = 'NOT ';
            $QueryRoom =
                'SELECT' .
                ' "A" AS Code,' .
                $FieldCountRoom .
                'FROM' .
                ' cfg_init_room' .
                ' WHERE room_type_code="' .$RoomType. '"' .
                $QueryCondition4.
                ')UNION(';
            $QueryRoomUnavailable =
                'SELECT' .
                ' "D" AS Code,' .
                $FieldCountUnavailable .
                'FROM' .
                ' room_unavailable' .
                ' LEFT OUTER JOIN cfg_init_room ON (room_unavailable.room_number = cfg_init_room.number)' .
                ' WHERE cfg_init_room.room_type_code="' .$RoomType. '"' .
                $QueryCondition4.
                ' AND DATE(room_unavailable.from_date)<"' .$DepartureDateStr. '"' .
                ' AND DATE(room_unavailable.to_date)>="' .$ArrivalDateStr. '"' .
                $QueryCondition3.
                ')UNION(';
            $QueryRoomAllotment =
                ' WHERE DATE(room_allotment.from_date)<"' .$DepartureDateStr. '"' .
                ' AND DATE(room_allotment.to_date)>="' .$ArrivalDateStr. '"';
        }

        $QueryCondition5 = '';
        if ($RoomAllotmentID != 0){
            $QueryCondition5 = ' AND room_allotment.id_log<>"' .$RoomAllotmentID. '"';
        }

        $queryAvailable = DB::select(DB::raw(
            'SELECT' .$FieldCountRoomTotal. 'FROM (' .
            '(' .
            $QueryRoom .
            'SELECT' .
            ' "B" AS Code,' .
            $FieldCountReservation .
            'FROM' .
            ' reservation' .
            ' LEFT OUTER JOIN guest_detail ON (reservation.guest_detail_id = guest_detail.id)' .
            ' LEFT OUTER JOIN cfg_init_room ON (guest_detail.room_number = cfg_init_room.number)' .
            ' WHERE reservation.status_code="' .GlobalVariableController:: $reservationStatus['New']. '"' .
            ' AND guest_detail.room_type_code="' .$RoomType. '"' .
            $QueryCondition4x.
            ' AND DATE(guest_detail.arrival)<"' .$DepartureDateStr. '"' .
            ' AND DATE(guest_detail.departure)>"' .$ArrivalDateStr. '"' .
            $QueryCondition1 .
            ')UNION(' .
            'SELECT' .
            ' "C" AS Code,' .
            $FieldCountFolio .
            'FROM' .
            ' folio' .
            ' LEFT OUTER JOIN guest_detail ON (folio.guest_detail_id = guest_detail.id)' .
            ' LEFT OUTER JOIN cfg_init_room ON (guest_detail.room_number = cfg_init_room.number)' .
            ' WHERE folio.status_code="' .GlobalVariableController::$folioStatus['Open']. '"' .
            ' AND folio.type_code="' .GlobalVariableController::$folioType['GuestFolio']. '"' .
            ' AND guest_detail.room_type_code="' .$RoomType. '"' .
            $QueryCondition4.
            ' AND DATE(guest_detail.arrival)<"' .$DepartureDateStr. '"' .
            ' AND DATE(guest_detail.departure)>"' .$ArrivalDateStr. '"' .
            $QueryCondition2A.$QueryCondition2B.
            ')UNION(' .
            $QueryRoomUnavailable.
            'SELECT' .
            ' "E" AS Code,' .
            $FieldCountAllotment.
            'FROM' .
            ' room_allotment' .
            ' LEFT OUTER JOIN cfg_init_room ON (room_allotment.room_number = cfg_init_room.number)' .
            ' WHERE cfg_init_room.room_type_code="' .$RoomType.'"'.
            $QueryCondition4.
            ' AND DATE(room_allotment.from_date)<"' .$DepartureDateStr. '"' .
            ' AND DATE(room_allotment.to_date)>="' .$ArrivalDateStr. '"' .
            $QueryCondition5 . ')) AS A'));

        if($queryAvailable){
            $AvailableRoomCount = $queryAvailable[0]->TotalRoom0;
            if ($CountDay > 1) { //Get Available Lowest
                for ($Count = 1; $Count < $CountDay; $Count++){
                    $tempVar = 'TotalRoom'.$Count;
                    if ($AvailableRoomCount > $queryAvailable[0]->$tempVar){
                        $AvailableRoomCount = $queryAvailable[0]->$tempVar;
                    }
                }
            }

            if ($ReadyOnly){
                $queryAvailableReady = DB::select(DB::raw(
                'SELECT COUNT(number) AS AvailableRoomCountReady FROM cfg_init_room' .
                ' WHERE room_type_code="' .$RoomType. '"' .
                ' AND status_code="' .GlobalVariableController::$roomStatus['Ready']. '"' .
                $QueryCondition4. ' ' .
                'AND number NOT IN(SELECT' .
                                    ' guest_detail.room_number ' .
                                    'FROM' .
                                    ' reservation' .
                                    ' LEFT OUTER JOIN guest_detail ON (reservation.guest_detail_id = guest_detail.id)' .
                                    ' WHERE reservation.status_code="' .GlobalVariableController::$reservationStatus['New']. '"' .
                                    ' AND guest_detail.room_type_code="' .$RoomType. '"' .
                                    ' AND guest_detail.room_number<>""' .
                                    ' AND DATE(guest_detail.arrival)<"' .$DepartureDateStr. '"' .
                                    ' AND DATE(guest_detail.departure)>"' .$ArrivalDateStr. '"' .
                                    $QueryCondition1. ') ' .
                'AND number NOT IN(SELECT' .
                                    ' guest_detail.room_number ' .
                                    'FROM' .
                                    ' folio' .
                                    ' LEFT OUTER JOIN guest_detail ON (folio.guest_detail_id = guest_detail.id)' .
                                    ' WHERE folio.status_code="' .GlobalVariableController::$folioStatus['Open']. '"' .
                                    ' AND folio.type_code="' .GlobalVariableController::$folioType['GuestFolio']. '"' .
                                    ' AND guest_detail.room_type_code="' .$RoomType. '"' .
                                    ' AND DATE(guest_detail.arrival)<"' .$DepartureDateStr. '"' .
                                    ' AND DATE(guest_detail.departure)>"' .$ArrivalDateStr. '"' .
                                    $QueryCondition2A.$QueryCondition2B. ') ' .
                'AND number NOT IN(SELECT' .
                                    ' room_unavailable.room_number ' .
                                    'FROM' .
                                    ' room_unavailable' .
                                    ' LEFT OUTER JOIN cfg_init_room ON (room_unavailable.room_number = cfg_init_room.number)' .
                                    ' WHERE DATE(room_unavailable.from_date)<"' .$DepartureDateStr. '"' .
                                    ' AND DATE(room_unavailable.to_date)>="' .$ArrivalDateStr. '"' .
                                    ' AND cfg_init_room.room_type_code="' .$RoomType. '"' .
                                    $QueryCondition3. ') ' .
                'AND number ' .$QueryNot. 'IN(SELECT' .
                                    ' room_allotment.room_number ' .
                                    'FROM' .
                                    ' room_allotment' .
                                    ' LEFT OUTER JOIN cfg_init_room ON (room_allotment.room_number = cfg_init_room.number)' .
                                    $QueryRoomAllotment.
                                    ' AND cfg_init_room.room_type_code="' .$RoomType. '"' .
                                    $QueryCondition5. ')'));

                if ($queryAvailableReady){
                    $AvailableRoomCountReady = $queryAvailableReady[0]->AvailableRoomCountReady;
                    if ($AvailableRoomCount <= $AvailableRoomCountReady){
                        $Result = $AvailableRoomCount;
                    }
                    else{
                        $Result = $AvailableRoomCountReady;
                    }
                }
            }
            else{
                $Result = $AvailableRoomCount;
            }

            if ($AllotmentOnly && ($Result < 0)){
                $Result = 0;
            }

            return intval($Result);
        }
    }

    public static function isRoomAvailable($roomNumber, $arrivalDate, $departureDate, $reservationNumber, $folioNumber, $roomUnavailableID, $roomAllotmentID, $readyOnly, $allotmentOnly){
        $result = false;

        $queryDB = DB::table('cfg_init_room')
            ->select('room_type_code', 'bed_type_code')
            ->where('number', $roomNumber)
            ->limit(1)
            ->first();

        $roomType = $queryDB->room_type_code;
        $bedTypeCode = $queryDB->bed_type_code;

        $roomList = self::getRoomAvailableByType($roomType, $bedTypeCode, $arrivalDate, $departureDate, $reservationNumber, $folioNumber, $roomUnavailableID, $roomAllotmentID, $allotmentOnly, $roomNumber, $readyOnly, false, false);
        $roomAvailableCount = intval(self::getAvailableRoomCountByType($roomType, $bedTypeCode, $arrivalDate, $departureDate, $reservationNumber, $folioNumber, $roomUnavailableID, $roomAllotmentID, $readyOnly, $allotmentOnly));

        foreach ($roomList as $room){
            if($room->number == $roomNumber){
                if($roomAvailableCount > 0){
                    $result = true;
                }
                break;
            }
        }
        return $result;
    }

    public static function isRoomNumberAvailable($roomType, $bedType, $arrivalDate, $departureDate, $reservationNumber, $folioNumber, $unavailableID,$roomAllotmentID, $isAllotment, $roomNumber, $ready, $isReservation, $isInHouse){
        $ready = $ready <> '' ? $ready : false;
        $countDay = FormatController::daysBetween(FormatController::formatDate($arrivalDate), FormatController::formatDate($departureDate));
        $arrivalDate= FormatController::formatDate($arrivalDate);
        $departureDate= FormatController::formatDate($departureDate);
        if($countDay < 0){
            return false;
        }
        //QUERY SELECTED
        $reservation = Reservation::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->where('guest_detail.room_number','<>','')
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate);
        $folio= Folio::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate);
        $roomUnavailable = RoomUnavailable::select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<',$departureDate)
            ->whereDate('room_unavailable.to_date','>=',$arrivalDate);
        $roomAllotment = DB::table('room_allotment')->select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_allotment.room_number','cfg_init_room.number');
        $room = Room::select('number')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code');
        $RoomType = RoomType::select('code as room_type')
            ->leftJoin('cfg_init_room','cfg_init_room.room_type_code','cfg_init_room_type.code');


        //QUERY CONDITION
            if(!empty($roomType)){
                $room->where('cfg_init_room.room_type_code',$roomType);
                $reservation->where('guest_detail.room_type_code',$roomType);
                $folio->where('guest_detail.room_type_code',$roomType);
                $roomUnavailable->where('cfg_init_room.room_type_code',$roomType);
                $RoomType->where('cfg_init_room_type', $roomType);
            }
            if(!empty($bedType)){
                $room->where('cfg_init_room.bed_type_code',$bedType);
                $reservation->where('guest_detail.bed_type_code',$bedType);
            }

            if(!empty($unavailableID)){
                $roomUnavailable->where('room_unavailable.id_log','<>',$unavailableID);
            }

            if($isAllotment){
                $roomAllotment->whereDate('room_allotment.from_date','<=', $arrivalDate);
            }

            if(!empty($reservationNumber)){
                $reservation->where('reservation.number','<>',$reservationNumber);
            }

            if(!empty($folioNumber)){
                $folio->where('folio.number','<>', $folioNumber);
            }

            if(!empty($roomNumber)){
                $room->whereNotIn('number', $reservation->get())
                ->whereNotIn('number', $folio->get())
                ->whereNotIn('number', $roomUnavailable->get())
                ->whereNotIn('number', $roomAllotment->get())
                ->where('number', $roomNumber);
                if($ready){
                    $room->where('status_code',GlobalVariableController::$roomStatus['Ready']);
                }
            } else {
                $room->whereNotIn('number', $reservation->get())
                ->whereNotIn('number', $folio->get())
                ->whereNotIn('number', $roomUnavailable->get())
                ->whereNotIn('number', $roomAllotment->get());
                if($ready){
                    $room->where('status_code',GlobalVariableController::$roomStatus['Ready']);
                }
            }

            return !empty($room->first());
    }

    public static function getRoomAvailableByType($roomType, $bedType, $arrivalDate, $departureDate, $reservationNumber, $folioNumber, $unavailableID,$roomAllotmentID, $isAllotment, $roomNumber, $ready, $isReservation, $isInHouse){
            $ready = $ready <> '' ? $ready : false;
            $countDay = FormatController::daysBetween(FormatController::formatDate($arrivalDate), FormatController::formatDate($departureDate));
            $arrivalDate= FormatController::formatDate($arrivalDate);
            $departureDate= FormatController::formatDate($departureDate);
            // if($countDay < 0){
            //     return [];
            // }
            //QUERY SELECTED
            $reservation = Reservation::select('guest_detail.room_number')
                ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
                ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
                ->whereDate('guest_detail.arrival','<',$departureDate)
                ->whereDate('guest_detail.departure','>',$arrivalDate);
            $folio= Folio::select('guest_detail.room_number')
                ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
                ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
                ->whereDate('guest_detail.arrival','<',$departureDate)
                ->whereDate('guest_detail.departure','>',$arrivalDate);
            $roomUnavailable = RoomUnavailable::select('cfg_init_room.number')
                ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
                ->whereDate('room_unavailable.from_date','<',$departureDate)
                ->whereDate('room_unavailable.to_date','>=',$arrivalDate);
            $roomAllotment = DB::table('room_allotment')->select('cfg_init_room.number')
                ->leftJoin('cfg_init_room','room_allotment.room_number','cfg_init_room.number');
            $room = Room::select('number')
                ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code');
            $RoomType = RoomType::select('code as room_type')
                ->leftJoin('cfg_init_room','cfg_init_room.room_type_code','cfg_init_room_type.code');


            //QUERY CONDITION
                if(!empty($roomType)){
                    $room->where('cfg_init_room.room_type_code',$roomType);
                    $reservation->where('guest_detail.room_type_code',$roomType);
                    $folio->where('guest_detail.room_type_code',$roomType);
                    $roomUnavailable->where('cfg_init_room.room_type_code',$roomType);
                    $RoomType->where('cfg_init_room_type', $roomType);
                }
                if(!empty($bedType)){
                    $room->where('cfg_init_room.bed_type_code',$bedType);
                    $reservation->where('guest_detail.bed_type_code',$bedType);
                }

                if(!empty($unavailableID)){
                    $roomUnavailable->where('room_unavailable.id_log','<>',$unavailableID);
                }
                if(!empty($folioNumber)){
                    $folio->where('folio.number','<>', $folioNumber);
                }

                if($ready){
                    $room->where('status_code', GlobalVariableController::$roomStatus['Ready']);
                }

                if($isAllotment){
                    $roomAllotment->whereDate('room_allotment.from_date','<=', $arrivalDate);
                }

                if(!empty($reservationNumber)){
                    $reservation->where('reservation.number','<>',$reservationNumber);
                }

                if(!empty($roomNumber)){
                    $room->whereNotIn('number', $reservation->get())
                        ->whereNotIn('number', $folio->get())
                        ->whereNotIn('number', $roomUnavailable->get())
                        ->whereNotIn('number', $roomAllotment->get());
                } else {
                    $room->whereNotIn('number', $reservation->get())
                        ->whereNotIn('number', $folio->get())
                        ->whereNotIn('number', $roomUnavailable->get())
                        ->whereNotIn('number', $roomAllotment->get());
                }

                return $room->get();
    }

    // Dont use this
    public static function getRoomAvailableByType2($roomType, $bedType, $arrivalDate, $departureDate, $reservationNumber, $folioNumber, $unavailableID,$roomAllotmentID, $isAllotment, $roomNumber, $ready, $isReservation, $isInHouse){
        $ready = $ready <> '' ? $ready : false;
        $countDay = FormatController::daysBetween(FormatController::formatDate($arrivalDate), FormatController::formatDate($departureDate));
        $arrivalDate= FormatController::formatDate($arrivalDate);
        $departureDate= FormatController::formatDate($departureDate);

        $reservation = Reservation::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereRaw('guest_detail.room_numbe<>""')
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate);


        $folio= Folio::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate);
        $roomUnavailable = RoomUnavailable::select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<',$departureDate)
            ->whereDate('room_unavailable.to_date','>=',$arrivalDate);
        $roomAllotment = DB::table('room_allotment')->select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_allotment.room_number','cfg_init_room.number');
        $room = Room::select('number')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code');

        if(!empty($roomType)){
            $reservation->where('guest_detail.room_type_code',$roomType);
            $folio->where('guest_detail.room_type_code',$roomType);
            $roomUnavailable->where('cfg_init_room.room_type_code',$roomType);
            $roomAllotment->where('cfg_init_room.room_type_code',$roomType);
            $room->where('room_type_code', $roomType);
        }

        if($reservationNumber <> 0){
            $reservation->where('reservation.number', '<>', $reservationNumber);
            $folio->where('folio.reservation_number', '<>', $reservationNumber);
        }

        if($folioNumber <> 0){
            $folio->where('folio.number', '<>', $folioNumber);
        }

        if($roomUnavailableID > 0){
            $roomUnavailable->where('room_unavailable.id_log', '<>', $roomUnavailableID);
        }

        if($roomAllotmentID <> 0){
            $roomAllotment->where('room_allotment.id_log', '<>', $roomAllotmentID);
        }

        if($readyOnly){
            $room->where('status_code',GlobalVariableController::$roomStatus['Ready']);
        }

        if(!empty($bedType)){
            $room->where('bed_type_code', $bedType);
        }

        if($allotmentOnly){
            $reservation->where('reservation.is_from_allotment', '-1');
            $folio->where('folio.is_from_allotment', '-1');
            $roomAllotment->whereRaw('DATE(room_allotment.from_date)<="' .$arrivalDate. '" AND ADDDATE(DATE(room_allotment.to_date), INTERVAL 1 DAY)>="' .$departureDate. '"');
            $room->whereIn('number', $roomAllotment->get());
        } else {
            $roomAllotment->whereRaw('DATE(room_allotment.from_date)<"' .$departureDate. '" AND DATE(room_allotment.to_date)>="' .$arrivalDate. '"');
            $room->whereNotIn('number', $roomAllotment->get());
        }

        $room->whereNotIn('number', $reservation->get())
            ->whereNotIn('number', $folio->get())
            ->whereNotIn('number', $roomUnavailable->get())
            ->orderBy('id_sort')
            ->orderBy('number');

        return $room->get();
    }

    public static function getRoomAvailableByRoomType($roomType, $bedType, $arrivalDate, $departureDate, $reservationNumber, $folioNumber, $unavailableID,$roomAllotmentID, $isAllotment, $roomNumber, $ready, $isReservation, $isInHouse){
        $ready = $ready <> '' ? $ready : false;
        $countDay = FormatController::daysBetween(FormatController::formatDate($arrivalDate), FormatController::formatDate($departureDate));
        $arrivalDate= FormatController::formatDate($arrivalDate);
        $departureDate= FormatController::formatDate($departureDate);
        if($countDay <= 0){
            return [];
        }
        //QUERY SELECTED
        $reservation = Reservation::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate);
        $reservation2 = Reservation::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate)
            ->where('guest_detail.room_number','');
        $folio= Folio::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate);
        $roomUnavailable = RoomUnavailable::select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<',$departureDate)
            ->whereDate('room_unavailable.to_date','>=',$arrivalDate);
        $roomAllotment = DB::table('room_allotment')->select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_allotment.room_number','cfg_init_room.number');
        $room = Room::select('number')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code');
        $RoomType = RoomType::select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','cfg_init_room.room_type_code','cfg_init_room_type.code');


        //QUERY CONDITION
            if(!empty($roomType)){
                $room->where('cfg_init_room.room_type_code',$roomType);
                $reservation->where('guest_detail.room_type_code',$roomType);
                $reservation2->where('guest_detail.room_type_code',$roomType);
                $folio->where('guest_detail.room_type_code',$roomType);
                $roomUnavailable->where('cfg_init_room.room_type_code',$roomType);
                $RoomType->where('cfg_init_room_type.code', $roomType);
            }
            if(!empty($bedType)){
                $room->where('cfg_init_room.bed_type_code',$bedType);
                $reservation->where('guest_detail.bed_type_code',$bedType);
                $reservation2->where('guest_detail.bed_type_code',$bedType);
            }

            if(!empty($unavailableID)){
                $roomUnavailable->where('room_unavailable.id_log','<>',$unavailableID);
            }
            if(!empty($folioNumber)){
                $folio->where('folio.number','<>', $folioNumber);
            }

            if($ready){
                $room->where('status_code', GlobalVariableController::$roomStatus['Ready']);
            }

            if($isAllotment){
                $roomAllotment->whereDate('room_allotment.from_date','<=', $arrivalDate);
            }

            if(!empty($reservationNumber)){
                $reservation->where('reservation.number','<>',$reservationNumber);
                $reservation2->where('reservation.number','<>',$reservationNumber);
            }

            if(!empty($roomNumber)){
                $room->whereNotIn('number', $reservation->get())
                    ->whereNotIn('number', $folio->get())
                    ->whereNotIn('number', $roomUnavailable->get())
                    ->whereNotIn('number', $roomAllotment->get());
            } else {
                $room->whereNotIn('number', $reservation->get())
                    ->whereNotIn('number', $folio->get())
                    ->whereNotIn('number', $roomUnavailable->get())
                    ->whereNotIn('number', $roomAllotment->get());
            }
            $totalRoom = count($room->get()) - count($reservation2->get());

            return $totalRoom;
}

    public static function getCompanyProfile(){
        $result= CompanyInformation::select(
            'hotel_information.name',
            'hotel_information.street',
            'hotel_information.city',
            'cfg_init_country.name as country',
            DB::raw('CONCAT(hotel_information.street," ",hotel_information.city) as CityStreet'),
            DB::raw('CONCAT(cfg_init_state.name," ",cfg_init_country.name) as CountryState'),
            'hotel_information.postal_code',
            DB::raw('CONCAT("Phone :",hotel_information.phone1," ",hotel_information.phone2," Fax :",hotel_information.fax) as Contact'),
            'hotel_information.phone1',
            'hotel_information.phone2',
            'hotel_information.fax',
            'hotel_information.email',
            'hotel_information.website',
            'hotel_information.foto'
            )
            ->leftJoin('cfg_init_country','hotel_information.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state','hotel_information.state_code','cfg_init_state.code')
            ->first();

            return $result;
    }

    public static function getRoomChargeWillPost($folioNumber){
        $auditDate = AuditLogController::auditDate();
        $folio = Folio::select(
            'folio.group_code',
            'folio.currency_code',
            'folio.exchange_rate',
            'folio.marketing_code',
            'folio.voucher_number',
            'folio.notes',
            'folio.compliment_hu',
            'guest_detail.arrival',
            'contact_person.title_code',
            'contact_person.full_name',
            'contact_person.street',
            'contact_person.city',
            'contact_person.country_code',
            'contact_person.state_code',
            'contact_person.postal_code',
            'contact_person.phone1',
            'contact_person.phone2',
            'contact_person.fax',
            'contact_person.email',
            'contact_person.website',
            'contact_person.company_code',
            'contact_person.guest_type_code',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_type_code',
            'guest_detail.bed_type_code',
            'guest_detail.room_number',
            'guest_detail.room_rate_code',
            'guest_detail.weekday_rate',
            'guest_detail.weekend_rate',
            'guest_detail.discount_percent',
            'guest_detail.discount',
            'guest_detail.business_source_code',
            'guest_detail.commission_type_code',
            'guest_detail.commission_value',
            'guest_detail.payment_type_code',
            'guest_detail.market_code',
            'cfg_init_room_rate.tax_and_service_code',
            'cfg_init_room_rate.charge_frequency_code')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
            ->where('folio.number',$folioNumber)
            ->first();
        if(!empty($folio)){
            $complimentHu= $folio->compliment_hu;
            if(HelperController::isScheduledRate($folioNumber,$auditDate)){
                $complimentHu = HelperController::getScheduledRateComplimentHu($folioNumber,$auditDate);
            }
            if(empty($complimentHu) || $complimentHu == ' '){
                if(HelperController::isCanPostRoomCharge($folio->charge_frequency_code,$folio->arrival)){
                    $roomNumber= $folio->room_number;
                    $currencyCode= $folio->currency_code;
                    $exchangeRate= $folio->exchange_rate;
                    if($exchangeRate <= 0){
                        $exchangeRate = 1;
                    }
                    $isScheduledRate= HelperController::isScheduledRate($folioNumber,$auditDate);
                    if($isScheduledRate){
                        $roomRateTaxServiceCode= HelperController::getRoomRateTaxAndServiceCode(HelperController::getScheduledRoomRateCode($folioNumber,$auditDate));
                        $roomChargeW8Breakdown = HelperController::getScheduledRoomRate($folioNumber,$auditDate) / $exchangeRate;
                        $complimentHu = HelperController::getScheduledRateComplimentHu($folioNumber,$auditDate);
                        $discount = 0;
                    } else {
                        $roomRateTaxServiceCode = $folio->tax_and_service_code;
                        if(HelperController::isWeekend($auditDate)){
                            $roomChargeW8Breakdown= $folio->weekend_rate;
                        }else{
                            $roomChargeW8Breakdown= $folio->weekday_rate;
                        }
                        $roomRateAmount= $roomChargeW8Breakdown;
                        $complimentHu= $folio->compliment_hu;

                        if(HelperController::variant($folio->discount_percent)){
                            $discount = FormatController::round3(($roomChargeW8Breakdown * $folio->discount) / 100);
                        } else {
                            $discount = $folio->discount;
                        }

                        if(!GlobalVariableController::postDiscount()){
                            $roomChargeW8Breakdown = $roomChargeW8Breakdown - $discount;
                            $discount = 0;
                        }
                    }
                    $roomChargeW8Breakdown = HelperController::getBasicTaxService(GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),$roomRateTaxServiceCode, $roomChargeW8Breakdown);
                    if(!empty($roomChargeW8Breakdown) || $roomChargeW8Breakdown > 0){
                        $roomChargeW8Breakdown = $roomChargeW8Breakdown['total'];
                    }
                }
            } else {
                $roomChargeW8Breakdown = 0;
            }
        }
        return $roomChargeW8Breakdown;
    }

    public static function getBalance($folioNumber){
        $mainTableName = 'sub_folio';
        $payment = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND sub_folio.type_code="C" then '.$mainTableName.'.amount ELSE "0" END))';
        $paymentC = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND sub_folio.type_code="D" then '.$mainTableName.'.amount ELSE "0" END))';
        $charge = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND sub_folio.type_code="D" then '.$mainTableName.'.amount ELSE "0" END))';
        $chargeC = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND sub_folio.type_code="C" then '.$mainTableName.'.amount ELSE "0" END))';
        $total = SubFolio::select(
            DB::raw($payment.'-'.$paymentC.' AS credit'),
            DB::raw($charge.'-'.$chargeC.' AS debit'),
            DB::raw('ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount_foreign ELSE "0" END)) AS credit_foreign'),
            DB::raw('ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount_foreign ELSE "0" END)) AS debit_foreign'),
            DB::raw('('.$charge.'-'.$chargeC.') - ('.$payment.'-'.$paymentC.') AS balance')
        )
        ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
        ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
        ->where('sub_folio.folio_number',$folioNumber)
        ->where('sub_folio.void','0')
        ->get();

        if(count($total) <> 0){
            $total = $total[0];
        }
        return $total;
    }

    public static function getRoomTypeAvailability($fromDate,$night, $isBedType, $filter){
        $toDate = FormatController::incDay($fromDate,$night);
        $bedType = $isBedType;
        if($bedType){
            $fieldRoomTypeCode1 = 'CONCAT(cfg_init_room.room_type_code, "XXXXXXXX", IFNULL(cfg_init_room.bed_type_code, "")) AS room_type_code';
            $fieldRoomTypeName1 = 'CONCAT(cfg_init_room_type.name, " ", IFNULL(cfg_init_bed_type.name, "")) AS name';
            $groupByBedType     = 'guest_detail.bed_type_code';
            $groupByBedType1    = 'cfg_init_room.bed_type_code';
            $orderByRoomType1   = 'cfg_init_room_type.id_sort';
            $fieldRoomTypeCode2 = 'CONCAT(guest_detail.room_type_code, "XXXXXXXX", IFNULL(guest_detail.bed_type_code, "")) AS room_type_code';
        }else{
            $fieldRoomTypeCode1 = 'cfg_init_room.room_type_code';
            $fieldRoomTypeName1 = 'cfg_init_room_type.name';
            $fieldRoomTypeCode2 = 'guest_detail.room_type_code';
        }

        $roomType = Room::select(
            DB::raw($fieldRoomTypeCode1),
            DB::raw($fieldRoomTypeName1),
            DB::raw('COUNT(cfg_init_room.number) AS count_room'))
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
            ->groupBy('cfg_init_room.room_type_code');
        if($bedType){
            $roomType->orderBy('cfg_init_bed_type.id_sort')
                ->groupBy(DB::raw($groupByBedType1))
                ->orderBy(DB::raw($orderByRoomType1));
        }

        $roomType = $roomType->get();

        $union2 = Folio::select(
            DB::raw($fieldRoomTypeCode2),
            DB::raw('COUNT(guest_detail.room_type_code) CountData'),
            DB::raw('DATE(guest_detail.arrival) AS arrival'),
            DB::raw('DATE(guest_detail.departure) AS departure'),
            DB::raw('IF(folio.compliment_hu="", "RS", folio.compliment_hu) AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>',$fromDate)
            ->groupBy('guest_detail.room_type_code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'))
            ->groupBy(DB::raw('DATE(guest_detail.departure)'));

        $union3= RoomUnavailable::select(
            DB::raw($fieldRoomTypeCode1),
            DB::raw('COUNT(cfg_init_room.room_type_code) CountData'),
            DB::raw('DATE(room_unavailable.from_date) AS arrival'),
            DB::raw('DATE(DATE_ADD(room_unavailable.to_date, INTERVAL 1 DAY)) AS departure'),
            'room_unavailable.status_code AS Code')
            ->leftJoin('cfg_init_room_unavailable_reason','room_unavailable.reason_code','cfg_init_room_unavailable_reason.code')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<=',$toDate)
            ->whereDate('room_unavailable.to_date','>=',$fromDate)
            ->groupBy('cfg_init_room.room_type_code')
            ->groupBy(DB::raw('DATE(room_unavailable.from_date)'))
            ->groupBy(DB::raw('DATE(DATE_ADD(room_unavailable.to_date, INTERVAL 1 DAY))'))
            ->groupBy('room_unavailable.status_code');

        $union4 = Reservation::select(
            DB::raw($fieldRoomTypeCode2),
            DB::raw('COUNT(guest_detail.room_type_code) CountData'),
            DB::raw('DATE(guest_detail.arrival) AS arrival'),
            DB::raw('DATE(guest_detail.departure) AS departure'),
            DB::raw('"EA" AS Code'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->groupBy('guest_detail.room_type_code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'));

        $union5 = Reservation::select(
            DB::raw($fieldRoomTypeCode2),
            DB::raw('COUNT(guest_detail.room_type_code) CountData'),
            DB::raw('DATE(guest_detail.arrival) AS arrival'),
            DB::raw('DATE(guest_detail.departure) AS departure'),
            DB::raw('"CI" AS Code'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['InHouse'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->orWhere('reservation.status_code',GlobalVariableController::$reservationStatus['CheckOut'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->groupBy('guest_detail.room_type_code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'));

        $union6 = Folio::select(
            DB::raw($fieldRoomTypeCode2),
            DB::raw('COUNT(guest_detail.room_type_code) CountData'),
            DB::raw('DATE(guest_detail.arrival) AS arrival'),
            DB::raw('DATE(guest_detail.departure) AS departure'),
            DB::raw('"WI" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code','<>',GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->where('folio.reservation_number','0')
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('guest_detail.room_type_code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'));

        $union7 = Folio::select(
            DB::raw($fieldRoomTypeCode2),
            DB::raw('COUNT(guest_detail.room_type_code) CountData'),
            DB::raw('DATE(guest_detail.arrival) AS arrival'),
            DB::raw('DATE(guest_detail.departure) AS departure'),
            DB::raw('"ED" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('guest_detail.room_type_code')
            ->groupBy(DB::raw('DATE(guest_detail.departure)'));

        $union8 = Folio::select(
            DB::raw($fieldRoomTypeCode2),
            DB::raw('COUNT(guest_detail.room_type_code) CountData'),
            DB::raw('DATE(guest_detail.arrival) AS arrival'),
            DB::raw('DATE(guest_detail.departure) AS departure'),
            DB::raw('"CO" AS Code'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Closed'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>=',$fromDate)
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->groupBy('guest_detail.room_type_code')
            ->groupBy(DB::raw('DATE(guest_detail.departure)'));

        if($bedType){
            $union2->groupBy('guest_detail.bed_type_code');
            $union3->groupBy('cfg_init_room.bed_type_code');
            $union4->groupBy('guest_detail.bed_type_code');
            $union5->groupBy('guest_detail.bed_type_code');
            $union6->groupBy('guest_detail.bed_type_code');
            $union7->groupBy('guest_detail.bed_type_code');
            $union8->groupBy('guest_detail.bed_type_code');
        }

        $roomData = Reservation::select(
            DB::raw($fieldRoomTypeCode2),
            DB::raw('COUNT(guest_detail.room_type_code) CountData'),
            DB::raw('DATE(guest_detail.arrival) AS arrival'),
            DB::raw('DATE(guest_detail.departure) AS departure'),
            DB::raw('"RV" AS Code'))
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','<=',$toDate)
            ->whereDate('guest_detail.departure','>',$fromDate)
            ->groupBy('guest_detail.room_type_code')
            ->groupBy(DB::raw('DATE(guest_detail.arrival)'))
            ->groupBy(DB::raw('DATE(guest_detail.departure)'))
            ->union($union2)
            ->union($union3)
            ->union($union4)
            ->union($union5)
            ->union($union6)
            ->union($union7)
            ->union($union8);

            if($bedType){
                $roomData->groupBy('guest_detail.bed_type_code');
            }
            $roomData= $roomData->limit(20)->get();

        $header= [];
        array_push($header,
            [
                "headerName" => "Room Type",
                "field" => "RoomType",
                "width" => 200,
                "pinned" => "left",
                "resizable" => true
            ],
            [
                "headerName" => "Rooms",
                "field" => "rooms",
                "width" => 90,
                "cellStyle" => "{ textAlign: 'center' }",
                "resizable" => false
            ]
        );

            for($i = 0; $i < $night; $i++){
                $headerDate = FormatController::incDay($fromDate, $i);
                $headerDateStr = FormatController::formatLongDate($headerDate);
                if(is_array($filter)){
                    if(count($filter) < 2 && count($filter) > 0){
                        $headerDateStr = FormatController::formatDate($headerDate);
                    } else if (count($filter) == 0){
                        $headerDateStr = FormatController::formatDayDate($headerDate);
                    }
                } else if(empty($filter)){
                    $headerDateStr = FormatController::formatDayDate($headerDate);
                }
                array_push($header,[
                    "headerName" => $headerDateStr,
                    "cellStyle" => "{textAlign : 'center', border-right-width: '1px!important' }",
                    "children" => [
                        [
                            "headerName" => "RV",
                            "field" => "RV".$i,
                            "width" => 65,
                            "hide" => !(self::arrayEquivalent($filter, 1)),
                            "cellStyle" => ["textAlign" => 'center'],
                            "resizable" => false
                        ],
                        [
                            "headerName" => self::arrayEquivalent($filter, 2) && self::arrayEquivalent($filter, 4) && self::arrayEquivalent($filter, 4) ? "Occupied" : "OC",
                            "cellStyle" => ["textAlign" => 'center'],
                            "children" => [
                                [
                                    "headerName" => "RS",
                                    "field" => "RS".$i,
                                    "width" => 65,
                                    "hide" => !(self::arrayEquivalent($filter, 2)),
                                    "cellStyle" => ["textAlign" => 'center'],
                                    "resizable" => false
                                ],
                                [
                                    "headerName" => "RC",
                                    "field" => "RC".$i,
                                    "width" => 65,
                                    "hide" => !(self::arrayEquivalent($filter, 3)),
                                    "cellStyle" => ["textAlign" => 'center'],
                                    "resizable" => false
                                ],
                                [
                                    "headerName" => "HU",
                                    "field" => "HU".$i,
                                    "width" => 65,
                                    "hide" => !(self::arrayEquivalent($filter, 4)),
                                    "cellStyle" => ["textAlign" => 'center'],
                                    "resizable" => false
                                ],
                            ],
                        ],
                        [
                            "headerName" => self::arrayEquivalent($filter, 5) && self::arrayEquivalent($filter, 6) && self::arrayEquivalent($filter, 7) ? "Unavailable" : "UV",
                            "cellStyle" => ["textAlign" => 'center'],
                            "children" => [
                                [
                                    "headerName" => "OO",
                                    "field" => "OO".$i,
                                    "width" => 65,
                                    "hide" => !(self::arrayEquivalent($filter, 5)),
                                    "cellStyle" => ["textAlign" => 'center'],
                                    "resizable" => false
                                ],
                                [
                                    "headerName" => "OF",
                                    "field" => "OF".$i,
                                    "width" => 65,
                                    "hide" => !(self::arrayEquivalent($filter, 6)),
                                    "cellStyle" => ["textAlign" => 'center'],
                                    "resizable" => false
                                ],
                                [
                                    "headerName" => "UC",
                                    "field" => "UC".$i,
                                    "width" => 65,
                                    "hide" => !(self::arrayEquivalent($filter, 7)),
                                    "cellStyle" => ["textAlign" => 'center'],
                                    "resizable" => false
                                ],
                            ],
                        ],
                        [
                            "headerName" => "AV",
                            "field" => "AV".$i,
                            "width" => 65,
                            // "hide" => !(self::arrayEquivalent($filter, 8)),
                            "headerClass" => "header-av",
                            "cellStyle" => ["textAlign" => 'center', 'backgroundColor' => '#aaffaa'],
                            "resizable" => false
                        ],
                        [
                            "headerName" => "EA",
                            "field" => "EA".$i,
                            "width" => 65,
                            "hide" => !(self::arrayEquivalent($filter, 9)),
                            "cellStyle" => ["textAlign" => 'center'],
                            "resizable" => false
                        ],
                        [
                            "headerName" => "CI",
                            "field" => "CI".$i,
                            "width" => 65,
                            "hide" => !(self::arrayEquivalent($filter, 10)),
                            "cellStyle" => ["textAlign" => 'center'],
                            "resizable" => false
                        ],
                        [
                            "headerName" => "WI",
                            "field" => "WI".$i,
                            "width" => 65,
                            "hide" => !(self::arrayEquivalent($filter, 11)),
                            "cellStyle" => ["textAlign" => 'center'],
                            "resizable" => false
                        ],
                        [
                            "headerName" => "ED",
                            "field" => "ED".$i,
                            "width" => 65,
                            "hide" => !(self::arrayEquivalent($filter, 12)),
                            "cellStyle" => ["textAlign" => 'center'],
                            "resizable" => false
                        ],
                        [
                            "headerName" => "CO",
                            "field" => "CO".$i,
                            "width" => 65,
                            "hide" => !(self::arrayEquivalent($filter, 13)),
                            "cellStyle" => ["textAlign" => 'center'],
                            "resizable" => false
                        ],
                    ]
                ]);
            }

            $totalRoom = 0;
            if(!empty($roomData)){
                $data=[];
                $RVT= [];
                $roomTotal=0;
                $RVT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $RST = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $RCT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $HUT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $OOT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $OFT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $UCT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $AVT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $EAT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $CIT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $WIT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $EDT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                $COT = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                $countRoomType = 0;
                foreach($roomType as $roomTypeX){
                    $roomTypes= $roomTypeX->name;
                    $totalRoom = $roomTypeX->count_room;
                    $RV = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $RS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $RC = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $HU = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $OO = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $OF = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $UC = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $AV = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $EA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $CI = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $WI = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $ED = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                    $CO = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

                    foreach($roomData as $roomDataX){
                        $diffStart = FormatController::daysBetween($fromDate, $roomDataX->arrival);
                        $diffEnd = FormatController::daysBetween($roomDataX->arrival, $roomDataX->departure);

                        $CountStart = $diffStart;
                        if($roomTypeX->room_type_code == $roomDataX->room_type_code){
                            for($i = $CountStart; $i<$CountStart + $diffEnd; $i++){
                                if($i >= 0){
                                    if ($roomDataX->Code == 'RV'){
                                        $RV[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'OC'){
                                        $RS[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == GlobalVariableController::$roomStatus['Compliment']){
                                        $RC[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == GlobalVariableController::$roomStatus['HouseUse']){
                                        $HU[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'OO'){
                                        $OO[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'OF'){
                                        $OF[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'UC'){
                                        $UC[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'AV'){
                                        $AV[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'EA'){
                                        $EA[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'CI'){
                                        $CI[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'WI'){
                                        $WI[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'ED'){
                                        $ED[$i] += $roomDataX->CountData;
                                    } else if ($roomDataX->Code == 'CO'){
                                        $CO[$i] += $roomDataX->CountData;
                                    }
                                }
                            }
                        }
                    }

                    array_push($data,[
                        'RoomType' => $roomTypes,
                        'rooms' => $totalRoom,
                    ]);
                    for($i = 0; $i < 30; $i++){
                        $data[$countRoomType]['RV'.$i] = $RV[$i];
                        $data[$countRoomType]['RS'.$i] = $RS[$i];
                        $data[$countRoomType]['RC'.$i] = $RC[$i];
                        $data[$countRoomType]['HU'.$i] = $HU[$i];
                        $data[$countRoomType]['OO'.$i] = $OO[$i];
                        $data[$countRoomType]['OF'.$i] = $OF[$i];
                        $data[$countRoomType]['UC'.$i] = $UC[$i];
                        $data[$countRoomType]['AV'.$i] = $totalRoom - $RV[$i] - $RS[$i] - $RC[$i] - $HU[$i] - $OO[$i] - $OF[$i] - $UC[$i];
                        $data[$countRoomType]['EA'.$i] = $EA[$i];
                        $data[$countRoomType]['CI'.$i] = $CI[$i];
                        $data[$countRoomType]['WI'.$i] = $WI[$i];
                        $data[$countRoomType]['ED'.$i] = $ED[$i];
                        $data[$countRoomType]['CO'.$i] = $CO[$i];
                    }

                    for($i = 0; $i < 30; $i++){
                        $RVT[$i] += $RV[$i];
                        $RST[$i] += $RS[$i];
                        $RCT[$i] += $RC[$i];
                        $HUT[$i] += $HU[$i];
                        $OOT[$i] += $OO[$i];
                        $UCT[$i] += $UC[$i];
                        $OFT[$i] += $OF[$i];
                        $EAT[$i] += $EA[$i];
                        $CIT[$i] += $CI[$i];
                        $WIT[$i] += $WI[$i];
                        $EDT[$i] += $ED[$i];
                        $COT[$i] += $CO[$i];
                    }
                    $countRoomType += 1;

                    $roomTotal +=$totalRoom;
                }

                array_push($data,[
                    'RoomType' => "TOTAL",
                    'rooms' => $roomTotal,
                ]);
                for($i = 0; $i < 30; $i++){
                    $data[count($data) - 1]['RV'.$i] = $RVT[$i];
                    $data[count($data) - 1]['RS'.$i] = $RST[$i];
                    $data[count($data) - 1]['RC'.$i] = $RCT[$i];
                    $data[count($data) - 1]['HU'.$i] = $HUT[$i];
                    $data[count($data) - 1]['OO'.$i] = $OOT[$i];
                    $data[count($data) - 1]['OF'.$i] = $OFT[$i];
                    $data[count($data) - 1]['UC'.$i] = $UCT[$i];
                    $data[count($data) - 1]['AV'.$i] = $roomTotal - $RVT[$i] - $RST[$i] - $RCT[$i] - $HUT[$i] - $OOT[$i] - $OFT[$i] - $UCT[$i];
                    $data[count($data) - 1]['EA'.$i] = $EAT[$i];
                    $data[count($data) - 1]['CI'.$i] = $CIT[$i];
                    $data[count($data) - 1]['WI'.$i] = $WIT[$i];
                    $data[count($data) - 1]['ED'.$i] = $EDT[$i];
                    $data[count($data) - 1]['CO'.$i] = $COT[$i];
                }
            }

            return response()->json([
                'header'=> $header,
                'data'  => $data
            ]);

    }

    public static function getRoomAvailability2($fromDate){
        $toDate = FormatController::incDay($fromDate,9);
        $dates= FormatController::priodeOfDates($fromDate,$toDate);
        $byBedType= false;

        $data= [];
        $dateList=[];
        $RoomType = RoomType::select('code','name')->orderBy('id_sort')->get();
        $xbedType= BedType::select('code','name')->get();

        $reservation = Reservation::select('number')
                    ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
                    ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New']);
        $folio= Folio::select('number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio']);

        $roomUnavailable = RoomUnavailable::select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number');
        $roomAllotment = DB::table('room_allotment')->select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_allotment.room_number','cfg_init_room.number');

        $room = Room::select('cfg_init_room_type.name as room_type',DB::raw('COUNT(number) as total'))
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code');

        if($byBedType){
            $room->select('cfg_init_room_type.name as room_type', DB::raw('COUNT(cfg_init_room_type.code) as total'),'cfg_init_bed_type.name as bed_type')
                ->groupBy('cfg_init_bed_type.code');
        }
        $xreservation = Reservation::select('number')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New']);

        $xfolio= Folio::select('number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio']);

        $xroom = Room::select('number')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
            ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code');
        foreach( $RoomType as $roomType){
            $total= [];
            $BedType= [];
            foreach($dates as $arrivalDate){
                $departureDate = FormatController::incDay($arrivalDate,1);

                //QUERY SELECTED
                $reservation->whereDate('guest_detail.arrival','<',$departureDate)
                    ->whereDate('guest_detail.departure','>',$arrivalDate)
                    ->where('room_type_code',$roomType->code);
                $folio->whereDate('guest_detail.arrival','<',$departureDate)
                    ->whereDate('guest_detail.departure','>',$arrivalDate)
                    ->where('room_type_code',$roomType->code);
                $roomUnavailable
                    ->whereDate('room_unavailable.from_date','<',$departureDate)
                    ->whereDate('room_unavailable.to_date','>=',$arrivalDate);
                $room->where('room_type_code',$roomType->code);

                //TOTAL ROOM
                $xreservation->whereDate('guest_detail.arrival','<',$departureDate)
                ->whereDate('guest_detail.departure','>',$arrivalDate);
                $xfolio->whereDate('guest_detail.arrival','<',$departureDate)
                ->whereDate('guest_detail.departure','>',$arrivalDate);

                foreach($xbedType as $bedType){
                    //BED TYPE
                    $xxreservation = Reservation::select('number')
                    ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
                    ->leftJoin('cfg_init_bed_type','guest_detail.bed_type_code','cfg_init_bed_type.code')
                    ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
                    ->whereDate('guest_detail.arrival','<',$departureDate)
                    ->whereDate('guest_detail.departure','>',$arrivalDate)
                    ->where('room_type_code',$roomType->code)
                    ->where('cfg_init_bed_type.code', $bedType->code)->get();
                    $xxfolio= Folio::select('number')
                    ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                    ->leftJoin('cfg_init_bed_type','guest_detail.bed_type_code','cfg_init_bed_type.code')
                    ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
                    ->whereDate('guest_detail.arrival','<',$departureDate)
                    ->whereDate('guest_detail.departure','>',$arrivalDate)
                    ->where('room_type_code',$roomType->code)
                    ->where('cfg_init_bed_type.code', $bedType->code)->get();
                    $xxroom = Room::select('number')
                    ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
                    ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
                    ->where('room_type_code',$roomType->code)
                    ->where('cfg_init_room.bed_type_code', $bedType->code)
                    ->get();

                    $xxroom = count($xxroom) - count($xxreservation) - count($xxfolio);
                    array_push($BedType,[
                        'room' => $xxroom,
                        'type' => $bedType->name]);
                }

                $room = $room->first();
                $room = !empty($room) ? $room->total : 0;
                $room = $room - count($reservation->get()) - count($folio->get());
                $room = $room < 0 ? 0 : $room;
                $xroom = count($xroom->get()) - count($xreservation->get()) - count($xfolio->get());

                    array_push($total,[
                        'room' => $room,
                        'total' => $xroom]);

                    array_push($dateList,[
                        'date' => $arrivalDate]);
            }

            $tmp = [];
            $out = [];

            foreach($BedType as $arg)
            {
                $tmp[$arg['type']][] = $arg['room'];
            }

            // $output = array();

            foreach($tmp as $type => $labels)
            {
                $kk=[];
                foreach($labels as $lbl){
                    array_push($kk,[
                        'room'=>$lbl
                    ]);
                }
                array_push($out,[
                    'type' => $type,
                    'room' => $kk
                ]);
            }


            $roomType= $roomType->name;
            array_push($data,[
                'dateRange' => $dateList,
                'type' => $roomType,
                'available' => $total,
                'bed'=>$out
            ]);
        }

        return response()->json($data);
    }

    public static function getRoomRateDynamic($fromDate, $night){
        $mainTableName = 'cfg_init_room_rate';
        $detailTableName = 'cfg_init_room_rate_session';
        //generate Header for AgGrid
        $headerAgGrid = [
            [
                "headerName" => "Action",
                "field" => "code",
                "width" => 50,
                "colId" => "1",
                "pinned" => "left",
                "cellRenderer" => 'actionGrid',
                "suppressMenu" => true
            ],
            [
                "headerName" => "Code",
                "field" => "code",
                "width" => 100,
                "colId" => "2",
                "pinned" => "left",
                "suppressMenu" => true
            ],
            [
                "headerName" => "Name",
                "field" => "name",
                "width" => 200,
                "colId" => "3",
                "resizable" => false,
                "suppressMenu" => true
            ],
            [
                "headerName" => "Inv Code",
                "field" => "inv_code",
                "width" => 100,
                "colId" => "4",
                "resizable" => false,
                "suppressMenu" => true
            ],[
                "headerName" => "Online",
                "field" => "is_online",
                "width" => 100,
                "colId" => "5",
                "cellStyle" =>  ["textAlign" => 'center' ],
                "cellRenderer" => "cekIconRenderer",
                "resizable" => true,
            ],[
                "headerName" => "Weekday Rate 1",
                "field" => "weekday_rate1",
                "width" => 200,
                "colId" => "6",
                "cellStyle" =>  ["textAlign" => 'right' ],
                "valueFormatter" =>  "formatNumber",
                "resizable" => true,
            ]];



        for($i = 0; $i < $night; $i++){
            $headerDate = FormatController::incDay($fromDate, $i);
            $headerDateStr = FormatController::formatLongDate($headerDate);
            $date = FormatController::formatDate($headerDate);

            $headerAgGrid [] = [
                "headerName" => $headerDateStr,
                "field" => "Date".$i,
                "width" => 150,
                "colId" => $date,
                "cellStyle" =>  ["textAlign" => 'right' ],
                "valueFormatter" =>  "formatNumber",
                "editable" => true,
                "resizable" => true,
            ];
        }

        // $folioStatus = DB::table('folio')
        //             ->select('guest_detail.room_number')
        //             ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
        //             ->where('folio.status_code', GlobalVariableController::$folioStatus['Open']);

        $queryRoomRateSession = DB::table($detailTableName)
            ->select(
                $detailTableName.'.room_rate_code',
                $detailTableName.'.from_date',
                $detailTableName.'.to_date',
                DB::raw('ROUND('.$detailTableName.'.amount,3) as amount'))
            ->leftJoin($mainTableName, $detailTableName.'.room_rate_code',$mainTableName.'.code')
            ->where($mainTableName.'.dynamic_rate_type_code', GlobalVariableController::$dynamicRateType['BaseSession'] )
            ->orderBy($detailTableName.'.from_date')
            ->orderBy($detailTableName.'.to_date')
            ->get();

        $queryRoomRate = DB::table($mainTableName)
                ->select('code', 'name', 'is_online', 'weekday_rate1', 'cm_inv_code')
                ->where('dynamic_rate_type_code', GlobalVariableController::$dynamicRateType['BaseSession'])
                ->orderBy('id_sort')
                ->get();

        $endDate = FormatController::incDay($fromDate, $night);
    // From reservation
        $rateJSON = [];
    //Modifikasi json Room & Make New Json
        $diffStart = 0;
        $diffEnd = 0;
        foreach($queryRoomRate as $queryRoomRateX){
            $DateData = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

            foreach($queryRoomRateSession as $queryRoomRateSessionX){
                if($queryRoomRateX->code == $queryRoomRateSessionX->room_rate_code){

                    $diffStart = FormatController::daysBetween($fromDate, $queryRoomRateSessionX->from_date);
                    $diffEnd = FormatController::daysBetween($queryRoomRateSessionX->from_date, $queryRoomRateSessionX->to_date) + 1;

                    $CountStart = $diffStart ;



                    for($i = 0; $i < $night; $i++){
                        if(!$DateData[$i]){
                            $DateData[$i] = $queryRoomRateX->weekday_rate1;
                        }
                    }

                    for($i = $CountStart; $i<$CountStart + $diffEnd; $i++){
                        if($i >= 0){
                            $DateData[$i] = $queryRoomRateSessionX->amount;
                        }
                    }

                }
            }

            //Max 30 hari
            $rateJSON[] = [
                "code"=> $queryRoomRateX->code,
                "name" => $queryRoomRateX->name,
                "inv_code"=> $queryRoomRateX->cm_inv_code,
                "is_online"=> $queryRoomRateX->is_online,
                "weekday_rate1" => $queryRoomRateX->weekday_rate1,
                //==========================================
                "Date0"=> $DateData[0],
                "Date1"=> $DateData[1],
                "Date2"=> $DateData[2],
                "Date3"=> $DateData[3],
                "Date4"=> $DateData[4],
                "Date5"=> $DateData[5],
                "Date6"=> $DateData[6],
                "Date7"=> $DateData[7],
                "Date8"=> $DateData[8],
                "Date9"=> $DateData[9],
                "Date10"=> $DateData[10],
                "Date11"=> $DateData[11],
                "Date12"=> $DateData[12],
                "Date13"=> $DateData[13],
                "Date14"=> $DateData[14],
                "Date15"=> $DateData[15],
                "Date16"=> $DateData[16],
                "Date17"=> $DateData[17],
                "Date18"=> $DateData[18],
                "Date19"=> $DateData[19],
                "Date20"=> $DateData[20],
                "Date21"=> $DateData[21],
                "Date22"=> $DateData[22],
                "Date23"=> $DateData[23],
                "Date24"=> $DateData[24],
                "Date25"=> $DateData[25],
                "Date26"=> $DateData[26],
                "Date27"=> $DateData[27],
                "Date28"=> $DateData[28],
                "Date29"=> $DateData[29]
            ];
        }

        return response()->json([
            'header' => $headerAgGrid,
            'data' => $rateJSON,
            'stat' => $diffStart,
            'end' => $diffEnd
        ]);
    }


    public static function getRoomAvailabilityForm($fromDate, $night, $roomTypeCode, $bedTypeCode, $building, $floor, $roomViewCode, $roomStatusCode, $smokingRoom){
            $mainTableName = 'cfg_init_room';
            $smokingRoom = $smokingRoom == 'Yes' ? '-1' : ( $smokingRoom == 'No' ? '0' : '');
        //generate Header for AgGrid
                $headerAgGrid = [ Array (
                        "headerName" => "Number",
                        "field" => "room_number",
                        "width" => 80,
                        "colId" => "number",
                        "pinned" => "left",
                        "suppressMenu" => true
                    ),
                    Array (
                        "headerName" => "RS",
                        "field" => "status_code",
                        "width" => 50,
                        "cellRenderer" => "statusRenderer",
                        "resizable" => false,
                        "suppressMenu" => true
                    ),
                    Array (
                        "headerName" => "RB",
                        "field" => "block_status_code",
                        "width" => 50,
                        "cellRenderer" => "statusRenderer",
                        "resizable" => false,
                        "suppressMenu" => true
                    ),
                    Array (
                        "headerName" => "Type",
                        "field" => "room_type_code",
                        "width" => 80,
                        "resizable" => true,
                    ),
                    Array (
                        "headerName" => "View",
                        "field" => "RoomView",
                        "width" => 200,
                        "resizable" => true,
                    ),
                    Array (
                        "headerName" => "Smoking",
                        "field" => "Smoking",
                        "width" => 90,
                        "resizable" => true,
                    ),
                    Array (
                        "headerName" => "Description",
                        "field" => "RoomType",
                        "width" => 250,
                        "resizable" => true,
                    ),
        //=====Hide Column====
                    Array (
                        "headerName" => "Bed Type Code",
                        "field" => "bed_type_code",
                        "width" => 50,
                        "hide" => true,
                    ),
        //======================
                    Array (
                        "headerName" => "Expected Departure",
                        "field" => "ED",
                        "width" => 150,
                        "cellRenderer" => "colorStatusRenderer",
                        "resizable" => true,
                    )];



                for($i = 0; $i < $night; $i++){
                    $headerDate = FormatController::incDay($fromDate, $i);
                    $headerDateStr = FormatController::formatLongDate($headerDate);

                    $headerAgGrid [] = array (
                        "headerName" => $headerDateStr,
                        "field" => "Date".$i,
                        "width" => 150,
                        "cellRenderer" => "colorStatusRenderer",
                        "resizable" => true,
                    );
                }

                $folioStatus = DB::table('folio')
                            ->select('guest_detail.room_number')
                            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                            ->where('folio.status_code', GlobalVariableController::$folioStatus['Open']);


                $queryRoom = DB::table($mainTableName)
                            ->select($mainTableName.'.number',
                                    $mainTableName.'.name',
                                    $mainTableName.'.room_type_code',
                                    $mainTableName.'.bed_type_code',
                                    DB::raw('IF(IFNULL(FolioStatus.room_number,"")="",CONCAT("V", '.$mainTableName.'.status_code), CONCAT("O", '.$mainTableName.'.status_code)) AS status_code'),
                                    $mainTableName.'.block_status_code',
                                    $mainTableName.'.remark',
                                    DB::raw('CONCAT(cfg_init_room_type.name, " ", cfg_init_bed_type.name) AS RoomType'),
                                    DB::raw('cfg_init_room_view.name AS RoomView'),
                                    DB::raw('IF('.$mainTableName.'.is_smoking="0", "No", "Yes") AS Smoking'),
                                    DB::raw('IF(IFNULL(FolioStatus.room_number,"")="","0","-1") AS IsOccupied'))
                            ->leftJoin('cfg_init_room_type', $mainTableName.'.room_type_code', 'cfg_init_room_type.code')
                            ->leftJoin('cfg_init_bed_type', $mainTableName.'.bed_type_code', 'cfg_init_bed_type.code')
                            ->leftJoin('cfg_init_room_view', $mainTableName.'.view_code', 'cfg_init_room_view.code')
                            ->leftJoinSub($folioStatus, 'FolioStatus', function($join){
                                $join->on('cfg_init_room.number','FolioStatus.room_number');
                            })
                            ->where($mainTableName.'.room_type_code','like', '%'.$roomTypeCode.'%')
                            ->where($mainTableName.'.bed_type_code','like', '%'.$bedTypeCode.'%')
                            ->where($mainTableName.'.status_code','like', '%'.$roomStatusCode.'%')
                            ->where($mainTableName.'.building','like', '%'.$building.'%')
                            ->where($mainTableName.'.floor','like', '%'.$floor.'%')
                            ->where($mainTableName.'.view_code','like', '%'.$roomViewCode.'%')
                            ->where($mainTableName.'.is_smoking','like', '%'.$smokingRoom.'%')
                            ->orderBy('cfg_init_room.id_sort')
                            ->orderBY('cfg_init_room.number')
                            ->get();

                $tableUnionName1 = 'reservation';
                $reservationMark = 'R';
                $endDate = FormatController::incDay($fromDate, $night);
        // From reservation
                $union1 = DB::table($tableUnionName1)
                        ->select('guest_detail.room_number',
                                DB::raw('DATE(guest_detail.arrival) AS arrival'),
                                DB::raw('DATE(guest_detail.departure) AS departure'),
                                'reservation.number',
                                DB::raw('CONCAT(IFNULL(contact_person.title_code, ""), contact_person.full_name) AS FullName'),
                                DB::raw('"'.$reservationMark.'" AS TypeX'),
                                DB::raw('"" AS RoomStatusCode'))
                        ->leftJoin('contact_person', $tableUnionName1.'.contact_person_id', 'contact_person.id')
                        ->leftJoin('guest_detail', $tableUnionName1.'.guest_detail_id', 'guest_detail.id')
                        ->where($tableUnionName1.'.status_code', GlobalVariableController::$reservationStatus['New'])
                        ->where('guest_detail.room_number', '<>', "")
                        ->whereDate('guest_detail.arrival', '<',  $endDate)
                        ->whereDate('guest_detail.departure', '>',  $fromDate)
                        ->where('guest_detail.room_type_code', 'like', '%'.$roomTypeCode.'%');
        //From Folio
                $tableUnionName2 = 'folio';
                $folioMark = 'O';
                $startDateOccupied = FormatController::incDay($fromDate, -1);
                $union2 = DB::table($tableUnionName2)
                        ->select('guest_detail.room_number',
                                    DB::raw('DATE(guest_detail.arrival) AS arrival'),
                                    DB::raw('DATE(guest_detail.departure) AS departure'),
                                    $tableUnionName2.'.number',
                                    DB::raw('CONCAT(IFNULL(contact_person.title_code, ""), contact_person.full_name) AS FullName'),
                                    DB::raw('"'.$folioMark.'" AS TypeX'),
                                    DB::raw($tableUnionName2.'.compliment_hu AS RoomStatusCode'))
                        ->leftJoin('contact_person', $tableUnionName2.'.contact_person_id', 'contact_person.id')
                        ->leftJoin('guest_detail', $tableUnionName2.'.guest_detail_id', 'guest_detail.id')
                        ->where($tableUnionName2.'.status_code', GlobalVariableController::$folioStatus['Open'])
                        ->where($tableUnionName2.'.type_code', GlobalVariableController::$folioType['GuestFolio'])
                        ->whereDate('guest_detail.arrival', '<',  $endDate)
                        ->whereDate('guest_detail.departure', '>',  $startDateOccupied)
                        ->where('guest_detail.room_type_code', 'like', '%'.$roomTypeCode.'%');

        //Merge All Union
                $tableRoomData = 'room_unavailable';
                $unavailableMark = 'U';
                $queryRoomData = DB::table($tableRoomData)
                                ->select($tableRoomData.'.room_number',
                                        DB::raw('DATE('.$tableRoomData.'.from_date) AS arrival'),
                                        DB::raw('DATE(DATE_ADD('.$tableRoomData.'.to_date, INTERVAL 1 DAY)) AS departure'),
                                        DB::raw($tableRoomData.'.id_log AS number'),
                                        DB::raw('CONCAT(cfg_init_room_unavailable_reason.description, IF('.$tableRoomData.'.note="", "", CONCAT(" - ", '.$tableRoomData.'.note))) AS FullName'),
                                        DB::raw('"'.$unavailableMark.'" AS TypeX'),
                                        DB::raw($tableRoomData.'.status_code AS RoomStatusCode'))
                                ->leftJoin('cfg_init_room_unavailable_reason', $tableRoomData.'.reason_code', 'cfg_init_room_unavailable_reason.code')
                                ->leftJoin('cfg_init_room', $tableRoomData.'.room_number', 'cfg_init_room.number')
                                ->whereDate('room_unavailable.from_date', '<=', $endDate)
                                ->whereDate('room_unavailable.to_date', '>=', $fromDate)
                                ->where('cfg_init_room.room_type_code', 'like', '%'.$roomTypeCode.'%')
                                ->union($union1)
                                ->union($union2)
                                ->get();
                $roomJson = [];
        //Modifikasi json Room & Make New Json
                foreach($queryRoom as $queryRoomX){
                    $DateData = array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
                    $ED = '';
                    $typeX = '';
                    $number = '';
                    $folio_number = '';
                    $statusCode2 = '';

                    foreach($queryRoomData as $queryRoomDataX){
                        if($queryRoomX->number == $queryRoomDataX->room_number){
        //Checking Expected Departure
                            if($fromDate == $queryRoomDataX->departure && $queryRoomDataX->TypeX == $folioMark){
                            $ED = $queryRoomDataX->FullName."|".$queryRoomDataX->number."|ED";
                            }
                            else{
                                $diffStart = FormatController::daysBetween($fromDate, $queryRoomDataX->arrival);
                                $diffEnd = FormatController::daysBetween($queryRoomDataX->arrival, $queryRoomDataX->departure);

                                $CountStart = $diffStart;
                                $typeX = $queryRoomDataX->TypeX;
                                $number  = $queryRoomDataX->number;
                                $folio_number = $queryRoomDataX->number;

                                for($i = $CountStart; $i<$CountStart + $diffEnd; $i++){
                                    if($i >= 0){
                                        if ($queryRoomDataX->TypeX == 'U'){
                                            $DateData[$i] = str_replace('|', ' ', $queryRoomDataX->FullName)."|".$queryRoomDataX->number."|".$queryRoomDataX->TypeX."|".$queryRoomDataX->RoomStatusCode;
                                            $statusCode2 = $queryRoomDataX->RoomStatusCode;
                                        }
                                        else{
                                            $DateData[$i] = str_replace('|', ' ', $queryRoomDataX->FullName)."|".$queryRoomDataX->number."|".$queryRoomDataX->TypeX;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    //Max 30 hari
                    $roomJson[] = [
                        "room_number"=> $queryRoomX->number,
                        "name" => $queryRoomX->name,
                        "room_type_code"=> $queryRoomX->room_type_code,
                        "status_code"=> $queryRoomX->status_code,
                        "status_code2" => $statusCode2,
                        "block_status_code"=> $queryRoomX->block_status_code,
                        "remark"=> $queryRoomX->remark,
                        "RoomType"=> $queryRoomX->RoomType,
                        "RoomView"=> $queryRoomX->RoomView,
                        "Smoking"=> $queryRoomX->Smoking,
                        "IsOccupied"=> $queryRoomX->IsOccupied,
                        "ED"=> $ED,
        //====================Hide Columns==========
                        "bed_type_code" => $queryRoomX->bed_type_code,
        //==========================================
                        "Date0"=> $DateData[0],
                        "Date1"=> $DateData[1],
                        "Date2"=> $DateData[2],
                        "Date3"=> $DateData[3],
                        "Date4"=> $DateData[4],
                        "Date5"=> $DateData[5],
                        "Date6"=> $DateData[6],
                        "Date7"=> $DateData[7],
                        "Date8"=> $DateData[8],
                        "Date9"=> $DateData[9],
                        "Date10"=> $DateData[10],
                        "Date11"=> $DateData[11],
                        "Date12"=> $DateData[12],
                        "Date13"=> $DateData[13],
                        "Date14"=> $DateData[14],
                        "Date15"=> $DateData[15],
                        "Date16"=> $DateData[16],
                        "Date17"=> $DateData[17],
                        "Date18"=> $DateData[18],
                        "Date19"=> $DateData[19],
                        "Date20"=> $DateData[20],
                        "Date21"=> $DateData[21],
                        "Date22"=> $DateData[22],
                        "Date23"=> $DateData[23],
                        "Date24"=> $DateData[24],
                        "Date25"=> $DateData[25],
                        "Date26"=> $DateData[26],
                        "Date27"=> $DateData[27],
                        "Date28"=> $DateData[28],
                        "Date29"=> $DateData[29]
                    ];
                }
                return response()->json([
                    'header' => $headerAgGrid,
                    'roomJson' => $roomJson,
                ]);

            }

    public static function getRoomAvailability($roomType, $bedType, $arrivalDate, $departureDate, $reservationNumber, $folioNumber, $unavailableID,$roomAllotmentID, $isAllotment, $roomNumber, $ready, $isReservation, $isInHouse){
        $ready = $ready <> '' ? $ready : false;
        $countDay = FormatController::daysBetween(FormatController::formatDate($arrivalDate), FormatController::formatDate($departureDate));
        $fromDate= FormatController::formatDate($arrivalDate);
        $toDate= FormatController::formatDate($departureDate);
        $period = new DatePeriod(new DateTime($fromDate),new DateInterval('P1D'),new DateTime($toDate));
        if($countDay <= 0){
            return 0;
        }

        //QUERY SELECTED
        $reservation = Reservation::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate);
        $folio= Folio::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<',$departureDate)
            ->whereDate('guest_detail.departure','>',$arrivalDate);
        $roomUnavailable = RoomUnavailable::select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<',$departureDate)
            ->whereDate('room_unavailable.to_date','>=',$arrivalDate);
        $roomAllotment = DB::table('room_allotment')->select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_allotment.room_number','cfg_init_room.number');
        $room = Room::select('number')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code');
        $RoomType = RoomType::select('code as room_type')
            ->leftJoin('cfg_init_room','cfg_init_room.room_type_code','cfg_init_room_type.code');


        //QUERY CONDITION
            if(!empty($roomType)){
                $room->where('cfg_init_room.room_type_code',$roomType);
                $reservation->where('guest_detail.room_type_code',$roomType);
                $folio->where('guest_detail.room_type_code',$roomType);
                $roomUnavailable->where('cfg_init_room.room_type_code',$roomType);
                $RoomType->where('cfg_init_room_type', $roomType);
            }
            if(!empty($bedType)){
                $room->where('cfg_init_room.bed_type_code',$bedType);
                $reservation->where('guest_detail.bed_type_code',$bedType);
            }

            if(!empty($unavailableID)){
                $roomUnavailable->where('room_unavailable.id_log','<>',$unavailableID);
            }
            if(!empty($resvNumber)){
                $reservation->where('reservation.number','<>',$reservationNumber);
            }
            if(!empty($folioNumber)){
                $folio->where('folio.number','<>', $folioNumber);
            }

            if($ready){
                $room->where('status_code', GlobalVariableController::$roomStatus['Ready']);
            }

            if($isAllotment){
                $roomAllotment->whereDate('room_allotment.from_date','<=', $arrivalDate);
            }

            if(!empty($folioNumber)){
                $folio->where('folio.number','<>',$folioNumber);
            }

            if(!empty($reservationNumber)){
                $folio->where('reservation.number','<>',$reservationNumber);
            }

            if(!empty($roomNumber)){
                $room->whereNotIn('number', $reservation->get())
                    ->whereNotIn('number', $folio->get())
                    ->whereNotIn('number', $roomUnavailable->get())
                    ->whereNotIn('number', $roomAllotment->get());
            } else {
                $room->whereNotIn('number', $reservation->get())
                    ->whereNotIn('number', $folio->get())
                    ->whereNotIn('number', $roomUnavailable->get())
                    ->whereNotIn('number', $roomAllotment->get());
            }

            return $room->get();
    }

    public static function getRoomNumber($reserationNumber, $isReservation, $isAssign, $isReady){
        if($isReservation){
            $reservationX = Reservation::select('reservation.*','guest_detail.arrival','guest_detail.departure','guest_detail.bed_type_code','guest_detail.room_type_code')
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->where('number',$reserationNumber)->first();
            if(!empty($reservationX)){
                $roomType = $reservationX->room_type_code;
                $bedType = $reservationX->bed_type_code;
                $arrival = FormatController::formatDate($reservationX->arrival);
                $departure = FormatController::formatDate($reservationX->departure);
                $resvNumber = $reservationX->number;
                $folioNumber = $reservationX->folio_number;
                $unavailableID = '';
                $roomAllotmentID = '';
                $allotment = false;
                $ready = $isReady;
            }

            //QUERY SELECTED
            $reservation = Reservation::select('guest_detail.room_number')
                ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
                ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
                ->where('guest_detail.room_number','<>','')
                ->whereDate('guest_detail.arrival','<',$departure)
                ->whereDate('guest_detail.departure','>',$arrival);
            $folio= Folio::select('guest_detail.room_number')
                ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
                ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
                ->whereDate('guest_detail.arrival','<',$departure)
                ->whereDate('guest_detail.departure','>',$arrival);
            $roomUnavailable = RoomUnavailable::select('cfg_init_room.number')
                ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
                ->whereDate('room_unavailable.from_date','<',$departure)
                ->whereDate('room_unavailable.to_date','>=',$arrival);
            $roomAllotment = DB::table('room_allotment')->select('room_allotment.room_number')
                ->leftJoin('cfg_init_room','room_allotment.room_number','cfg_init_room.number');
            $room = Room::select('number');

            //QUERY CONDITION
                if(!empty($roomType)){
                    $room->where('cfg_init_room.room_type_code',$roomType);
                    $reservation->where('guest_detail.room_type_code',$roomType);
                    $folio->where('guest_detail.room_type_code',$roomType);
                    $roomUnavailable->where('cfg_init_room.room_type_code',$roomType);
                }
                if(!empty($bedType)){
                    $room->where('cfg_init_room.bed_type_code',$bedType);
                }

                if(!empty($unavailableID)){
                    $roomUnavailable->where('room_unavailable.id_log','<>',$unavailableID);
                }
                if(!empty($resvNumber)){
                    $reservation->where('reservation.number','<>',$resvNumber);
                    $folio->where('folio.reservation_number','<>',$resvNumber);
                }
                if(!empty($folioNumber)){
                    $folio->where('folio.number','<>', $folioNumber);
                }
                if($ready){
                    $room->where('status_code', GlobalVariableController::$roomStatus['Ready']);
                }
                if($allotment){
                    $roomAllotment->whereDate('room_allotment.from_date','<=', $arrival);
                }

            $room->whereNotIn('number', $reservation->get())
                ->whereNotIn('number', $folio->get())
                ->whereNotIn('number', $roomUnavailable->get())
                ->whereNotIn('number', $roomAllotment->get());

            if($isAssign){
                $room = $room->orderBy('number','ASC')->first();
                if(!empty($room)){
                    return $room->number;
                }
            }else{
                return response()->json([
                    'room' => $room->orderBy('number')->get(),
                ]);
            }
        }
    }

    public static function getExtraChargeWillPost(Int $folioNumber, $extraChargeId){
        $query= DB::table('guest_extra_charge')->select(
            'guest_extra_charge.*',
            'folio.currency_code',
            'folio.exchange_rate',
            'guest_detail.arrival',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_number')
            ->leftJoin('folio','guest_extra_charge.folio_number','folio.number')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->where('folio_number',$folioNumber);

            if(!empty($extraChargeId) || $extraChargeId > 0){
                $query->where('guest_extra_charge.id_log',$extraChargeId);
            }
            $query = $query->first();
            $result= 0;
            if(!empty($query)){
                if(Self::isCanPostRoomCharge($query->charge_frequency_code,$query->arrival)){
                    $roomNumber= $query->room_number;
                    $adult= $query->adult;
                    $child= $query->child;
                    $amountW8Breakdown= Self::getTotalBreakdownAmount($query->quantity, $query->amount, $query->extra_pax, Self::variant($query->per_pax),
                        Self::variant($query->include_child),Self::variant($query->per_pax_extra),$query->max_pax, $adult, $child);
                    $taxServiceCode= $query->tax_and_service_code;

                    //AMOUNT WITH TAX AND SERVICE
                    $amountW8Breakdown= Self::getBasicTaxService($query->account_code,$query->tax_and_service_code,$amountW8Breakdown);
                    $result = $amountW8Breakdown['total'];
                }
            }
            return $result;
    }

    public static function getRoomRateWeekdayRate1($rateCode) {
        $query = DB::table('cfg_init_room_rate')
            ->select('weekday_rate1')
            ->where('code', $rateCode)
            ->first();

        return $query->weekday_rate1;
    }

    public static function getCMInvCode($rateCode) {
        $query = DB::table('cfg_init_room_rate')
            ->select('cm_inv_code')
            ->where('code', $rateCode)
            ->first();

        return $query->cm_inv_code;
    }

    public static function postingRoomCharge($folioNumber,$subFolioGroupCode,$allowZeroAmount,$userId){
        $allowZeroAmount= empty($allowZeroAmount) ? GlobalVariableController::allowZeroAmount() : $allowZeroAmount;
        $currencyCode= HelperController::getDefaultCurrency();
        $exchangeRate= HelperController::getExchangeRateCurrency($currencyCode);
        $auditDate = AuditLogController::auditDate();
        $subFolioID = '';
        $isRoomChargeAlreadyPosted = HelperController::isRoomChargeAlreadyPosted($folioNumber);
        $isStayOfDate = HelperController::isStayOfDate($folioNumber, FormatController::formatDate($auditDate));
        $result = 404;
        // if($isStayOfDate){
        //     if(!$isRoomChargeAlreadyPosted){
                $folio = Folio::select(
                        'folio.group_code',
                        'folio.currency_code',
                        'folio.exchange_rate',
                        'folio.marketing_code',
                        'folio.voucher_number',
                        'folio.notes',
                        'folio.compliment_hu',
                        'guest_detail.arrival',
                        'contact_person.title_code',
                        'contact_person.full_name',
                        'contact_person.street',
                        'contact_person.city',
                        'contact_person.city_code',
                        'contact_person.nationality_code',
                        'contact_person.country_code',
                        'contact_person.state_code',
                        'contact_person.postal_code',
                        'contact_person.phone1',
                        'contact_person.phone2',
                        'contact_person.fax',
                        'contact_person.email',
                        'contact_person.website',
                        'contact_person.company_code',
                        'contact_person.guest_type_code',
                        'guest_detail.adult',
                        'guest_detail.child',
                        'guest_detail.room_type_code',
                        'guest_detail.bed_type_code',
                        'guest_detail.room_number',
                        'guest_detail.room_rate_code',
                        'guest_detail.weekday_rate',
                        'guest_detail.weekend_rate',
                        'guest_detail.discount_percent',
                        'guest_detail.discount',
                        'guest_detail.business_source_code',
                        'guest_detail.commission_type_code',
                        'guest_detail.commission_value',
                        'guest_detail.payment_type_code',
                        'guest_detail.market_code',
                        'guest_detail.booking_source_code',
                        'cfg_init_room_rate.tax_and_service_code',
                        'cfg_init_room_rate.charge_frequency_code')
                        ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                        ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                        ->leftJoin('cfg_init_room_rate', 'guest_detail.room_rate_code', 'cfg_init_room_rate.code')
                        ->where('folio.number',$folioNumber)->first();


                if(!empty($folio)){
                    $isBreakfast = HelperController::isHaveBreakfast($folioNumber);
                    $isCanPostRoomCharge = HelperController::isCanPostRoomCharge($folio->charge_frequency_code, $folio->arrival);
                    $complimentHu = $folio->compliment_hu;
                    $isScheduledRate= HelperController::isScheduledRate($folioNumber, $auditDate);
                    if($isScheduledRate){
                        $complimentHu = HelperController::getScheduledRateComplimentHu($folioNumber, $auditDate);
                    }
                    $isActiveVoucher = false;
                    if(!(!$allowZeroAmount && !empty($complimentHu) && $complimentHu != ' ')){
                    // if(!(!$allowZeroAmount && !empty($complimentHu) || !$allowZeroAmount && $complimentHu != ' ')){
                        if($isCanPostRoomCharge){
                            $roomNumber = $folio->room_number;
                            $currencyCode = $folio->currency_code;
                            $exchangeRate= $folio->exchange_rate <= 0 ? 1 : $folio->exchange_rate;
                            if($isScheduledRate){
                                $roomRateCode = HelperController::getScheduledRoomRateCode($folioNumber, $auditDate);
                                if(empty($roomRateCode)){
                                    $roomRateCode = $folio->room_rate_code;
                                    $roomRateTaxServiceCode = $folio->tax_and_service_code;
                                } else {
                                    $roomRateTaxServiceCode= HelperController::getRoomRateTaxAndServiceCode($roomRateCode);
                                }
                                $roomChargeWithBreakdown= HelperController::getScheduledRoomRate($folioNumber, $auditDate) / $exchangeRate;
                                $roomRateAmount = $roomChargeWithBreakdown;

                                $roomRateAmountOriginal = HelperController::getRoomRate($roomRateCode, $auditDate, $folio->adult, $folio->child, false);
                                $complimentHu = HelperController::getScheduledRateComplimentHu($folioNumber, $auditDate);
                                $discount = 0;
                            } else {
                                $roomRateCode = $folio->room_rate_code;
                                $roomRateTaxServiceCode = $folio->tax_and_service_code;
                                if(HelperController::isWeekend($auditDate)){
                                    $roomChargeWithBreakdown = $folio->weekend_rate;
                                } else {
                                    $roomChargeWithBreakdown = $folio->weekday_rate;
                                }

                                $roomRateAmount = $roomChargeWithBreakdown;
                                $roomRateAmountOriginal = HelperController::getRoomRate($roomRateCode, $auditDate, $folio->adult, $folio->child, false);
                                $complimentHu = $folio->compliment_hu;

                                if($isActiveVoucher){

                                } else {
                                    if(HelperController::variant($folio->discount_percent)){
                                        $discount = round(($roomChargeWithBreakdown * $folio->discount / 100),3);
                                    } else {
                                        $discount = $folio->discount;
                                    }
                                }

                                if(!GlobalVariableController::postDiscount()){
                                    $roomChargeWithBreakdown = $roomChargeWithBreakdown - $discount;
                                    $discount = 0;
                                }
                            }
                            if(!empty($complimentHu) && $complimentHu != ' ' && $roomChargeWithBreakdown > 0){
                                if($allowZeroAmount){
                            //POST ROOM CHARGE
                                    //COMPLIMENT RO0M
                                    $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
                                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                                    ProcedureQueryController::insertSubFolio2($folioNumber, $subFolioGroupCode, $roomNumber, GlobalVariableController::globalSubDepartment(GlobalVariableController::$configurationName['SDFrontOffice']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),
                                        GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), '', '',
                                        $currencyCode, 'Auto Room Charge', '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, GlobalVariableController::$postingType['Room'], 0, 0, 0, 0, $exchangeRate, $allowZeroAmount, True, $subFolioID, $userId);

                                    if(HelperController::isInHousePosted($auditDate, $folioNumber, $userId)){
                                        ProcedureQueryController::deleteGuestInHouse($auditDate, $folioNumber, $userId);
                                    }

                                    ProcedureQueryController::insertGuestInHouse($auditDate, $folioNumber, $folio->group_code, $folio->room_type_code, $folio->bed_type_code, $folio->room_number, $roomRateCode, $folio->business_source_code, $folio->commission_type_code, $folio->payment_type_code, $folio->market_code, $folio->booking_source_code, $folio->title_code,
                                        $folio->full_name, $folio->street, $folio->city, $folio->city_code, $folio->nationality_code, $folio->country_code, $folio->state_code, $folio->postal_code, $folio->phone1, $folio->phone2, $folio->fax, $folio->email, $folio->website, $folio->company_code, $folio->guest_type_code, $folio->marketing_code, $complimentHu, $folio->notes,
                                        $folio->adult, $folio->child, 0, 0, 0, $folio->commission_value, $folio->commission_value, HelperController::variant($folio->discount_percent), False, $isScheduledRate, $isBreakfast, $userId);

                                    $result= 0;
                                } else {
                                    $result= 4;
                                }
                            } else {
                                //PAYING ROOM
                                $roomChargeWithBreakdown = HelperController::getBasicTaxService(GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), $roomRateTaxServiceCode, $roomChargeWithBreakdown);
                                $roomChargeWithBreakdown = $roomChargeWithBreakdown['total'];
                                if($isScheduledRate){
                                    $xRoomRateBreakdown= DB::table('cfg_init_room_rate_breakdown')->select(
                                        'cfg_init_room_rate_breakdown.outlet_code',
                                        'cfg_init_room_rate_breakdown.product_code',
                                        'cfg_init_room_rate_breakdown.sub_department_code',
                                        'cfg_init_room_rate_breakdown.account_code',
                                        'cfg_init_room_rate_breakdown.company_code',
                                        'cfg_init_room_rate_breakdown.quantity',
                                        'cfg_init_room_rate_breakdown.is_amount_percent',
                                        'cfg_init_room_rate_breakdown.amount',
                                        'cfg_init_room_rate_breakdown.per_pax',
                                        'cfg_init_room_rate_breakdown.include_child',
                                        'cfg_init_room_rate_breakdown.remark',
                                        'cfg_init_room_rate_breakdown.tax_and_service_code',
                                        'cfg_init_room_rate_breakdown.charge_frequency_code',
                                        'cfg_init_room_rate_breakdown.max_pax',
                                        'cfg_init_room_rate_breakdown.extra_pax',
                                        'cfg_init_room_rate_breakdown.per_pax_extra',
                                        'cfg_init_room_rate_breakdown.user_id',
                                        'cfg_init_room_rate_breakdown.id_log'
                                        )
                                        ->where('cfg_init_room_rate_breakdown.room_rate_code', $roomRateCode)->get();
                                } else {
                                    $xRoomRateBreakdown = Db::table('guest_breakdown')->select(
                                        'guest_breakdown.outlet_code',
                                        'guest_breakdown.product_code',
                                        'guest_breakdown.sub_department_code',
                                        'guest_breakdown.account_code',
                                        'guest_breakdown.company_code',
                                        'guest_breakdown.quantity',
                                        'guest_breakdown.is_amount_percent',
                                        'guest_breakdown.amount',
                                        'guest_breakdown.per_pax',
                                        'guest_breakdown.include_child',
                                        'guest_breakdown.remark',
                                        'guest_breakdown.tax_and_service_code',
                                        'guest_breakdown.charge_frequency_code',
                                        'guest_breakdown.max_pax',
                                        'guest_breakdown.extra_pax',
                                        'guest_breakdown.per_pax_extra',
                                        'guest_breakdown.user_id',
                                        'guest_breakdown.id_log'
                                        )
                                        ->where('folio_number', $folioNumber)->get();
                                }
                                //GET CALCULATE TOTAL BREAKDOWN
                                $totalBreakdown = 0;
                                foreach($xRoomRateBreakdown as $roomRateBreakdown){
                                    if(!empty($roomRateBreakdown)){
                                        if(HelperController::isCanPostRoomCharge($roomRateBreakdown->charge_frequency_code, $folio->date_arrival)){
                                            if(HelperController::variant($roomRateBreakdown->is_amount_percent)){
                                                $breakdownAmount= HelperController::getTotalBreakdownAmount($roomRateBreakdown->quantity, $roomChargeWithBreakdown * $roomRateBreakdown->amount / 100,$roomRateBreakdown->extra_pax, HelperController::variant($roomRateBreakdown->per_pax),
                                                    HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $roomRateBreakdown->max_pax, $folio->adult, $folio->child ) / $exchangeRate;
                                            } else {
                                                $breakdownAmount = HelperController::getTotalBreakdownAmount($roomRateBreakdown->quantity,$roomRateBreakdown->amount , $roomRateBreakdown->extra_pax, HelperController::variant($roomRateBreakdown->per_pax),
                                                    HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $roomRateBreakdown->max_pax, $folio->adult, $folio->child ) / $exchangeRate;
                                            }
                                            $breakdownAmountTaxService = HelperController::getBasicTaxService($roomRateBreakdown->account_code, $roomRateBreakdown->tax_and_service_code, $breakdownAmount);
                                            $breakdownAmount = $breakdownAmountTaxService['total'];
                                            $totalBreakdown = $totalBreakdown + $breakdownAmount;
                                        }
                                    }
                                }


                                $businessSourceCode = $folio->business_source_code;
                                $commission = 0;
                                $roomChargeBasic = 0;
                                if($businessSourceCode != ''){
                                    $commission = HelperController::getCommission($folio->commission_type_code, $folio->commission_value, $roomChargeWithBreakdown, $roomChargeBasic, $folio->date_arrival) / $exchangeRate;
                                }
                                $roomChargeWithoutBreakdown = $roomChargeWithBreakdown - $totalBreakdown - $commission;

                                if($roomChargeWithoutBreakdown > 0 || $allowZeroAmount && $roomChargeWithoutBreakdown == 0){
                                    $roomChargeWithoutBreakdown = HelperController::getBasicTaxService2(GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), $roomRateTaxServiceCode, $roomChargeWithoutBreakdown);
                                    $roomChargeBasic = $roomChargeWithoutBreakdown['basic'];
                                    $roomChargeTax = $roomChargeWithoutBreakdown['tax'];
                                    $roomChargeService = $roomChargeWithoutBreakdown['service'];

                                    //POST ROOM CHARGE
                                    $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
                                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                                    ProcedureQueryController::insertSubFolio2($folioNumber, $subFolioGroupCode, $roomNumber, GlobalVariableController::globalSubDepartment(GlobalVariableController::$configurationName['SDFrontOffice']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),
                                        GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), '', '',
                                        $currencyCode, 'Auto Room Charge', '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, GlobalVariableController::$postingType['Room'], 0, $roomChargeBasic, $roomChargeTax, $roomChargeService, $exchangeRate, $allowZeroAmount, True, $subFolioID, $userId);

                                    if(HelperController::isInHousePosted($auditDate, $folioNumber, $userId)){
                                        ProcedureQueryController::deleteGuestInHouse($auditDate, $folioNumber, $userId);
                                    }
                                    ProcedureQueryController::insertGuestInHouse($auditDate, $folioNumber, $folio->group_code, $folio->room_type_code, $folio->bed_type_code, $folio->room_number, $roomRateCode, $folio->business_source_code, $folio->commission_type_code, $folio->payment_type_code, $folio->market_code, $folio->booking_source_code, $folio->title_code,
                                        $folio->full_name, $folio->street, $folio->city, $folio->city_code, $folio->nationality_code, $folio->country_code, $folio->state_code, $folio->postal_code, $folio->phone1, $folio->phone2, $folio->fax, $folio->email, $folio->website, $folio->company_code, $folio->guest_type_code, $folio->marketing_code, $complimentHu, $folio->notes,
                                        $folio->adult, $folio->child, $roomRateAmountOriginal, $roomRateAmount, $folio->discount, $folio->commission_value, $folio->commission_value, HelperController::variant($folio->discount_percent), False, $isScheduledRate, $isBreakfast, $userId);

                                        //POST BREAKDOWN
                                    foreach($xRoomRateBreakdown as $roomRateBreakdown){
                                        if(!empty($roomRateBreakdown)){
                                            if(HelperController::isCanPostRoomCharge($roomRateBreakdown->charge_frequency_code, $folio->date_arrival)){
                                                if(HelperController::variant($roomRateBreakdown->is_amount_percent)){
                                                    $breakdownAmount= HelperController::getTotalBreakdownAmount($roomRateBreakdown->quantity, $roomChargeWithBreakdown * $roomRateBreakdown->amount / 100,$roomRateBreakdown->extra_pax, HelperController::variant($roomRateBreakdown->per_pax),
                                                        HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $roomRateBreakdown->max_pax, $folio->adult, $folio->child ) / $exchangeRate;
                                                } else {
                                                    $breakdownAmount = HelperController::getTotalBreakdownAmount($roomRateBreakdown->quantity,$roomRateBreakdown->amount , $roomRateBreakdown->extra_pax, HelperController::variant($roomRateBreakdown->per_pax),
                                                        HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $roomRateBreakdown->max_pax, $folio->adult, $folio->child ) / $exchangeRate;
                                                }

                                                ProcedureQueryController::insertSubFolio1($folioNumber, $subFolioGroupCode, $roomNumber, $roomRateBreakdown->sub_department_code, $roomRateBreakdown->account_code, GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),
                                                    $roomRateBreakdown->product_code, '', $currencyCode, 'Breakdown: ' .$roomRateBreakdown->remark, '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, $roomRateBreakdown->company_code,
                                                    GlobalVariableController::$postingType['Room'], $roomRateBreakdown->tax_and_service_code, $roomRateBreakdown->id_log, 1, $breakdownAmount, $exchangeRate, False, True, $subFolioID, $userId);
                                                ProcedureQueryController::insertGuestInHouseBreakdown($auditDate, $folioNumber, $roomRateBreakdown->outlet_code, $roomRateBreakdown->product_code, $roomRateBreakdown->sub_department_code,
                                                    $roomRateBreakdown->account_code, $roomRateBreakdown->remark, $roomRateBreakdown->tax_and_service_code, $roomRateBreakdown->charge_frequency_code, $roomRateBreakdown->quantity, $roomRateBreakdown->amount,
                                                    $roomRateBreakdown->extra_pax, $roomRateBreakdown->max_pax, HelperController::variant($roomRateBreakdown->per_pax), HelperController::variant($roomRateBreakdown->include_child), HelperController::variant($roomRateBreakdown->per_pax_extra), $userId);
                                            }
                                        }
                                    }

                                    //POST COMMISSION
                                    if($commission > 0){
                                        ProcedureQueryController::insertSubFolio1($folioNumber, $subFolioGroupCode, $roomNumber, GlobalVariableController::globalSubDepartment(GlobalVariableController::$configurationName['SDFrontOffice']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountAPCommission']),  GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),
                                            '', '', $currencyCode, 'Breakdown Commission', '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, $businessSourceCode, GlobalVariableController::$postingType['Room'], '', 0, 1, $commission, $exchangeRate, False, True, $subFolioID, $userId);
                                    }
                                    $result = 0;
                                } else {
                                    $result= 1;
                                }
                            }
                        } else {
                            $result= 3;
                        }
                    } else {
                        $result= 2;
                    }
                }
        //     }
        //      else {
        //         $result= 5;
        //     }
        // }
        //  else {
        //     $result= 6;
        // }
        return $result;
    }

    public static function postingExtraCharge($folioNumber, $extraChargeId, $subFolioGroupCode, $userId){
        $result= 404;
        $guestExtraCharge= DB::table('guest_extra_charge')->select(
            'folio.currency_code',
            'folio.exchange_rate',
            'guest_extra_charge.*',
            'guest_detail.arrival',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_number')
        ->leftJoin('folio', 'guest_extra_charge.folio_number','folio.number')
        ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
        ->where('folio_number',$folioNumber);

        if(!empty($extraChargeId)){
            $guestExtraCharge->where('guest_extra_charge.id_log',$extraChargeId);
        }

        $guestExtraCharge= $guestExtraCharge->first();
        if(!empty($guestExtraCharge)){
            if(HelperController::isCanPostRoomCharge($guestExtraCharge->charge_frequency_code,$guestExtraCharge->arrival)){
                $roomNumber= $guestExtraCharge->room_number;
                $adult= $guestExtraCharge->adult;
                $child= $guestExtraCharge->child;
                $amountW8Breakdown= HelperController::getTotalBreakdownAmount($guestExtraCharge->quantity, $guestExtraCharge->amount, $guestExtraCharge->extra_pax, Self::variant($guestExtraCharge->per_pax),
                    Self::variant($guestExtraCharge->include_child), Self::variant($guestExtraCharge->per_pax_extra), $guestExtraCharge->max_pax, $adult, $child);
                $extraChargeTaxServiceCode= $guestExtraCharge->tax_and_service_code;

                //AMOUNT WITH TAX SERVICE
                $amountW8Breakdown = HelperController::getBasicTaxService($guestExtraCharge->account_code, $extraChargeTaxServiceCode, $amountW8Breakdown);
                $amountW8Breakdown = $amountW8Breakdown['total'];

                //BREAKDOWN
                $xBreakdownExtraCharge= DB::table('guest_extra_charge_breakdown')->select('*')
                    ->where('guest_extra_charge_id',$guestExtraCharge->id_log)->get();

                //CALCULATE TOTAL BREAKDOWN
                $totalBreakdown = 0;
                foreach($xBreakdownExtraCharge as $breakdownExtraCharge){
                    if(!empty($breakdownExtraCharge)){
                        if(HelperController::isCanPostRoomCharge($breakdownExtraCharge->charge_frequency_code, $guestExtraCharge->arrival)){
                            if(HelperController::variant($breakdownExtraCharge->is_amount_percent)){
                                $breakdownAmount= HelperController::getTotalBreakdownAmount($breakdownExtraCharge->quantity, $guestExtraCharge->amount * $breakdownExtraCharge->amount / 100,$breakdownExtraCharge->extra_pax, HelperController::variant($breakdownExtraCharge->per_pax),
                                    HelperController::variant($breakdownExtraCharge->include_child), HelperController::variant($breakdownExtraCharge->per_pax_extra), $breakdownExtraCharge->max_pax, $guestExtraCharge->adult, $guestExtraCharge->child );
                            } else {
                                $breakdownAmount = HelperController::getTotalBreakdownAmount($breakdownExtraCharge->quantity,$breakdownExtraCharge->amount , $breakdownExtraCharge->extra_pax, HelperController::variant($breakdownExtraCharge->per_pax),
                                    HelperController::variant($breakdownExtraCharge->include_child), HelperController::variant($breakdownExtraCharge->per_pax_extra), $breakdownExtraCharge->max_pax, $guestExtraCharge->adult, $guestExtraCharge->child );
                            }
                            $breakdownAmountTaxService = HelperController::getBasicTaxService($breakdownExtraCharge->account_code, $breakdownExtraCharge->tax_and_service_code, $breakdownAmount );
                            $breakdownAmount = $breakdownAmountTaxService['total'];
                            $totalBreakdown = $totalBreakdown + $breakdownAmount;
                        }
                    }
                }
                //NET AMOUNT
                $amountWithoutBreakdown= $amountW8Breakdown - $totalBreakdown;

                if($amountWithoutBreakdown > 0){
                    $amountExtraCharge = HelperController::getBasicTaxService2($guestExtraCharge->account_code, $guestExtraCharge->tax_and_service_code, $amountWithoutBreakdown);
                    $amountExtraChargeBasic = $amountExtraCharge['basic'];
                    $amountExtraChargeTax = $amountExtraCharge['tax'];
                    $amountExtraChargeService = $amountExtraCharge['service'];

                    //POST EXTRA CHARGE
                    $accountCodeExtraCharge= $guestExtraCharge->account_code;
                    $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                    ProcedureQueryController::insertSubFolio2($folioNumber, $subFolioGroupCode, $roomNumber, $guestExtraCharge->sub_department_code, $accountCodeExtraCharge, $accountCodeExtraCharge, $guestExtraCharge->product_code, $guestExtraCharge->package_code,
                        '', 'Extra Charge', '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, GlobalVariableController::$postingType['ExtraCharge'], $guestExtraCharge->id_log, $amountExtraChargeBasic, $amountExtraChargeTax, $amountExtraChargeService, 0, False, True, '', $userId);

                    //POST BREAKDOWN
                    foreach($xBreakdownExtraCharge as $breakdownExtraCharge){
                        if(!empty($breakdownExtraCharge)){
                            if(HelperController::isCanPostRoomCharge($breakdownExtraCharge->charge_frequency_code, $guestExtraCharge->arrival)){
                                if(HelperController::variant($breakdownExtraCharge->is_amount_percent)){
                                    $breakdownAmount= HelperController::getTotalBreakdownAmount($breakdownExtraCharge->quantity, $guestExtraCharge->amount * $breakdownExtraCharge->amount / 100,$breakdownExtraCharge->extra_pax, HelperController::variant($breakdownExtraCharge->per_pax),
                                    HelperController::variant($breakdownExtraCharge->include_child), HelperController::variant($breakdownExtraCharge->per_pax_extra), $breakdownExtraCharge->max_pax, $guestExtraCharge->adult, $guestExtraCharge->child );
                                } else {
                                    $breakdownAmount = HelperController::getTotalBreakdownAmount($breakdownExtraCharge->quantity,$breakdownExtraCharge->amount , $breakdownExtraCharge->extra_pax, HelperController::variant($breakdownExtraCharge->per_pax),
                                        HelperController::variant($breakdownExtraCharge->include_child), HelperController::variant($breakdownExtraCharge->per_pax_extra), $breakdownExtraCharge->max_pax, $guestExtraCharge->adult, $guestExtraCharge->child );
                                }

                                ProcedureQueryController::insertSubFolio1($folioNumber, $subFolioGroupCode, $roomNumber, $breakdownExtraCharge->sub_department_code, $breakdownExtraCharge->account_code, $accountCodeExtraCharge,
                                    $breakdownExtraCharge->product_code, '', '', 'Extra Charge Breakdown', '', '', GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, $breakdownExtraCharge->company_code,
                                    GlobalVariableController::$postingType['ExtraCharge'], $breakdownExtraCharge->tax_and_service_code, $breakdownExtraCharge->id_log, 1, $breakdownAmount, 0, False, True, '', $userId);
                            }
                        }
                    }
                    $result = 0;
                } else {
                    $result = 1;
                }
            } else {
                $result = 2;
            }
        }
        return $result;
    }

    public static function isAlreadyAutoPosting($folioNumber, $accountCode, $postingType, $postingDate){
        return self::getCountAutoPosting($folioNumber, $accountCode, $postingType, $postingDate) > 0;
    }

    public static function deleteGuestInHouseOver($postingDate, $userId){
        $folio= Folio::select(
            'folio.number')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->whereDate('guest_detail.arrival','<>','guest_detail.departure')
            ->whereDate('guest_detail.arrival','>=',FormatController::formatDate($postingDate))
            ->whereDate('guest_detail.departure','>',FormatController::formatDate($postingDate))
            ->orWhereDate('guest_detail.arrival','guest_detail.departure')
            ->whereDate('guest_detail.arrival','>=',FormatController::formatDate($postingDate))
            ->whereDate('guest_detail.departure','<=',FormatController::formatDate($postingDate))
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->where('folio.status_code','<>',GlobalVariableController::$folioStatus['CancelCheckIn']);

        $xGuestInHouse= DB::table('guest_in_house')->select(
            'guest_in_house.folio_number')
            ->leftJoinSub($folio,'Folio', function($join){
                $join->on('guest_in_house.folio_number','=','Folio.number');
            })
            ->whereRaw('IFNULL(Folio.number, "") = ""')
            ->get();

        if(!empty($xGuestInHouse)){
            foreach($xGuestInHouse as $guestInHouse){
                ProcedureQueryController::deleteGuestInHouse($postingDate,$guestInHouse->folio_number,$userId);
            }
        }
    }

    public static function getCityByState($stateCode){
        if(empty($stateCode)){
            $stateCode = 'OT';
        }
        $query= DB::table('cfg_init_city')->select('code','name')->where('state_code', $stateCode)->get();

        return $query;
    }

    public static function getStateByCountry($countryCode){
        $query= State::select('code','name')->where('country_code',$countryCode)->get();
        return $query;
    }

    public static function getCountAutoPosting($folioNumber, $accountCode, $postingType, $postingDate){
        $query = SubFolio::select(
            'account_code',
            'is_correction',
            DB::raw('COUNT(account_code) as counts')
        )
        ->where('belongs_to',$folioNumber)
        ->where('account_code',$accountCode)
        ->where('audit_date',FormatController::formatDate($postingDate))
        ->where('void','0')
        ->where('is_correction','0');
        if(!empty($postingType)){
            $query->where('posting_type',$postingType);
        }
            $query->groupBy('correction_breakdown');
        if(!empty($query)){
            $result = $query->get();
        } else {
            $result = 0;
        }
        return count($result);
    }

    public static function getBreakdownAutoPosting($folioNumber, $accountCode, $postingType, $postingDate){
        $result= 0;
        $breakdown = SubFolio::select('correction_breakdown')
            ->where('belongs_to',$folioNumber)
            ->whereDate('audit_date', FormatController::formatDate($postingDate))
            ->where('posting_type',$postingType)
            ->where('void','0')
            ->where('account_code',$accountCode)
            ->groupBy('correction_breakdown')
            ->first();
        if(!empty($breakdown)){
            $result = $breakdown->correction_breakdown;
        }
        return $result;
    }

    public static function getAmountAutoPosting($folioNumber, $accountCode, $postingType, $postingDate){
        $correctionBreakdown = SubFolio::select('correction_breakdown')
            ->where('belongs_to',$folioNumber)
            ->whereDate('audit_date', FormatController::formatDate($postingDate))
            ->where('posting_type',$postingType)
            ->where('void','0')
            ->where('account_code',$accountCode)
            ->first();
        $result = 0;
        $query ='';
        if(!empty($correctionBreakdown)){
            $correctionBreakdown = $correctionBreakdown->correction_breakdown;
            $query = SubFolio::select(
                DB::raw('SUM(CASE WHEN type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN (quantity * amount ) ELSE (quantity * amount) END) AS total')
                )
                ->groupBy('correction_breakdown')
                ->where('correction_breakdown',$correctionBreakdown)
                ->first();
        }
        if(!empty($query)){
            $result = $query->total;
        }

        return $result;
    }

    public static function getTaxService($account, $amount){
        $Account= Account::select('tax','service','service_tax','is_tax_include','is_service_include')->where('cfg_init_account.code',$account)
        ->join('cfg_init_tax_and_service','cfg_init_account.tax_and_service_code','cfg_init_tax_and_service.code')
        ->first();

        $taxServiceInclude= $Account->is_tax_include == '-1' && $Account->is_service_include == '-1';
        $taxServiceExclude= $Account->is_tax_include == '0' && $Account->is_service_include == '0';
        $taxExludeServiceInclude = $Account->is_tax_include == '0' && $Account->is_service_include == '-1';
        $taxIncludeServiceExlude = $Account->is_tax_include == '-1' && $Account->is_service_include == '0';


        $tax = $Account->tax / 100;
        $service = $Account->service / 100;
        $serviceTax= ($Account->service_tax / 100) * $service;
        $taxWithServiceTax = $tax + $serviceTax;
        $taxService = ($taxWithServiceTax + $service) + 1;
        $serviceOnly = $service + 1;
        $taxOnly = ($tax / 100) + 1;
        $result = null;
        $taxValue = null;
        $serviceValue = null;

            if( $taxServiceInclude ){
                $result = $amount / $taxService;
                $taxValue = $result * $taxWithServiceTax;
                $serviceValue = $result * $service;
                $nett = $amount - round($taxValue,3) - round($serviceValue,3);
            } else if( $taxServiceExclude ){
                $result = $amount;
                $taxValue = $amount * $taxWithServiceTax;
                $serviceValue = $amount * $service;
                $nett = $amount;
            } else if( $taxExludeServiceInclude ){
                $result = $amount / $serviceOnly;
                $taxValue = $amount * $tax;
                $serviceValue = $result * $service;
                $nett = $result;
            } else if( $taxIncludeServiceExlude ){
                $result = $amount / ($taxWithServiceTax + 1);
                $taxValue = $result * $taxWithServiceTax;
                $serviceValue = $result * $service;
                $nett = $result;
            }

    return $nett;

    }

    public static function getAccountSubGroupCode($account){
        $result= HelperController::getAccountX('code',$account, 'sub_group_code');
        return $result;
    }

    public static function getAccountGroupCode($account){
        $result= HelperController::getAccountX('code', $account, 'group_code');
        return $result;
    }

    public static function getScheduledRoomRateCode($folioNumber, $postingDate){
        $result= GuestScheduledRate::select(
            'room_rate_code', 'rate'
        )
        ->where('folio_number',$folioNumber)
        ->where('from_date','<=', FormatController::formatDate($postingDate))
        ->where('to_date','>=', FormatController::formatDate($postingDate))->first();
        return $result->room_rate_code;
    }

    public static function getScheduledRoomRate($folioNumber, $postingDate){
        $result= GuestScheduledRate::select(
            'room_rate_code', 'rate'
        )
        ->where('folio_number',$folioNumber)
        ->where('from_date','<=', FormatController::formatDate($postingDate))
        ->where('to_date','>=', FormatController::formatDate($postingDate))->first();
        return $result->rate;
    }

    public static function isFolioStatusOpen($number){
        $result = Folio::select('status_code')->where('number',$number)->where('status_code',GlobalVariableController::$folioStatus['Open'])->first();

        return !empty($result);
    }

    public static function getRoomRate($roomRateCode, $postingDate, $adult, $child, $isWeekend){
        $rate= 0;
        $pax= 0;
        $roomRate= RoomRate::select(
            'weekday_rate1',
            'weekday_rate2',
            'weekday_rate3',
            'weekday_rate4',
            'weekend_rate1',
            'weekend_rate2',
            'weekend_rate3',
            'weekend_rate4',
            'weekday_rate_child1',
            'weekday_rate_child2',
            'weekday_rate_child3',
            'weekday_rate_child4',
            'weekend_rate_child1',
            'weekend_rate_child2',
            'weekend_rate_child3',
            'weekend_rate_child4',
            'include_chlid',
            'extra_pax',
            'per_pax'
        )
        ->where('code',$roomRateCode)->first();
        if(!empty($roomRate)){
            $pax= $roomRate->include_chlid == '-1' ? $adult + $child : $adult;
            $result = 11;
            if($postingDate != null && !empty($postingDate)){
                $isWeekend = HelperController::isWeekend($postingDate);
            }
            if($isWeekend){
                if(VariableGlobal::useChildRate()){
                    if($adult <= 1){
                        $rate = $roomRate->weekend_rate1;
                    } else if($adult = 2){
                        $rate = $roomRate->weekend_rate2;
                    } else if($adult = 3){
                        $rate = $roomRate->weekend_rate3;
                    } else if($adult >= 4){
                        $rate = $roomRate->weekend_rate4;
                    }
                    //INCLUDE CHILD
                    if($child <= 1){
                        $rate = $rate + $roomRate->weekend_rate_child1;
                    } else if($child = 2){
                        $rate = $rate + $roomRate->weekend_rate_child2;
                    } else if($child = 3){
                        $rate = $rate + $roomRate->weekend_rate_child3;
                    } else if($child >= 4){
                        $rate = $rate + $roomRate->weekend_rate_child4;
                    }
                } else {
                    if($pax = 1){
                        $rate = $roomRate->weekend_rate1;
                    } else if($pax = 2){
                        $rate = $roomRate->weekend_rate2;
                    } else if($pax = 3){
                        $rate = $roomRate->weekend_rate3;
                    } else if($pax >= 4){
                        $rate = $roomRate->weekend_rate4;
                    }
                }
            } else {
                if(VariableGlobal::useChildRate()){
                    if($adult <= 1){
                        $rate = $roomRate->weekend_rate1;
                    } else if($adult = 2){
                        $rate = $roomRate->weekend_rate2;
                    } else if($adult = 3){
                        $rate = $roomRate->weekend_rate3;
                    } else if($adult >= 4){
                        $rate = $roomRate->weekend_rate4;
                    }
                    //INCLUDE CHILD
                    if($child <= 1){
                        $rate = $rate + $roomRate->weekend_rate_child1;
                    } else if($child = 2){
                        $rate = $rate + $roomRate->weekend_rate_child2;
                    } else if($child = 3){
                        $rate = $rate + $roomRate->weekend_rate_child3;
                    } else if($child >= 4){
                        $rate = $rate + $roomRate->weekend_rate_child4;
                    }
                } else {
                    if($pax = 1){
                        $rate = $roomRate->weekday_rate1;
                    } else if($pax = 2){
                        $rate = $roomRate->weekday_rate2;
                    } else if($pax = 3){
                        $rate = $roomRate->weekday_rate3;
                    } else if($pax >= 4){
                        $rate = $roomRate->weekday_rate4;
                    }
                }
            }
            //EXTRA PAX
            if($pax > 4) {
                if(HelperController::variant($roomRate->per_pax)){
                    $rate = $rate + (($pax - 4) * $roomRate->extra_pax);
                } else {
                    $rate = $rate + $roomRate->extra_pax;
                }
            }
        }
        return $rate;
    }

    public static function getScheduledRateComplimentHu($folioNumber, $postingDate){
        $result = '';
        $query =  GuestScheduledRate::select('compliment_hu')
            ->where('folio_number', $folioNumber)
            ->whereDate('from_date', '<=', FormatController::formatDate($postingDate))
            ->whereDate('to_date', '>=', FormatController::formatDate($postingDate))
            ->first();
            if(!empty($query)){
                if($query->compliment_hu != ' '){
                    $result = $query->compliment_hu;
                }
            }
        return $result;
    }

    public static function GetBasicTaxServiceForeign($tax, $service, $amountForeign, $exchangeRate, $basicForeign, $taxForeign, $serviceForeign){

        $taxForeign = $tax > 0 ? FormatController::round3($tax / $exchangeRate) : 0;
        $serviceForeign = $service > 0 ? FormatController::round3($service / $exchangeRate) : 0;
        $basicForeign = $amountForeign;

        $result = [
            'basicForeign' => $basicForeign,
            'taxForeign' => $taxForeign,
            'serviceForeign' => $serviceForeign,
            'total' => $basicForeign + $taxForeign + $serviceForeign
        ];
        return $result;
    }

    public static function getFolioByReservationNumber($reservationNumber){
        $result = Folio::select('number')->where('reservation_number', $reservationNumber)->where('status_code',GlobalVariableController::$folioStatus['Open'])->first();
        if(!empty($result)){
            return $result->number;
        } else {
            return null;
        }
    }

    public static function isRoomOccupiedNow($roomNumber){
        $query = Folio::select('guest_detail.room_number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
                ->where('guest_detail.room_number', $roomNumber)->first();

        return $query;
    }

    public static function isRoomReadyNow($roomNumber){
        $query = Room::select('status_code')
                    ->where('status_code', GlobalVariableController::$roomStatus['Ready'])
                    ->where('number', $roomNumber)->first();

        return $query;
    }

    public static function getRoomBlockStatus($roomNumber){
        $result = '';
        $query = DB::table('cfg_init_room')
            ->select('block_status_code')
            ->where('number', $roomNumber)
            ->first();
        if($query){
            $result = trim($query->block_status_code);
        }
        return $result;
    }

    public static function isRoomBlockedNow($roomNumber){
        $result = (self::getRoomBlockStatus($roomNumber) !== '');
        return $result;
    }

    public static function getBasicTaxService($accountCode, $taxServiceCodeM, $amount){
        $basic = $amount;
        $tax = 0;
        $service = 0;

        $groupCode = self::getAccountX('code', $accountCode, 'cfg_init_account_sub_group.group_code')->group_code;
        if($groupCode == GlobalVariableController::$accountGroup['Charge']){
            if(!empty($taxServiceCodeM) && $taxServiceCodeM != ' '){
                $taxServiceCode = $taxServiceCodeM;
            } else{
                $taxServiceCode =  self::getAccountX('code', $accountCode, 'tax_and_service_code')->tax_and_service_code;
            }

            if(!empty($taxServiceCode) && $taxServiceCode != ' '){
                $taxPercent = self::getAccountTaxServiceX('code', $taxServiceCode, 'tax')->tax;
                $servicePercent = self::getAccountTaxServiceX('code', $taxServiceCode, 'service')->service;
                $serviceTaxPercent = self::getAccountTaxServiceX('code', $taxServiceCode, 'service_tax')->service_tax;
                $taxIncluded = self::variant(self::getAccountTaxServiceX('code', $taxServiceCode, 'is_tax_include')->is_tax_include);
                $serviceIncluded = self::variant(self::getAccountTaxServiceX('code', $taxServiceCode, 'is_service_include')->is_service_include);
            }

            if($taxIncluded && $serviceIncluded){
                $tax = FormatController::round3($amount * ($taxPercent + ($serviceTaxPercent * $servicePercent / 100)) / (100 + $taxPercent + $servicePercent + ($serviceTaxPercent * $servicePercent / 100)));
                $service = FormatController::round3($amount * $servicePercent / (100 + $taxPercent + $servicePercent + ($serviceTaxPercent * $servicePercent / 100)));
                $basic = $amount - $tax - $service;
            } else if( !$taxIncluded && !$serviceIncluded){
                $basic = $amount;
                $tax = FormatController::round3($amount * ($taxPercent + ($serviceTaxPercent * $servicePercent / 100)) / 100);
                $service = FormatController::round3($amount * $servicePercent / 100);
            } else if( !$taxIncluded && $serviceIncluded){
                $service = FormatController::round3($amount / (100 + $servicePercent) * $servicePercent);
                $basic = $amount - $service;
                if ($serviceTaxPercent > 0){
                    $tax = FormatController::round3($amount * $taxPercent / 100);
                } else {
                    $tax = FormatController::round3($basic * $taxPercent / 100);
                }
            } else if ($taxIncluded && !$serviceIncluded ){
                $tax = FormatController::round3($amount / (100 + $taxPercent + ($serviceTaxPercent * $servicePercent / 100)) * ($taxPercent + ($serviceTaxPercent * $servicePercent / 100)));
                $basic = $amount - $tax;
                $service = FormatController::round3(($amount - ($amount / (100 + $taxPercent + ($serviceTaxPercent * $servicePercent / 100)) * ($taxPercent + ($serviceTaxPercent * $servicePercent / 100)))) * $servicePercent / 100);
            }
        }
        $result = [
            'amount' => $amount,
            'basic'=>  FormatController::round3($basic),
            'tax' =>  FormatController::round3($tax),
            'service' =>  FormatController::round3($service),
            'total' => FormatController::round3($basic + $tax + $service)
        ];
        return $result;
    }

    public static function getBasicTaxService2($accountCode, $taxServiceCodeManual, $amount){
        $basic = $amount;
        $tax = 0;
        $service = 0;

        $groupCode = Self::getAccountX('code', $accountCode, 'group_code')->group_code;
        if($groupCode == GlobalVariableController::$accountGroup['Charge']){
            if(empty($taxServiceCodeManual) || $taxServiceCodeManual == ' '){
                $taxServiceCode = Self::getAccountX('code', $accountCode, 'tax_and_service_code')->tax_and_service_code;
            }else{
                $taxServiceCode = $taxServiceCodeManual;
            }

            if($taxServiceCode != ''){
                $taxPercent = self::getAccountTaxServiceX('code', $taxServiceCode, 'tax')->tax;
                $servicePercent = self::getAccountTaxServiceX('code', $taxServiceCode, 'service')->service;
                $serviceTaxPercent = self::getAccountTaxServiceX('code', $taxServiceCode, 'service_tax')->service_tax;
                $taxIncluded = self::variant(self::getAccountTaxServiceX('code', $taxServiceCode, 'is_tax_include')->is_tax_include);
                $serviceIncluded = self::variant(self::getAccountTaxServiceX('code', $taxServiceCode, 'is_service_include')->is_service_include);

                $tax = FormatController::round3($amount * ($taxPercent + ($serviceTaxPercent * $servicePercent / 100)) / (100 + $taxPercent + $servicePercent + ($serviceTaxPercent * $servicePercent / 100)));
                $service = FormatController::round3($amount * $servicePercent / (100 + $taxPercent + $servicePercent + ($serviceTaxPercent * $servicePercent / 100)));
                $basic = $amount - $tax - $service;
            }
            $result = [
                'basic'=>  FormatController::round3($basic),
                'tax' =>  FormatController::round3($tax),
                'service' =>  FormatController::round3($service),
                'total' => FormatController::round3($basic + $tax + $service)
            ];
            return $result;
        }
    }

    public static function getRoomRateTaxAndServiceCode($roomRateCode){
        $result = RoomRate::select('tax_and_service_code')->where('code',$roomRateCode)->first();
        return $result->tax_and_service_code;
    }

    public static function getSubFolioBreakdown1AmountForeign($breakdown1){
        $amountForeign = SubFolio::select(DB::raw('SUM((CASE WHEN type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN amount_foreign ELSE 0 END) - (CASE WHEN type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN amount_foreign ELSE 0 END)) as amountForeign'))
            ->where('breakdown1',$breakdown1)
            ->where('void','0')
            ->groupBy('breakdown1')->first();
        return $amountForeign->amountForeign;
    }

    public static function getTotalBreakdownAmount(int $quantity,int $breakdownAmount,int $breakdownAmountExtra,bool $perPax,bool $includeChild,bool $perPaxExtra,int $maxPax, $adult, $child){

      $result = 0;
      $amount = 0;
      $amountExtra = 0;

      $totalPax = HelperController::trueFalseString($includeChild) ? ($adult + $child) : $adult;
      $amount = HelperController::trueFalseString($perPax) ? (($totalPax <= $maxPax) ? ($totalPax * $breakdownAmount) : ($maxPax * $breakdownAmount)) : $quantity * $breakdownAmount;
      $amountExtra = (HelperController::trueFalseString($perPaxExtra) ? ($totalPax > $maxPax ? ($totalPax - $maxPax) * $breakdownAmountExtra : 0) : ($totalPax > $maxPax)) ? $breakdownAmountExtra : 0;
      $result =  $amount + $amountExtra;

      return $result;
    }

    public static function getFolioType($folioNumber){
        $result = Folio::select('type_code')->where('number', $folioNumber)->first();

        return $result->type_code;
    }

    public static function isRoomChargeAlreadyPosted($folioNumber){
        $result = SubFolio::select('folio_number')
            ->where('belongs_to', $folioNumber)
            ->where('account_code',GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']))
            ->where('audit_date', Self::auditDate())
            ->where('is_correction','0')
            ->where('void','0')
            ->first();

        return !empty($result);
    }

    public static function getGuestDetailByFolioNumber($folioNumber){
        $result = Folio::select('guest_detail_id')->where('number',$folioNumber)->first();

        return $result;
    }

    public static function getCommission($commissionTypeCode, $commissionValue, $roomRateAmount, $roomRateBasicAmount, $arrivalDate){
        $result = 0;

        if( $commissionTypeCode == GlobalVariableController::$commissionType['PercentFirstNightFullRate'] && $arrivalDate == AuditLogController::auditDate() ){
            $result = FormatController::round3($commissionValue * $roomRateAmount) / 100;
        } else if( $commissionTypeCode == GlobalVariableController::$commissionType['PercentPerNightFullRate'] ){
            $result = FormatController::round3($commissionValue * $roomRateAmount) / 100;
        } else if( $commissionTypeCode == GlobalVariableController::$commissionType['PercentFirstNightNettRate'] && $arrivalDate == AuditLogController::auditDate()){
            $result = FormatController::round3($commissionValue * $roomRateBasicAmount) / 100;
        } else if( $commissionTypeCode == GlobalVariableController::$commissionType['PercentPerNightNettRate'] ){
            $result = FormatController::round3($commissionValue * $roomRateBasicAmount) / 100;
        } else if( $commissionTypeCode == GlobalVariableController::$commissionType['FixAmountFirstNight'] && $arrivalDate == AuditLogController::auditDate()){
            $result = $commissionValue;
        } else if( $commissionTypeCode == GlobalVariableController::$commissionType['FixAmountPerNight'] ){
            $result = $commissionValue;
        }

        return $result;
    }

    public static function getCommissionPackage($commissionTypeCode, $commissionValue, $packageAmount, $arrivalDate) {
        $result = 0;

        if( $commissionTypeCode == GlobalVariableController::$commissionType['PercentFirstNightFullRate'] && $arrivalDate == AuditLogController::auditDate() ){
            $result = FormatController::round3($commissionValue * $packageAmount) / 100;
        } else if( $commissionTypeCode == GlobalVariableController::$commissionType['PercentPerNightFullRate'] ){
            $result = FormatController::round3($commissionValue * $packageAmount) / 100;
        } else if( $commissionTypeCode == GlobalVariableController::$commissionType['FixAmountFirstNight'] && $arrivalDate == AuditLogController::auditDate()){
            $result = $commissionValue;
        } else if( $commissionTypeCode == GlobalVariableController::$commissionType['FixAmountPerNight'] ){
            $result = $commissionValue;
        }

        return $result;
    }

    public static function isHaveBreakfast($folioNumber){
        $result = Folio::select('folio.number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_room_rate', 'guest_detail.room_rate_code', 'cfg_init_room_rate.code')
            ->leftJoin('cfg_init_room_rate_breakdown','guest_detail.room_rate_code','cfg_init_room_rate_breakdown.room_rate_code')
            ->where('folio.number', $folioNumber)
            ->where('cfg_init_room_rate_breakdown.account_code', ConfigurationController::value(null, VariableGlobal::$configurationCategory['GlobalAccount'], VariableGlobal::$configurationName['AccountBreakfast']))
            ->orWhere('cfg_init_room_rate.include_breakfast','-1')
            ->first();

            return response()->json(!empty($result));
        }

    public static function isCanPostRoomCharge($chargeFrequencyCode, $arrivalDate){
        $arrivalDate = FormatController::formatDate($arrivalDate);
        $weeklyCharged = (FormatController::daysBetween(FormatController::formatDate($arrivalDate), AuditLogController::auditDate()) % 7) == 0;
        $monthlyCharged = (FormatController::daysBetween(FormatController::formatDate($arrivalDate), AuditLogController::auditDate())  % 30) == 0;
        $result =
            ($chargeFrequencyCode == GlobalVariableController::$chargeFrequency['OnceOnly'] && $arrivalDate == AuditLogController::auditDate() ? true :
            ($chargeFrequencyCode == GlobalVariableController::$chargeFrequency['Daily'] ? true :
            ($chargeFrequencyCode == GlobalVariableController::$chargeFrequency['Weekly'] && $weeklyCharged ? true :
            ($chargeFrequencyCode == GlobalVariableController::$chargeFrequency['Monthly'] && $monthlyCharged ? true : false))));

        return $result;
    }

    public static function isStayOfDate($folioNumber, $auditDate){
        $result = Folio::select('number')
            ->leftJoin('guest_detail' ,'folio.guest_detail_id', 'guest_detail.id')
            ->where('number', $folioNumber)
            ->whereDate('guest_detail.arrival','<=',$auditDate)
            ->whereDate('guest_detail.departure','>',$auditDate)->first();

        return !empty($result);
    }

    public static function isScheduledRate($folioNumber, $date){
        // $result= HelperController::checkCode('guest_scheduled_rate','id_log','folio_number','=',$folioNumber,'from_date','<=',FormatController::formatDate($date),'to_date','>=', FormatController::formatDate($date));
        $result = Self::CheckCode('guest_scheduled_rate', 'id_log', 'folio_number', $folioNumber. '" AND from_date<="' .FormatController::formatDate($date). '" AND to_date>="' .FormatController::formatDate($date));
        return $result;
    }

    public static function isWeekend($date){
         $result =
            FormatController::dayOfWeekNumber($date) == 5 && VariableGlobal::weekendDay('Friday') ||
            FormatController::dayOfWeekNumber($date) == 6 && VariableGlobal::weekendDay('Saturday') ||
            FormatController::dayOfWeekNumber($date) == 0 && VariableGlobal::weekendDay('Sunday');
        return $result;
    }

    public static function isInHousePosted($auditDate, $folioNumber){
        $result =DB::table('guest_in_house')->select('id_log')->where('audit_date',FormatController::formatDate($auditDate))->where('folio_number',$folioNumber)->first();
        return !empty($result);
    }

    //=======================================================================//

    // public static function checkCode($tableName, $fieldSelected, $conditionField1, $condition1,$conditionValue1, $conditionField2, $condition2,$conditionValue2,$conditionField3, $condition3,$conditionValue3){
    //     $query= DB::table($tableName)->select($fieldSelected)->where($conditionField1,$condition1,$conditionValue1);
    //     if($conditionField2 != null && $conditionValue2 != null){
    //         $query->where($conditionField2,$condition2,$conditionValue2);
    //     }
    //     if($conditionField3 != null && $conditionValue3 != null){
    //         $query->where($conditionField3,$condition3,$conditionValue3);
    //     }
    //     return $query->first();
    // }

    public static function getAccountX($key, $value, $result){
        $resultX= '';
        $query= Account::select($result)->where('cfg_init_account.'.$key, $value)
        ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
        ->leftJoin('cfg_init_tax_and_service','cfg_init_account.tax_and_service_code','cfg_init_tax_and_service.code')
        ->first();
        if(!empty($query)){
             $resultX= $query;
        }
        return $resultX;
    }

    public static function getAccountTaxServiceX($key, $value, $result){
        $query= TaxService::select($result)->where($key, $value)
        ->first();
        return $query;
    }

    public static function isSubFolioFromPOS($subFolioId, $transferPairId){
        return self::checkCode('pos_check_transaction', 'id_log', '(sub_folio_id', $subFolioId. '" OR sub_folio_id="' .$transferPairId. '") AND sub_folio_id<>"0');
    }

    public static function checkCode($tableName, $fieldSelected, $fieldCondition, $value){
        $query = DB::table($tableName)
            ->selectRaw($fieldSelected )
            ->whereRaw($fieldCondition.'="'.$value.'" ')
            ->first();

        return !empty($query);
    }

    public static function getSubFolioAccountCode($id){
        $result = '';
        $query = SUbFolio::select('account_code')->where('id_log',$id)->first();

        if($query){
            $result = $query->account_code;
        }

        return $result;
    }

    public static function isInvoiceHadPayment($invoiceNumber){
        $query = DB::table('invoice_payment')->where('invoice_number', $invoiceNumber)->first();

        return !empty($query);
    }

    public static function isJournalClosed($date){
        $month = FormatController::formatMonth($date);
        $year = FormatController::formatYear($date);

        $isCloseMonth = DB::table('acc_close_month')->where('month', $month)->where('year', $year)->first();
        $isCloseYear = DB::table('acc_close_year')->where('year', $year)->first();

        return !empty($isCloseMonth) || !empty($isCloseYear);
    }

    public static function getUserAccess($userID, $accessType){
        $result = User::select('id', 'users.code', 'email', 'group_code', $accessType)
            ->leftJoin('user_group', 'users.group_code', 'user_group.code')
            ->where('users.code', $userID)
            ->first();

        if(!empty($result)){
            try {
                $accessRule = Crypt::decryptString($result[$accessType]);
            } catch (DecryptException $e) {
                $accessRule = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
            }
        } else {
            $accessRule = '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
        }

        return $accessRule;
    }

    public static function getInvoiceNumber($date){
        $prefix = GlobalVariableController::$constProgramVariable['InvoiceNumberPrefix'] . FormatController::customFormatDate('y'.ProcedureQueryController::getServerID().'-', $date);

        $query = DB::table('invoice')->selectRaw('CAST(RIGHT(number, LENGTH(number) - ' .strlen($prefix). ') AS UNSIGNED) AS MaxInvoiceNumber')
            ->whereRaw('LEFT(number,' .strlen($prefix). ')="'.$prefix.'"')
            ->orderBy('MaxInvoiceNumber', 'DESC')
            ->first();

        if(!empty($query)){
            $result = $prefix.($query->MaxInvoiceNumber + 1);
        } else {
            $result = $prefix.'1';
        }

        return $result;
    }

    public static function getReceiptNumber($date){
        $prefix = FormatController::customFormatDate('y'.ProcedureQueryController::getServerID().'-', $date);

        $query = DB::table('receipt')->selectRaw('CAST(RIGHT(number, LENGTH(number) - ' .strlen($prefix). ') AS UNSIGNED) AS MaxReceiptNumber')
            ->whereRaw('LEFT(number,' .strlen($prefix). ')="'.$prefix.'"')
            ->orderBy('MaxReceiptNumber', 'DESC')
            ->first();

        if(!empty($query)){
            $result = $prefix.($query->MaxReceiptNumber + 1);
        } else {
            $result = $prefix.'1';
        }

        return $result;
    }

    public static function getJournalRefNumber($prefix, $postingDate){
        $prefix = $prefix.FormatController::customFormatDate('y'.ProcedureQueryController::getServerID(), $postingDate);
        $query = DB::table('acc_journal')
            ->selectRaw('CAST(RIGHT(ref_number,LENGTH(ref_number)-' .strlen($prefix). ') AS UNSIGNED) AS MaxRefNumber')
            ->whereRaw('LEFT(ref_number,' .strlen($prefix). ')="' .$prefix. '"')
            ->orderBy('MaxRefNumber', 'DESC')
            ->first();

        if(!empty($query)){
            $result = $prefix.($query->MaxRefNumber + 1);
        } else {
            $result = $prefix.'1';
        }

        return $result;
    }

    public static function getJournalAccountCompanyAR($companyCode){
        $query = Company::select('cfg_init_company_type.journal_account_code_ar')
            ->leftJoin('cfg_init_company_type', 'company.type_code', 'cfg_init_company_type.code')
            ->where('company.code', $companyCode)
            ->first();

        if(!empty($query)){
            $result = $query->journal_account_code_ar;
        } else {
            $result = '';
        }

        return $result;
    }

    public static function getInvoiceTotalPayment($invoiceNumber){
        $query = DB::table('invoice_payment')->selectRaw('SUM(amount_foreign) AS TotalAmount')
            ->where('invoice_number', $invoiceNumber)
            ->groupBy('invoice_number')
            ->first();
        if(!empty($query)){
            $result = $query->TotalAmount;
        } else {
            $result = 0;
        }

        return $result;
    }

    public static function getBankAccountTypeByJournalAccountCode($code){
        $query = DB::table('acc_cfg_init_bank_account')->select('type_code')->where('journal_account_code', $code)->first();

        if(!empty($query)){
            $result = $query->type_code;
        } else {
            $result = '';
        }

        return $result;

    }

    public static function getBankAccountTypeByCode($code){
        $query = DB::table('acc_cfg_init_bank_account')->select('type_code')->where('code', $code)->first();

        if(!empty($query)){
            $result = $query->type_code;
        } else {
            $result = '';
        }

        return $result;

    }

    public static function getJournalAccountCodeBankAccount($bankAccountCode){
        $query = DB::table('acc_cfg_init_bank_account')->select('journal_account_code')->where('code', $bankAccountCode)->first();

        if(!empty($query)){
            $result = $query->journal_account_code;
        } else {
            $result = '';
        }

        return $result;
    }
    public static function getAPRefundDepositOutStanding($subFolioID, $refNumber){
        $query = DB::table(
            SubFolio::select(
                'sub_folio.id_log',
                DB::raw('(SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", sub_folio.quantity*sub_folio.amount, -(sub_folio.quantity*sub_folio.amount))) - IFNULL(Payment.TotalPaid,0)) AS Amount'))
                ->leftJoinSub(DB::table('acc_ap_no_show_payment_detail')
                    ->select(
                        'sub_folio_id',
                        DB::raw('SUM(amount) AS TotalPaid'))
                    ->where('sub_folio_id', $subFolioID)
                    ->where('ref_number', '<>', $refNumber)
                    ->groupBy('sub_folio_id'),
                    'Payment', 'sub_folio.id_log', 'Payment.sub_folio_id')
                ->where('sub_folio.account_code', GlobalVariableController::globalAccount(GLobalVariableController::$configurationName['AccountAPRefundDeposit']))
                ->where('sub_folio.void', '0')
                ->groupBy('sub_folio.correction_breakdown'), 'Payment')
            ->select('Payment.Amount')
            ->where('id_log', $subFolioID)
            ->first();

        if(!empty($query)){
            $result = $query->Amount;
        } else {
            $result = 0;
        }

        return $result;
    }


    public static function getAPCommissionOutstanding($subFolioID, $refNumber){
        $query = DB::table(
            SubFolio::select(
                'sub_folio.id_log',
                DB::raw('(SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", sub_folio.quantity*sub_folio.amount, -(sub_folio.quantity*sub_folio.amount))) - IFNULL(Payment.TotalPaid,0)) AS Amount'))
                ->leftJoinSub(DB::table('acc_ap_commission_payment_detail')
                    ->select(
                        'sub_folio_id',
                        DB::raw('SUM(amount) AS TotalPaid'))
                    ->where('sub_folio_id', $subFolioID)
                    ->where('ref_number', '<>', $refNumber)
                    ->groupBy('sub_folio_id'),
                    'Payment', 'sub_folio.id_log', 'Payment.sub_folio_id')
                ->where('sub_folio.account_code', GlobalVariableController::globalAccount(GLobalVariableController::$configurationName['AccountAPCommission']))
                ->where('sub_folio.void', '0')
                ->groupBy('sub_folio.correction_breakdown'), 'Payment')
            ->select('Payment.Amount')
            ->where('id_log', $subFolioID)
            ->first();

        if(!empty($query)){
            $result = $query->Amount;
        } else {
            $result = 0;
        }

        return $result;
    }

    public static function getJournalAccountIncome(){
        $query = DB::table('cfg_init_journal_account')
            ->select(
                'cfg_init_journal_account.code',
                'cfg_init_journal_account.name',
                'cfg_init_journal_account_sub_group.name AS SubGroupName'
            )
            ->leftJoin('cfg_init_journal_account_sub_group', 'cfg_init_journal_account.sub_group_code', 'cfg_init_journal_account_sub_group.code')
            ->where('cfg_init_journal_account_sub_group.group_code', '4')
            ->orWhere('cfg_init_journal_account_sub_group.group_code', '8')
            ->orderBy('cfg_init_journal_account.code')
            ->get();

        return $query;
    }

    public static function getJournalAccountExpense(){
        $query = DB::table('cfg_init_journal_account')
        ->select(
            'cfg_init_journal_account.code',
            'cfg_init_journal_account.name',
            'cfg_init_journal_account_sub_group.name AS SubGroupName'
        )
        ->leftJoin('cfg_init_journal_account_sub_group', 'cfg_init_journal_account.sub_group_code', 'cfg_init_journal_account_sub_group.code')
        ->where('cfg_init_journal_account_sub_group.group_code', '6')
        ->orWhere('cfg_init_journal_account_sub_group.group_code', '7')
        ->orWhere('cfg_init_journal_account_sub_group.group_code', '9')
        ->orderBy('cfg_init_journal_account.code')
        ->get();

        return $query;
    }

    public static function getBankAccountPayment(){
        $query = DB::table('acc_cfg_init_bank_account')
        ->select(
            'code', 'name', 'journal_account_code', 'type_code', 'bank_account_number'
        )
        ->where('for_payment', '-1')
        ->orderBy('journal_account_code')
        ->get();

        return $query;
    }

    public static function getUnitCode(){
        $unitCode = DB::table('hotel_information')->select('code')->first();

        if(!empty($unitCode)){
            $result = $unitCode->code;
        } else {
            $result = '';
        }
        return $result;
    }



}
