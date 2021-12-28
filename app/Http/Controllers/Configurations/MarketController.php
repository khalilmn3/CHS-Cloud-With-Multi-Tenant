<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\MarketCategory;
use App\Configurations\Models\Market;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class MarketController extends Controller
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
        $this->mainTableName = 'cfg_init_market';
        $this->joinTable1 = 'cfg_init_market_category';
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

            DB::select('call insert_' . $this->mainTableName . '(?,?,?,?)', [
                $request->code, $this->notNull($request->category_code), $request->name, $request->user_id
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
        $query=Market::find($id);

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
                $request->code,$this->notNull($request->category_code), $request->name, $request->user_id
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
            'cfg_init_market.code',
            'cfg_init_market.name',
            'cfg_init_market_category.name',
            'cfg_init_market.user_id'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 4 ? $filterList[$searchBy] : '';

        $model = Market::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->joinTable1 . '.name as category',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log'
        )->leftJoin($this->joinTable1, $this->mainTableName.'.category_code', $this->joinTable1.'.code' );
         if(!empty($keyword) && !empty($searchBy)){
            $model->where($searchBy, 'like', '%'.$keyword.'%');
        };

        return response()->json([
            'modelGrid' => $model->limit($limit)->get()
        ]);
    }
    public function dataLookup(){
        $category = MarketCategory::select('code','name')->get();
        return response()->json($category);
    }

    private function notNull($value){
        return $value == '' ? ' ' : $value;
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|max:4|unique:' . $this->mainTableName : 'required|max:4',
            'name' => 'required|max:50',
            'category_code' => 'required',
            'user_id' => 'required'
        ];
    }
}
