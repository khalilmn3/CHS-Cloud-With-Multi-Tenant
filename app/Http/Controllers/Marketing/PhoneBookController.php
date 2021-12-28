<?php

namespace App\Http\Controllers\Marketing;

use App\Configurations\Models\Company;
use App\Configurations\Models\Country;
use App\Configurations\Models\GuestTitle;
use App\Configurations\Models\PhoneBookType;
use App\Configurations\Models\State;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProcedureQueryController;
use App\Models\Marketing\PhoneBook;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PhoneBookController extends Controller
{
    private $mainTableName;

    public function __construct()
    {
        $this->mainTableName = 'phone_book';
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
            ProcedureQueryController::insertPhoneBook($request->type_code, $request->title_code, $request->full_name, $request->phone1, $request->phone2, $request->whatsapp, $request->facebook, $request->twitter, $request->yahoo_messenger,
            $request->email, $request->website, $request->street, $request->city, $request->country_code, $request->state_code, $request->postal_code,$request->job_title, $request->company_code, $request->remark, $request->user_id);
            
            return 0;
        }
    }

    public function edit($id)
    {
        $query=PhoneBook::find($id);

        return response()->json($query);
    }

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
            ProcedureQueryController::updatePhoneBook($request->id_log, $request->type_code, $request->title_code, $request->full_name, $request->phone1, $request->phone2, $request->whatsapp, $request->facebook, $request->twitter, $request->yahoo_messenger,
            $request->email, $request->website, $request->street, $request->city, $request->country_code, $request->state_code, $request->postal_code,$request->job_title, $request->company_code, $request->remark, $request->user_id);
            
        return 0;
        }
    }

    public function delete(Request $request)
    {
        ProcedureQueryController::deletePhoneBook($request->id_log, $request->user_id);
        return 0;
    }

    public function index(Request $request)
    {
        $filterList = [
            'cfg_init_phone_book_type.name',
            'CONCAT(' .$this->mainTableName. '.title_code, ' .$this->mainTableName. '.full_name)',
            $this->mainTableName.'.phone1',
            $this->mainTableName.'.phone2',
            $this->mainTableName.'.whatsapp',
            $this->mainTableName.'.facebook',
            $this->mainTableName.'.twitter',
            $this->mainTableName.'.yahoo_messenger',
            $this->mainTableName.'.email',
            $this->mainTableName.'.website',
            'TRIM(CONCAT(' .$this->mainTableName. '.street, " ", ' .$this->mainTableName. '.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", ' .$this->mainTableName. '.postal_code))',
            $this->mainTableName.'.job_title',
            'company.name',
            $this->mainTableName.'.remark',
            $this->mainTableName.'.user_id'
        ];

        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 15 ? $filterList[$searchBy] : '';

        $model = PhoneBook::select(
            $this->mainTableName . '.*',
            'cfg_init_phone_book_type.name as type',
            'company.name as company',
            DB::raw('CONCAT(' .$this->mainTableName. '.title_code, ' .$this->mainTableName. '.full_name) AS full_name'),
            DB::raw('TRIM(CONCAT('.$this->mainTableName.'.street, " ", '.$this->mainTableName.'.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", '.$this->mainTableName.'.postal_code)) AS address'))
            // DB::raw('TRIM(CONCAT(' .$this->mainTableName. '.street, " ", ' .$this->mainTableName. '.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", ' .$this->mainTableName. '.postal_code)) AS address'))
            ->leftJoin('cfg_init_phone_book_type', $this->mainTableName.'.type_code', 'cfg_init_phone_book_type.code')
            ->leftJoin('cfg_init_country', $this->mainTableName.'.country_code', 'cfg_init_country.code')
            ->leftJoin('cfg_init_state', $this->mainTableName.'.state_code', 'cfg_init_state.code')
            ->leftJoin('company', $this->mainTableName.'.company_code', 'company.code')
            ->orderBy($this->mainTableName.'.full_name');
                  
            if(!empty($keyword) && !empty($searchBy)){
                $model->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
            };
        // return resposeis_numeric($searchBy);
        return response()->json($model->limit($limit)->get());
    }

    public function dataLookup(Request $request){
        $title = GuestTitle::get();
        $type = PhoneBookType::get();
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
            'type_code' => 'required',
            'full_name' => 'required',
            'phone1' => 'required'
        ];
    }
}
