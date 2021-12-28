<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\Continent;
use App\Configurations\Models\Country;
use App\Configurations\Models\State;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class CountryController extends Controller
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
        $this->mainTableName = 'cfg_init_country';
        $this->joinTable1 = 'cfg_init_continent';
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
                $request->code ,$request->continent_code, $request->name, $request->iso_code, $request->user_id
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
        $query=Country::find($id);

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
                $request->code,$request->continent_code, $request->name, $request->iso_code, $request->user_id
            ]
        );

        return 0;
        }
    }

    public function delete(Request $request)
    {

        $state = State::where('country_code',$request->code)->first();
        if (!$state) {
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
            'cfg_init_country.code',
            'cfg_init_country.name',
            'cfg_init_continent.name',
            'cfg_init_country.iso_code',
            'cfg_init_country.user_id'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 5 ? $filterList[$searchBy] : '';

        $model = Country::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->joinTable1 . '.name as continent',
            $this->mainTableName . '.iso_code',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log'
            )->leftJoin($this->joinTable1, $this->mainTableName.'.continent_code',$this->joinTable1.'.code');
         if(!empty($keyword) && !empty($searchBy)){
            $model->where($searchBy, 'like', '%'.$keyword.'%');
        };

        return response()->json([
            'modelGrid' => $model->limit($limit)->get()
        ]);
    }
    public function dataLookup(){
        $continent = Continent::select('code','name')->get();
        return response()->json($continent);
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
