<?php

namespace App\Http\Controllers\GuestInHouse;

use App\Configurations\Models\Account;
use App\Configurations\Models\Package;
use App\Folio\Models\Folio;
use App\GuestInHouse\Models\GuestExtraCharge;
use App\Http\Controllers\Controller;
use App\Http\Controllers\DataLookupController;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class GuestExtraChargeController extends Controller
{
    private $folioNumber;
    private $idLog;
    private $packageName;
    private $outletCode;
    private $productCode;
    private $packageCode;
    private $subDeptCode;
    private $accountCode;
    private $quantity;
    private $amount;
    private $perPax;
    private $includeChild;
    private $taxServiceCode;
    private $chargeFrequencyCode;
    private $maxPax;
    private $extraPax;
    private $perPaxExtra;
    private $userId;

    public function __construct(Request $request)
    {
        $params = $request->all();
        $this->folioNumber = Arr::get($params,'number','');
        $this->idLog = Arr::get($params,'id_log','');
        $this->packageName = HelperController::ifNull(Arr::get($params,'package_name',''));
        $this->outletCode =  HelperController::ifNull(Arr::get($params,'outlet_code',''));
        $this->productCode =  HelperController::ifNull(Arr::get($params,'product_code',''));
        $this->packageCode =  HelperController::ifNull(Arr::get($params,'package_code',''));
        $this->subDeptCode = Arr::get($params,'sub_department_code','');
        $this->accountCode = Arr::get($params,'account_code','');
        $this->quantity = Arr::get($params,'quantity','');
        $this->amount = Arr::get($params,'amount','');
        $this->perPax = Arr::get($params,'per_pax','');
        $this->includeChild = Arr::get($params,'include_child','');
        $this->taxServiceCode =  HelperController::ifNull(Arr::get($params,'tax_and_service_code',''));
        $this->chargeFrequencyCode = Arr::get($params,'charge_frequency_code','');
        $this->maxPax = Arr::get($params,'max_pax','');
        $this->extraPax = Arr::get($params,'extra_pax','');
        $this->perPaxExtra = Arr::get($params, 'per_pax_extra','');
        $this->userId = Arr::get($params,'user_id','');
    }

    public function index(Request $request){
        $query = GuestExtraCharge::select(
            'guest_extra_charge.*',
            'guest_extra_charge.folio_number as number',
            'cfg_init_sub_department.name as sub_department',
            'cfg_init_account.name as account',
            'cfg_init_tax_and_service.name as tax_and_service',
            'const_charge_frequency.name as charge_frequency',
            'pos_cfg_init_outlet.name as outlet',
            'pos_cfg_init_product.name as product',
            'cfg_init_package.name as package',
            DB::raw('CONCAT(guest_extra_charge.account_code," - ",cfg_init_account.name) as account_code_name')
        )
            ->leftJoin('cfg_init_account','guest_extra_charge.account_code','cfg_init_account.code')
            ->leftJoin('cfg_init_sub_department','guest_extra_charge.sub_department_code','cfg_init_sub_department.code')
            ->leftJoin('cfg_init_tax_and_service','guest_extra_charge.tax_and_service_code','cfg_init_tax_and_service.code')
            ->leftJoin('pos_cfg_init_outlet','guest_extra_charge.outlet_code','pos_cfg_init_outlet.code')
            ->leftJoin('pos_cfg_init_product','guest_extra_charge.product_code','pos_cfg_init_product.code')
            ->leftJoin('cfg_init_package','guest_extra_charge.package_code','cfg_init_package.code')
            ->leftJoin('const_charge_frequency','guest_extra_charge.charge_frequency_code','const_charge_frequency.code')
            ->where('folio_number',$request['number']);

        return response()->json($query->get());
    }

    public function store(){
        $folio= Folio::select(DB::raw('DATE(guest_detail.arrival) as arrival'),DB::raw('DATE(guest_detail.departure) as departure'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->where('number',$this->folioNumber)
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->first();
        if(!empty($folio)){
            ProcedureQueryController::insertGuestExtraCharge($this->folioNumber, $this->packageName, $this->outletCode, $this->productCode, $this->packageCode, $this->subDeptCode, $this->accountCode, $this->quantity, $this->amount,
                HelperController::trueFalse($this->perPax), HelperController::trueFalse($this->includeChild),
                $this->taxServiceCode, $this->chargeFrequencyCode, $this->maxPax, $this->extraPax, HelperController::trueFalse($this->perPaxExtra), $this->userId);

            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['InsertFolioExtraCharge'],$this->folioNumber,'','','',$this->userId);
            return 0;
        }else{
            return 1;
        }


    }

    public function update(Request $request){
        $folio= Folio::select(DB::raw('DATE(guest_detail.arrival) as arrival'),DB::raw('DATE(guest_detail.departure) as departure'))
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->where('number',$request['folio_number'])
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->first();
        if(!empty($folio)){
            ProcedureQueryController::updateGuestExtraCharge($this->idLog, $this->outletCode, $this->productCode, $this->subDeptCode, $this->accountCode, $this->quantity, $this->amount,
                HelperController::trueFalse($this->perPax), HelperController::trueFalse($this->includeChild),
                $this->taxServiceCode, $this->chargeFrequencyCode, $this->maxPax, $this->extraPax, HelperController::trueFalse($this->perPaxExtra), $this->userId);

            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['UpdateFolioExtraCharge'],$this->idLog,'','','',$this->userId);
            return 0;
        }else{
            return 1;
        }
    }

    public function edit($id){
        $query = GuestExtraCharge::select(
            'guest_extra_charge.*',
            'pos_cfg_init_outlet.name as outlet_name',
            'pos_cfg_init_product.name as product_name'
        )
            ->where('guest_extra_charge.id_log',$id)
            ->leftJoin('pos_cfg_init_outlet','guest_extra_charge.outlet_code','pos_cfg_init_outlet.code')
            ->leftJoin('pos_cfg_init_product','guest_extra_charge.product_code','pos_cfg_init_product.code')
            ->first();

        return response()->json($query);
    }

    public function delete(Request $request){
        $validator = Validator::make(
            $request->all(),
            [
                'id_log' => 'required',
                'user_id' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            ProcedureQueryController::deleteGuestExtraCharge($request->id_log, $request->user_id);

            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['DeleteFolioExtraCharge'],$request->id_log,'','','',$request->user_id);
        }
    }

    public function Lookup(Request $request){
        $params=$request->all();
        $dept = Arr::get($params,'q','');
        $outletCode = Arr::get($params,'outlet','');
        $outlet = DataLookupController::outlet();
        $product = DataLookupController::product($outletCode);
        $account = DataLookupController::account(null,$dept);
        $subDept = DataLookupController::subDepartment();
        $taxService = DataLookupController::taxService();
        $chargeFreq = DataLookupController::chargeFrequently();
        $businessSource = DataLookupController::company(true, null);

        return response()->json([
            'sub_department' => $subDept,
            'account' => $account,
            'tax_and_service' => $taxService,
            'charge_frequency' => $chargeFreq,
            'outlet' => $outlet,
            'product' => $product,
            'business_source' => $businessSource
        ]);
    }

    public function getBreakdownList($idLog){
        $breakdown = DB::table('guest_extra_charge_breakdown')
            ->select(
                'guest_extra_charge_breakdown.*',
                'pos_cfg_init_outlet.name as outlet',
                'pos_cfg_init_product.name as product',
                'cfg_init_sub_department.name as sub_department',
                DB::raw('CONCAT(guest_extra_charge_breakdown.account_code, " - ", cfg_init_account.name) AS Account'),
                'cfg_init_tax_and_service.name as tax_and_service',
                'const_charge_frequency.name as charge_frequency')
            ->leftJoin('pos_cfg_init_outlet','guest_extra_charge_breakdown.outlet_code','pos_cfg_init_outlet.code')
            ->leftJoin('pos_cfg_init_product','guest_extra_charge_breakdown.product_code','pos_cfg_init_product.code')
            ->leftJoin('cfg_init_sub_department','guest_extra_charge_breakdown.sub_department_code','cfg_init_sub_department.code')
            ->leftJoin('cfg_init_account','guest_extra_charge_breakdown.account_code','cfg_init_account.code')
            ->leftJoin('cfg_init_tax_and_service','guest_extra_charge_breakdown.tax_and_service_code','cfg_init_tax_and_service.code')
            ->leftJoin('const_charge_frequency','guest_extra_charge_breakdown.charge_frequency_code','const_charge_frequency.code')
            ->where('guest_extra_charge_breakdown.guest_extra_charge_id', $idLog)
            ->get();

            return response()->json($breakdown);
    }

    public function insertBreakdown(Request $request){
        $validator = Validator::make(
            $request->all(),
            [
                'extra_charge_id' => 'required',
                'sub_department_code' => 'required',
                'account_code' => 'required',
                'quantity' => 'required|min:1',
                'amount' => 'required|min:1',
                'charge_frequency_code' => 'required',
                'user_id' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            ProcedureQueryController::insertGuestExtraChargeBreakdown($request->extra_charge_id, $request->outlet_code, $request->product_code, $request->sub_department_code,
                $request->account_code, $request->company_code, $request->quantity, $request->is_amount_percent, $request->amount, $request->per_pax, $request->include_child,
                $request->remark, $request->tax_and_service, $request->charge_frequency_code, $request->max_pax, $request->extra_pax, $request->per_pax_extra, $request->user_id);

            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['InsertFolioExtraChargeBreakdown'],$request->extra_charge_id,'','','',$request->user_id);
            return 0;
        }
    }

    public function updateBreakdown(Request $request){
        $validator = Validator::make(
            $request->all(),
            [
                'id_log' => 'required',
                'sub_department_code' => 'required',
                'account_code' => 'required',
                'quantity' => 'required|min:1',
                'amount' => 'required|min:1',
                'charge_frequency_code' => 'required',
                'user_id' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            ProcedureQueryController::updateGuestExtraChargeBreakdown($request->id_log, $request->outlet_code, $request->product_code, $request->sub_department_code,
                $request->account_code, $request->company_code, $request->quantity, $request->is_amount_percent, $request->amount, $request->per_pax, $request->include_child,
                $request->remark, $request->tax_and_service, $request->charge_frequency_code, $request->max_pax, $request->extra_pax, $request->per_pax_extra, $request->user_id);

            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['UpdateFolioExtraChargeBreakdown'],$request->id_log,'','','',$request->user_id);
            return 0;
        }
    }

    public function editBreakdown($idLog){
        $breakdown = DB::table('guest_extra_charge_breakdown')
        ->select(
            'guest_extra_charge_breakdown.*',
            'pos_cfg_init_outlet.name as outlet_name',
            'pos_cfg_init_product.name as product_name',
            'cfg_init_account.sub_group_code as sub_group_code',
            DB::raw('CONCAT(guest_extra_charge_breakdown.account_code, " - ", cfg_init_account.name) AS account_name'),
            DB::raw('IF(per_pax="-1",true,false) as per_pax'),
            DB::raw('IF(include_child="-1",true,false) as include_child'),
            DB::raw('IF(per_pax_extra="-1",true,false) as per_pax_extra'))
        ->leftJoin('pos_cfg_init_outlet','guest_extra_charge_breakdown.outlet_code','pos_cfg_init_outlet.code')
        ->leftJoin('pos_cfg_init_product','guest_extra_charge_breakdown.product_code','pos_cfg_init_product.code')
        ->leftJoin('cfg_init_account','guest_extra_charge_breakdown.account_code','cfg_init_account.code')
        ->where('guest_extra_charge_breakdown.id_log', $idLog)->first();

        return response()->json($breakdown);
    }

    public function deleteBreakdown(Request $request){
        $validator = Validator::make(
            $request->all(),
            [
                'id_log' => 'required',
                'user_id' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            ProcedureQueryController::deleteGuestExtraChargeBreakdown($request->id_log, $request->user_id);

            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['DeleteFolioExtraChargeBreakdown'],$request->id_log,'','','',$request->user_id);
            return 0;
        }
    }

    public function insertExtraChargePackage(Request $request){
        $validator = Validator::make(
            $request->all(),
            [
                'number' => 'required',
                'package_code' => 'required',
                'user_id' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            $package = Package::where('code',$request->package_code)->first();
            if(!empty($package)){
                $extraChargeId =  ProcedureQueryController::insertGuestExtraCharge($request->number, $package->name, $package->outlet_code, $package->product_code, $package->code,
                    $package->sub_department_code, $package->account_code, $package->quantity, $package->amount, $package->per_pax, $package->include_child, $package->tax_and_service_code,
                    $package->charge_frequency_code, $package->max_pax, $package->extra_pax, $package->per_pax_extra, $request->user_id);

                ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['InsertFolioExtraCharge'],$request->number,'','','',$request->user_id);
                // insert breakdown
                $packageBreakdown = DB::table('cfg_init_package_breakdown')->where('package_code', $request->package_code)->get();
                if(count($packageBreakdown) > 0){
                    foreach($packageBreakdown as $packageBreakdownX){
                        ProcedureQueryController::insertGuestExtraChargeBreakdown($extraChargeId,  $packageBreakdownX->outlet_code, $packageBreakdownX->product_code, $packageBreakdownX->sub_department_code,
                            $packageBreakdownX->account_code, $packageBreakdownX->company_code, $packageBreakdownX->quantity, $packageBreakdownX->is_amount_percent, $packageBreakdownX->amount, $packageBreakdownX->per_pax, $packageBreakdownX->include_child,
                            $packageBreakdownX->remark, $packageBreakdownX->tax_and_service_code, $packageBreakdownX->charge_frequency_code, $packageBreakdownX->max_pax, $packageBreakdownX->extra_pax, $packageBreakdownX->per_pax_extra, $packageBreakdownX->user_id);
                    }
                }
                return 0;
            }
        }
    }

    public function subGroupAccount(Request $request){
        $subGroup = Account::select('sub_group_code')->where('code',$request->code)->first();

        return response()->json($subGroup);
    }
}
