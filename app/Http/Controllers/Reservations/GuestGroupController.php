<?php

namespace App\Http\Controllers\Reservations;

use App\Folio\Models\Folio;
use App\Guest\Models\GuestGroup;
use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\ProcedureQueryController;
use App\Http\Controllers\ServerDS\MethodController;
use App\Http\Controllers\ServerDS\MethodStringListController;
use App\Reservation;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use Validator;

class GuestGroupController extends Controller
{
    public static function index(Request $request){
        // using API
        if(GlobalVariableController::$useApiService){
            $data = MethodController::getAPI(MethodStringListController::$guestGroup['getGuestGroup'], $request->all(),'');

            return $data;
        }
        // using local DB
        $filterList = [
            'guest_group.code',
            'guest_group.name',
            'contact_person',
            'CONCAT(IFNULL(guest_group.street,"")," ",IFNULL(guest_group.city,"")," ",IFNULL(cfg_init_city.name, "")," ",IFNULL(cfg_init_state.name,"")," ",IFNULL(cfg_init_country.name,""))',
            '(CASE WHEN guest_group.phone1 = "" THEN guest_group.phone2 ELSE CONCAT(guest_group.phone1, ", ", guest_group.phone2) END)',
            'fax',
            'email',
            'website',
            'guest_group.user_id',
        ];

        $search= $request->all();
        $limit = Arr::get($search, 'limit', 100);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 9 &&  $searchBy != '' ? $filterList[$searchBy] : '';
        $mainTableName = 'guest_group';
        $reservation = Reservation::select('status_code','group_code');
        $result = GuestGroup::select(
            $mainTableName.'.code',
            $mainTableName.'.name',
            $mainTableName.'.contact_person',
            $mainTableName.'.city AS city1',
            $mainTableName.'.phone1',
            $mainTableName.'.phone2',
            $mainTableName.'.fax',
            $mainTableName.'.postal_code',
            $mainTableName.'.email',
            $mainTableName.'.website',
            $mainTableName.'.id_log',
            $mainTableName.'.user_id',
            DB::raw('(CASE WHEN guest_group.phone1 = "" THEN guest_group.phone2 ELSE CONCAT(guest_group.phone1, ", ", guest_group.phone2) END) AS Phone'),
            DB::raw('TRIM(CONCAT(IFNULL(guest_group.street,"")," ",IFNULL(guest_group.city,"")," ",IFNULL(cfg_init_city.name, "")," ",IFNULL(cfg_init_state.name,"")," ",IFNULL(cfg_init_country.name,""))) AS address'),
            'cfg_init_country.name AS country',
            'cfg_init_state.name AS state',
            'cfg_init_city.name AS city2',
            DB::raw('COUNT(Reservation.group_code) AS reservation')
        )
        ->leftJoin('cfg_init_country', $mainTableName.'.country_code', 'cfg_init_country.code')
        ->leftJoin('cfg_init_state', $mainTableName.'.state_code', 'cfg_init_state.code')
        ->leftJoin('cfg_init_city', $mainTableName.'.city_code', 'cfg_init_city.code')
        ->leftJoinSub($reservation,'Reservation', function($query){
            $query->on('guest_group.code','Reservation.group_code')
                ->where('Reservation.status_code',GlobalVariableController::$reservationStatus['New']);
        })
        ->groupBy($mainTableName.'.code')
        ->where('is_active','-1');

        if (!empty($keyword)){
            $result->whereRaw($searchBy.' like "%'.$keyword.'%"');
        }

        return response()->json($result->limit($limit)->get());
    }

    public function store(Request $request){
        $params = $request->all();
        $code = Arr::get($params, 'code','');
        $name = Arr::get($params, 'name','');
        $contactPerson = Arr::get($params, 'contact_person','');
        $street = Arr::get($params, 'street','');
        $countryCode = Arr::get($params, 'country_code','');
        $stateCode = Arr::get($params, 'state_code','');
        $cityCode = Arr::get($params, 'city_code','');
        $city = Arr::get($params, 'city','');
        $postalCode = Arr::get($params, 'postal_code','');
        $phone1 = Arr::get($params, 'phone1','');
        $phone2 = Arr::get($params, 'phone2','');
        $fax = Arr::get($params, 'fax','');
        $email = Arr::get($params, 'email','');
        $website = Arr::get($params, 'website','');
        $userId = Arr::get($params, 'user_id','');

        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(true)
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
        // using API
        if(GlobalVariableController::$useApiService){
            $params2 = [
                'code' => $code,
                'name' => $name,
                'contact_person' => $contactPerson,
                'street' => $street,
                'country_code' => $countryCode,
                'state_code' => $stateCode,
                'city_code' => $cityCode,
                'city' => $city,
                'postal_code' => $postalCode,
                'phone1' => $phone1,
                'phone2' => $phone2,
                'fax' => $fax,
                'email' => $email,
                'website' => $website,
                'user_id' => $userId
            ];
            $data = MethodController::postAPI(MethodStringListController::$guestGroup['insertGuestGroup'], $params2, '');

            return $data;
        }
        // using local DB
            ProcedureQueryController::insertGuestGroup($code, $name, $contactPerson, $street, $countryCode, $stateCode, $cityCode, $city, $postalCode, $phone1, $phone2, $fax, $email, $website, $userId);
            return 0;
        }
    }

    public function edit($id){
        // using API
        if(GlobalVariableController::$useApiService){
            $data = MethodController::getAPI(MethodStringListController::$guestGroup['editGuestGroup'], '',$id);

            return $data;
        }
        // using local DB
        $result = GuestGroup::where('code',$id)->first();

        return response()->json($result);
    }

    public function delete(Request $request){
        // using API
        if(GlobalVariableController::$useApiService){
            $data = MethodController::deleteAPI(MethodStringListController::$guestGroup['deleteGuestGroup'], $request->all());

            return $data;
        }
        // using local DB
        $reservation= Reservation::select('group_code')->where('group_code',$request->code)->first();
        $folio = Folio::select('group_code')->where('group_code',$request->code)->first();
        if(!empty($reservation) && !empty($folio)){
            return 1;
        } else {
            ProcedureQueryController::deleteGuestGroup($request->id_log, $request->user_id);

            return 0;
        }
    }

    public function update(Request $request){
        $params = $request->all();
        $code = Arr::get($params, 'code','');
        $name = Arr::get($params, 'name','');
        $contactPerson = Arr::get($params, 'contact_person','');
        $street = Arr::get($params, 'street','');
        $countryCode = Arr::get($params, 'country_code','');
        $stateCode = Arr::get($params, 'state_code','');
        $cityCode = Arr::get($params, 'city_code','');
        $city = Arr::get($params, 'city','');
        $postalCode = Arr::get($params, 'postal_code','');
        $phone1 = Arr::get($params, 'phone1','');
        $phone2 = Arr::get($params, 'phone2','');
        $fax = Arr::get($params, 'fax','');
        $email = Arr::get($params, 'email','');
        $website = Arr::get($params, 'website','');
        $userId = Arr::get($params, 'user_id','');

        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(false)
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            // using API
            if(GlobalVariableController::$useApiService){
                $params2 = [
                    'code' => $code,
                    'name' => $name,
                    'contact_person' => $contactPerson,
                    'street' => $street,
                    'country_code' => $countryCode,
                    'state_code' => $stateCode,
                    'city_code' => $cityCode,
                    'city' => $city,
                    'postal_code' => $postalCode,
                    'phone1' => $phone1,
                    'phone2' => $phone2,
                    'fax' => $fax,
                    'email' => $email,
                    'website' => $website,
                    'user_id' => $userId
                ];
                $data = MethodController::putAPI(MethodStringListController::$guestGroup['updateGuestGroup'], $params2);

                return $data;
            }
            // using local DB
            ProcedureQueryController::updateGuestGroup($code, $name, $contactPerson, $street, $countryCode, $stateCode, $cityCode, $city, $postalCode, $phone1, $phone2, $fax, $email, $website, $userId);
            return 0;
        }
    }

    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|max:6|unique:guest_group' : 'required',
            'name' => 'required|max:50',
            'user_id' => 'required'
        ];
    }
}
