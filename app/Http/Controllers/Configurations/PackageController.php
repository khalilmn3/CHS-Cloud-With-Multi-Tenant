<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\Account;
use App\Configurations\Models\ChargeFrequency;
use App\Configurations\Models\Company;
use App\Configurations\Models\Package;
use App\Configurations\Models\SubDepartment;
use App\Configurations\Models\TaxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Validator;
use Illuminate\Support\Arr;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $mainTableName;
    private $joinTable1;
    private $joinTable2;
    private $joinTable3;
    private $joinTable4;
    private $joinTable5;

    public function __construct()
    {
        $this->mainTableName = 'cfg_init_package';
        $this->joinTable1 = 'pos_cfg_init_outlet';
        $this->joinTable2 = 'pos_cfg_init_product';
        $this->joinTable3 = 'cfg_init_sub_department';
        $this->joinTable4 = 'cfg_init_account';
        $this->joinTable5 = 'cfg_init_tax_and_service';
        $this->joinTable6 = 'const_charge_frequency';

    }

    public function store(Request $request)
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
            $query = DB::select(
                'CALL insert_'.$this->mainTableName.'(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                    $request->code, $request->name, ' ', ' ', $request->sub_department_code,
                    $request->account_code, $request->quantity, $request->amount, $this->setEnum($request->per_pax), $this->setEnum($request->include_child), $request->tax_and_service_code,
                    $request->charge_frequency_code, $request->max_pax, $request->extra_pax, $this->setEnum($request->per_pax_extra), $this->setEnum($request->show_in_transaction),
                    $this->setEnum($request->is_online), $this->setEnum($request->is_active), $request->user_id
                ]
            );

            return response()->json([
                'package_code' => $request->code
            ]);
        }
    }

    public function edit($id)
    {
        $query = Package::find($id);

        return response()->json($query);
    }

    public function update(Request $request, $id)
    {
        $params= $request->all();

        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(false)
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            $query = DB::select(
                'CALL update_'.$this->mainTableName.'(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                    $request->code, $request->name, ' ', ' ', $request->sub_department_code,
                    $request->account_code, $request->quantity, $request->amount, $this->setEnum($request->per_pax), $this->setEnum($request->include_child), $request->tax_and_service_code,
                    $request->charge_frequency_code, $request->max_pax, $request->extra_pax, $this->setEnum($request->per_pax_extra), $this->setEnum($request->show_in_transaction),
                    $this->setEnum($request->is_online), $this->setEnum($request->is_active), $request->user_id
                ]
            );

            return response()->json([
                'success' => 'update item successfully'
            ]);
        }
    }

    public function delete(Request $request)
    {
        $params = $request->all();
        $user_id =  $params['user_id'];
        $id = $params['id'];
        DB::select('call delete_' . $this->mainTableName . '(?,?)', array($id, $user_id));
        return response()->json([
            'success' => 'deleted successfully'
        ]);
    }
    public function dataAgGrid(Request $request)
    {
        $filterList = [
            'cfg_init_package.code',
            'cfg_init_package.name',
            'pos_cfg_init_outlet.name',
            'pos_cfg_init_product.name',
            'cfg_init_sub_department.name',
            'cfg_init_account.name',
            'cfg_init_tax_and_service.name',
            'const_charge_frequency.name',
            'cfg_init_package.user_id'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 9 ? $filterList[$searchBy] : '';

        $model = Package::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->mainTableName . '.quantity',
            $this->mainTableName . '.amount',
            $this->mainTableName . '.per_pax',
            $this->mainTableName . '.include_child',
            $this->mainTableName . '.max_pax',
            $this->mainTableName . '.extra_pax',
            $this->mainTableName . '.per_pax_extra',
            $this->mainTableName . '.show_in_transaction',
            $this->mainTableName . '.is_active',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log',
            $this->joinTable1 . '.name as outlet',
            $this->joinTable2 . '.name as product',
            $this->joinTable3 . '.name as sub_department',
            $this->joinTable4 . '.name as account',
            $this->joinTable5 . '.name as tax_and_service',
            $this->joinTable6 . '.name as charge_frequency')
            ->leftJoin($this->joinTable1, $this->mainTableName . '.outlet_code', $this->joinTable1 . '.code')
            ->leftJoin($this->joinTable2, $this->mainTableName . '.product_code', $this->joinTable2 . '.code')
            ->leftJoin($this->joinTable3, $this->mainTableName . '.sub_department_code', $this->joinTable3 . '.code')
            ->leftJoin($this->joinTable4, $this->mainTableName . '.account_code', $this->joinTable4 . '.code')
            ->leftJoin($this->joinTable5,  $this->mainTableName . '.tax_and_service_code',  $this->joinTable5 . '.code')
            ->leftJoin($this->joinTable6,  $this->mainTableName . '.charge_frequency_code',  $this->joinTable5 . '.code')
            ->orderBy($this->mainTableName . '.code');

            if(!empty($keyword) && !empty($searchBy)){
                $model->where($searchBy, 'like', '%'.$keyword.'%');
            };

        return response()->json([
            'modelGrid' => $model->limit($limit)->get()
        ]);
    }

    public function dataLookUp(){
        $taxService= TaxService::select('code','name')->get();
        $chargeFreq= ChargeFrequency::select('code','name')->get();
        $subDepartment = SubDepartment::select('code','name')->orderBy('id_sort')->get();
        $company= Company::select('code','name')->where('is_business_source','-1')->get();

        return response()->json([
            'tax_and_service' => $taxService,
            'charge_frequency' => $chargeFreq,
            'sub_department' => $subDepartment,
            'company' => $company
        ]);
    }

    public function account(Request $request){


        $account= Account::select('code','name','sub_group_code');

            if(!empty($request->sub_department_code)){
                $account->where('sub_department_code','like','%'.$request->sub_department_code.'%');
            }else{
                $account->where('sub_department_code','like','%FRON%');
            }

            return response()->json($account->get());
    }


    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|unique:'.$this->mainTableName : 'required',
            'name' => $isNew ? 'required|unique:'.$this->mainTableName : 'required',
            'sub_department_code' => 'required',
            'account_code' => 'required',
            'quantity' => 'required',
            'amount' => 'required',
            'per_pax' => 'required',
            'include_child' => 'required',
            'tax_and_service_code' => 'required',
            'charge_frequency_code' => 'required',
            'max_pax' => 'required',
            'extra_pax' => 'required',
            'per_pax_extra' => 'required',
            'show_in_transaction' => 'required',
            'is_online' => 'required',
            'is_active' => 'required',
            'user_id' => 'required',
        ];
    }
    private function setEnum($value){
        if($value == 'true'){
            $value = '-1';
        }else{
            $value = '0';
        }
        return $value;
    }
}
