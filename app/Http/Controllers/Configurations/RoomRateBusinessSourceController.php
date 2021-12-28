<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\Account;
use App\Configurations\Models\ChargeFrequency;
use App\Configurations\Models\CommissionType;
use App\Configurations\Models\Company;
use App\Configurations\Models\Package;
use App\Configurations\Models\RoomRateBusinessSource;
use App\Configurations\Models\SubDepartment;
use App\Configurations\Models\TaxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator;
use Illuminate\Support\Arr;

class RoomRateBusinessSourceController extends Controller
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
        $this->mainTableName = 'cfg_init_room_rate_business_source';
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
            $exist = RoomRateBusinessSource::where('company_code', $request->company_code)->where('room_rate_code', $request->room_rate_code)->first();
            if(!empty($exist)){
                return 1;
            }
            DB::select(
                'CALL insert_'.$this->mainTableName.'(?,?,?,?,?)',
                [
                    $request->room_rate_code, $this->setNotNull($request->company_code), $request->commission_type_code, $request->commission_value,
                    $request->user_id
                ]
            );

            return 0;
        }
    }

    public function edit($id)
    {
        $query = RoomRateBusinessSource::where('id_log',$id)->first();
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
                'CALL update_'.$this->mainTableName.'(?,?,?,?,?)',
                [
                    intval($request->id_log), $this->setNotNull($request->company_code), $request->commission_type_code, $request->commission_value,
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
        $model = RoomRateBusinessSource::select(
            $this->mainTableName . '.commission_value',
            $this->mainTableName . '.room_rate_code',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log',
            $this->joinTable1 . '.name as company',
            $this->joinTable2 . '.name as commission_type')
            ->leftJoin($this->joinTable1, $this->mainTableName . '.company_code', $this->joinTable1 . '.code')
            ->leftJoin($this->joinTable2, $this->mainTableName . '.commission_type_code', $this->joinTable2 . '.code')
            ->where('room_rate_code',$id);

        return response()->json($model->get());
    }

    public function dataLookUp(){
        $company= Company::select('code','name')->where('is_business_source','-1')->get();
        $commissionType= CommissionType::select('code','name')->whereIn('code',['1','2','5','6'])->get();
            return response()->json([
                'company' => $company,
                'commission_type' => $commissionType
            ]);;
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'room_rate_code' => 'required',
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
