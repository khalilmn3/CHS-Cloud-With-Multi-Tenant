<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\Account;
use App\Configurations\Models\ChargeFrequency;
use App\Configurations\Models\CommissionType;
use App\Configurations\Models\Currency;
use App\Configurations\Models\Package;
use App\Configurations\Models\RoomRateCurrency;
use App\Configurations\Models\SubDepartment;
use App\Configurations\Models\TaxService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator;
use Illuminate\Support\Arr;

class RoomRateCurrencyController extends Controller
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
        $this->mainTableName = 'cfg_init_room_rate_currency';
        $this->joinTable1 = 'cfg_init_currency';

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
            $exist = RoomRateCurrency::where('currency_code',$request->currency_code)->where('room_rate_code',$request->room_rate_code)->first();
            if(!empty($exist)){
                return 1;
            }
            $query = DB::select(
                'CALL insert_'.$this->mainTableName.'(?,?,?,?)',
                [
                    $request->room_rate_code, $request->currency_code, $request->exchange_rate, $request->user_id
                ]
            );

            return 0;
        }
    }

    public function edit($id)
    {
        $query = RoomRateCurrency::where('id_log',$id)->first();
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
                'CALL update_'.$this->mainTableName.'(?,?,?,?)',
                [
                    intval($request->id_log), $request->currency_code, $request->exchange_rate, $request->user_id
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
        $model = RoomRateCurrency::select(
            $this->mainTableName . '.room_rate_code',
            $this->mainTableName . '.exchange_rate',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log',
            $this->joinTable1 . '.name as currency')
            ->leftJoin($this->joinTable1, $this->mainTableName . '.currency_code', $this->joinTable1 . '.code')
            ->where('room_rate_code',$id);

        return response()->json($model->get());
    }

    public function dataLookUp($id){
        $currencyRate = RoomRateCurrency::select('currency_code')->where('room_rate_code',$id)->get();
        $currency= Currency::select('code','name')->where('is_default','0')
        ->whereNotIn('code', $currencyRate)
        ->get();
            return response()->json([
                'currency' => $currency,
            ]);;
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'room_rate_code' => $isNew ? 'required' : '',
            'currency_code' => 'required',
            'exchange_rate' => 'required',
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
