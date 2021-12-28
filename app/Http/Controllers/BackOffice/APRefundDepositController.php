<?php

namespace App\Http\Controllers\BackOffice;

use App\Folio\Models\SubFolio;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\GlobalVariableController as GlobalVariable;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class APRefundDepositController extends Controller
{
    public function index(Request $request){
        $mainTableName = 'sub_folio';
        $filterList = [
            $mainTableName. '.folio_number',
            $mainTableName. '.room_number',
            'CONCAT(contact_person.title_code, contact_person.full_name)',
            $mainTableName. '.remark',
            $mainTableName. '.insert_by'
        ];

        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $dateFrom = Arr::get($search, 'date_from', '');
        $dateTo = Arr::get($search, 'date_to', '');
        $isPaid =Arr::get($search, 'is_paid', '0');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 5 ? $filterList[$searchBy] : '';

        $query = SubFolio::select(
            $mainTableName. '.folio_number',
            $mainTableName. '.room_number',
            $mainTableName. '.account_code',
            DB::raw('SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariable::$transactionType['Debit']. '", ' .$mainTableName. '.quantity*' .$mainTableName. '.amount, -(' .$mainTableName. '.quantity*' .$mainTableName. '.amount))) AS Amount'),
            $mainTableName. '.audit_date',
            $mainTableName. '.remark',
            $mainTableName. '.insert_by',
            $mainTableName. '.id_log',
            DB::raw('IFNULL(Payment.TotalPaid, 0) AS TotalPaid'),
            DB::raw('(SUM(IF(' .$mainTableName. '.type_code="' .GlobalVariable::$transactionType['Debit']. '", ' .$mainTableName. '.quantity*' .$mainTableName. '.amount, -(' .$mainTableName. '.quantity*' .$mainTableName. '.amount)))-IFNULL(Payment.TotalPaid, 0)) AS Outstanding'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS GuestName'),
            DB::raw('DATE(guest_detail.arrival) AS ArrivalDate'),
            DB::raw('DATE(guest_detail.departure) AS DepartureDate'),
            'cfg_init_account.journal_account_code')
            ->leftJoinSub(DB::table('acc_ap_no_show_payment_detail')->select('sub_folio_id', DB::raw('SUM(amount) as TotalPaid'))->groupBy('sub_folio_id'), 'Payment', $mainTableName.'.id_log', 'Payment.sub_folio_id')
            ->leftJoin('folio', $mainTableName. '.folio_number', 'folio.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_account', $mainTableName. '.account_code', 'cfg_init_account.code')
            ->where($mainTableName. '.account_code', GlobalVariable::globalAccount(GlobalVariable::$configurationName['AccountAPRefundDeposit']))
            ->where($mainTableName.'.void', '0')
            ->where('folio.status_code','<>', GLobalVariable::$folioStatus['CancelCheckIn'])
            ->groupBy('correction_breakdown');

            if(!empty($keyword) && !empty($searchBy)){
                $query->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
            };

        $query2 = DB::table($query, 'APNoShow')
            ->select('APNoShow.*')
            ->whereRaw('IF(Amount > TotalPaid, "0", "-1")="' .$isPaid.'"')
            ->orderBy('APNoShow.audit_date')
            ->orderBy('APNoShow.folio_number');


        if(!empty($dateFrom) && !empty($dateTo) && $dateFrom <= $dateTo){
            $query2->whereRaw('DATE(APNoShow.audit_date)>="' .FormatController::formatDate($dateFrom). '" AND DATE(APNoShow.audit_date)<="' .FormatController::formatDate($dateTo). '"');
        }

        return response()->json($query2->limit($limit)->get());
    }

    public function paymentDetail(Request $request){

        $paymentDetailTableName = 'acc_ap_no_show_payment_detail';
        $paymentTableName = 'acc_ap_no_show_payment';
        $query = DB::table($paymentDetailTableName)
            ->select(
                $paymentDetailTableName. '.ref_number',
                $paymentDetailTableName. '.amount',
                $paymentDetailTableName. '.user_id',
                $paymentDetailTableName. '.id_log',
                $paymentTableName. '.date',
                $paymentTableName. '.remark',
                DB::raw('CONCAT(' .$paymentTableName. '.journal_account_code, " - ", cfg_init_journal_account.name) AS JournalAccount'))
            ->leftJoin( $paymentTableName , $paymentDetailTableName. '.ref_number', $paymentTableName. '.ref_number')
            ->leftJoin('cfg_init_journal_account', $paymentTableName. '.journal_account_code', 'cfg_init_journal_account.code')
            ->where($paymentDetailTableName. '.sub_folio_id', $request->id)
            ->orderBy($paymentTableName. '.date');

      return response()->json($query->get());
    }

    public function saveData(Request $request, $mode){

        $validator = Validator::make(
            $request->all(),[
            'date' => 'required',
            'journal_account_code' => 'required',
            'data' => 'required',
            'ref_number' => $mode == GlobalVariable::$mode['Update'] ? 'required' : '',
            'user_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {

            DB::transaction(function () use ($request, $mode) {
                $params = $request->all();
                $discount = Arr::get($params, 'discount', 0);
                $date = Arr::get($params, 'date', '');
                $discountAccount = Arr::get($params, 'discount_journal_account_code', '');
                $bankAdministration = Arr::get($params, 'bank_administration', 0);
                $bankAdministrationAccount = Arr::get($params, 'ba_journal_account_code', '');
                $otherExpense = Arr::get($params, 'other_expense', 0);
                $otherExpenseAccount = Arr::get($params, 'oe_journal_account_code', '');
                $total = Arr::get($params, 'total', 0);
                $subTotal = Arr::get($params, 'sub_total', 0);
                $bankAccount = Arr::get($params, 'journal_account_code', '');
                $data = Arr::get($params, 'data', []);
                $remark = Arr::get($params, 'remark', '');
                $userID= $request->user_id;
                // $refNumber = '';


                //   FormMessage[0] := PChar('Value cannot below zero');
                //   FormMessage[1] := PChar('AP Already Paid');
                //   FormMessage[2] := PChar('Transaction already exist, please select another transaction');
                //   FormMessage[3] := PChar('Discount cannot be greater than Sub Total');
                //   FormMessage[4] := PChar('Amount cannot be greater than Outstanding');
                //   FormMessage[5] := PChar('PaymentDateCannotLowerThanIssuedDate');
                //   FormMessage[6] := PChar('PaymentDateIsGreaterThanTodayDate');


                // if(count($data) <= 0 || $date == ''
                //     || ( $discount > 0 && $discountAccount == '')
                //     || ( $bankAdministration > 0 && $bankAdministrationAccount == '')
                //     || ( $otherExpense > 0 && $otherExpenseAccount == '')
                //     || ( $total > 0 && $bankAccount == '')) {
                //         return 1;
                // } else
                if ( $discount < 0 || $bankAdministration < 0 || $otherExpense < 0 || $subTotal < 0){
                    return 0;
                } else if ( $discount > $subTotal ){
                    return 3;
                } else {
                    $isOutOfDate = false;
                    foreach($data as $dataX){
                        if(strtotime($date) < strtotime(FormatController::firstDayOfMonth($dataX['audit_date']))){
                            $isOutOfDate = true;
                            break;
                        }
                    }

                    if($isOutOfDate){
                        return 5;
                    }

                    if(strtotime($date) > strtotime(date('Y-m-d'))){
                        return 6;
                    }

                    if($mode == GlobalVariable::$mode['Update']){
                        ProcedureQueryController::deleteAPRefundDepositPayment($request->ref_number, $request->user_id);
                        $refNumber = $request->ref_number;
                        $journalGroupCode = GlobalVariable::$journalGroup['AccountPayable'];
                    } else {
                        $journalGroupCode = GlobalVariable::$journalGroup['AccountPayable'];
                        $refNumber = HelperController::getJournalRefNumber(GlobalVariable::$journalPrefix['AccountPayable'], $date);
                    }

                    $journalAccountCodeDiscount = '';
                    $journalAccountCodeBA = '';
                    $journalAccountCodeOE = '';
                    //Discount
                    if($discount > 0){
                        $journalAccountCodeDiscount = $discountAccount;
                    }
                    // Bank Admin
                    if($bankAdministration > 0){
                        $journalAccountCodeBA = $bankAdministrationAccount;
                    }
                    // Other Expense
                    if($otherExpense > 0){
                        $journalAccountCodeOE = $otherExpenseAccount;
                    }
                    ProcedureQueryController::insertJournal($refNumber, '', '', GlobalVariable::$journalType['Other'], $journalGroupCode, $date, 'AP Refund Deposit Payment', '', '', $userID);
                    ProcedureQueryController::insertAPRefundDepositPayment($refNumber, $bankAccount, $journalAccountCodeDiscount, $journalAccountCodeBA, $journalAccountCodeOE, $total,
                        $discount, $bankAdministration, $otherExpense, $date, $remark, $userID);

                    $folioList = '';
                    $result = [];
                    $success = 0;
                    $failed = 0;
                    foreach($data as $dataX){
                        if(HelperController::getAPRefundDepositOutStanding($dataX['id_log'], $refNumber) < $dataX['amount']){
                            $failed++;
                            array_push($result,[
                                'id_log' => $dataX['id_log'],
                                'status' => 1
                            ]);
                        } else {
                            $folioList = $folioList. 'Folio: ' .$dataX['folio_number']. ', ID: ' .$dataX['id_log'].', ';
                            if($remark = ''){
                                $remarkData = 'AP Refund Deposit Payment for Folio: '.$dataX['folio_number']. ', ID: '. $dataX['id_log'];
                            } else {
                                $remarkData = 'AP Refund Deposit Payment for Folio: '.$dataX['folio_number']. ', ID: '. $dataX['id_log']. ', '.$remark;
                            }

                            ProcedureQueryController::insertAPRefundDepositPaymentDetail($dataX['id_log'], $refNumber, $dataX['amount'], $userID);
                            ProcedureQueryController::insertJournalDetail($refNumber, GLobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $dataX['journal_account_code'],
                                $dataX['amount'], GlobalVariable::$transactionType['Debit'], $remarkData, $dataX['id_log'], $userID);
                            ProcedureQueryController::insertLogUserW8UserId(GlobalVariable::$logUserAction['InsertAPRefundDepositPayment'], $dataX['id_log'], $refNumber,'', '', $userID);
                            $success++;
                            array_push($result,[
                                'id_log' => $dataX['id_log'],
                                'status' => 0
                            ]);
                        }
                    }

                    if($folioList <> ''){
                        $folioList = FormatController::leftStr($folioList, strlen($folioList) - 2);

                        //Discount
                        if($discount > 0){
                            ProcedureQueryController::insertJournalDetail($refNumber, GLobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $journalAccountCodeDiscount,
                                $discount, GlobalVariable::$transactionType['Credit'], 'AP Refund Deposit Payment Discount', '', $userID);
                        }
                        //Bank Administration
                        if($bankAdministration > 0){
                            ProcedureQueryController::insertJournalDetail($refNumber, GLobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $journalAccountCodeBA,
                                $bankAdministration, GlobalVariable::$transactionType['Debit'], 'AP Refund Deposit Payment Bank Administration', '', $userID);
                        }
                        //Other Expense
                        if($otherExpense > 0){
                            ProcedureQueryController::insertJournalDetail($refNumber, GLobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $journalAccountCodeOE,
                                $otherExpense, GlobalVariable::$transactionType['Debit'], 'AP Refund Deposit Payment Other Expense', '', $userID);
                        }
                        //Bank
                        if($total > 0){
                            ProcedureQueryController::insertJournalDetail($refNumber, GLobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $bankAccount,
                                $total, GlobalVariable::$transactionType['Credit'], 'AP Refund Deposit Payment for '. $folioList, '', $userID);
                        }
                    } else {
                        ProcedureQueryController::deleteAPRefundDepositPayment($refNumber, $userID);
                    }

                    return response()->json([
                        'result' => $result,
                        'success' => $success,
                        'failed' => $failed
                    ]);
                }
            });
        }
    }

    public function store(Request $request){
        return $this->saveData($request, GlobalVariable::$mode['Insert']);
    }

    public function update(Request $request){
        return $this->saveData($request, GlobalVariable::$mode['Update']);
    }

    public function edit($id){
        $depositPayment = DB::table('acc_ap_no_show_payment')->where('ref_number', $id)->first();
        $depositPaymentDetail = DB::table(
                DB::table('acc_ap_no_show_payment_detail')
                ->select(
                    'sub_folio.folio_number',
                    'sub_folio.room_number',
                    'sub_folio.account_code',
                    'sub_folio.audit_date',
                    'sub_folio.id_log',
                    DB::raw('(SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Debit']. '", sub_folio.quantity*sub_folio.amount, -(sub_folio.quantity*sub_folio.amount)))-IFNULL(Payment.TotalPaid, 0)) AS outstanding'),
                    'acc_ap_no_show_payment_detail.amount',
                    DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS guest_name'),
                    'cfg_init_account.journal_account_code')
                    ->leftJoinSub(DB::table('acc_ap_no_show_payment_detail')
                        ->select(
                            'sub_folio_id',
                            DB::raw('SUM(amount) AS TotalPaid')
                        )->where('acc_ap_no_show_payment_detail.ref_number', '<>', $id)
                        ->groupBy('sub_folio_id'), 'Payment', 'acc_ap_no_show_payment_detail.sub_folio_id', 'Payment.sub_folio_id')
                    ->leftJoin('acc_ap_no_show_payment', 'acc_ap_no_show_payment_detail.ref_number', 'acc_ap_no_show_payment.ref_number')
                    ->leftJoin('sub_folio', 'acc_ap_no_show_payment_detail.sub_folio_id', 'sub_folio.id_log')
                    ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
                    ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
                    ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                    ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                    ->where('acc_ap_no_show_payment_detail.ref_number', $id)
                    ->groupBy('sub_folio.correction_breakdown'),
                'APNoShow')
                ->orderBy('APNoShow.audit_date')
                ->orderBy('APNoShow.folio_number')
                ->get();

            return response()->json([
                'payment' => $depositPayment,
                'detail' => $depositPaymentDetail
            ]);

    }

    public function deletePayment(Request $request){
        $validator = Validator::make(
            $request->all(),[
                'ref_number' => 'required',
                'user_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            DB::transaction(function () use ($request){
                ProcedureQueryController::deleteAPRefundDepositPayment($request->ref_number, '');
                ProcedureQueryController::insertLogUserW8UserId(GlobalVariable::$logUserAction['DeleteAPRefundDepositPayment'], $request->ref_number,'', '', '', $request->user_id);
            });
        }
    }


    public function transactionIDList(Request $request){
        if($request->ref_number){
            $query = DB::table(
                SubFolio::select(
                'sub_folio.folio_number',
                'sub_folio.room_number',
                'sub_folio.account_code',
                'sub_folio.audit_date',
                'sub_folio.id_log',
                DB::raw('(SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Debit']. '", sub_folio.quantity*sub_folio.amount, -(sub_folio.quantity*sub_folio.amount)))-IFNULL(Payment.TotalPaid, 0)) AS outstanding'),
                DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS guest_name'),
                'cfg_init_account.journal_account_code')
                ->leftJoinSub(DB::table('acc_ap_no_show_payment_detail')
                    ->select(
                        'sub_folio_id',
                        DB::raw('SUM(amount) AS TotalPaid'))
                    ->where('ref_number','<>', $request->ref_number)
                    ->groupBy('sub_folio_id'), 'Payment', 'sub_folio.id_log', 'Payment.sub_folio_id')
                ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
                ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
                ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                ->where('sub_folio.account_code', GlobalVariable::globalAccount(GlobalVariable::$configurationName['AccountAPRefundDeposit']))
                ->where('sub_folio.void', '0')
                ->where('folio.status_code', '<>', GlobalVariable::$folioStatus['CancelCheckIn'])
                ->groupBy('sub_folio.correction_breakdown'),
                'APNoShow')
            ->where('outstanding', '>', 0)
            ->orderBy('APNoShow.audit_date')
            ->orderBy('APNoShow.folio_number')
            ->get();
        } else {
            $query = DB::table(
                        SubFolio::select(
                        'sub_folio.folio_number',
                        'sub_folio.room_number',
                        'sub_folio.account_code',
                        'sub_folio.audit_date',
                        'sub_folio.id_log',
                        DB::raw('(SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Debit']. '", sub_folio.quantity*sub_folio.amount, -(sub_folio.quantity*sub_folio.amount)))-IFNULL(Payment.TotalPaid, 0)) AS outstanding'),
                        DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS guest_name'),
                        'cfg_init_account.journal_account_code')
                        ->leftJoinSub(DB::table('acc_ap_no_show_payment_detail')
                            ->select(
                                'sub_folio_id',
                                DB::raw('SUM(amount) AS TotalPaid'))
                            ->groupBy('sub_folio_id'), 'Payment', 'sub_folio.id_log', 'Payment.sub_folio_id')
                    ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
                    ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
                    ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                    ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                    ->where('sub_folio.account_code', GlobalVariable::globalAccount(GlobalVariable::$configurationName['AccountAPRefundDeposit']))
                    ->where('sub_folio.void', '0')
                    ->where('folio.status_code', '<>', GlobalVariable::$folioStatus['CancelCheckIn'])
                    ->groupBy('sub_folio.correction_breakdown'),
                    'APNoShow')
                    ->select('APNoShow.*')
            ->where('outstanding', '>', 0)
            ->orderBy('APNoShow.audit_date')
            ->orderBy('APNoShow.folio_number')
            ->get();
        }

        return response()->json($query);
    }

    public function dataLookup(){
        $bankAccount = HelperController::getBankAccountPayment();

        $journalAccountIncome = HelperController::getJournalAccountIncome();

        $journalAccountExpense = HelperController::getJournalAccountExpense();

        return response()->json([
            'bank_account' => $bankAccount,
            'income_account' => $journalAccountIncome,
            'expense_account' => $journalAccountExpense
        ]);
    }
}
