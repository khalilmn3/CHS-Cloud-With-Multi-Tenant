<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\BedType;
use App\Configurations\Models\Owner;
use App\Configurations\Models\Room;
use App\Configurations\Models\RoomType;
use App\Configurations\Models\RoomView;
use App\Guest\Models\GuestDetail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Reservation;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator;
use Illuminate\Support\Arr;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $mainTable;
    private $joinTable1;
    private $joinTable2;
    private $joinTable3;
    private $joinTable4;
    private $joinTable5;

    public function __construct()
    {
        $this->mainTable = 'cfg_init_room';
        $this->joinTable1 = 'cfg_init_owner';
        $this->joinTable2 = 'const_room_status';
        $this->joinTable3 = 'cfg_init_room_view';
        $this->joinTable4 = 'cfg_init_room_type';
        $this->joinTable5 = 'cfg_init_bed_type';
    }

    public function index()
    { }

    public function create()
    {
        //
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
        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(true)
            )
        );
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            Room::create([
                'number' => $params['number'],
                'name' => $params['name'],
                'lock_number' => $params['lock_number'],
                'room_type_code' => $params['room_type_code'],
                'bed_type_code' => $params['bed_type_code'],
                'view_code' => $params['view_code'],
                'is_smoking' => $params['is_smoking'],
                'building' => $params['building'],
                'floor' => $params['floor'],
                'max_adult' => $params['max_adult'],
                'description' => $params['description'],
                'phone_number' => $params['phone_number'],
                'tv_quantity' => $params['tv_quantity'],
                'start_date' => $params['start_date'],
                'owner_code' => $params['owner_code'],
                'id_sort' => $params['id_sort'],
                'status_code' => 'D',
                'image' => $params['image'],
                'user_id' => $params['user_id'],
            ]);
            return response()->json([
                'success' => 'Item successfully saved'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $query = Room::find($id);

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
        $find = Room::find($id);


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
                Room::find($id)
                    ->update([
                        'name' => $params['name'],
                        'lock_number' => $params['lock_number'],
                        'room_type_code' => $params['room_type_code'],
                        'bed_type_code' => $params['bed_type_code'],
                        'view_code' => $params['view_code'],
                        'is_smoking' => $params['is_smoking'],
                        'building' => $params['building'],
                        'floor' => $params['floor'],
                        'max_adult' => $params['max_adult'],
                        'description' => $params['description'],
                        'phone_number' => $params['phone_number'],
                        'tv_quantity' => $params['tv_quantity'],
                        'start_date' => $params['start_date'],
                        'owner_code' => $params['owner_code'],
                        'id_sort' => $params['id_sort'],
                        'status_code' => 'D',
                        'image' => $params['image'],
                        'user_id' => $params['user_id'],
                    ]);
                return response()->json([
                    'success' => 'updated successfully'
                ]);
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
        $room = GuestDetail::where('room_number', $request->code)->first();
        if (!$room) {
            DB::select('call delete_' . $this->mainTable . '(?,?)', [
                $request->code, $request->user_id
            ]);
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
            'number',
            'cfg_init_room.name',
            'lock_number',
            'cfg_init_room_type.name',
            'cfg_init_bed_type.name',
            'building',
            'floor',
            'cfg_init_room_view.name',
            'is_smoking',
            'description',
            'phone_number',
            'cfg_init_owner.name',
            'cfg_init_room.user_id',
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 13 ? $filterList[$searchBy] : '';

        $model = Room::select(
            $this->mainTable . '.number',
            $this->mainTable . '.lock_number',
            $this->mainTable . '.is_smoking',
            $this->mainTable . '.building',
            $this->mainTable . '.floor',
            $this->mainTable . '.max_adult',
            $this->mainTable . '.description',
            $this->mainTable . '.phone_number',
            $this->mainTable . '.start_date',
            $this->mainTable . '.name',
            $this->mainTable . '.id_sort',
            $this->mainTable . '.user_id',
            $this->mainTable . '.id_log',
            $this->mainTable . '.temp_status_code',
            $this->joinTable1 . '.name as owner',
            $this->joinTable2 . '.name as status',
            $this->joinTable3 . '.name as room_view',
            DB::raw('CONCAT(cfg_init_room_type.name," ",IFNULL(cfg_init_bed_type.name,"")) AS room_type'),
            $this->joinTable5 . '.name as bed_type')
            ->leftJoin($this->joinTable1, $this->mainTable . '.owner_code', $this->joinTable1 . '.code')
            ->leftJoin($this->joinTable2, $this->mainTable . '.status_code', $this->joinTable2 . '.code')
            ->leftJoin($this->joinTable3, $this->mainTable . '.view_code', $this->joinTable3 . '.code')
            ->leftJoin($this->joinTable4, $this->mainTable . '.room_type_code', $this->joinTable4 . '.code')
            ->leftJoin($this->joinTable5,  $this->mainTable . '.bed_type_code',  $this->joinTable5 . '.code')
            ->orderBy($this->mainTable . '.number', 'ASC');

            if(!empty($keyword) && !empty($searchBy)){
                $model->where($searchBy, 'like', '%'.$keyword.'%');
            };

        return response()->json([
            'modelGrid' => $model->limit($limit)->get()
        ]);
    }

    public function dataLookUp(){
        $bedType=BedType::select('code','name')->get();
        $roomType=RoomType::select('code','name')->get();
        $view=RoomView::select('code','name')->get();
        $owner=Owner::select('code','name')->get();

        return response()->json([
            'bed_type' => $bedType,
            'room_type' => $roomType,
            'view' => $view,
            'owner' => $owner,
        ]);

    }

    private function getValidationRules($isNew = true)
    {
        return [
            'number' => $isNew ? 'required|unique:cfg_init_room' : 'required',
            'name' => 'max:50',
            'lock_number' => 'max:20',
            'room_type_code' => 'required|max:4',
            'bed_type_code' => 'required|max:4',
            'view_code' => 'max:4',
            'is_smoking' => Rule::in(['true', 'false']),
            'building' => 'required|max:4',
            'floor' => 'required|max:4',
            'max_adult' => 'required',
            'description' => 'max:100',
            'phone_number' => 'max:20',
            'tv_quantity' => 'required',
            'start_date' => 'required|date',
            'owner_code' => 'max:20',
            'user_id' => 'required|max:20',
        ];
    }
}
