<?php

namespace App\Http\Controllers\BackOffice;

use App\Configurations\Models\Account;
use App\Folio\Models\SubFolio;
use App\Guest\Models\GuestDeposit;
use App\Http\Controllers\GlobalVariableController as GlobalVariable;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BankTransactionController extends Controller
{
    protected $mainTableName;
    protected $mainTableName2;

    public function __construct(){
        $this->mainTableName = "sub_folio";
        $this->mainTableName2 = "guest_deposit";
    }

    public function index(Request $request){

        $filterList = [
            'CONCAT(' .$this->mainTableName. '.account_code, " - ", cfg_init_account.name)',
            'CONCAT("F-", ' .$this->mainTableName. '.folio_number)',
            $this->mainTableName. '.room_number',
            'CONCAT(contact_person.title_code, contact_person.full_name)',
            'CONCAT("F-", ' .$this->mainTableName. '.id_log)',
            'cfg_init_card_bank.name',
            'cfg_init_card_type.name',
            'credit_card.card_holder',
            $this->mainTableName. '.remark',
            $this->mainTableName. '.document_number',
            $this->mainTableName. '.user_id'
        ];

        $filterList2 = [
            'CONCAT(' .$this->mainTableName2. '.account_code, " - ", cfg_init_account.name)',
            'CONCAT("R-", ' .$this->mainTableName2. '.reservation_number)',
            'guest_detail.room_number',
            'CONCAT(contact_person.title_code, contact_person.full_name)',
            'CONCAT("R-", ' .$this->mainTableName2. '.id_log)',
            $filterList[5],
            $filterList[6],
            $filterList[7],
            $this->mainTableName2. '.remark',
            $this->mainTableName2. '.document_number',
            $this->mainTableName2. '.user_id'
        ];

        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $dateFrom = Arr::get($search, 'date_from', '');
        $dateTo = Arr::get($search, 'date_to', '');
        $isReconciliated = Arr::get($search, 'is_reconciliated', '0');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy1 = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 11 ? $filterList[$searchBy] : '';
        $searchBy2 = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 11 ? $filterList2[$searchBy] : '';

        $subFolio = DB::table($this->mainTableName)->select(
            DB::raw('IF(IFNULL(acc_credit_card_recon_detail.sub_folio_id, 0)=0, "0", "-1") AS IsReconsiliated'),
            DB::raw('IFNULL(acc_credit_card_recon_detail.acc_credit_card_recon_id, 0) ReconID'),
            DB::raw('IFNULL(acc_credit_card_recon.ref_number, 0) AS RefNumber'),
            'acc_credit_card_recon.date AS ReconsiliatedDate',
            DB::raw('CONCAT("F-", ' .$this->mainTableName. '.folio_number) AS Number'),
            $this->mainTableName. '.room_number',
            DB::raw('CONCAT(' .$this->mainTableName. '.account_code, " - ", cfg_init_account.name) AS Account'),
            DB::raw('SUM(IF(' .$this->mainTableName. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$this->mainTableName. '.quantity*' .$this->mainTableName. '.amount, -(' .$this->mainTableName. '.quantity*' .$this->mainTableName. '.amount))) AS Amount'),
            $this->mainTableName. '.audit_date',
            $this->mainTableName. '.remark',
            $this->mainTableName. '.document_number',
            $this->mainTableName. '.user_id',
            DB::raw('CONCAT("F-", ' .$this->mainTableName. '.id_log) AS TransactionID'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS GuestName'),
            DB::raw('DATE(guest_detail.departure) AS DepartureDate'),
            DB::raw('DATE(guest_detail.arrival) AS ArrivalDate'),
            'cfg_init_card_bank.name AS CardBank',
            'cfg_init_card_type.name AS CardType',
            'credit_card.card_holder',
            'sub_folio.id_log',
            DB::raw('"F" as type'),
            DB::raw('CONCAT(credit_card.valid_month, "/", credit_card.valid_year) AS ValidThru'))
            ->leftJoin('acc_credit_card_recon_detail', $this->mainTableName. '.id_log', 'acc_credit_card_recon_detail.sub_folio_id')
            ->leftJoin('acc_credit_card_recon', 'acc_credit_card_recon_detail.acc_credit_card_recon_id', 'acc_credit_card_recon.id_log')
            ->leftJoin('folio', $this->mainTableName. '.folio_number', 'folio.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_card_bank', $this->mainTableName. '.card_bank_code', 'cfg_init_card_bank.code')
            ->leftJoin('cfg_init_card_type', $this->mainTableName. '.card_type_code', 'cfg_init_card_type.code')
            ->leftJoin('credit_card', $this->mainTableName. '.id_log', 'credit_card.sub_folio_id')
            ->join('cfg_init_account', function($join){
                $join->on($this->mainTableName. '.account_code','=', 'cfg_init_account.code')
                    ->whereRaw('(cfg_init_account.sub_group_code="' .GLobalVariable::$accountSubGroup['CreditDebitCard']. '" OR cfg_init_account.sub_group_code="' .GLobalVariable::$accountSubGroup['BankTransfer']. '")')
                    ->where($this->mainTableName. '.void','0')
                    ->where('folio.status_code','<>', GLobalVariable::$folioStatus['CancelCheckIn']);
            })
            ->groupBy($this->mainTableName. '.correction_breakdown');

            if(!empty($keyword) && !empty($searchBy)){
                $subFolio->whereRaw($searchBy1.' LIKE "%'.$keyword.'%"');
            };

        $guestDeposit = DB::table($this->mainTableName2)->select(
            DB::raw('IF(IFNULL(acc_credit_card_recon_detail.guest_deposit_id, 0)=0, "0", "-1") AS IsReconsiliated'),
            DB::raw('IFNULL(acc_credit_card_recon_detail.acc_credit_card_recon_id, 0) ReconID'),
            DB::raw('IFNULL(acc_credit_card_recon.ref_number, 0) AS RefNumber'),
            'acc_credit_card_recon.date AS ReconsiliatedDate',
            DB::raw('CONCAT("R-", ' .$this->mainTableName2. '.reservation_number) AS Number'),
            'guest_detail.room_number',
            DB::raw('CONCAT(' .$this->mainTableName2. '.account_code, " - ", cfg_init_account.name) AS Account'),
            DB::raw('SUM(IF(' .$this->mainTableName2. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$this->mainTableName2. '.amount, -' .$this->mainTableName2. '.amount)) AS Amount'),
            $this->mainTableName2. '.audit_date',
            $this->mainTableName2. '.remark',
            $this->mainTableName2. '.document_number',
            $this->mainTableName2. '.user_id',
            DB::raw('CONCAT("R-", ' .$this->mainTableName2. '.id_log) AS TransactionID'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS GuestName'),
            DB::raw('DATE(guest_detail.departure) AS DepartureDate'),
            DB::raw('DATE(guest_detail.arrival) AS ArrivalDate'),
            'cfg_init_card_bank.name AS CardBank',
            'cfg_init_card_type.name AS CardType',
            'credit_card.card_holder',
            'guest_deposit.id_log',
            DB::raw('"R" as type'),
            DB::raw('CONCAT(credit_card.valid_month, "/", credit_card.valid_year) AS ValidThru'))
            ->leftJoin('acc_credit_card_recon_detail', $this->mainTableName2. '.id_log', 'acc_credit_card_recon_detail.guest_deposit_id')
            ->leftJoin('acc_credit_card_recon', 'acc_credit_card_recon_detail.acc_credit_card_recon_id', 'acc_credit_card_recon.id_log')
            ->leftJoin('reservation', $this->mainTableName2. '.reservation_number', 'reservation.number')
            ->leftJoin('contact_person', 'reservation.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_card_bank', $this->mainTableName2. '.card_bank_code', 'cfg_init_card_bank.code')
            ->leftJoin('cfg_init_card_type', $this->mainTableName2. '.card_type_code', 'cfg_init_card_type.code')
            ->leftJoin('credit_card', $this->mainTableName2. '.id_log', 'credit_card.guest_deposit_id')
            ->join('cfg_init_account', function($join){
                $join->on($this->mainTableName2. '.account_code','=', 'cfg_init_account.code')
                    ->whereRaw('(cfg_init_account.sub_group_code="' .GLobalVariable::$accountSubGroup['CreditDebitCard']. '" OR cfg_init_account.sub_group_code="' .GLobalVariable::$accountSubGroup['BankTransfer']. '")')
                    ->where($this->mainTableName2. '.void','0')
                    ->where('reservation.status_code','<>', GLobalVariable::$reservationStatus['Void']);
            })
            ->groupBy($this->mainTableName2. '.correction_breakdown')
            ->unionAll($subFolio);


        if(!empty($keyword) && !empty($searchBy)){
            $guestDeposit->whereRaw($searchBy2.' LIKE "%'.$keyword.'%"');
        };

        if(!empty($dateFrom) && !empty($dateTo) && $dateFrom <= $dateTo){
            $guestDeposit->whereRaw($this->mainTableName2. '.audit_date>="' .FormatController::formatDate($dateFrom). '" AND '.$this->mainTableName2. '.audit_date<="' .FormatController::formatDate($dateTo). '"');
            $subFolio->whereRaw($this->mainTableName. '.audit_date>="' .FormatController::formatDate($dateFrom). '" AND '.$this->mainTableName.'.audit_date<="' .FormatController::formatDate($dateTo). '"');
        }

        $unionAll = DB::table($guestDeposit, 'A')
            ->where('A.Amount', '<>', 0)
            ->where('A.IsReconsiliated', $isReconciliated)
            ->orderBy('A.audit_date')
            ->orderBy('A.Number');


        return response()->json($unionAll->limit($limit)->get());
    }

    public function indexReconciliation(Request $request){
        $filterList = [
            'acc_credit_card_recon.ref_number',
            'CONCAT(acc_credit_card_recon.journal_account_code, " - ", cfg_init_journal_account.name)',
            'acc_credit_card_recon.user_id'
        ];

        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $dateFrom = Arr::get($search, 'date_from', '');
        $dateTo = Arr::get($search, 'date_to', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 3 ? $filterList[$searchBy] : '';

        $query = DB::table('acc_credit_card_recon')->select(
            'acc_credit_card_recon.*',
            DB::raw('IFNULL(AccReconDetail.Amount, 0) AS Amount'),
            DB::raw('(IFNULL(AccReconDetail.Amount, 0)-acc_credit_card_recon.amount_received) AS AdmCharge'),
            DB::raw('CONCAT(acc_credit_card_recon.journal_account_code, " - ", cfg_init_journal_account.name) AS BankAccount'))
            ->leftJoin('cfg_init_journal_account', 'acc_credit_card_recon.journal_account_code', 'cfg_init_journal_account.code')
            ->leftJoinSub(
                (DB::table('acc_credit_card_recon_detail')->select(
                    'acc_credit_card_recon_detail.acc_credit_card_recon_id',
                    DB::raw('SUM(acc_credit_card_recon_detail.amount) AS Amount'))
                    ->groupBy('acc_credit_card_recon_detail.acc_credit_card_recon_id')), 'AccReconDetail', 'acc_credit_card_recon.id_log', 'AccReconDetail.acc_credit_card_recon_id')
            ->orderBy('acc_credit_card_recon.date')
            ->orderBy('acc_credit_card_recon.ref_number');

            if(!empty($keyword) && !empty($searchBy)){
                $query->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
            };

            if(!empty($dateFrom) && !empty($dateTo) && $dateFrom <= $dateTo){
                $query->whereRaw('acc_credit_card_recon.date>="' .FormatController::formatDate($dateFrom). '" AND acc_credit_card_recon.date<="' .FormatController::formatDate($dateTo). '"');
            }

            return response()->json($query->limit($limit)->get());
    }

    public function reconciliationDetail(Request $request){
        $query = DB::table('acc_credit_card_recon_detail')->select(
            DB::raw('IF(acc_credit_card_recon_detail.guest_deposit_id = 0, CONCAT("F-", acc_credit_card_recon_detail.sub_folio_id), CONCAT("R-", acc_credit_card_recon_detail.guest_deposit_id)) AS ID'),
            'acc_credit_card_recon_detail.amount',
            'acc_credit_card_recon_detail.remark',
            'acc_credit_card_recon_detail.user_id',
            'acc_credit_card_recon_detail.id_log',
            DB::raw('IF(acc_credit_card_recon_detail.guest_deposit_id <> 0, CONCAT(contact_person.title_code, contact_person.full_name) , CONCAT(contact_person1.title_code, contact_person1.full_name)) AS GuestName'),
            DB::raw('IF(acc_credit_card_recon_detail.guest_deposit_id <> 0, guest_detail.arrival, guest_detail1.arrival) AS Arrival'),
            DB::raw('IF(acc_credit_card_recon_detail.guest_deposit_id <> 0, guest_detail.departure, guest_detail1.departure) AS Departure'),
            DB::raw('IF(acc_credit_card_recon_detail.guest_deposit_id <> 0, guest_detail.room_number,  guest_detail1.room_number) AS RoomNumber'))
            ->leftJoin('guest_deposit', 'acc_credit_card_recon_detail.guest_deposit_id', 'guest_deposit.id_log')
            ->leftJoin('reservation', 'guest_deposit.reservation_number', 'reservation.number')
            ->leftJoin('contact_person', 'reservation.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->leftJoin('sub_folio', 'acc_credit_card_recon_detail.sub_folio_id', 'sub_folio.id_log')
            ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
            ->leftJoin('contact_person as contact_person1', 'folio.contact_person_id', 'contact_person1.id')
            ->leftJoin('guest_detail as guest_detail1', 'folio.guest_detail_id', 'guest_detail1.id')
            ->where('acc_credit_card_recon_detail.acc_credit_card_recon_id', $request->id)
            ->get();

      return response()->json($query);
    }

    public function saveReconciliation(Request $request, $mode){
        $validator = Validator::make(
            $request->all(),[
                'amount_received' => 'required',
                'data' => 'request',
                'date' => 'request',
                'ref_number' => $mode == GlobalVariable::$mode['Update'] ? 'request' : '',
                'journal_account_code' => 'request',
                'user_id' => 'request',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            return DB::transaction(function () use ($request, $mode){

                $remark = Arr::get($request, 'remark', '');
                $data = $request->data;
                $isOutOfDate = false;
                foreach($data as $dataX){
                    if(strtotime($request->date) < strtotime(FormatController::firstDayOfMonth($dataX['audit_date']))){
                        $isOutOfDate = true;
                        break;
                    }
                }


                $totalAmount = 0;
                foreach($data as $dataX){
                    $totalAmount += $dataX['amount'];
                }

                if($totalAmount < $request->amount_received){
                    return 1;
                }

                if($isOutOfDate){
                    return 2;
                }

                if(strtotime($request->date) > strtotime(date('Y-m-d'))){
                    return 3;
                }

                if($mode == GlobalVariable::$mode['Update']){
                    $refNumber = $request->ref_number;
                    ProcedureQueryController::deleteAccCreditCardRecon($request->id_log, $request->user_id);
                } else {
                    $refNumber = HelperController::getJournalRefNumber(GlobalVariable::$journalPrefix['Receive'], $request->date);
                }

                $bankAccountTypeCode = HelperController::getBankAccountTypeByJournalAccountCode($request->journal_account_code);
                $journalTypeCode = '';
                if($bankAccountTypeCode == GlobalVariable::$bankAccountType['CashAccount']){
                    $journalTypeCode = GlobalVariable::$journalType['CashIn'];
                } else if($bankAccountTypeCode == GlobalVariable::$bankAccountType['SavingAccount']){
                    $journalTypeCode = GlobalVariable::$journalType['SavingAccount'];
                }

                if($remark <> ''){
                    $remark = ', '.$remark;
                }

                // Master
                $totalAdminCharge = 0;
                $journalAccountCode = $request->journal_account_code;
                ProcedureQueryController::insertJournal($refNumber, '', '', $journalTypeCode, GlobalVariable::$journalGroup['Receiving'], $request->date, 'Credit Card / Bank Reconciliation' . $remark, '', '', $request->user_id);
                // Detail Debit
                ProcedureQueryController::insertJournalDetail($refNumber, GlobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $journalAccountCode, $request->amount_received,
                    GlobalVariable::$transactionType['Debit'], 'Receive on Credit Card / Bank Reconciliation', '', $request->user_id);
                $creditCardReconciliationID = ProcedureQueryController::insertCreditCardReconciliation($journalAccountCode, $refNumber, $request->date, $request->amount_received, $request->user_id);

                // Detail Credit
                foreach($data as $dataX){
                    $remarkDetail = Arr::get($dataX, 'remark', '');
                    $subFolioID = '0';
                    $guestDepositID = '0';

                    if(strpos($dataX['transaction_id'],'F-') !== false){
                        $subFolioID = str_replace('F-','',$dataX['transaction_id']);
                    } else if(strpos($dataX['transaction_id'],'R-') !== false){
                        $guestDepositID = str_replace('R-','',$dataX['transaction_id']);
                    }

                    ProcedureQueryController::insertJournalDetail($refNumber, GlobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $dataX['journal_account_code'], $dataX['amount'], GlobalVariable::$transactionType['Credit'],
                        'Doc #: '.$dataX['document_number'].', Transaction ID: '.$dataX['transaction_id'].'('.$dataX['audit_date'].')'.$remark, '', $request->user_id);
                    ProcedureQueryController::insertCreditCardReconciliationDetail($creditCardReconciliationID, $guestDepositID, $subFolioID, $dataX['amount'], $remarkDetail, $request->user_id);
                }

                $totalAdminCharge = $totalAmount - $request->amount_received;
                if($totalAdminCharge > 0){
                    ProcedureQueryController::insertJournalDetail($refNumber, GlobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), GlobalVariable::globalJournalAccount(GlobalVariable::$configurationName['JACreditCardAdm']),
                        $totalAdminCharge, GlobalVariable::$transactionType['Debit'], 'Credit Card / Bank Administration', '', $request->user_id);
                }

                if($mode == GlobalVariable::$mode['Update']){
                    ProcedureQueryController::insertLogUserW8UserId(GlobalVariable::$logUserAction['UpdateBankReconciliation'], $refNumber, '', '', '', $request->user_id);
                } else {
                    ProcedureQueryController::insertLogUserW8UserId(GlobalVariable::$logUserAction['InsertBankReconciliation'], $refNumber, '', '', '', $request->user_id);
                }
                return 0;
            });
        }


    }

    public function store(Request $request){
        return $this->saveReconciliation($request, GlobalVariable::$mode['Insert']);
    }

    public function update(Request $request){
        return $this->saveReconciliation($request, GlobalVariable::$mode['Update']);
    }

    public function edit($id){
        $reconciliation = DB::table('acc_credit_card_recon')->select(
            'acc_credit_card_recon.*',
            'acc_journal.memo as remark')
            ->leftJoin('acc_journal', 'acc_credit_card_recon.ref_number', 'acc_journal.ref_number')
            ->where('acc_credit_card_recon.id_log', $id)
            ->first();
            if((strlen($reconciliation->remark) - strlen('Credit Card / Bank Reconciliation')) <> 0){
                $reconciliation->remark = FormatController::rightStr($reconciliation->remark, (strlen($reconciliation->remark) - strlen('Credit Card / Bank Reconciliation')));
                if($reconciliation->remark <> ''){
                    $reconciliation->remark = FormatController::rightStr($reconciliation->remark, (strlen($reconciliation->remark) - 2));
                }
            } else {
                $reconciliation->remark = '';
            }
        $subFolio = SubFolio::select(
            'sub_folio.folio_number AS number',
            'sub_folio.room_number',
            DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Credit']. '", (sub_folio.quantity*sub_folio.amount), -(sub_folio.quantity*sub_folio.amount))) AS amount'),
            'sub_folio.audit_date',
            'sub_folio.document_number',
            DB::raw('CONCAT("F-", sub_folio.id_log) AS transaction_id'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS guest_name'),
            'credit_card.card_number',
            'acc_credit_card_recon_detail.remark',
            'cfg_init_account.journal_account_code')
            ->leftJoin('acc_credit_card_recon_detail', 'sub_folio.id_log', 'acc_credit_card_recon_detail.sub_folio_id')
            ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('credit_card', 'sub_folio.id_log', 'credit_card.sub_folio_id')
            ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
            ->where('acc_credit_card_recon_detail.acc_credit_card_recon_id', $id)
            ->whereRaw('(cfg_init_account.sub_group_code="' .GlobalVariable::$accountSubGroup['CreditDebitCard']. '" OR cfg_init_account.sub_group_code="' .GlobalVariable::$accountSubGroup['BankTransfer']. '")')
            ->where('sub_folio.void', '0')
            ->where('folio.status_code', '<>', GlobalVariable::$folioStatus['CancelCheckIn'])
            ->groupBy('sub_folio.correction_breakdown');

        $guestDeposit = GuestDeposit::select(
            'guest_deposit.reservation_number AS number',
            'guest_detail.room_number',
            DB::raw('SUM(IF(guest_deposit.type_code="' .GlobalVariable::$transactionType['Credit']. '", guest_deposit.amount, -guest_deposit.amount)) AS amount'),
            'guest_deposit.audit_date',
            'guest_deposit.document_number',
            DB::raw('CONCAT("R-", guest_deposit.id_log) AS transaction_id'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS guest_name'),
            'credit_card.card_number',
            'acc_credit_card_recon_detail.remark',
            'cfg_init_account.journal_account_code')
            ->leftJoin('acc_credit_card_recon_detail', 'guest_deposit.id_log', 'acc_credit_card_recon_detail.guest_deposit_id')
            ->leftJoin('reservation', 'guest_deposit.reservation_number', 'reservation.number')
            ->leftJoin('contact_person', 'reservation.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->leftJoin('credit_card', 'guest_deposit.id_log', 'credit_card.guest_deposit_id')
            ->leftJoin('cfg_init_account', 'guest_deposit.account_code', 'cfg_init_account.code')
            ->where('acc_credit_card_recon_detail.acc_credit_card_recon_id', $id)
            ->whereRaw('(cfg_init_account.sub_group_code="' .GlobalVariable::$accountSubGroup['CreditDebitCard']. '" OR cfg_init_account.sub_group_code="' .GlobalVariable::$accountSubGroup['BankTransfer']. '")')
            ->where('guest_deposit.void', '0')
            ->where('reservation.status_code', '<>', GlobalVariable::$reservationStatus['Void'])
            ->groupBy('guest_deposit.correction_breakdown')
            ->unionAll($subFolio);

        $detail = DB::table($guestDeposit, 'A')
            ->orderBy('A.audit_date')
            ->orderBy('A.number')
            ->orderBy('A.transaction_id')
            ->get();

        return response()->json([
            'reconciliation' => $reconciliation,
            'detail' => $detail
        ]);

    }

    public function lookupBankAccount(){
        $bankAccount = DB::table('acc_cfg_init_bank_account')
        ->select('*')
            ->where('type_code',GlobalVariable::$bankAccountType['SavingAccount'])
            ->orwhere('type_code',GlobalVariable::$bankAccountType['CashAccount'])
            ->orderBy('journal_account_code')
            ->get();

        $account = Account::select('code', 'name')
            ->where('sub_group_code', GlobalVariable::$accountSubGroup['CreditDebitCard'])
            ->orWhere('sub_group_code', GlobalVariable::$accountSubGroup['BankTransfer'])
            ->orderBy('code')
            ->get();

        return response()->json([
            'bank_account' => $bankAccount,
            'account' => $account
        ]);
    }

    public function lookupTransaction(Request $request){
        $id = $request->id_log;
        $subFolio = SubFolio::select(
            DB::raw('CONCAT("F-", sub_folio.folio_number) AS number'),
            'sub_folio.room_number',
            DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Credit']. '", (sub_folio.quantity*sub_folio.amount), -(sub_folio.quantity*sub_folio.amount))) AS amount'),
            'sub_folio.audit_date',
            'sub_folio.document_number',
            DB::raw('CONCAT("F-", sub_folio.id_log) AS transaction_id'),
            DB::raw('IF(IFNULL(acc_credit_card_recon_detail.sub_folio_id,0)=0, "U", "R") AS ReconStatus'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS guest_name'),
            'credit_card.card_number',
            'credit_card.card_holder',
            'cfg_init_account.journal_account_code',
            DB::raw('"F" as type'))
            ->leftJoin('acc_credit_card_recon_detail', function($join) use($id){
                $join->on('sub_folio.id_log', 'acc_credit_card_recon_detail.sub_folio_id')
                    ->where('acc_credit_card_recon_detail.acc_credit_card_recon_id', '<>', $id);
            })
            ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('credit_card', 'sub_folio.id_log', 'credit_card.sub_folio_id')
            ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
            ->whereRaw('(cfg_init_account.sub_group_code="' .GlobalVariable::$accountSubGroup['CreditDebitCard']. '" OR cfg_init_account.sub_group_code="' .GlobalVariable::$accountSubGroup['BankTransfer']. '")')
            ->where('sub_folio.void','0')
            ->where('folio.status_code','<>', GlobalVariable::$folioStatus['CancelCheckIn'])
            ->groupBy('sub_folio.correction_breakdown');

            if($request->code){
                $subFolio->where('sub_folio.account_code', $request->code);
            }

        $guestDeposit = GuestDeposit::select(
            DB::raw('CONCAT("R-", guest_deposit.reservation_number) AS number'),
            'guest_detail.room_number',
            DB::raw('SUM(IF(guest_deposit.type_code="' .GlobalVariable::$transactionType['Credit']. '", guest_deposit.amount, -guest_deposit.amount)) AS amount'),
            'guest_deposit.audit_date',
            'guest_deposit.document_number',
            DB::raw('CONCAT("R-", guest_deposit.id_log) AS transaction_id'),
            DB::raw('IF(IFNULL(acc_credit_card_recon_detail.guest_deposit_id,0)=0, "U", "R") AS ReconStatus'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS guest_name'),
            'credit_card.card_number',
            'credit_card.card_holder',
            'cfg_init_account.journal_account_code',
            DB::raw('"R" as type'))
            ->leftJoin('acc_credit_card_recon_detail', function($join) use($id){
                $join->on('guest_deposit.id_log', 'acc_credit_card_recon_detail.guest_deposit_id')
                    ->where('acc_credit_card_recon_detail.acc_credit_card_recon_id', '<>', $id);
            })
            ->leftJoin('reservation', 'guest_deposit.reservation_number', 'reservation.number')
            ->leftJoin('contact_person', 'reservation.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->leftJoin('credit_card', 'guest_deposit.id_log', 'credit_card.guest_deposit_id')
            ->leftJoin('cfg_init_account', 'guest_deposit.account_code', 'cfg_init_account.code')
            ->whereRaw('(cfg_init_account.sub_group_code="' .GlobalVariable::$accountSubGroup['CreditDebitCard']. '" OR cfg_init_account.sub_group_code="' .GlobalVariable::$accountSubGroup['BankTransfer']. '")')
            ->where('guest_deposit.void','0')
            ->where('reservation.status_code','<>', GlobalVariable::$reservationStatus['Void'])
            ->groupBy('guest_deposit.correction_breakdown')
            ->unionAll($subFolio);

            if($request->code){
                $guestDeposit->where('guest_deposit.account_code', $request->code);
            }

        $query = DB::table($guestDeposit, 'A')
            ->where('A.ReconStatus', 'U')
            ->where('A.Amount','<>',0)
            ->orderBy('A.audit_date')
            ->orderBy('A.number')
            ->orderBy('A.transaction_id')
            ->get();

            return response()->json($query);
    }

    public function deleteReconciliation(Request $request){
        $validator = Validator::make(
            $request->all(),[
                'id' => 'request'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            ProcedureQueryController::deleteAccCreditCardRecon($request->id ,$request->user_id);
        }
    }

}
