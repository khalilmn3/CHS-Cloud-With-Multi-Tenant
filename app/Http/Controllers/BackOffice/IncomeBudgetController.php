<?php

namespace App\Http\Controllers\BackOffice;

use App\Configurations\Models\Account;
use App\Configurations\Models\SubDepartment;
use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class IncomeBudgetController extends Controller
{
    private $mainTableName;

    public function __construct()
    {
        $this->mainTableName = 'budget_income';
    }
    public function index(Request $request){

        $this->mainTableName = 'budget_income';
        $filterList = [
            $this->mainTableName.'.period',
            'cfg_init_sub_department.name',
            DB::raw('CONCAT(' .$this->mainTableName. '.account_code, " - ", cfg_init_account.name)'),
            DB::raw('CONCAT(cfg_init_account.journal_account_code, " - ", cfg_init_journal_account.name)'),
            $this->mainTableName.'.remark',
            $this->mainTableName.'.user_id'
        ];

        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 6 ? $filterList[$searchBy] : '';

        $query = DB::table($this->mainTableName)
            ->select(
                $this->mainTableName. '.*',
                'cfg_init_sub_department.name AS sub_department',
                DB::raw('CONCAT(' .$this->mainTableName. '.account_code, " - ", cfg_init_account.name) AS Account'),
                DB::raw('CONCAT(cfg_init_account.journal_account_code, " - ", cfg_init_journal_account.name) AS JournalAccount'))
            ->leftJoin('cfg_init_sub_department', $this->mainTableName. '.sub_department_code', 'cfg_init_sub_department.code')
            ->leftJoin('cfg_init_account', $this->mainTableName. '.account_code', 'cfg_init_account.code')
            ->leftJoin('cfg_init_journal_account', 'cfg_init_account.journal_account_code', 'cfg_init_journal_account.code')
            ->orderBy($this->mainTableName.'.period')
            ->orderBy($this->mainTableName.'.sub_department_code')
            ->orderBy($this->mainTableName.'.account_code');

        if(!empty($keyword) && !empty($searchBy)){
            $query->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
        };

        return response()->json($query->limit($limit)->get());
    }

    public function save(Request $request, $mode){
        $validator = Validator::make(
            $request->all(),[
            'period' => 'required',
            'sub_department_code' => 'required',
            'account_code' => 'required',
            'amount' => 'required',
            'type_code' => 'required',
            'id_log' => $mode == GlobalVariableController::$mode['Update'] ? 'required' : '',
            'user_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {

            // 2: 'Duplicate Entry;
            DB::transaction(function () use ($mode, $request) {
                $period = $request->period;
                $subDepartmentCode = $request->sub_department_code;
                $accountCode = $request->account_code;
                $remark = $request->remark;
                $amount = $request->amount;
                $typeCode = $request->type_code;
                $idLog = $request->id_log;
                $m1 = $request->M01;
                $m2 = $request->M02;
                $m3 = $request->M03;
                $m4 = $request->M04;
                $m5 = $request->M05;
                $m6 = $request->M06;
                $m7 = $request->M07;
                $m8 = $request->M08;
                $m9 = $request->M09;
                $m10 = $request->M10;
                $m11 = $request->M11;
                $m12 = $request->M12;
                $userID = $request->user_id;


                if($mode == GlobalVariableController::$mode['Update']){
                    if(!ProcedureQueryController::checkCode($this->mainTableName, 'id_log', 'period', $period.' AND sub_department_code='.$subDepartmentCode.' AND account_code='.$accountCode.' AND id_log<>'.$idLog)){
                    ProcedureQueryController::updateIncomeBudget($idLog, $period, $subDepartmentCode, $accountCode, $remark, $amount, $typeCode, $m1, $m2, $m3, $m4, $m5, $m6, $m7, $m8, $m9, $m10, $m11, $m12, $userID);
                    ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['UpdateIncomeBudget'], $period, '', '', '', $userID);

                    return 0;
                    } else {
                        return 2;
                    }
                } else {
                    if(!ProcedureQueryController::checkCode($this->mainTableName, 'id_log', 'period', $period.' AND sub_department_code="'.$subDepartmentCode.'" AND account_code="'.$accountCode.'"')){
                        ProcedureQueryController::insertIncomeBudget($period, $subDepartmentCode, $accountCode, $remark, $amount, $typeCode, $m1, $m2, $m3, $m4, $m5, $m6, $m7, $m8, $m9, $m10, $m11, $m12, $userID);
                        ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['InsertIncomeBudget'], $period, '', '', '', $userID);

                        return 0;
                    } else {
                        return 2;
                    }
                }
            });
        }
    }

    public function store(Request $request){
        $this->save($request, GlobalVariableController::$mode['Insert']);
    }

    public function update(Request $request){
        $this->save($request, GlobalVariableController::$mode['Update']);
    }

    public function edit($idLog){
        $query = DB::table($this->mainTableName)->where('id_log', $idLog)->first();

        return response()->json($query);
    }

    public function delete(Request $request){
        $validator = Validator::make(
            $request->all(),[
            'id_log' => 'required',
            'user_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            DB::transaction(function () use ($request) {
                ProcedureQueryController::deleteIncomeBudget($request->id_log, $request->user_id);
                ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['DeleteIncomeBudget'], $request->id_log, '', '', '', $request->user_id);
            });
        }
    }

    public function dataLookup(Request $request){
        $subDepartment = SubDepartment::select('code', 'name')->orderBy('id_sort')->get();
        $account = Account::select('cfg_init_account.code', 'cfg_init_account.name')
            ->leftJoin('cfg_init_account_sub_group', 'cfg_init_account.sub_group_code', 'cfg_init_account_sub_group.code')
            // ->leftJoin('const_account_group', 'cfg_init_account_sub_group.group_code', 'const_account_group.code')
            // ->where('const_account_group.code', '1')
            ->whereRaw('cfg_init_account.sub_department_code LIKE "%'.$request->code.'%"')
            ->orderBy('cfg_init_account.code')
            ->get();

        return response()->json([
            'sub_department' => $subDepartment,
            'account' => $account
        ]);
    }


}
