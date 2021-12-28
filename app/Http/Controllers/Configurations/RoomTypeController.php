<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\RoomType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use DB;
use Illuminate\Support\Arr;
use App\Configurations\Models\Room;
use Validator;

class RoomTypeController extends Controller
{
    protected $mainTableName = 'cfg_init_room_type';

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
            $model = DB::select(
                'CALL insert_cfg_init_room_type(?,?,?,?)',
                [
                    $request->code, $request->name, $request->id_sort, $request->user_id
                ]
            );

            return $model;
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
        $model = RoomType::find($id);

        return $model;
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
                'CALL update_'. $this->mainTableName .'(?,?,?,?)',
                [
                    $request->code, $request->name, $request->id_sort, $request->user_id
                ]
            );

            return 0;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function delete(Request $request)
    {

        $room= Room::where('room_type_code',$request->code)->first();
        if ($room) {
            return response()->json(['errors' => 'cannot delete data already use'], 403);
        } else {
            DB::select('call delete_' . $this->mainTableName . '(?,?)',[$request->code, $request->user_id]);
            return response()->json([
                'success' => 'deleted successfully'
            ]);
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

        $model = RoomType::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->mainTableName . '.id_sort',
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

    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|unique:' . $this->mainTableName : 'required',
            'name' => 'required|max:100',
            'id_sort' => 'required',
            'user_id' => 'required'
        ];
    }
}
