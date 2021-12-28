<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\PaymentGroup;
use App\Configurations\Models\PaymentType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class PaymentTypeController extends Controller
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
        $this->mainTableName = 'cfg_init_payment_type';
        $this->joinTable1 = 'const_payment_group';
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

            DB::select('call insert_' . $this->mainTableName . '(?,?,?,?,?)', [
                $request->code, $request->name, $request->group_code, $request->id_sort, $request->user_id
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
        $query=PaymentType::find($id);

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
            'CALL update_' . $this->mainTableName . '(?,?,?,?,?)',
            [
                $request->code, $request->name, $request->group_code, $request->id_sort, $request->user_id
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
            'cfg_init_payment_type.code',
            'cfg_init_payment_type.name',
            'const_payment_group.name',
            'cfg_init_payment_type.user_id'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 4 ? $filterList[$searchBy] : '';

        $model = PaymentType::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->joinTable1 . '.name as group',
            $this->mainTableName . '.id_sort',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log'
        )->leftJoin($this->joinTable1, $this->mainTableName.'.group_code', $this->joinTable1.'.code' );
         if(!empty($keyword) && !empty($searchBy)){
            $model->where($searchBy, 'like', '%'.$keyword.'%');
        };

        return response()->json([
            'modelGrid' => $model->limit($limit)->get()
        ]);
    }
    public function dataLookup(){
        $group = PaymentGroup::select('code','name')->get();
        return response()->json($group);
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|max:4|unique:' . $this->mainTableName : 'required',
            'name' => 'required|max:50',
            'group_code' => 'required',
            'id_sort' => 'required',
            'user_id' => 'required'
        ];
    }
}
