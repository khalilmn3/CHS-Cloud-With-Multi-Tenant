<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\Account;
use App\Configurations\Models\ChargeFrequency;
use App\Configurations\Models\CommissionType;
use App\Configurations\Models\Company;
use App\Configurations\Models\PackageBusinessSource;
use App\Configurations\Models\SubDepartment;
use App\Configurations\Models\TaxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator;
use Illuminate\Support\Arr;

class PackageBusinessSourceController extends Controller
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

    public function __construct()
    {
        $this->mainTableName = 'cfg_init_package_business_source';
        $this->joinTable1 = 'company';
        $this->joinTable2 = 'const_commission_type';
        $this->joinTable3 = 'cfg_init_account';

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
            $exist = PackageBusinessSource::where('company_code', $request->company_code)->where('package_code', $request->package_code)->first();
            if(!empty($exist)){
                return 1;
            }
            DB::select(
                'CALL insert_'.$this->mainTableName.'(?,?,?,?,?,?)',
                [
                    $request->package_code, $request->account_code, $this->setNotNull($request->company_code), $request->commission_type_code, $request->commission_value,
                    $request->user_id
                ]
            );

            return 0;
        }
    }

    public function edit($id)
    {
        $query = PackageBusinessSource::where('id_log',$id)->first();
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
                'CALL update_'.$this->mainTableName.'(?,?,?,?,?,?)',
                [
                    intval($request->id_log), $request->account_code, $this->setNotNull($request->company_code), $request->commission_type_code, $request->commission_value,
                    $request->user_id
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
    public function dataAgGrid($id)
    {
        $model = PackageBusinessSource::select(
            $this->mainTableName . '.commission_value',
            $this->mainTableName . '.package_code',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log',
            $this->joinTable1 . '.name as company',
            $this->joinTable2 . '.name as commission_type',
            $this->joinTable3 . '.name as account')
            ->leftJoin($this->joinTable1, $this->mainTableName . '.company_code', $this->joinTable1 . '.code')
            ->leftJoin($this->joinTable2, $this->mainTableName . '.commission_type_code', $this->joinTable2 . '.code')
            ->leftJoin($this->joinTable3, $this->mainTableName . '.account_code', $this->joinTable3 . '.code')
            ->where('package_code',$id);

        return response()->json($model->get());
    }

    public function dataLookUp(){

        $company= Company::select('code','name')->where('is_business_source','-1')->get();
        $account= Account::select('code','name')->where('sub_group_code','ACPY')->get();
        $commissionType= CommissionType::select('code','name')->whereIn('code',['1','2','5','6'])->get();
            return response()->json([
                'account' => $account,
                'commission_type' => $commissionType,
                'company' => $company
            ]);;
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'package_code' => 'required',
            'account_code' => 'required',
            'company_code' => 'required',
            'commission_type_code' => 'required',
            'commission_value' => 'required',
            'user_id' => 'required',
            'id_log' => $isNew ? '' : 'required',
        ];
    }
    private function setNotNull($value){
        if($value == ''){
            $value = ' ';
        }
        return $value;
    }
}
