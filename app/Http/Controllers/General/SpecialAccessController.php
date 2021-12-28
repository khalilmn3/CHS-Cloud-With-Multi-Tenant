<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use App\Http\Controllers\ServerDS\MethodController;
use App\Http\Controllers\ServerDS\MethodStringListController;
use App\Tools\UserSetting\User;
use App\Tools\UserSetting\UserGroup;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;

class SpecialAccessController extends Controller
{
    public function checkSpecialAccess(Request $request){
        $canAccessSpecial = false;
        $password = HelperController::decrypt($request->password,GlobalVariableController::$cryptoKey);
        $specialAccessType = HelperController::decrypt($request->specialAccessType,GlobalVariableController::$cryptoKey);
        // $specialAccessType = HelperController::decrypt($request->specialAccessType,GlobalVariableController::$cryptoKey);

        $params =$request->all();
        // using API
        if(GlobalVariableController::$useApiService){
            $params['specialAccessType'] = $specialAccessType;
            $params['password'] = $password;
            $params['user_id'] = strtoupper($params['user_id']);
            $data = MethodController::postAPI(MethodStringListController::$specialAccess, $params, strtoupper($request->user_id));

            return $data;
        }
        // using local DB
        if(Auth::attempt(['code' => request('user_id'), 'password' =>$password])){
            $userGroup=User::select('group_code')->where('code',$request->user_id)->first();
            if(!empty($userGroup) && $specialAccessType >= 0){
                $accessUser = UserGroup::select('access_special')->find($userGroup->group_code);
                try {
                    $accessSpecial = Crypt::decryptString($accessUser->access_special);
                    $canAccessSpecial = $accessSpecial[intval($specialAccessType)] == 1;
                } catch (DecryptException $e) {
                    $canAccessSpecial = false;
                }

                ProcedureQueryController::insertLogSpecialAcces($request->systemCode,GlobalVariableController::$specialAccessList[$specialAccessType],HelperController::boolToString(!$canAccessSpecial),$request->user_id);
            }

            return response()->json($canAccessSpecial);
        } else {
            ProcedureQueryController::insertLogSpecialAcces($request->systemCode,GlobalVariableController::$specialAccessList[$specialAccessType],HelperController::boolToString(!$canAccessSpecial),$request->user_id);
            return response()->json(['error'=>'Incorrect UserID/Password'], 400);
        }

    }
}
