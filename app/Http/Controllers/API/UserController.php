<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\General\ShiftLogController;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use App\Tools\UserSetting\UserGroup;
use App\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Validator;
use App\Http\Controllers\ProcedureQueryController;
use App\Http\Controllers\ServerDS\MethodController;
use App\Http\Controllers\ServerDS\MethodStringListController;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Laravel\Passport\Token;

class UserController extends Controller
{

    protected $maxAttempts = 3; // Default is 5
    protected $decayMinutes = 1; // Default is 1
    public $successStatus = 200;

    public function userList(Request $request){
        $filterList = [
            'name',
            'email',
            'group_code'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 100);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 3 ? $filterList[$searchBy] : '';

        $user = User::select('id','code', 'group_code','name','email','user_id');

        if(!empty($keyword) && !empty($searchBy)){
            $user->where($searchBy, 'like', '%'.$keyword.'%');
        };

        return response()->json($user->limit($limit)->get());
    }

    public function userGroup(){
        $group = UserGroup::select('code')->whereNotIn('code',['SYSTEM','SUPERADMIN'])->get();

        return response()->json($group);
    }

    public function edit($id){
        $user = User::find($id);
        $encryptAes = HelperController::encrypt($user->password,GlobalVariableController::$cryptoKey);
        $user['password'] = $encryptAes;

        return response()->json($user);
    }

    public function update(Request $request){
        $input = $request->all();
        $input['password'] =  HelperController::decrypt($input['password'] ,GlobalVariableController::$cryptoKey);
        $input['c_password'] =  HelperController::decrypt($input['c_password'] ,GlobalVariableController::$cryptoKey);
        $group = $this->getUserGroupCode($input['user_id']);

        $validator = Validator::make($input, [
            'id' => 'required',
            'password' => 'required|min:6',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        if($input['user_id'] != $input['name']){
            if($group == 'SYSTEM'){
                $this->queryUpdate($input['id'],$input['name'],$input['email'], $input['password'], $input['group_code'], $input['user_id']);
            } else if($group == 'SUPERADMIN' && $input['group_code'] != 'SYSTEM' && $input['group_code'] != 'SUPERADMIN'){
                $this->queryUpdate($input['id'],$input['name'],$input['email'], $input['password'], $input['group_code'], $input['user_id']);
            } else if($input['group_code'] != 'SYSTEM' && $input['group_code'] != 'SUPERADMIN' && $input['group_code'] != 'ADMIN'){
                $this->queryUpdate($input['id'],$input['name'],$input['email'], $input['password'], $input['group_code'], $input['user_id']);
            } else {
                return response()->json(['error'=>'you dont have access right to modifying user access'], 403);
            }
        } else {
            return response()->json(['error'=>'cannot modifying own access'], 403);
        }
    }

    public function delete(Request $request)
    {

        DB::select('call delete_users(?,?)', [$request->id, $request->user_id]);

        $logParams = ['actionId' => GlobalVariableController::$logUserAction['DeleteUser'], 'link1' => $request->id, 'userid' => $request->user_id];
        ProcedureQueryController::insertLogUserX($logParams);

        return response()->json([
            'success' => 'deleted successfully'
        ]);
    }

    public function cekUserLoginOtherDevice(){
        $decryptPassword = HelperController::decrypt(request('password') ,GlobalVariableController::$cryptoKey);
        if(Auth::attempt(['code' => request('user_id'), 'password' => $decryptPassword])){
            $token = Auth::user()->tokens()->first();

            if(!empty($token)){
                if(GlobalVariableController::$allowMultiLoginUser){
                    return 0;
                }
                return 1;
            }else{
                return 0;
            }
        } else {
            //LOG
            $expiresAt = Carbon::now()->addMinutes(1);
            $address = $_SERVER['REMOTE_ADDR'];
            if(Cache::has($address)){
                Cache::put($address, Cache::get($address) + 1, $expiresAt);
            }else{
                Cache::add($address,1, $expiresAt);
            }

            ProcedureQueryController::insertLogUserNoUserId(GlobalVariableController::$logUserAction['LoginDenied'],request('user_id'),'','','Try: '.Cache::get($address).' time(s)');
            return response()->json(['error'=>'Unauthorized'], 403 );
        }
    }

    public function login(){
        $decryptPassword = HelperController::decrypt(request('password') ,GlobalVariableController::$cryptoKey);

        $params['user']= strtoupper(request('user_id'));
        $params['password']= $decryptPassword;
        $params['shift']= request('shift');

        // using API
        if(GlobalVariableController::$useApiService){

            $data = MethodController::postAPI(MethodStringListController::$login, $params,'1');
            $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjBmMmE1YTFiOGUzNWJiYmIwNDUzZDYyMzVjZWI2MzVkNTA4Y2Y0NWY5MjQ1ZmJkZjNjZjg3ZWVlZWZhMzJkNWMwNzdhMWEwOGFhZWJiYTYiLCJpYXQiOjE2MjIxNjgxNDUsIm5iZiI6MTYyMjE2ODE0NSwiZXhwIjoxNjUzNzA0MTQ1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.KRKS3KVVlWuaNvX_QnzCiQ3XDcRNrDYgK2zNlUu7WRzyjvylt7QeXpYU-5jhTvhG0iKip-ok24MXuCha4k98BshMlLMsqlvwQFm6HXe75cqnpd3_srPcY46A8lQGZ-MNOG6SlR0_aZ5bP_Lm7NDvNUVhcjeLEyhVoT7h-o9w7N2WC2Uwvdrfn33IV33789izM_4agBzCAXIrqLCtCqTOI1ooV-wQ2VT-XbYLdAZMreVoZEXvBLreRCJtiGApFGq5hpQhC-0LfIxp7L_DceUxRGPiw-tX9zvIEYiRRZRRGST7OoEVWyY7WdnhJE9bzxHWJ7GJ3s0tjO5mn8gG3IGaHBUSXnlOMs93f1gOD2d17l3qKpyM1swnZaBTi_3FD1VyO9_e_O0DwXXR0Gmc2C9Rjt50UaRnpOyVeYNotsXaCBCuDxVXm_6T3rwlevHIs29f5AsqamcK6FF2sww73mqc0tmnhRwmNsMDN9yPaIBMjZXDZYVGpe2gujMtPzudUijYDspkdbhmg8vdfJ-JOVSGs16l9THr43YS2avkhI-K5NdzlzXgU9HWCYcXFQEgPhDqP6HTStHwUxEHvQIZrRwE8ql4TIGvpqMIc5yZ_7ym_u5dV_ze-jOqfSvLp4h1MywzwH5icvDv0ptq4X8gqa-Zu42EozZ9s1EYGlt6y0S1NWA';
            // $data['status'];
            // $data['token'] = $token;
            $result = json_decode($data);
            $result->token = $token;
            if($result->status == 0){
                return response()->json(['success' => $result], $this->successStatus);
            } else {
                return response()->json(['error'=>'Unauthorised'], 401);
            }
            // $key = key((array)$data);
            // return $result->status;
            return;
        }
        // using local DB
        if(Auth::attempt(['code' => request('user_id'), 'password' => $decryptPassword])){
            $user = Auth::user();
            if(GlobalVariableController::$allowMultiLoginUser){
                $success['token'] =  $user->createToken('nApp')->accessToken;
                $success['account_code'] = $user->code;
                $success['account_name'] = $user->name;
                $success['account_group'] = $user->group_code;
                $success['account_email'] = $user->email;
                $success['is_changed_password'] = HelperController::variant($user->is_changed_password);

            }else{
                $user->AauthAcessToken()->delete(); //delete exist token
                $success['token'] =  $user->createToken('nApp')->accessToken;
                $success['account_code'] = $user->code;
                $success['account_name'] = $user->name;
                $success['account_group'] = $user->group_code;
                $success['account_email'] = $user->email;
                $success['is_changed_password'] = HelperController::variant($user->is_changed_password);
            }

            //LOG
            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['Login'],$user->code,'','','',$user->code);
            $shiftOpen= HelperController::getShiftUserID($user->code);
            if(empty($shiftOpen)){
                ProcedureQueryController::insertLogShift($user->code,request('shift'),'',GlobalVariableController::$system['CakrasoftHotelSystem']);
            }

            return response()->json(['success' => $success], $this->successStatus);
        } else {
            //LOG
            $expiresAt = Carbon::now()->addMinutes(1);
            $address = $_SERVER['REMOTE_ADDR'];
            if(Cache::has($address)){
                Cache::put($address, Cache::get($address) + 1, $expiresAt);
            }else{
                Cache::add($address,1, $expiresAt);
            }

            ProcedureQueryController::insertLogUserNoUserId(GlobalVariableController::$logUserAction['LoginDenied'],request('user_id'),'','','Try: '.Cache::get($address).' time(s)');
            return response()->json(['error'=>'Unauthorised'], 401);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|unique:users',
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'group_code' => 'required',
            'password' => 'required|min:6',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        $input = $request->all();

        $input['password'] = bcrypt($input['password']);
        $input['is_changed_password'] = '0';
        $group = $this->getUserGroupCode($input['user_id']);

            if($group == 'SYSTEM'){
                $user = User::create($input);

                $logParams = ['actionId' => GlobalVariableController::$logUserAction['InsertUser'], 'link1' => $input['code'], 'userid' => $input['user_id']];
                ProcedureQueryController::insertLogUserX($logParams);
            } else if($group == 'SUPERADMIN' && $input['group_code'] != 'SYSTEM' && $input['group_code'] != 'SUPERADMIN'){
                $user = User::create($input);

                $logParams = ['actionId' => GlobalVariableController::$logUserAction['InsertUser'], 'link1' => $input['code'], 'userid' => $input['user_id']];
                ProcedureQueryController::insertLogUserX($logParams);
            } else if($input['group_code'] != 'SYSTEM' && $input['group_code'] != 'SUPERADMIN' && $input['group_code'] != 'ADMIN'){
                $user = User::create($input);

                $logParams = ['actionId' => GlobalVariableController::$logUserAction['InsertUser'], 'link1' => $input['code'], 'userid' => $input['user_id']];
                ProcedureQueryController::insertLogUserX($logParams);
            } else {
                return response()->json(['error'=>'you dont have access to create user'], 403);
            }


    }

    private function getUserGroupCode($userId){
        $group = User::select('group_code')->where('code',$userId)->first();

        return !empty($group) ? $group->group_code : '';
    }

    private function queryUpdate($id,$name,$email, $password, $group_code,$userId){
        $oldPassword = User::select('password')->where('id',$id)->first()->password;
        if($password != $oldPassword){
            $password = bcrypt($password);
        }
        DB::select(
            'CALL update_users(?,?,?,?,?,?)',
            [
                $id, $name, $email, $password, $group_code, $userId
            ]
        );

        $logParams = ['actionId' => GlobalVariableController::$logUserAction['UpdateUser'], 'link1' => $id, 'userid' => $userId];
        ProcedureQueryController::insertLogUserX($logParams);
    }

    //not implement yet
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:users',
            'full_name' => 'required',
            'email' => 'required|email|unique:users',
            'group_code' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('nApp')->accessToken;
        $success['name'] =  $user->name;

        return response()->json(['success'=>$success], $this->successStatus);
    }

    public function details()
    {
        $user = Auth::user();
        return response()->json(['success' => $user], $this->successStatus);
    }

    public function logout(){
        if (Auth::check()) {
            if(GlobalVariableController::$allowMultiLoginUser){
                Auth::user()->token()->delete();
            }else{
                Auth::user()->AauthAcessToken()->delete();
            }

            //Log
            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['Logout'],Auth::User()->code,'','','',Auth::User()->code);
            return 0;
         }else{
             return 1;
         }
    }

    public function authCheck(){
        if(Auth::check()){
            $token = Auth::user()->tokens()->first();

            if(!empty($token)){
                if(GlobalVariableController::$allowMultiLoginUser){
                    return 0;
                }
                return 1;
            }else{
                return 0;
            }
        } else {
            return response()->json(['error'=>'Unauthorized'], 401);
        }
    }

    public function changePassword(Request $request){
        if(Auth::Check())
        {
            $request_data = $request->All();
            $request_data['current_password'] = HelperController::decrypt($request_data['current_password']  ,GlobalVariableController::$cryptoKey);
            $request_data['new_password'] = HelperController::decrypt($request_data['new_password'] ,GlobalVariableController::$cryptoKey);
            $request_data['confirm_password'] = HelperController::decrypt($request_data['confirm_password'] ,GlobalVariableController::$cryptoKey);

            $validator = $this->admin_credential_rules($request_data);
            if($validator->fails()) {
                return response()->json(array('error' => $validator->getMessageBag()->toArray()), 400);
            } else {
                $current_password = Auth::User()->password;
                if(Hash::check($request_data['current_password'], $current_password)) {
                    $user_id = Auth::User()->id;
                    $obj_user = User::find($user_id);
                    $obj_user->password = bcrypt($request_data['new_password']);
                    $obj_user->is_changed_password = '-1';
                    $obj_user->save();

                    Auth::user()->AauthAcessToken()->delete();
                    return "success";
                } else {
                    $error = array('current_password' => 'Please enter correct current password');
                    return response()->json(array('error' => $error), 400);
                }
            }
        } else {
            return response()->json(['error'=>'Unauthorized'], 401);
        }

    }

    public function admin_credential_rules(array $data)
        {
        $messages = [
            'current-password.required' => 'Please enter current password',
            'password.required' => 'Please enter password',
        ];

        $validator = Validator::make($data, [
            'current_password' => 'required',
            'new_password' => 'required',
            'confirm_password' => 'required|same:new_password',
        ], $messages);

        return $validator;
        }

}
