<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\RoomRateBreakdown;
use App\Configurations\Models\Account;
use App\Configurations\Models\ChargeFrequency;
use App\Configurations\Models\SubDepartment;
use App\Configurations\Models\TaxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Validator;

class RoomRateBreakdownController extends Controller
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
    private $joinTable6;
    private $joinTable7;

    public function __construct()
    {
        $this->mainTableName = 'cfg_init_room_rate_breakdown';
        $this->joinTable1 = 'company';
        $this->joinTable2 = 'cfg_init_sub_department';
        $this->joinTable3 = 'cfg_init_account';
        $this->joinTable4 = 'cfg_init_tax_and_service';
        $this->joinTable5 = 'const_charge_frequency';
        $this->joinTable6 = 'pos_cfg_init_outlet';
        $this->joinTable7 = 'pos_cfg_init_product';

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
                'CALL insert_'.$this->mainTableName.'(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                    $request->room_rate_code,' ', ' ', $request->sub_department_code,
                    $request->account_code, $this->setNotNull($request->company_code), $request->quantity, $request->is_amount_percent, $request->amount, $this->setEnum($request->per_pax), $this->setEnum($request->include_child), $this->setNotNull($request->remark), $request->tax_and_service_code,
                    $request->charge_frequency_code, $request->max_pax, $request->extra_pax, $this->setEnum($request->per_pax_extra), $request->user_id
                ]
            );

            return response()->json([
                'success' => 'insert item successfully'
            ]);
        }
    }

    public function edit($id)
    {
        $query = RoomRateBreakdown::select(
            'account_code',
            'amount',
            'charge_frequency_code',
            'company_code',
            'extra_pax',
            'id_log',
            'include_child',
            'is_amount_percent',
            'max_pax',
            'outlet_code',
            'per_pax',
            'per_pax_extra',
            'product_code',
            'quantity',
            'remark',
            'room_rate_code',
            'sub_department_code',
            'tax_and_service_code',
            'user_id'
            )->where('id_log',$id)->first();
        $account = Account::find($query->account_code);
        return response()->json([
            'breakdown' => $query,
            'account' => $account
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
                'CALL update_'.$this->mainTableName.'(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                    intval($request->id_log), ' ', ' ', $request->sub_department_code,
                    $request->account_code, $this->setNotNull($request->company_code), $request->quantity, $request->is_amount_percent, $request->amount, $this->setEnum($request->per_pax), $this->setEnum($request->include_child), $this->setNotNull($request->remark), $request->tax_and_service_code,
                    $request->charge_frequency_code, $request->max_pax, $request->extra_pax, $this->setEnum($request->per_pax_extra), $request->user_id
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
        $model = RoomRateBreakdown::select(
            $this->mainTableName . '.quantity',
            $this->mainTableName . '.amount',
            $this->mainTableName . '.per_pax',
            $this->mainTableName . '.include_child',
            $this->mainTableName . '.remark',
            $this->mainTableName . '.max_pax',
            $this->mainTableName . '.extra_pax',
            $this->mainTableName . '.per_pax_extra',
            $this->mainTableName . '.user_id as user_id',
            $this->mainTableName . '.id_log as id_log',
            $this->joinTable1 . '.name as company',
            $this->joinTable2 . '.name as sub_department',
            $this->joinTable3 . '.name as account',
            $this->joinTable4 . '.name as tax_and_service',
            $this->joinTable5 . '.name as charge_frequency',
            $this->joinTable6 . '.name as outlet',
            $this->joinTable7 . '.name as product'
        )
            ->leftJoin($this->joinTable1, $this->mainTableName . '.company_code', $this->joinTable1 . '.code')
            ->leftJoin($this->joinTable2, $this->mainTableName . '.sub_department_code', $this->joinTable2 . '.code')
            ->leftJoin($this->joinTable3, $this->mainTableName . '.account_code', $this->joinTable3 . '.code')
            ->leftJoin($this->joinTable4,  $this->mainTableName . '.tax_and_service_code',  $this->joinTable4 . '.code')
            ->leftJoin($this->joinTable5,  $this->mainTableName . '.charge_frequency_code',  $this->joinTable5 . '.code')
            ->leftJoin($this->joinTable6,  $this->mainTableName . '.outlet_code',  $this->joinTable6 . '.code')
            ->leftJoin($this->joinTable7,  $this->mainTableName . '.product_code',  $this->joinTable7 . '.code')
            ->where('room_rate_code',$id);


        return response()->json($model->get());
    }

    public function dataLookUp(){
        $taxService= TaxService::select('code','name')->get();
        $chargeFreq= ChargeFrequency::select('code','name')->get();
        $subDepartment = SubDepartment::select('code','name')->orderBy('id_sort')->get();

        return response()->json([
            'tax_and_service' => $taxService,
            'charge_frequency' => $chargeFreq,
            'sub_department' => $subDepartment
        ]);
    }

    public function account(Request $request){
        $account= Account::select('code','name');
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
            'room_rate_code' => 'required',
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
    private function setNotNull($value){
        if($value == ''){
            $value = ' ';
        }
        return $value;
    }
}
