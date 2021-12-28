<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\Account;
use App\Configurations\Models\CreditCardCharge;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class CreditCardChargeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $mainTableName;
    private $joinTable1;

    public function __construct()
    {
        $this->mainTableName = 'cfg_init_credit_card_charge';
        $this->joinTable1 = 'cfg_init_account';
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

            DB::select('call insert_' . $this->mainTableName . '(?,?,?)', [
                $request->account_code, $request->charge_percent, $request->user_id
            ]);
            return response()->json([
                'success' => 'insert data successfully'
            ]);

        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $query=CreditCardCharge::find($id);

        return response()->json($query);
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
        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(false)
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
        DB::select(
            'CALL update_' . $this->mainTableName . '(?,?,?,?)',
            [
                $request->id_log, $request->account_code, $request->charge_percent, $request->user_id
            ]
        );

        return 0;
        }
    }

    public function delete(Request $request)
    {

        $room = '';
        if (!$room) {
            DB::select('call delete_' . $this->mainTableName . '(?,?)', [$request->code, $request->user_id]);
            return response()->json([
                'success' => 'deleted successfully'
            ]);
        } else {
            return response()->json(['errors' => 'cannot delete this data already use'], 403);
        }
    }

    public function dataAgGrid(Request $request)
    {
        $filterList = [
            'cfg_init_account.name',
            'cfg_init_credit_card_charge.user_id'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 2 ? $filterList[$searchBy] : '';

        $model = CreditCardCharge::select(
            $this->mainTableName . '.charge_percent',
            $this->mainTableName . '.account_code',
            $this->joinTable1 . '.name as account',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log'
        )->leftJoin($this->joinTable1, $this->mainTableName.'.account_code', $this->joinTable1.'.code');
         if(!empty($keyword) && !empty($searchBy)){
            $model->where($searchBy, 'like', '%'.$keyword.'%');
        };

        return response()->json([
            'modelGrid' => $model->limit($limit)->get()
        ]);
    }

    public function dataLookup(){
        $account = Account::select('code','name')->where('sub_group_code','CRDB')->get();
        return response()->json($account);
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'account_code' => $isNew ? 'required|max:4|unique:' . $this->mainTableName : 'required|max:4',
            'charge_percent' => 'required',
            'user_id' => 'required'
        ];
    }
}
