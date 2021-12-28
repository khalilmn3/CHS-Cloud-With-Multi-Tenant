<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\CompetitorCategory;
use App\Configurations\Models\Competitor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class CompetitorController extends Controller
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
        $this->mainTableName = 'competitor';
        $this->joinTable1 = 'cfg_init_competitor_category';
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

            DB::select('call insert_' . $this->mainTableName . '(?,?,?,?,?,?)', [
                $request->code,$request->name, $request->category_code, $request->total_room, $request->id_sort, $request->user_id
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
        $query=Competitor::find($id);

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
            'CALL update_' . $this->mainTableName . '(?,?,?,?,?,?)',
            [
                $request->code,$request->name, $request->category_code, $request->total_room, $request->id_sort, $request->user_id
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
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->joinTable1 . '.name',
            $this->mainTableName . '.user_id',
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 4 ? $filterList[$searchBy] : '';

        $model = Competitor::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->joinTable1 . '.name as category',
            $this->mainTableName . '.total_room',
            $this->mainTableName . '.id_sort',
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
        $category = CompetitorCategory::select('code','name')->get();
        return response()->json($category);
    }

    private function notNull($value){
        return $value == '' ? ' ' : $value;
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|max:20|unique:' . $this->mainTableName : 'required|max:20',
            'name' => 'required|max:50',
            'category_code' => 'required',
            'total_room' => 'required',
            'id_sort' => 'required',
            'user_id' => 'required'
        ];
    }
}
