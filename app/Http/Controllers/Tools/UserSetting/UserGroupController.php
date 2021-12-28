<?php

namespace App\Http\Controllers\Tools\UserSetting;

use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use App\Tools\UserSetting\UserGroup;
use Illuminate\Http\Request;
use App\Tools\UserSetting\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Validator;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;
use App\Http\Controllers\ProcedureQueryController;

class UserGroupController extends Controller
{
    private $mainTableName;

    public function __construct()
    {
        $this->mainTableName = 'user_group';
    }

    //this function load in vuex
    //Dispatch from main.vue & router.js
    public function getMenuAccess(Request $request){
        $paramLogin = $request->paramLogin;
        if(!$paramLogin){
            return 0;
        }
        //get user Info via email login
        if (strpos($paramLogin, '@') > 0){
            $result = User::select('id', 'users.code', 'email', 'group_code', 'access_form')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.email', $paramLogin)
                ->first();
        }
        else{ //get user Info via code
            $result = User::select('id', 'users.code', 'email', 'group_code', 'access_form')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.code', $paramLogin)
                ->first();
        }

        try {
            $accessMenu = Crypt::decryptString($result->access_form);
        } catch (DecryptException $e) {
            $accessMenu = '';
        }

        return response()->json([
            'groupAccess' => $accessMenu,
            'userInfo' => ['id' => $result->id, 'code' => $result->code, 'email' => $result->email, 'groupCode' => $result->group_code]
        ]);
    }

    public function getReportList(Request $request){
        $groupCode = $request->code;
        $isNew = $request->isNew;
        $accessUser = UserGroup::select('access_report')->find($groupCode);

        try {
            $accessReport = Crypt::decryptString($accessUser->access_report);
        } catch (DecryptException $e) {
            $accessReport = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
        }

        if(strlen($accessReport) < 165 ){
            $accessReport = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
        }

        $mainTableName = 'report';
        $parent = DB::table($mainTableName)
            ->select('code', 'name', 'tag_order')
            ->where('code', '<=', 1000)
            ->where('is_show', "-1")
            ->get();

        $child = DB::table($mainTableName)
            ->select(
                $mainTableName.'.name',
                $mainTableName.'.code',
                $mainTableName.'.parent_id',
                $mainTableName.'.tag_order')
            ->where($mainTableName.'.code', '>', 1000)
            ->where($mainTableName.'.is_show', "-1")
            ->orderBy($mainTableName.'.id_sort')
            ->get();

        foreach($parent as $Parent){
            $dataChild = array();

            foreach($child as $Child){
                if ($Parent->code === $Child->parent_id){
                    $fileName =  str_replace(' ', '', $Child->name);

                    $dataChild [] = array('id' => $Child->code, 'title' => $Child->name, 'checked' => (($accessReport[$Child->tag_order] == '1' && $isNew == 'false') ? true:false), 'fileName' => $fileName, 'tagOrder' => $Child->tag_order);
                }
            }
            $dataTree [] = array('id' => $Parent->code, 'title' => $Parent->name, 'expanded' => true, 'tagOrder' =>$Parent->tag_order, 'children' => $dataChild);
        }

        return response()->json([
            'dataTree' => $dataTree
        ]);
    }

    public function getSpecialAccessList(Request $request){
        $paramLogin = $request->code;
        $userIDSignIn = '';
        //get user Info via email login
        if (strpos($paramLogin, '@') > 0){
            $result = User::select('id', 'users.code', 'email', 'group_code', 'access_special')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.email', $paramLogin)
                ->first();
            $userIDSignIn = $result->code;
        }
        else{ //get user Info via code
            $result = User::select('id', 'users.code', 'email', 'group_code', 'access_special')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.code', $paramLogin)
                ->first();
        }

        try {
            $specialAccessRule = Crypt::decryptString($result->access_special);
        } catch (DecryptException $e) {
            $specialAccessRule = '';
        }

        return response()->json([
            'specialAccessRule' => $specialAccessRule,
            'specialAccessList' => GlobalVariableController::$specialAccessList,
            'userInfo' => ['id' => $result->id, 'code' => $result->code, 'email' => $result->email, 'groupCode' => $result->group_code]
        ]);
    }

    public function getOtherAccess(Request $request){
        $paramLogin = $request->code;
        $userIDSignIn = '';
        //get user Info via email login
        if (strpos($paramLogin, '@') > 0){
            $result = User::select('id', 'users.code', 'email', 'group_code', 'access_preview_report', 'access_folio', 'access_deposit')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.email', $paramLogin)
                ->first();
            $userIDSignIn = $result->code;
        }
        else{ //get user Info via code
            $result = User::select('id', 'users.code', 'email', 'group_code', 'access_preview_report', 'access_folio', 'access_deposit')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.code', $paramLogin)
                ->first();
        }

        try {
            $previewReportAccess = Crypt::decryptString($result->access_preview_report);
        } catch (DecryptException $e) {
            $previewReportAccess = '000';
        }
        try {
            $accessDeposit = Crypt::decryptString($result->access_deposit);
        } catch (DecryptException $e) {
            $accessDeposit = '0000000000';
        }
        try {
            $accessFolio = Crypt::decryptString($result->access_folio);
        } catch (DecryptException $e) {
            $accessFolio = '000000000000000';
        }

        return response()->json([
            'otherAccess' => $previewReportAccess.$accessDeposit.$accessFolio,
            'userInfo' => ['id' => $result->id, 'code' => $result->code, 'email' => $result->email, 'groupCode' => $result->group_code]
        ]);
    }

    public function getPreviewReportAccess(Request $request){
        $paramLogin = $request->code;
        $userIDSignIn = '';
        //get user Info via email login
        if (strpos($paramLogin, '@') > 0){
            $result = User::select('id', 'users.code', 'email', 'group_code', 'user_group.access_preview_report')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.email', $paramLogin)
                ->first();
            $userIDSignIn = $result->code;
        }
        else{ //get user Info via code
            $result = User::select('id', 'users.code', 'email', 'group_code', 'user_group.access_preview_report')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.code', $paramLogin)
                ->first();
        }

        try {
            $previewReportAccess = Crypt::decryptString($result->access_preview_report);
        } catch (DecryptException $e) {
            $previewReportAccess = '';
        }

        return response()->json([
            'accessPreviewReport' => $previewReportAccess,
            'userInfo' => ['id' => $result->id, 'code' => $result->code, 'email' => $result->email, 'groupCode' => $result->group_code]
        ]);
    }

    public function getFolioAccess(Request $request){
        $paramLogin = $request->code;
        $userIDSignIn = '';
        //get user Info via email login
        if (strpos($paramLogin, '@') > 0){
            $result = User::select('id', 'users.code', 'email', 'group_code', 'user_group.access_folio')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.email', $paramLogin)
                ->first();
            $userIDSignIn = $result->code;
        }
        else{ //get user Info via code
            $result = User::select('id', 'users.code', 'email', 'group_code', 'user_group.access_folio')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.code', $paramLogin)
                ->first();
        }

        try {
            $accessFolio = Crypt::decryptString($result->access_folio);
        } catch (DecryptException $e) {
            $accessFolio = '000000000000000';
        }

        return response()->json([
            'accessFolio' => $accessFolio,
            'userInfo' => ['id' => $result->id, 'code' => $result->code, 'email' => $result->email, 'groupCode' => $result->group_code]
        ]);
    }

    public function getDepositAccess(Request $request){
        $paramLogin = $request->code;
        $userIDSignIn = '';
        //get user Info via email login
        if (strpos($paramLogin, '@') > 0){
            $result = User::select('id', 'users.code', 'email', 'group_code', 'user_group.access_deposit')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.email', $paramLogin)
                ->first();
            $userIDSignIn = $result->code;
        }
        else{ //get user Info via code
            $result = User::select('id', 'users.code', 'email', 'group_code', 'user_group.access_deposit')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.code', $paramLogin)
                ->first();
        }

        try {
            $accessDeposit = Crypt::decryptString($result->access_deposit);
        } catch (DecryptException $e) {
            $accessDeposit = '0000000000';
        }

        return response()->json([
            'accessDeposit' => $accessDeposit,
            'userInfo' => ['id' => $result->id, 'code' => $result->code, 'email' => $result->email, 'groupCode' => $result->group_code]
        ]);
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

            DB::select('call insert_' . $this->mainTableName . '(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
                $request->code, Crypt::encryptString($request->access_form), Crypt::encryptString($request->access_report),Crypt::encryptString($request->access_special),'','','','','','','','','','','','','',0,0,0,$request->user_id
            ]);

            $logParams = ['actionId' => GlobalVariableController::$logUserAction['InsertUserGroup'], 'link1' => $request->code, 'userid' => $request->user_id];
            ProcedureQueryController::insertLogUserX($logParams);

            return response()->json([
                'success' => 'insert data successfully'
            ]);

        }
    }

    public function edit($id)
    {
        $query=UserGroup::select('code', 'user_id', 'id_log')->find($id);
        //Access Menu
        $accessUser = UserGroup::select('access_form','access_special', 'access_report', 'access_folio', 'access_deposit', 'access_preview_report')->find($id);

        try {
            $accessMenu = Crypt::decryptString($accessUser->access_form);
        } catch (DecryptException $e) {
            $accessMenu = '';
        }
        try {
            $accessReport = Crypt::decryptString($accessUser->access_report);
        } catch (DecryptException $e) {
            $accessReport = '';
        }
        try {
            $accessSpecial = Crypt::decryptString($accessUser->access_special);
        } catch (DecryptException $e) {
            $accessSpecial = '';
        }
        try {
            $accessReport = Crypt::decryptString($accessUser->access_preview_report);
        } catch (DecryptException $e) {
            $accessReport = '000';
        }
        try {
            $accessDeposit = Crypt::decryptString($accessUser->access_deposit);
        } catch (DecryptException $e) {
            $accessDeposit = '0000000000';
        }
        try {
            $accessFolio = Crypt::decryptString($accessUser->access_folio);
        } catch (DecryptException $e) {
            $accessFolio = '000000000000000';
        }


        return response()->json([
            'data' => $query,
            'accessMenu' => $accessMenu,
            'accessReport' => $accessReport,
            'accessSpecial' => $accessSpecial,
            'otherAccess' => $accessReport.$accessDeposit.$accessFolio
        ]);
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
            $otherAccess = str_split($request->other_access);
            $accessPreviewReport = implode(array_slice($otherAccess,0,3));
            $accessDeposit = implode(array_slice($otherAccess,3,10));
            $accessFolio = implode(array_slice($otherAccess,13,15));

            ProcedureQueryController::updateUserGroup($request->code, Crypt::encryptString($request->access_form), Crypt::encryptString($request->access_report),Crypt::encryptString($request->access_special),'','',Crypt::encryptString($accessDeposit),'','',Crypt::encryptString($accessFolio),'','','','','',Crypt::encryptString($accessPreviewReport),0,0,0,$request->user_id);

            $logParams = ['actionId' => GlobalVariableController::$logUserAction['UpdateUserGroup'], 'link1' => $request->code, 'userid' => $request->user_id];
            ProcedureQueryController::insertLogUserX($logParams);

            return 0;
        }
    }

    public function delete(Request $request)
    {

        $user = User::where('group_code', $request->code)->first();
        if (!$user) {
            DB::select('call delete_' . $this->mainTableName . '(?,?)', [$request->code, $request->user_id]);
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['DeleteUserGroup'], 'link1' => $request->code, 'userid' => $request->user_id];
            ProcedureQueryController::insertLogUserX($logParams);

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
            'code'
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 1 ? $filterList[$searchBy] : '';

        $model = UserGroup::select(
            $this->mainTableName . '.*'
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
            'user_id' => 'required'
        ];
    }


}
