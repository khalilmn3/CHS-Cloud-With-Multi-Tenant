<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\GuestTitle;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class GuestTitleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $mainTableName;

    public function __construct()
    {
        $this->mainTableName = 'cfg_init_title';
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
                $request->code, $request->name, $request->user_id
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
        $query=GuestTitle::find($id);

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
            'CALL update_' . $this->mainTableName . '(?,?,?)',
            [
                $request->code, $request->name, $request->user_id
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
            'code',
            'name',
            'user_id'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 3 ? $filterList[$searchBy] : '';

        $model = GuestTitle::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log'
        );
         if(!empty($keyword) && !empty($searchBy)){
            $model->where($searchBy, 'like', '%'.$keyword.'%');
        };

        return response()->json([
            'modelGrid' => $model->limit($limit)->get()
        ]);
    }
    private function setEnum($value){
        return $value == 'true' ? '-1' : '0';
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|unique:' . $this->mainTableName : 'required',
            'name' => 'required|max:50',
            'user_id' => 'required'
        ];
    }
}
