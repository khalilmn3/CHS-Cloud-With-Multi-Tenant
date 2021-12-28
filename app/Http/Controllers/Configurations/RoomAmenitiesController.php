<?php

namespace App\Http\Controllers\Configurations;

use App\Inventory\Models\Item;
use App\Configurations\Models\RoomAmenities;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class RoomAmenitiesController extends Controller
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
        $this->mainTableName = 'cfg_init_room_amenities';
        $this->joinTable1 = 'inv_cfg_init_item';
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $params = $request->all();
        $code= $params['code'];
        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(true)
            )
        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            RoomAmenities::create([
                'code' => $code,
                'name' => $params['name'],
                'description' => $params['description'],
                'image' => $params['image'],
                'user_id' => $params['user_id'],
            ]);
            return response()->json([
                'success' => 'Item successfully saved'
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
        $query=RoomAmenities::find($id);

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
        $params = $request->all();
        $find = RoomAmenities::find($id);


        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(false)
            )
        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
        $find->image = Null;
                $find->save();
                RoomAmenities::find($id)
                    ->update([
                        'name' => $params['name'],
                        'description' => $params['description'],
                        'image' => $params['image'],
                        'user_id' => $params['user_id'],
                    ]);
                return response()->json([
                    'success' => 'updated successfully'
                ]);
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
            'description',
            'user_id'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 4 ? $filterList[$searchBy] : '';

        $model = RoomAmenities::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->mainTableName . '.description',
            $this->mainTableName . '.image',
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
    public function dataLookup(){
        $item = Item::select('code','name')->get();
        return response()->json($item);
    }

    private function notNull($value){
        return $value == '' ? ' ' : $value;
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|max:20|unique:' . $this->mainTableName : 'required|max:20',
            'name' => 'required|max:50',
            'user_id' => 'required'
        ];
    }
}
