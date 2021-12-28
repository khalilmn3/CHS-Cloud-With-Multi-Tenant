<?php

namespace App\Http\Controllers\Folio;

use App\Configurations\Models\Account;
use App\Configurations\Models\CardBank;
use App\Configurations\Models\CardType;
use App\Configurations\Models\Company;
use App\Configurations\Models\Currency;
use App\Configurations\Models\Package;
use App\Configurations\Models\SubDepartment;
use App\Folio\Models\Folio;
use App\Folio\Models\SubFolio;
use App\Guest\Models\GuestDeposit;
use App\Http\Controllers\Configurations\ConfigurationController;
use App\Http\Controllers\Configurations\TaxServiceController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\DataLookupController;
use App\Http\Controllers\Folio\SubFolioController;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    Public function index(Request $request){
        $data = SubFolioController::index($request);

        return response()->json($data);
    }

    public static function balance(Request $request){
        $result= ProcedureQueryController::getFolioBalance2($request['q']);

        return response()->json($result);
    }

    public function store(Request $equest){}

    public function account(Request $request){
        $params= $request->all();
        $subGroup= Arr::get($params,'sub_group','');
        $currency= Arr::get($params,'currency_code','');
        $query = Account::select('cfg_init_account.code','cfg_init_credit_card_charge.charge_percent',
            DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) AS name'))
            ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
            ->leftJoin('cfg_init_currency','cfg_init_account.code','cfg_init_currency.account_code')
            ->leftJoin('cfg_init_credit_card_charge','cfg_init_account.code','cfg_init_credit_card_charge.account_code')
            ->where('cfg_init_account_sub_group.group_code',$request['group'])
            ->where('sub_department_code','like', '%'.$request['sub_department_code'].'%')
            ->orderBy('cfg_init_account.code','ASC');

            if(!empty($currency) && $subGroup == ['PYMT']){
                $query->where('cfg_init_currency.code',$currency);
            }
            if(!empty($subGroup)){
                $query->whereIn('cfg_init_account_sub_group.code',$subGroup);
            }

        $query->orderBy('cfg_init_account.id_log','ASC');
        return response()->json($query->get());

    }

    public function lookup(Request $request){
        $subDepartment = SubDepartment::select('name','code')->orderBy('id_sort')->get();
        $currency = Currency::select('code','name','exchange_rate')->orderBy('id_log')->get();
        $cardBank = CardBank::select('code','name')->orderBy('id_log')->get();
        $cardType = CardType::select('code','name')->orderBy('id_log')->get();
        $directBill = Company::select('code','name','ar_limit',
            DB::raw('SUM(sub_folio.amount) AS outstanding')
            )
            ->leftJoin('sub_folio','company.code', 'sub_folio.direct_bill_code')
            ->where('is_direct_bill','-1')
            ->groupBy('company.code')
            ->orderBy('company.name')->get();

        return response()->json([
            'sub_department' => $subDepartment,
            'currency' => $currency,
            'card_bank' => $cardBank,
            'card_type' => $cardType,
            'direct_bill' => $directBill,
        ]);
    }

    public function exchRate(Request $request){
        $query = Currency::select('exchange_rate')->where('code',$request['code'])->first()->exchange_rate;

        return response()->json($query);
    }

    public function charge(Request $request){
        $params= $request->all();
        $subFolioGroupCode= Arr::get($params,'sub_folio','A');
        $roomNumber= HelperController::ifNull(Arr::get($params,'room_number',''));
        $subDepartment= Arr::get($params,'sub_department_code','FRON');
        $quantity= Arr::get($params,'quantity',1);
        $currencyCodeDefault =  HelperController::getDefaultCurrency();
        $currencyCode= Arr::get($params,'currency_code', $currencyCodeDefault);
        $exchangeRate= Arr::get($params,'exchange_rate', HelperController::getExchangeRateCurrency($currencyCode));
        $documentNumber= Arr::get($params,'document_number','');
        $voucherNumber= Arr::get($params,'voucher_number','');
        $cardBankCode= Arr::get($params,'card_bank_code','');
        $cardTypeCode= Arr::get($params,'card_type_code','');
        $isCorrection= Arr::get($params,'is_correction','0');
        $correctionReason= Arr::get($params,'correction_reason','');
        $directBillCode= Arr::get($params,'direct_bill_code','');
        $remark = Arr::get($params,'remark','');
        $form= Arr::get($params,'form','');

        if($form == GlobalVariableController::$formType['FolioHistory']){
            $isFolioClosed = Folio::select('number')->where('number',$request['folio_number'])->where('status_code','!=',GlobalVariableController::$folioStatus['Open'])->first();
            if(!empty($isFolioClosed)){
                ProcedureQueryController::insertSubFolio1($request->folio_number, $request->sub_folio, $request->room_number, $subDepartment, $request->account_code, '', $request->account_code, '', $request->currency_code, $request->remark, $request->document_number,
                    $request->voucher_number, GlobalVariableController::$transactionType['Debit'], $cardBankCode, $cardTypeCode, '', '', $directBillCode, GlobalVariableController::$postingType['None'], '', '', $quantity, $request->amount_foreign, $exchangeRate,
                    false, true, '', $request->user_id);

                //log User
                self::insertLogUserTransaction(1, $request['folio_number'], $request['user_id'], '');
                return 0;
            } else {
                return 1;
            }
        } else { //if($form == GlobalVariableController::$formType['GuestInHouse']){
            $isFolioOpen = Folio::select('number')->where('number',$request['folio_number'])->where('status_code',GlobalVariableController::$folioStatus['Open'])->first();
            if(!empty($isFolioOpen)){
                ProcedureQueryController::insertSubFolio1($request->folio_number, $request->sub_folio, $request->room_number, $subDepartment, $request->account_code, '', $request->account_code, '', $request->currency_code, $request->remark, $request->document_number,
                    $request->voucher_number, GlobalVariableController::$transactionType['Debit'], $cardBankCode, $cardTypeCode, '', '', $directBillCode, GlobalVariableController::$postingType['None'], '', '', $quantity, $request->amount_foreign, $exchangeRate,
                    false, true, '', $request->user_id);

                //log User
                self::insertLogUserTransaction(1, $request['folio_number'], $request['user_id'], '');

                return 0;
            } else {
                return 1;
            }
        }
    }

    public function payment(Request $request){
        $params= $request->all();
        $refund= Arr::get($params,'isRefund','');
        $subFolioGroupCode= Arr::get($params,'sub_folio','A');
        $roomNumber= HelperController::ifNull(Arr::get($params,'room_number',''));
        $remark = Arr::get($params,'remark','');
        $defaultCurrency = HelperController::getDefaultCurrency();
        $currency = Arr::get($params,'currency_code',$defaultCurrency);
        $exchangeRate = HelperController::getExchangeRateCurrency($currency);
        $form= Arr::get($params,'form','');
        $subDepartment= Arr::get($params,'sub_department','FRON');
        $docNumber= Arr::get($params,'document_number','');
        $cardBank= Arr::get($params,'card_bank_code','');
        $cardType= Arr::get($params,'card_type_code','');
        $directBill= Arr::get($params,'direct_bill_code','');
        $amountForeign = Arr::get($params,'amount_foreign',0);
        $chargeAmount = Arr::get($params,'charge_amount',0);
        $chargePercent = Arr::get($params,'charge_percent',0);
        $amount= $currency != $defaultCurrency ? $amountForeign * $exchangeRate : $amountForeign;
        $chargeAmount = 0;
        $chargeAmountForeign = 0;
        if(intval($chargePercent) > 0){
            $chargeAmount = ($amount * $chargePercent) / 100;
            $chargeAmountForeign = ($amountForeign * $chargePercent) / 100;
            $amount = $chargeAmount + $amount;
            $amountForeign = $chargeAmountForeign + $amountForeign;
        }

        $breakdown1 = HelperController::getSubFolioBreakdown1();
        $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
        $ccAdminAccountCode= GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountCreditCardAdm']);

        if($amountForeign == 0 || $amountForeign == '0'){
            return 4;
        }
        if($refund == 'true'){
            $folioBalance = ProcedureQueryController::getFolioBalance2($request->folio_number);
            if($folioBalance){
                if($amountForeign > -$folioBalance->balance){
                    return 3;
                }
            }
            $typeCode = GlobalVariableController::$transactionType['Debit'];
        } else {
            $typeCode=GlobalVariableController::$transactionType['Credit'];
        }

        if($form == GlobalVariableController::$formType['FolioHistory']){
            $isFolioClosed = Folio::select('number')->where('number',$request['folio_number'])->where('status_code','!=',GlobalVariableController::$folioStatus['Open'])->first();
            if(!empty($isFolioClosed)){
                ProcedureQueryController::insertSubFolioX($request['folio_number'],$request['folio_number'],'',$subFolioGroupCode,$roomNumber,$subDepartment,$request['account_code'],$request['account_code'],'','',$currency,$remark,$docNumber,
                    '',$typeCode,$cardBank,$cardType,'','',$correctionBreakdown,$breakdown1,1,$directBill,GlobalVariableController::$postingType['None'],'',1,$amount,$amountForeign,$exchangeRate,false,$request['user_id']);

                 //CHARGE CREDIT CARD
                 $breakdown1 = HelperController::getSubFolioBreakdown1();
                 $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
                 if( $chargeAmountForeign  > 0){
                     ProcedureQueryController::insertSubFolio1($request['folio_number'],$subFolioGroupCode,$roomNumber,$subDepartment, ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountCreditCardAdm']),'',ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountCreditCardAdm']),'',$currency,$remark,$docNumber,'',GlobalVariableController::$transactionType['Debit'],
                        $cardBank,$cardType,$correctionBreakdown,$breakdown1,'',GlobalVariableController::$postingType['None'],'','',1,$chargeAmountForeign,$exchangeRate,false,true,'',$request['user_id']);
                 }

                 //log User
                if ($refund == 'true') {
                    self::insertLogUserTransaction(2, $request['folio_number'], $request['user_id'], '');
                }
                else{
                    self::insertLogUserTransaction(1, $request['folio_number'], $request['user_id'], '');
                }

                return 0;
            } else {
                return 1;
            }
        } else{ // if($form == GlobalVariableController::$formType['GuestInHouse']){
            $isFolioOpen = Folio::select('number')->where('number',$request['folio_number'])->where('status_code',GlobalVariableController::$folioStatus['Open'])->first();
            if(!empty($isFolioOpen)){
                ProcedureQueryController::insertSubFolioX($request['folio_number'],$request['folio_number'],'',$subFolioGroupCode,$roomNumber,$subDepartment,$request['account_code'],$request['account_code'],'','',$currency,$remark,$docNumber,
                    '',$typeCode,$cardBank,$cardType,'','',$correctionBreakdown,$breakdown1,1,$directBill,GlobalVariableController::$postingType['None'],'',1,$amount,$amountForeign,$exchangeRate,false,$request['user_id']);

                //CHARGE CREDIT CARD
                $breakdown1 = HelperController::getSubFolioBreakdown1();
                $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
                if( $chargeAmountForeign  > 0){
                    ProcedureQueryController::insertSubFolio1($request['folio_number'],$subFolioGroupCode,$roomNumber,$subDepartment,$ccAdminAccountCode,'',$ccAdminAccountCode,'',$currency,$remark,$docNumber,'',GlobalVariableController::$transactionType['Debit'],
                    $cardBank,$cardType,$correctionBreakdown,$breakdown1,'',GlobalVariableController::$postingType['None'],'','',1,$chargeAmountForeign,$exchangeRate,false,true,'',$request['user_id']);
                }

                //log User
                if ($refund == 'true') {
                    self::insertLogUserTransaction(2, $request['folio_number'], $request['user_id'], '');
                }
                else{
                    self::insertLogUserTransaction(1, $request['folio_number'], $request['user_id'], '');
                }

                return 0;
            } else {
                return 1;
            }
        }
    }

    public function void(Request $request){
        $params = $request->all();
        $isShowCorrection = HelperController::trueFalseString($request->isShowCorrection);
        $breakdown1= HelperController::getSubFolioBreakdown1ByIdLog($request['idLog']);
        $subFolio= SubFolio::where('id_log',$request['idLog'])->first();
        $auditDate= AuditLogController::auditDate();

        if(!empty($subFolio)){
            if($subFolio->audit_date == $auditDate){
                if($isShowCorrection){
                    $breakdown1= HelperController::getSubFolioBreakdown1ByIdLog($request['idLog']);
                    ProcedureQueryController::updateSubFolioVoidByBreakdown1($breakdown1, $request['userBy'],$request['reason'],$request['userId']);
                }else{
                    $correctionBreakdown= HelperController::getSubFolioCorrectionBreakdownByIdLog($request['idLog']);
                    ProcedureQueryController::updateSubFolioVoidByCorrectionBreakdown($correctionBreakdown, $request['userBy'],$request['reason'],$request['userId']);
                }
                $logParams = ['actionId' => GlobalVariableController::$logUserAction['VoidTransaction'], 'link1' => $request['folioNumber'], 'link2' => $request['idLog'], 'remark' => $request['reason'], 'userid' => $request['userBy']];
                ProcedureQueryController::insertLogUserX($logParams);
                return 0;
            }else{
                return 1;
            }
        } else {
            return 2;
        }
    }

    public function listRouting(Request $request){
        $query=DB::table('folio_routing')->select('folio_routing.sub_folio_transfer as sub_folio', 'folio_routing.id_log',
            DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) as account'),
            DB::raw('CONCAT("F:",folio_routing.folio_transfer," R:",guest_detail.room_number," - ",contact_person.full_name) as folio')
            )
            ->leftJoin('cfg_init_account','folio_routing.account_code','cfg_init_account.code')
            ->leftJoin('folio','folio_routing.folio_transfer','folio.number')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->where('folio_number', $request['folio_number'])
            ->orderBy('cfg_init_account.code','ASC')
            ->get();

            return response()->json($query);
    }

    public function folioType(){
        $query= DB::table('const_folio_type')->select('code','name')
            ->get();

            return response()->json($query);
    }

    public function listFolio(Request $request){
        $params = $request->all();
        $folioNumber= Arr::get($params,'number','');
        $folioType= Arr::get($params,'type','');
        $query= Folio::select('number','guest_detail.room_number as room','const_folio_type.name as folio_type',
            DB::raw('CONCAT("F:",number," R:",guest_detail.room_number," - ",contact_person.full_name) as folio')
            )
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->leftJoin('const_folio_type','folio.type_code','const_folio_type.code')
            ->where('status_code', GlobalVariableController::$folioStatus['Open']);

            if(!empty($folioType)){
               $query->where('folio.type_code', $folioType);
            }
            if(!empty($folioNumber)){
                $query->where('folio.number', $folioNumber);
             }

            return response()->json($query->get());
    }

    public function listReturnTransfer(Request $request){
        $query = Folio::select('sub_folio.belongs_to as folio','guest_detail.room_number', 'contact_person.full_name as full_name')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('contact_person', 'folio.contact_person_id','contact_person.id')
            ->leftJoin('folio_routing', 'folio.number','folio_routing.folio_number')
            ->leftJoin('sub_folio','folio.number','sub_folio.belongs_to')
            ->where('folio_routing.folio_transfer', $request['q'])
            ->orWhere('sub_folio.folio_number', $request['q'])
            ->where('sub_folio.belongs_to','!=', $request['q'])
            ->where('folio.status_code', GlobalVariableController::$folioStatus['Open'])
            ->groupBy('folio.number')
            ->orderBy('guest_detail.room_number', 'ASC');

            return response()->json($query->get());
    }

    public function transferTransaction(Request $request){
        $params=$request->all();
        $mode = Arr::get($params,'option','');
        if($mode == 1){
             //Combine all sub folio
            DB::select(
                'CALL update_sub_folio_group_by_folio_number(?,?,?)',[
                    $request['folio_number_from'], $request['group_code'], $request['user_id']
                ]);

                self::insertLogUserTransaction(3, $request['folio_number_from'], $request['user_id'], '');
                return $mode;
        } else if($mode == 2){
            //move all transaction
            DB::select(
                'CALL update_sub_folio_move_by_folio_number(?,?,?,?)',[
                    $request['folio_number_from'], $request['folio_number_to'], $request['group_code'], $request['user_id']
                ]);
                self::insertLogUserTransaction(3, $request['folio_number_from'], $request['user_id'], $request['folio_number_to'].'/'.$request['group_code']);
                return $mode;
        }if($mode == 3){
             //move selected transaction
             foreach ( $request['selected_account'] as $correctionBreakdown ){
                ProcedureQueryController::updateSubFolioMoveByBreakdown($request->folio_number_to, $correctionBreakdown, $request->group_code, $request->user_id);
             }
             self::insertLogUserTransaction(3, $request['folio_number_from'], $request['user_id'], $request['folio_number_to'].'/'.$request['group_code']);
             return $mode;
        }
    }

    public static function moveSubFolio(Request $request){
        ProcedureQueryController::updateSubFolioMoveByBreakdown($request->folio_number, $request->correction_breakdown, $request->group_code, $request->user_id);
        return 0;
    }

    public static function transferBalance(Request $request){
        $params = $request->all();
        $type =  Arr::get($params, 'type','');
        $folioNumberFrom = Arr::get($params,'folio_number_from','');
        $folioNumberTo = Arr::get($params,'folio_number_to','');
        $balanceType = Arr::get($params,'balance_type','');
        // Response
        // 0: Success
        // 1: Folio not Found
        // 2: Not Enough Balance

        $folioFrom = Folio::select('folio.number','guest_detail.room_number','contact_person.full_name')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->where('folio.number',$folioNumberFrom)->first();
        $folioTo = Folio::select('folio.number','guest_detail.room_number','contact_person.full_name')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->where('folio.number',$folioNumberTo)->first();
        $breakdown = DB::table('sub_folio')->select('breakdown1')->orderByDesc('breakdown1')->first()->breakdown1 + 1;
        $folioBalance = ProcedureQueryController::getFolioBalance2($folioNumberFrom);
        if(!empty($folioFrom) && !empty($folioTo)){
            if($balanceType == 'charge'){
                if($folioBalance['debit'] > 0){
                    $subFolioIDFrom= ProcedureQueryController::insertSubFolio1($folioFrom->number, GlobalVariableController::$subFolioGroup['A'], $folioFrom->room_number,ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDFrontOffice']),
                        ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferCharge']),  ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferCharge']), '', '', '', 'Transfer Balance To: '.$folioTo->number.'/'.$folioTo->room_number.'/'.$folioTo->full_name, '',
                        '', GlobalVariableController::$transactionType['Credit'], '', '', '', '', '', GlobalVariableController::$postingType['Transfer'], '', 0, 1, $request->amount, '', false, true, '', $params['user_id']);
                    $subFolioIDTo= ProcedureQueryController::insertSubFolio1($folioTo->number,$request->group_code, $folioTo->room_number,ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDFrontOffice']),
                        ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferCharge']),  ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferCharge']), '', '', '', 'Transfer Balance From: '.$folioFrom->number.'/'.$folioFrom->room_number.'/'.$folioFrom->full_name, '',
                        '', GlobalVariableController::$transactionType['Debit'], '', '', '', '', '', GlobalVariableController::$postingType['Transfer'], '', 0, 1, $request->amount, '', false, true, '', $params['user_id']);
                    //update sub folio transfer pair id
                    ProcedureQueryController::updateSubFolioTransferPairId($subFolioIDFrom, $subFolioIDTo);

                    return 0;
                }else {
                    return 2;
                }
            } else if ($balanceType == 'deposit'){
                if($folioBalance['credit'] > 0){
                    $subFolioIDFrom = ProcedureQueryController::insertSubFolio1($folioFrom->number, GlobalVariableController::$subFolioGroup['A'], $folioFrom->room_number,ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDFrontOffice']),
                        ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferPayment']),  ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferPayment']), '', '', '', 'Transfer Balance To: '.$folioTo->number.'/'.$folioTo->room_number.'/'.$folioTo->full_name, '',
                        '', GlobalVariableController::$transactionType['Debit'], '', '', '', '', '', GlobalVariableController::$postingType['Transfer'], '', 0, 1, $request->amount, '', false, true, '', $params['user_id']);
                    $subFolioIDTo = ProcedureQueryController::insertSubFolio1($folioTo->number, GlobalVariableController::$subFolioGroup['A'], $folioTo->room_number,ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDFrontOffice']),
                        ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferPayment']),  ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferPayment']), '', '', '', 'Transfer Balance From: '.$folioFrom->number.'/'.$folioFrom->room_number.'/'.$folioFrom->full_name, '',
                        '', GlobalVariableController::$transactionType['Credit'], '', '', '', '', '', GlobalVariableController::$postingType['Transfer'], '', 0, 1, $request->amount, '', false, true, '', $params['user_id']);
                    //update sub folio transfer pair id
                    ProcedureQueryController::updateSubFolioTransferPairId($subFolioIDFrom, $subFolioIDTo);

                    return 0;
                }else {
                    return 2;
                }
            }
        } else {
            return 1;
        }

        // return response()->json([
        //     'status' => 'success'
        // ]);
    }

    public function automaticRouting(Request $request){
        $account= DB::table('folio_routing')->select('folio_number', 'account_code')->where('folio_number',$request['folio_number'])->where('account_code',$request['account_code'])->first();
        if(empty($account)){
            DB::select(
                'CALL insert_folio_routing(?,?,?,?,?)',[
                    $request['folio_number'], $request['account_code'], $request['folio_transfer'], $request['sub_folio'], $request['user_id']
                ]);

                $logParams = ['actionId' => GlobalVariableController::$logUserAction['RoutingFolio'], 'link1' => $request['folio_number'], 'remark'=>$request['folio_transfer'].'/'.$request['account_code'], 'userid' => $request['user_id']];
                ProcedureQueryController::insertLogUserX($logParams);

                return response()->json([
                    'status' => 'success'
                ]);
        } else {
            return response()->json([
                'status' => 'the account already exist'
            ]);
        }
    }

    public function removeRouting(Request $request){
        $params=$request->all();
        $remove=Arr::get($params,'remove',2);

        if($remove == 1){
            DB::select(
                'CALL delete_folio_routing(?,?)',[
                    $request['folio_number'], $request['user_id']
                ]);
                self::insertLogUserTransaction(4, $request['folio_number'], $request['user_id'], '');
                return 1;
        } else if($remove == 2) {
            foreach($request['selected'] as $selected){
                DB::select(
                    'CALL delete_folio_routing_by_id_log(?,?)',[
                        $selected, $request['user_id']
                    ]);
            }
            self::insertLogUserTransaction(4, $request['folio_number'], $request['user_id'], '');
            return 2;
        }
    }

    public function returnTransfer(Request $request){
        if($request['type'] == '1'){
            foreach($request['selected'] as $selected){
                DB::select(
                    'CALL update_sub_folio_return(?,?,?,?)',[
                        $request['folio_number'], $selected, $request['sub_folio'], $request['user_id']
                    ]);
            }
            self::insertLogUserTransaction(5, $request['folio_number'], $request['user_id'], '');
        } else if($request['type'] == '2'){
            foreach($request['selected'] as $selected){
                DB::select(
                    'CALL delete_folio_routing(?,?)',[
                        $selected, $request['user_id']
                    ]);
            }
            self::insertLogUserTransaction(5, $request['folio_number'], $request['user_id'], '');
        } else if($request['type'] == '3'){
            foreach($request['selected'] as $selected){
                DB::select(
                    'CALL update_sub_folio_return(?,?,?,?)',[
                        $request['folio_number'], $selected, $request['sub_folio'], $request['user_id']
                    ]);
                DB::select(
                    'CALL delete_folio_routing(?,?)',[
                        $selected, $request['user_id']
                    ]);
            }
            self::insertLogUserTransaction(5, $request['folio_number'], $request['user_id'], '');
        }
    }

    public function getFolioType(Request $request){
        $type = HelperController::getFolioType($request['folio_number']);
        $status = HelperController::isFolioStatusOpen($request['folio_number']);

        return response()->json([
            'type' => $type,
            'status' => $status
        ]);
    }

    public function getSubFolioTotalAmount(Request $request){
        $params= $request->all();
        $idLog= Arr::get($params, 'idLog',0);
        $correctionBreakdown= HelperController::getSubFolioCorrectionBreakdownByIdLog($idLog);
        $result = SubFolio::select(DB::raw('SUM((CASE WHEN type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN amount_foreign ELSE 0 END) - (CASE WHEN type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN amount_foreign ELSE 0 END)) as amountForeign'))
            ->where('correction_breakdown',$correctionBreakdown)
            ->where('void','0')
            ->groupBy('correction_breakdown')->first();

        return $result->amountForeign;
    }

    public function correction(Request $request){
        $params= $request->all();
        $amountAfter = Arr::get($params,'amount',0);
        $idLog= Arr::get($params, 'idLog',0);
        $reason= Arr::get($params,'reason','');
        $userId= $request['userId'];
        $userBy= $request['userBy'];
        $correctionBreakdown= HelperController::getSubFolioCorrectionBreakdownByIdLog($idLog);
        $subFolioBreakdown1= HelperController::getSubFolioBreakdown1ByIdLog($idLog);
        $amountBefore = SubFolio::select(DB::raw('SUM((CASE WHEN type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN amount_foreign ELSE 0 END) - (CASE WHEN type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN amount_foreign ELSE 0 END)) as amountForeign'))
            ->where('correction_breakdown',$correctionBreakdown)
            ->where('void','0')
            ->groupBy('correction_breakdown')->first();
        $amountBefore= abs($amountBefore->amountForeign);
        $amountBalance= ($amountAfter > $amountBefore ? ($amountAfter - $amountBefore) : ($amountAfter < $amountBefore ? ($amountBefore - $amountAfter) : 0));
        $totalAmount= 0;
        $totalAmountForeign= 0;

        $xSubFolio = SubFolio::select('sub_folio.*',
            DB::raw('IF(type_code,(quantity * amount),-quantity * amount) as totalAmount'),
            DB::raw('IF(type_code,(quantity * amount_foreign),-quantity * amount_foreign) as totalAmountForeign'))
            ->where('breakdown1',$subFolioBreakdown1)
            ->where('void','0')->get();
        $result= [];
        $totalAmountBreakdown1 = HelperController::getSubFolioBreakdown1AmountForeign($subFolioBreakdown1);
        $count= 1;
        $totalCount = count($xSubFolio);
        if(!empty($xSubFolio)){
            foreach($xSubFolio as $subFolio){
                $typeCodeCorrection= ($amountAfter > $amountBefore ? $subFolio->type_code : ($amountAfter < $amountBefore ? ($subFolio->type_code == GlobalVariableController::$transactionType['Debit'] ? GlobalVariableController::$transactionType['Credit'] : GlobalVariableController::$transactionType['Debit']) :  $subFolio->type_code));

                if(count($xSubFolio) > 1){
                    if($count < $totalCount){
                        $amount= FormatController::round3(($amountBalance * $subFolio->totalAmount) / $totalAmountBreakdown1);
                        $amountForeign= FormatController::round3($amountBalance * $subFolio->totalAmountForeign / $totalAmountBreakdown1);
                    }else if($count == $totalCount){
                        $amount = FormatController::round3($amountBalance - $totalAmount);
                        $amountForeign = FormatController::round3($amountBalance - $totalAmountForeign);
                    }
                    $count++;
                }else{
                    $amount= $amountBalance - $totalAmount;
                    $amountForeign= ($amountBalance * $subFolio->exchange_rate) - $totalAmountForeign;
                }
                $breakdown2= $subFolio->breakdown2;

                $totalAmount += $amount;
                $totalAmountForeign += $amountForeign;

                if($amount > 0 && $amountForeign > 0){
                    $breakdown1= HelperController::getSubFolioBreakdown1();
                    $subFolioId= ProcedureQueryController::insertSubFolioX($subFolio->folio_number,$subFolio->belongs_to,$subFolio->id_log,$subFolio->group_code,$subFolio->room_number,$subFolio->sub_department_code,$subFolio->account_code,
                            $subFolio->account_code,$subFolio->package_code,$subFolio->default_currency_code,$subFolio->currency_code,'Correction for ID: '.$subFolio->id_log.', Reason: '.$reason, '','',$typeCodeCorrection,$subFolio->card_bank_code,$subFolio->card_type_code,$userId,
                            $reason,$subFolio->correction_breakdown,$breakdown1, $breakdown2, $subFolio->direct_bill_code, GlobalVariableController::$postingType['None'], $subFolio->extra_charge_id,1,$amount,$amountForeign,$subFolio->exchange_rate, true,$userId);

                    //update transfer pair id
                    if($subFolio->transfer_pair_id > 0){
                        if(HelperController::variant($subFolio->is_pair_with_deposit)){
                            $breakdown1= HelperController::getSubFolioBreakdown1();
                            $guestDepositPair = GuestDeposit::where('id_log',$subFolio->transfer_pair_id)->first();
                            $typeCode = $typeCodeCorrection == GlobalVariableController::$transactionType['Debit'] ? GlobalVariableController::$transactionType['Credit'] : GlobalVariableController::$transactionType['Debit'];
                            $guestDepositIdPair = ProcedureQueryController::insertGuestDeposit($guestDepositPair->reservation_number, $guestDepositPair->sub_department_code, $guestDepositPair->account_code, $guestDepositPair->default_currency_code, $amountForeign, $guestDepositPair->exchange_rate, $guestDepositPair->currency_code, AuditLogController::auditDate(),
                                'Correction for ID : '.$guestDepositPair->id_log, $guestDepositPair->document_number, $typeCode, $guestDepositPair->card_bank_code,$guestDepositPair->card_type_code, true, $userBy, 'Reason : '.$reason, $guestDepositPair->correction_breakdown, '', $userId);
                            ProcedureQueryController::updateGuestDepositTransferPairIdFolio($guestDepositIdPair, $subFolioId);
                        }else{
                            $breakdown1= HelperController::getSubFolioBreakdown1();
                            $subFolioPair = SubFolio::where('id_log',$subFolio->transfer_pair_id)->first();
                            $typeCode = $typeCodeCorrection == GlobalVariableController::$transactionType['Debit'] ? GlobalVariableController::$transactionType['Credit'] : GlobalVariableController::$transactionType['Debit'];
                            $subFolioIdPair = ProcedureQueryController::insertSubFolioX($subFolioPair->folio_number,$subFolioPair->belongs_to,$subFolioPair->id_log,$subFolioPair->group_code,$subFolioPair->room_number,$subFolioPair->sub_department_code,$subFolioPair->account_code,
                                $subFolioPair->account_code,$subFolioPair->package_code,$subFolioPair->default_currency_code,$subFolioPair->currency_code,'Correction for ID: '.$subFolioPair->id_log.', Reason: '.$reason, '','',$typeCode,$subFolioPair->card_bank_code,$subFolioPair->card_type_code,$userId,
                                $reason,$subFolioPair->correction_breakdown,$breakdown1, $breakdown2, $subFolioPair->direct_bill_code, GlobalVariableController::$postingType['None'], $subFolioPair->extra_charge_id,1,$amount,$amountForeign,$subFolioPair->exchange_rate, true,$userId);
                            ProcedureQueryController::updateSubFolioTransferPairId($subFolioId, $subFolioIdPair);
                        }
                    }
                    $logParams = ['actionId' => GlobalVariableController::$logUserAction['CorrectTransaction'], 'link1' => $subFolio->folio_number, 'link2' => $subFolioId, 'link3'=>$subFolio->id_log, 'remark' => $reason, 'userid' => $userBy];
                    ProcedureQueryController::insertLogUserX($logParams);
                }
            }
        }
        return response()->json([
            'tamount'=> $xSubFolio,
            'tamountf' => $totalAmountForeign]);
    }
    // UPDATE SUB DEPARTMENT / REMARK / DOC NUMBER
    public function editSubDepartment($id){
        $subDepartment = SubFolio::select('sub_department_code')->where('id_log',$id)->first();

        return response()->json($subDepartment);
    }

    public function editRemark($id){
        $remark = SubFolio::select('remark')->where('id_log',$id)->first();

        return response()->json($remark);
    }

    public function editDocumentNumber($id){
        $documentNumber = SubFolio::select('document_number')->where('id_log',$id)->first();

        return response()->json($documentNumber);
    }

    public function editDirectBill($id){
        $directBill = SubFolio::select('direct_bill_code')->where('id_log',$id)->first();

        return response()->json($directBill);
    }

    public function dataLookupSubDepartment($idLog){
        $subFolio = SubFolio::select('sub_department_code','account_code')->where('id_log',$idLog)->first();
        if(empty($subFolio)){
            $subDepartment= [];
        } else {
            $account = Account::selectRaw('sub_department_code')->where('code',$subFolio->account_code)->first()->sub_department_code;
            $account = explode('|',$account);
            $subDepartment = SubDepartment::select('cfg_init_sub_department.code','cfg_init_sub_department.name')
                ->whereIn('cfg_init_sub_department.code',$account)
                ->orderBy('id_sort');
                if(count($subDepartment->get()) > 0){
                    $subDepartment->orWhere('cfg_init_sub_department.code',$subFolio->sub_department_code);
                }
            $subDepartment = $subDepartment->get();
        }


        return response()->json($subDepartment);
    }

    public function dataLookupCompany($idLog){
        $subFolio = SubFolio::select('cfg_init_account.sub_group_code', 'sub_folio.direct_bill_code')
            ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
            ->where('sub_folio.id_log', $idLog)
            ->first();
        // $account = Account::select('sub_group_code')->where('code', $subFolio->account_code)->first();
        $company= [];
        if(!empty($subFolio)){
            $company = Company::select('code', 'name');
            if($subFolio->sub_group_code == GlobalVariableController::$accountSubGroup['AccountPayable']){
                $company->where('is_business_source','-1');
            } else if ($subFolio->sub_group_code == GlobalVariableController::$accountSubGroup['AccountReceivable']){
                $company->where('is_direct_bill','-1');
            }
            if(count($company->get()) > 0){
                $company->orWhere('code',$subFolio->direct_bill_code);
            }
            $company = $company->orderBy('company.name')->get();
        }

        return response()->json($company);
    }

    public function updateSubDepartment(Request $request){
        $params = $request->all();
        $subDepartment = Arr::get($params, 'sub_department_code','');
        $idLog = Arr::get($params, 'id_log','');
        $isShowProperties = Arr::get($params, 'is_show_properties', false);
        $userID = Arr::get($params, 'user_id','');
        $validator = Validator::make($request->all(), [
            'sub_department_code' => 'required',
            'id_log' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        ProcedureQueryController::updateSubFolioSubDepartment($idLog, $subDepartment, $isShowProperties, $userID);
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

        ProcedureQueryController::updateSubFolioRemark($request->id_log, $remark, $request->user_id);
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

        ProcedureQueryController::updateSubFolioDocumentNumber($request->id_log, $documentNumber, $request->user_id);
        return 0;
    }

    public function updateDirectBill(Request $request){
        $params = $request->all();
        $company = Arr::get($params, 'company_code','');
        $validator = Validator::make($request->all(), [
            'id_log' => 'required',
            'company_code' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        ProcedureQueryController::updateSubFolioDirectBillCode($request->id_log, $company, $request->user_id);
        return 0;
    }

    public function properties1($idLog){
        $mainTableName = 'sub_folio';
        $breakdown1 = HelperController::getSubFolioBreakdown1ByIdLog($idLog);
        $listBreakdown = [];
        $informationBreakdown = DB::table($mainTableName)
            ->select(
                $mainTableName.'.folio_number',
                $mainTableName.'.belongs_to',
                $mainTableName.'.group_code as sub_folio',
                DB::raw('CONCAT('.$mainTableName.'.account_code, " - ", cfg_init_account.name) AS account'),
                DB::raw('SUM('.$mainTableName.'.quantity * '.$mainTableName.'.amount) AS total_amount'),
                $mainTableName.'.default_currency_code',
                DB::raw('SUM('.$mainTableName.'.quantity * '.$mainTableName.'.amount_foreign) AS total_amount_foreign'),
                $mainTableName.'.exchange_rate',
                $mainTableName.'.currency_code',
                $mainTableName.'.audit_date',
                $mainTableName.'.remark',
                $mainTableName.'.void',
                $mainTableName.'.user_id',
                $mainTableName.'.id_log',
                'cfg_init_sub_department.name as sub_department',
                'contact_person.title_code',
                'contact_person.full_name',
                'guest_detail.room_number',
                'contact_person1.title_code as title_code_origin',
                'contact_person1.full_name as full_name_origin',
                'guest_detail1.room_number as room_number_origin',
                'company.name as company',
                'const_transaction_type.name as type')
            ->leftJoin('cfg_init_account', $mainTableName.'.account_code', 'cfg_init_account.code')
            ->leftJoin('cfg_init_sub_department', $mainTableName.'.sub_department_code', 'cfg_init_sub_department.code')
            ->leftJoin('folio', $mainTableName.'.folio_number', 'folio.number')
            ->leftJoin('folio as folio1', $mainTableName.'.belongs_to', 'folio1.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('contact_person as contact_person1', 'folio1.contact_person_id', 'contact_person1.id')
            ->leftJoin('guest_detail as guest_detail1', 'folio1.guest_detail_id', 'guest_detail1.id')
            ->leftJoin('company', $mainTableName.'.direct_bill_code', 'company.code')
            ->leftJoin('const_transaction_type', $mainTableName.'.type_code', 'const_transaction_type.code')
            ->where($mainTableName.'.breakdown1', $breakdown1)
            ->groupBy($mainTableName.'.breakdown1')
            ->first();

        if(!empty($informationBreakdown)){
            $listBreakdown = DB::table($mainTableName)
                ->select(
                    $mainTableName.'.folio_number',
                    $mainTableName.'.sub_department_code',
                    $mainTableName.'.account_code',
                    $mainTableName.'.breakdown1',
                    $mainTableName.'.breakdown2',
                    'cfg_init_sub_department.name as sub_department',
                    DB::raw('CONCAT(' .$mainTableName. '.account_code, " - ", cfg_init_account.name) AS account'),
                    DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariableController::$transactionType['Debit']. '", ' .$mainTableName. '.quantity * ' .$mainTableName. '.amount, 0)) debit'),
                    DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariableController::$transactionType['Credit']. '", ' .$mainTableName. '.quantity * ' .$mainTableName. '.amount, 0)) credit'),
                    $mainTableName.'.default_currency_code',
                    DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariableController::$transactionType['Debit']. '", ' .$mainTableName. '.quantity * ' .$mainTableName. '.amount_foreign, 0)) debit_foreign'),
                    DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariableController::$transactionType['Credit']. '", ' .$mainTableName. '.quantity * ' .$mainTableName. '.amount_foreign, 0)) credit_foreign'),
                    'sub_folio.exchange_rate',
                    'sub_folio.currency_code',
                    $mainTableName.'.direct_bill_code',
                    $mainTableName.'.id_log',
                    'cfg_init_account.sub_group_code',
                    'company.name as company')
                ->leftJoin('cfg_init_sub_department', $mainTableName.'.sub_department_code','cfg_init_sub_department.code')
                ->leftJoin('cfg_init_account', $mainTableName.'.account_code', 'cfg_init_account.code')
                ->leftJoin('company', 'sub_folio.direct_bill_code', 'company.code')
                ->where($mainTableName.'.breakdown1', $breakdown1)
                ->groupBy($mainTableName.'.breakdown1', $mainTableName.'.breakdown2')
                ->get();

        }

        return response()->json([
            'list' => $listBreakdown,
            'information' => $informationBreakdown
            ]);

    }

    public function properties2($idLog){
        $mainTableName = 'sub_folio';
        $breakdown1 = HelperController::getSubFolioBreakdown1ByIdLog($idLog);
        $breakdown2 = HelperController::getSubFolioBreakdown2ByIdLog($idLog);
        $listBreakdown = [];
        $informationBreakdown = DB::table($mainTableName)
            ->select(
                $mainTableName.'.folio_number',
                $mainTableName.'.belongs_to',
                $mainTableName.'.group_code as sub_folio',
                DB::raw('CONCAT('.$mainTableName.'.account_code, " - ", cfg_init_account.name) AS account'),
                DB::raw('SUM('.$mainTableName.'.quantity * '.$mainTableName.'.amount) AS total_amount'),
                $mainTableName.'.default_currency_code',
                DB::raw('SUM('.$mainTableName.'.quantity * '.$mainTableName.'.amount_foreign) AS total_amount_foreign'),
                $mainTableName.'.exchange_rate',
                $mainTableName.'.currency_code',
                $mainTableName.'.audit_date',
                $mainTableName.'.remark',
                $mainTableName.'.void',
                $mainTableName.'.user_id',
                $mainTableName.'.id_log',
                'cfg_init_sub_department.name as sub_department',
                'contact_person.title_code',
                'contact_person.full_name',
                'guest_detail.room_number',
                'contact_person1.title_code as title_code_origin',
                'contact_person1.full_name as full_name_origin',
                'guest_detail1.room_number as room_number_origin',
                'company.name as company',
                'const_transaction_type.name as type')
            ->leftJoin('cfg_init_account', $mainTableName.'.account_code', 'cfg_init_account.code')
            ->leftJoin('cfg_init_sub_department', $mainTableName.'.sub_department_code', 'cfg_init_sub_department.code')
            ->leftJoin('folio', $mainTableName.'.folio_number', 'folio.number')
            ->leftJoin('folio as folio1', $mainTableName.'.belongs_to', 'folio1.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('contact_person as contact_person1', 'folio1.contact_person_id', 'contact_person1.id')
            ->leftJoin('guest_detail as guest_detail1', 'folio1.guest_detail_id', 'guest_detail1.id')
            ->leftJoin('company', $mainTableName.'.direct_bill_code', 'company.code')
            ->leftJoin('const_transaction_type', $mainTableName.'.type_code', 'const_transaction_type.code')
            ->where($mainTableName.'.breakdown1', $breakdown1)
            ->where($mainTableName.'.breakdown2', $breakdown2)
            ->groupBy($mainTableName.'.breakdown1', $mainTableName.'.breakdown2')
            ->first();

        if(!empty($informationBreakdown)){
            $listBreakdown = DB::table($mainTableName)
                ->select(
                    $mainTableName.'.folio_number',
                    $mainTableName.'.sub_department_code',
                    $mainTableName.'.account_code',
                    $mainTableName.'.breakdown1',
                    $mainTableName.'.breakdown2',
                    'cfg_init_sub_department.name as sub_department',
                    DB::raw('CONCAT(' .$mainTableName. '.account_code, " - ", cfg_init_account.name) AS account'),
                    DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariableController::$transactionType['Debit']. '", ' .$mainTableName. '.quantity * ' .$mainTableName. '.amount, 0)) debit'),
                    DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariableController::$transactionType['Credit']. '", ' .$mainTableName. '.quantity * ' .$mainTableName. '.amount, 0)) credit'),
                    $mainTableName.'.default_currency_code',
                    DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariableController::$transactionType['Debit']. '", ' .$mainTableName. '.quantity * ' .$mainTableName. '.amount_foreign, 0)) debit_foreign'),
                    DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariableController::$transactionType['Credit']. '", ' .$mainTableName. '.quantity * ' .$mainTableName. '.amount_foreign, 0)) credit_foreign'),
                    'sub_folio.exchange_rate',
                    'sub_folio.currency_code',
                    $mainTableName.'.direct_bill_code',
                    $mainTableName.'.id_log',
                    'cfg_init_account.sub_group_code')
                ->leftJoin('cfg_init_sub_department', $mainTableName.'.sub_department_code','cfg_init_sub_department.code')
                ->leftJoin('cfg_init_account', $mainTableName.'.account_code', 'cfg_init_account.code')
                ->where($mainTableName.'.breakdown1', $breakdown1)
                ->where($mainTableName.'.breakdown2', $breakdown2)
                ->groupBy($mainTableName.'.id_log')
                ->get();
        }

        return response()->json([
            'list' => $listBreakdown,
            'information' => $informationBreakdown
            ]);

    }

    public function properties3($idLog){
        $mainTableName = 'sub_folio';
        $informationBreakdown = DB::table($mainTableName)
            ->select(
                $mainTableName.'.folio_number',
                $mainTableName.'.belongs_to',
                $mainTableName.'.group_code as sub_folio',
                DB::raw('CONCAT('.$mainTableName.'.account_code, " - ", cfg_init_account.name) AS account'),
                DB::raw('SUM('.$mainTableName.'.quantity * '.$mainTableName.'.amount) AS total_amount'),
                $mainTableName.'.default_currency_code',
                DB::raw('SUM('.$mainTableName.'.quantity * '.$mainTableName.'.amount_foreign) AS total_amount_foreign'),
                $mainTableName.'.exchange_rate',
                $mainTableName.'.currency_code',
                $mainTableName.'.audit_date',
                $mainTableName.'.remark',
                $mainTableName.'.void',
                $mainTableName.'.user_id',
                $mainTableName.'.id_log',
                'cfg_init_sub_department.name as sub_department',
                'contact_person.title_code',
                'contact_person.full_name',
                'guest_detail.room_number',
                'contact_person1.title_code as title_code_origin',
                'contact_person1.full_name as full_name_origin',
                'guest_detail1.room_number as room_number_origin',
                'company.name as company',
                'const_transaction_type.name as type')
            ->leftJoin('cfg_init_account', $mainTableName.'.account_code', 'cfg_init_account.code')
            ->leftJoin('cfg_init_sub_department', $mainTableName.'.sub_department_code', 'cfg_init_sub_department.code')
            ->leftJoin('folio', $mainTableName.'.folio_number', 'folio.number')
            ->leftJoin('folio as folio1', $mainTableName.'.belongs_to', 'folio1.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('contact_person as contact_person1', 'folio1.contact_person_id', 'contact_person1.id')
            ->leftJoin('guest_detail as guest_detail1', 'folio1.guest_detail_id', 'guest_detail1.id')
            ->leftJoin('company', $mainTableName.'.direct_bill_code', 'company.code')
            ->leftJoin('const_transaction_type', $mainTableName.'.type_code', 'const_transaction_type.code')
            ->where($mainTableName.'.id_log', $idLog)
            ->first();

        return response()->json([
            'information' => $informationBreakdown
            ]);

    }

    public function getPackageList(){
        $package = Package::select('code', 'name')->where('is_active','-1')->orderBy('name')->get();

        return response()->json($package);
    }

    public function packageLookup(Request $request){
        $params = $request->all();
        $businessSource = Arr::get($params, 'business_source_code', '');
        $businessSourceList = DataLookupController::company(true,null);
        $commission = DB::table('const_commission_type')->get();
        $packageList = Package::select(
            DB::raw('ROUND(cfg_init_package.quantity) as quantity'),
            'cfg_init_package.amount',
            'cfg_init_package.code',
            'cfg_init_package.name as name',
            'cfg_init_package_business_source.account_code',
            'cfg_init_package_business_source.commission_type_code',
            'cfg_init_package_business_source.commission_value',
            DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) as account'))
            ->leftJoin('cfg_init_package_business_source', 'cfg_init_package.code','cfg_init_package_business_source.package_code')
            ->leftJoin('cfg_init_account', 'cfg_init_package_business_source.account_code','cfg_init_account.code')
            ->where('show_in_transaction','-1')
            ->where('is_active','-1')
            ->orderBy('cfg_init_package.name');

        if(!empty($businessSource)) {
            $packageList->where('cfg_init_package_business_source.company_code',$businessSource);
        } else {
            $packageList->whereNull('cfg_init_package_business_source.company_code');
        }

        return response()->json([
            'business_source' => $businessSourceList,
            'package' => $packageList->get(),
            'commission_type' => $commission
        ]);
    }

    public function packageBreakdown($packageCode){
        $breakdown = DB::table('cfg_init_package_breakdown')
            ->select(
                DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) as account'),
                DB::raw('ROUND(cfg_init_package_breakdown.quantity) as quantity'),
                'cfg_init_package_breakdown.amount',
                'cfg_init_package_breakdown.remark')
            ->leftJoin('cfg_init_account', 'cfg_init_package_breakdown.account_code','cfg_init_account.code')
            ->orderBy('cfg_init_package_breakdown.id_log')
            ->where('cfg_init_package_breakdown.package_code', $packageCode)
            ->get();

        return response()->json($breakdown);
    }

    public function insertPackage(Request $request) {
        $params = $request->all();
        $validator = Validator::make($request->all(), [
            'room_number' => 'required',
            'folio_number' => 'required',
            'package_code' => 'required',
            'adult' => 'required',
            'child' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        $adult = Arr::get($params, 'adult', 0);
        $child = Arr::get($params, 'child', 0);
        $businessSourceCode = Arr::get($params, 'business_source_code', '');
        $commissionTypeCode = Arr::get($params, 'commission_type_code', '');
        $commissionValue = Arr::get($params, 'commission_value', 0);
        $subFolioGroupCode = Arr::get($params, 'sub_folio', 'A');
        $roomNumber = $request->room_number;
        $folioNumber = $request->folio_number;
        $userID = $request->user_id;
        $packageCode = $request->package_code;
        $allowZeroAmount = GlobalVariableController::allowZeroAmount();
        $package = Package::where('code', $packageCode)->get();


        $result = 255;
        //0: Succes
        //1: Breakdown Too Large
        //255: Posting Extra Charge Failed

        if(count($package) > 0 ) {
            foreach($package as $packageX){

                $subDepartmentCode = $packageX->sub_department_code;
                $accountCode = $packageX->account_code;
                $amountB4Breakdown = HelperController::getTotalBreakdownAmount($packageX->quantity, $packageX->amount, $packageX->extra_pax, $packageX->per_pax, $packageX->include_child,
                    $packageX->per_pax_extra, $packageX->max_pax, $adult, $child);
                $packageTaxAndServiceCode = $packageX->tax_and_service_code;
                $amountB4Breakdown = HelperController::getBasicTaxService($packageX->account_code, $packageTaxAndServiceCode, $amountB4Breakdown);
                $amountB4Breakdown = $amountB4Breakdown['total'];
                $breakdown = DB::table('cfg_init_package_breakdown')
                    ->where('package_code',$request->package_code)->get();

                $totalBreakdown = 0;
                if(count($breakdown) > 0) {
                    foreach($breakdown as $breakdownX){
                        if(HelperController::variant($breakdownX->is_amount_percent)){
                            $breakdownAmount = HelperController::getTotalBreakdownAmount($breakdownX->quantity, $packageX->amount * $breakdownX->amount / 100, $breakdownX->extra_pax, $breakdownX->per_pax,
                                $breakdownX->include_child, $breakdownX->per_pax_extra, $breakdownX->max_pax, $adult, $child);
                        } else {
                            $breakdownAmount = HelperController::getTotalBreakdownAmount($breakdownX->quantity, $breakdownX->amount, $breakdownX->extra_pax, $breakdownX->per_pax,
                            $breakdownX->include_child, $breakdownX->per_pax_extra, $breakdownX->max_pax, $adult, $child);
                        }
                        $breakdownAmount = HelperController::getBasicTaxService($breakdownX->account_code, $breakdownX->tax_and_service_code, $breakdownAmount);
                        $breakdownAmount = $breakdownAmount['total'];
                        $totalBreakdown = $totalBreakdown + $breakdownAmount;
                    }
                }
                // commission
                $commission = 0;
                if(!empty($businessSourceCode)){
                    $commission = HelperController::getCommissionPackage($commissionTypeCode, $commissionValue, $amountB4Breakdown, AuditLogController::auditDate());
                }

                $amountAfterBreakdown = $amountB4Breakdown - $totalBreakdown - $commission;

                if($amountAfterBreakdown > 0){
                    $result = 0;
                    $amountAfterBreakdown = HelperController::getBasicTaxService2($packageX->account_code, $packageX->tax_and_service_code, $amountAfterBreakdown);

                    // posting package
                    $subDepartmentCode = $packageX->sub_department_code;
                    $accountCodeMaster = $packageX->account_code;
                    $correctionBreakdown = HelperController::getSubFolioCorrectionBreakdown();
                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                    ProcedureQueryController::insertSubFolio2($folioNumber, $subFolioGroupCode, $roomNumber, $subDepartmentCode, $packageX->account_code, $accountCodeMaster, $packageX->product_code, $packageCode, '', 'Package '.$packageX->name, '', '',
                        GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, GlobalVariableController::$postingType['None'], 0, $amountAfterBreakdown['basic'], $amountAfterBreakdown['tax'], $amountAfterBreakdown['service'], 0,
                        $allowZeroAmount, true, '', $userID );

                    // posting breakdown
                    if(count($breakdown) > 0) {
                        foreach($breakdown as $breakdownX){
                            if(HelperController::variant($breakdownX->is_amount_percent)){
                                $breakdownAmount = HelperController::getTotalBreakdownAmount($breakdownX->quantity, $packageX->amount * $breakdownX->amount / 100, $breakdownX->extra_pax, $breakdownX->per_pax,
                                    $breakdownX->include_child, $breakdownX->per_pax_extra, $breakdownX->max_pax, $adult, $child);
                            } else {
                                $breakdownAmount = HelperController::getTotalBreakdownAmount($breakdownX->quantity, $breakdownX->amount, $breakdownX->extra_pax, $breakdownX->per_pax,
                                    $breakdownX->include_child, $breakdownX->per_pax_extra, $breakdownX->max_pax, $adult, $child);
                            }
                            ProcedureQueryController::insertSubFolio1($folioNumber, $subFolioGroupCode, $roomNumber, $breakdownX->sub_department_code, $breakdownX->account_code, $accountCodeMaster, $breakdownX->product_code, $packageCode, '', 'Package Breakdown '.$breakdownX->remark, '', '', GlobalVariableController::$transactionType['Debit'],
                                '','', $correctionBreakdown, $breakdown1, $breakdownX->company_code, GlobalVariableController::$postingType['None'], $breakdownX->tax_and_service_code, 0, 1, $breakdownAmount, 0, false, true, '', $userID );
                        }
                    }

                    // Posting Commission
                    if($commission > 1){
                        ProcedureQueryController::insertSubFolio1($folioNumber, $subFolioGroupCode, $roomNumber, GlobalVariableController::globalSubDepartment(GlobalVariableController::$configurationName['SDAccounting']), $accountCode, $packageX->account_code, '', $packageCode, '', 'Breakdown Commission Package '.$packageX->name, '', '',
                            GlobalVariableController::$transactionType['Debit'], '', '', $correctionBreakdown, $breakdown1, $businessSourceCode, GlobalVariableController::$postingType['None'], '', 0, 1, $commission, 0, false, true, '', $userID );
                    }
                } else {
                    $result = 1;
                }
            }
        }
        return $result;
    }

    public function getAdvancedCorrectionBreakdown($id) {
        $breakdown1 = SubFolio::select('breakdown1')->where('id_log', $id)->first();
        $result = [];
        $amount = 0;
        $auditDate = '';
        if(!empty($breakdown1)){
            $breakdown1 = $breakdown1->breakdown1;
            $breakdown= DB::table('sub_folio')
            ->select(
                'sub_folio.*',
                'cfg_init_sub_department.name as sub_department',
                'cfg_init_account.name as account')
            ->leftJoin('cfg_init_sub_department', 'sub_folio.sub_department_code', 'cfg_init_sub_department.code')
            ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
            ->where('sub_folio.breakdown1', $breakdown1)
            ->groupBy('sub_folio.breakdown1', 'sub_folio.breakdown2')
            ->get();
            $amount = ProcedureQueryController::getSubFolioBreakdownAmountForeign($breakdown[0]->correction_breakdown);
            $auditDate = $breakdown[0]->audit_date;

            if(count($breakdown) > 0) {
                foreach($breakdown as $breakdownX){
                    $amountForeign = ProcedureQueryController::getSubFolioBreakdownAmountForeign2($breakdownX->correction_breakdown, $breakdownX->breakdown2);

                    array_push($result, [
                            'id' => $breakdownX->id_log,
                            'breakdown1' => $breakdownX->breakdown1,
                            'breakdown2' => $breakdownX->breakdown2,
                            'sub_department' => $breakdownX->sub_department,
                            'account' => $breakdownX->account,
                            'amount_before' => FormatController::round3($amountForeign),
                            'amount' => FormatController::round3($amountForeign),
                            'fixed_amount' => false
                    ]);
                }
            }
        }

        return response()->json([
            'audit_date' => $auditDate,
            'amount' => FormatController::round3($amount),
            'data' => $result
        ]);
    }

    public function advancedCorrection(Request $request) {
        $params = $request->all();
        $totalAmount = $request->amount_after;
        $fixedTotalAmount = HelperController::trueFalseString($request->fixed_total_amount);
        $totalAmountBefore = $request->amount_before;
        $id = $request->id;
        $reason = $request->reason;
        $mainBreakdown1 = HelperController::getSubFolioBreakdown1ByIdLog($id);
        $data = $request->data;
        $userId = $request->user_id;

        if($totalAmount < 0){
            return 1;
        } else if($fixedTotalAmount && ($totalAmount <> $totalAmountBefore)){
            return 2;
        } else {
            $isThereMinus = false;
            $isThereChange = false;
            foreach($data as $dataX){
                if($dataX['amount_before'] <> $dataX['amount_after']){
                    $isThereChange = true;
                }
                if($dataX['amount_after'] < 0){
                    $isThereMinus = true;
                }

                if($isThereMinus && $isThereChange){
                    break;
                }
            }

            if($isThereMinus){
                return 2;
            } else if(!$isThereChange){
                return 3;
            } else {

                $isSubFolioFromPOS = HelperController::isSubFolioFromPOS($id, '0');
                $accountCode = HelperController::getSubFolioAccountCode($id);
                $isCharge = HelperController::getAccountGroupCode($accountCode) == GlobalVariableController::$accountGroup['Charge'];
            //CPOS Charge Transaction
                if($isCharge && $isSubFolioFromPOS){
                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                    $breakdown2 = '';
                //Zero Correction
                    for($x = 0; $x < count($data); $x++){
                    // foreach($data as $dataX){
                        $breakdown2 = $data[$x]->breakdown2;

                        $subFolio = SubFolio::select(
                            'sub_folio.*',
                            DB::raw('IF(sub_folio.type_code, (sub_folio.quantity * sub_folio.amount), -(sub_folio.quantity * sub_folio.amount)) AS TotalAmountX'),
                            DB::raw('IF(sub_folio.type_code, (sub_folio.quantity * sub_folio.amount_foreign), -(sub_folio.quantity * sub_folio.amount_foreign)) AS TotalAmount'),
                            'cfg_init_sub_department.name',
                            'cfg_init_account.name',
                            'pos_check_transaction.*')
                        ->leftJoin('cfg_init_sub_department', 'sub_folio.sub_department_code', 'cfg_init_sub_department.code')
                        ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                        ->leftJoin('pos_check_transaction', 'sub_folio.id_log', 'pos_check_transaction.sub_folio_id')
                        ->where('sub_folio.breakdown1', $mainBreakdown1)
                        ->where('sub_folio.breakdown2', $breakdown2)
                        ->get();

                        if(count($subFolio) > 0){
                            for($i = 0; $i < count($subFolio); $i++){
                            // foreach($subFolio as $subFolio[$i]){

                                if($subFolio[$i]->type_code == GlobalVariableController::$transactionType['Debit']){
                                    $typeCode = GlobalVariableController::$transactionType['Credit'];
                                } else {
                                    $typeCode = GlobalVariableController::$transactionType['Debit'];
                                }

                                $subFolioId1 = ProcedureQueryController::insertSubFolioX($subFolio[$i]->folio_number,$subFolio[$i]->belongs_to,$subFolio[$i]->id_log,$subFolio[$i]->group_code,$subFolio[$i]->room_number,$subFolio[$i]->sub_department_code,$subFolio[$i]->account_code,
                                    $subFolio[$i]->account_code,$subFolio[$i]->package_code,$subFolio[$i]->default_currency_code,$subFolio[$i]->currency_code,'Correction for ID: '.$subFolio[$i]->id_log.', Reason: '.$reason, '','',$typeCode,$subFolio[$i]->card_bank_code,$subFolio[$i]->card_type_code, $userId,
                                    $reason,$subFolio[$i]->correction_breakdown,$breakdown1, $breakdown2, $subFolio[$i]->direct_bill_code, GlobalVariableController::$postingType['None'], $subFolio[$i]->extra_charge_id,$subFolio[$i]->quantity, $subFolio[$i]->amount, $subFolio[$i]->amount_foreign,
                                    $subFolio[$i]->exchange_rate, true,$userId);

                                if($data[0] && $subFolio[0]){
                                    $posCheckNumber = $subFolio[0]->check_number;
                                    $posCaptainOrderID = '0';
                                    $posSubFolioID = $subFolioId1;
                                    $posInventoryCode = $subFolio[0]->inventory_code;
                                    $posTenanCode = $subFolio[0]->tenan_code;
                                    $posSeatNumber = $subFolio[0]->seat_number;
                                    $posProductCode = $subFolio[0]->product_code;
                                    $posPricePurchase = $subFolio[0]->price_purchase;
                                    $posPriceOriginal = $subFolio[0]->price_original;
                                    $posPrice = $subFolio[0]->price;
                                    $posDiscount = $subFolio[0]->discount;
                                    $posTax = $subFolio[0]->tax;
                                    $posService = $subFolio[0]->service;
                                    $posFolioTransfer = $subFolio[0]->folio_transfer;
                                }
                            }
                        }
                    }
                    ProcedureQueryController::insertCheckTransaction($posCheckNumber, $posCaptainOrderID, $posSubFolioID, $posInventoryCode, $posTenanCode, $posSeatNumber, $posProductCode, $posPricePurchase, $posPriceOriginal, $posPrice,
                         $posDiscount, $posTax, $posService, 0, $posFolioTransfer, false, false, $userId);

                    $posPrice = 0;
                    $posTax = 0;
                    $posService = 0;

                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                    $breakdown2 = '';

                    for($x = 0; $x < count($data); $x++){
                        $breakdown2 = $data[$x]['breakdown2'];

                        $subFolio = SubFolio::select(
                            'sub_folio.*',
                            DB::raw('IF(sub_folio.type_code, (sub_folio.quantity * sub_folio.amount), -(sub_folio.quantity * sub_folio.amount)) AS TotalAmountX'),
                            DB::raw('IF(sub_folio.type_code, (sub_folio.quantity * sub_folio.amount_foreign), -(sub_folio.quantity * sub_folio.amount_foreign)) AS TotalAmount'),
                            'cfg_init_sub_department.name',
                            'cfg_init_account.name',
                            'pos_check_transaction.*')
                        ->leftJoin('cfg_init_sub_department', 'sub_folio.sub_department_code', 'cfg_init_sub_department.code')
                        ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                        ->leftJoin('pos_check_transaction', 'sub_folio.id_log', 'pos_check_transaction.sub_folio_id')
                        ->where('sub_folio.breakdown1', $mainBreakdown1)
                        ->where('sub_folio.breakdown2', $breakdown2)
                        ->get();

                        $amountBalance = 0;
                        $amountBefore = $data[$x]['amount_before'];
                        $amountAfter = $data[$x]['amount_after'];
                        if($data[$x]['amount_after'] >= $data[$x]['amount_before']){
                            $amountBalance = $data[$x]['amount_after'] - $data[$x]['amount_before'];
                        } else if($data[$x]['amount_after'] < $data[$x]['amount_before']){
                            $amountBalance = $data[$x]['amount_before'] - $data[$x]['amount_after'];
                        }

                        $totalAmount = 0;
                        $totalAmountX = 0;
                        $totalAmountBreakdown1 = ProcedureQueryController::getSubFolioBreakdown1AmountForeign2($mainBreakdown1, $breakdown2);

                        if(count($subFolio) > 0){
                            for($i = 0; $i < count($subFolio); $i++){
                            // foreach($subFolio as $subFolio[$i]){

                                if($i == (count($subFolio) - 1)){
                                    $amount = $amountAfter / $subFolio[$i]->quantity - $totalAmount;
                                    $amountX = ($amountAfter / $subFolio[$i]->quantity) * $subFolio[$i]->exchange_rate - $totalAmountX;
                                } else {
                                    $amount = ($amountAfter / $subFolio[$i]->quantity) * $subFolio[$i]->TotalAmount - $totalAmountBreakdown1;
                                    $amountX = ($amountAfter / $subFolio[$i]->quantity) * $subFolio[$i]->TotalAmountX - $totalAmountBreakdown1;
                                }

                                $totalAmount += $amount;
                                $totalAmountX += $amountX;

                                $subFolioId1 = ProcedureQueryController::insertSubFolioX($subFolio[$i]->folio_number,$subFolio[$i]->belongs_to,$subFolio[$i]->id_log,$subFolio[$i]->group_code,$subFolio[$i]->room_number,$subFolio[$i]->sub_department_code,$subFolio[$i]->account_code,
                                    $subFolio[$i]->account_code,$subFolio[$i]->package_code,$subFolio[$i]->default_currency_code,$subFolio[$i]->currency_code,'Correction for ID: '.$subFolio[$i]->id_log.', Reason: '.$reason, '','',$typeCode,$subFolio[$i]->card_bank_code,$subFolio[$i]->card_type_code, $userId,
                                    $reason,$subFolio[$i]->correction_breakdown,$breakdown1, $breakdown2, $subFolio[$i]->direct_bill_code, GlobalVariableController::$postingType['None'], $subFolio[$i]->extra_charge_id,$subFolio[$i]->quantity, $amountX, $amount,
                                    $subFolio[$i]->exchange_rate, true,$userId);

                                if($subFolio[$i]->account_code == GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax'])){
                                    $posTax += $amountX;
                                } else if($subFolio[$i]->account_code == GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService'])){
                                    $posService += $amountX;
                                } else {
                                    $posPrice += $amountX;
                                }

                                if($data[0] && $subFolio[0]){
                                    $posCheckNumber = $subFolio[0]->check_number;
                                    $posCaptainOrderID = '0';
                                    $posSubFolioID = $subFolioId1;
                                    $posInventoryCode = $subFolio[0]->inventory_code;
                                    $posTenanCode = $subFolio[0]->tenan_code;
                                    $posSeatNumber = $subFolio[0]->seat_number;
                                    $posProductCode = $subFolio[0]->product_code;
                                    $posPricePurchase = $subFolio[0]->price_purchase;
                                    $posDiscount = $subFolio[0]->discount;
                                    $posFolioTransfer = $subFolio[0]->folio_transfer;
                                }
                            }
                        }
                    }
                    $posPriceOriginal = $posPrice;
                    ProcedureQueryController::insertCheckTransaction($posCheckNumber, $posCaptainOrderID, $posSubFolioID, $posInventoryCode, $posTenanCode, $posSeatNumber, $posProductCode, $posPricePurchase, $posPriceOriginal, $posPrice,
                         $posDiscount, $posTax, $posService, 0, $posFolioTransfer, false, false, $userId);

                } else {

                    $posPrice = 0;
                    $posTax = 0;
                    $posService = 0;
                    $posSubFolioID = '';
                    $breakdown1 = HelperController::getSubFolioBreakdown1();
                    $breakdown2 = '';

                    if(count($data) > 0){
                        for($x = 0; $x < count($data); $x++){
                            $breakdown2 = $data[$x]['breakdown2'];

                            $subFolio = SubFolio::select(
                                'sub_folio.*',
                                DB::raw('IF(sub_folio.type_code, (sub_folio.quantity * sub_folio.amount), -(sub_folio.quantity * sub_folio.amount)) AS TotalAmountX'),
                                DB::raw('IF(sub_folio.type_code, (sub_folio.quantity * sub_folio.amount_foreign), -(sub_folio.quantity * sub_folio.amount_foreign)) AS TotalAmount'),
                                'cfg_init_sub_department.name',
                                'cfg_init_account.name',
                                'pos_check_transaction.*')
                            ->leftJoin('cfg_init_sub_department', 'sub_folio.sub_department_code', 'cfg_init_sub_department.code')
                            ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                            ->leftJoin('pos_check_transaction', 'sub_folio.id_log', 'pos_check_transaction.sub_folio_id')
                            ->where('sub_folio.breakdown1', $mainBreakdown1)
                            ->where('sub_folio.breakdown2', $breakdown2)
                            ->get();

                            $amountBalance = 0;
                            $amountBefore = $data[$x]['amount_before'];
                            $amountAfter = $data[$x]['amount_after'];
                            if($data[$x]['amount_after'] >= $data[$x]['amount_before']){
                                $amountBalance = $data[$x]['amount_after'] - $data[$x]['amount_before'];
                            } else if($data[$x]['amount_after'] < $data[$x]['amount_before']){
                                $amountBalance = $data[$x]['amount_before'] - $data[$x]['amount_after'];
                            }

                            $totalAmount = 0;
                            $totalAmountX = 0;
                            $totalAmountBreakdown1 = ProcedureQueryController::getSubFolioBreakdown1AmountForeign2($mainBreakdown1, $breakdown2);

                            if(count($subFolio) > 0){
                                for($i = 0; $i < count($subFolio); $i++){
                                // foreach($subFolio as $subFolio[$i]){

                                    if($amountAfter >= $amountBefore){
                                        $typeCode = $subFolio[$i]->type_code;
                                    } else if($amountAfter < $amountBefore){
                                        if($subFolio[$i]->type_code == GlobalVariableController::$transactionType['Credit']){
                                            $typeCode = GlobalVariableController::$transactionType['Debit'];
                                        } else {
                                            $typeCode = GlobalVariableController::$transactionType['Credit'];
                                        }
                                    }
                                    if($i == (count($subFolio) - 1)){
                                        $amount = $amountBalance - $totalAmount;
                                        $amountX = ($amountBalance * $subFolio[$i]->exchange_rate) - $totalAmountX;
                                    } else {
                                        $amount = ($amountBalance * $subFolio[$i]->TotalAmount) / $totalAmountBreakdown1;
                                        $amountX = ($amountBalance * $subFolio[$i]->TotalAmountX) / $totalAmountBreakdown1;
                                    }

                                    $totalAmount += $amount;
                                    $totalAmountX += $amountX;

                                    $subFolioId1 = ProcedureQueryController::insertSubFolioX($subFolio[$i]->folio_number,$subFolio[$i]->belongs_to,$subFolio[$i]->id_log,$subFolio[$i]->group_code,$subFolio[$i]->room_number,$subFolio[$i]->sub_department_code,$subFolio[$i]->account_code,
                                        $subFolio[$i]->account_code,$subFolio[$i]->package_code,$subFolio[$i]->default_currency_code,$subFolio[$i]->currency_code,'Correction for ID: '.$subFolio[$i]->id_log.', Reason: '.$reason, '','',$typeCode,$subFolio[$i]->card_bank_code,$subFolio[$i]->card_type_code, $userId,
                                        $reason,$subFolio[$i]->correction_breakdown,$breakdown1, $breakdown2, $subFolio[$i]->direct_bill_code, GlobalVariableController::$postingType['None'], $subFolio[$i]->extra_charge_id,$subFolio[$i]->quantity, $amountX, $amount,
                                        $subFolio[$i]->exchange_rate, true,$userId);

                                    if($subFolio[$i]->account_code == GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountTax'])){
                                        $posTax += $amountX;
                                    } else if($subFolio[$i]->account_code == GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountService'])){
                                        $posService += $amountX;
                                    } else {
                                        $posPrice += $amountX;
                                    }

                                    if($data[0] && $subFolio[0] && $isSubFolioFromPOS){
                                        $posCheckNumber = $subFolio[0]->check_number;
                                        $posCaptainOrderID = '0';
                                        $posSubFolioID = $subFolioId1;
                                        $posInventoryCode = $subFolio[0]->inventory_code;
                                        $posTenanCode = $subFolio[0]->tenan_code;
                                        $posSeatNumber = $subFolio[0]->seat_number;
                                        $posProductCode = $subFolio[0]->product_code;
                                        $posPricePurchase = $subFolio[0]->price_purchase;
                                        $posDiscount = $subFolio[0]->discount;
                                        $posFolioTransfer = $subFolio[0]->folio_transfer;
                                    }
                                }
                            }
                        }
                        if($posSubFolioID <> ''){
                            $posPriceOriginal = $posPrice;
                            ProcedureQueryController::insertCheckTransaction($posCheckNumber, $posCaptainOrderID, $posSubFolioID, $posInventoryCode, $posTenanCode, $posSeatNumber, $posProductCode, $posPricePurchase, $posPriceOriginal, $posPrice,
                                $posDiscount, $posTax, $posService, 0, $posFolioTransfer, false, false, $userId);
                        }
                    }
                    return 0;
                }
            }
        }

        return response()->json($request);
    }

    public static function insertLogUserTransaction($type, $folioNumber, $userId, $remark){
        //1=charnge/Payment 2= Refund 3=Transfer Transaction 4=RemoveRouting 5=Return Transfer
        $actionId = 0;
        if($type === 1){
            $actionId = GlobalVariableController::$logUserAction['InsertTransaction'];
        }
        else if($type === 2){
            $actionId = GlobalVariableController::$logUserAction['RefundDeposit'];
        }
        else if($type === 3){
            $actionId = GlobalVariableController::$logUserAction['TransferTransaction'];
        }
        else if($type === 4){
            $actionId = GlobalVariableController::$logUserAction['RemoveRouting'];
        }
        else if($type === 5){
            $actionId = GlobalVariableController::$logUserAction['ReturnTransfer'];
        }
        if($actionId !== 0){
            $logParams = ['actionId' => $actionId, 'link1' => $folioNumber, 'remark'=>$remark, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
    }

}
