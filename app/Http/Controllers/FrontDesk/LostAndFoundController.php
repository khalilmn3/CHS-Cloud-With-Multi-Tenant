<?php

namespace App\Http\Controllers\FrontDesk;

use App\Configurations\Models\Company;
use App\Configurations\Models\Country;
use App\Configurations\Models\GuestTitle;
use App\Configurations\Models\State;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProcedureQueryController;
use App\Models\FrontDesk\LostAndFound;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class LostAndFoundController extends Controller
{
    private $mainTableName;

    public function __construct()
    {
        $this->mainTableName = 'lost_and_found';
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
            ProcedureQueryController::insertLostAndFound($request->is_lost, $request->item, $request->color, $request->location, $request->who, $request->value, $request->current_location, $request->date_posting, $request->is_return, $request->date_return,
                $request->return_by, $request->owner, $request->phone, $request->notes, $request->user_id);

            return 0;
        }
    }

    public function edit($id)
    {
        $query=LostAndFound::find($id);

        return response()->json($query);
    }

    public function update(Request $request)
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
            ProcedureQueryController::updateLostAndFound($request->is_lost, $request->item, $request->color, $request->location, $request->who, $request->value, $request->current_location, $request->date_posting, $request->is_return, $request->date_return,
                $request->return_by, $request->owner, $request->phone, $request->notes, $request->id_log, $request->user_id);

        return 0;
        }
    }

    public function delete(Request $request)
    {
        $validator = Validator::make(
            $request->all(),[
                'id_log' => 'required',
                'user_id' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            ProcedureQueryController::deleteLostAndFound($request->id_log, $request->user_id);
            return 0;
        }
    }

    public function updateActive(Request $request)
    {
        $validator = Validator::make(
            $request->all(),[
                'id_log' => 'required',
                'user_id' => 'required'
            ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            ProcedureQueryController::updateLostAndFoundActive($request->id_log, $request->is_active, $request->user_id);
            return 0;
        }
    }

    public function index(Request $request)
    {
        $filterList = [
            '(CASE WHEN is_lost="-1" THEN "Lost" ELSE "Found" END)',
            $this->mainTableName .'.item',
            $this->mainTableName .'.location',
            $this->mainTableName .'.who',
            $this->mainTableName .'.current_location',
            $this->mainTableName .'.return_by',
            $this->mainTableName .'.owner',
            $this->mainTableName .'.phone',
            $this->mainTableName .'.notes',
            $this->mainTableName .'.user_id'
        ];

        $search= $request->all();
        $show = Arr::get($search, 'show', false);
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 10 ? $filterList[$searchBy] : '';

        $model = LostAndFound::select(
            $this->mainTableName. '.*',
            DB::raw('(CASE WHEN is_lost="-1" THEN "Lost" ELSE "Found" END) AS type'))
            ->orderBy($this->mainTableName.'.id_log');

            if(!empty($keyword) && !empty($searchBy)){
                $model->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
            };

            if($show == '2'){
                $model->whereRaw($this->mainTableName .'.is_return = "0" AND ' .$this->mainTableName.'.is_active = "-1"');
            } else if($show == '3'){
                $model->whereRaw($this->mainTableName .'.is_return = "-1"');
            } else if($show == '4'){
                $model->whereRaw($this->mainTableName .'.is_active = "0"');
            }

        return response()->json($model->limit($limit)->get());
    }

    public function dataLookup(Request $request){
        $title = GuestTitle::get();
        $type = LostAndFound::get();
        $country = Country::get();
        $state = [];
        if(!empty($request->country_code)){
            $state = State::where('country_code', $request->country_code)->get();
        }
        $company = Company::get();

        return response()->json([
            'type' => $type,
            'title' => $title,
            'country' => $country,
            'state' => $state,
            'company' => $company
        ]);
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'item' => 'required',
            'date_posting' => 'required',
        ];
    }
}
