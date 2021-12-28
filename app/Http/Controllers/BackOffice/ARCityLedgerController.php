<?php

namespace App\Http\Controllers\BackOffice;

use App\Configurations\Models\City;
use App\Configurations\Models\Company;
use App\Configurations\Models\CompanyType;
use App\Configurations\Models\Country;
use App\Configurations\Models\Currency;
use App\Configurations\Models\State;
use App\Configurations\Models\SubDepartment;
use App\Folio\Models\SubFolio;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\GlobalVariableController as GlobalVariable;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ARCityLedgerController extends Controller
{
    private $mainTableName;
    private $detailTableName1;
    private $detailTableName2;

    public function __construct()
    {
        $this->mainTableName = 'sub_folio';
        $this->detailTableName1 = 'invoice_item';
        $this->detailTableName2 = 'invoice_payment';
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(true)
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            return DB::transaction(function () use ($request) {
                $params = $request->all();
                $isOutOfDate = false;
                $issuedDate = $request->issued_date;
                $dueDate = $request->due_date;
                $remark = Arr::get($params, 'remark', '');
                $company = $request->company_code;
                $userID = $request->user_id;
                $data = $request->data;
                foreach($data as $dataX){
                    if(strtotime($issuedDate) < strtotime($dataX['audit_date'])){
                        $isOutOfDate = true;
                        break;
                    }
                }

                // Response Status
                // 1 : Out of date
                // 2 : Journal is closed/ Have Access Modify closed journal
                // 3 : Journal is closed/ Dont have access modify closed journal
                // 1 : Out of date
                // 1 : Out of date
                // 1 : Out of date

                if($isOutOfDate){
                    return 1;
                }

                if(HelperController::isJournalClosed($issuedDate)){
                    $accessString = HelperController::getUserAccess($userID, GlobalVariable::$userAccessType['Special']);
                    if($accessString[GlobalVariable::$accessSpecialOrder['ModifyClosedJournal']] == '1'){
                        if(Cache::has('confirm') && $request->confirmation == 'true'){
                            Cache::forget('confirm');
                        } else {
                            $expiresAt = Carbon::now()->addMinutes(1);
                            Cache::add('confirm',true,$expiresAt);

                            return 2;
                        }
                    } else {
                        return 3;
                    }
                }
                $contactPersonID = ProcedureQueryController::insertContactPerson('', $request->full_name, $request->street, $request->country_code, $request->state_code, $request->city_code, $request->city, $request->postal_code, $request->phone1, '', $request->fax, '', '', '', $request->company_code, '',
                    '', '', '-1','', '0000-00-00', GlobalVariable::$contactPersonType['Guest'], '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', $userID);
                $invoiceNumber = HelperController::getInvoiceNumber($issuedDate);
                // Master
                ProcedureQueryController::insertInvoice($invoiceNumber, $request->company_code, $contactPersonID, $issuedDate, $dueDate, $remark, $userID);

                $glAccountAR = HelperController::getJournalAccountCompanyAR($request->company_code);

                //Journal Discount
                $totalDiscount = 0;
                $refNumberDiscount = HelperController::getJournalRefNumber(GlobalVariable::$journalPrefix['Disbursement'], $issuedDate);
                ProcedureQueryController::insertJournal($refNumberDiscount, '', $request->company_code, GlobalVariable::$journalType['Other'], '', $issuedDate, 'Discount invoice: ' . $invoiceNumber, '', '', $userID);

                // Insert Invoice Detail
                foreach($data as $dataX){
                    $totalAmount = $dataX['amount_old'];
                    $totalAmountCharged = $dataX['amount'];
                    $remark = arr::get($dataX, 'remark', '');
                    $total = 0;

                    $query = SubFolio::select(
                        DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Credit']. '", (sub_folio.quantity*sub_folio.amount), -(sub_folio.quantity*sub_folio.amount))) AS Amount'),
                        'sub_folio.type_code',
                        'sub_folio.id_log')
                        ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                        ->where('sub_folio.folio_number', $dataX['folio_number'])
                        ->where('cfg_init_account.sub_group_code', GlobalVariable::$accountSubGroup['AccountReceivable'])
                        ->where('void', '0')
                        ->groupBy('sub_folio.correction_breakdown')
                        ->get();

                    for($i = 0; $i < count($query); $i++){
                        $amount = $query[$i]->Amount;
                        if($i == (count($query) - 1)){
                            $amountCharged = $totalAmountCharged - $total;
                        } else {
                            $amountCharged =  $amount * ($totalAmountCharged / $totalAmount);
                            $total += $amountCharged;
                        }

                        if($amount >= 0) {
                            $amountX = $amount;
                            $amountChargedX = $amountCharged;
                        } else {
                            $amountX = -$amount;
                            $amountChargedX = -$amountCharged;
                        }

                        if($amountX > $amountChargedX){
                            $totalDiscount = $totalDiscount + $amountX - $amountChargedX;
                            ProcedureQueryController::insertJournalDetail($refNumberDiscount, GlobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), GlobalVariable::globalJournalAccount(GlobalVariable::$configurationName['JAInvoiceDiscount']),
                                $amountX - $amountChargedX, GlobalVariable::$transactionType['Debit'], 'Discount invoice for folio: '.$dataX->folio_number. ', Transaction ID: '.$query[$i]->id_log, '', $userID  );
                        }

                        ProcedureQueryController::insertInvoiceItem($invoiceNumber, $query[$i]->id_log, $dataX['folio_number'], $amountX, $amountChargedX, $dataX['default_currency_code'], $amountChargedX / $dataX['exchange_rate'], $dataX['exchange_rate'], $dataX['currency_code'],
                            $remark, $query[$i]->type_code, $userID);
                    }
                }
                if($totalDiscount > 0) {
                    ProcedureQueryController::insertJournalDetail($refNumberDiscount,GlobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $glAccountAR, $totalDiscount, GlobalVariable::$transactionType['Credit'],
                        'Discount invoice: '.$invoiceNumber, '', $userID);
                    ProcedureQueryController::updateInvoiceRefNumber($invoiceNumber, $refNumberDiscount);
                } else {
                    ProcedureQueryController::deleteJournal($refNumberDiscount, $userID);
                    ProcedureQueryController::updateInvoiceRefNumber($invoiceNumber, '');
                }

                ProcedureQueryController::insertLogUserW8UserId(GlobalVariable::$logUserAction['InsertInvoiceCityLedger'], $invoiceNumber, $refNumberDiscount, '', '', $userID);

                return 0;
            });
        }
    }

    public function invoiceStatus(Request $request){
        //
    }

    // delete invoice
    public function delete(Request $request){
        $validator = Validator::make(
            $request->all(),[
                'number' => 'required',
                'user_id' => 'required',
            ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            $invoice = DB::table('invoice')->where('number', $request->number)->first();
            $isHadPayment = HelperController::isInvoiceHadPayment($request->number);
            $isJournalClosed = HelperController::isJournalClosed($invoice->issued_date);
            if($isJournalClosed){
                return 5;
            }
            if($isHadPayment){
                return 1;
            }

            if($invoice->is_paid){
                return 2;
            }

            ProcedureQueryController::deleteInvoice($request->number, $request->ref_number, $request->user_id);
            return 0;
        }
    }

    public function update(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules()
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            return DB::transaction(function () use($request) {
                $params = $request->all();
                $isOutOfDate = false;
                $issuedDate = $request->issued_date;
                $dueDate = $request->due_date;
                $remark = Arr::get($params, 'remark', '');
                $data = $request->data;
                foreach($data as $dataX){
                    if(strtotime($issuedDate) < strtotime($dataX['audit_date'])){
                        $isOutOfDate = true;
                        break;
                    }
                }

                // Response Status
                // 1 : Out of date
                // 2 : Journal is closed/ Have Access Modify closed journal
                // 3 : Journal is closed/ Dont have access modify closed journal
                // 4 : Invoice is already had paid
                // 1 : Out of date
                // 1 : Out of date
                if(HelperController::isInvoiceHadPayment($request->invoice_number)){
                    return 4;
                }

                if($isOutOfDate){
                    return 1;
                }


                $invoiceNumber = $request->invoice_number;
                $contactPersonID = $request->contact_person_id;
                ProcedureQueryController::updateInvoice($invoiceNumber, $request->company_code, $request->issued_date, $request->due_date, $request->remark, $request->user_id);
                ProcedureQueryController::updateContactPerson($contactPersonID, '', $request->full_name, $request->street, $request->country_code, $request->state_code, $request->city_code, $request->city, '', $request->postal_code, $request->phone1, '', $request->fax, '', '', $request->company_code, '',
                    '', '', '-1','', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', $request->user_id);

                ProcedureQueryController::deleteInvoiceItem($invoiceNumber, $request->user_id);

                if(!empty($request->ref_number_discount)){
                    ProcedureQueryController::deleteJournal($request->ref_number_discount, $request->user_id);
                }

                $glAccountAR = HelperController::getJournalAccountCompanyAR($request->company_code);

                //Journal Discount
                $totalDiscount = 0;
                $refNumberDiscount = HelperController::getJournalRefNumber(GlobalVariable::$journalPrefix['Disbursement'], $issuedDate);
                ProcedureQueryController::insertJournal($refNumberDiscount, '', $request->company_code, GlobalVariable::$journalType['Other'], '', $issuedDate, 'Discount invoice: ' . $invoiceNumber, '', '', $request->user_id);

                // Insert Invoice Detail
                foreach($data as $dataX){
                    $totalAmount = $dataX['amount_old'];
                    $totalAmountCharged = $dataX['amount'];
                    $remark = Arr::get($dataX, 'remark', '');
                    $total = 0;

                    $query = SubFolio::select(
                        DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Credit']. '", (sub_folio.quantity*sub_folio.amount), -(sub_folio.quantity*sub_folio.amount))) AS Amount'),
                        'sub_folio.type_code',
                        'sub_folio.id_log')
                        ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                        ->where('sub_folio.folio_number', $dataX['folio_number'])
                        ->where('cfg_init_account.sub_group_code', GlobalVariable::$accountSubGroup['AccountReceivable'])
                        ->where('void', '0')
                        ->groupBy('sub_folio.correction_breakdown')
                        ->get();

                    for($i = 0; $i < count($query); $i++){
                        $amount = $query[$i]->Amount;
                        if($i == (count($query) - 1)){
                            $amountCharged = $totalAmountCharged - $total;
                        } else {
                            $amountCharged =  $amount * ($totalAmountCharged / $totalAmount);
                            $total += $amountCharged;
                        }

                        if($amount >= 0) {
                            $amountX = $amount;
                            $amountChargedX = $amountCharged;
                        } else {
                            $amountX = -$amount;
                            $amountChargedX = -$amountCharged;
                        }

                        if($amountX > $amountChargedX){
                            $totalDiscount = $totalDiscount + $amountX - $amountChargedX;
                            ProcedureQueryController::insertJournalDetail($refNumberDiscount, GlobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), GlobalVariable::globalJournalAccount(GlobalVariable::$configurationName['JAInvoiceDiscount']),
                                $amountX - $amountChargedX, GlobalVariable::$transactionType['Debit'], 'Discount invoice for folio: '.$dataX['folio_number']. ', Transaction ID: '.$query[$i]->id_log, '', $request->user_id  );
                        }
                        ProcedureQueryController::insertInvoiceItem($invoiceNumber, $query[$i]->id_log, $dataX['folio_number'], $amountX, $amountChargedX, $dataX['default_currency_code'], $amountChargedX / $dataX['exchange_rate'], $dataX['exchange_rate'], $dataX['currency_code'],
                            $remark, $query[$i]->type_code, $request->user_id);
                    }
                }
                if($totalDiscount > 0) {
                    ProcedureQueryController::insertJournalDetail($refNumberDiscount,GlobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting']), $glAccountAR, $totalDiscount, GlobalVariable::$transactionType['Credit'],
                        'Discount invoice: '.$invoiceNumber, '', $request->user_id);
                    ProcedureQueryController::updateInvoiceRefNumber($invoiceNumber, $refNumberDiscount);
                } else {
                    ProcedureQueryController::deleteJournal($refNumberDiscount, $request->user_id);
                    ProcedureQueryController::updateInvoiceRefNumber($invoiceNumber, '');
                }

                ProcedureQueryController::insertLogUserW8UserId(GlobalVariable::$logUserAction['UpdateInvoiceCityLedger'], $invoiceNumber, $refNumberDiscount, '', '', $request->user_id);

                return 0;
            });
        }
    }

    public function updateDirectBill(Request $request){
        $validator = Validator::make(
            $request->all(),[
            'folio_number' => 'required',
            'direct_bill_code_before' => 'required',
            'direct_bill_code_after' => 'required',
            'user_id' => 'required']
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            ProcedureQueryController::updateDirectBill($request->folio_number, $request->direct_bill_code_before, $request->direct_bill_code_after, $request->user_id);
            return 0;
        }
    }

    public function editDirectBill(Request $request){
        $directBill = SubFolio::select('direct_bill_code')->where('id_log', $request->id_log)->first();

        return response()->json($directBill);
    }

    public function index(Request $request)
    {
        $filterList = [
            'company.name',
            'cfg_init_company_type.name',
            'CONCAT(sub_folio.account_code, " - ", cfg_init_account.name)',
            $this->mainTableName .'.folio_number',
            'guest_detail.room_number',
            'CONCAT(contact_person.title_code, contact_person.full_name)',
            'cfg_init_room_rate.name'
        ];


        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $dateFrom = Arr::get($search, 'date_from', '');
        $dateTo = Arr::get($search, 'date_to', '');
        $companyType =Arr::get($search, 'company_type', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 7 ? $filterList[$searchBy] : '';

        $subFolio = SubFolio::select(
            $this->mainTableName. '.folio_number',
            $this->mainTableName. '.account_code',
            $this->mainTableName. '.direct_bill_code',
            $this->mainTableName. '.id_log',
            DB::raw('CONCAT(' .$this->mainTableName. '.account_code, " - ", cfg_init_account.name) AS Account'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS GuestName'),
            DB::raw('DATE(guest_detail.arrival) AS ArrivalDate'),
            DB::raw('DATE(guest_detail.departure) AS DepartureDate'),
            'folio.voucher_number_ta',
            'guest_detail.room_number',
            'cfg_init_room_rate.name AS RoomRate',
            'company.name AS DirectBill',
            'cfg_init_company_type.name AS CompanyType',
            DB::raw('SUM(IF(' .$this->mainTableName. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$this->mainTableName. '.quantity * ' .$this->mainTableName. '.amount, -(' .$this->mainTableName. '.quantity * ' .$this->mainTableName. '.amount))) AS Amount'))
            ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
            ->leftJoin('folio', $this->mainTableName. '.folio_number', 'folio.number')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_room_rate', 'guest_detail.room_rate_code', 'cfg_init_room_rate.code')
            ->leftJoin('company', 'sub_folio.direct_bill_code', 'company.code')
            ->leftJoin('cfg_init_company_type', 'company.type_code', 'cfg_init_company_type.code')
            ->where('cfg_init_account.sub_group_code', GlobalVariable::$accountSubGroup['AccountReceivable'])
            ->where($this->mainTableName. '.void', '0')
            ->where('folio.status_code', GlobalVariable::$folioStatus['Closed'])
            ->groupBy($this->mainTableName.'.correction_breakdown');

            if(!empty($dateFrom) && !empty($dateTo) && $dateFrom <= $dateTo){
                $subFolio->whereRaw('DATE(guest_detail.departure)>="' .FormatController::formatDate($dateFrom). '" AND DATE(guest_detail.departure)<="' .FormatController::formatDate($dateTo). '"');
            }

            if(!empty($companyType)) {
                $subFolio->where('company.type_code', $companyType);
            }

            if(!empty($keyword) && !empty($searchBy)){
                $subFolio->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
            };

            $query = DB::table($subFolio, 'SubFolio')->select(
                'SubFolio.folio_number',
                'SubFolio.account_code',
                'SubFolio.direct_bill_code',
                'SubFolio.id_log',
                'SubFolio.Account',
                'SubFolio.GuestName',
                'SubFolio.ArrivalDate',
                'SubFolio.DepartureDate',
                'SubFolio.voucher_number_ta',
                'SubFolio.room_number',
                'SubFolio.RoomRate',
                'SubFolio.DirectBill',
                'SubFolio.CompanyType',
                DB::raw('SUM(SubFolio.Amount) AS Amount'))
                ->leftJoin('invoice_item', 'SubFolio.id_log', 'invoice_item.sub_folio_id')
                ->whereRaw('IFNULL(invoice_item.sub_folio_id, 0)=0')
                ->where('SubFolio.Amount', '>', '0')
                ->groupBy('SubFolio.folio_number', 'SubFolio.direct_bill_code')
                ->orderByRaw('DATE(SubFolio.DepartureDate), SubFolio.DirectBill, SubFolio.folio_number');



        return response()->json($query->limit($limit)->get());
    }


    // City Ledger Invoice
    public function indexInvoice(Request $request)
    {
        $mainTableName = 'invoice';
        $detailTableName1 = 'invoice_item';

        $filterList = [
            $mainTableName.'.number',
            'company.name',
            'contact_person.full_name',
            'TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code))',
            'contact_person.phone1',
            'contact_person.fax',
            $mainTableName.'.remark',
            $mainTableName.'.ref_number',
            $mainTableName.'.user_id',
        ];


        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $dateFrom = Arr::get($search, 'date_from', '');
        $isPaid = Arr::get($search, 'is_paid', '0');
        $dateTo = Arr::get($search, 'date_to', '');
        $companyType =Arr::get($search, 'company_type', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 9 ? $filterList[$searchBy] : '';

        $subFolio = DB::table($mainTableName)->select(
            $mainTableName.'.number',
            $mainTableName.'.company_code',
            $mainTableName.'.issued_date',
            $mainTableName.'.due_date',
            $mainTableName.'.remark',
            $mainTableName.'.is_paid',
            $mainTableName.'.ref_number',
            $mainTableName.'.print_count',
            $mainTableName.'.user_id',
            $mainTableName.'.id_log',
            'company.name as company',
            'contact_person.full_name',
            DB::raw('TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
            'contact_person.phone1',
            'contact_person.fax',
            DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged, -' .$detailTableName1. '.amount_charged)) AS TotalAmount'),
            DB::raw('SUM(' .$detailTableName1. '.amount_paid) AS TotalPaid'),
            DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged, -' .$detailTableName1. '.amount_charged)-' .$detailTableName1. '.amount_paid) AS OutStanding'),
            $detailTableName1. '.default_currency_code',
            DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged_foreign, -' .$detailTableName1. '.amount_charged_foreign)) AS TotalAmountForeign'),
            DB::raw('SUM(' .$detailTableName1. '.amount_paid / ' .$detailTableName1. '.exchange_rate) AS TotalPaidForeign'),
            DB::raw('(SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged_foreign, -' .$detailTableName1. '.amount_charged_foreign)-(' .$detailTableName1. '.amount_paid / ' .$detailTableName1. '.exchange_rate))) AS OutStandingForeign'),
            $detailTableName1. '.currency_code')
            ->leftJoin($detailTableName1, 'invoice.number', $detailTableName1.'.invoice_number')
            ->leftJoin('company', 'invoice.company_code', 'company.code')
            ->leftJoin('contact_person', 'invoice.contact_person_id', 'contact_person.id')
            ->leftJoin('cfg_init_country', 'contact_person.country_code', 'cfg_init_country.code')
            ->leftJoin('cfg_init_state', 'contact_person.state_code', 'cfg_init_state.code')
            ->where('invoice.is_paid', HelperController::trueFalse($request->is_paid))
            ->groupBy($mainTableName.'.number')
            ->orderBy($mainTableName.'.issued_date')
            ->orderBy($mainTableName.'.number');

            if(!empty($dateFrom) && !empty($dateTo) && $dateFrom <= $dateTo){
                $subFolio->whereRaw($mainTableName.'.issued_date>="' .FormatController::formatDate($dateFrom). '" AND '.$mainTableName.'.issued_date<="' .FormatController::formatDate($dateTo). '"');
            }

            if(!empty($companyType)) {
                $subFolio->where('company.type_code', $companyType);
            }

            if(!empty($keyword) && !empty($searchBy)){
                $subFolio->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
            };

        return response()->json($subFolio->limit($limit)->get());
    }

    public function getInvoiceDetail(Request $request){

        $mainTableName = 'invoice';
        $detailTableName1 = 'invoice_item';

        $invoice = DB::table($mainTableName)->select(
            $mainTableName.'.number',
            $mainTableName.'.company_code',
            $mainTableName.'.issued_date',
            $mainTableName.'.due_date',
            $mainTableName.'.remark',
            $mainTableName.'.is_paid',
            $mainTableName.'.ref_number',
            $mainTableName.'.print_count',
            $mainTableName.'.user_id',
            $mainTableName.'.id_log',
            'company.name as company',
            'contact_person.full_name',
            DB::raw('TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
            'contact_person.phone1',
            'contact_person.fax',
            DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged, -' .$detailTableName1. '.amount_charged)) AS TotalAmount'),
            DB::raw('SUM(' .$detailTableName1. '.amount_paid) AS TotalPaid'),
            DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged, -' .$detailTableName1. '.amount_charged)-' .$detailTableName1. '.amount_paid) AS OutStanding'),
            $detailTableName1. '.default_currency_code',
            DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged_foreign, -' .$detailTableName1. '.amount_charged_foreign)) AS TotalAmountForeign'),
            DB::raw('SUM(' .$detailTableName1. '.amount_paid / ' .$detailTableName1. '.exchange_rate) AS TotalPaidForeign'),
            DB::raw('(SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged_foreign, -' .$detailTableName1. '.amount_charged_foreign)-(' .$detailTableName1. '.amount_paid / ' .$detailTableName1. '.exchange_rate))) AS OutStandingForeign'),
            $detailTableName1. '.currency_code')
            ->leftJoin($detailTableName1, 'invoice.number', $detailTableName1.'.invoice_number')
            ->leftJoin('company', 'invoice.company_code', 'company.code')
            ->leftJoin('contact_person', 'invoice.contact_person_id', 'contact_person.id')
            ->leftJoin('cfg_init_country', 'contact_person.country_code', 'cfg_init_country.code')
            ->leftJoin('cfg_init_state', 'contact_person.state_code', 'cfg_init_state.code')
            ->where('invoice.number', $request->number)
            ->groupBy($mainTableName.'.number')
            ->orderBy($mainTableName.'.issued_date')
            ->orderBy($mainTableName.'.number');

            return response()->json($invoice->first());
    }

    public function edit($number){

        $query1 = DB::table('invoice')->select(
            'invoice.*',
            'contact_person.full_name',
            'contact_person.street',
            'contact_person.city_code',
            'contact_person.city',
            'contact_person.country_code',
            'contact_person.state_code',
            'contact_person.postal_code',
            'contact_person.phone1',
            'contact_person.fax')
            ->leftJoin('contact_person', 'invoice.contact_person_id', 'contact_person.id')
            ->where('invoice.number', $number)
            ->first();

            $isHadPayment = HelperController::isInvoiceHadPayment($number);
            $isJournalClosed = HelperController::isJournalClosed($query1->issued_date);
            if($isJournalClosed){
                return 5;
            }

            if($query1->is_paid == '-1'){
                return 2;
            }

            if($isHadPayment){
                return 1;
            }

        $query2 = DB::table('invoice_item')->select(
            'invoice_item.invoice_number',
            'invoice_item.folio_number',
            'invoice_item.default_currency_code',
            'invoice_item.amount_charged_foreign',
            'invoice_item.exchange_rate',
            'invoice_item.currency_code',
            'invoice_item.remark',
            DB::raw('SUM(invoice_item.amount) AS amount_old'),
            DB::raw('SUM(invoice_item.amount_charged) AS amount'),
            DB::raw('SUM(invoice_item.amount_charged_foreign) AS amount_foreign'),
            'sub_folio.audit_date',
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'),
            'guest_detail.room_number')
            ->leftJoin('folio', 'invoice_item.folio_number', 'folio.number')
            ->leftJoin('sub_folio', 'invoice_item.sub_folio_id', 'sub_folio.id_log')
            ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('invoice_item.invoice_number', $number)
            ->groupBy('invoice_item.folio_number');

            return response()->json([
                'invoice' => $query1,
                'invoiceItem' => $query2->get()
            ]);
    }

    public function dataLookup(Request $request){
        $company = Company::where('is_direct_bill', '-1')->orderBy('name')->get();
        $country = Country::get();
        $currency = Currency::orderBy('is_default')->get();
        $state = [];
        if(!empty($request->country_code)){
            $state = State::where('country_code', $request->country_code)->get();
        }
        $city = [];
        if(!empty($request->country_code)){
            $city = City::where('state_code', $request->state_code)->get();
        }
        if(count($city) == 0){
            $city = City::where('code', 'OTH')->get();
        }


        return response()->json([
            'country' => $country,
            'state' => $state,
            'company' => $company,
            'city' => $city,
            'currency' => $currency
        ]);
    }

    public function getCompanyType(){
        $query = CompanyType::get();

        return response()->json($query);
    }

    public function getFolio(Request $request){
        if($request->mode <> 0){
            $folio = SubFolio::select(
                'sub_folio.folio_number',
                'sub_folio.audit_date',
                DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'),
                'guest_detail.room_number',
                DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Credit']. '", (sub_folio.quantity * sub_folio.amount), -(sub_folio.quantity * sub_folio.amount))) AS total_amount'))
                ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
                ->leftJoin('invoice_item', 'sub_folio.id_log', 'invoice_item.sub_folio_id')
                ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
                ->leftJoinSub((DB::table('invoice_item')
                    ->select('sub_folio.correction_breakdown')
                    ->leftJoin('sub_folio', 'invoice_item.sub_folio_id', 'sub_folio.id_log')),
                    'InvoiceItem', 'sub_folio.correction_breakdown', 'InvoiceItem.correction_breakdown')
                ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                ->whereRaw('((IFNULL(invoice_item.sub_folio_id, 0)=0 AND IFNULL(InvoiceItem.correction_breakdown, 0)=0) OR invoice_item.invoice_number = "' .$request->invoice_number. '")')
                ->where('cfg_init_account.sub_group_code', GlobalVariable::$accountSubGroup['AccountReceivable'])
                ->where('direct_bill_code', $request->company_code)
                ->where('sub_folio.void', '0')
                ->where('folio.status_code', GlobalVariable::$folioStatus['Closed'])
                ->groupBy('sub_folio.folio_number', 'sub_folio.direct_bill_code')
                ->orderBy('sub_folio.folio_number')
                ->having('total_amount','>',0)
                ->get();
        } else {
            $folio = SubFolio::select(
                'sub_folio.folio_number',
                'sub_folio.audit_date',
                DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'),
                'guest_detail.room_number',
                DB::raw('SUM(IF(sub_folio.type_code="' .GlobalVariable::$transactionType['Credit']. '", (sub_folio.quantity * sub_folio.amount), -(sub_folio.quantity * sub_folio.amount))) AS total_amount'))
                ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
                ->leftJoin('invoice_item', 'sub_folio.id_log', 'invoice_item.sub_folio_id')
                ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
                ->leftJoinSub((DB::table('invoice_item')
                    ->select('sub_folio.correction_breakdown')
                    ->leftJoin('sub_folio', 'invoice_item.sub_folio_id', 'sub_folio.id_log')),
                    'InvoiceItem', 'sub_folio.correction_breakdown', 'InvoiceItem.correction_breakdown')
                ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                ->whereRaw('(IFNULL(invoice_item.sub_folio_id, 0)=0 AND IFNULL(InvoiceItem.correction_breakdown, 0)=0)')
                ->where('cfg_init_account.sub_group_code', GlobalVariable::$accountSubGroup['AccountReceivable'])
                ->where('direct_bill_code', $request->company_code)
                ->where('sub_folio.void', '0')
                ->where('folio.status_code', GlobalVariable::$folioStatus['Closed'])
                ->groupBy('sub_folio.folio_number', 'sub_folio.direct_bill_code')
                ->orderBy('sub_folio.folio_number')
                ->having('total_amount','>',0)
                ->get();
        }

        return response()->json($folio);
    }

    public function getInvoicePayment(Request $request){
        $payment = DB::table($this->detailTableName2)->select(
            $this->detailTableName2. '.*',
            DB::raw('SUM(' .$this->detailTableName2. '.amount) AS Amount'),
            DB::raw('SUM(' .$this->detailTableName2. '.amount_foreign) AS AmountForeign'),
            DB::raw('SUM(' .$this->detailTableName2. '.amount_actual) AS AmountActual'),
            DB::raw('SUM(' .$this->detailTableName2. '.amount_actual-' .$this->detailTableName2. '.amount) AS PLCurrency'))
            ->where($this->detailTableName2.'.invoice_number', $request->number)
            ->groupBy($this->detailTableName2.'.date', $this->detailTableName2.'.ref_number')
            ->orderBy($this->detailTableName2.'.date')
            ->orderBy($this->detailTableName2.'.ref_number')
            ->get();

        return response()->json($payment);
    }

    public function dataLookupPayment(){
        $subDepartment = SubDepartment::orderBy('id_sort', 'ASC')->get();
        $bankAccount = DB::table('acc_cfg_init_bank_account')
            ->select('acc_cfg_init_bank_account.*', DB::raw('CONCAT(acc_cfg_init_bank_account.name," | ", IFNULL(bank_account_number,"")) AS name'))
            ->where('for_receive', '-1')->orderBy('journal_account_code')->get();
        $currency = Currency::orderBy('is_default')->get();
        $defaultSubDepartment = '';
        if(count($subDepartment) > 0){
            foreach($subDepartment as $subDepartmentX){
                if($subDepartmentX->code == GlobalVariable::globalSubDepartment(GlobalVariable::$configurationName['SDAccounting'])){
                    $defaultSubDepartment = $subDepartmentX->code;
                }
            }
        }

        return response()->json([
            'sub_department' => $subDepartment,
            'bank_account' => $bankAccount,
            'currency' => $currency,
            'default_sub_department_accounting' => $defaultSubDepartment
        ]);
    }


    public function insertPayment(Request $request){

        $validator = Validator::make(
            $request->all(),[
            'company_code' => 'required',
            'invoice_number' => 'required',
            'date' => 'required',
            'currency_code' => 'required',
            'outstanding' => 'required',
            'issued_date' => 'required',
            'sub_department_code' => 'required',
            'bank_account_code' => 'required',
            'amount' => 'required',
            'amount_foreign' => 'required',
            'user_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            $mainTableName = 'invoice';
            $detailTableName1 = 'invoice_item';
            $invoice = DB::table($mainTableName)->select(
                $mainTableName.'.number',
                $mainTableName.'.company_code',
                $mainTableName.'.issued_date',
                $mainTableName.'.due_date',
                $mainTableName.'.remark',
                $mainTableName.'.is_paid',
                $mainTableName.'.ref_number',
                $mainTableName.'.print_count',
                $mainTableName.'.user_id',
                $mainTableName.'.id_log',
                'company.name as company',
                'contact_person.full_name',
                DB::raw('TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
                'contact_person.phone1',
                'contact_person.fax',
                DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged, -' .$detailTableName1. '.amount_charged)) AS TotalAmount'),
                DB::raw('SUM(' .$detailTableName1. '.amount_paid) AS TotalPaid'),
                DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged, -' .$detailTableName1. '.amount_charged)-' .$detailTableName1. '.amount_paid) AS OutStanding'),
                $detailTableName1. '.default_currency_code',
                DB::raw('SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged_foreign, -' .$detailTableName1. '.amount_charged_foreign)) AS TotalAmountForeign'),
                DB::raw('SUM(' .$detailTableName1. '.amount_paid / ' .$detailTableName1. '.exchange_rate) AS TotalPaidForeign'),
                DB::raw('(SUM(IF(' .$detailTableName1. '.type_code="' .GlobalVariable::$transactionType['Credit']. '", ' .$detailTableName1. '.amount_charged_foreign, -' .$detailTableName1. '.amount_charged_foreign)-(' .$detailTableName1. '.amount_paid / ' .$detailTableName1. '.exchange_rate))) AS OutStandingForeign'),
                $detailTableName1. '.currency_code')
                ->leftJoin($detailTableName1, 'invoice.number', $detailTableName1.'.invoice_number')
                ->leftJoin('company', 'invoice.company_code', 'company.code')
                ->leftJoin('contact_person', 'invoice.contact_person_id', 'contact_person.id')
                ->leftJoin('cfg_init_country', 'contact_person.country_code', 'cfg_init_country.code')
                ->leftJoin('cfg_init_state', 'contact_person.state_code', 'cfg_init_state.code')
                ->where('invoice.number', $request->invoice_number)
                ->groupBy($mainTableName.'.number')
                ->orderBy($mainTableName.'.issued_date')
                ->orderBy($mainTableName.'.number')
                ->first();

            $bankTypeCode = HelperController::getBankAccountType($request->bank_account_code);
            $companyCode = $invoice->company_code;
            $invoiceNumber = $request->invoice_number;
            $remark = $request->remark;
            $date = $request->date;
            $userID = $request->user_id;
            $journalTypeCode = '';
            $invoiceCurrencyCode = $invoice->currency_code;
            $currencyCodeDefault = HelperController::getDefaultCurrency();
            $isJournalClosed = HelperController::isJournalClosed($invoice->issued_date);
            if($isJournalClosed){
                return 5;
            }

            if($invoice->is_paid == '-1'){
                return 2;
            }

            if($request->amount > $invoice->OutStandingForeign){
                return 6;
            } else if(FormatController::formatDate($request->date) < FormatController::firstDayOfMonth($invoice->issued_date)){
                return 7;
            }


            if($bankTypeCode == GlobalVariable::$bankAccountType['CashAccount']){
                $journalTypeCode = GlobalVariable::$journalType['CashIn'];
            } else {
                $journalTypeCode = GlobalVariable::$journalType['BankIn'];
            }
            $glAccountAR = HelperController::getJournalAccountCompanyAR($companyCode);

            $invoiceItem = DB::table('invoice_item')->select(
                'sub_folio_id',
                'folio_number',
                DB::raw('IF(type_code="' .GlobalVariable::$transactionType['Credit']. '", amount_charged, -amount_charged) AS AmountCharged'),
                'default_currency_code',
                DB::raw('IF(type_code="' .GlobalVariable::$transactionType['Credit']. '", amount_charged_foreign, -amount_charged_foreign) AS AmountChargedForeign'),
                'currency_code',
                'exchange_rate')
                ->where('invoice_number', $invoiceNumber)
                ->orderBy('id_log')
                ->get();

            $totalTemp = 0;
            $amountProcess = 0;
            $totalAmountActual = 0;
            $tempAmount = $request->amount;
            $totalPayment = HelperController::getInvoiceTotalPayment($invoiceNumber);

            $refNumber = HelperController::getJournalRefNumber(GlobalVariable::$journalPrefix['Receive'], $date);

            // Master
            ProcedureQueryController::insertJournal($refNumber, '', $companyCode, $journalTypeCode, GlobalVariable::$journalGroup['Receiving'], $date, 'Invoice payment: '.$invoiceNumber.$remark, '', '', $userID);

            if(count($invoiceItem) > 0 && $tempAmount > 0){
                foreach($invoiceItem as $invoiceItemX){
                    $totalTemp += $invoiceItemX->AmountChargedForeign;
                    $totalPLCurrency = 0;
                    if($totalTemp > $totalPayment && $tempAmount > 0){
                        if(($totalTemp - $totalPayment) > $tempAmount){
                            $amountProcess = $tempAmount;
                        } else {
                            $amountProcess = $totalTemp - $totalPayment;
                        }

                        $totalPayment += $amountProcess;
                        $tempAmount -= $amountProcess;

                        $amount = $amountProcess * $invoiceItemX->exchange_rate;
                        $exchangeRate = 1;
                        $exchangeRateActual = 1;
                        if($invoiceCurrencyCode == $currencyCodeDefault){
                            $amountForeign = $amountProcess / $exchangeRate;
                            $amountActual = $amountProcess;
                            if($request->currency_code <> $currencyCodeDefault){
                                $exchangeRate = $request->exchange_rate;
                                $exchangeRateActual = $request->exchange_rate;
                            }
                        } else {
                            if($request->currency_code == $invoiceCurrencyCode){
                                $amountForeign = $amountProcess;
                                $exchangeRateActual = $request->exchange_rate;
                            } else {
                                $amountForeign = $amount;
                                $exchangeRateActual = $request->exchange_rate;
                            }
                            $amountActual = $amountProcess * $request->exchange_rate;
                            if($request->currency_code <> $currencyCodeDefault){
                                $exchangeRate = $invoiceItemX->exchange_rate;
                            }
                        }
                        $totalAmountActual += $amountActual;
                        $totalPLCurrency = $amountActual - $amount;

                        // Detail Credit
                        ProcedureQueryController::insertJournalDetail($refNumber, $request->sub_department_code, $glAccountAR, $amount, GlobalVariable::$transactionType['Credit'], 'Invoice Payment for Folio: '.$invoiceItemX->folio_number.', TransactionID: '.$invoiceItemX->sub_folio_id.' '.$remark, '',$userID);
                        ProcedureQueryController::insertInvoicePayment($invoiceNumber, $invoiceItemX->sub_folio_id, $invoiceItemX->folio_number, $refNumber, $amount, $currencyCodeDefault, $amountForeign, $exchangeRate, $request->currency_code, $amountActual, $exchangeRateActual, $date, $remark, $userID);

                        if($totalPLCurrency <> 0){
                            if($totalPLCurrency > 0){
                                $typeCodeX = GlobalVariable::$transactionType['Credit'];
                            } else {
                                $typeCodeX = GlobalVariable::$transactionType['Debit'];
                                $totalPLCurrency = -$totalPLCurrency;
                            }

                            // Detail PL Currency
                            ProcedureQueryController::insertJournalDetail($refNumber, $request->sub_department_code, GlobalVariable::globalJournalAccount(GlobalVariable::$configurationName['JAPLCurrency'])->profitLostCurrency, $totalPLCurrency, $typeCodeX, 'Invoice Payment: '.$invoiceNumber.', TransactionID: '.$invoiceItemX->sub_folio_id, '', $userID);
                        }
                    }
                }
            }

            // Detail Debit
            ProcedureQueryController::insertJournalDetail($refNumber, $request->sub_department_code, $request->bank_account_code, $totalAmountActual, GlobalVariable::$transactionType['Debit'], 'Invoice Payment: '.$invoiceNumber.$remark, '', $userID);

            if($request->amount == $invoice->OutStandingForeign){
                ProcedureQueryController::updateInvoicePaid($invoiceNumber, $userID);
            }
            // Insert Log
            ProcedureQueryController::insertLogUserW8UserId(GlobalVariable::$logUserAction['InsertPaymentInvoiceCityLedger'], $invoiceNumber, $refNumber, '', '', $userID);
            return 0;
        }
    }

    public function deleteInvoicePayment(Request $request){

        $validator = Validator::make(
            $request->all(),[
            'number' => 'required',
            'user_id' => 'required']
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            $totalPayment = HelperController::getInvoiceTotalPayment($request->number);
            if($totalPayment <= 0){
                return 3;
            }
            ProcedureQueryController::deleteInvoicePayment($request->number, $request->user_id);
            ProcedureQueryController::updateInvoiceUnpaid($request->number, $request->user_id);
            ProcedureQueryController::insertLogUserW8UserId(GlobalVariable::$logUserAction['DeletePaymentInvoiceCityLedger'], $request->number, '', '', '', $request->user_id);
            return 0;
        }
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'invoice_number' => !$isNew ? 'required' : '',
            'issued_date' => 'required',
            'due_date' => 'required',
            'company_code' => 'required',
            'full_name' => 'required',
            'data' => 'required'
        ];
    }
}
