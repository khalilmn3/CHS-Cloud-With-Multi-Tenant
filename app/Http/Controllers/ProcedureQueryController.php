<?php

namespace App\Http\Controllers;

use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\GlobalVariableController;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Boolean;
use PhpParser\Node\Expr\Cast\Double;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Self_;
use Illuminate\Support\Arr;
use App\Configurations\Models\Account;
use App\Configurations\Models\Room;
use App\Configurations\Models\RoomUnavailable;
use App\Folio\Models\Folio;
use App\Folio\Models\SubFolio;
use App\General\Models\ShiftLog;
use App\Guest\Models\GuestDeposit;
use App\Guest\Models\GuestProfile;
use App\Http\Controllers\Configurations\ConfigurationController;
use App\Http\Controllers\General\ShiftLogController;
use App\Reservation;
use Illuminate\Support\Facades\Auth;

class ProcedureQueryController extends Controller
{
    public $auditDate;
    public $userID;

    public function __construct()
    {
        $this->userID = Self::getUserLogin(); //Auth::Check() ? Auth::User()->code : '';
        $this->auditDate= AuditLogController::auditDate();
    }

    public static function getUserLogin(){
        return Auth::Check() ? Auth::User()->code : request('user_id');
    }

    private static function insertProcedure(String $query, Array $paramsArray){
        DB::select(
            'CALL insert_'.$query,$paramsArray);
    }

    private static function updateProcedure(String $query, Array $paramsArray){
        DB::select(
            'CALL update_'.$query,$paramsArray);
    }

    private static function deleteProcedure(String $query, Array $paramsArray){
        DB::select(
            'CALL delete_'.$query,$paramsArray);
    }

    public static function getDateTimeServer(){
        $queryDB = DB::select(DB::raw('SELECT NOW() AS ServerDateTime'));
        return $queryDB[0]->ServerDateTime;
    }

    public static function getDateServer(){
        $queryDB = DB::select(DB::raw('SELECT DATE(NOW()) AS ServerDate'));
        return $queryDB[0]->ServerDate;
    }

    public static function getTimeServer(){
        $queryDB = DB::select(DB::raw('SELECT TIME(NOW()) AS ServerTime'));
        return $queryDB[0]->ServerTime;
    }

    public static function getIDTable($tableName, $userId){
        $result = 0;
        $idTable = DB::table($tableName)->select('id')->where('user_id', $userId)->orderBy('id', 'DESC')->limit(1)->first();

        if($idTable){
            $result = $idTable->id;
        }

        return $result;
    }

    public static function getIDLogTable($tableName, $userId){
        $result = 0;
        $idLogTable = DB::table($tableName)->select('id_log')->where('user_id', $userId)->orderBy('id_log', 'DESC')->limit(1)->first();

        if($idLogTable){
            $result = $idLogTable->id_log;
        }

        return $result;
    }

    public static function getIDTableWithFieldSelect($tableName, $fieldSelect, $userId){
        $result = 0;
        $idFieldSelect = DB::table($tableName)->select($fieldSelect)->where('user_id', $userId)->orderBy($fieldSelect, 'DESC')->limit(1)->first();

        if($idFieldSelect){
            $result = $idFieldSelect->$fieldSelect;
        }

        return $result;
    }

    public static function getFieldFromTable($tableName, $field, $fieldCondition, $valueCondition){
        $result = '';
        $queryDB = DB::table($tableName)->select($field)->where($fieldCondition, $valueCondition)->first();
        if($queryDB){
            $result = $queryDB->$field;
        }

        return $result;
    }

    public static function insertForeignCash($idTransaction, $idCorrected, $idChange, $breakdown, $idTable, $postingdate, $refNumber, $typeCode, $currencyCodeDefault,
     $currencyCode, $remark, $amount, $amountForeign, $exchangeRate, $isCorrection, $userId){
        DB::select(
            'CALL insert_acc_foreign_cash(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $idTransaction, $idCorrected, $idChange, $idTable, $breakdown, $refNumber, $postingdate, $typeCode, $amount, $currencyCodeDefault, $amountForeign, $exchangeRate,
                $currencyCode, $remark, $isCorrection, $userId
            ]);
    }

    public static function insertFolio($folioType, $coNumber, $reservationNumber, $contactPersonid1,$contactPersonid2,$contactPersonid3,$contactPersonid4,$guestDetailId, $memberCode, $guestProfileId1,$guestProfileId2, $guestProfileId3,
        $guestProfileId4,$currencyCode, $exchangeRate, $isConstantCurrency, $groupCode, $folioTransfer, $subFolioTransfer, $transferBy, $transferGroup, $isIncognito, $marketingCode, $documentNumber, $voucherNumberTa, $flightNumber,
        $flightArrival, $filghtDeparture, $notes, $showNotes, $hkNotes, $isFromAllotment, $systemCode, $userId){

        self::insertProcedure('folio(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            HelperController::ifNull($folioType), HelperController::ifNull($coNumber), HelperController::ifNull($reservationNumber), HelperController::ifNull($contactPersonid1),HelperController::ifNull($contactPersonid2),HelperController::ifNull($contactPersonid3),HelperController::ifNull($contactPersonid4),HelperController::ifNull($guestDetailId), HelperController::ifNull($memberCode), HelperController::ifNull($guestProfileId1),HelperController::ifNull($guestProfileId2), HelperController::ifNull($guestProfileId3),
            HelperController::ifNull($guestProfileId4),HelperController::ifNull($currencyCode), HelperController::ifNull($exchangeRate), HelperController::ifNull($isConstantCurrency), '',HelperController::ifNull($groupCode), HelperController::ifNull($folioTransfer), HelperController::ifNull($subFolioTransfer), HelperController::ifNull($transferBy), HelperController::ifNull($transferGroup), HelperController::ifNull($isIncognito), HelperController::ifNull($marketingCode), HelperController::ifNull($documentNumber), HelperController::ifNull($voucherNumberTa), HelperController::ifNull($flightNumber),
            HelperController::ifNull($flightArrival), HelperController::ifNull($filghtDeparture), HelperController::ifNull($notes), HelperController::ifNull($showNotes), HelperController::ifNull($hkNotes), HelperController::trueFalse(ConfigurationController::value(null,null,GlobalVariableController::$configurationName['LockFolioOnCheckIn'])), HelperController::ifNull($isFromAllotment), HelperController::ifNull($systemCode), HelperController::ifNull($userId)
        ]);

        return self::getIDTableWithFieldSelect('folio', 'number', $userId);
    }

    /*
        Scheduled Rate
    */

    public static function insertReservationScheduledRate($reservationNumber, $fromDate, $toDate, $roomRateCode, $rateAmount, $complimentHu, $userId){
        self::insertProcedure('reservation_scheduled_rate(?,?,?,?,?,?,?)',[
            $reservationNumber, $fromDate, $toDate, $roomRateCode, $rateAmount, HelperController::ifNull($complimentHu), $userId
        ]);
    }

    public static function updateReservationScheduledRate($idLog, $fromDate, $toDate, $roomRateCode, $rateAmount, $complimentHu, $userId){
        self::updateProcedure('reservation_scheduled_rate(?,?,?,?,?,?,?)',[
            $idLog, $fromDate, $toDate, $roomRateCode, $rateAmount, $complimentHu, $userId
        ]);
    }

    public static function deleteReservationScheduledRate($idLog, $userId){
        self::deleteProcedure('reservation_scheduled_rate(?,?)',[
            $idLog, $userId
        ]);
    }
    public static function insertGuestScheduledRate($folioNumber, $fromDate, $toDate, $roomRateCode, $rateAmount, $complimentHu, $userId){
        self::insertProcedure('guest_scheduled_rate(?,?,?,?,?,?,?)',[
            $folioNumber, $fromDate, $toDate, $roomRateCode, $rateAmount, HelperController::ifNull($complimentHu), $userId
        ]);
    }

    public static function updateGuestScheduledRate($idLog, $fromDate, $toDate, $roomRateCode, $rateAmount, $complimentHu, $userId){
        self::updateProcedure('guest_scheduled_rate(?,?,?,?,?,?,?)',[
            $idLog, $fromDate, $toDate, $roomRateCode, $rateAmount, $complimentHu, $userId
        ]);
    }

    public static function deleteGuestScheduledRate($idLog, $userId){
        self::deleteProcedure('guest_scheduled_rate(?,?)',[
            $idLog, $userId
        ]);
    }

    public static function isScheduledRate($folioNumber, $date){
       $dateFormat = FormatController::formatDate($date);
       return self::checkCode('guest_scheduled_rate', 'id_log', 'folio_number', $folioNumber. ' AND from_date<="'.$dateFormat.'" AND to_date>="'.$dateFormat.'"');
    }

    public static function getScheduledRateComplimentHU($folioNumber, $postingDate){
        $result = '';

        $postingDateFormat = FormatController::formatDate($postingDate);
        $queryDB = DB::table('guest_scheduled_rate')
            ->select('compliment_hu')
            ->where('folio_number', $folioNumber)
            ->whereDate('from_date', '<=', $postingDateFormat)
            ->whereDate('to_date', '>=', $postingDateFormat)
            ->limit(1)
            ->first();

        if($queryDB){
            $result = $queryDB->compliment_hu;
        }

        return $result;
    }

    public static function insertReservationExtraCharge($reservationNumber, $packageName, $outletCode, $productCode, $packageCode, $subDepartmentCode, $accountCode,
        $quantity, $amount, $perPax, $includeChild, $taxServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId){

            self::insertProcedure('reservation_extra_charge(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $reservationNumber, HelperController::ifNull($packageName), HelperController::ifNull($outletCode), HelperController::ifNull($productCode), HelperController::ifNull($packageCode), $subDepartmentCode, $accountCode,
                $quantity, $amount, HelperController::trueFalse($perPax), HelperController::trueFalse($includeChild), $taxServiceCode, $chargeFrequencyCode, $maxPax, HelperController::ifNull($extraPax), HelperController::trueFalse($perPaxExtra), $userId
            ]);

        return self::getIDLogTable('reservation_extra_charge', $userId);
    }

    public static function updateReservationExtraCharge($idLog, $outletCode, $productCode, $subDepartmentCode, $accountCode,
        $quantity, $amount, $perPax, $includeChild, $taxServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId){
        self::updateProcedure('reservation_extra_charge(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $idLog, $outletCode, $productCode, $subDepartmentCode, $accountCode,
            $quantity, $amount, $perPax, $includeChild, $taxServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId
        ]);
    }

    public static function deleteReservationExtraCharge($idLog, $userId){
        self::deleteProcedure('reservation_extra_charge(?,?)',[
            $idLog, $userId
        ]);
    }

    public static function insertGuestExtraCharge($folioNumber, $packageName, $outletCode, $productCode, $packageCode, $subDepartmentCode, $accountCode,
        $quantity, $amount, $perPax, $includeChild, $taxServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId){

            self::insertProcedure('guest_extra_charge(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $folioNumber, HelperController::ifNull($packageName), HelperController::ifNull($outletCode), HelperController::ifNull($productCode), HelperController::ifNull($packageCode), $subDepartmentCode, $accountCode,
                $quantity, $amount, HelperController::trueFalse($perPax), HelperController::trueFalse($includeChild), HelperController::ifNull($taxServiceCode), $chargeFrequencyCode, $maxPax, $extraPax, HelperController::trueFalse($perPaxExtra), $userId
            ]);

        return self::getIDLogTable('guest_extra_charge', $userId);
    }

    public static function insertGuestExtraChargeCheckIn($reservationNumber, $folioNumber, $userId){
        $extraCharges = DB::table('reservation_extra_charge')->where('reservation_number', $reservationNumber)->get();
        if($extraCharges->isNotEmpty()){
            foreach($extraCharges as $extraCharge){
                self::insertGuestExtraCharge($folioNumber, $extraCharge->package_name, $extraCharge->outlet_code, $extraCharge->product_code, $extraCharge->package_code, $extraCharge->sub_department_code, $extraCharge->account_code,
                    $extraCharge->quantity, $extraCharge->amount, $extraCharge->per_pax, $extraCharge->include_child, $extraCharge->tax_and_service_code, $extraCharge->charge_frequency_code, $extraCharge->max_pax,
                    $extraCharge->extra_pax, $extraCharge->per_pax_extra, $userId);

                //Extra Charge Breakdown dari Reservation
                $guestExtraChargeID = self::getIDLogTable('guest_extra_charge', $userId);
                $breakdowns = DB::table('reservation_extra_charge_breakdown')->where('reservation_extra_charge_id', $extraCharge->id_log)->get();
                if($breakdowns->isNotEmpty()){
                    foreach($breakdowns as $breakdown){
                        self::insertGuestExtraChargeBreakdown($guestExtraChargeID, $breakdown->outlet_code, $breakdown->product_code, $breakdown->sub_department_code,
                            $breakdown->account_code, $breakdown->company_code, $breakdown->quantity, $breakdown->is_amount_percent, $breakdown->amount, $breakdown->per_pax,
                            $breakdown->include_child, $breakdown->remark, $breakdown->tax_and_service_code, $breakdown->charge_frequency_code,
                            $breakdown->max_pax, $breakdown->extra_pax, $breakdown->per_pax_extra, $userId);
                    }
                }
            }
        }
    }

    public static function updateGuestExtraCharge($idLog, $outletCode, $productCode, $subDepartmentCode, $accountCode,
        $quantity, $amount, $perPax, $includeChild, $taxServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId){
        self::updateProcedure('guest_extra_charge(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $idLog, HelperController::ifNull($outletCode), HelperController::ifNull($productCode), $subDepartmentCode, $accountCode,
            $quantity, $amount, HelperController::trueFalse($perPax), HelperController::trueFalse($includeChild), $taxServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, HelperController::trueFalse($perPaxExtra), $userId
        ]);
    }

    public static function deleteGuestExtraCharge($idLog, $userId){
        self::deleteProcedure('guest_extra_charge(?,?)',[
            $idLog, $userId
        ]);
    }

    public static function insertGuestExtraChargeBreakdown($guestExtraChargeid, $outletCode, $productCode, $subDepartmentCode, $accountCode, $companyCode, $quantity, $isAmountPercent, $amount, $perPax, $includeChild,
        $remark, $taxAndServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId){
        self::insertProcedure('guest_extra_charge_breakdown(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $guestExtraChargeid, HelperController::ifNull($outletCode), HelperController::ifNull($productCode), $subDepartmentCode, $accountCode, HelperController::ifNull($companyCode), $quantity, HelperController::trueFalse($isAmountPercent), $amount, HelperController::trueFalse($perPax), HelperController::trueFalse($includeChild),
            $remark, $taxAndServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, HelperController::trueFalse($perPaxExtra), $userId
        ]);
    }

    public static function updateGuestExtraChargeBreakdown($idLog, $outletCode, $productCode, $subDepartmentCode, $accountCode, $companyCode, $quantity, $isAmountPercent, $amount, $perPax, $includeChild,
        $remark, $taxAndServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId){
        self::updateProcedure('guest_extra_charge_breakdown(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $idLog, HelperController::ifNull($outletCode), HelperController::ifNull($productCode), $subDepartmentCode, $accountCode, HelperController::ifNull($companyCode), $quantity, HelperController::trueFalse($isAmountPercent), $amount, HelperController::trueFalse($perPax), HelperController::trueFalse($includeChild),
            $remark, $taxAndServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, HelperController::trueFalse($perPaxExtra), $userId
        ]);
    }

    public static function deleteGuestExtraChargeBreakdown($idLog, $userId){
        self::deleteProcedure('guest_extra_charge_breakdown(?,?)',[
            $idLog, $userId
        ]);
    }

    public static function insertSubFolio($folioNumber, $belongsTo, $subFolioGroupCode, $roomNumber, $subDept, $accountCode, $productCode, $packageCode, $currencyCodeDefault,
        $currencyCode, $remark, $docNumber, $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, $correctionBy, $correctionReason, $correctionBreakdown,
        $breakdown1, $breakdown2, $directBillCode, $postingType, $extraChargeId, $quantity, $amount, $amountForeign, $exchRate,bool $isCorrection, $userId){
        DB::select(
            'CALL insert_sub_folio(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $folioNumber, $belongsTo, $subFolioGroupCode, $roomNumber, $subDept, $accountCode, HelperController::ifNull($productCode), HelperController::ifNull($packageCode), $quantity, $amount,
                $currencyCodeDefault, $amountForeign, $exchRate, $currencyCode, AuditLogController::auditDate() , HelperController::ifNull($remark), HelperController::ifNull($docNumber), HelperController::ifNull($voucherNumber), $typeCode, HelperController::ifNull($cardBankCode), HelperController::ifNull($cardTypeCode), HelperController::trueFalse($isCorrection), HelperController::ifNull($correctionBy), HelperController::ifNull($correctionReason), $correctionBreakdown, $breakdown1, $breakdown2,
                HelperController::ifNull($directBillCode), $postingType, $extraChargeId, HelperController::getShiftUserID($userId), HelperController::getLogShiftID($userId), GlobalVariableController::$system['CakrasoftHotelSystem'], $userId
            ]);
    }

    public static function insertSubFolio1($folioNumber, $subFolioGroupCode, $roomNumber, $subDepartmentCode, $accountCode, $accountCodeTransfer, $productCode, $packageCode, $currencyCode, $remark, $documentNumber,
    $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, $correctionBreakdown, $breakdown1, $directBillCode, $postingType, $taxServiceManual, $extraChargeID, $quantity, $amount, $exchangeRate,
     $isCorrection, $isCanAutoTransfered, $subFolioID, $userId){

       if($currencyCode == ''){
           $currencyCode = HelperController::getDefaultCurrency();
           $exchangeRate = HelperController::getExchangeRateCurrency($currencyCode);
       }
       $allowZeroAmount = GlobalVariableController::allowZeroAmount();
       if(($quantity * $amount) > 0 || $quantity * $amount <= 0 && $allowZeroAmount && $currencyCode != '' && $exchangeRate > 0){
           $defaultCurrency = HelperController::getDefaultCurrency();
           if($currencyCode != $defaultCurrency){
               $amount = FormatController::round3($amount * $exchangeRate);
           }

           $belongsTo = $folioNumber;

           //Auto Routing
           if($isCanAutoTransfered){
               $getAutoRouting = HelperController::getAutoRouting($belongsTo,$accountCodeTransfer);
               if($getAutoRouting != ''){
                   $folioNumber = $getAutoRouting->folio_transfer;
                   $subFolioGroupCode = $getAutoRouting->sub_folio_transfer;
               }
           }
           $basicTaxService = HelperController::getBasicTaxService($accountCode, $taxServiceManual,$amount);
           $tax = $basicTaxService['tax'];
           $service = $basicTaxService['service'];
           $basic = $basicTaxService['basic'];
           $amountForeign = FormatController::round3($basic / $exchangeRate);
           $basicTaxServiceForeign = HelperController::GetBasicTaxServiceForeign($tax, $service, $amountForeign, $exchangeRate, $amountForeign, 0, 0);
           $taxForeign = $basicTaxServiceForeign['taxForeign'];
           $serviceForeign = $basicTaxServiceForeign['serviceForeign'];
           $basicForeign = $basicTaxServiceForeign['basicForeign'];
           if($correctionBreakdown == ''){
               $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
           }
           if($breakdown1 == '' ){
               $breakdown1 = HelperController::getSubFolioBreakdown1();
           }
           $breakdown2= HelperController::getSubFolioBreakdown2($breakdown1);
           $accountSubGroup = HelperController::getAccountSubGroupCode($accountCode);
           //IF DIRECTBILL / COMPLIMENT / AP COMMISION
           if($accountSubGroup == GlobalVariableController::$accountSubGroup['AccountReceivable'] || $accountSubGroup == GlobalVariableController::$accountSubGroup['AccountPayable'] || $accountSubGroup == GlobalVariableController::$accountSubGroup['Compliment']){
               $subFolioID = self::insertSubFolioX($folioNumber, $belongsTo, 0, $subFolioGroupCode, $roomNumber, $subDepartmentCode, $accountCode, $productCode, $packageCode, $defaultCurrency, $currencyCode, $remark,
                   $documentNumber,$voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, '', '', $correctionBreakdown, $breakdown1, $breakdown2, $directBillCode, $postingType, $extraChargeID, $quantity, $basic, $basicForeign, $exchangeRate, HelperController::trueFalse($isCorrection), $userId);
           } else {
               $subFolioID = self::insertSubFolioX($folioNumber, $belongsTo, 0, $subFolioGroupCode, $roomNumber, $subDepartmentCode, $accountCode, $productCode, $packageCode, $defaultCurrency, $currencyCode, $remark,
                   $documentNumber,$voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, '', '', $correctionBreakdown, $breakdown1, $breakdown2, '', $postingType, $extraChargeID, $quantity, $basic, $basicForeign, $exchangeRate, HelperController::trueFalse($isCorrection), $userId);
           }

           if($tax > 0){
               self::insertSubFolioX($folioNumber, $belongsTo, 0, $subFolioGroupCode, $roomNumber, $subDepartmentCode, GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']),
               $packageCode, $defaultCurrency, $currencyCode, $remark, $documentNumber, $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, '', '', $correctionBreakdown, $breakdown1, $breakdown2, '', $postingType, $extraChargeID, 1, $tax, $taxForeign, $exchangeRate, False, $userId);
           }
           if($service > 0){
               self::insertSubFolioX($folioNumber, $belongsTo, 0, $subFolioGroupCode, $roomNumber, $subDepartmentCode, GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']),
               $packageCode, $defaultCurrency, $currencyCode, $remark, $documentNumber, $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, '', '', $correctionBreakdown, $breakdown1, $breakdown2, '', $postingType, $extraChargeID, 1, $service, $serviceForeign, $exchangeRate, False, $userId);
           }

           return $subFolioID;
    }
}

   public static function insertSubFolio2($folioNumber, $subFolioGroupCode, $roomNumber, $subDepartmentCode, $accountCode, $accountCodeTransfer, $productCode, $packageCode, $currencyCode, $remark, $docNumber,
   $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, $correctionBreakdown, $breakdown1, $postingType, $extraChargeID, $basic, $tax, $service, $exchRate, $allowZeroAmount, $isCanAutoTransfer, $subFolioID, $userId){

       $result = 0;
       if(empty($currencyCode)){
           $currencyCode= HelperController::getDefaultCurrency();
           $exchRate= HelperController::getExchangeRateCurrency($currencyCode);
       }

       if($basic > 0 || ($basic == 0 && $allowZeroAmount && !empty($currencyCode) && $currencyCode != ' ' && $exchRate > 0)){
           $defaultCurrency = HelperController::getDefaultCurrency();
           $basicForeign = $basic;
           $taxForeign = $tax;
           $serviceForeign = $service;
           if($currencyCode != $defaultCurrency){
               $basic= FormatController::round3($basicForeign * $exchRate);
               $tax = FormatController::round3($taxForeign * $exchRate);
               $service = FormatController::round3($serviceForeign * $exchRate);
           }

           $belongsTo= $folioNumber;
       //folio routing
           if($isCanAutoTransfer){
               $getAutoRouting = HelperController::getAutoRouting($belongsTo,$accountCode);
               if($getAutoRouting != ''){
                   $folioNumber = $getAutoRouting->folio_transfer;
                   $subFolioGroupCode = $getAutoRouting->sub_folio_transfer;
               }
           }
           if($correctionBreakdown == ''){
               $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
           }
           if($breakdown1 == '' ){
               $breakdown1 = HelperController::getSubFolioBreakdown1();
           }
           $breakdown2= HelperController::getSubFolioBreakdown2($breakdown1);
           $subFolioID = self::insertSubFolioX($folioNumber, $belongsTo, 0, $subFolioGroupCode, $roomNumber, $subDepartmentCode, $accountCode, $productCode, $packageCode, $defaultCurrency, $currencyCode, $remark,
                       $docNumber,$voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, '', '', $correctionBreakdown, $breakdown1, $breakdown2, '', $postingType, $extraChargeID, 1, $basic, $basicForeign, $exchRate, False, $userId);
           if($tax > 0){
               self::insertSubFolioX($folioNumber, $belongsTo, 0, $subFolioGroupCode, $roomNumber, $subDepartmentCode, GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']),
               $packageCode, $defaultCurrency, $currencyCode, $remark, $docNumber, $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, '', '', $correctionBreakdown, $breakdown1, $breakdown2, '', $postingType, $extraChargeID, 1, $tax, $taxForeign, $exchRate, False, $userId);
           }
           if($service > 0){
               self::insertSubFolioX($folioNumber, $belongsTo, 0, $subFolioGroupCode, $roomNumber, $subDepartmentCode, GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']), GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']),
               $packageCode, $defaultCurrency, $currencyCode, $remark, $docNumber, $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, '', '', $correctionBreakdown, $breakdown1, $breakdown2, '', $postingType, $extraChargeID, 1, $service, $serviceForeign, $exchRate, False, $userId);
           }
           if($folioNumber == $belongsTo){
               $result = '';
           } else {
               $result = $folioNumber.'/'.$subFolioGroupCode;
           }
       }

       return $result;
   }


   public static function insertSubFolioX($folioNumber, $belongsTo, $idCorrected, $subFolioGroupCode, $roomNumber, $subDept, $accountCode, $productCode, $packageCode, $currencyCodeDefault,
        $currencyCode, $remark, $docNumber, $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, $correctionBy, $correctionReason, $correctionBreakdown,
        $breakdown1, $breakdown2, $directBillCode, $postingType, $extraChargeId, $quantity, $amount, $amountForeign, $exchRate,bool $isCorrection, $userId){

           if($currencyCodeDefault == '' || $currencyCodeDefault == null){
               $currencyCodeDefault = HelperController::getDefaultCurrency();
           }
           if($currencyCode == '' || $currencyCode == null){
               $currencyCode = HelperController::getDefaultCurrency();
           }
       //insert sub folio
       ProcedureQueryController::insertSubFolio($folioNumber, $belongsTo, $subFolioGroupCode, HelperController::ifNull($roomNumber), $subDept, $accountCode, $productCode, $packageCode, $currencyCodeDefault,
           $currencyCode, $remark, $docNumber, $voucherNumber, $typeCode, $cardBankCode, $cardTypeCode, $correctionBy, $correctionReason, $correctionBreakdown,
           $breakdown1, $breakdown2, $directBillCode, $postingType, $extraChargeId, $quantity, $amount, $amountForeign, $exchRate,$isCorrection, $userId);
       $subFolioID = HelperController::getIDLogTable('sub_folio', $userId);

       //insert foreign cash
       $accountSubGroup = HelperController::getAccountSubGroupCode($accountCode);
       if($accountSubGroup == GlobalVariableController::$accountSubGroup['Payment'] || $accountSubGroup == GlobalVariableController::$accountSubGroup['CreditDebitCard'] ||
           $accountSubGroup == GlobalVariableController::$accountSubGroup['BankTransfer'] && $currencyCode != $currencyCodeDefault ) {
           if( $typeCode == GlobalVariableController::$transactionType['Debit']){
               $typeCodeX = GlobalVariableController::$transactionType['Credit'];
           } else {
               $typeCodeX =  GlobalVariableController::$transactionType['Debit'];
           }
           if($isCorrection){
               $remarkForeignCash = 'Payment Correction for Folio: '.$folioNumber.', Room: '.$roomNumber.', Doc#: '.$docNumber;
           } else {
               $remarkForeignCash = 'Payment for Folio : '.$folioNumber.', Room: '.$roomNumber.', Doc#: '.$docNumber;
           }
           ProcedureQueryController::insertForeignCash($subFolioID, $idCorrected, 0,0,GlobalVariableController::$foreignCashTableID['SubFolio'], AuditLogController::auditDate(), '', $typeCodeX, $currencyCodeDefault, $currencyCode,
           $remarkForeignCash, $amount, $amountForeign, $exchRate, HelperController::trueFalse($isCorrection), $userId );
       }
       return $subFolioID;
   }

    public static function deleteGuestInHouse($auditDate, $folioNumber, $userId){
        DB::select(
            'CALL delete_guest_in_house(?,?,?)',[
                $auditDate, $folioNumber, $userId
            ]);
    }

    public static function insertLogSpecialAcces($systemCode, $accessName, $accessDenied, $userId){
        self::insertProcedure('log_special_access(?,?,?,?,?,?,?,?)',[$systemCode,$accessName, AuditLogController::auditDate(), $_SERVER['REMOTE_ADDR'], gethostbyaddr($_SERVER['REMOTE_ADDR']), '', $accessDenied,  $userId]);
    }

    public static function insertAuditDate($auditDate, $userId){
        self::insertProcedure('audit_log(?,?)',[FormatController::formatDate(FormatController::incDay($auditDate, 1)), $userId]);
    }

    public static function closeAllShift(){
        self::updateProcedure('log_shift_close_all()',[]);
    }


    public static function voidSubFolioByCorrectionBreakdown($correctionBreakdown,String $voidBy,String $voidReason,String $userId){
        self::updateProcedure('sub_folio_void_by_correction_breakdown(?,?,?,?)',[$correctionBreakdown, $voidBy, $voidReason, $userId]);
    }

    public static function insertLogUserW8UserId($actionId, $dataLink1, $dataLink2, $dataLink3, $data, $userId){
        self::insertProcedure('log_user(?,?,?,?,?,?,?,?,?,?,?)',[GlobalVariableController::$constProgramVariable['DefaultSystemCode'], $actionId, FormatController::formatDate(AuditLogController::auditDate()),
            $_SERVER['REMOTE_ADDR'], gethostname(),'',$dataLink1, $dataLink2, $dataLink3, $data, $userId]);
    }

    public static function insertLogUserNoUserId($actionId, $dataLink1, $dataLink2, $dataLink3, $data){
        self::insertProcedure('log_user(?,?,?,?,?,?,?,?,?,?,?)',[GlobalVariableController::$constProgramVariable['DefaultSystemCode'], $actionId, FormatController::formatDate(AuditLogController::auditDate()),
            $_SERVER['REMOTE_ADDR'], gethostname(),'',$dataLink1, $dataLink2, $dataLink3, $data, '']);
    }

    public static function insertGuestInHouse($postingDate, $folioNumber, $groupCode, $roomTypeCode, $bedTypeCode, $roomNumber, $roomRateCode, $businessSourceCode, $commissionType, $paymentTypeCode, $marketCode,
        $bookingSourceCode, $titleCode, $fullname, $street, $city, $cityCode, $nationalityCode, $countryCode, $stateCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, $marketingCode, $complimentHU,
        $note, $adult, $child, $rateOriginal, $rate, $discount, $commissionValue, $discountPercent, $isAdditional, $isScheduledRate, $isBreakfast, $userId){
        DB::select(
            'CALL insert_guest_in_house(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $postingDate, intval($folioNumber), strval($groupCode), intval($adult), intval($child), strval($roomTypeCode), strval($bedTypeCode), intval($roomNumber), strval($roomRateCode), floatval($rateOriginal), floatval($rate), HelperController::boolToString($discountPercent), floatval($discount), strval($businessSourceCode), strval($commissionType), floatval($commissionValue),
                strval($paymentTypeCode), strval($marketCode), strval($bookingSourceCode), strval($titleCode), strval($fullname), strval($street), strval($countryCode), strval($stateCode), strval($cityCode), strval($city), strval($nationalityCode), strval($postalCode), strval($phone1), strval($phone2), strval($fax), strval($email), strval($website), strval($companyCode),
                '', strval($guestTypeCode), strval($marketingCode), '','',strval($complimentHU), HelperController::boolToString($isAdditional), HelperController::boolToString($isScheduledRate), HelperController::boolToString($isBreakfast), strval($note), $userId
            ]);
    }

    public static function insertGuestInHouseBreakdown($postingDate, $folioNumber, $outletCode, $productCode, $subDepartment, $accountCode, $remark, $taxNServiceCode, $chargeFrequencyCode, $quantity, $amount, $extraPax, $maxPax, $perPax, $includeChild, $perPaxExtra, $userId){
        DB::select(
            'CALL insert_guest_in_house_breakdown(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                FormatController::formatDate($postingDate), $folioNumber, $outletCode, $productCode, $subDepartment, $accountCode, $quantity, $amount, HelperController::boolToString($perPax),
                HelperController::boolToString($includeChild), $remark, $taxNServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, HelperController::boolToString($perPaxExtra), $userId
            ]);
    }

    /*
        This procedure use on Checkin/Walkin/Move Room Copy from room Rate Breakdown
    */
    public static function insertGuestBreakdown($folioNumber, $roomRateCode, $userId){
        $queryDB = DB::table('cfg_init_room_rate_breakdown')
            ->select('outlet_code', 'product_code', 'sub_department_code', 'account_code', 'company_code', 'quantity', 'is_amount_percent',
                    'amount', 'per_pax', 'include_child', 'remark', 'tax_and_service_code', 'charge_frequency_code', 'max_pax', 'extra_pax', 'per_pax_extra')
            ->where('room_rate_code', $roomRateCode)
            ->get();

        if($queryDB){
            foreach($queryDB as $dataDB){
                self::insertProcedure('guest_breakdown(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [$folioNumber, $dataDB->outlet_code, $dataDB->product_code, $dataDB->sub_department_code,
                    $dataDB->account_code, $dataDB->company_code, $dataDB->quantity, $dataDB->is_amount_percent, $dataDB->amount, $dataDB->per_pax, $dataDB->include_child, $dataDB->remark,
                    $dataDB->tax_and_service_code, $dataDB->charge_frequency_code, $dataDB->max_pax, $dataDB->extra_pax, $dataDB->per_pax_extra, $userId]);
            }
        }
    }

    /*
        Room Unavailable
    */
    public static function insertRoomUnavailable($roomNumber, $fromDate, $toDate, $statusCode, $reasonCode, $note, $userId){
        self::insertProcedure('room_unavailable(?,?,?,?,?,?,?)', [$roomNumber, $fromDate, $toDate, $statusCode, HelperController::ifNull($reasonCode), $note, $userId]);
    }

    public static function updateRoomUnavailable($roomUnavailableID, $fromDate, $toDate, $statusCode, $reasonCode, $note, $userId){
        self::updateProcedure('room_unavailable(?,?,?,?,?,?,?)', [$roomUnavailableID, $fromDate, $toDate, $statusCode, HelperController::ifNull($reasonCode), $note, $userId]);
    }

    public static function deleteRoomUnavailable($roomUnavailableID, $userId){
        self::deleteProcedure('room_unavailable(?,?)', [$roomUnavailableID, $userId]);
    }

    public static function getDetailRoomUnavailable($roomUnavailableID){
        $result = [];
        $queryDB = DB::table('room_unavailable')
            ->select('room_number', 'from_date', 'to_date', 'status_code', 'reason_code', 'note')
            ->where('id_log', $roomUnavailableID)
            ->first();

        if($queryDB){
            $result = $queryDB;
        }

        return $result;
    }

    public static function insertGuestDeposit($reservationNumber, $subDepartmentCode, $accountCode, $defaultCurrencyCode, $amount, $exchangeRate, $currencyCode, $postingDate, $remark, $documentNumber, $typeCode, $cardBankCode,
        $cardTypeCode, $isCorrection, $correctionBy, $correctionReason, $correctionBreakdown, $system, $userId){

        $currencyCodeDefault = HelperController::getDefaultCurrency();
        $currencyCode = !empty($currencyCode) ? $currencyCode :  $currencyCodeDefault;
        $exchangeRate = !empty($currencyCode) ? $exchangeRate : HelperController::getExchangeRateCurrency($currencyCode);
        $amountForeign = $amount;
        $amount = $currencyCode <> $currencyCodeDefault ? FormatController::round3($amount * $exchangeRate) : $amount;
        $system = !empty($system) ? $system : GlobalVariableController::$constProgramVariable['DefaultSystemCode'];
        $correctionBreakdown = !empty($correctionBreakdown) ? $correctionBreakdown : HelperController::getGuestDepositCorrectionBreakdown();


        self::insertProcedure('guest_deposit(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[$reservationNumber, $subDepartmentCode, $accountCode, $amount, $currencyCodeDefault, $amountForeign, $exchangeRate, $currencyCode, $postingDate, $remark, $documentNumber, $typeCode, $cardBankCode,
            $cardTypeCode, HelperController::boolToString($isCorrection), $correctionBy, $correctionReason, $correctionBreakdown, HelperController::getShiftUserID($userId), HelperController::getLogShiftID($userId), $system, $userId]);

        $guestDepositID= HelperController::getIDLogTable('guest_deposit',$userId);
        //Log User
        $canInsertLog = true;
        $actionId = GlobalVariableController::$logUserAction['InsertDeposit'];
        $userID = $userId;
        if ($isCorrection){
            $actionId = GlobalVariableController::$logUserAction['CorrectDeposit'];
            $userID = $correctionBy;
        }
        else if($typeCode === GlobalVariableController::$transactionType['Debit']){//Mode Refund
            $actionId = GlobalVariableController::$logUserAction['RefundDeposit'];
            //Checking CC charge
            $accountGroupCode = Account::select('cfg_init_account.id_log')
                                        ->leftJoin('cfg_init_account_sub_group', 'cfg_init_account.sub_group_code', 'cfg_init_account_sub_group.code')
                                        ->where('cfg_init_account.code', $accountCode)
                                        ->where('cfg_init_account_sub_group.group_code', GlobalVariableController::$accountGroup['Payment'])
                                        ->first();
            if(!$accountGroupCode){//Ignore if not payment
                $canInsertLog= false;
            }
        }

        if($canInsertLog){
            $logParams = ['actionId' => $actionId, 'link1' => $reservationNumber, 'link2' => $amount, 'link3' => 'Reservation', 'remark' => $correctionReason, 'userid' => $userID];
            ProcedureQueryController::insertLogUserX($logParams);
        }

        return $guestDepositID;
    }

    public static function insertGuestGroup($code, $name, $contactPerson, $street, $countryCode, $stateCode, $cityCode, $city, $postalCode, $phone1, $phone2, $fax, $email, $website, $userId){
        DB::select(
            'CALL insert_guest_group(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $code, $name, $contactPerson, $street, $countryCode, $stateCode, $cityCode, $city, $postalCode, $phone1, $phone2, $fax, $email, $website, $userId
            ]);
        $logParams = ['actionId' => GlobalVariableController::$logUserAction['InsertGroupReservation'], 'link1' => $code, 'userid' => $userId];
        ProcedureQueryController::insertLogUserX($logParams);
    }

    public static function insertRoomUnavailableHistory($postingDate, $roomNumber, $statusCode, $reasonCode, $note, $userId){
        self::insertProcedure('room_unavailable_history(?,?,?,?,?,?)',[$postingDate, $roomNumber, $statusCode, $reasonCode, $note, $userId]);
    }

    public static function checkOut($folioNumber, $departureDate, $userId){
        self::updateProcedure('folio_status_closed(?,?,?)', [$folioNumber, $departureDate, $userId]);

        $logParams = ['actionId' => GlobalVariableController::$logUserAction['CheckOutFolio'], 'link1' => $folioNumber, 'userid' => $userId];
        ProcedureQueryController::insertLogUserX($logParams);
    }

    public static function insertGuestDetail($dateArrival,$dateDeparture, $adult, $child, $roomTypeCode, $bedTypeCode, $roomNumber, $roomRateCode,
        $weekdayRate, $weekendRate, $discountPercent, $discount, $businessSource, $commissionType, $commissionValue, $paymentType,
        $marketCode, $bookingSource, $billInstruction, $userId){

        Self::insertProcedure('guest_detail(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            FormatController::formatDateTime($dateArrival),  FormatController::formatDateTime($dateDeparture), $adult, $child, $roomTypeCode, $bedTypeCode, $roomNumber, $roomRateCode,
            $weekdayRate, $weekendRate, $discountPercent, $discount, $businessSource, $commissionType, $commissionValue, $paymentType,
            $marketCode, $bookingSource, $billInstruction, $userId
        ]);

        return self::getIDTable('guest_detail', $userId);
    }

    public static function insertContactPerson($title, $fullName, $street, $country, $state, $cityCode, $city, $nationalityCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, $idCard, $idCardNumber, $isMale, $birthPlace,
        $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05, $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
        $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,$customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $userId){

        Self::insertProcedure('contact_person(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $title, $fullName, $street, $country, $state, $cityCode, $city, $nationalityCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, $idCard, $idCardNumber, HelperController::boolToString($isMale), $birthPlace,
        $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05, $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
        $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,$customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $userId]);

        return self::getIDTable('contact_person', $userId);
    }

    public static function insertGuestProfile($title, $fullName, $street, $country, $state, $cityCode, $city, $nationalityCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
        $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05, $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
        $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06, $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $customerCode, $registrationDate, $source, $userId){

        Self::insertProcedure('guest_profile(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $title, $fullName, $street, $country, $state, $cityCode, $city, $nationalityCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, HelperController::boolToString($isMale), $birthPlace,
            $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05, $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
            $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06, $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $customerCode, $registrationDate, $source, $userId
        ]);

        return self::getIDTableWithFieldSelect('guest_profile', 'id_log', $userId);
    }

    public static function insertReservation( $contactPersonId1, $contactPersonId2, $contactPersonId3, $contactPersonId4, $guestDetailId, $memberCode, $guestProfileId1, $guestProfileId2, $guestProfileId3, $guestProfileId4, $currency, $exchangeRate, $isConstantCurrency, $reservationBy, $groupCode, $statusCode, $isIncognito, $marketing,
        $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture, $notes, $showNotes, $hkNote, $auditDate, $isFromAllotment, $bookingCode, $otaId, $cmResStatus, $userId){

        Self::insertProcedure('reservation(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $contactPersonId1, $contactPersonId2, $contactPersonId3, $contactPersonId4, $guestDetailId, $memberCode, $guestProfileId1, $guestProfileId2, $guestProfileId3, $guestProfileId4, $currency, $exchangeRate, HelperController::boolToString($isConstantCurrency), $reservationBy, '',$groupCode, $statusCode, HelperController::boolToString($isIncognito), $marketing,
            $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture, $notes, HelperController::boolToString($showNotes), $hkNote, $auditDate, HelperController::boolToString($isFromAllotment), $bookingCode, $otaId, $cmResStatus, $userId
        ]);

        $resvNumber= Reservation::select('number')->where('user_id',$userId)->orderBy('number', 'DESC')->first()->number;
        //Log User
        $logParams = ['actionId' => GlobalVariableController::$logUserAction['InsertReservation'], 'link1' => $resvNumber, 'userid' => $userId];
        ProcedureQueryController::insertLogUserX($logParams);
    }

    public static function insertJournal($refNumber, $aparNumber, $companyCode, $typeCode, $groupCode, $postingDate, $memo, $chequeNumber, $idSort, $userID){
        $postingDate = FormatController::formatDate($postingDate);
        if(empty($idSort)){
            $idSort = self::getJournalIDSort($postingDate);
        }

        self::insertProcedure('acc_journal(?,?,?,?,?,?,?,?,?,?,?)',[
            $refNumber, self::getUnitCode(), $aparNumber, $companyCode, $typeCode, $groupCode, $postingDate, $memo, $chequeNumber, $idSort, $userID
        ]);
    }

    public static function insertJournalDetail($refNumber, $subDepartmentCode, $accountCode, $amount, $typeCode, $remark, $idData, $userID){
        self::insertProcedure('acc_journal_detail(?,?,?,?,?,?,?,?,?)',[
            $refNumber, self::getUnitCode(), $subDepartmentCode, $accountCode, $amount, $typeCode, $remark, $idData, $userID
        ]);
    }

    public static function updateSubFolioVoid($idLog, $userBy, $reason, $userId){
        self::updateProcedure('sub_folio_void(?,?,?,?)',
            [
                $idLog, $userBy, $reason, $userId
            ]);
    }

    public static function updateSubFolioVoidByBreakdown1($breakdown1, $userBy, $reason, $userId){
        self::updateProcedure('sub_folio_void_by_breakdown1(?,?,?,?)',
            [
                $breakdown1, $userBy, $reason, $userId
            ]);
    }

    public static function updateSubFolioVoidByCorrectionBreakdown($correctionBreakdown, $userBy, $reason, $userId){
        self::updateProcedure('sub_folio_void_by_correction_breakdown(?,?,?,?)',
            [
                $correctionBreakdown, $userBy, $reason, $userId
            ]);
    }

    public static function updateSubFolioTransferPairId($subFolioIdFrom, $subFolioIdTo){
        self::updateProcedure('sub_folio_transfer_pair_id(?,?,?)',[$subFolioIdFrom, '0', $subFolioIdTo]);
        self::updateProcedure('sub_folio_transfer_pair_id(?,?,?)',[$subFolioIdTo, '0', $subFolioIdFrom]);
    }

    public static function updateGuestDepositTransferPairIdFolio($guestDepositId, $subFolioId){
        self::updateProcedure('guest_deposit_transfer_pair_id(?,?,?)',[$guestDepositId, '-1', $subFolioId]);
        self::updateProcedure('sub_folio_transfer_pair_id(?,?,?)',[$subFolioId, '-1', $guestDepositId]);
    }

    public static function updateGuestDepositVoid($guestDepositId, $voidBy, $voidReason, $userId){
        self::updateProcedure('guest_deposit_void(?,?,?,?)',[$guestDepositId, $voidBy, $voidReason, $userId]);
    }

    public static function updateGuestDepositVoidByCorrectionBreakdown($correctionBreakdown, $voidBy, $voidReason, $userId){
        self::updateProcedure('guest_deposit_void_by_correction_breakdown(?,?,?,?)',[$correctionBreakdown, $voidBy, $voidReason, $userId]);
    }

    public static function updateGuestDepositTransferPairId($guestDepositId1, $guestDepositId2){
        self::updateProcedure('guest_deposit_transfer_pair_id(?,?,?)',[$guestDepositId1, '0', $guestDepositId2]);
        self::updateProcedure('guest_deposit_transfer_pair_id(?,?,?)',[$guestDepositId2, '0', $guestDepositId1]);
    }

    public static function updateFolioStatusCancelCheckOut($folioNumber, $guestDetailId, $userId){
        self::updateProcedure('folio_status_cancel_closed(?,?,?)',[$folioNumber, $guestDetailId, $userId]);
    }

    public static function updateRoomNumber($id, $roomNumber, $userId){
        self::updateProcedure('guest_detail_room_number(?,?,?)',[$id, $roomNumber, $userId]);
    }

    public static function updateConfiguration($systemCode,$category,$name, $value,$userId){
        if(empty($value)){
            $value= '';
        }
        self::updateProcedure('configuration(?,?,?,?,?)',[$systemCode, $category, $name, $value, $userId]);
    }

    public static function updateHotelInformation($code,$name,$street, $city,$countryCode,$stateCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $foto){

        self::updateProcedure('hotel_information(?,?,?,?,?,?,?,?,?,?,?,?,?)',[$code,$name,$street, $city,$countryCode,$stateCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $foto]);
    }

    public static function cancelReservation($reservationNumber, $statusCode, $postingDate, $cancelBy, $reason, $userId){
        self::updateProcedure('reservation_status_cancel(?,?,?,?,?,?)',[
            $reservationNumber, $statusCode, $postingDate, $cancelBy, $reason, $userId
        ]);

        //Log User
        $actionId = 0;
        $userID = $userId;
        if ($statusCode === GlobalVariableController::$reservationStatus['Canceled']){
            $actionId = GlobalVariableController::$logUserAction['CancelReservation'];
        }
        else if ($statusCode === GlobalVariableController::$reservationStatus['Void']){
            $actionId = GlobalVariableController::$logUserAction['VoidReservation'];
            $userID = $cancelBy;
        }
        else if ($statusCode === GlobalVariableController::$reservationStatus['NoShow']){
            $actionId = GlobalVariableController::$logUserAction['NoShowReservation'];
        }
        $logParams = ['actionId' => $actionId, 'link1' => $reservationNumber, 'remark' => $reason, 'userid' => $userID];
        ProcedureQueryController::insertLogUserX($logParams);
    }

    public static function updateGuestInHouse($postingDate, $folioNumber, $groupCode, $roomTypeCode, $bedTypeCode, $roomNumber, $roomRateCode, $businessSourceCode, $commissionType, $paymentTypeCode, $marketCode, $bookingSourceCode, $titleCode, $fullname, $street, $cityCode, $city, $nationalityCode, $countryCode, $stateCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, $marketingCode, $complimentHU, $note,int $adult, int $child, $rateOriginal, $rate, $discount, $commissionValue, $discountPercent, $isAdditional, $isScheduledRate, $isBreakfast, $userId){
        self::updateProcedure('guest_in_house(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            FormatController::formatDate($postingDate), $folioNumber, $groupCode, $adult, $child, $roomTypeCode, $bedTypeCode, $roomNumber, $roomRateCode, $rateOriginal, $rate, HelperController::boolToString($discountPercent),
            $discount, $businessSourceCode, $commissionType, $commissionValue, $paymentTypeCode,$marketCode, $bookingSourceCode, $titleCode, $fullname, $street, $cityCode, $city, $nationalityCode, $countryCode, $stateCode, $postalCode, $phone1,
            $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, $marketingCode, $complimentHU, HelperController::boolToString($isAdditional), HelperController::boolToString($isScheduledRate),
            HelperController::boolToString($isBreakfast),$note, $userId
        ]);
    }

    public static function updateContactPerson($contactPersonId, $title, $fullName, $street, $country, $stateCode, $cityCode, $city, $nationalityCode, $postal, $phone1, $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, $idCard, $idCardNumber, $isMale, $birthPlace, $birthDate, $customField01, $customField02, $customField03, $customField04, $customField05,
        $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01, $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06, $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $userId){

            self::updateProcedure('contact_person(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $contactPersonId, $title, $fullName, $street, $country, $stateCode, $cityCode, $city, $nationalityCode, $postal, $phone1,
                $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, $idCard, $idCardNumber, $isMale, $birthPlace,
                $birthDate, $customField01, $customField02, $customField03, $customField04, $customField05,
                $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,
                $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12,
                $userId
            ]);
    }

    public static function updateGuestProfile($guestProfileId1, $title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1, $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
        $birthDate, $customField01, $customField02, $customField03, $customField04, $customField05, $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
        $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06, $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $registrationDate, $userId){

            self::updateProcedure('guest_profile(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $guestProfileId1, $title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,
                $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                $birthDate, $customField01, $customField02, $customField03, $customField04, $customField05,
                $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,
                $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12,
                $registrationDate, $userId
            ]);
    }

    public static function updateReservation($resvationNumber, $memberCode, $contactPersonId2, $contactPersonId3, $contactPersonId4, $guestProfileId1, $guestProfileId2,
        $guestProfileId3, $guestProfileId4, $currencyCode, $exchangeRate, $isConstantCurrency, $reservationBy, $groupCode, $statusCode, $isIncognito, $marketing,
        $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture, $notes, $showNotes, $hkNote,
        $otaId, $cmResStatus, $userId){

        self::updateProcedure('reservation(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $resvationNumber, $memberCode, $contactPersonId2, $contactPersonId3, $contactPersonId4, $guestProfileId1, $guestProfileId2,
            $guestProfileId3, $guestProfileId4, $currencyCode, $exchangeRate, HelperController::boolToString($isConstantCurrency), $reservationBy, '',$groupCode, $statusCode, HelperController::boolToString($isIncognito), $marketing,
            $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture, $notes, HelperController::boolToString($showNotes), $hkNote,
            $otaId, $cmResStatus, $userId
        ]);
    }



    public static function updateGuestDetail($guestDetailId, $arrivalDate, $departureDate, $adult, $child, $roomType, $bedType, $roomNumber, $roomRate, $weekdayRate, $weekendRate, $discountPercent, $discount, $businessSource, $commissionType, $commissionValue, $paymentType,
        $marketCode, $bookingSource, $billInstruction){
        self::updateProcedure('guest_detail(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $guestDetailId, FormatController::formatDateTime($arrivalDate), FormatController::formatDateTime($departureDate), $adult, $child, $roomType, $bedType, $roomNumber, $roomRate,
            $weekdayRate, $weekendRate, HelperController::boolToString($discountPercent), $discount, $businessSource, $commissionType, $commissionValue, $paymentType,
            $marketCode, $bookingSource, $billInstruction
        ]);
    }

    public static function updateGuestInHouseWithoutRate($postingDate, $folioNumber, $groupCode, $paymentTypeCode, $marketCode, $bookingSourceCode, $titleCode, $fullname, $street, $cityCode, $city, $nationalityCode, $countryCode, $stateCode, $postalCode, $phone1, $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, $marketingCode, $note, int $adult, int $child, bool $isAdditional, $userId){
        self::updateProcedure('guest_in_house_without_rate(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            FormatController::formatDate($postingDate), $folioNumber, $groupCode, $adult, $child, $paymentTypeCode, $marketCode, $bookingSourceCode, $titleCode, $fullname, $street, $countryCode, $stateCode, $cityCode, $city, $nationalityCode, $postalCode, $phone1,
            $phone2, $fax, $email, $website, $companyCode, $guestTypeCode, '', $marketingCode, '','',HelperController::boolToString($isAdditional), $note, $userId
        ]);
    }

    public static function updateFolioComplimentHu($number, $complimentHu, $userId){
        self::updateProcedure('folio_compliment_hu(?,?,?)',[$number, $complimentHu, $userId]);
    }

    public static function updateGuestGroup($code, $name, $contactPerson, $street, $countryCode, $stateCode, $cityCode, $city, $postalCode, $phone1, $phone2, $fax, $email, $website, $userId){
        Self::updateProcedure('guest_group(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $code, $name, $contactPerson, $street, $countryCode, $stateCode, $cityCode, $city, $postalCode, $phone1, $phone2, $fax, $email, $website, $userId
        ]);
        $logParams = ['actionId' => GlobalVariableController::$logUserAction['UpdateGroupReservation'], 'link1' => $code, 'userid' => $userId];
        ProcedureQueryController::insertLogUserX($logParams);
    }

    public static function updateRoomStatus($roomNumber, $statusCode, $userId){
        Self::updateProcedure('cfg_init_room_status(?,?,?)', [
            $roomNumber, $statusCode, $userId
        ]);
    }

    public static function updateRoomBlockStatus($roomNumber, $statusCode, $userId){
        Self::updateProcedure('cfg_init_room_block_status(?,?,?)', [
            $roomNumber, $statusCode, $userId
        ]);
    }

    public static function updateReservationConfirm($reservationNumber, $statusCode, $userId){
        Self::updateProcedure('reservation_confirm(?,?,?)',[$reservationNumber, $statusCode, $userId]);
    }

    public static function updateReservationStatus($reservationNumber, $statusCode, $userId){
        self::updateProcedure('reservation_status(?,?,?)',[$reservationNumber, $statusCode, $userId]);
    }

    public static function updateReservationStatus2($reservationNumber, $statusCode2, $userId){
        self::updateProcedure('reservation_confirm(?,?,?)',[$reservationNumber, $statusCode2, $userId]);
    }

    public static function updateSubFolioMoveByBreakdown($folioNumber, $correctionBreakdown, $groupCode, $userId){
        self::updateProcedure('sub_folio_move_by_breakdown(?,?,?,?)',[$folioNumber, $correctionBreakdown, $groupCode, $userId]);
    }

    public static function updateLogShiftClose($id){
        self::updateProcedure('log_shift_close(?)',[$id]);
    }

    public static function insertRoomStatistic($postingDate, $totalRoom, $outOfOrder, $officeUse, $underConstruction, $houseUse, $compliment, $roomSold, $dayUse, $revenueGross, $revenueW8Compliment, $revenueNonPackage, $revenueNett,
        $adult, $child, $adultSold, $childSold, $childDayUse, $adultDayUse, $adultCompliment, $childCompliment, $adultHU, $childHU, $walkIn, $checkIn, $checkInTomorrow, $reservation,
        $cancelReservation, $noShowReservation, $checkOut, $earlyCheckOut, $checkOutTomorrow, $breakfastCover, $foodCover, $beverageCover, $banquetCover, $weddingCover, $gatheringCover,
        $revenueBreakfast, $revenueFood, $revenueBeverage, $revenueBanquet, $revenueWedding, $revenueGathering, $guestLedger, $guestDeposit){

        $id = DB::table('room_statistic')->select('id')
            ->whereDate('date', FormatController::formatDate($postingDate))
            ->first();

        $unitCode = HelperController::getUnitCode();

        if(!empty($id)) {
            self::updateProcedure('room_statistic(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $id->id, intval($totalRoom), intval($outOfOrder), intval($officeUse), intval($underConstruction), intval($houseUse), intval($compliment), intval($roomSold), intval($dayUse), FormatController::round3($revenueGross), FormatController::round3($revenueW8Compliment), FormatController::round3($revenueNonPackage), FormatController::round3($revenueNett),
                intval($adult), intval($child), intval($adultSold), intval($childSold), intval($childDayUse), intval($adultDayUse), intval($adultCompliment), intval($childCompliment), intval($adultHU), intval($childHU), '', intval($walkIn), '', intval($checkIn), '', intval($checkInTomorrow), '','',intval($reservation), '','',
                intval($cancelReservation), intval($noShowReservation), intval($checkOut), '', intval($earlyCheckOut), intval($checkOutTomorrow), '', intval($breakfastCover), intval($foodCover), intval($beverageCover), intval($banquetCover), intval($weddingCover), intval($gatheringCover),
                '','','','',
                FormatController::round3($revenueBreakfast), FormatController::round3($revenueFood), FormatController::round3($revenueBeverage), FormatController::round3($revenueBanquet), FormatController::round3($revenueWedding), FormatController::round3($revenueGathering), FormatController::round3($guestLedger), FormatController::round3($guestDeposit)
            ]);
        } else {
            self::insertProcedure('room_statistic(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                FormatController::formatDate($postingDate), intval($totalRoom), intval($outOfOrder), intval($officeUse), intval($underConstruction), intval($houseUse), intval($compliment), intval($roomSold), intval($dayUse), FormatController::round3($revenueGross), FormatController::round3($revenueW8Compliment), FormatController::round3($revenueNonPackage), FormatController::round3($revenueNett),
                intval($adult), intval($child), intval($adultSold), intval($childSold), intval($childDayUse), intval($adultDayUse), intval($adultCompliment), intval($childCompliment), intval($adultHU), intval($childHU), '', intval($walkIn), '', intval($checkIn), '', intval($checkInTomorrow), '', '', intval($reservation), '', '',
                intval($cancelReservation), intval($noShowReservation), intval($checkOut), '', intval($earlyCheckOut), intval($checkOutTomorrow), '', intval($breakfastCover), intval($foodCover), intval($beverageCover), intval($banquetCover), intval($weddingCover), intval($gatheringCover),
                '','','','', //TODO variable not already difined
                FormatController::round3($revenueBreakfast), FormatController::round3($revenueFood), FormatController::round3($revenueBeverage), FormatController::round3($revenueBanquet), FormatController::round3($revenueWedding), FormatController::round3($revenueGathering), FormatController::round3($guestLedger), FormatController::round3($guestDeposit), $unitCode
            ]);
        }
    }

    public static function updateRoomStatisticRevenue($postingDate, $revenueGross, $revenuW8Compliment, $revenueNonPackage, $revenueNett, $revenueBreakfast, $revenueFood, $revenueBeverage, $revenueBanquet){
        $id = DB::table('room_statistic')->select('id')
            ->whereDate('date', FormatController::formatDate($postingDate))
            ->first();

        self::updateProcedure('room_statistic_revenue(?,?,?,?,?,?,?,?,?)',[
            $id->id, FormatController::round3($revenueGross), FormatController::round3($revenuW8Compliment), FormatController::round3($revenueNonPackage), FormatController::round3($revenueNett), FormatController::round3($revenueBreakfast), FormatController::round3($revenueFood), FormatController::round3($revenueBeverage), FormatController::round3($revenueBanquet)
        ]);
    }

    public static function insertMarketStatistic($postingDate, $marketCategoryCode, $marketCode, $marketCompanyCode, $roomMarket, $roomMarketCompliment, $paxMarket, $paxMarketCompliment, $revNetMarket, $revNetMarketCompliment, $revGrossMarket, $revGrossMarketCompliment, $revNonPackageMarket, $revNonPackageMarketCompliment,
        $businessSourceCode, $businessSourceCompanyCode, $roomBusinessSource, $roomBusinessSourceCompliment, $paxBusinessSource, $paxBusinessSourceCompliment, $revNetBusinessSource, $revNetBusinessSourceCompliment, $revGrossBusinessSource, $revGrossBusinessSourceCompliment, $revNonPackageBusinessSource, $revNonPackageBusinessSourceCompliment,
        $roomTypeCode, $roomTypeCompanyCode, $roomRoomType, $roomRoomTypeCompliment, $paxRoomType, $paxRoomTypeCompliment, $revNetRoomType, $revNetRoomTypeCompliment, $revGrossRoomType, $revGrossRoomTypeCompliment, $revNonPackageRoomType, $revNonPackageRoomTypeCompliment,
        $roomRateCode, $roomRateCompanyCode, $roomRoomRate, $roomRoomRateCompliment, $paxRoomRate, $paxRoomRateCompliment, $revNetRoomRate, $revNetRoomRateCompliment, $revGrossRoomRate, $revGrossRoomRateCompliment, $revNonPackageRoomRate, $revNonPackageRoomRateCompliment,
        $marketingCode, $marketingBusinessSourceCode, $marketingCompanyCode, $roomMarketing, $roomMarketingCompliment, $paxMarketing, $paxMarketingCompliment, $revNetMarketing, $revNetMarketingCompliment, $revGrossMarketing, $revGrossMarketingCompliment, $revNonPackageMarketing, $revNonPackageMarketingCompliment, $revAllNetMarketing, $revAllGrossMarketing,
        $countryCode, $countryStateCode, $countryCityCode, $roomCountry, $roomCountryCompliment, $paxCountry, $paxCountryCompliment, $revNetCountry, $revNetCountryCompliment, $revGrossCountry, $revGrossCountryCompliment, $revNonPackageCountry, $revNonPackageCountryCompliment, $revAllNetCountry, $revAllGrossCountry,
        $nationalityCode, $nationalityCountryCode, $roomNationality, $roomNationalityCompliment, $paxNationality, $paxNationalityCompliment, $revNetNationality, $revNetNationalityCompliment, $revGrossNationality, $revGrossNationalityCompliment, $revNonPackageNationality, $revNonPackageNationalityCompliment, $revAllNetNationality, $revAllGrossNationality){

        self::insertProcedure('market_statistic(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            FormatController::formatDate($postingDate), HelperController::ifNull($marketCategoryCode), HelperController::ifNull($marketCode), HelperController::ifNull($marketCompanyCode), intval($roomMarket), intval($roomMarketCompliment), intval($paxMarket), intval($paxMarketCompliment), FormatController::round2($revNetMarket), FormatController::round2($revNetMarketCompliment), FormatController::round2($revGrossMarket), FormatController::round2($revGrossMarketCompliment), FormatController::round2($revNonPackageMarket), FormatController::round2($revNonPackageMarketCompliment),
            HelperController::ifNull($businessSourceCode), HelperController::ifNull($businessSourceCompanyCode), intval($roomBusinessSource), intval($roomBusinessSourceCompliment), intval($paxBusinessSource), intval($paxBusinessSourceCompliment), FormatController::round2($revNetBusinessSource), FormatController::round2($revNetBusinessSourceCompliment), FormatController::round2($revGrossBusinessSource), FormatController::round2($revGrossBusinessSourceCompliment), FormatController::round2($revNonPackageBusinessSource), FormatController::round2($revNonPackageBusinessSourceCompliment),
            HelperController::ifNull($roomTypeCode), HelperController::ifNull($roomTypeCompanyCode), intval($roomRoomType), intval($roomRoomTypeCompliment), intval($paxRoomType), intval($paxRoomTypeCompliment), FormatController::round2($revNetRoomType), FormatController::round2($revNetRoomTypeCompliment), FormatController::round2($revGrossRoomType), FormatController::round2($revGrossRoomTypeCompliment), FormatController::round2($revNonPackageRoomType), FormatController::round2($revNonPackageRoomTypeCompliment),
            HelperController::ifNull($roomRateCode), HelperController::ifNull($roomRateCompanyCode), intval($roomRoomRate), intval($roomRoomRateCompliment), intval($paxRoomRate), intval($paxRoomRateCompliment), FormatController::round2($revNetRoomRate), FormatController::round2($revNetRoomRateCompliment), FormatController::round2($revGrossRoomRate), FormatController::round2($revGrossRoomRateCompliment), FormatController::round2($revNonPackageRoomRate), FormatController::round2($revNonPackageRoomRateCompliment),
            HelperController::ifNull($marketingCode), HelperController::ifNull($marketingBusinessSourceCode), HelperController::ifNull($marketingCompanyCode), intval($roomMarketing), intval($roomMarketingCompliment), intval($paxMarketing), intval($paxMarketingCompliment), FormatController::round2($revNetMarketing), FormatController::round2($revNetMarketingCompliment), FormatController::round2($revGrossMarketing), FormatController::round2($revGrossMarketingCompliment), FormatController::round2($revNonPackageMarketing), FormatController::round2($revNonPackageMarketingCompliment), FormatController::round2($revAllNetMarketing), FormatController::round2($revAllGrossMarketing),
            HelperController::ifNull($countryCode), HelperController::ifNull($countryStateCode), HelperController::ifNull($countryCityCode), intval($roomCountry), intval($roomCountryCompliment), intval($paxCountry), intval($paxCountryCompliment), FormatController::round2($revNetCountry), FormatController::round2($revNetCountryCompliment), FormatController::round2($revGrossCountry), FormatController::round2($revGrossCountryCompliment), FormatController::round2($revNonPackageCountry), FormatController::round2($revNonPackageCountryCompliment), FormatController::round2($revAllNetCountry), FormatController::round2($revAllGrossCountry),
            HelperController::ifNull($nationalityCode), HelperController::ifNull($nationalityCountryCode), intval($roomNationality), intval($roomNationalityCompliment), intval($paxNationality), intval($paxNationalityCompliment), FormatController::round2($revNetNationality), FormatController::round2($revNetNationalityCompliment), FormatController::round2($revGrossNationality), FormatController::round2($revGrossNationalityCompliment), FormatController::round2($revNonPackageNationality), FormatController::round2($revNonPackageNationalityCompliment), FormatController::round2($revAllNetNationality), FormatController::round2($revAllGrossNationality),
            '','','','','','','','','','','','','','','','','','','','','','','','','',''
        ]);
    }

    public static function insertFBStatistic($postingDate, $outletCode, $adult, $child, $adultBeverage, $childBeverage, $foodNett, $beverageNett){
        self::insertProcedure('?,?,?,?,?,?,?,?',[
            FormatController::formatDate($postingDate), HelperController::ifNull($outletCode), intval($adult), intval($child), intval($adultBeverage), intval($childBeverage), FormatController::round3($foodNett), FormatController::round3($beverageNett)
        ]);
    }

    public static function deleteGuestGroup($idLog, $userId){
        self::deleteProcedure('guest_group(?,?)',[$idLog, $userId]);
    }

    public static function deleteFBStatistic($postingDate){
        self::deleteProcedure('fb_statistic(?)',[$postingDate]);
    }

    public static function insertAutomaticRouting($folioNumber, $accountCode, $folioTransfer, $subFolio, $userId){
        $account= DB::table('folio_routing')->select('folio_number', 'account_code')->where('folio_number',$folioNumber)->where('account_code',$accountCode)->first();
        // 0 : success
        // 1 : exist
        if(empty($account)){
            Self::insertProcedure('folio_routing(?,?,?,?,?)',[$folioNumber , $accountCode, $folioTransfer, $subFolio, $userId]);
            return 0;
        } else {
            return 1;
        }
    }

//=====================================================================================
    // User Log Action Procedure
//=====================================================================================
    public static function insertLogUserX($params){
        $actionId = Arr::get($params, 'actionId', 0);
        $dataLink1 = Arr::get($params, 'link1', '');
        $dataLink2 = Arr::get($params, 'link2', '');
        $dataLink3 = Arr::get($params, 'link3', '');
        $remark = Arr::get($params, 'remark', '');
        $userId = Arr::get($params, 'userid','');

        self::insertLogUserW8UserId($actionId, $dataLink1, $dataLink2, $dataLink3, $remark, $userId);
    }

    public static function insertLogShift($userId, $shift, $remark, $systemCode){
        self::insertProcedure('log_shift(?,?,?,?,?,?,?,?)',[$userId, $shift, AuditLogController::auditDate(), $remark, $_SERVER['REMOTE_ADDR'], gethostbyaddr($_SERVER['REMOTE_ADDR']), '', $systemCode]);
    }

/*=====================================================================================
   this procedure check before cancel CheckIn, checkout & Other
=======================================================================================*/
    public static function checkCode($tableName, $fieldSelected, $fieldCondition, $value){
        $queryDB = DB::table($tableName)
            ->select($fieldSelected)
            ->whereRaw($fieldCondition.'='.$value)
            ->first();

        return $queryDB;
    }

    public static function getAccountSubGroupCode($accountCode){
        $result = '';

        $queryDB = DB::table('cfg_init_account')
            ->select('sub_group_code')
            ->where('code', $accountCode)
            ->first();

        if($queryDB){
            $result = $queryDB->sub_group_code;
        }
        return $result;
    }

    public static function isCanVoidOrCorrect($mode, $transactionID, $accountCode){
        $result = false;

        $accountSubGroupCode = self::getAccountSubGroupCode($accountCode);
        if($accountCode === GlobalVariableController::globalAccount('ACCOUNT_AP_REFUND_DEPOSIT')){
            $result = !self::checkCode('acc_ap_no_show_payment_detail', 'id_log', 'sub_folio_id', $transactionID);
        }
        else if($accountSubGroupCode === GlobalVariableController::$accountSubGroup['AccountPayable']){
            $result = !self::checkCode('acc_ap_commission_payment_detail', 'id_log', 'sub_folio_id', $transactionID);
        }
        else if($accountSubGroupCode === GlobalVariableController::$accountSubGroup['CreditDebitCard'] || $accountSubGroupCode === GlobalVariableController::$accountSubGroup['BankTransfer']){
            if ($mode === 0){
                $result = !self::checkCode('acc_credit_card_recon_detail', 'id_log', 'guest_deposit_id', $transactionID);
            }
            else{
                $result = !self::checkCode('acc_credit_card_recon_detail', 'id_log', 'sub_folio_id', $transactionID);
            }
        }
        else if($accountSubGroupCode === GlobalVariableController::$accountSubGroup['AccountReceivable']){
            $result = !self::checkCode('invoice_item', 'id_log', 'sub_folio_id', $transactionID);
        }
        else if($accountSubGroupCode === GlobalVariableController::$accountSubGroup['Payment']){
            if ($mode === 0){
                $result = !self::checkCode('acc_foreign_cash', 'id_log', 'id_transaction', $transactionID . ' AND id_change=0 AND stock<>amount_foreign AND id_table=' .GlobalVariableController::$foreignCashTableID['GuestDeposit']);
            }
            else{
                $result = !self::checkCode('acc_foreign_cash', 'id_log', 'id_transaction', $transactionID . ' AND id_change=0 AND stock<>amount_foreign AND id_table=' .GlobalVariableController::$foreignCashTableID['SubFolio']);
            }
        }
        else{
            $result = true;
        }

        return $result;
    }

    public static function isCanCancelCheckInFolio($folioNumber){
        $result = true;

        $queryDB = DB::table('sub_folio')
            ->select('account_code', 'id_log')
            ->where('folio_number', $folioNumber)
            ->where('void', '0')
            ->get();

        if($queryDB->isNotEmpty()){
            foreach($queryDB as $dataDB){
                if (!self::isCanVoidOrCorrect(1, $dataDB->id_log, $dataDB->account_code)){
                    $result = false;
                    return $result;
                }
            }
        }
        return $result;
    }

    public static function checkFolioReceiveTransfer($folioNumber){
        $folioTransferMessage = '';
        $queryDB = DB::table('folio_routing')
            ->select(DB::raw('DISTINCT CONCAT(folio.number, "/Room: ", guest_detail.room_number, "/", contact_person.title_code, contact_person.full_name) AS FolioDetail'))
            ->leftJoin('folio', 'folio_routing.folio_number', 'folio.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('folio_routing.folio_transfer', $folioNumber)
            ->get();

        if($queryDB->isNotEmpty()){
            foreach($queryDB as $dataDB){
                $folioTransferMessage = $folioTransferMessage.' '.$dataDB->FolioDetail;
            }
        }
        return $folioTransferMessage;
    }

    public static function checkFolioHaveTransactionFromOtherFolio($folioNumber){
        $folioHaveTransactionMessage = '';
        $queryDB = DB::table('sub_folio')
            ->select(DB::raw('CONCAT(sub_folio.belongs_to, "/Room: ", guest_detail.room_number, "/", contact_person.title_code, contact_person.full_name) AS FolioDetail'))
            ->leftJoin('folio', 'sub_folio.belongs_to', 'folio.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('sub_folio.folio_number', $folioNumber)
            ->whereRaw('sub_folio.folio_number <> sub_folio.belongs_to')
            ->groupBy('sub_folio.belongs_to')
            ->get();

        if($queryDB->isNotEmpty()){
            foreach($queryDB as $dataDB){
                $folioHaveTransactionMessage = $folioHaveTransactionMessage.' '.$dataDB->FolioDetail;
            }
        }
        return $folioHaveTransactionMessage;
    }

    public static function voidSubFolioByFolioNumber($folioNumber, $voidBy, $reason, $userID){
        self::updateProcedure('sub_folio_void_by_folio_number(?,?,?,?)', [$folioNumber, $voidBy, $reason, $userID]);
    }

    public static function deleteFolioRouting($folioNumber, $userID){
        self::deleteProcedure('folio_routing(?,?)', [$folioNumber, $userID]);
    }

    public static function cancelCheckInFolio($folioNumber, $departure, $cancelBy, $userID){
        self::updateProcedure('folio_status_cancel_check_in(?,?,?,?)', [$folioNumber, $departure, $cancelBy, $userID]);
    }

    public static function updateReservationCancelCheckIn($reservationNumber, $folioDeparture, $userID){
        self::updateProcedure('reservation_departure(?,?,?)', [$reservationNumber, $folioDeparture, $userID]);
        self::updateReservationStatus($reservationNumber, GlobalVariableController::$reservationStatus['New'], $userID);
    }

    public static function getFolioType($folioNumber){
        $result = '';
        $queryDB = DB::table('folio')
            ->select('type_code')
            ->where('number', $folioNumber)
            ->first();

        if($queryDB){
            $result = $queryDB->type_code;
        }
        return $result;
    }

    public static function getFolioBalance($folioNumber){
        $result = 0;

        $mainTableName = 'sub_folio';
        $queryDB = DB::table($mainTableName)
            ->select(
                DB::raw('SUM(IF(cfg_init_account_sub_group.group_code="'.GlobalVariableController::$accountGroup['Charge'].'" OR cfg_init_account_sub_group.group_code="'.GlobalVariableController::$accountGroup['TaxAndService'].'" OR sub_folio.account_code="'.GlobalVariableController::globalAccount('ACCOUNT_TRANSFER_CHARGE').'", IF('.$mainTableName.'.type_code="'.GlobalVariableController::$transactionType['Debit'].'", ('.$mainTableName.'.quantity * '.$mainTableName.'.amount), -('.$mainTableName.'.quantity * '.$mainTableName.'.amount)), 0)) AS Debit'),
                DB::raw('SUM(IF(cfg_init_account_sub_group.group_code="'.GlobalVariableController::$accountGroup['Payment'].'" OR (cfg_init_account_sub_group.group_code="'.GlobalVariableController::$accountGroup['Transfer'].'" AND sub_folio.account_code<>"' .GlobalVariableController::globalAccount('ACCOUNT_TRANSFER_CHARGE').'"), IF('.$mainTableName.'.type_code="'.GlobalVariableController::$transactionType['Credit'].'", ('.$mainTableName.'.quantity * '.$mainTableName.'.amount), -('.$mainTableName.'.quantity * '.$mainTableName.'.amount)), 0)) AS Credit'))
            ->leftJoin('cfg_init_account', $mainTableName.'.account_code', 'cfg_init_account.code')
            ->leftJoin('cfg_init_account_sub_group', 'cfg_init_account.sub_group_code', 'cfg_init_account_sub_group.code')
            ->where($mainTableName.'.folio_number', $folioNumber)
            ->where($mainTableName.'.void', '0')
            ->groupBy($mainTableName.'.folio_number')
            ->first();

        if($queryDB){
            $totalDebit = HelperController::ifNullInt($queryDB->Debit);
            $totalCredit = HelperController::ifNullInt($queryDB->Credit);
            $result = $totalDebit - $totalCredit;
        }

        return FormatController::round3($result);
    }

    public static function getFolioBalance2($folioNumber){
        $mainTableName = 'sub_folio';
        $result=[
            'balance' => 0,
            'debit' => 0,
            'credit' => 0
        ];
        $total = SubFolio::select(
            DB::raw('ROUND(SUM(IF(cfg_init_account_sub_group.group_code="'.GlobalVariableController::$accountGroup['Payment'].'" OR (cfg_init_account_sub_group.group_code="'.GlobalVariableController::$accountGroup['Transfer'].'" AND sub_folio.account_code<>"' .GlobalVariableController::globalAccount('ACCOUNT_TRANSFER_CHARGE').'"), IF('.$mainTableName.'.type_code="'.GlobalVariableController::$transactionType['Credit'].'", ('.$mainTableName.'.quantity * '.$mainTableName.'.amount), -('.$mainTableName.'.quantity * '.$mainTableName.'.amount)), 0)),3) AS credit'),
            DB::raw('ROUND(SUM(IF(cfg_init_account_sub_group.group_code="'.GlobalVariableController::$accountGroup['Charge'].'" OR cfg_init_account_sub_group.group_code="'.GlobalVariableController::$accountGroup['TaxAndService'].'" OR sub_folio.account_code="'.GlobalVariableController::globalAccount('ACCOUNT_TRANSFER_CHARGE').'", IF('.$mainTableName.'.type_code="'.GlobalVariableController::$transactionType['Debit'].'", ('.$mainTableName.'.quantity * '.$mainTableName.'.amount), -('.$mainTableName.'.quantity * '.$mainTableName.'.amount)), 0)),3) AS debit'))
        ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
        ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
        ->where('sub_folio.folio_number',$folioNumber)
        ->where('sub_folio.void','0')
        ->groupBy($mainTableName.'.folio_number')
        ->first();


        if($total){
            $result = $total;
            $totalDebit=HelperController::ifNullInt($total->debit);
            $totalCredit=HelperController::ifNullInt($total->credit);
            $result['balance'] = FormatController::round3($totalDebit - $totalCredit);
            $result['debit'] = $totalDebit;
            $result['credit'] =$totalCredit;
        }

        return $result;
    }

    public static function getGuestDepositBalance($reservationNumber){
        $mainTableName = 'guest_deposit';
        $payment = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $paymentC = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $charge = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $chargeC = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $total = GuestDeposit::select(
            DB::raw('ROUND(('.$payment.'-'.$paymentC.'),3) AS credit'),
            DB::raw('ROUND(('.$charge.'-'.$chargeC.'),3) AS debit'),
            DB::raw('ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount_foreign ELSE "0" END),3) AS credit_foreign'),
            DB::raw('ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount_foreign ELSE "0" END),3) AS debit_foreign'),
            DB::raw('ROUND((('.$charge.'-'.$chargeC.') - ('.$payment.'-'.$paymentC.')),3) AS balance'))
        ->leftJoin('cfg_init_account',''.$mainTableName.'.account_code','cfg_init_account.code')
        ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
        ->where($mainTableName.'.reservation_number',$reservationNumber)
        ->where($mainTableName.'.void','0')
        ->first();

        return $total;
    }

    /*
        Move Room
    */
    public static function updateFolioMoveRoom($roomNumber, $roomTypeCode, $bedTypeCode, $roomRateCode, $weekdayRate, $weekendRate, $guestDetailId, $userId){
        self::updateProcedure('folio_move_room(?,?,?,?,?,?,?,?)', [$roomNumber, $roomTypeCode, $bedTypeCode, $roomRateCode, $weekdayRate, $weekendRate, $guestDetailId, $userId]);
    }

    public static function deleteGuestBreakdownByFolio($folioNumber, $userID){
        self::deleteProcedure('guest_breakdown_by_folio(?,?)', [$folioNumber, $userID]);
    }

    /*
        Waitlist
    */

    public static function getReservationWaitlistDetail($reservationNumber){
        $queryDB = Reservation::select('guest_detail_id','guest_detail.room_type_code','guest_detail.bed_type_code','guest_detail.arrival', 'guest_detail.departure','number')
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->where('number', $reservationNumber)
            ->where('status_code', GlobalVariableController::$reservationStatus['WaitList'])
            ->first();

        return $queryDB;
    }

    /*
        Report Template Editor
    */
    public static function deleteTemplateGroupField($templateId){
        self::deleteProcedure('report_group_field(?)', [$templateId]);
    }

    public static function insertTemplateGroupField($templateId, $fieldName, $idSort){
        self::insertProcedure('report_group_field(?,?,?)', [$templateId, $fieldName, $idSort]);
    }

    public static function deleteTemplateOrderField($templateId){
        self::deleteProcedure('report_order_field(?)', [$templateId]);
    }

    public static function insertTemplateOrderField($templateId, $fieldName, $isAscending, $idSort){
        self::insertProcedure('report_order_field(?,?,?,?)', [$templateId, $fieldName, $isAscending, $idSort]);
    }

    public static function deleteTemplateGroupingField($templateId){
        self::deleteProcedure('report_grouping_field(?)', [$templateId]);
    }

    public static function insertTemplateGroupingField($templateId, $fieldName, $idSort){
        self::insertProcedure('report_grouping_field(?,?,?)', [$templateId, $fieldName, $idSort]);
    }

    public static function deleteTemplateDefaultField($templateId){
        self::deleteProcedure('report_template_field(?)', [$templateId]);
    }

    public static function insertTemplateDefaultField($templateID, $fieldName, $headerName, $footerType, $formatCode, $width, $font, $fontSize, $fontColor,
        $alignment, $headerFontSize, $headerFontColor, $headerAlignment, $idSort){

        self::insertProcedure('report_template_field(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
            $templateID, $fieldName, $headerName, $footerType, $formatCode, $width, $font, $fontSize, $fontColor,
            $alignment, $headerFontSize, $headerFontColor, $headerAlignment, $idSort
        ]);
    }

    public static function insertTemplateReport($reportCode, $name, $groupLevel, $headerRemark, $showFooter, $paperSize, $paperWidth, $paperHeight, $isPortrait, $headerRowHeight,
        $rowHeight, $horizontalBorder, $verticalBorder, $signName1, $signPosition1, $signName2, $signPosition2, $signName3, $signPosition3, $signName4, $signPosition4, $userId){
        self::insertProcedure('report_template(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
            $reportCode, $name, $groupLevel, HelperController::ifNull($headerRemark), $showFooter, $paperSize, $paperWidth, $paperHeight, $isPortrait, $headerRowHeight,
            $rowHeight, $horizontalBorder, $verticalBorder, HelperController::ifNull($signName1), HelperController::ifNull($signPosition1), HelperController::ifNull($signName2),
            HelperController::ifNull($signPosition2), HelperController::ifNull($signName3), HelperController::ifNull($signPosition3), HelperController::ifNull($signName4),
            HelperController::ifNull($signPosition4), $userId
        ]);
        return self::getIDLogTable('report_template', $userId);
    }

    public static function updateTemplateReport($idLog, $name, $groupLevel, $headerRemark, $showFooter, $paperSize, $paperWidth, $paperHeight, $isPortrait, $headerRowHeight,
        $rowHeight, $horizontalBorder, $verticalBorder, $signName1, $signPosition1, $signName2, $signPosition2, $signName3, $signPosition3, $signName4, $signPosition4, $userId){
        self::updateProcedure('report_template(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
            $idLog, $name, $groupLevel, HelperController::ifNull($headerRemark), $showFooter, $paperSize, $paperWidth, $paperHeight, $isPortrait, $headerRowHeight,
            $rowHeight, $horizontalBorder, $verticalBorder, HelperController::ifNull($signName1), HelperController::ifNull($signPosition1), HelperController::ifNull($signName2),
            HelperController::ifNull($signPosition2), HelperController::ifNull($signName3), HelperController::ifNull($signPosition3), HelperController::ifNull($signName4),
            HelperController::ifNull($signPosition4), $userId
        ]);
    }

    public static function deleteTemplateReport($templateId, $userId){
        self::deleteProcedure('report_template(?,?)', [$templateId, $userId]);
    }

    public static function setAsDefaultTemplateReport($reportCode, $templateId, $userId){
        self::updateProcedure('report_template_default(?,?,?)', [$reportCode, $templateId, $userId]);
    }

    public static function setAsSystemDefaultTemplateReport($reportCode, $isSystemDefault, $templateId, $userId){
        self::updateProcedure('report_template_system_default(?,?,?,?)', [$reportCode, $isSystemDefault, $templateId, $userId]);
    }

    public static function updateVoucherStatus($voucherNumber, $statusCode, $userID){
        self::updateProcedure('voucher_status(?,?,?)',[
            $voucherNumber, $statusCode, $userID
        ]);
    }

    public static function getVoucherType($voucherNumber){
        $result = '';
        $query = DB::table('voucher')->select('type_code')->where('number',$voucherNumber)->first();

        if($query){
            $result = $query->type_code;
        }

        return $result;
    }

    public static function getVoucherNights($voucherNumber){
        $result = 0;
        $query = DB::table('voucher')->select('nights')->where('number',$voucherNumber)->first();

        if($query){
            $result = $query->nights;
        }

        return $result;
    }

    public static function getServerID(){
        $query = DB::select('SHOW VARIABLES LIKE "sserver_id"');
        if($query){
            if($query[0]->Value == 0){
                $result = 1;
            } else {
                $result = $query[0]->Value;
            }
        } else {
            $result = 1;
        }

        return $result;
    }

    public static function getUnitCode(){
        $result = '';
        $query = DB::table('hotel_information')->select('code')->first();

        if($query){
            $result = $query->code;
        }

        return $result;
    }

    public static function getJournalRefNumber($prefix, $postingDate){
        $prefix = $prefix . date_format(date_create($postingDate), 'y' . self::getServerID());

        $query = DB::table('acc_journal')
            ->selectRaw('CAST(RIGHT(ref_number,LENGTH(ref_number)-' .strlen($prefix). ') AS UNSIGNED) AS MaxRefNumber')
            ->whereRaw('LEFT(ref_number,' .strlen($prefix). ')="' .$prefix. '"')
            ->orderBy('MaxRefNumber','DESC')
            ->first();

        if(empty($query)){
            $result = $prefix . 1;
        } else {
            $result = $prefix . (intval($query->MaxRefNumber) + 1);
        }

        return $result;
    }

    public static function getJournalIDSort($postingDate){
        $result = 1;
        $query = DB::table('acc_journal')->select('id_sort')->whereDate('date', $postingDate)->orderBy('id_sort','DESC')->first();

        if(!empty($query)){
            $result = $query->id_sort;
        }

        return $result;
    }

    public static function isVoucherComplimentStillActive($voucherNumber, $arrivalDate, $auditDate){
        $result = FormatController::incDay(FormatController::formatDate($arrivalDate), self::getVoucherNights($voucherNumber) > FormatController::formatDate($auditDate));
        return $result;
    }

    public static function postGuestInHouse($postingDate, $userId){
        $xFolio= Folio::select(
            'folio.number',
            'folio.member_code',
            'folio.group_code',
            'folio.marketing_code',
            'folio.voucher_number',
            'folio.notes',
            'folio.compliment_hu',
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
            'guest_detail.arrival',
            'guest_detail.departure',
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
            'guest_detail.booking_source_code',
            'guest_detail.commission_type_code',
            'guest_detail.commission_value',
            'guest_detail.payment_type_code',
            'guest_detail.market_code')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->whereDate('guest_detail.arrival','<>','guest_detail.departure')
            ->whereDate('guest_detail.arrival','<=',FormatController::formatDate($postingDate))
            ->whereDate('guest_detail.departure','>',FormatController::formatDate($postingDate))
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->where('folio.status_code','!=',GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->orWhereRaw('DATE(guest_detail.arrival)=DATE(guest_detail.departure)')
            ->whereDate('guest_detail.arrival','>=',FormatController::formatDate($postingDate))
            ->whereDate('guest_detail.departure','<=',FormatController::formatDate($postingDate))
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->where('folio.status_code','!=',GlobalVariableController::$folioStatus['CancelCheckIn'])
            ->get();

        HelperController::deleteGuestInHouseOver($postingDate, $userId);
        if(!empty($xFolio)){
            foreach($xFolio as $inHouse){
                if(!empty($inHouse)){
                    $isAdditional= FormatController::formatDate($inHouse->arrival) == FormatController::formatDate($inHouse->departure);
                    $isScheduledRate= False;
                    $isBreakfast= HelperController::isHaveBreakfast($inHouse->number);

                //     if IsVoucherComplimentStillActive($inHouse->voucher_number, DateOf($inHouse->arrival.AsDateTime), PostingDate) and (GetVoucherType($inHouse->voucher_number) = VoucherType.Compliment) then
                //     ComplimentHU = RoomStatus.Compliment
                //   else
                        $isScheduledRate= HelperController::isScheduledRate($inHouse->number, $postingDate);
                        $complimentHu= $inHouse->compliment_hu;
                        if($isScheduledRate){
                            $complimentHu= HelperController::getScheduledRateComplimentHu($inHouse->number, $postingDate);
                        }
                    if($isScheduledRate){
                        $roomRateCode= HelperController::getScheduledRoomRateCode($inHouse->number, $postingDate);
                        $rate= HelperController::getScheduledRoomRate($inHouse->number, $postingDate);
                        $rateOri= HelperController::getRoomRate($roomRateCode, $postingDate, $inHouse->adult, $inHouse->child, false);
                    } else {
                        $roomRateCode= $inHouse->room_rate_code;
                        $rate= HelperController::getRoomRate($roomRateCode, $postingDate, $inHouse->adult, $inHouse->child, false);
                        $rateOri= $rate;
                    }

                    if(HelperController::isInHousePosted($postingDate, $inHouse->number)){
                        if(!empty($complimentHu) && HelperController::isAlreadyAutoPosting($inHouse->number, GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),'',$postingDate)){
                            ProcedureQueryController::updateGuestInHouse($postingDate, $inHouse->number, $inHouse->group_code, $inHouse->room_type_code, $inHouse->bed_type_code, $inHouse->room_number, $roomRateCode, $inHouse->business_source_code, $inHouse->commission_type_code, $inHouse->payment_type_code, $inHouse->market_code, $inHouse->booking_source_code,
                                $inHouse->title_code, $inHouse->full_name, $inHouse->street, $inHouse->city_code, $inHouse->city, $inHouse->nationality_code, $inHouse->country_code, $inHouse->state_code, $inHouse->postal_code, $inHouse->phone1, $inHouse->phone2, $inHouse->fax, $inHouse->email, $inHouse->website, $inHouse->company_code, $inHouse->guest_type_code, $inHouse->marketing_code, $complimentHu, $inHouse->notes,
                                $inHouse->adult, $inHouse->child, $rateOri, $rate, $inHouse->discount, $inHouse->commission_value, HelperController::variant($inHouse->discount_percent), $isAdditional, $isScheduledRate, $isBreakfast, $userId);

                        } else {
                            ProcedureQueryController::updateGuestInHouseWithoutRate($postingDate, $inHouse->number, $inHouse->group_code, $inHouse->payment_type_code, $inHouse->market_code, $inHouse->booking_source_code,
                                $inHouse->title_code, $inHouse->full_name, $inHouse->street, $inHouse->city_code, $inHouse->city, $inHouse->nationality_code, $inHouse->country_code, $inHouse->state_code, $inHouse->postal_code,
                                $inHouse->phone1, $inHouse->phone2, $inHouse->fax, $inHouse->email, $inHouse->website, $inHouse->company_code, $inHouse->guest_type_code, $inHouse->marketing_code, $inHouse->notes, $inHouse->adult, $inHouse->child, $isAdditional, $userId);
                        }
                    } else {
                        ProcedureQueryController::insertGuestInHouse($postingDate, $inHouse->number, $inHouse->group_code, $inHouse->room_type_code, $inHouse->bed_type_code, $inHouse->room_number, $roomRateCode, $inHouse->business_source_code, $inHouse->commission_type_code, $inHouse->payment_type_code, $inHouse->market_code, $inHouse->booking_source_code,
                        $inHouse->title_code, $inHouse->full_name, $inHouse->street, $inHouse->city, $inHouse->city_code, $inHouse->nationality_code, $inHouse->country_code, $inHouse->state_code, $inHouse->postal_code, $inHouse->phone1, $inHouse->phone2, $inHouse->fax, $inHouse->email, $inHouse->website, $inHouse->company_code, $inHouse->guest_type_code, $inHouse->marketing_code, $complimentHu, $inHouse->notes,
                        $inHouse->adult, $inHouse->child, $rateOri, $rate, $inHouse->discount, $inHouse->commission_value, HelperController::variant($inHouse->discount_percent), $isAdditional, $isScheduledRate, $isBreakfast, $userId);
                    }

                    if($isScheduledRate){
                        if($complimentHu <> $inHouse->compliment_hu){
                            ProcedureQueryController::updateFolioComplimentHu($inHouse->number, $complimentHu, $userId);
                        }
                    }

                    $xGuestBreakdown= DB::table('guest_breakdown')->select('guest_breakdown.*')
                        ->where('folio_number', $inHouse->number)
                        ->get();

                    if(!empty($xGuestBreakdown)){
                        foreach($xGuestBreakdown as $guestBreakdown){
                            if(!empty($guestBreakdown)){
                                ProcedureQueryController::insertGuestInHouseBreakdown($postingDate, $guestBreakdown->folio_number, $guestBreakdown->outlet_code, $guestBreakdown->product_code, $guestBreakdown->sub_department_code, $guestBreakdown->account_code, $guestBreakdown->remark, $guestBreakdown->tax_and_service_code, $guestBreakdown->charge_frequency_code, $guestBreakdown->quantity, $guestBreakdown->amount, $guestBreakdown->extra_pax, $guestBreakdown->max_pax, HelperController::variant($guestBreakdown->per_pax), HelperController::variant($guestBreakdown->include_child), HelperController::variant($guestBreakdown->per_pax_extra),$userId);
                            }
                        }
                    }

                    // TODO ADD PROCESS MEMBER POINT
                }
            }
        }

        return 1;
    }

    public static function postRoomUnavailableHistory($postingDate, $userId){
        $xQuery = RoomUnavailable ::select(
            'room_number',
            'status_code',
            'reason_code',
            'note',
            'user_id')
            ->whereDate('from_date','<=',FormatController::formatDate($postingDate))
            ->whereDate('to_date','>=',FormatController::formatDate($postingDate))
            ->get();

        if(!empty($xQuery)){
            foreach($xQuery as $query){
                if(!empty($query)){
                    ProcedureQueryController::insertRoomUnavailableHistory($postingDate, $query->room_number, $query->status_code, $query->reason_code, $query->note, $userId);
                }
            }
        }

        return 2;
    }

    public static function postRoomStatistic($postingDate){
        $postingDate= FormatController::formatDate($postingDate);
        $postingDateTomorrow= FormatController::incDay($postingDate,1);
        $globalSubDepartmentBanquet= ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDBanquet']);
        $totalRoom=0;

        $totalRoom= Room::select('number')->count();
        $xRoomUnavailable= DB::table('room_unavailable')->select(
            'status_code',
            DB::raw('COUNT(room_unavailable.room_number) AS room_count'))
            ->whereDate('from_date','<=',$postingDate)
            ->whereDate('to_date','>=',$postingDate)
            ->groupBy('status_code')
            ->get();

        //UNAVAILABLE
        $underConstruction= 0;
        $outOfOrder = 0;
        $officeUse= 0;
        $result = [];
        if(!empty($xRoomUnavailable)){
            foreach($xRoomUnavailable as $roomUnavailable){
                if($roomUnavailable->status_code == GlobalVariableController::$roomStatus['UnderConstruction']){
                    $underConstruction += $roomUnavailable->room_count;
                } else if($roomUnavailable->status_code == GlobalVariableController::$roomStatus['OutOfOrder']){
                    $outOfOrder += $roomUnavailable->room_count;
                } else if($roomUnavailable->status_code == GlobalVariableController::$roomStatus['OfficeUse']){
                    $officeUse += $roomUnavailable->room_count;
                }
            }
        }
        $xGuestInHouse = DB::table('guest_in_house')->select(
            DB::raw('IF(IFNULL(compliment_hu,"")="" AND is_additional="-1", "D", IFNULL(compliment_hu,"")) AS status_code'),
            DB::raw('COUNT(folio_number) AS room_count'),
            DB::raw('SUM(adult) AS TotalAdult'),
            DB::raw('SUM(child) AS TotalChild'), //3
            DB::raw('SUM(IF(IFNULL(compliment_hu,"")="' .GlobalVariableController::$roomStatus['HouseUse']. '", adult, 0)) AS TotalAdultHU'),
            DB::raw('SUM(IF(IFNULL(compliment_hu,"")="' .GlobalVariableController::$roomStatus['HouseUse']. '", child, 0)) AS TotalChildHU'),
            DB::raw('SUM(IF(IFNULL(compliment_hu,"") = "", adult, 0)) AS TotalAdultSold'), //6
            DB::raw('SUM(IF(IFNULL(compliment_hu,"") = "", child, 0)) AS TotalChildSold'),
            DB::raw('SUM(IF(is_additional ="-1" AND IFNULL(compliment_hu,"")="", adult, 0)) AS TotalAdultDayUse'), //8
            DB::raw('SUM(IF(is_additional ="-1" AND IFNULL(compliment_hu,"")="", child, 0)) AS TotalChildDayUse'),
            DB::raw('SUM(IF(IFNULL(compliment_hu,"")="' .GlobalVariableController::$roomStatus['Compliment']. '", adult, 0)) AS TotalAdultCompliment'), //10
            DB::raw('SUM(IF(IFNULL(compliment_hu,"")="' .GlobalVariableController::$roomStatus['Compliment']. '", child, 0)) AS TotalChildCompliment')
        )
            ->whereRaw('guest_in_house.audit_date_unixx=UNIX_TIMESTAMP("'.$postingDate.'")')
            ->groupBy('status_code')
            ->get();

        //INHOUSE
        $houseUse = 0;
        $compliment = 0;
        $roomSold = 0;
        $dayUse = 0;
        $adult = 0;
        $child = 0;
        $adultSold = 0;
        $childSold = 0;
        $adultDayUse = 0;
        $childDayUse = 0;
        $adultCompliment = 0;
        $childCompliment = 0;
        $adultHU = 0;
        $childHU = 0;

        if(!empty($xGuestInHouse)){
            foreach($xGuestInHouse as $inHouse){
                if(!empty($inHouse)) {
                    if($inHouse->status_code == GlobalVariableController::$roomStatus['HouseUse']){
                        $houseUse += $inHouse->room_count;
                        $adultHU += $inHouse->TotalAdultHU;
                        $childHU += $inHouse->TotalChildHU;
                    } else if($inHouse->status_code == GlobalVariableController::$roomStatus['Compliment']) {
                        $compliment += $inHouse->room_count;
                        $adultCompliment += $inHouse->TotalAdultCompliment;
                        $childCompliment += $inHouse->TotalChildCompliment;
                    } else if($inHouse->status_code == 'D') {
                        $dayUse += $inHouse->room_count;
                        $adultDayUse += $inHouse->TotalAdultDayUse;
                        $childDayUse += $inHouse->TotalChildDayUse;
                    } else if($inHouse->status_code == '') {
                        $roomSold += $inHouse->room_count;
                        $adultSold += $inHouse->TotalAdultSold;
                        $childSold += $inHouse->TotalChildSold;
                    } else if($inHouse->status_code <> GlobalVariableController::$roomStatus['HouseUse']) {
                        $adult += $inHouse->TotalAdult;
                        $child += $inHouse->TotalChild;
                    }
                }
            }
        }

        //GROSS REVENUE
            $isCalculateAllRoomRevenueSubGroup= HelperController::trueFalseString(ConfigurationController::value(null, GlobalVariableController::$configurationCategory['Other'], GlobalVariableController::$configurationName['CalculateAllRoomRevenueSubGroup'] ));
            $globalAccountRoomCharge = ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalAccount'], GlobalVariableController::$configurationName['AccountRoomCharge'] );

            if( $isCalculateAllRoomRevenueSubGroup ) {
                $queryConditionRoomCharge1 = 'cfg_init_account.sub_group_code="'.GlobalVariableController::$accountSubGroup['RoomCharge'].'"';
                $queryConditionRoomCharge2 = 'cfg_init_account.sub_group_code="' .GlobalVariableController::$accountSubGroup['RoomCharge'].'"';
            } else {
                $queryConditionRoomCharge1 = 'sub_folio.account_code="'. $globalAccountRoomCharge.'"';
                $queryConditionRoomCharge2 = 'SubFolio.account_code="' . $globalAccountRoomCharge.'"';
            }

            $subFolio1= SubFolio::select(
                'account_code',
                DB::raw('SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN (sub_folio.amount * sub_folio.quantity) ELSE -(sub_folio.amount * sub_folio.quantity) END) AS total'))
                ->whereRaw('sub_folio.audit_date_unixx=UNIX_TIMESTAMP("'.$postingDate.'")')
                ->where('void','0')
                ->groupBy('breakdown1')
                ->orderBy('sub_folio.id_log');

            $queryRevenueGross= DB::table('cfg_init_account')->selectRaw('SUM(SubFolio.total) as Total')
                ->leftJoinSub($subFolio1, 'SubFolio', function($join){
                    $join->on('SubFolio.account_code','=','cfg_init_account.code');
                })
                ->whereRaw($queryConditionRoomCharge2)
                ->first();

            $revenueGross= 0;
            if(!empty($queryRevenueGross)) {
                $revenueGross = $queryRevenueGross->Total;
            }

        //REVENUE INC COMPLIMENT
            $subFolio2= SubFolio::select(
                'account_code',
                DB::raw('SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN (sub_folio.amount * sub_folio.quantity) ELSE -(sub_folio.amount * sub_folio.quantity) END) AS total'))
                ->leftJoin('cfg_init_account', 'sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx=UNIX_TIMESTAMP("'.$postingDate.'")')
                ->where('void','0')
                ->where('sub_folio.account_code','<>', GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']))
                ->where('sub_folio.account_code','<>', GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']))
                ->where('cfg_init_account.sub_group_code','<>', GlobalVariableController::$accountSubGroup['AccountPayable'])
                ->groupBy('breakdown1')
                ->orderBy('sub_folio.id_log');

            $queryRevenueIncCompliment=  DB::table('cfg_init_account')
                ->selectRaw('SUM(SubFolio.total) as Total')
                ->leftJoinSub($subFolio2, 'SubFolio', function($join){
                    $join->on('SubFolio.account_code','=','cfg_init_account.code');
                })
                ->whereRaw($queryConditionRoomCharge2)
                ->first();

            $revenueIncCompliment= 0;
            if(!empty($queryRevenueIncCompliment)) {
                $revenueIncCompliment = $queryRevenueIncCompliment->Total;
            }

        //REVENUE EXCLUDE PACKAGE && INCLUCE TAX SERVICE
            $subFolio3= SubFolio::select(
                'account_code',
                DB::raw('SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN (sub_folio.amount * sub_folio.quantity) ELSE -(sub_folio.amount * sub_folio.quantity) END) AS total'))
                ->leftJoin('cfg_init_account', 'sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx=UNIX_TIMESTAMP("'.$postingDate.'")')
                ->whereRaw($queryConditionRoomCharge1.' OR sub_folio.account_code="'.GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']).'" OR sub_folio.account_code="'.GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']).'"')
                ->where('void','0')
                ->groupBy('sub_folio.breakdown1')
                ->groupBy('sub_folio.breakdown2')
                ->orderBy('sub_folio.id_log');

            $queryRevenueExPackage=  DB::table('cfg_init_account')->selectRaw('SUM(SubFolio.total) as Total')
                ->leftJoinSub($subFolio3, 'SubFolio', function($join){
                    $join->on('SubFolio.account_code','=','cfg_init_account.code');
                })
                ->whereRaw($queryConditionRoomCharge2)
                ->first();

            $revenueExPackage= 0;
            if(!empty($queryRevenueExPackage)) {
                $revenueExPackage = $queryRevenueExPackage->Total;
            }

        //NETT REVENUE
            $subFolio4= SubFolio::select(
                'account_code',
                DB::raw('SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN (sub_folio.amount * sub_folio.quantity) ELSE -(sub_folio.amount * sub_folio.quantity) END) AS total'))
                ->leftJoin('cfg_init_account', 'sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx=UNIX_TIMESTAMP("'.$postingDate.'")')
                ->whereRaw($queryConditionRoomCharge1)
                ->where('sub_folio.void','0')
                ->groupBy('sub_folio.breakdown1')
                ->orderBy('sub_folio.id_log');

            $queryRevenueNett=  DB::table('cfg_init_account')
                ->selectRaw('SUM(SubFolio.total) as Total')
                ->leftJoinSub($subFolio4, 'SubFolio', function($join){
                    $join->on('SubFolio.account_code','=','cfg_init_account.code');
                })
                ->whereRaw($queryConditionRoomCharge2)
                ->first();

            $revenueNett= 0;
            if(!empty($queryRevenueNett)) {
                $revenueNett = $queryRevenueNett->Total;
            }

        //GUEST STATISTIC
            $queryGuestStatistic= Folio::select(
                DB::raw('COUNT(IF(DATE(guest_detail.arrival)="'.$postingDate.'" AND folio.reservation_number = 0, folio.number, NULL)) AS TotalWalkIn'),
                DB::raw('COUNT(IF(DATE(guest_detail.arrival)="'.$postingDate.'" AND folio.reservation_number > 0, folio.number, NULL)) AS TotalCheckIn'),
                DB::raw('COUNT(IF(DATE(guest_detail.departure)="'.$postingDate.'", folio.number, NULL)) AS TotalCheckOut'),
                DB::raw('COUNT(IF(DATE(guest_detail.departure)="'.$postingDate.'" AND DATE(guest_detail.departure) < DATE(guest_detail.departure_res), folio.number, NULL)) AS EarlyCheckOut'))
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->whereRaw('(guest_detail.arrival_unixx=UNIX_TIMESTAMP("' .$postingDate. '")
                    OR guest_detail.departure_unixx=UNIX_TIMESTAMP("' .$postingDate. '"))
                    AND folio.type_code="' .GlobalVariableController::$folioType['GuestFolio']. '"
                    AND folio.status_code<>"' .GlobalVariableController::$folioStatus['CancelCheckIn']. '"')
                ->first();

            $walkIn= 0;
            $checkIn= 0;
            $checkOut= 0;
            $earlyCheckOut= 0;
            if(!empty($queryGuestStatistic)) {
                $walkIn= $queryGuestStatistic->TotalWalkIn;
                $checkIn= $queryGuestStatistic->TotalCheckIn;
                $checkOut= $queryGuestStatistic->TotalCheckOut;
                $earlyCheckOut= $queryGuestStatistic->EarlyCheckOut;
            }

        // TOMORROW EXPECTED DEPARTURE
            $queryExpectedDeparture = Folio::selectRaw('COUNT(IF(DATE(guest_detail.departure)="'.$postingDateTomorrow.'",folio.number,NULL)) AS TotalCOTomorrow')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->whereRaw('guest_detail.departure_unixx=UNIX_TIMESTAMP("'.$postingDateTomorrow.'")')
                ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
                ->where('folio.status_code','<>',GlobalVariableController::$folioStatus['CancelCheckIn'])
                ->first();

            $tomorrowExpectedDeparture= 0;
            if(!empty($queryExpectedDeparture)) {
                $tomorrowExpectedDeparture= $queryExpectedDeparture->TotalCOTomorrow;
            }

        // TOMORROW EXPECTED ARRIVAL
            $queryExpectedArrival = Reservation::select(
                DB::raw('SUM(IF(DATE(guest_detail.arrival) = "' .$postingDateTomorrow. '", 1, 0)) AS TotalCITomorrow'),
                DB::raw('COUNT(IF(reservation.status_code="' .GlobalVariableController::$reservationStatus['New']. '" AND DATE(guest_detail.departure) = "' .$postingDateTomorrow. '", number, NULL)) AS TotalCOTomorrow'))
                ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                ->whereRaw('(guest_detail.arrival_unixx=UNIX_TIMESTAMP("' .$postingDateTomorrow. '")
                    OR guest_detail.departure_unixx=UNIX_TIMESTAMP("' .$postingDateTomorrow. '"))
                    AND reservation.status_code<>"' .GlobalVariableController::$reservationStatus['Canceled']. '"
                    AND reservation.status_code<>"' .GlobalVariableController::$reservationStatus['Void']. '"
                    AND reservation.status_code<>"' .GlobalVariableController::$reservationStatus['NoShow']. '"')
                ->first();

            $tomorrowExpectedArrival= 0;
            if(!empty($queryExpectedArrival)) {
                $tomorrowExpectedArrival= $queryExpectedArrival->TotalCITomorrow;
                $tomorrowExpectedDeparture+= $queryExpectedArrival->TotalCOTomorrow;
            }

        // RESERVATION STATISTIC
            $queryReservationStatistic = Reservation::select(
                DB::raw('COUNT(IF(audit_date="' .$postingDate. '" AND status_code<>"' .GlobalVariableController::$reservationStatus['Void']. '", number, NULL)) AS TotalReservation'),
                DB::raw('COUNT(IF(cancel_audit_date="' .$postingDate. '" AND status_code="' .GlobalVariableController::$reservationStatus['Canceled']. '", number, NULL)) AS TotalCancelReservation'),
                DB::raw('COUNT(IF(cancel_audit_date="' .$postingDate. '" AND status_code="' .GlobalVariableController::$reservationStatus['NoShow']. '", number, NULL)) AS TotalNoShowReservation'))
                ->whereRaw('(audit_date="' .$postingDate. '" OR cancel_audit_date="' .$postingDate. '")')
                ->where('status_code', '<>', GlobalVariableController::$reservationStatus['Void'])
                ->first();

            $reservation= 0;
            $cancelReservation= 0;
            $noShowReservation= 0;
            if(!empty($queryReservationStatistic)) {
                $reservation= $queryReservationStatistic->TotalReservation;
                $cancelReservation= $queryReservationStatistic->TotalCancelReservation;
                $noShowReservation= $queryReservationStatistic->TotalNoShowReservation;
            }

        // COVER BREAKFAST
            $queryCoverBreakfast = DB::table('guest_in_house')->select(
                DB::raw('SUM(guest_in_house.adult + guest_in_house.child) AS Pax'))
                ->whereRaw('guest_in_house.audit_date_unixx=UNIX_TIMESTAMP("'.$postingDate.'")')
                ->where('guest_in_house.is_breakfast','-1')
                ->first();

            $breakfastCover= 0;
            if(!empty($queryCoverBreakfast)) {
                $breakfastCover= $queryCoverBreakfast->Pax;
            }

        // COVER FB & COVER BQ => CPOS
            $queryPostCheckTransaction1 = DB::table('pos_check_transaction')->select(
                DB::raw('IF(pos_check.sub_department_code <> "' .$globalSubDepartmentBanquet. '"  AND cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Food']. '", guest_detail.adult + guest_detail.child, 0) AS CoverFood'),
                DB::raw('IF(pos_check.sub_department_code <> "' .$globalSubDepartmentBanquet. '"  AND cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Beverage']. '", guest_detail.adult + guest_detail.child, 0) AS CoverBeverage'),
                DB::raw('IF(pos_check.sub_department_code = "' .$globalSubDepartmentBanquet. '", guest_detail.adult + guest_detail.child, 0) AS CoverBanquetCPOS'),
                'pos_check_transaction.check_number')
                ->leftJoin('pos_check','pos_check_transaction.check_number','pos_check.number')
                ->leftJoin('sub_folio','pos_check_transaction.sub_folio_id','sub_folio.id_log')
                ->leftJoin('cfg_init_sub_department','sub_folio.sub_department_code','cfg_init_sub_department.code')
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->leftJoin('folio','pos_check.folio_number','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->whereRaw('sub_folio.audit_date_unixx=UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->where('cfg_init_sub_department.department_code',ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalDepartment'], GlobalVariableController::$configurationName['DFoodBeverage']))
                ->groupBy('pos_check_transaction.check_number','cfg_init_account.item_group_code');

            $queryPostCheckTransaction2 = DB::table($queryPostCheckTransaction1,'CoverFB')
                ->select(
                    DB::raw('SUM(CoverFB.CoverFood) AS CoverFood'),
                    DB::raw('IF(SUM(CoverFB.CoverFood) > 0, 0, SUM(CoverFB.CoverBeverage)) AS CoverBeverage'),
                    DB::raw('SUM(CoverFB.CoverBanquetCPOS) AS CoverBanquetCPOS'),
                    'CoverFB.check_number')
                ->groupBy('CoverFB.check_number');

            $queryPostCheckTransaction3 = DB::table($queryPostCheckTransaction2, 'CoverFB2')
                ->select(
                    DB::raw('SUM(CoverFB2.CoverFood) AS CoverFood'),
                    DB::raw('SUM(CoverFB2.CoverBeverage) AS CoverBeverage'),
                    DB::raw('SUM(CoverFB2.CoverBanquetCPOS) AS CoverBanquet'))
                ->first();

            $foodCover= 0;
            $beverageCover= 0;
            $banquetCover= 0;
            $weddingCover= 0;
            $gatheringCover= 0;
            if(!empty($queryPostCheckTransaction1->first())) {
                $foodCover= $queryPostCheckTransaction3->CoverFood;
                $beverageCover= $queryPostCheckTransaction3->CoverBeverage;
                $banquetCover= $queryPostCheckTransaction3->CoverBanquet;
            }

        //  COVER BQ => DESK FOLIO
            $globalAccountBreakfast = ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalAccount'], GlobalVariableController::$configurationName['AccountBreakfast']);
            $queryCoverBanquet = DB::table('sub_folio')
                ->select(
                    DB::raw('IF(sub_folio.sub_department_code = "' .$globalSubDepartmentBanquet. '", guest_detail.adult + guest_detail.child, 0) AS CoverBanquet'),
                    DB::raw('IF(sub_folio.sub_department_code = "WED", guest_detail.adult + guest_detail.child, 0) AS CoverWedding'),
                    DB::raw('IF(sub_folio.sub_department_code = "GAT", guest_detail.adult + guest_detail.child, 0) AS CoverGathering'))
                ->leftJoin('folio','sub_folio.belongs_to','folio.number')
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->where('sub_folio.void','0')
                ->whereRaw('sub_folio.audit_date_unixx=UNIX_TIMESTAMP("' .$postingDate. '")
                    AND sub_folio.account_code <> "' .$globalAccountBreakfast. '" AND (cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Food']. '" OR cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Beverage']. '")
                    AND (sub_folio.system_code = "' .GlobalVariableController::$system['CakrasoftHotelSystem']. '" OR sub_folio.system_code = "' .GlobalVariableController::$system['CakrasoftBanquetManagementSystem']. '")')
                ->groupBy('sub_folio.belongs_to');

            $queryCoverBanquet2 = DB::table($queryCoverBanquet, 'Cover')
                ->select(
                    DB::raw('SUM(Cover.CoverBanquet) AS CoverBanquet'),
                    DB::raw('SUM(Cover.CoverWedding) AS CoverWedding'),
                    DB::raw('SUM(Cover.CoverGathering) AS CoverGathering'))
                ->first();

            if(!empty($queryCoverBanquet->first())) {
                $banquetCover += $queryCoverBanquet2->CoverBanquet;
                $weddingCover = $queryCoverBanquet2->CoverWedding;
                $gatheringCover = $queryCoverBanquet2->CoverGathering;
            }

        // COVER REVENUE

            $queryCoverRevenue = DB::table('sub_folio')
                ->select(
                    DB::raw('SUM(IF(sub_folio.account_code = "' .$globalAccountBreakfast. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", (sub_folio.amount * sub_folio.quantity), -(sub_folio.amount * sub_folio.quantity)), 0)) AS RevenueBreakfast'),
                    DB::raw('SUM(IF(sub_folio.account_code <> "' .$globalAccountBreakfast. '" AND sub_folio.sub_department_code <> "' .$globalSubDepartmentBanquet. '" AND sub_folio.sub_department_code <> "WED" AND sub_folio.sub_department_code <> "GAT" AND cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Food']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", (sub_folio.amount * sub_folio.quantity), -(sub_folio.amount * sub_folio.quantity)), 0)) AS RevenueFood'),
                    DB::raw('SUM(IF(sub_folio.account_code <> "' .$globalAccountBreakfast. '" AND sub_folio.sub_department_code <> "' .$globalSubDepartmentBanquet. '" AND sub_folio.sub_department_code <> "WED" AND sub_folio.sub_department_code <> "GAT" AND cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Beverage']. '", IF(sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit']. '", (sub_folio.amount * sub_folio.quantity), -(sub_folio.amount * sub_folio.quantity)), 0)) AS RevenueBeverage'),
                    DB::raw('SUM(IF(sub_folio.account_code <> "' .$globalAccountBreakfast. '" AND sub_folio.sub_department_code = "' .$globalSubDepartmentBanquet. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", (sub_folio.amount * sub_folio.quantity), -(sub_folio.amount * sub_folio.quantity)), 0)) AS RevenueBanquet'),
                    DB::raw('SUM(IF(sub_folio.account_code <> "' .$globalAccountBreakfast. '" AND sub_folio.sub_department_code = "WED", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", (sub_folio.amount * sub_folio.quantity), -(sub_folio.amount * sub_folio.quantity)), 0)) AS RevenueWedding'),
                    DB::raw('SUM(IF(sub_folio.account_code <> "' .$globalAccountBreakfast. '" AND sub_folio.sub_department_code = "GAT", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", (sub_folio.amount * sub_folio.quantity), -(sub_folio.amount * sub_folio.quantity)), 0)) AS RevenueGathering'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->where('sub_folio.void','0')
                ->whereRaw('sub_folio.audit_date_unixx=UNIX_TIMESTAMP("'.$postingDate.'")
                    AND (sub_folio.account_code = "' .$globalAccountBreakfast. '"
                    OR cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Food']. '"
                    OR cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Beverage'].'")')
                ->groupBy('sub_folio.folio_number');

            $queryCoverRevenue2 = DB::table($queryCoverRevenue, 'Cover')
                ->select(
                   DB::raw('SUM(Cover.RevenueBreakfast) AS RevenueBreakfast'),
                   DB::raw('SUM(Cover.RevenueFood) AS RevenueFood'),
                   DB::raw('SUM(Cover.RevenueBeverage) AS RevenueBeverage'),
                   DB::raw('SUM(Cover.RevenueBanquet) AS RevenueBanquet'),
                   DB::raw('SUM(Cover.RevenueWedding) AS RevenueWedding'),
                   DB::raw('SUM(Cover.RevenueGathering) AS RevenueGathering'))
                ->first();

            $revenueBreakfast = 0;
            $revenueFood = 0;
            $revenueBeverage = 0;
            $revenueBanquet = 0;
            $revenueWedding = 0;
            $revenueGathering = 0;
            if(!empty($queryCoverRevenue->first())) {
                $revenueBreakfast = $queryCoverRevenue2->RevenueBreakfast;
                $revenueFood = $queryCoverRevenue2->RevenueFood;
                $revenueBeverage = $queryCoverRevenue2->RevenueBeverage;
                $revenueBanquet = $queryCoverRevenue2->RevenueBanquet;
                $revenueWedding = $queryCoverRevenue2->RevenueWedding;
                $revenueGathering = $queryCoverRevenue2->RevenueGathering;
            }

        // GUEST LEDGER
            $queryGuestLedger = SubFolio::select(
                DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", (sub_folio.amount * sub_folio.quantity), -(sub_folio.amount * sub_folio.quantity))) AS Total '))
                ->leftJoin('folio','sub_folio.folio_number','folio.number')
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->where('sub_folio.void','0')
                ->whereRaw('guest_detail.departure_unixx>UNIX_TIMESTAMP("' .$postingDate. '") AND sub_folio.audit_date_unixx<=UNIX_TIMESTAMP("' .$postingDate. '") AND sub_folio.audit_date_unixx<guest_detail.departure_unixx
                    AND ((cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '" OR cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['TaxAndService']. '")
                    OR (cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Transfer']. '" AND sub_folio.account_code="' .GlobalVariableController::$configurationName['AccountTransferCharge']. '")) ')
                ->orderBy('sub_folio.audit_date')
                ->orderBy('sub_folio.room_number')
                ->orderBy('sub_folio.account_code')
                ->first();

            $guestLedger = 0;
            if(!empty($queryGuestLedger)) {
                $guestLedger = intval($queryGuestLedger->Total);
            }

        // GUEST DEPOSIT
            $queryGuestDeposit = SubFolio::select(
                DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", (sub_folio.amount * sub_folio.quantity), -(sub_folio.amount * sub_folio.quantity))) AS Total '))
                ->leftJoin('folio','sub_folio.folio_number','folio.number')
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->where('sub_folio.void','0')
                ->whereRaw('guest_detail.departure_unixx>UNIX_TIMESTAMP("' .$postingDate. '") AND sub_folio.audit_date_unixx<=UNIX_TIMESTAMP("' .$postingDate. '")
                    AND sub_folio.audit_date_unixx<guest_detail.departure_unixx
                    AND (cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Payment']. '"
                    OR (cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Transfer']. '"
                    AND (sub_folio.account_code="' .ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalAccount'], GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']). '"
                    OR sub_folio.account_code="' .ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalAccount'], GlobalVariableController::$configurationName['AccountTransferPayment']). '")))')
                ->orderBy('sub_folio.audit_date')
                ->orderBy('sub_folio.room_number')
                ->orderBy('sub_folio.account_code')
                ->first();

            $guestDeposit = 0;
            if(!empty($queryGuestDeposit)) {
                $guestDeposit = $queryGuestDeposit->Total;
            }

        // GUEST DEPOSIT RESERVATION
            $queryGuestDepositReservation = Reservation::select(
                DB::raw('IFNULL(SUM(CASE WHEN guest_deposit.type_code="' .GlobalVariableController::$transactionType['Debit']. '" THEN guest_deposit.amount ELSE -guest_deposit.amount END), 0) AS Deposit '))
                ->leftJoin('guest_deposit','reservation.number','guest_deposit.reservation_number')
                ->leftJoin('guest_detail','reservation.guest_detail_id', 'guest_detail.id')
                ->whereDate('guest_deposit.audit_date','<=',$postingDate)
                ->where('reservation.status_code','<>',GlobalVariableController::$reservationStatus['Void'])
                ->where('guest_deposit.void','0')
                ->where('guest_deposit.system_code','<>',GlobalVariableController::$system['CakrasoftBanquetManagementSystem'])
                ->groupBy('reservation.number');

            $queryGuestDepositReservation2 = DB::table($queryGuestDepositReservation,'BalanceDeposit')
                ->select(
                    DB::raw('SUM(Deposit) as Deposit'))
                ->where('Deposit','<>',0)
                ->first();

            if(!empty($queryGuestDepositReservation->first())) {
                $guestDeposit += $queryGuestDepositReservation2->Deposit;
            }

        // GUEST DEPOSIT BANQUET
            $queryGuestDepositBanquet = DB::table('ban_booking')
                ->select(
                    DB::raw('IFNULL(SUM(CASE WHEN guest_deposit.type_code="' .GlobalVariableController::$transactionType['Debit']. '" THEN guest_deposit.amount ELSE -guest_deposit.amount END), 0) AS Deposit '))
                ->leftJoin('guest_deposit','ban_booking.number','guest_deposit.reservation_number')
                ->leftJoin('guest_detail','ban_booking.guest_detail_id', 'guest_detail.id')
                ->whereDate('guest_deposit.audit_date','<=',$postingDate)
                ->where('guest_deposit.void','0')
                ->where('guest_deposit.system_code',GlobalVariableController::$system['CakrasoftBanquetManagementSystem'])
                ->groupBy('ban_booking.number');

            $queryGuestDepositBanquet2 = DB::table($queryGuestDepositBanquet,'BalanceDeposit')
                    ->select(
                        DB::raw('SUM(Deposit) as Deposit')
                    )
                    ->where('Deposit' ,'<>',0)
                    ->first();

            if(!empty($queryGuestDepositBanquet->first())) {
                $guestDeposit += $queryGuestDepositBanquet2->Deposit;
            }

            $revenueOnly = false;
            if($revenueOnly) {
                ProcedureQueryController::updateRoomStatisticRevenue($postingDate,$revenueGross, $revenueIncCompliment, $revenueExPackage, $revenueNett, $revenueBreakfast, $revenueFood, $revenueBeverage, $revenueBanquet);
            } else {
                ProcedureQueryController::insertRoomStatistic($postingDate, $totalRoom, $outOfOrder, $officeUse, $underConstruction, $houseUse, $compliment, $roomSold, $dayUse, $revenueGross, $revenueIncCompliment, $revenueExPackage, $revenueNett,
                    $adult, $child, $adultSold, $childSold, $childDayUse, $adultDayUse, $adultCompliment, $childCompliment, $adultHU, $childHU, $walkIn, $checkIn, $tomorrowExpectedArrival, $reservation,
                    $cancelReservation, $noShowReservation, $checkOut, $earlyCheckOut, $tomorrowExpectedDeparture, $breakfastCover, $foodCover, $beverageCover, $banquetCover, $weddingCover, $gatheringCover,
                    $revenueBreakfast, $revenueFood, $revenueBeverage, $revenueBanquet, $revenueWedding, $revenueGathering, $guestLedger, $guestDeposit);
            }
        return 3;
    }

    public static function postMarketStatistic($postingDate){
        $postingDate = FormatController::formatDate($postingDate);

        //Market Inisialisasi
            $marketCode = '';
            $marketCategoryCode = '';
            $marketCompanyCode = '';
            $roomMarket = 0;
            $roomMarketCompliment = 0;
            $paxMarket = 0;
            $paxMarketCompliment = 0;
            $revNetMarket = 0;
            $revNetMarketCompliment = 0;
            $revGrossMarket = 0;
            $revGrossMarketCompliment = 0;
            $revNonPackageMarket = 0;
            $revNonPackageMarketCompliment = 0;
        //Business Source
            $businessSourceCode = '';
            $businessSourceCompanyCode = '';
            $roomBusinessSource = 0;
            $roomBusinessSourceCompliment = 0;
            $paxBusinessSource = 0;
            $paxBusinessSourceCompliment = 0;
            $revNetBusinessSource = 0;
            $revNetBusinessSourceCompliment = 0;
            $revGrossBusinessSource = 0;
            $revGrossBusinessSourceCompliment = 0;
            $revNonPackageBusinessSource = 0;
            $revNonPackageBusinessSourceCompliment = 0;
        //RoomType Inisialisai
            $roomTypeCode = '';
            $roomTypeCompanyCode = '';
            $roomRoomType = 0;
            $roomRoomTypeCompliment = 0;
            $paxRoomType = 0;
            $paxRoomTypeCompliment = 0;
            $revNetRoomType = 0;
            $revNetRoomTypeCompliment = 0;
            $revGrossRoomType = 0;
            $revGrossRoomTypeCompliment = 0;
            $revNonPackageRoomType = 0;
            $revNonPackageRoomTypeCompliment = 0;
        //RoomRate Inisialisai
            $roomRateCode = '';
            $roomRateCompanyCode = '';
            $roomRoomRate = 0;
            $roomRoomRateCompliment = 0;
            $paxRoomRate = 0;
            $paxRoomRateCompliment = 0;
            $revNetRoomRate = 0;
            $revNetRoomRateCompliment = 0;
            $revGrossRoomRate = 0;
            $revGrossRoomRateCompliment = 0;
            $revNonPackageRoomRate = 0;
            $revNonPackageRoomRateCompliment = 0;
        //Marketing Inisialisasi
            $marketingCode = '';
            $marketingBusinessSourceCode = '';
            $marketingCompanyCode = '';
            $roomMarketing = 0;
            $roomMarketingCompliment = 0;
            $paxMarketing = 0;
            $paxMarketingCompliment = 0;
            $revNetMarketing = 0;
            $revNetMarketingCompliment = 0;
            $revGrossMarketing = 0;
            $revGrossMarketingCompliment = 0;
            $revNonPackageMarketing = 0;
            $revNonPackageMarketingCompliment = 0;
            $revAllNetMarketing = 0;
            $revAllGrossMarketing = 0;
        //Country Inisialisasi
            $countryCode = '';
            $countryStateCode = '';
            $countryCityCode = '';
            $roomCountry = 0;
            $roomCountryCompliment = 0;
            $paxCountry = 0;
            $paxCountryCompliment = 0;
            $revNetCountry = 0;
            $revNetCountryCompliment = 0;
            $revGrossCountry = 0;
            $revGrossCountryCompliment = 0;
            $revNonPackageCountry = 0;
            $revNonPackageCountryCompliment = 0;
            $revAllNetCountry = 0;
            $revAllGrossCountry = 0;
        //Nationality Inisialisasi
            $nationalityCode = '';
            $nationalityCountryCode = '';
            $roomNationality = 0;
            $roomNationalityCompliment = 0;
            $paxNationality = 0;
            $paxNationalityCompliment = 0;
            $revNetNationality = 0;
            $revNetNationalityCompliment = 0;
            $revGrossNationality = 0;
            $revGrossNationalityCompliment = 0;
            $revNonPackageNationality = 0;
            $revNonPackageNationalityCompliment = 0;
            $revAllNetNationality = 0;
            $revAllGrossNationality = 0;

            $isCalculateAllRoomRevenueSubGroup= HelperController::trueFalseString(ConfigurationController::value(null, GlobalVariableController::$configurationCategory['Other'], GlobalVariableController::$configurationName['CalculateAllRoomRevenueSubGroup'] ));
            $globalAccountRoomCharge = ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalAccount'], GlobalVariableController::$configurationName['AccountRoomCharge'] );

            if( $isCalculateAllRoomRevenueSubGroup ) {
                $queryConditionRoomCharge1 = 'cfg_init_account.sub_group_code="'.GlobalVariableController::$accountSubGroup['RoomCharge'].'"';
                $queryConditionRoomCharge2 = 'cfg_init_account.sub_group_code="' .GlobalVariableController::$accountSubGroup['RoomCharge'].'"';
            } else {
                $queryConditionRoomCharge1 = 'sub_folio.account_code="'. $globalAccountRoomCharge.'"';
                $queryConditionRoomCharge2 = 'SubFolio.account_code="' . $globalAccountRoomCharge.'"';
            }
        // Query Market Inisialisasi //1
        // NETT
            $query1SubUnion1 = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->whereRaw($queryConditionRoomCharge1)
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion1 = DB::table($query1SubUnion1,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $query3SubUnion1 = DB::table($query2SubUnion1, 'B')
                ->select(
                    'guest_detail.market_code',
                    'contact_person.company_code',
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('guest_detail.market_code','contact_person.company_code');

            $queryUnion1 = DB::table($query3SubUnion1,'C')
                ->select(
                    'C.market_code',
                    'C.company_code',
                    'cfg_init_market.category_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(C.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(C.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->leftJoin('cfg_init_market','C.market_code','cfg_init_market.code')
                ->groupBy('C.market_code','C.company_code');

        // GROSS
            $query1SubUnion2 = DB::table('sub_folio')
            ->select(
                'sub_folio.folio_number',
                'sub_folio.belongs_to',
                'sub_folio.account_code',
                DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
            ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
            ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
            ->where('sub_folio.void','0')
            ->groupBy('sub_folio.breakdown1');

            $query2SubUnion2 = DB::table($query1SubUnion2,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion2 = DB::table($query2SubUnion2,'B')
                ->select(
                    'guest_detail.market_code',
                    'contact_person.company_code',
                    'cfg_init_market.category_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount2'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_market','guest_detail.market_code','cfg_init_market.code')
                ->groupBy('guest_detail.market_code','contact_person.company_code');

        // NON PACKAGE
            $query1SubUnion3 = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")
                    AND (' .$queryConditionRoomCharge1. ' OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']). '"
                    OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']). '")')
                ->where('sub_folio.void','0')
                ->groupBy('breakdown1', 'sub_folio.breakdown2');

            $query2SubUnion3 = DB::table($query1SubUnion3,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion3 = DB::table($query2SubUnion3,'B')
                ->select(
                    'guest_detail.market_code',
                    'contact_person.company_code',
                    'cfg_init_market.category_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount3'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment3'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_market','guest_detail.market_code','cfg_init_market.code')
                ->groupBy('guest_detail.market_code');

            $queryMarketStatisticUnion = DB::table('guest_in_house')
                ->select(
                    'guest_in_house.market_code AS market_code',
                    'guest_in_house.company_code',
                    'cfg_init_market.category_code',
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", 1, 0)) AS RoomMarket'),
                    DB::raw('SUM(IF(1=1, 1, 0)) AS RoomMarketCompliment'),
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", (guest_in_house.adult + guest_in_house.child), 0)) AS Pax'),
                    DB::raw('SUM(guest_in_house.adult + guest_in_house.child) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->leftJoin('cfg_init_market', 'guest_in_house.market_code','cfg_init_market.code')
                ->whereRaw('guest_in_house.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('guest_in_house.compliment_hu','<>',GLobalVariableController::$roomStatus['HouseUse'])
                ->groupBy('guest_in_house.market_code','guest_in_house.company_code')
                ->union($queryUnion1)
                ->union($queryUnion2)
                ->union($queryUnion3);

            $queryMarketStatistic = DB::query()->fromSub($queryMarketStatisticUnion,'Market')
                ->select(
                    'Market.market_code',
                    'Market.category_code',
                    'Market.company_code',
                    DB::raw('SUM(Market.RoomMarket) AS RoomMarket'),
                    DB::raw('SUM(Market.RoomMarketCompliment) AS RoomMarketCompliment'),
                    DB::raw('SUM(Market.Pax) AS Pax'),
                    DB::raw('SUM(Market.PaxCompliment) AS PaxCompliment'),
                    DB::raw('SUM(Market.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(Market.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(Market.TotalAmount2) AS TotalAmount2'),
                    DB::raw('SUM(Market.TotalAmountCompliment) AS TotalAmountCompliment2'),
                    DB::raw('SUM(Market.TotalAmount3) AS TotalAmount3'),
                    DB::raw('SUM(Market.TotalAmountCompliment) AS TotalAmountCompliment3'))
                ->groupBy('market_code','company_code')
                ->get();

            if(!empty($queryMarketStatistic)) {
                foreach($queryMarketStatistic as $queryMarketStatisticX){
                    $marketCode = $queryMarketStatisticX->market_code;
                    $marketCategoryCode = $queryMarketStatisticX->category_code;
                    $marketCompanyCode = $queryMarketStatisticX->company_code;
                    $roomMarket = $queryMarketStatisticX->RoomMarket;
                    $roomMarketCompliment = $queryMarketStatisticX->RoomMarketCompliment;
                    $paxMarket = $queryMarketStatisticX->Pax;
                    $paxMarketCompliment = $queryMarketStatisticX->PaxCompliment;
                    $revNetMarket = $queryMarketStatisticX->TotalAmount;
                    $revNetMarketCompliment = $queryMarketStatisticX->TotalAmountCompliment;
                    $revGrossMarket = $queryMarketStatisticX->TotalAmount2;
                    $revGrossMarketCompliment = $queryMarketStatisticX->TotalAmountCompliment2;
                    $revNonPackageMarket = $queryMarketStatisticX->TotalAmount3;
                    $revNonPackageMarketCompliment = $queryMarketStatisticX->TotalAmountCompliment3;

                    if (($roomMarket > 0) || ($roomMarketCompliment > 0) || ($paxMarket > 0) || ($paxMarketCompliment > 0) || ($revNetMarket > 0) || ($revNetMarket < 0)
                        || ($revNetMarketCompliment > 0) || ($revGrossMarket > 0) || ($revGrossMarketCompliment > 0) || ($revNonPackageMarket > 0) || ($revNonPackageMarketCompliment > 0)) {

                            ProcedureQueryController::insertMarketStatistic($postingDate, $marketCategoryCode, $marketCode, $marketCompanyCode, $roomMarket, $roomMarketCompliment, $paxMarket, $paxMarketCompliment, $revNetMarket, $revNetMarketCompliment,$revGrossMarket, $revGrossMarketCompliment, $revNonPackageMarket, $revNonPackageMarketCompliment,
                                $businessSourceCode, $businessSourceCompanyCode, $roomBusinessSource, $roomBusinessSourceCompliment, $paxBusinessSource, $paxBusinessSourceCompliment, $revNetBusinessSource, $revNetBusinessSourceCompliment, $revGrossBusinessSource, $revGrossBusinessSourceCompliment, $revNonPackageBusinessSource, $revNonPackageBusinessSourceCompliment,
                                $roomTypeCode, $roomTypeCompanyCode, $roomRoomType, $roomRoomTypeCompliment, $paxRoomType, $paxRoomTypeCompliment, $revNetRoomType, $revNetRoomTypeCompliment, $revGrossRoomType, $revGrossRoomTypeCompliment, $revNonPackageRoomType, $revNonPackageRoomTypeCompliment,
                                $roomRateCode, $roomRateCompanyCode, $roomRoomRate, $roomRoomRateCompliment, $paxRoomRate, $paxRoomRateCompliment, $revNetRoomRate, $revNetRoomRateCompliment, $revGrossRoomRate, $revGrossRoomRateCompliment, $revNonPackageRoomRate, $revNonPackageRoomRateCompliment,
                                $marketingCode, $marketingBusinessSourceCode, $marketingCompanyCode, $roomMarketing, $roomMarketingCompliment, $paxMarketing, $paxMarketingCompliment, $revNetMarketing, $revNetMarketingCompliment, $revGrossMarketing, $revGrossMarketingCompliment, $revNonPackageMarketing, $revNonPackageMarketingCompliment, $revAllNetMarketing, $revAllGrossMarketing,
                                $countryCode, $countryStateCode, $countryCityCode, $roomCountry, $roomCountryCompliment, $paxCountry, $paxCountryCompliment, $revNetCountry, $revNetCountryCompliment, $revGrossCountry, $revGrossCountryCompliment, $revNonPackageCountry, $revNonPackageCountryCompliment, $revAllNetCountry, $revAllGrossCountry,
                                $nationalityCode, $nationalityCountryCode, $roomNationality, $roomNationalityCompliment, $paxNationality, $paxNationalityCompliment, $revNetNationality, $revNetNationalityCompliment, $revGrossNationality, $revGrossNationalityCompliment, $revNonPackageNationality, $revNonPackageNationalityCompliment, $revAllNetNationality, $revAllGrossNationality);

                    }
                }
            }

        //Market Inisialisasi
            $marketCode = '';
            $marketCategoryCode = '';
            $roomMarket = 0;
            $roomMarketCompliment = 0;
            $paxMarket = 0;
            $paxMarketCompliment = 0;
            $revNetMarket = 0;
            $revNetMarketCompliment = 0;
            $revGrossMarket = 0;
            $revGrossMarketCompliment = 0;
            $revNonPackageMarket = 0;
            $revNonPackageMarketCompliment = 0;

        //Proses Business Source //2
            // NETT
            $query1SubUnion1x = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->whereRaw($queryConditionRoomCharge1)
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion1x = DB::table($query1SubUnion1x,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $query3SubUnion1x = DB::table($query2SubUnion1x, 'B')
                ->select(
                    'guest_detail.business_source_code',
                    'contact_person.company_code',
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('guest_detail.business_source_code','contact_person.company_code');

            $queryUnion1x = DB::table($query3SubUnion1x,'C')
                ->select(
                    'C.business_source_code',
                    'C.company_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(C.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(C.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->groupBy('C.business_source_code','C.company_code');

        // GROSS
            $query1SubUnion2x = DB::table('sub_folio')
            ->select(
                'sub_folio.folio_number',
                'sub_folio.belongs_to',
                'sub_folio.account_code',
                DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
            ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
            ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
            ->where('sub_folio.void','0')
            ->groupBy('sub_folio.breakdown1');

            $query2SubUnion2x = DB::table($query1SubUnion2x,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion2x = DB::table($query2SubUnion2x,'B')
                ->select(
                    'guest_detail.business_source_code',
                    'contact_person.company_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount2'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('guest_detail.business_source_code','contact_person.company_code');

        // NON PACKAGE
            $query1SubUnion3x = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")
                    AND (' .$queryConditionRoomCharge1. ' OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']). '"
                    OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']). '")')
                ->where('sub_folio.void','0')
                ->groupBy('breakdown1', 'sub_folio.breakdown2');

            $query2SubUnion3x = DB::table($query1SubUnion3x,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion3x = DB::table($query2SubUnion3x,'B')
                ->select(
                    'guest_detail.business_source_code',
                    'contact_person.company_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount3'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment3'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('guest_detail.business_source_code');

            $queryBusinessSourceUnion = DB::table('guest_in_house')
                ->select(
                    'guest_in_house.business_source_code',
                    'guest_in_house.company_code',
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", 1, 0)) AS RoomMarket'),
                    DB::raw('SUM(IF(1=1, 1, 0)) AS RoomMarketCompliment'),
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", (guest_in_house.adult + guest_in_house.child), 0)) AS Pax'),
                    DB::raw('SUM(guest_in_house.adult + guest_in_house.child) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->leftJoin('cfg_init_market', 'guest_in_house.market_code','cfg_init_market.code')
                ->whereRaw('guest_in_house.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('guest_in_house.compliment_hu','<>',GLobalVariableController::$roomStatus['HouseUse'])
                ->groupBy('guest_in_house.business_source_code','guest_in_house.company_code')
                ->union($queryUnion1x)
                ->union($queryUnion2x)
                ->union($queryUnion3x);

            $queryBusinessSource = DB::query()->fromSub($queryBusinessSourceUnion,'BusinessSource')
                ->select(
                    'BusinessSource.business_source_code',
                    'BusinessSource.company_code',
                    DB::raw('SUM(BusinessSource.RoomMarket) AS RoomMarket'),
                    DB::raw('SUM(BusinessSource.RoomMarketCompliment) AS RoomMarketCompliment'),
                    DB::raw('SUM(BusinessSource.Pax) AS Pax'),
                    DB::raw('SUM(BusinessSource.PaxCompliment) AS PaxCompliment'),
                    DB::raw('SUM(BusinessSource.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(BusinessSource.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(BusinessSource.TotalAmount2) AS TotalAmount2'),
                    DB::raw('SUM(BusinessSource.TotalAmountCompliment) AS TotalAmountCompliment2'),
                    DB::raw('SUM(BusinessSource.TotalAmount3) AS TotalAmount3'),
                    DB::raw('SUM(BusinessSource.TotalAmountCompliment) AS TotalAmountCompliment3'))
                ->groupBy('business_source_code','company_code')
                ->get();

            if(!empty($queryBusinessSource)){
                foreach($queryBusinessSource as $queryBusinessSourceX) {
                    $businessSourceCode = $queryBusinessSourceX->business_source_code;
                    $businessSourceCompanyCode = $queryBusinessSourceX->company_code;
                    $roomBusinessSource = $queryBusinessSourceX->RoomMarket;
                    $roomBusinessSourceCompliment = $queryBusinessSourceX->RoomMarketCompliment;
                    $paxBusinessSource = $queryBusinessSourceX->Pax;
                    $paxBusinessSourceCompliment = $queryBusinessSourceX->PaxCompliment;
                    $revNetBusinessSource = $queryBusinessSourceX->TotalAmount;
                    $revNetBusinessSourceCompliment = $queryBusinessSourceX->TotalAmountCompliment;
                    $revGrossBusinessSource = $queryBusinessSourceX->TotalAmount2;
                    $revGrossBusinessSourceCompliment = $queryBusinessSourceX->TotalAmountCompliment2;
                    $revNonPackageBusinessSource = $queryBusinessSourceX->TotalAmount3;
                    $revNonPackageBusinessSourceCompliment = $queryBusinessSourceX->TotalAmountCompliment3;

                    if(($roomBusinessSource > 0) || ($roomBusinessSourceCompliment > 0) || ($paxBusinessSource > 0) || ($paxBusinessSourceCompliment > 0) || ($revNetBusinessSource > 0) || ($revNetBusinessSource < 0) || ($revNetBusinessSourceCompliment > 0) || ($revGrossBusinessSource > 0) || ($revGrossBusinessSourceCompliment > 0) || ($revNonPackageBusinessSource > 0) || ($revNonPackageBusinessSourceCompliment > 0)){
                        procedureQueryController::insertMarketStatistic($postingDate, $marketCategoryCode, $marketCode, $marketCompanyCode, $roomMarket, $roomMarketCompliment, $paxMarket, $paxMarketCompliment, $revNetMarket, $revNetMarketCompliment, $revGrossMarket, $revGrossMarketCompliment, $revNonPackageMarket, $revNonPackageMarketCompliment,
                            $businessSourceCode, $businessSourceCompanyCode, $roomBusinessSource, $roomBusinessSourceCompliment, $paxBusinessSource, $paxBusinessSourceCompliment, $revNetBusinessSource, $revNetBusinessSourceCompliment, $revGrossBusinessSource, $revGrossBusinessSourceCompliment, $revNonPackageBusinessSource, $revNonPackageBusinessSourceCompliment,
                            $roomTypeCode, $roomTypeCompanyCode, $roomRoomType, $roomRoomTypeCompliment, $paxRoomType, $paxRoomTypeCompliment, $revNetRoomType, $revNetRoomTypeCompliment, $revGrossRoomType, $revGrossRoomTypeCompliment, $revNonPackageRoomType, $revNonPackageRoomTypeCompliment,
                            $roomRateCode, $roomRateCompanyCode, $roomRoomRate, $roomRoomRateCompliment, $paxRoomRate, $paxRoomRateCompliment, $revNetRoomRate, $revNetRoomRateCompliment, $revGrossRoomRate, $revGrossRoomRateCompliment, $revNonPackageRoomRate, $revNonPackageRoomRateCompliment,
                            $marketingCode, $marketingBusinessSourceCode, $marketingCompanyCode, $roomMarketing, $roomMarketingCompliment, $paxMarketing, $paxMarketingCompliment, $revNetMarketing, $revNetMarketingCompliment, $revGrossMarketing, $revGrossMarketingCompliment, $revNonPackageMarketing, $revNonPackageMarketingCompliment, $revAllNetMarketing, $revAllGrossMarketing,
                            $countryCode, $countryStateCode, $countryCityCode, $roomCountry, $roomCountryCompliment, $paxCountry, $paxCountryCompliment, $revNetCountry, $revNetCountryCompliment, $revGrossCountry, $revGrossCountryCompliment, $revNonPackageCountry, $revNonPackageCountryCompliment, $revAllNetCountry, $revAllGrossCountry,
                            $nationalityCode, $nationalityCountryCode, $roomNationality, $roomNationalityCompliment, $paxNationality, $paxNationalityCompliment, $revNetNationality, $revNetNationalityCompliment, $revGrossNationality, $revGrossNationalityCompliment, $revNonPackageNationality, $revNonPackageNationalityCompliment, $revAllNetNationality, $revAllGrossNationality);
                    }
                }
            }

        //Business Source
            $businessSourceCode = '';
            $roomBusinessSource = 0;
            $roomBusinessSourceCompliment = 0;
            $paxBusinessSource = 0;
            $paxBusinessSourceCompliment= 0;
            $revNetBusinessSource = 0;
            $revNetBusinessSourceCompliment = 0;
            $revGrossBusinessSource = 0;
            $revGrossBusinessSourceCompliment = 0;
            $revNonPackageBusinessSource = 0;
            $revNonPackageBusinessSourceCompliment = 0;

        //Query Room Type //3
        // NETT
            $query1SubUnion1xx = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->whereRaw($queryConditionRoomCharge1)
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion1xx = DB::table($query1SubUnion1xx,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $query3SubUnion1xx = DB::table($query2SubUnion1xx, 'B')
                ->select(
                    'guest_detail.room_type_code',
                    'contact_person.company_code',
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('guest_detail.room_type_code','contact_person.company_code');

            $queryUnion1xx = DB::table($query3SubUnion1xx,'C')
                ->select(
                    'C.room_type_code',
                    'C.company_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(C.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(C.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->groupBy('C.room_type_code','C.company_code');

        // GROSS
            $query1SubUnion2xx = DB::table('sub_folio')
            ->select(
                'sub_folio.folio_number',
                'sub_folio.belongs_to',
                'sub_folio.account_code',
                DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
            ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
            ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
            ->where('sub_folio.void','0')
            ->groupBy('sub_folio.breakdown1');

            $query2SubUnion2xx = DB::table($query1SubUnion2xx,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion2xx = DB::table($query2SubUnion2xx,'B')
                ->select(
                    'guest_detail.room_type_code',
                    'contact_person.company_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount2'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('guest_detail.room_type_code','contact_person.company_code');

        // NON PACKAGE
            $query1SubUnion3xx = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")
                    AND (' .$queryConditionRoomCharge1. ' OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']). '"
                    OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']). '")')
                ->where('sub_folio.void','0')
                ->groupBy('breakdown1', 'sub_folio.breakdown2');

            $query2SubUnion3xx = DB::table($query1SubUnion3xx,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion3xx = DB::table($query2SubUnion3xx,'B')
                ->select(
                    'guest_detail.room_type_code',
                    'contact_person.company_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount3'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment3'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('guest_detail.room_type_code');

            $queryRoomTypeUnion = DB::table('guest_in_house')
                ->select(
                    'guest_in_house.room_type_code',
                    'guest_in_house.company_code',
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", 1, 0)) AS RoomMarket'),
                    DB::raw('SUM(IF(1=1, 1, 0)) AS RoomMarketCompliment'),
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", (guest_in_house.adult + guest_in_house.child), 0)) AS Pax'),
                    DB::raw('SUM(guest_in_house.adult + guest_in_house.child) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'))
                ->leftJoin('cfg_init_market', 'guest_in_house.market_code','cfg_init_market.code')
                ->whereRaw('guest_in_house.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('guest_in_house.compliment_hu','<>',GLobalVariableController::$roomStatus['HouseUse'])
                ->groupBy('guest_in_house.room_type_code','guest_in_house.company_code')
                ->union($queryUnion1xx)
                ->union($queryUnion2xx)
                ->union($queryUnion3xx);

            $queryRoomType = DB::query()->fromSub($queryRoomTypeUnion,'RoomType')
                ->select(
                    'RoomType.room_type_code',
                    'RoomType.company_code',
                    DB::raw('SUM(RoomType.RoomMarket) AS RoomMarket'),
                    DB::raw('SUM(RoomType.RoomMarketCompliment) AS RoomMarketCompliment'),
                    DB::raw('SUM(RoomType.Pax) AS Pax'),
                    DB::raw('SUM(RoomType.PaxCompliment) AS PaxCompliment'),
                    DB::raw('SUM(RoomType.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(RoomType.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(RoomType.TotalAmount2) AS TotalAmount2'),
                    DB::raw('SUM(RoomType.TotalAmountCompliment) AS TotalAmountCompliment2'),
                    DB::raw('SUM(RoomType.TotalAmount3) AS TotalAmount3'),
                    DB::raw('SUM(RoomType.TotalAmountCompliment) AS TotalAmountCompliment3'))
                ->groupBy('room_type_code','company_code')
                ->get();

            if(!empty($queryRoomType)){
                foreach($queryRoomType as $roomType){
                    $roomTypeCode = $roomType->room_type_code;
                    $roomTypeCompanyCode = $roomType->company_code;
                    $roomRoomType = $roomType->RoomMarket;
                    $roomRoomTypeCompliment = $roomType->RoomMarketCompliment;
                    $paxRoomType = $roomType->Pax;
                    $paxRoomTypeCompliment = $roomType->PaxCompliment;
                    $revNetRoomType = $roomType->TotalAmount;
                    $revNetRoomTypeCompliment = $roomType->TotalAmountCompliment;
                    $revGrossRoomType = $roomType->TotalAmount2;
                    $revGrossRoomTypeCompliment = $roomType->TotalAmountCompliment2;
                    $revNonPackageRoomType = $roomType->TotalAmount3;
                    $revNonPackageRoomTypeCompliment = $roomType->TotalAmountCompliment3;

                    if(($roomRoomType > 0) || ($roomRoomTypeCompliment > 0) || ($paxRoomType > 0) || ($paxRoomTypeCompliment > 0) || ($revNetRoomType > 0) || ($revNetRoomType < 0) || ($revNetRoomTypeCompliment > 0) || ($revGrossRoomType > 0) || ($revGrossRoomTypeCompliment > 0) || ($revNonPackageRoomType > 0) || ($revNonPackageRoomTypeCompliment > 0)){
                        ProcedureQueryController::insertMarketStatistic($postingDate, $marketCategoryCode, $marketCode, $marketCompanyCode, $roomMarket, $roomMarketCompliment, $paxMarket, $paxMarketCompliment, $revNetMarket, $revNetMarketCompliment, $revGrossMarket, $revGrossMarketCompliment, $revNonPackageMarket, $revNonPackageMarketCompliment,
                            $businessSourceCode, $businessSourceCompanyCode, $roomBusinessSource, $roomBusinessSourceCompliment, $paxBusinessSource, $paxBusinessSourceCompliment, $revNetBusinessSource, $revNetBusinessSourceCompliment, $revGrossBusinessSource, $revGrossBusinessSourceCompliment, $revNonPackageBusinessSource, $revNonPackageBusinessSourceCompliment,
                            $roomTypeCode, $roomTypeCompanyCode, $roomRoomType, $roomRoomTypeCompliment, $paxRoomType, $paxRoomTypeCompliment, $revNetRoomType, $revNetRoomTypeCompliment, $revGrossRoomType, $revGrossRoomTypeCompliment, $revNonPackageRoomType, $revNonPackageRoomTypeCompliment,
                            $roomRateCode, $roomRateCompanyCode, $roomRoomRate, $roomRoomRateCompliment, $paxRoomRate, $paxRoomRateCompliment, $revNetRoomRate, $revNetRoomRateCompliment, $revGrossRoomRate, $revGrossRoomRateCompliment, $revNonPackageRoomRate, $revNonPackageRoomRateCompliment,
                            $marketingCode, $marketingBusinessSourceCode, $marketingCompanyCode, $roomMarketing, $roomMarketingCompliment, $paxMarketing, $paxMarketingCompliment, $revNetMarketing, $revNetMarketingCompliment, $revGrossMarketing, $revGrossMarketingCompliment, $revNonPackageMarketing, $revNonPackageMarketingCompliment, $revAllNetMarketing, $revAllGrossMarketing,
                            $countryCode, $countryStateCode, $countryCityCode, $roomCountry, $roomCountryCompliment, $paxCountry, $paxCountryCompliment, $revNetCountry, $revNetCountryCompliment, $revGrossCountry, $revGrossCountryCompliment, $revNonPackageCountry, $revNonPackageCountryCompliment, $revAllNetCountry, $revAllGrossCountry,
                            $nationalityCode, $nationalityCountryCode, $roomNationality, $roomNationalityCompliment, $paxNationality, $paxNationalityCompliment, $revNetNationality, $revNetNationalityCompliment, $revGrossNationality, $revGrossNationalityCompliment, $revNonPackageNationality, $revNonPackageNationalityCompliment, $revAllNetNationality, $revAllGrossNationality);
                    }
                }
            }

            // RoomType Inisialisai
                $roomTypeCode = '';
                $roomTypeCompanyCode = '';
                $roomRoomType = 0;
                $roomRoomTypeCompliment = 0;
                $paxRoomType = 0;
                $paxRoomTypeCompliment = 0;
                $revNetRoomType = 0;
                $revNetRoomTypeCompliment = 0;
                $revGrossRoomType = 0;
                $revGrossRoomTypeCompliment = 0;
                $revNonPackageRoomType = 0;
                $revNonPackageRoomTypeCompliment = 0;

            // Query Room Rate//4
            // NETT
                $query1SubUnion1xxx = DB::table('sub_folio')
                    ->select(
                        'sub_folio.folio_number',
                        'sub_folio.belongs_to',
                        'sub_folio.account_code',
                        DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                    ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                    ->where('sub_folio.void','0')
                    ->whereRaw($queryConditionRoomCharge1)
                    ->groupBy('sub_folio.breakdown1');

                $query2SubUnion1xxx = DB::table($query1SubUnion1xxx,'A')
                    ->select(
                        'A.folio_number',
                        'A.belongs_to',
                        DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                    ->whereRaw($queryConditionRoomCharge2)
                    ->groupBy('A.belongs_to');

                $query3SubUnion1xxx = DB::table($query2SubUnion1xxx, 'B')
                    ->select(
                        'guest_detail.room_rate_code',
                        'contact_person.company_code',
                        DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount'),
                        DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment'))
                    ->leftJoin('folio','B.belongs_to','folio.number')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->groupBy('guest_detail.room_rate_code','contact_person.company_code');

                $queryUnion1xxx = DB::table($query3SubUnion1xxx,'C')
                    ->select(
                        'C.room_rate_code',
                        'C.company_code',
                        DB::raw('SUM(0) AS RoomMarket'),
                        DB::raw('SUM(0) AS RoomMarketCompliment'),
                        DB::raw('SUM(0) AS Pax'),
                        DB::raw('SUM(0) AS PaxCompliment'),
                        DB::raw('SUM(C.TotalAmount) AS TotalAmount'),
                        DB::raw('SUM(C.TotalAmountCompliment) AS TotalAmountCompliment'),
                        DB::raw('SUM(0) AS TotalAmount2'),
                        DB::raw('SUM(0) AS TotalAmountCompliment2'),
                        DB::raw('SUM(0) AS TotalAmount3'),
                        DB::raw('SUM(0) AS TotalAmountCompliment3'))
                    ->groupBy('C.room_rate_code','C.company_code');

            // GROSS
                $query1SubUnion2xxx = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->groupBy('sub_folio.breakdown1');

                $query2SubUnion2xxx = DB::table($query1SubUnion2xxx,'A')
                    ->select(
                        'A.folio_number',
                        'A.belongs_to',
                        DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                    ->whereRaw($queryConditionRoomCharge2)
                    ->groupBy('A.belongs_to');

                $queryUnion2xxx = DB::table($query2SubUnion2xxx,'B')
                    ->select(
                        'guest_detail.room_rate_code',
                        'contact_person.company_code',
                        DB::raw('SUM(0) AS RoomMarket'),
                        DB::raw('SUM(0) AS RoomMarketCompliment'),
                        DB::raw('SUM(0) AS Pax'),
                        DB::raw('SUM(0) AS PaxCompliment'),
                        DB::raw('SUM(0) AS TotalAmount'),
                        DB::raw('SUM(0) AS TotalAmountCompliment'),
                        DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount2'),
                        DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment2'),
                        DB::raw('SUM(0) AS TotalAmount3'),
                        DB::raw('SUM(0) AS TotalAmountCompliment3'))
                    ->leftJoin('folio','B.belongs_to','folio.number')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->groupBy('guest_detail.room_rate_code','contact_person.company_code');

            // NON PACKAGE
                $query1SubUnion3xxx = DB::table('sub_folio')
                    ->select(
                        'sub_folio.folio_number',
                        'sub_folio.belongs_to',
                        'sub_folio.account_code',
                        DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                    ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")
                        AND (' .$queryConditionRoomCharge1. ' OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']). '"
                        OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']). '")')
                    ->where('sub_folio.void','0')
                    ->groupBy('breakdown1', 'sub_folio.breakdown2');

                $query2SubUnion3xxx = DB::table($query1SubUnion3xxx,'A')
                    ->select(
                        'A.folio_number',
                        'A.belongs_to',
                        DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                    ->whereRaw($queryConditionRoomCharge2)
                    ->groupBy('A.belongs_to');

                $queryUnion3xxx = DB::table($query2SubUnion3xxx,'B')
                    ->select(
                        'guest_detail.room_rate_code',
                        'contact_person.company_code',
                        DB::raw('SUM(0) AS RoomMarket'),
                        DB::raw('SUM(0) AS RoomMarketCompliment'),
                        DB::raw('SUM(0) AS Pax'),
                        DB::raw('SUM(0) AS PaxCompliment'),
                        DB::raw('SUM(0) AS TotalAmount'),
                        DB::raw('SUM(0) AS TotalAmountCompliment'),
                        DB::raw('SUM(0) AS TotalAmount2'),
                        DB::raw('SUM(0) AS TotalAmountCompliment2'),
                        DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount3'),
                        DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment3'))
                    ->leftJoin('folio','B.belongs_to','folio.number')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->groupBy('guest_detail.room_rate_code');

                $queryRoomRateUnion = DB::table('guest_in_house')
                    ->select(
                        'guest_in_house.room_rate_code',
                        'guest_in_house.company_code',
                        DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", 1, 0)) AS RoomMarket'),
                        DB::raw('SUM(IF(1=1, 1, 0)) AS RoomMarketCompliment'),
                        DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", (guest_in_house.adult + guest_in_house.child), 0)) AS Pax'),
                        DB::raw('SUM(guest_in_house.adult + guest_in_house.child) AS PaxCompliment'),
                        DB::raw('SUM(0) AS TotalAmount'),
                        DB::raw('SUM(0) AS TotalAmountCompliment'),
                        DB::raw('SUM(0) AS TotalAmount2'),
                        DB::raw('SUM(0) AS TotalAmountCompliment2'),
                        DB::raw('SUM(0) AS TotalAmount3'),
                        DB::raw('SUM(0) AS TotalAmountCompliment3'))
                    ->leftJoin('cfg_init_market', 'guest_in_house.market_code','cfg_init_market.code')
                    ->whereRaw('guest_in_house.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                    ->where('guest_in_house.compliment_hu','<>',GLobalVariableController::$roomStatus['HouseUse'])
                    ->groupBy('guest_in_house.room_rate_code','guest_in_house.company_code')
                    ->union($queryUnion1xxx)
                    ->union($queryUnion2xxx)
                    ->union($queryUnion3xxx);

                $queryRoomRate = DB::query()->fromSub($queryRoomRateUnion,'RoomRate')
                    ->select(
                        'RoomRate.room_rate_code',
                        'RoomRate.company_code',
                        DB::raw('SUM(RoomRate.RoomMarket) AS RoomMarket'),
                        DB::raw('SUM(RoomRate.RoomMarketCompliment) AS RoomMarketCompliment'),
                        DB::raw('SUM(RoomRate.Pax) AS Pax'),
                        DB::raw('SUM(RoomRate.PaxCompliment) AS PaxCompliment'),
                        DB::raw('SUM(RoomRate.TotalAmount) AS TotalAmount'),
                        DB::raw('SUM(RoomRate.TotalAmountCompliment) AS TotalAmountCompliment'),
                        DB::raw('SUM(RoomRate.TotalAmount2) AS TotalAmount2'),
                        DB::raw('SUM(RoomRate.TotalAmountCompliment) AS TotalAmountCompliment2'),
                        DB::raw('SUM(RoomRate.TotalAmount3) AS TotalAmount3'),
                        DB::raw('SUM(RoomRate.TotalAmountCompliment) AS TotalAmountCompliment3'))
                    ->groupBy('room_rate_code','company_code')
                    ->get();

                if(!empty($queryRoomRate)){
                    foreach($queryRoomRate as $roomRate){
                        $roomRateCode = $roomRate->room_rate_code;
                        $roomRateCompanyCode = $roomRate->company_code;
                        $roomRoomRate = intval($roomRate->RoomMarket);
                        $roomRoomRateCompliment = intval($roomRate->RoomMarketCompliment);
                        $paxRoomRate = intval($roomRate->Pax);
                        $paxRoomRateCompliment = intval($roomRate->PaxCompliment);
                        $revNetRoomRate = $roomRate->TotalAmount;
                        $revNetRoomRateCompliment = $roomRate->TotalAmountCompliment;
                        $revGrossRoomRate = $roomRate->TotalAmount2;
                        $revGrossRoomRateCompliment = $roomRate->TotalAmountCompliment2;
                        $revNonPackageRoomRate = $roomRate->TotalAmount3;
                        $revNonPackageRoomRateCompliment = $roomRate->TotalAmountCompliment3;

                    if(($roomRoomRate > 0) || ($roomRoomRateCompliment > 0) || ($paxRoomRate > 0) || ($paxRoomRateCompliment > 0) || ($revNetRoomRate > 0) || ($revNetRoomRate < 0) || ($revNetRoomRateCompliment > 0) || ($revGrossRoomRate > 0) || ($revGrossRoomRateCompliment > 0) || ($revNonPackageRoomRate > 0) || ($revNonPackageRoomRateCompliment > 0)){
                        ProcedureQueryController::insertMarketStatistic($postingDate, $marketCategoryCode, $marketCode, $marketCompanyCode, $roomMarket, $roomMarketCompliment, $paxMarket, $paxMarketCompliment, $revNetMarket, $revNetMarketCompliment, $revGrossMarket, $revGrossMarketCompliment, $revNonPackageMarket, $revNonPackageMarketCompliment,
                            $businessSourceCode, $businessSourceCompanyCode, $roomBusinessSource, $roomBusinessSourceCompliment, $paxBusinessSource, $paxBusinessSourceCompliment, $revNetBusinessSource, $revNetBusinessSourceCompliment, $revGrossBusinessSource, $revGrossBusinessSourceCompliment, $revNonPackageBusinessSource, $revNonPackageBusinessSourceCompliment,
                            $roomTypeCode, $roomTypeCompanyCode, $roomRoomType, $roomRoomTypeCompliment, $paxRoomType, $paxRoomTypeCompliment, $revNetRoomType, $revNetRoomTypeCompliment, $revGrossRoomType, $revGrossRoomTypeCompliment, $revNonPackageRoomType, $revNonPackageRoomTypeCompliment,
                            $roomRateCode, $roomRateCompanyCode, $roomRoomRate, $roomRoomRateCompliment, $paxRoomRate, $paxRoomRateCompliment, $revNetRoomRate, $revNetRoomRateCompliment, $revGrossRoomRate, $revGrossRoomRateCompliment, $revNonPackageRoomRate, $revNonPackageRoomRateCompliment,
                            $marketingCode, $marketingBusinessSourceCode, $marketingCompanyCode, $roomMarketing, $roomMarketingCompliment, $paxMarketing, $paxMarketingCompliment, $revNetMarketing, $revNetMarketingCompliment, $revGrossMarketing, $revGrossMarketingCompliment, $revNonPackageMarketing, $revNonPackageMarketingCompliment, $revAllNetMarketing, $revAllGrossMarketing,
                            $countryCode, $countryStateCode, $countryCityCode, $roomCountry, $roomCountryCompliment, $paxCountry, $paxCountryCompliment, $revNetCountry, $revNetCountryCompliment, $revGrossCountry, $revGrossCountryCompliment, $revNonPackageCountry, $revNonPackageCountryCompliment, $revAllNetCountry, $revAllGrossCountry,
                            $nationalityCode, $nationalityCountryCode, $roomNationality, $roomNationalityCompliment, $paxNationality, $paxNationalityCompliment, $revNetNationality, $revNetNationalityCompliment, $revGrossNationality, $revGrossNationalityCompliment, $revNonPackageNationality, $revNonPackageNationalityCompliment, $revAllNetNationality, $revAllGrossNationality);

                        }
                    }
                }

            //Room Rate Inisialisai
                $roomRateCode = '';
                $roomRateCompanyCode = '';
                $roomRoomRate = 0;
                $roomRoomRateCompliment = 0;
                $paxRoomRate = 0;
                $paxRoomRateCompliment = 0;
                $revNetRoomRate = 0;
                $revNetRoomRateCompliment = 0;
                $revGrossRoomRate = 0;
                $revGrossRoomRateCompliment = 0;
                $revNonPackageRoomRate = 0;
                $revNonPackageRoomRateCompliment = 0;

            // Query Marketing //5
            // NETT / GROSS ALL REVENUE
                $query1SubUnion1xxxx = DB::table('sub_folio')
                    ->select(
                        'sub_folio.folio_number',
                        'sub_folio.belongs_to',
                        'sub_folio.account_code',
                        DB::raw('SUM(IF(cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount)), 0)) AS TotalAmount'),
                        DB::raw('SUM(IF(cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '" OR cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['TaxAndService']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount)), 0)) AS TotalAmount2'))
                    ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                    ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                    ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                    ->where('sub_folio.void','0')
                    ->where('cfg_init_account.sub_group_code','<>', GlobalVariableController::$accountSubGroup['AccountPayable'])
                    ->groupBy('sub_folio.breakdown1');

                $query2SubUnion1xxxx = DB::table($query1SubUnion1xxxx,'A')
                    ->select(
                        'A.folio_number',
                        'A.belongs_to',
                        DB::raw('SUM(A.TotalAmount) AS TotalAmount'),
                        DB::raw('SUM(A.TotalAmount2) AS TotalAmount2'))
                    ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                    ->groupBy('A.belongs_to');

                $query3SubUnion1xxxx = DB::table($query2SubUnion1xxxx, 'B')
                    ->select(
                        'folio.marketing_code',
                        'guest_detail.business_source_code',
                        'contact_person.company_code',
                        DB::raw('SUM(B.TotalAmount) AS TotalAmount'),
                        DB::raw('SUM(B.TotalAmount2) AS TotalAmount2'))
                    ->leftJoin('folio','B.belongs_to','folio.number')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->groupBy('folio.marketing_code','contact_person.company_code','guest_detail.business_source_code');

                $queryUnion1xxxx = DB::table($query3SubUnion1xxxx,'C')
                    ->select(
                        'C.marketing_code',
                        'C.business_source_code',
                        'C.company_code',
                        DB::raw('SUM(0) AS RoomMarket'),
                        DB::raw('SUM(0) AS RoomMarketCompliment'),
                        DB::raw('SUM(0) AS Pax'),
                        DB::raw('SUM(0) AS PaxCompliment'),
                        DB::raw('SUM(0) AS TotalAmount'),
                        DB::raw('SUM(0) AS TotalAmountCompliment'),
                        DB::raw('SUM(0) AS TotalAmount2'),
                        DB::raw('SUM(0) AS TotalAmountCompliment2'),
                        DB::raw('SUM(0) AS TotalAmount3'),
                        DB::raw('SUM(0) AS TotalAmountCompliment3'),
                        DB::raw('SUM(C.TotalAmount) AS TotalAllNet'),
                        DB::raw('SUM(C.TotalAmount2) AS TotalAllGross'))
                    ->groupBy('C.marketing_code','C.company_code', 'C.business_source_code');

            // NETT
                $query1SubUnion2xxxx = DB::table('sub_folio')
                    ->select(
                        'sub_folio.folio_number',
                        'sub_folio.belongs_to',
                        'sub_folio.account_code',
                        DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                    ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                    ->where('sub_folio.void','0')
                    ->whereRaw($queryConditionRoomCharge1)
                    ->groupBy('sub_folio.breakdown1');

                $query2SubUnion2xxxx = DB::table($query1SubUnion2xxxx,'A')
                    ->select(
                        'A.folio_number',
                        'A.belongs_to',
                        DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                    ->whereRaw($queryConditionRoomCharge2)
                    ->groupBy('A.belongs_to');


                $query3SubUnion2xxxx = DB::table($query2SubUnion2xxxx, 'B')
                    ->select(
                        'folio.marketing_code',
                        'guest_detail.business_source_code',
                        'contact_person.company_code',
                        DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount'),
                        DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment'))
                    ->leftJoin('folio','B.belongs_to','folio.number')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->groupBy('folio.marketing_code','contact_person.company_code','guest_detail.business_source_code');

                $queryUnion2xxxx = DB::table($query3SubUnion2xxxx,'C')
                    ->select(
                        'C.marketing_code',
                        'C.business_source_code',
                        'C.company_code',
                        DB::raw('SUM(0) AS RoomMarket'),
                        DB::raw('SUM(0) AS RoomMarketCompliment'),
                        DB::raw('SUM(0) AS Pax'),
                        DB::raw('SUM(0) AS PaxCompliment'),
                        DB::raw('SUM(C.TotalAmount) AS TotalAmount'),
                        DB::raw('SUM(C.TotalAmountCompliment) AS TotalAmountCompliment'),
                        DB::raw('SUM(0) AS TotalAmount2'),
                        DB::raw('SUM(0) AS TotalAmountCompliment2'),
                        DB::raw('SUM(0) AS TotalAmount3'),
                        DB::raw('SUM(0) AS TotalAmountCompliment3'),
                        DB::raw('SUM(0) AS TotalAllNet'),
                        DB::raw('SUM(0) AS TotalAllGross'))
                    ->groupBy('C.marketing_code','C.company_code','C.business_source_code');

            // GROSS
                $query1SubUnion3xxxx = DB::table('sub_folio')
                    ->select(
                        'sub_folio.folio_number',
                        'sub_folio.belongs_to',
                        'sub_folio.account_code',
                        DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                    ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                    ->where('sub_folio.void','0')
                    ->groupBy('sub_folio.breakdown1');

                $query2SubUnion3xxxx = DB::table($query1SubUnion3xxxx,'A')
                    ->select(
                        'A.folio_number',
                        'A.belongs_to',
                        DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                    ->whereRaw($queryConditionRoomCharge2)
                    ->groupBy('A.belongs_to');

                $queryUnion3xxxx = DB::table($query2SubUnion3xxxx,'B')
                    ->select(
                        'folio.marketing_code',
                        'guest_detail.business_source_code',
                        'contact_person.company_code',
                        DB::raw('SUM(0) AS RoomMarket'),
                        DB::raw('SUM(0) AS RoomMarketCompliment'),
                        DB::raw('SUM(0) AS Pax'),
                        DB::raw('SUM(0) AS PaxCompliment'),
                        DB::raw('SUM(0) AS TotalAmount'),
                        DB::raw('SUM(0) AS TotalAmountCompliment'),
                        DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount2'),
                        DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment2'),
                        DB::raw('SUM(0) AS TotalAmount3'),
                        DB::raw('SUM(0) AS TotalAmountCompliment3'),
                        DB::raw('SUM(0) AS TotalAllNet'),
                        DB::raw('SUM(0) AS TotalAllGross'))
                    ->leftJoin('folio','B.belongs_to','folio.number')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->groupBy('folio.marketing_code','contact_person.company_code','guest_detail.business_source_code');

            // NON PACKAGE
                $query1SubUnion4xxxx = DB::table('sub_folio')
                    ->select(
                        'sub_folio.folio_number',
                        'sub_folio.belongs_to',
                        'sub_folio.account_code',
                        DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                    ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")
                        AND (' .$queryConditionRoomCharge1. ' OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']). '"
                        OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']). '")')
                    ->where('sub_folio.void','0')
                    ->groupBy('breakdown1', 'sub_folio.breakdown2');

                $query2SubUnion4xxxx = DB::table($query1SubUnion4xxxx,'A')
                    ->select(
                        'A.folio_number',
                        'A.belongs_to',
                        DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                    ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                    ->whereRaw($queryConditionRoomCharge2)
                    ->groupBy('A.belongs_to');

                $queryUnion4xxxx = DB::table($query2SubUnion4xxxx,'B')
                    ->select(
                        'folio.marketing_code',
                        'guest_detail.business_source_code',
                        'contact_person.company_code',
                        DB::raw('SUM(0) AS RoomMarket'),
                        DB::raw('SUM(0) AS RoomMarketCompliment'),
                        DB::raw('SUM(0) AS Pax'),
                        DB::raw('SUM(0) AS PaxCompliment'),
                        DB::raw('SUM(0) AS TotalAmount'),
                        DB::raw('SUM(0) AS TotalAmountCompliment'),
                        DB::raw('SUM(0) AS TotalAmount2'),
                        DB::raw('SUM(0) AS TotalAmountCompliment2'),
                        DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount3'),
                        DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment3'),
                        DB::raw('SUM(0) AS TotalAllNet'),
                        DB::raw('SUM(0) AS TotalAllGross'))
                    ->leftJoin('folio','B.belongs_to','folio.number')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->groupBy('folio.marketing_code','contact_person.company_code','guest_detail.business_source_code');

                $queryMarketingUnion = DB::table('guest_in_house')
                    ->select(
                        'guest_in_house.marketing_code',
                        'guest_in_house.business_source_code',
                        'guest_in_house.company_code',
                        DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", 1, 0)) AS RoomMarket'),
                        DB::raw('SUM(IF(1=1, 1, 0)) AS RoomMarketCompliment'),
                        DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", (guest_in_house.adult + guest_in_house.child), 0)) AS Pax'),
                        DB::raw('SUM(guest_in_house.adult + guest_in_house.child) AS PaxCompliment'),
                        DB::raw('SUM(0) AS TotalAmount'),
                        DB::raw('SUM(0) AS TotalAmountCompliment'),
                        DB::raw('SUM(0) AS TotalAmount2'),
                        DB::raw('SUM(0) AS TotalAmountCompliment2'),
                        DB::raw('SUM(0) AS TotalAmount3'),
                        DB::raw('SUM(0) AS TotalAmountCompliment3'),
                        DB::raw('SUM(0) AS TotalAllNet'),
                        DB::raw('SUM(0) AS TotalAllGross'))
                    ->leftJoin('company', 'guest_in_house.business_source_code','company.code')
                    ->whereRaw('guest_in_house.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                    ->where('guest_in_house.compliment_hu','<>',GLobalVariableController::$roomStatus['HouseUse'])
                    ->groupBy('guest_in_house.marketing_code','guest_in_house.company_code','guest_in_house.business_source_code')
                    ->union($queryUnion1xxxx)
                    ->union($queryUnion2xxxx)
                    ->union($queryUnion3xxxx)
                    ->union($queryUnion4xxxx);

                $queryMarketing = DB::query()->fromSub($queryMarketingUnion,'Marketing')
                    ->select(
                        'Marketing.marketing_code',
                        'Marketing.company_code',
                        DB::raw('SUM(Marketing.RoomMarket) AS RoomMarket'),
                        DB::raw('SUM(Marketing.RoomMarketCompliment) AS RoomMarketCompliment'),
                        DB::raw('SUM(Marketing.Pax) AS Pax'),
                        DB::raw('SUM(Marketing.PaxCompliment) AS PaxCompliment'),
                        DB::raw('SUM(Marketing.TotalAmount) AS TotalAmount'),
                        DB::raw('SUM(Marketing.TotalAmountCompliment) AS TotalAmountCompliment'),
                        DB::raw('SUM(Marketing.TotalAmount2) AS TotalAmount2'),
                        DB::raw('SUM(Marketing.TotalAmountCompliment2) AS TotalAmountCompliment2'),
                        DB::raw('SUM(Marketing.TotalAmount3) AS TotalAmount3'),
                        DB::raw('SUM(Marketing.TotalAmountCompliment3) AS TotalAmountCompliment3'),
                        'Marketing.business_source_code',
                        DB::raw('SUM(Marketing.TotalAllNet) AS TotalAllNet'),
                        DB::raw('SUM(Marketing.TotalAllGross) AS TotalAllGross'))
                    ->groupBy('marketing_code','company_code','business_source_code')
                    ->get();

                if(!empty($queryMarketing)){
                    foreach($queryMarketing as $marketing){
                        $marketingCode = $marketing->marketing_code;
                        $marketingCompanyCode = $marketing->company_code;
                        $marketingBusinessSourceCode = $marketing->business_source_code;
                        $roomMarketing = $marketing->RoomMarket;
                        $roomMarketingCompliment = $marketing->RoomMarketCompliment;
                        $paxMarketing = $marketing->Pax;
                        $paxMarketingCompliment = $marketing->PaxCompliment;
                        $revNetMarketing = $marketing->TotalAmount;
                        $revNetMarketingCompliment = $marketing->TotalAmountCompliment;
                        $revGrossMarketing = $marketing->TotalAmount2;
                        $revGrossMarketingCompliment = $marketing->TotalAmountCompliment2;
                        $revNonPackageMarketing = $marketing->TotalAmount3;
                        $revNonPackageMarketingCompliment = $marketing->TotalAmountCompliment3;
                        $revAllNetMarketing = $marketing->TotalAllNet;
                        $revAllGrossMarketing = $marketing->TotalAllGross;

                        if(($roomMarketing > 0) || ($roomMarketingCompliment > 0) || ($paxMarketing > 0) || ($paxMarketingCompliment > 0) || ($revNetMarketing > 0) || ($revNetMarketing < 0) || ($revNetMarketingCompliment > 0) || ($revGrossMarketing > 0) || ($revGrossMarketingCompliment > 0) || ($revNonPackageMarketing > 0) || ($revNonPackageMarketingCompliment > 0) || ($revAllGrossMarketing > 0) || ($revAllNetMarketing > 0)){
                            ProcedureQueryController::insertMarketStatistic($postingDate, $marketCategoryCode, $marketCode, $marketCompanyCode, $roomMarket, $roomMarketCompliment, $paxMarket, $paxMarketCompliment, $revNetMarket, $revNetMarketCompliment, $revGrossMarket, $revGrossMarketCompliment, $revNonPackageMarket, $revNonPackageMarketCompliment,
                                $businessSourceCode, $businessSourceCompanyCode, $roomBusinessSource, $roomBusinessSourceCompliment, $paxBusinessSource, $paxBusinessSourceCompliment, $revNetBusinessSource, $revNetBusinessSourceCompliment, $revGrossBusinessSource, $revGrossBusinessSourceCompliment, $revNonPackageBusinessSource, $revNonPackageBusinessSourceCompliment,
                                $roomTypeCode, $roomTypeCompanyCode, $roomRoomType, $roomRoomTypeCompliment, $paxRoomType, $paxRoomTypeCompliment, $revNetRoomType, $revNetRoomTypeCompliment, $revGrossRoomType, $revGrossRoomTypeCompliment, $revNonPackageRoomType, $revNonPackageRoomTypeCompliment,
                                $roomRateCode, $roomRateCompanyCode, $roomRoomRate, $roomRoomRateCompliment, $paxRoomRate, $paxRoomRateCompliment, $revNetRoomRate, $revNetRoomRateCompliment, $revGrossRoomRate, $revGrossRoomRateCompliment, $revNonPackageRoomRate, $revNonPackageRoomRateCompliment,
                                $marketingCode, $marketingBusinessSourceCode, $marketingCompanyCode, $roomMarketing, $roomMarketingCompliment, $paxMarketing, $paxMarketingCompliment, $revNetMarketing, $revNetMarketingCompliment, $revGrossMarketing, $revGrossMarketingCompliment, $revNonPackageMarketing, $revNonPackageMarketingCompliment, $revAllNetMarketing, $revAllGrossMarketing,
                                $countryCode, $countryStateCode, $countryCityCode, $roomCountry, $roomCountryCompliment, $paxCountry, $paxCountryCompliment, $revNetCountry, $revNetCountryCompliment, $revGrossCountry, $revGrossCountryCompliment, $revNonPackageCountry, $revNonPackageCountryCompliment, $revAllNetCountry, $revAllGrossCountry,
                                $nationalityCode, $nationalityCountryCode, $roomNationality, $roomNationalityCompliment, $paxNationality, $paxNationalityCompliment, $revNetNationality, $revNetNationalityCompliment, $revGrossNationality, $revGrossNationalityCompliment, $revNonPackageNationality, $revNonPackageNationalityCompliment, $revAllNetNationality, $revAllGrossNationality);
                        }
                    }
                }

            //Marketing Inisialisasi
                $marketingCode = '';
                $marketingBusinessSourceCode = '';
                $marketingCompanyCode = '';
                $roomMarketing = 0;
                $roomMarketingCompliment = 0;
                $paxMarketing = 0;
                $paxMarketingCompliment= 0;
                $revNetMarketing = 0;
                $revNetMarketingCompliment = 0;
                $revGrossMarketing = 0;
                $revGrossMarketingCompliment = 0;
                $revNonPackageMarketing = 0;
                $revNonPackageMarketingCompliment = 0;
                $revAllNetMarketing = 0;
                $revAllGrossMarketing = 0;

            //Query Country
            // NETT / GROSS ALL REVENUE
            $query1SubUnion1xxxxx = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount)), 0)) AS TotalAmount'),
                    DB::raw('SUM(IF(cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '" OR cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['TaxAndService']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount)), 0)) AS TotalAmount2'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->where('cfg_init_account.sub_group_code','<>', GlobalVariableController::$accountSubGroup['AccountPayable'])
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion1xxxxx = DB::table($query1SubUnion1xxxxx,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(A.TotalAmount2) AS TotalAmount2'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->groupBy('A.belongs_to');

            $query3SubUnion1xxxxx = DB::table($query2SubUnion1xxxxx, 'B')
                ->select(
                    'contact_person.country_code',
                    'contact_person.state_code',
                    'contact_person.city_code',
                    DB::raw('SUM(B.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(B.TotalAmount2) AS TotalAmount2'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('contact_person.country_code','contact_person.state_code','contact_person.city_code');

            $queryUnion1xxxxx = DB::table($query3SubUnion1xxxxx,'C')
                ->select(
                    'C.country_code',
                    'C.state_code',
                    'C.city_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'),
                    DB::raw('SUM(C.TotalAmount) AS TotalAllNet'),
                    DB::raw('SUM(C.TotalAmount2) AS TotalAllGross'))
                ->groupBy('C.country_code','C.state_code', 'C.city_code');

        // NETT
            $query1SubUnion2xxxxx = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->whereRaw($queryConditionRoomCharge1)
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion2xxxxx = DB::table($query1SubUnion2xxxxx,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $query3SubUnion2xxxxx = DB::table($query2SubUnion2xxxxx, 'B')
                ->select(
                    'contact_person.country_code',
                    'contact_person.state_code',
                    'contact_person.city_code',
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('contact_person.country_code', 'contact_person.state_code','contact_person.city_code');

            $queryUnion2xxxxx = DB::table($query3SubUnion2xxxxx,'C')
                ->select(
                    'C.country_code',
                    'C.state_code',
                    'C.city_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(C.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(C.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'),
                    DB::raw('SUM(0) AS TotalAllNet'),
                    DB::raw('SUM(0) AS TotalAllGross'))
                ->groupBy('C.country_code','C.state_code','C.city_code');

        // GROSS
            $query1SubUnion3xxxxx = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion3xxxxx = DB::table($query1SubUnion3xxxxx,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion3xxxxx = DB::table($query2SubUnion3xxxxx,'B')
                ->select(
                    'contact_person.country_code',
                    'contact_person.state_code',
                    'contact_person.city_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount2'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'),
                    DB::raw('SUM(0) AS TotalAllNet'),
                    DB::raw('SUM(0) AS TotalAllGross'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('contact_person.country_code', 'contact_person.state_code','contact_person.city_code');

        // NON PACKAGE
            $query1SubUnion4xxxxx = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")
                    AND (' .$queryConditionRoomCharge1. ' OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']). '"
                    OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']). '")')
                ->where('sub_folio.void','0')
                ->groupBy('breakdown1', 'sub_folio.breakdown2');

            $query2SubUnion4xxxxx = DB::table($query1SubUnion4xxxxx,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion4xxxxx = DB::table($query2SubUnion4xxxxx,'B')
                ->select(
                    'contact_person.country_code',
                    'contact_person.state_code',
                    'contact_person.city_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount3'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment3'),
                    DB::raw('SUM(0) AS TotalAllNet'),
                    DB::raw('SUM(0) AS TotalAllGross'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('contact_person.country_code', 'contact_person.state_code','contact_person.city_code');

            $queryCountryUnion = DB::table('guest_in_house')
                ->select(
                    'guest_in_house.country_code',
                    'guest_in_house.state_code',
                    'guest_in_house.city_code',
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", 1, 0)) AS RoomMarket'),
                    DB::raw('SUM(IF(1=1, 1, 0)) AS RoomMarketCompliment'),
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", (guest_in_house.adult + guest_in_house.child), 0)) AS Pax'),
                    DB::raw('SUM(guest_in_house.adult + guest_in_house.child) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'),
                    DB::raw('SUM(0) AS TotalAllNet'),
                    DB::raw('SUM(0) AS TotalAllGross'))
                ->whereRaw('guest_in_house.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('guest_in_house.compliment_hu','<>',GLobalVariableController::$roomStatus['HouseUse'])
                ->groupBy('guest_in_house.country_code', 'guest_in_house.state_code','guest_in_house.city_code')
                ->union($queryUnion1xxxxx)
                ->union($queryUnion2xxxxx)
                ->union($queryUnion3xxxxx)
                ->union($queryUnion4xxxxx);;

            $queryCountry = DB::query()->fromSub($queryCountryUnion,'Country')
                ->select(
                    'Country.country_code',
                    'Country.state_code',
                    DB::raw('SUM(Country.RoomMarket) AS RoomMarket'),
                    DB::raw('SUM(Country.RoomMarketCompliment) AS RoomMarketCompliment'),
                    DB::raw('SUM(Country.Pax) AS Pax'),
                    DB::raw('SUM(Country.PaxCompliment) AS PaxCompliment'),
                    DB::raw('SUM(Country.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(Country.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(Country.TotalAmount2) AS TotalAmount2'),
                    DB::raw('SUM(Country.TotalAmountCompliment2) AS TotalAmountCompliment2'),
                    DB::raw('SUM(Country.TotalAmount3) AS TotalAmount3'),
                    DB::raw('SUM(Country.TotalAmountCompliment3) AS TotalAmountCompliment3'),
                    'Country.city_code',
                    DB::raw('SUM(Country.TotalAllNet) AS TotalAllNet'),
                    DB::raw('SUM(Country.TotalAllGross) AS TotalAllGross'))
                ->groupBy('country_code','state_code','city_code')
                ->get();

            if(!empty($queryCountry)){
                foreach($queryCountry as $country){
                    $countryCode = $country->country_code;
                    $countryStateCode = $country->state_code;
                    $countryCityCode = $country->city_code;
                    $roomCountry = $country->RoomMarket;
                    $roomCountryCompliment = $country->RoomMarketCompliment;
                    $paxCountry = $country->Pax;
                    $paxCountryCompliment = $country->PaxCompliment;
                    $revNetCountry = $country->TotalAmount;
                    $revNetCountryCompliment = $country->TotalAmountCompliment;
                    $revGrossCountry = $country->TotalAmount2;
                    $revGrossCountryCompliment = $country->TotalAmountCompliment2;
                    $revNonPackageCountry = $country->TotalAmount3;
                    $revNonPackageCountryCompliment = $country->TotalAmountCompliment3;
                    $revAllNetCountry = $country->TotalAllNet;
                    $revAllGrossCountry = $country->TotalAllGross;

                    if(($roomCountry > 0) || ($roomCountryCompliment > 0) || ($paxCountry > 0) || ($paxCountryCompliment > 0) || ($revNetCountry > 0) || ($revNetCountry < 0) || ($revNetCountryCompliment > 0) || ($revGrossCountry > 0) || ($revGrossCountryCompliment > 0) || ($revNonPackageCountry > 0) || ($revNonPackageCountryCompliment > 0) || ($revAllGrossCountry > 0) || ($revAllNetCountry > 0)){
                        ProcedureQueryController::insertMarketStatistic($postingDate, $marketCategoryCode, $marketCode, $marketCompanyCode, $roomMarket, $roomMarketCompliment, $paxMarket, $paxMarketCompliment, $revNetMarket, $revNetMarketCompliment, $revGrossMarket, $revGrossMarketCompliment, $revNonPackageMarket, $revNonPackageMarketCompliment,
                            $businessSourceCode, $businessSourceCompanyCode, $roomBusinessSource, $roomBusinessSourceCompliment, $paxBusinessSource, $paxBusinessSourceCompliment, $revNetBusinessSource, $revNetBusinessSourceCompliment, $revGrossBusinessSource, $revGrossBusinessSourceCompliment, $revNonPackageBusinessSource, $revNonPackageBusinessSourceCompliment,
                            $roomTypeCode, $roomTypeCompanyCode, $roomRoomType, $roomRoomTypeCompliment, $paxRoomType, $paxRoomTypeCompliment, $revNetRoomType, $revNetRoomTypeCompliment, $revGrossRoomType, $revGrossRoomTypeCompliment, $revNonPackageRoomType, $revNonPackageRoomTypeCompliment,
                            $roomRateCode, $roomRateCompanyCode, $roomRoomRate, $roomRoomRateCompliment, $paxRoomRate, $paxRoomRateCompliment, $revNetRoomRate, $revNetRoomRateCompliment, $revGrossRoomRate, $revGrossRoomRateCompliment, $revNonPackageRoomRate, $revNonPackageRoomRateCompliment,
                            $marketingCode, $marketingBusinessSourceCode, $marketingCompanyCode, $roomMarketing, $roomMarketingCompliment, $paxMarketing, $paxMarketingCompliment, $revNetMarketing, $revNetMarketingCompliment, $revGrossMarketing, $revGrossMarketingCompliment, $revNonPackageMarketing, $revNonPackageMarketingCompliment, $revAllNetMarketing, $revAllGrossMarketing,
                            $countryCode, $countryStateCode, $countryCityCode, $roomCountry, $roomCountryCompliment, $paxCountry, $paxCountryCompliment, $revNetCountry, $revNetCountryCompliment, $revGrossCountry, $revGrossCountryCompliment, $revNonPackageCountry, $revNonPackageCountryCompliment, $revAllNetCountry, $revAllGrossCountry,
                            $nationalityCode, $nationalityCountryCode, $roomNationality, $roomNationalityCompliment, $paxNationality, $paxNationalityCompliment, $revNetNationality, $revNetNationalityCompliment, $revGrossNationality, $revGrossNationalityCompliment, $revNonPackageNationality, $revNonPackageNationalityCompliment, $revAllNetNationality, $revAllGrossNationality);
                    }
                }
            }

        //Country Inisialisasi
            $countryCode = '';
            $countryStateCode = '';
            $countryCityCode = '';
            $roomCountry = 0;
            $roomCountryCompliment = 0;
            $paxCountry = 0;
            $paxCountryCompliment = 0;
            $revNetCountry = 0;
            $revNetCountryCompliment = 0;
            $revGrossCountry = 0;
            $revGrossCountryCompliment = 0;
            $revNonPackageCountry = 0;
            $revNonPackageCountryCompliment = 0;
            $revAllNetCountry = 0;
            $revAllGrossCountry = 0;

        // Query Nationality
         // NETT / GROSS ALL REVENUE
            $query1SubUnion1xxxxxz = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount)), 0)) AS TotalAmount'),
                    DB::raw('SUM(IF(cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '" OR cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['TaxAndService']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount)), 0)) AS TotalAmount2'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->where('cfg_init_account.sub_group_code','<>', GlobalVariableController::$accountSubGroup['AccountPayable'])
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion1xxxxxz = DB::table($query1SubUnion1xxxxxz,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(A.TotalAmount2) AS TotalAmount2'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->groupBy('A.belongs_to');

            $query3SubUnion1xxxxxz = DB::table($query2SubUnion1xxxxxz, 'B')
                ->select(
                    'contact_person.nationality_code',
                    'contact_person.country_code',
                    DB::raw('SUM(B.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(B.TotalAmount2) AS TotalAmount2'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('contact_person.nationality_code','contact_person.country_code');

            $queryUnion1xxxxxz = DB::table($query3SubUnion1xxxxxz,'C')
                ->select(
                    'C.nationality_code',
                    'C.country_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'),
                    DB::raw('SUM(C.TotalAmount) AS TotalAllNet'),
                    DB::raw('SUM(C.TotalAmount2) AS TotalAllGross'))
                ->groupBy('C.nationality_code','C.country_code');

        // NETT
            $query1SubUnion2xxxxxz = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->whereRaw($queryConditionRoomCharge1)
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion2xxxxxz = DB::table($query1SubUnion2xxxxxz,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $query3SubUnion2xxxxxz = DB::table($query2SubUnion2xxxxxz, 'B')
                ->select(
                    'contact_person.nationality_code',
                    'contact_person.country_code',
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('contact_person.nationality_code', 'contact_person.country_code');

            $queryUnion2xxxxxz = DB::table($query3SubUnion2xxxxxz,'C')
                ->select(
                    'C.nationality_code',
                    'C.country_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(C.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(C.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'),
                    DB::raw('SUM(0) AS TotalAllNet'),
                    DB::raw('SUM(0) AS TotalAllGross'))
                ->groupBy('C.nationality_code','C.country_code');

        // GROSS
            $query1SubUnion3xxxxxz = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('sub_folio.void','0')
                ->groupBy('sub_folio.breakdown1');

            $query2SubUnion3xxxxxz = DB::table($query1SubUnion3xxxxxz,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion3xxxxxz = DB::table($query2SubUnion3xxxxxz,'B')
                ->select(
                    'contact_person.nationality_code',
                    'contact_person.country_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount2'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'),
                    DB::raw('SUM(0) AS TotalAllNet'),
                    DB::raw('SUM(0) AS TotalAllGross'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('contact_person.nationality_code', 'contact_person.country_code');

        // NON PACKAGE
            $query1SubUnion4xxxxxz = DB::table('sub_folio')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.belongs_to',
                    'sub_folio.account_code',
                    DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '",(sub_folio.quantity*sub_folio.amount),-(sub_folio.quantity*sub_folio.amount))) AS TotalAmount'))
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->whereRaw('sub_folio.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")
                    AND (' .$queryConditionRoomCharge1. ' OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax']). '"
                    OR sub_folio.account_code="' .GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService']). '")')
                ->where('sub_folio.void','0')
                ->groupBy('breakdown1', 'sub_folio.breakdown2');

            $query2SubUnion4xxxxxz = DB::table($query1SubUnion4xxxxxz,'A')
                ->select(
                    'A.folio_number',
                    'A.belongs_to',
                    DB::raw('SUM(A.TotalAmount) AS TotalAmount'))
                ->leftJoin('cfg_init_account','A.account_code','cfg_init_account.code')
                ->whereRaw($queryConditionRoomCharge2)
                ->groupBy('A.belongs_to');

            $queryUnion4xxxxxz = DB::table($query2SubUnion4xxxxxz,'B')
                ->select(
                    'contact_person.nationality_code',
                    'contact_person.country_code',
                    DB::raw('SUM(0) AS RoomMarket'),
                    DB::raw('SUM(0) AS RoomMarketCompliment'),
                    DB::raw('SUM(0) AS Pax'),
                    DB::raw('SUM(0) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(IF(folio.compliment_hu <> "' .GlobalVariableController::$roomStatus['Compliment']. '", B.TotalAmount, 0)) AS TotalAmount3'),
                    DB::raw('SUM(B.TotalAmount) AS TotalAmountCompliment3'),
                    DB::raw('SUM(0) AS TotalAllNet'),
                    DB::raw('SUM(0) AS TotalAllGross'))
                ->leftJoin('folio','B.belongs_to','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->groupBy('contact_person.nationality_code', 'contact_person.country_code');

            $queryNationalityUnion = DB::table('guest_in_house')
                ->select(
                    'guest_in_house.nationality_code',
                    'guest_in_house.country_code',
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", 1, 0)) AS RoomMarket'),
                    DB::raw('SUM(IF(1=1, 1, 0)) AS RoomMarketCompliment'),
                    DB::raw('SUM(IF(guest_in_house.compliment_hu <> "' .GLobalVariableController::$roomStatus['Compliment']. '", (guest_in_house.adult + guest_in_house.child), 0)) AS Pax'),
                    DB::raw('SUM(guest_in_house.adult + guest_in_house.child) AS PaxCompliment'),
                    DB::raw('SUM(0) AS TotalAmount'),
                    DB::raw('SUM(0) AS TotalAmountCompliment'),
                    DB::raw('SUM(0) AS TotalAmount2'),
                    DB::raw('SUM(0) AS TotalAmountCompliment2'),
                    DB::raw('SUM(0) AS TotalAmount3'),
                    DB::raw('SUM(0) AS TotalAmountCompliment3'),
                    DB::raw('SUM(0) AS TotalAllNet'),
                    DB::raw('SUM(0) AS TotalAllGross'))
                ->whereRaw('guest_in_house.audit_date_unixx = UNIX_TIMESTAMP("' .$postingDate. '")')
                ->where('guest_in_house.compliment_hu','<>',GLobalVariableController::$roomStatus['HouseUse'])
                ->groupBy('guest_in_house.nationality_code', 'guest_in_house.country_code')
                ->union($queryUnion1xxxxxz)
                ->union($queryUnion2xxxxxz)
                ->union($queryUnion3xxxxxz)
                ->union($queryUnion4xxxxxz);;

            $queryNationality = DB::query()->fromSub($queryNationalityUnion,'Nationality')
                ->select(
                    'Nationality.nationality_code',
                    'Nationality.country_code',
                    DB::raw('SUM(Nationality.RoomMarket) AS RoomMarket'),
                    DB::raw('SUM(Nationality.RoomMarketCompliment) AS RoomMarketCompliment'),
                    DB::raw('SUM(Nationality.Pax) AS Pax'),
                    DB::raw('SUM(Nationality.PaxCompliment) AS PaxCompliment'),
                    DB::raw('SUM(Nationality.TotalAmount) AS TotalAmount'),
                    DB::raw('SUM(Nationality.TotalAmountCompliment) AS TotalAmountCompliment'),
                    DB::raw('SUM(Nationality.TotalAmount2) AS TotalAmount2'),
                    DB::raw('SUM(Nationality.TotalAmountCompliment2) AS TotalAmountCompliment2'),
                    DB::raw('SUM(Nationality.TotalAmount3) AS TotalAmount3'),
                    DB::raw('SUM(Nationality.TotalAmountCompliment3) AS TotalAmountCompliment3'),
                    DB::raw('SUM(Nationality.TotalAllNet) AS TotalAllNet'),
                    DB::raw('SUM(Nationality.TotalAllGross) AS TotalAllGross'))
                ->groupBy('nationality_code','country_code')
                ->get();

            if(!empty($queryNationality)){
                foreach($queryNationality as $nationality){
                    $nationalityCode = $nationality->nationality_code;
                    $nationalityCountryCode = $nationality->country_code;
                    $roomNationality = $nationality->RoomMarket;
                    $roomNationalityCompliment = $nationality->RoomMarketCompliment;
                    $paxNationality = $nationality->Pax;
                    $paxNationalityCompliment = $nationality->PaxCompliment;
                    $revNetNationality = $nationality->TotalAmount;
                    $revNetNationalityCompliment = $nationality->TotalAmountCompliment;
                    $revGrossNationality = $nationality->TotalAmount2;
                    $revGrossNationalityCompliment = $nationality->TotalAmountCompliment2;
                    $revNonPackageNationality = $nationality->TotalAmount3;
                    $revNonPackageNationalityCompliment = $nationality->TotalAmountCompliment3;
                    $revAllNetNationality = $nationality->TotalAllNet;
                    $revAllGrossNationality = $nationality->TotalAllGross;

                    if(($roomNationality > 0) || ($roomNationalityCompliment > 0) || ($paxNationality > 0) || ($paxNationalityCompliment > 0) || ($revNetNationality > 0) || ($revNetNationality < 0) || ($revNetNationalityCompliment > 0) || ($revGrossNationality > 0) || ($revGrossNationalityCompliment > 0) || ($revNonPackageNationality > 0) || ($revNonPackageNationalityCompliment > 0) || ($revAllNetNationality > 0) || ($revAllGrossNationality > 0)){
                        ProcedureQueryController::insertMarketStatistic($postingDate, $marketCategoryCode, $marketCode, $marketCompanyCode, $roomMarket, $roomMarketCompliment, $paxMarket, $paxMarketCompliment, $revNetMarket, $revNetMarketCompliment, $revGrossMarket, $revGrossMarketCompliment, $revNonPackageMarket, $revNonPackageMarketCompliment,
                            $businessSourceCode, $businessSourceCompanyCode, $roomBusinessSource, $roomBusinessSourceCompliment, $paxBusinessSource, $paxBusinessSourceCompliment, $revNetBusinessSource, $revNetBusinessSourceCompliment, $revGrossBusinessSource, $revGrossBusinessSourceCompliment, $revNonPackageBusinessSource, $revNonPackageBusinessSourceCompliment,
                            $roomTypeCode, $roomTypeCompanyCode, $roomRoomType, $roomRoomTypeCompliment, $paxRoomType, $paxRoomTypeCompliment, $revNetRoomType, $revNetRoomTypeCompliment, $revGrossRoomType, $revGrossRoomTypeCompliment, $revNonPackageRoomType, $revNonPackageRoomTypeCompliment,
                            $roomRateCode, $roomRateCompanyCode, $roomRoomRate, $roomRoomRateCompliment, $paxRoomRate, $paxRoomRateCompliment, $revNetRoomRate, $revNetRoomRateCompliment, $revGrossRoomRate, $revGrossRoomRateCompliment, $revNonPackageRoomRate, $revNonPackageRoomRateCompliment,
                            $marketingCode, $marketingBusinessSourceCode, $marketingCompanyCode, $roomMarketing, $roomMarketingCompliment, $paxMarketing, $paxMarketingCompliment, $revNetMarketing, $revNetMarketingCompliment, $revGrossMarketing, $revGrossMarketingCompliment, $revNonPackageMarketing, $revNonPackageMarketingCompliment, $revAllNetMarketing, $revAllGrossMarketing,
                            $countryCode, $countryStateCode, $countryCityCode, $roomCountry, $roomCountryCompliment, $paxCountry, $paxCountryCompliment, $revNetCountry, $revNetCountryCompliment, $revGrossCountry, $revGrossCountryCompliment, $revNonPackageCountry, $revNonPackageCountryCompliment, $revAllNetCountry, $revAllGrossCountry,
                            $nationalityCode, $nationalityCountryCode, $roomNationality, $roomNationalityCompliment, $paxNationality, $paxNationalityCompliment, $revNetNationality, $revNetNationalityCompliment, $revGrossNationality, $revGrossNationalityCompliment, $revNonPackageNationality, $revNonPackageNationalityCompliment, $revAllNetNationality, $revAllGrossNationality);
                    }
                }
            }

        return 4;
    }

    public static function postFBStatistic($postingDate){
        $postingDate = FormatController::formatDate($postingDate);
        ProcedureQueryController::deleteFBStatistic($postingDate);

        $querySubUnion1 = DB::table('pos_check_transaction')
            ->select(
                'pos_check_transaction.check_number',
                'pos_check.outlet_code',
                DB::raw('IF(cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Food']. '", guest_detail.adult, 0) AS Adult'),
                DB::raw('IF(cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Food']. '", guest_detail.child, 0) AS Child'),
                DB::raw('IF(cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Beverage']. '", guest_detail.adult, 0) AS AdultBeverage'),
                DB::raw('IF(cfg_init_account.item_group_code = "' .GlobalVariableController::$inventoryItemGroup['Beverage']. '", guest_detail.child, 0) AS ChildBeverage'))
            ->leftJoin('pos_check','pos_check_transaction.check_number','pos_check.number')
            ->leftJoin('sub_folio', 'pos_check_transaction.sub_folio_id', 'sub_folio.id_log')
            ->leftJoin('cfg_init_sub_department', 'sub_folio.sub_department_code', 'cfg_init_sub_department.code')
            ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
            ->leftJoin('folio','pos_check.folio_number','folio.number')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('pos_cfg_init_product','pos_check_transaction.product_code','pos_cfg_init_product.code')
            ->leftJoin('pos_cfg_init_product_group','pos_cfg_init_product.group_code','pos_cfg_init_product_group.code')
            ->whereRaw('sub_folio.audit_date_unixx= UNIX_TIMESTAMP("' .$postingDate. '")')
            ->where('sub_folio.void','0')
            ->where('cfg_init_sub_department.department_code', ConfigurationController::value(null,GlobalVariableController::$configurationCategory['GlobalDepartment'],GlobalVariableController::$configurationName['DFoodBeverage']))
            ->groupBy('pos_check_transaction.check_number', 'cfg_init_account.item_group_code')
            ->distinct();

        $querySubUnion2 = DB::table($querySubUnion1, 'A')
            ->select(
                'A.check_number AS check_number',
                'A.outlet_code AS OutletCode',
                DB::raw('SUM(A.Adult) AS Adult'),
                DB::raw('SUM(A.Child) AS Child'),
                DB::raw('IF(SUM(A.Adult) > 0, 0, SUM(A.AdultBeverage)) AS AdultBeverage'),
                DB::raw('IF(SUM(A.Child) > 0, 0, SUM(A.ChildBeverage)) AS ChildBeverage'),
                DB::raw('((100/2) - 50) AS NettFood'),
                DB::raw('((100/2) - 50) AS NettBeverage'))
            ->groupBy('A.check_number');

        $queryUnion1 = DB::table($querySubUnion2, 'B')
            ->select(
                'B.OutletCode',
                DB::raw('SUM(B.Adult) AS Adult'),
                DB::raw('SUM(B.Child) AS Child'),
                DB::raw('SUM(B.AdultBeverage) AS AdultBeverage'),
                DB::raw('SUM(B.ChildBeverage) AS ChildBeverage'),
                'B.NettFood',
                'B.NettBeverage')
            ->groupBy('B.OutletCode');

        $querySub1 = DB::table('sub_folio')
            ->select(
                'pos_check.outlet_code AS OutletCode',
                DB::raw('"0" AS Adult'),
                DB::raw('"0" AS Child'),
                DB::raw('"0" AS AdultBeverage'),
                DB::raw('"0" AS ChildBeverage'),
                DB::raw('SUM(IF(cfg_init_account.item_group_code="' .GlobalVariableController::$inventoryItemGroup['Food']. '", (sub_folio.amount * IF(cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", sub_folio.quantity, -sub_folio.quantity), IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Credit']. '", sub_folio.quantity, -sub_folio.quantity))), 0)) AS NettFood'),
                DB::raw('SUM(IF(cfg_init_account.item_group_code="' .GlobalVariableController::$inventoryItemGroup['Beverage']. '", (sub_folio.amount * IF(cfg_init_account_sub_group.group_code="' .GlobalVariableController::$accountGroup['Charge']. '", IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Debit']. '", sub_folio.quantity, -sub_folio.quantity), IF(sub_folio.type_code="' .GlobalVariableController::$transactionType['Credit']. '", sub_folio.quantity, -sub_folio.quantity))), 0)) AS NettBeverage'))
            ->leftJoin('folio','sub_folio.folio_number','folio.number')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
            ->leftJoin('pos_check','guest_detail.room_number','pos_check.number')
            ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
            ->whereRaw('sub_folio.audit_date_unixx= UNIX_TIMESTAMP("' .$postingDate. '")')
            ->where('sub_folio.void','0')
            ->whereRaw('(cfg_init_account.item_group_code="' .GlobalVariableController::$inventoryItemGroup['Food']. '" OR cfg_init_account.item_group_code="' .GlobalVariableController::$inventoryItemGroup['Beverage']. '")')
            ->whereRaw('IFNULL(pos_check.number, "") <> ""')
            ->groupBy('pos_check.outlet_code')
            ->union($queryUnion1);

        $queryFBStatistic = DB::query()->fromSub($querySub1,'FBStatistic')
            ->select(
                'FBStatistic.OutletCode',
                DB::raw('SUM(IFNULL(FBStatistic.Adult, 0)) AS Adult'),
                DB::raw('SUM(IFNULL(FBStatistic.Child, 0)) AS Child'),
                DB::raw('SUM(IFNULL(FBStatistic.AdultBeverage, 0)) AS AdultBeverage'),
                DB::raw('SUM(IFNULL(FBStatistic.ChildBeverage, 0)) AS ChildBeverage'),
                DB::raw('SUM(IFNULL(FBStatistic.NettFood, 0)) AS NettFood'),
                DB::raw('SUM(IFNULL(FBStatistic.NettBeverage, 0)) AS NettBeverage'))
            ->groupBy('FBStatistic.OutletCode')
            ->get();

        if(count($queryFBStatistic) <> 0){
            foreach($queryFBStatistic as $fbStatistic){
                ProcedureQueryController::insertFBStatistic($postingDate, $fbStatistic->OutletCode, $fbStatistic->Adult, $fbStatistic->Child, $fbStatistic->AdultBeverage, $fbStatistic->ChildBeverage, $fbStatistic->NettFood, $fbStatistic->NettBeverage);
            }
        }

        return 5;
    }

    public static function updateGuestInHouseComplimentHU($postingDate, $userID){
        $postingDate = FormatController::formatDate($postingDate);
        $complimentHU = '';
        $queryInHouse = Folio::select(
            'folio.number',
            'folio.member_code',
            'folio.group_code',
            'folio.marketing_code',
            'folio.voucher_number',
            'folio.notes',
            'folio.compliment_hu',
            'contact_person.title_code',
            'contact_person.full_name',
            'contact_person.street',
            'contact_person.city_code',
            'contact_person.city',
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
            'guest_detail.arrival',
            'guest_detail.departure',
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
            'guest_detail.booking_source_code')
        ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
        ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
        ->whereRaw('(((guest_detail.arrival_unixx<>guest_detail.departure_unixx) AND (guest_detail.arrival_unixx<=UNIX_TIMESTAMP("' .FormatController::formatDateTime($postingDate). '") AND guest_detail.departure_unixx>UNIX_TIMESTAMP("' .FormatController::formatDateTime($postingDate). '")))
            OR ((guest_detail.arrival_unixx=guest_detail.departure_unixx) AND (guest_detail.arrival_unixx>=UNIX_TIMESTAMP("' .FormatController::formatDateTime($postingDate). '") AND guest_detail.departure_unixx<=UNIX_TIMESTAMP("' .FormatController::formatDateTime($postingDate). '"))))')
        ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
        ->where('folio.status_code','<>', GlobalVariableController::$folioStatus['CancelCheckIn'])
        ->get();

        if(count($queryInHouse) > 0){
            foreach($queryInHouse as $inHouse){
                if(ProcedureQueryController::isVoucherComplimentStillActive($inHouse->voucher_number, $inHouse->arrival, $postingDate) && ProcedureQueryController::GetVoucherType($inHouse->voucher_number) == GlobalVariableController::$voucherType['Compliment']){
                    $complimentHU = GlobalVariableController::$roomStatus['Compliment'];
                    if($complimentHU <> $inHouse->compliment_hu){
                        ProcedureQueryController::updateFolioComplimentHu($inHouse->number, $complimentHU, $userID);
                    }
                } else {
                    if(HelperController::isScheduledRate($inHouse->number, $postingDate)){
                        $complimentHU = HelperController::getScheduledRateComplimentHu($inHouse->number, $postingDate);
                        if($complimentHU <> $inHouse->compliment_hu){
                            ProcedureQueryController::updateFolioComplimentHu($inHouse->number, $complimentHU, $userID);
                        }
                    } else {
                        if($inHouse->voucher_number <> '' && FormatController::incDay(FormatController::formatDate($inHouse->arrival), ProcedureQueryController::getVoucherNights($inHouse->voucher_number)) == $postingDate){
                            ProcedureQueryController::updateFolioComplimentHu($inHouse->number, '', $userID);
                        }
                    }
                }
            }
        }

        return 6;
    }

    public static function processMemberPointExpire($postingDate, $userID){
        self::updateProcedure('member_point_expire(?,?)',[
            FormatController::formatDateTime($postingDate), $userID
        ]);

        return 7;
    }

    public static function processVoucherExpire($postingDate, $userID){
        $queryVoucher = DB::table('voucher')
            ->select(
                'voucher.number',
                'voucher.account_code',
                'voucher.price')
            ->where('voucher.expire_date',FormatController::formatDateTime($postingDate))
            ->where('voucher.type_code', GlobalVariableController::$voucherType['Sale'])
            ->where('voucher.status_code', GlobalVariableController::$voucherStatus['Active'])
            ->where('voucher.status_code_sold', GlobalVariableController::$voucherStatusSold['Sold'])
            ->orderBy('voucher.number')
            ->get();

        if(count($queryVoucher) > 0){
            foreach($queryVoucher as $voucher){
                $refNumber = self::getJournalRefNumber(GlobalVariableController::$journalPrefix['Receive'], $postingDate);

                // Master
                self::insertJournal($refNumber, '', '', GlobalVariableController::$journalType['Other'], GlobalVariableController::$journalGroup['Receiving'], $postingDate, 'Voucher Expire', '', '', $userID);

                $voucherNumber = $voucher->number;
                $voucherAmount = $voucher->price;

                // Detail Debit;
                self::insertJournalDetail($refNumber, ConfigurationController::value(null, GlobalVariableController ::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDAccounting']),
                    ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalJournalAccount'], GlobalVariableController::$configurationName['JAAPVoucher']), $voucherAmount,  GlobalVariableController::$transactionType['Debit'],
                    'Voucher Expire: ' .$voucherNumber, $voucherNumber, $userID);
                self::insertJournalDetail($refNumber, ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDAccounting']),
                    ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalJournalAccount'], GlobalVariableController::$configurationName['JAIncomeVoucherExpire']), $voucherAmount,  GlobalVariableController::$transactionType['Credit'],
                    'Voucher Expire: ' .$voucherNumber, $voucherNumber, $userID);

                self::updateVoucherStatus($voucherNumber, GlobalVariableController::$voucherStatus['Expire'], $userID);

            }
        }

        return 8;
    }

    public static function insertRoomStatus(){
        $queryRoomUnavailable = DB::table('room_unavailable')
            ->select(
                'room_unavailable.room_number',
                'room_unavailable.status_code')
            ->whereDate('from_date','<=', FormatController::formatDate(AuditLogController::auditDate()))
            ->whereDate('to_date','>=', FormatController::formatDate(AuditLogController::auditDate()));

        $queryFolio = DB::table('folio')
                ->select(
                    DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS FullName'),
                    'guest_detail.room_number')
                ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
                ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
                ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio']);

        $queryRoom = DB::table('cfg_init_room')
            ->select(
                'cfg_init_room.number',
                DB::raw('IF(IFNULL(RoomUnavailable.status_code, "")<>"", RoomUnavailable.status_code, CONCAT(IF(IFNULL(FolioX.FullName, "") <> "", "O", "V"), cfg_init_room.status_code)) AS StatusRoom'))
            ->leftJoinSub($queryRoomUnavailable, 'RoomUnavailable', function($join){
                $join->on('cfg_init_room.number', 'RoomUnavailable.room_number');
            })
            ->leftJoinSub($queryFolio, 'FolioX', function($join){
                $join->on('cfg_init_room.number', 'FolioX.room_number');
            })
            // ->where('"A"','"A"')
            ->orderBy('cfg_init_room.id_sort')
            ->get();

        if(count($queryRoom) > 0) {
            foreach($queryRoom as $room){
                self::insertProcedure('room_status(?,?,?)',[
                    FormatController::formatDate(AuditLogController::auditDate()), $room->number, $room->StatusRoom
                ]);
            }
        }

        return 0;
    }

    public static function updateGuestDepositSubDepartment($idLog, $subDepartmentCode, $isShowCorrection, $userID){

        if($isShowCorrection){
            self::updateProcedure('guest_deposit_sub_department_code2(?,?,?)',[
                $idLog, $subDepartmentCode, $userID
            ]);
        } else {
            $correctionBreakdown = HelperController::getGuestDepositCorrectionBreakdownByIdLog($idLog);
            self::updateProcedure('guest_deposit_sub_department_code1(?,?,?)',[
                $correctionBreakdown, $subDepartmentCode, $userID
            ]);
        }
    }

    public static function updateGuestDepositRemark($idLog, $remark, $userID){
        self::updateProcedure('guest_deposit_remark(?,?,?)',[
            $idLog, $remark, $userID
        ]);
    }

    public static function updateGuestDepositDocumentNumber($idLog, $documentNumber, $userID){
        self::updateProcedure('guest_deposit_document_number(?,?,?)',[
            $idLog, $documentNumber, $userID
        ]);
    }

    public static function updateSubFolioSubDepartment($idLog, $subDepartmentCode, $isShowProperties, $userID){

        if($isShowProperties){
            $breakdown1 = HelperController::getSubFolioBreakdown1ByIdLog($idLog);
            $breakdown2 = HelperController::getSubFolioBreakdown2ByIdLog($idLog);
            self::updateProcedure('sub_folio_sub_department_code2(?,?,?,?)',[
                $breakdown1, $breakdown2, $subDepartmentCode, $userID
            ]);
        } else {
            $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdownByIdLog($idLog);
            self::updateProcedure('sub_folio_sub_department_code1(?,?,?)',[
                $correctionBreakdown, $subDepartmentCode, $userID
            ]);
        }
    }

    public static function updateSubFolioRemark($idLog, $remark, $userID){
        $breakdown1 = HelperController::getSubFolioBreakdown1ByIdLog($idLog);
        $breakdown2 = HelperController::getSubFolioBreakdown2ByIdLog($idLog);
        self::updateProcedure('sub_folio_remark(?,?,?,?)',[
            $breakdown1, $breakdown2, $remark, $userID
        ]);
    }

    public static function updateSubFolioDocumentNumber($idLog, $documentNumber, $userID){
        $breakdown1 = HelperController::getSubFolioBreakdown1ByIdLog($idLog);
        $breakdown2 = HelperController::getSubFolioBreakdown2ByIdLog($idLog);
        self::updateProcedure('sub_folio_document_number(?,?,?,?)',[
            $breakdown1, $breakdown2, $documentNumber, $userID
        ]);
    }

    public static function updateSubFolioDirectBillCode($idLog, $company, $userID){
        self::updateProcedure('sub_folio_direct_bill_code_by_id_log(?,?,?)',[
            $idLog, $company, $userID
        ]);
    }

    public static function updateUserGroup($code, $form, $report, $special, $keylock, $reservation, $deposit, $inHouse, $walkIn, $folio, $folioHistory, $floorPlan, $company, $invoice, $memberVoucherGift, $previewReport, $printInvoiceCount, $saMaxDiscountPercent, $saMaxDiscountAmount, $userId){
        self::updateProcedure('user_group(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            //TODO access payment by AP AR
            $code, $form, $report, $special, $keylock, $reservation, $deposit, $inHouse, $walkIn, $folio, $folioHistory, $floorPlan, $company, $invoice, $memberVoucherGift, $previewReport,'', $printInvoiceCount, $saMaxDiscountPercent, $saMaxDiscountAmount, $userId
        ]);
    }

    public static function insertReservationExtraChargeBreakdown($reservationExtraChargeid, $outletCode, $productCode, $subDepartmentCode, $accountCode, $companyCode, $quantity, $isAmountPercent, $amount, $perPax, $includeChild,
        $remark, $taxAndServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId){
        self::insertProcedure('reservation_extra_charge_breakdown(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $reservationExtraChargeid, HelperController::ifNull($outletCode), HelperController::ifNull($productCode), $subDepartmentCode, $accountCode, HelperController::ifNull($companyCode), $quantity, HelperController::trueFalse($isAmountPercent), $amount, HelperController::trueFalse($perPax), HelperController::trueFalse($includeChild),
            $remark, $taxAndServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, HelperController::trueFalse($perPaxExtra), $userId
        ]);
    }

    public static function updateReservationExtraChargeBreakdown($idLog, $outletCode, $productCode, $subDepartmentCode, $accountCode, $companyCode, $quantity, $isAmountPercent, $amount, $perPax, $includeChild,
        $remark, $taxAndServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, $perPaxExtra, $userId){
        self::updateProcedure('reservation_extra_charge_breakdown(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $idLog, HelperController::ifNull($outletCode), HelperController::ifNull($productCode), $subDepartmentCode, $accountCode, HelperController::ifNull($companyCode), $quantity, HelperController::trueFalse($isAmountPercent), $amount, HelperController::trueFalse($perPax), HelperController::trueFalse($includeChild),
            $remark, $taxAndServiceCode, $chargeFrequencyCode, $maxPax, $extraPax, HelperController::trueFalse($perPaxExtra), $userId
        ]);
    }

    public static function deleteReservationExtraChargeBreakdown($idLog, $userId){
        self::deleteProcedure('reservation_extra_charge_breakdown(?,?)',[
            $idLog, $userId
        ]);
    }

    public static function getSubFolioBreakdownAmountForeign($correctionBreakdown){
        $breakdownAmount = SubFolio::select(
            DB::raw('SUM(IF(type_code="' .GlobalVariableController::$transactionType['Debit']. '",(quantity * amount_foreign),-(quantity * amount_foreign))) AS TotalAmount'))
            ->where('correction_breakdown',$correctionBreakdown)
            ->where('void','0')
            ->groupBy('correction_breakdown')
            ->first();
        if(!empty($breakdownAmount)){
            $breakdownAmount = $breakdownAmount->TotalAmount;
        } else {
            $breakdownAmount = 0;
        }
        return $breakdownAmount;
    }

    public static function getSubFolioBreakdownAmountForeign2($correctionBreakdown, $breakdown2){
        $breakdownAmount = SubFolio::select(
            DB::raw('SUM(IF(type_code="' .GlobalVariableController::$transactionType['Debit']. '",(quantity * amount_foreign),-(quantity * amount_foreign))) AS TotalAmount'))
            ->where('correction_breakdown',$correctionBreakdown)
            ->where('breakdown2', $breakdown2)
            ->where('void','0')
            ->groupBy('correction_breakdown', 'breakdown2')
            ->first();
        if(!empty($breakdownAmount)){
            $breakdownAmount = $breakdownAmount->TotalAmount;
        } else {
            $breakdownAmount = 0;
        }
        return $breakdownAmount;
    }

    public static function getSubFolioBreakdown1AmountForeign2($breakdown1, $breakdown2){
        $breakdownAmount = SubFolio::select(
            DB::raw('SUM(IF(type_code="' .GlobalVariableController::$transactionType['Debit']. '",(quantity * amount_foreign),-(quantity * amount_foreign))) AS TotalAmount'))
            ->where('breakdown1',$breakdown1)
            ->where('breakdown2', $breakdown2)
            ->where('void','0')
            ->groupBy('breakdown1')
            ->first();
        if(!empty($breakdownAmount)){
            $breakdownAmount = FormatController::round3($breakdownAmount->TotalAmount);
        } else {
            $breakdownAmount = 0;
        }
        return $breakdownAmount;
    }

    public static function insertCheckTransaction($checkNumber, $captainOrderID, $subFolioID, $inventoryCode, $tenanCode, $seatNumber, $productCode, $pricePurchase, $priceOriginal, $price, $discount, $tax, $service, $cardCharge, $folioTransfer, $isCompliment, $isFree, $userID){
        Self::insertProcedure('pos_check_transaction(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $checkNumber, $captainOrderID, $subFolioID, $inventoryCode, $tenanCode, $seatNumber, $productCode, $pricePurchase, $priceOriginal, $price, $discount, $tax, $service, $cardCharge, $folioTransfer, HelperController::trueFalse($isCompliment), HelperController::trueFalse($isFree), $userID
        ]);

        return Self::getIDLogTable('pos_check_transaction', $userID);
    }
// Phone Book
    public static function insertPhoneBook($typeCode, $titleCode, $fullName, $phone1, $phone2, $whatsapp, $facebook, $twitter, $yahooMessenger, $email,
        $website, $street, $city, $countryCode, $stateCode, $postalCode, $jobTitle, $companyCode, $remark, $userID){

            Self::insertProcedure('phone_book_web(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $typeCode, $titleCode, $fullName, $phone1, $phone2, $whatsapp, $facebook, $twitter, $yahooMessenger, $email, $website,
                $street, $city, $countryCode, $stateCode, $postalCode, $jobTitle, $companyCode, $remark, $userID
        ]);
    }

    public static function updatePhoneBook($idLog, $typeCode, $titleCode, $fullName, $phone1, $phone2, $whatsapp, $facebook, $twitter, $yahooMessenger, $email,
        $website, $street, $city, $countryCode, $stateCode, $postalCode, $jobTitle, $companyCode, $remark, $userID){

            Self::updateProcedure('phone_book_web(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                $idLog, $typeCode, $titleCode, $fullName, $phone1, $phone2, $whatsapp, $facebook, $twitter, $yahooMessenger, $email, $website,
                $street, $city, $countryCode, $stateCode, $postalCode, $jobTitle, $companyCode, $remark, $userID
        ]);
    }

    public static function deletePhoneBook($idLog, $userID){
        self::deleteProcedure('phone_book(?,?)', [
            $idLog, $userID
        ]);
    }
// Lost and Found
    public static function insertLostAndFound($isLost, $item, $color, $location, $who, $value, $currentLocation, $datePosting, $isReturn, $dateReturn, $returnBy,
        $owner, $phone, $notes, $userID){

            Self::insertProcedure('lost_and_found(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                HelperController::trueFalse($isLost), HelperController::ifNull($item), HelperController::nullColor($color), HelperController::ifNull($location), HelperController::ifNull($who), $value, HelperController::ifNull($currentLocation), FormatController::formatDate($datePosting), HelperController::trueFalse($isReturn), FormatController::formatDate($dateReturn), HelperController::ifNull($returnBy),
                HelperController::ifNull($owner), HelperController::ifNull($phone), HelperController::ifNull($notes), $userID
        ]);
    }

    public static function updateLostAndFound($isLost, $item, $color, $location, $who, $value, $currentLocation, $datePosting, $isReturn, $dateReturn, $returnBy,
        $owner, $phone, $notes, $idLog, $userID){

            Self::updateProcedure('lost_and_found(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                HelperController::trueFalse($isLost), HelperController::ifNull($item), HelperController::nullColor($color), HelperController::ifNull($location), HelperController::ifNull($who), $value, HelperController::ifNull($currentLocation), FormatController::formatDate($datePosting), HelperController::trueFalse($isReturn), FormatController::formatDate($dateReturn), HelperController::ifNull($returnBy),
                HelperController::ifNull($owner), HelperController::ifNull($phone), HelperController::ifNull($notes), $idLog, $userID
        ]);
    }

    public static function deleteLostAndFound($idLog, $userID){
        self::deleteProcedure('lost_and_found(?,?)', [
            $idLog, $userID
        ]);
    }

    public static function updateLostAndFoundActive($idLog, $isActive, $userID){
        self::updateProcedure('lost_and_found_active(?,?,?)', [
            $idLog, HelperController::trueFalse($isActive), $userID
        ]);
    }
    // City Ledger
    public static function insertInvoice($invoiceNumber, $companyCode, $contactPersonID, $issuedDate, $dueDate, $remark, $userID){
        self::insertProcedure('invoice(?,?,?,?,?,?,?)',[
            $invoiceNumber, $companyCode, $contactPersonID, $issuedDate, $dueDate, $remark, $userID
        ]);
    }

    public static function updateInvoice($invoiceNumber, $companyCode, $issuedDate, $dueDate, $remark, $userID){
        self::updateProcedure('invoice(?,?,?,?,?,?)',[
            $invoiceNumber, $companyCode, $issuedDate, $dueDate, $remark, $userID
        ]);
    }

    public static function deleteInvoice($invoiceNumber, $refNumber, $userID){
        self::deleteProcedure('invoice(?,?,?)',[
            $invoiceNumber, $refNumber, $userID
        ]);
    }

    public static function insertInvoiceItem($invoiceNumber, $subFolioID, $folioNumber, $amount, $amountCharged, $defaultCurrencyCode, $amountChargedForeign, $exchangeRate, $currencyCode, $remark, $typeCode, $userID){
            self::insertProcedure('invoice_item(?,?,?,?,?,?,?,?,?,?,?,?)',[
                $invoiceNumber, $subFolioID, $folioNumber, $amount, $amountCharged, $defaultCurrencyCode, $amountChargedForeign, $exchangeRate, $currencyCode, HelperController::ifNull($remark), $typeCode, $userID
            ]);
    }

    public static function deleteInvoiceItem($invoiceNumber, $userID){
        self::deleteProcedure('invoice_item(?,?)', [
            $invoiceNumber, $userID
        ]);
    }

    public static function updateInvoiceRefNumber($number, $refNumber){
        self::updateProcedure('invoice_ref_number(?,?)',[
            $number, $refNumber
        ]);
    }

    public static function deleteJournal($refNumber, $userID){
        self::deleteProcedure('acc_journal(?,?)', [
            $refNumber, $userID
        ]);
    }

    public static function updateDirectBillByIDLog($idLog, $directBillCode, $userID){
        self::updateProcedure('sub_folio_direct_bill_code(?,?,?)',[
            $idLog, $directBillCode, $userID
        ]);
    }

    public static function updateDirectBill($folioNumber, $directBillCodeBefore, $directBillCodeAfter, $userID){
        self::updateProcedure('sub_folio_direct_bill_code(?,?,?,?)',[
            $folioNumber, $directBillCodeBefore, $directBillCodeAfter, $userID
        ]);
    }

    // Invoice Payment
    public static function insertInvoicePayment($invoiceNumber, $subFolioID, $folioNumber, $refNumber, $amount, $defaultCurrencyCode, $amountForeign, $exchangeRate, $currencyCode, $amountActual,
        $exchangeRateActual, $date, $remark, $userID){
        self::insertProcedure('invoice_payment(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $invoiceNumber, $subFolioID, $folioNumber, $refNumber, $amount, $defaultCurrencyCode, $amountForeign, $exchangeRate, $currencyCode, $amountActual,
            $exchangeRateActual, $date, HelperController::ifNull($remark), $userID
        ]);
    }

    public static function deleteInvoicePayment($invoiceNumber, $userID){
        Self::deleteProcedure('invoice_payment(?,?)',[
            $invoiceNumber, $userID
        ]);
    }

    public static function updateInvoicePaid($invoiceNumber, $userID){
        Self::updateProcedure('invoice_paid(?,?)',[
            $invoiceNumber, $userID
        ]);
    }

    public static function updateInvoiceUnpaid($invoiceNumber, $userID){
        Self::updateProcedure('invoice_unpaid(?,?)',[
            $invoiceNumber, $userID
        ]);
    }

    public static function updateInvoicePrintCount($invoiceNumber){
        Self::updateProcedure('invoice_print_count(?,?)',[
            $invoiceNumber, self::getUserLogin()
        ]);
    }

    public static function insertCreditCardReconciliation($journalAccountCode, $refNumber, $date, $amountReceive, $userID){
        Self::insertProcedure('acc_credit_card_recon(?,?,?,?,?)',[
            $journalAccountCode, $refNumber, $date, $amountReceive, $userID
        ]);

        return self::getIDLogTable('acc_credit_card_recon',$userID);
    }

    public static function insertCreditCardReconciliationDetail($accCreditCardReconID, $guestDepositID, $subFolioID, $amount, $remark, $userID){
        Self::insertProcedure('acc_credit_card_recon_detail(?,?,?,?,?,?)',[
            $accCreditCardReconID, $guestDepositID, $subFolioID, $amount, HelperController::ifNull($remark), $userID
        ]);

    }

    public static function deleteAccCreditCardRecon($idLog, $userID){
        Self::deleteProcedure('acc_credit_card_recon(?,?)',[
            $idLog, self::getUserLogin()

        ]);
    }

    // AP Refund Deposit
    public static function deleteAPRefundDepositPayment($refNumber, $userID){
        Self::deleteProcedure('acc_ap_no_show_payment_by_ref_number(?,?)',[
            $refNumber, self::getUserLogin()
        ]);
    }

    public static function insertAPRefundDepositPayment($refNumber, $journalAccountCode, $discountJournalAccountCode, $baJournalAccountCode, $oeJournalAccountCode, $totalAmount,
        $discount, $bankAdministration, $otherExpense, $date, $remark, $userID){
        Self::insertProcedure('acc_ap_no_show_payment(?,?,?,?,?,?,?,?,?,?,?,?)',[
            $refNumber, $journalAccountCode, $discountJournalAccountCode, $baJournalAccountCode, $oeJournalAccountCode, $totalAmount,
            $discount, $bankAdministration, $otherExpense, FormatController::formatDate($date), HelperController::ifNull($remark), self::getUserLogin()
        ]);
    }

    public static function insertAPRefundDepositPaymentDetail($subFolioID, $refNumber, $amount, $userID){
        Self::insertProcedure('acc_ap_no_show_payment_detail(?,?,?,?)',[
            $subFolioID, $refNumber, $amount, self::getUserLogin()
        ]);
    }

    // AP Commission and Other
    public static function deleteAPCommissionPayment($refNumber, $userID){
        Self::deleteProcedure('acc_ap_commission_payment_by_ref_number(?,?)',[
            $refNumber, self::getUserLogin()
        ]);
    }

    public static function insertAPCommissionPayment($refNumber, $journalAccountCode, $discountJournalAccountCode, $baJournalAccountCode, $oeJournalAccountCode, $totalAmount,
        $discount, $bankAdministration, $otherExpense, $date, $remark, $userID){
        Self::insertProcedure('acc_ap_commission_payment(?,?,?,?,?,?,?,?,?,?,?,?)',[
            $refNumber, $journalAccountCode, $discountJournalAccountCode, $baJournalAccountCode, $oeJournalAccountCode, $totalAmount,
            $discount, $bankAdministration, $otherExpense, FormatController::formatDate($date), HelperController::ifNull($remark), self::getUserLogin()
        ]);
    }

    public static function insertAPCommissionPaymentDetail($subFolioID, $refNumber, $amount, $userID){
        Self::insertProcedure('acc_ap_commission_payment_detail(?,?,?,?)',[
            $subFolioID, $refNumber, $amount, self::getUserLogin()
        ]);
    }

    // Income Budget
    public static function insertIncomeBudget($period, $subDepartmentCode, $accountCode, $remark, $amount, $typeCode, $month1, $month2, $month3, $month4, $month5,
        $month6, $month7, $month8, $month9, $month10, $month11, $month12, $userID){
        Self::insertProcedure('budget_income(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $period, $subDepartmentCode, $accountCode, HelperController::ifNull($remark), $amount, $typeCode, $month1, $month2, $month3, $month4, $month5,
            $month6, $month7, $month8, $month9, $month10, $month11, $month12, HelperController::getUnitCode(), self::getUserLogin()
        ]);
    }

    public static function updateIncomeBudget($idLog, $period, $subDepartmentCode, $accountCode, $remark, $amount, $typeCode, $month1, $month2, $month3, $month4, $month5,
        $month6, $month7, $month8, $month9, $month10, $month11, $month12, $userID){
        Self::updateProcedure('budget_income(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $idLog, $period, $subDepartmentCode, $accountCode, HelperController::ifNull($remark), $amount, $typeCode, $month1, $month2, $month3, $month4, $month5,
            $month6, $month7, $month8, $month9, $month10, $month11, $month12, self::getUserLogin()
        ]);
    }

    public static function deleteIncomeBudget($idLog, $userID){
        Self::deleteProcedure('budget_income(?,?)',[
            $idLog, self::getUserLogin()
        ]);
    }

    // Budget Statistic
    public static function insertBudgetStatistic($period, $accountCode, $remark, $amount, $typeCode, $month1, $month2, $month3, $month4, $month5,
        $month6, $month7, $month8, $month9, $month10, $month11, $month12, $userID){
        Self::insertProcedure('budget_statistic(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $period,'', $accountCode, HelperController::ifNull($remark), $amount, $typeCode, $month1, $month2, $month3, $month4, $month5,
            $month6, $month7, $month8, $month9, $month10, $month11, $month12, HelperController::getUnitCode(), self::getUserLogin()
        ]);
    }

    public static function updateBudgetStatistic($idLog, $period, $accountCode, $remark, $amount, $typeCode, $month1, $month2, $month3, $month4, $month5,
        $month6, $month7, $month8, $month9, $month10, $month11, $month12, $userID){
        Self::updateProcedure('budget_statistic(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
            $idLog, $period, '', $accountCode, HelperController::ifNull($remark), $amount, $typeCode, $month1, $month2, $month3, $month4, $month5,
            $month6, $month7, $month8, $month9, $month10, $month11, $month12, self::getUserLogin()
        ]);
    }

    public static function deleteBudgetStatistic($idLog, $userID){
        Self::deleteProcedure('budget_statistic(?,?)',[
            $idLog, self::getUserLogin()
        ]);
    }

    // Receipt

    public static function insertReceipt($number, $receiveFrom, $amount, $issuedDate, $forPayment){
        Self::insertProcedure('receipt(?,?,?,?,?,?)',[
            $number, $receiveFrom, $amount, $issuedDate, $forPayment, self::getUserLogin()
        ]);
    }

    public static function updateReceipt($number, $receiveFrom, $amount, $issuedDate, $forPayment){
        Self::updateProcedure('receipt(?,?,?,?,?,?)',[
            $number, $receiveFrom, $amount, $issuedDate, $forPayment, self::getUserLogin()
        ]);
    }

    public static function deleteReceipt($idLog){
        Self::deleteProcedure('receipt(?,?)',[
            $idLog, self::getUserLogin()
        ]);
    }

    public static function insertRoomRateBaseSession($roomRateCode, $fromDate, $toDate, $amount, $isDefault){
        Self::insertProcedure('cfg_init_room_rate_session(?,?,?,?,?,?)',[
            $roomRateCode, FormatController::formatDate($fromDate), FormatController::formatDate($toDate), $amount, $isDefault, self::getUserLogin()
        ]);
    }

    public static function insertRoomRateLastDeal($roomRateCode, $startTime, $endTime, $percentage, $isDefault){
        Self::insertProcedure('cfg_init_room_rate_last_deal(?,?,?,?,?,?)',[
            $roomRateCode, $startTime, $endTime, $percentage, $isDefault, self::getUserLogin()
        ]);
    }

    public static function insertCMUpdate($typeCode, $number, $roomTypeCode, $roomRateCode, $rateAmount, $startDate, $endDate) {
        if($typeCode != GlobalVariableController::$CMUpdateType['RoomAllotment']){
            $endDate = FormatController::incDay($endDate, -1);
        }

        if($startDate <= $endDate) {
            Self::insertProcedure('cm_update(?,?,?,?,?,?,?)',[
                $typeCode, $number, $roomTypeCode, $roomRateCode, $rateAmount, $startDate, $endDate, ''
            ]);
        }
    }

}
