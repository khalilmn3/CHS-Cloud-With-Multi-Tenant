<?php

namespace App\Http\Controllers;

use App\Configurations\Models\Account;
use App\Configurations\Models\SubDepartment;
use App\Folio\Models\Folio;
use App\Folio\Models\SubFolio;
use App\Guest\Models\GuestDeposit;
use App\Http\Controllers\Configurations\ConfigurationController;
use App\Http\Controllers\Configurations\TaxServiceController;
use App\Http\Controllers\Folio\SubFolioController;
use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\General\ShiftLogController;
use App\Http\Controllers\Reservations\ReservationController;
use App\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;

class GuestDepositController extends Controller
{
    public function index(Request $request){
        $params = $request->all();
        $id= Arr::get($params,'id','');
        $isShowCorrection = Arr::get($params, 'isShowCorrection','false');
        $isShowVoid= Arr::get($params, 'isShowVoid','false');

        $mainTableName = 'guest_deposit';

        $credit = 'ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $debit = 'ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $creditForeign = 'ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount_foreign ELSE "0" END),3)';
        $debitForeign = 'ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount_foreign ELSE "0" END),3)';
        $payment = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND guest_deposit.type_code="C" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $paymentC = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND guest_deposit.type_code="D" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $charge = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND guest_deposit.type_code="D" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $chargeC = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND guest_deposit.type_code="C" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $paymentForeign = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND guest_deposit.type_code="C" then '.$mainTableName.'.amount_foreign ELSE "0" END),3)';
        $paymentCForeign = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND guest_deposit.type_code="D" then '.$mainTableName.'.amount_foreign ELSE "0" END),3)';
        $chargeForeign = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND guest_deposit.type_code="D" then '.$mainTableName.'.amount_foreign ELSE "0" END),3)';
        $chargeCForeign = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND guest_deposit.type_code="C" then '.$mainTableName.'.amount_foreign ELSE "0" END),3)';

        $total= GuestDeposit::select(
            DB::raw('ROUND(('.$payment.'-'.$paymentC.'),3) AS credit'),
            DB::raw('ROUND(('.$charge.'-'.$chargeC.'),3) AS debit'),
            DB::raw('ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount_foreign ELSE "0" END),3) AS creditForeign'),
            DB::raw('ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount_foreign ELSE "0" END),3) AS debitForeign'),
            DB::raw('ROUND((('.$charge.'-'.$chargeC.') - ('.$payment.'-'.$paymentC.')),3) AS balance'))
            ->leftJoin('cfg_init_account as account','guest_deposit.account_code', 'account.code')
            ->leftJoin('cfg_init_account_sub_group','account.sub_group_code','cfg_init_account_sub_group.code')
            ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
            ->where('guest_deposit.reservation_number',$id)
            ->where($mainTableName.'.void','0');
        $guestDeposit= GuestDeposit::select(
            $mainTableName.'.id_log',
            $mainTableName.'.reservation_number',
            $mainTableName.'.account_code',
            $mainTableName.'.audit_date',
            $mainTableName.'.exchange_rate',
            $mainTableName.'.remark',
            $mainTableName.'.document_number',
            $mainTableName.'.type_code',
            $mainTableName.'.ref_number',
            $mainTableName.'.void',
            $mainTableName.'.void_date',
            $mainTableName.'.void_by',
            $mainTableName.'.void_reason',
            $mainTableName.'.is_correction',
            $mainTableName.'.insert_by',
            $mainTableName.'.is_pair_with_folio',
            $mainTableName.'.user_id',
            'sub_department.name as sub_department',
            DB::raw('IF(COUNT(correction_breakdown) > 1,CONCAT(account.code," - ",account.name,"*"), CONCAT(account.code," - ",account.name)) AS account'),
            'default_currency.name as default_currency',
            'currency.name as currency',
            DB::raw('IF('.$mainTableName.'.void_date <= 0,"",'.$mainTableName.'.void_date) as void_date'),
            DB::raw('IF('.$credit.' > '.$debit.','.$credit.'-'.$debit.',0) AS credit'),
            DB::raw('IF('.$debit.' > '.$credit.','.$debit.'-'.$credit.',0) AS debit'),
            DB::raw('IF('.$creditForeign.' > '.$debitForeign.','.$creditForeign.'-'.$debitForeign.',0) AS creditForeign'),
            DB::raw('IF('.$debitForeign.' > '.$creditForeign.','.$debitForeign.'-'.$creditForeign.',0) AS debitForeign'),
            DB::raw('CASE WHEN const_account_group.code="'.GlobalVariableController::$accountGroup['Payment'].'" THEN IF('.$mainTableName.'.type_code="C","-1","0") ELSE "" END AS isPayment'))
            ->leftJoin('cfg_init_sub_department as sub_department','guest_deposit.sub_department_code', 'sub_department.code')
            ->leftJoin('cfg_init_account as account','guest_deposit.account_code', 'account.code')
            ->leftJoin('cfg_init_account_sub_group','account.sub_group_code','cfg_init_account_sub_group.code')
            ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
            ->leftJoin('cfg_init_currency as default_currency','guest_deposit.default_currency_code', 'default_currency.code')
            ->leftJoin('cfg_init_currency as currency','guest_deposit.currency_code', 'currency.code')
            ->where('guest_deposit.reservation_number',$id);


            if($isShowVoid != 'true'){
                $guestDeposit->where($mainTableName.'.void','0');
            }

            if($isShowCorrection != 'true'){
                $guestDeposit->groupBy('correction_breakdown');
            } else {
                $guestDeposit->groupBy('id_log');
            }

        return response()->json([
            'guestDeposit' => $guestDeposit->get(),
            'total' => $total->get()]);

    }

    public function store(Request $request){
        $params=$request->all();
        $refund= Arr::get($params,'isRefund','');
        $cardBankCode = Arr::get($params,'card_bank_code','');
        $cardTypeCode = Arr::get($params,'card_type_code','');
        $isCorrection = Arr::get($params,'is_correction','0');
        $correctionBy = Arr::get($params,'correction_by','');
        $correctionReason = Arr::get($params,'correction_reason','');
        $reservationStatus = Arr::get($params,'reservation_status','');
        $defaultCurrency = HelperController::getDefaultCurrency();
        $currencyCode = Arr::get($params,'currency_code', $defaultCurrency);
        $exchangeRate = HelperController::getExchangeRateCurrency($currencyCode);
        $auditDate = AuditLogController::auditDate();
        $correctionBreakdown = HelperController::getGuestDepositCorrectionBreakdown();
        $ccAdminAccountCode= GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountCreditCardAdm']);


        $amountForeign = Arr::get($params,'amount_foreign',0);
        $chargePercent = Arr::get($params,'charge_percent',0);
        // $amount= $currencyCode != $defaultCurrency ? ($amountForeign * $exchangeRate) : $amountForeign;
        // $chargeAmount = 0;
        $chargeAmountForeign = 0;
        if(intval($chargePercent) > 0){
            // $chargeAmount = ($amount * $chargePercent) / 100;
            $chargeAmountForeign = ($amountForeign * $chargePercent) / 100;
            // $amount = $chargeAmount + $amount;
            $amountForeign = $chargeAmountForeign + $amountForeign;
        }

        if($amountForeign == 0 || $amountForeign == '0'){
            return 4;
        }
        if($refund == 'true'){
            $depositBalance = ProcedureQueryController::getGuestDepositBalance($request->reservation_number);
            if($depositBalance){
                if($amountForeign > -$depositBalance->balance){
                    return 3;
                }
            }
            $typeCode = GlobalVariableController::$transactionType['Debit'];
        } else {
            $typeCode=GlobalVariableController::$transactionType['Credit'];
        }

        if($reservationStatus == GlobalVariableController::$reservationStatus['New']){
            $reservation = Reservation::select('status_code')->where('number',$params['reservation_number'])->where('status_code', GlobalVariableController::$reservationStatus['New'])->first();
            if(empty($reservation)){
                $reservationStatusChanged = true;
            }else{
                $reservationStatusChanged = false;
            }
        }else{
            $reservationStatusChanged = false;
        }
        if(!$reservationStatusChanged){
            $reservationX = Reservation::select('status_code')->where('number',$params['reservation_number'])->first();
            if($reservationX){
                ProcedureQueryController::insertGuestDeposit($params['reservation_number'], $params['sub_department_code'], $request['account_code'], $defaultCurrency, $amountForeign,
                $exchangeRate, $currencyCode, $auditDate, HelperController::ifNull($params['remark']), HelperController::ifNull($params['document_number']), $typeCode,
                $cardBankCode, $cardTypeCode, $isCorrection, $correctionBy, $correctionReason, $correctionBreakdown,
                GlobalVariableController::$system['CakrasoftHotelSystem'], $params['user_id']);

                //CHARGE CREDIT CARD
                $correctionBreakdown = HelperController::getGuestDepositCorrectionBreakdown();
                if( $chargeAmountForeign  > 0){
                    ProcedureQueryController::insertGuestDeposit($params['reservation_number'], $params['sub_department_code'], $ccAdminAccountCode, $defaultCurrency, $chargeAmountForeign,
                        $exchangeRate, $currencyCode, $auditDate, HelperController::ifNull($params['remark']), HelperController::ifNull($params['document_number']), GlobalVariableController::$transactionType['Debit'],
                        $cardBankCode, $cardTypeCode, $isCorrection, $correctionBy, $correctionReason, $correctionBreakdown,
                        GlobalVariableController::$system['CakrasoftHotelSystem'], $params['user_id']);
                }

                ProcedureQueryController::updateReservationConfirm($params['reservation_number'], GlobalVariableController::$reservationStatus2['Guaranteed'], $params['user_id']);
                return 0;
            }else{
                return 2;
            }
        }else{
            return 1;
        }
    }

    public function transferDeposit(Request $request){
        $params = $request->all();
        $type =  Arr::get($params, 'transfer_type','');
        $folioNumberTo =  Arr::get($params, 'folio_number_to','');
        $reservationNumberFrom =  Arr::get($params, 'reservation_number','');
        $reservationNumberTo =  Arr::get($params, 'reservation_number_to','');
        $subFolio =  Arr::get($params, 'sub_folio','');
        $amount =  Arr::get($params, 'amount',0);
        $remark =  Arr::get($params, 'remark','');
        $userID = $request->user_id;
        $balance = ProcedureQueryController::getGuestDepositBalance($reservationNumberFrom)->balance;
        if(($type == 1 && (empty($folioNumberTo) || empty($subFolio))) || ($type == 2 && empty($reservationNumberTo)) || $amount <= 0 || $balance >= 0) {
            return 1;
        } else {
            if($type == 1){
                $roomNumber = Folio::select('guest_detail.room_number')->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')->where('number',$folioNumberTo)->first();
                $roomNumber = $roomNumber ? $roomNumber->room_number : '';
                $guestDepositID = ProcedureQueryController::insertGuestDeposit($reservationNumberFrom, ConfigurationController::value(null,null,GlobalVariableController::$configurationName['SDFrontOffice']), ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']),
                    '', $amount, '', '', AuditLogController::auditDate(), 'Transfer Deposit to Folio: '.$folioNumberTo, '', GlobalVariableController::$transactionType['Debit'], '', '', false, '', '', '', '', $userID );
                $subFolioID = ProcedureQueryController::insertSubFolio1($folioNumberTo, $subFolio, $roomNumber, ConfigurationController::value(null,null,GlobalVariableController::$configurationName['SDFrontOffice']), ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']),
                    ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']), ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']), '', '', 'Transfer Deposit from: '.$reservationNumberFrom, '',
                    '', GlobalVariableController::$transactionType['Credit'], '', '', '', '', '', GlobalVariableController::$postingType['Deposit'], '', 0, 1, $amount, '', false, true, '', $userID );
                ProcedureQueryController::updateGuestDepositTransferPairIdFolio($guestDepositID, $subFolioID);
                ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['TransferDeposit'], $reservationNumberFrom, $folioNumberTo, '', '', $userID);

                return 0;
            } else if ($type == 2){
                $guestDepositID1 = ProcedureQueryController::insertGuestDeposit($reservationNumberFrom, ConfigurationController::value(null,null,GlobalVariableController::$configurationName['SDFrontOffice']), ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservation']),
                    null, $amount, '', '', AuditLogController::auditDate(), 'Transfer Deposit to Reservation: '.$reservationNumberTo, '', GlobalVariableController::$transactionType['Debit'], '', '', false, '', '', '', '', $userID );
                $guestDepositID2 = ProcedureQueryController::insertGuestDeposit($reservationNumberTo, ConfigurationController::value(null,null,GlobalVariableController::$configurationName['SDFrontOffice']), ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservation']),
                    null, $amount, '', '', AuditLogController::auditDate(), 'Transfer Deposit from Reservation: '.$reservationNumberFrom, '', GlobalVariableController::$transactionType['Credit'], '', '', false, '', '', '', '', $userID );
                ProcedureQueryController::updateReservationStatus2($reservationNumberTo, GlobalVariableController::$reservationStatus2['Guaranteed'], $userID);
                ProcedureQueryController::updateGuestDepositTransferPairID($guestDepositID1, $guestDepositID2);
                ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['TransferDeposit'], $reservationNumberFrom, $reservationNumberTo, '', '', $userID);

                return 0;
            }
        }
    }

    public function getGuestDepositTotalAmount(Request $request){
        $params= $request->all();
        $idLog= Arr::get($params, 'idLog',0);
        $correctionBreakdown= HelperController::getGuestDepositCorrectionBreakdownByIdLog($idLog);
        if(HelperController::trueFalseString($params['isShowCorrection'])){
            $result = GuestDeposit::select(DB::raw('SUM((CASE WHEN type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN amount_foreign ELSE 0 END) - (CASE WHEN type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN amount_foreign ELSE 0 END)) as amountForeign'))
                ->where('id_log',$idLog)
                ->where('void','0')->first();
        } else{
            $result = GuestDeposit::select(DB::raw('SUM((CASE WHEN type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN amount_foreign ELSE 0 END) - (CASE WHEN type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN amount_foreign ELSE 0 END)) as amountForeign'))
                ->where('correction_breakdown',$correctionBreakdown)
                ->where('void','0')
                ->groupBy('correction_breakdown')->first();
        }

        return abs($result->amountForeign);
    }

    public function void(Request $request){
        $params= $request->all();
        $isShowCorrection = HelperController::trueFalseString($request->isShowCorrection);
        $correctionBreakdown= HelperController::getGuestDepositCorrectionBreakdownByIdLog($params['idLog']);
        $guestDeposit = GuestDeposit::where('id_log',$params['idLog'])->first();
        $auditDate= AuditLogController::auditDate();

        if($guestDeposit){
            if($guestDeposit->audit_date == $auditDate){
                if($isShowCorrection){
                    ProcedureQueryController::updateGuestDepositVoid($params['idLog'],$params['userBy'],$params['reason'],$params['userId']);
                }else{
                    ProcedureQueryController::updateGuestDepositVoidByCorrectionBreakdown($correctionBreakdown,$params['userBy'],$params['reason'],$params['userId']);
                }
                //Log User
                $logParams = ['actionId' => GlobalVariableController::$logUserAction['VoidDeposit'], 'link1' => $params['resvNumber'], 'link2' => $params['idLog'], 'remark' => $params['reason'], 'userid' => $params['userBy']];
                ProcedureQueryController::insertLogUserX($logParams);
            }
        }

        return response()->json(['GD' => $params]);
    }

    public function correction(Request $request){
        $params= $request->all();
        $amountAfter = Arr::get($params,'amount',0);
        $idLog= Arr::get($params, 'idLog',0);
        $reason= Arr::get($params,'reason','');
        $userId= $request['userId'];
        $userBy= $request['userBy'];
        $correctionBreakdown= HelperController::getGuestDepositCorrectionBreakdownByIdLog($idLog);
        $amountBefore = GuestDeposit::select(DB::raw('SUM((CASE WHEN type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN amount_foreign ELSE 0 END) - (CASE WHEN type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN amount_foreign ELSE 0 END)) as amountForeign'))
            ->where('correction_breakdown',$correctionBreakdown)
            ->where('void','0')
            ->groupBy('correction_breakdown')->first();
        $amountBefore= abs($amountBefore->amountForeign);
        $amountBalance= ($amountAfter > $amountBefore ? ($amountAfter - $amountBefore) : ($amountAfter < $amountBefore ? ($amountBefore - $amountAfter) : 0));
        $guestDepositId1 = 0;
        if($amountBalance <> 0){
            $guestDeposit = GuestDeposit::select(
                'guest_deposit.*',
                DB::raw('IF(guest_deposit.type_code, guest_deposit.amount,-guest_deposit.amount) AS totalAmount'),
                DB::raw('IF(guest_deposit.type_code, guest_deposit.amount_foreign,-guest_deposit.amount_foreign) AS totalAmountForeign')
                )->where('id_log',$idLog)->first();
            $typeCode = ($amountAfter > $amountBefore ? $guestDeposit->type_code : ($amountAfter < $amountBefore ? ($guestDeposit->type_code == GlobalVariableController::$transactionType['Debit'] ? GlobalVariableController::$transactionType['Credit'] : GlobalVariableController::$transactionType['Debit']) :  $guestDeposit->type_code));
            $amount = $amountBalance * $guestDeposit->totalAmount /  $guestDeposit->amount_foreign;

            $guestDepositId1 = ProcedureQueryController::insertGuestDeposit($guestDeposit->reservation_number, $guestDeposit->sub_department_code, $guestDeposit->account_code, $guestDeposit->default_currency_code, $amount, $guestDeposit->exchange_rate, $guestDeposit->currency_code, AuditLogController::auditDate(),
                    'Correction for ID : '.$guestDeposit->id_log, $guestDeposit->document_number, $typeCode, $guestDeposit->card_bank_code,$guestDeposit->card_type_code, true, $userBy, 'Reason : '.$reason, $guestDeposit->correction_breakdown, '', $userId);

            if($guestDeposit->transfer_pair_id > 0 ){
                if(HelperController::variant($guestDeposit->is_pair_with_folio)){
                    $subFolioPair = SubFolio::select('sub_folio.*')->where('id_log',$guestDeposit->transfer_pair_id)->first();
                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                    $breakdown2 = $subFolioPair->breakdown2;
                    $typeCode= $typeCode == GlobalVariableController::$transactionType['Debit'] ? GlobalVariableController::$transactionType['Credit'] : GlobalVariableController::$transactionType['Debit'];
                    $subFolioId = ProcedureQueryController::insertSubFolioX($subFolioPair->folio_number,$subFolioPair->belongs_to, 0,$subFolioPair->group_code,$subFolioPair->room_number, $subFolioPair->sub_department_code, $subFolioPair->account_code, $subFolioPair->product_code,
                        $subFolioPair->package_code, $subFolioPair->default_currency_code, $subFolioPair->currency_code, 'Correction for ID: '.$subFolioPair->id_log,$subFolioPair->document_number, $subFolioPair->voucher_number, $typeCode, $subFolioPair->card_bank_code,
                        $subFolioPair->card_type_code, $userBy, 'Reason : '.$reason,$subFolioPair->correction_breakdown, $breakdown1, $breakdown2, $subFolioPair->direct_bill_code, GlobalVariableController::$postingType['None'], $subFolioPair->extra_charge_id,1,
                        $amount * $subFolioPair->exchange_rate, $amount, $subFolioPair->exchange_rate, true, $userId);
                    ProcedureQueryController::updateGuestDepositTransferPairIdFolio($guestDepositId1, $subFolioId);
                } else {
                    $guestDepositPair= GuestDeposit::select('guest_deposit.*')->where('id_log',$guestDeposit->transfer_pair_id)->first();
                    $typeCode= $typeCode == GlobalVariableController::$transactionType['Debit'] ? GlobalVariableController::$transactionType['Credit'] : GlobalVariableController::$transactionType['Debit'];
                    $guestDepositId2 = ProcedureQueryController::insertGuestDeposit($guestDepositPair->reservation_number, $guestDepositPair->sub_department_code, $guestDepositPair->account_code, $guestDepositPair->default_currency_code, $amount, $guestDepositPair->exchange_rate, $guestDepositPair->currency_code, AuditLogController::auditDate(),
                        'Correction for ID : '.$guestDepositPair->id_log, $guestDepositPair->document_number, $typeCode, $guestDepositPair->card_bank_code,$guestDepositPair->card_type_code, true, $userBy, 'Reason : '.$reason, $guestDepositPair->correction_breakdown, '', $userId);

                    ProcedureQueryController::updateGuestDepositTransferPairId($guestDepositId1, $guestDepositId2);
                }
            }
        }

        return response()->json($guestDepositId1);
    }


    public static function totalDeposit($id,$query){
        $credit= GuestDeposit::select(DB::raw('SUM(amount) as credit'))->where('reservation_number', $id)->where('void','0')->where('type_code','C')->get();
        $debit= GuestDeposit::select(DB::raw('SUM(amount) as debit'))->where('reservation_number', $id)->where('void','0')->where('type_code','D')->get();
        $totalDeposit = FormatController::round3($credit[0]->credit - $debit[0]->debit);
        $guestDetail = Reservation::select('contact_person.full_name','guest_detail.room_number')
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
            ->leftJoin('guest_deposit','reservation.number','guest_deposit.reservation_number')
            ->where('reservation.number', $id)
            ->where('system_code', GlobalVariableController::$system['CakrasoftHotelSystem'])
            ->first();
        if($query == 'total'){
            return $totalDeposit;
        } else {
            return response()->json([
                'totalDeposit' => $totalDeposit,
                'guestDetail' => $guestDetail,
            ]);
        }
    }

    public function balance(Request $request){
        $balance= ProcedureQueryController::getGuestDepositBalance($request->q);

        return response()->json($balance);
    }

    public static function insertDeposit(Request $request, $vType, $vAccount,$vAmount, $vRemark){
        $params=$request->all();
        $cardBankCode = Arr::get($params,'card_bank_code','');
        $cardTypeCode = Arr::get($params,'card_type_code','');
        $isCorrection = Arr::get($params,'is_correction','0');
        $correctionBy = Arr::get($params,'correction_by','');
        $correctionReason = Arr::get($params,'correction_reason','');
        $subDepartment = Arr::get($params,'sub_department_code','FRON');
        $account = Arr::get($params,'account_code', $vAccount);
        $amount = Arr::get($params,'amount',$vAmount);
        $defaultCurrency = Arr::get($params,'default_currency_code','IDR');
        $amountForeign = Arr::get($params,'amount_foreign',$vAmount);
        $exchangeRate = Arr::get($params,'exchange_rate',1);
        $currency = Arr::get($params,'currency_code','IDR');
        $auditDate = AuditLogController::auditDate();
        $docNumber = Arr::get($params,'document_number','');
        $typeCode = Arr::get($params,'type_code', $vType);
        $remark = Arr::get($params,'remark',$vRemark);

        $guestDepositID= ProcedureQueryController::insertGuestDeposit($params['reservation_number'], $subDepartment, $account, $defaultCurrency, $vAmount,
                $exchangeRate, $currency, $auditDate, $remark, $docNumber, $typeCode,
                $cardBankCode, $cardTypeCode, $isCorrection, $correctionBy, $correctionReason, '',
                GlobalVariableController::$system['CakrasoftHotelSystem'], $params['user_id']);

        return $guestDepositID;
    }

    public static function cancelDeposit(Request $request){
        $params = $request->all();
        $cancel = Arr::get($params,'is_close_desk_folio','');

        $reservation = Reservation::select(
            'reservation.*', 'guest_detail.*', 'contact_person.*'
            )
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->leftJoin('contact_person', 'reservation.contact_person_id', 'contact_person.id' )
            ->where('number',$params['reservation_number'])->first();

        $correctionBreakdown = HelperController::getGuestDepositCorrectionBreakdown();
        if($params['cancel_fee'] <> 0 || $params['is_ap_refund'] == '-1' ){
            //INSERT FOLIO

            $folioNumber = ProcedureQueryController::insertFolio( GlobalVariableController::$folioType['DeskFolio'], '', $params['reservation_number'], $reservation->contact_person_id, $reservation->contact_person_id2, $reservation->contact_person_id3, $reservation->contact_person_id4,
                $reservation->guest_detail_id, $reservation->member_code, $reservation->guest_profile_id, $reservation->guest_profile_id2, $reservation->guest_profile_id3, $reservation->guest_profile_id4, $reservation->currency_code,
                $reservation->exchange_rate, $reservation->is_constant_currency, $reservation->group_code, 0, '', GlobalVariableController::$folioTransferBy['NoTransfer'], '', $reservation->is_incognito, $reservation->marketing_code,
                $reservation->document_number, $reservation->voucher_number_ta, $reservation->flight_number, $reservation->flight_arrival, $reservation->flight_departure, $reservation->notes, $reservation->show_notes, $reservation->hk_note,
                '-1', $reservation->is_from_allotment, GlobalVariableController::$system['CakrasoftHotelSystem'], $params['user_id']);


            if( $cancel == 'true'){
                DB::select(
                    'CALL update_folio_status_cancel_check_in(?,?,?,?)',[
                        $folioNumber, AuditLogController::auditDate(), $params['user_id'], $params['user_id']
                    ]);
            }
            //------INSERT GUEST DEPOSIT TRANSFER
            $guestDepositId = GuestDepositController::insertDeposit($request,GlobalVariableController::$transactionType['Debit'], ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']),$params['total_deposit'], 'Transfer Deposit to Folio :'.$folioNumber );

            //------INSERT SUB FOLIO
            $subFolioId = ProcedureQueryController::insertSubFolio1($folioNumber, GlobalVariableController::$subFolioGroup['A'],'',ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDFrontOffice']),
                    ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']),  ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']), '', '', '', 'Transfer Deposit from Reservation :'.$params['reservation_number'], '',
                    '', GlobalVariableController::$transactionType['Credit'], '', '', '', '', '', GlobalVariableController::$postingType['None'], '', 0, 1, $params['total_deposit'], '', false, true, '', $params['user_id']);
            ProcedureQueryController::updateGuestDepositTransferPairIdFolio($guestDepositId, $subFolioId);
            ProcedureQueryController::insertSubFolio1($folioNumber, GlobalVariableController::$subFolioGroup['A'],'',ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDFrontOffice']),
                    ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountCanceletionFee']),  ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountCanceletionFee']), '', '', '', 'Cancelation Fee Reservation :'.$params['reservation_number'], '',
                    '', GlobalVariableController::$transactionType['Debit'], '', '', '', '', '', GlobalVariableController::$postingType['None'], '', 0, 1,  $params['cancel_fee'], '', false, true, '', $params['user_id']);


            if($params['refund'] <> 0){
                $account = $params['is_ap_refund'] == '0' ? ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountCash']) : ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountAPRefundDeposit']);
                $remark =  $params['is_ap_refund'] == '0' ? 'Refund Deposit Reservation :' : 'AP Refund Deposit Reservation :';
                ProcedureQueryController::insertSubFolio1($folioNumber, GlobalVariableController::$subFolioGroup['A'],'',ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDFrontOffice']),
                    $account, $account, '', '', '', $remark.$params['reservation_number'], '','', GlobalVariableController::$transactionType['Debit'], '', '', '', '', '', GlobalVariableController::$postingType['None'], '', 0, 1,  $params['refund'], '', false, true, '', $params['user_id']);
            }

        } else {
            $cardBankCode = Arr::get($params,'card_bank_code',' ');
            $cardTypeCode = Arr::get($params,'card_type_code',' ');
            $isCorrection = Arr::get($params,'is_correction','0');
            $correctionBy = Arr::get($params,'correction_by',' ');
            $correctionReason = Arr::get($params,'correction_reason',' ');
            $correctionBreakdown = HelperController::getGuestDepositCorrectionBreakdown();
            ProcedureQueryController::insertGuestDeposit($params['reservation_number'], ConfigurationController::value(null,null,GlobalVariableController::$configurationName['SDFrontOffice']), ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountCash']), '', $params['refund'],
                $reservation->exchange_rate, $reservation->currency_code, AuditLogController::auditDate(), 'Refund Deposit Reservation: '.$params['reservation_number'] , ' ', GlobalVariableController::$transactionType['Debit'],
                $cardBankCode, $cardTypeCode, $isCorrection, $correctionBy, $correctionReason, $correctionBreakdown,
                GlobalVariableController::$system['CakrasoftHotelSystem'], $params['user_id']);
        }
    }

    public function editSubDepartment($id){
        $subDepartment = GuestDeposit::select('sub_department_code')->where('id_log',$id)->first();

        return response()->json($subDepartment);
    }

    public function editRemark($id){
        $remark = GuestDeposit::select('remark')->where('id_log',$id)->first();

        return response()->json($remark);
    }

    public function editDocumentNumber($id){
        $documentNumber = GuestDeposit::select('document_number')->where('id_log',$id)->first();

        return response()->json($documentNumber);
    }

    public function dataLookupSubDepartment($idLog){
        $guestDeposit = GuestDeposit::select('sub_department_code','account_code')->where('id_log',$idLog)->first();
        if(empty($guestDeposit)){
            $subDepartment = [];
        } else {
            $account = Account::selectRaw('sub_department_code')->where('code',$guestDeposit->account_code)->first()->sub_department_code;
            $account = explode('|',$account);
            $subDepartment = SubDepartment::select('cfg_init_sub_department.code','cfg_init_sub_department.name')
                ->whereIn('cfg_init_sub_department.code',$account)
                ->orderBy('id_sort');
                if(count($subDepartment->get()) > 0){
                    $subDepartment->orWhere('cfg_init_sub_department.code',$guestDeposit->sub_department_code);
                }
            $subDepartment = $subDepartment->get();
        }

        return response()->json($subDepartment);
    }

    public function updateSubDepartment(Request $request){
        $params = $request->all();
        $subDepartment = Arr::get($params, 'sub_department_code','');
        $idLog = Arr::get($params, 'id_log','');
        $isShowCorrection = Arr::get($params, 'is_show_correction', false);
        $userID = Arr::get($params, 'user_id','');
        $validator = Validator::make($request->all(), [
            'sub_department_code' => 'required',
            'id_log' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        ProcedureQueryController::updateGuestDepositSubDepartment($idLog, $subDepartment, $isShowCorrection, $userID);
        return 0;

    }

    public function updateRemark(Request $request){
        $params = $request->all();
        $remark = Arr::get($params, 'remark','');
        $validator = Validator::make($request->all(), [
            'id_log' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        ProcedureQueryController::updateGuestDepositRemark($request->id_log, $remark, $request->user_id);
        return 0;

    }

    public function updateDocumentNumber(Request $request){
        $params = $request->all();
        $documentNumber = Arr::get($params, 'document_number','');
        $validator = Validator::make($request->all(), [
            'id_log' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        ProcedureQueryController::updateGuestDepositDocumentNumber($request->id_log, $documentNumber, $request->user_id);
        return 0;
    }

}
