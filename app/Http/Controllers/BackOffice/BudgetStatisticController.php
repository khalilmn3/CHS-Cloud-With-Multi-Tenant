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

class BudgetStatisticController extends Controller
{
    private $mainTableName;

    public function __construct()
    {
        $this->mainTableName = 'budget_statistic';
    }
    public function index(Request $request){
        $filterList = [
            $this->mainTableName.'.period',
            DB::raw('CONCAT(' .$this->mainTableName. '.code, " - ", const_statistic_account.name)'),
            $this->mainTableName.'.remark',
            $this->mainTableName.'.user_id'
        ];

        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 4 ? $filterList[$searchBy] : '';

        $query = DB::table($this->mainTableName)
            ->select(
                $this->mainTableName. '.*',
                DB::raw('CONCAT(' .$this->mainTableName. '.code, " - ",  const_statistic_account.name) AS StatisticAccount '))
            ->leftJoin('const_statistic_account', $this->mainTableName.'.code', 'const_statistic_account.code')
            ->orderBy($this->mainTableName.'.period')
            ->orderBy($this->mainTableName.'.code');

        if(!empty($keyword) && !empty($searchBy)){
            $query->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
        };

        return response()->json($query->limit($limit)->get());
    }

    public function save(Request $request, $mode){
        $validator = Validator::make(
            $request->all(),[
            'period' => 'required',
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
                    if(!ProcedureQueryController::checkCode($this->mainTableName, 'id_log', 'period', $period.' AND code='.$accountCode.' AND id_log<>'.$idLog)){
                    ProcedureQueryController::updateBudgetStatistic($idLog, $period, $accountCode, $remark, $amount, $typeCode, $m1, $m2, $m3, $m4, $m5, $m6, $m7, $m8, $m9, $m10, $m11, $m12, $userID);
                    ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['UpdateBudgetStatistic'], $period, '', '', '', $userID);

                    return 0;
                    } else {
                        return 2;
                    }
                } else {
                    if(!ProcedureQueryController::checkCode($this->mainTableName, 'id_log', 'period', $period.' AND code="'.$accountCode.'"')){
                        ProcedureQueryController::insertBudgetStatistic($period, $accountCode, $remark, $amount, $typeCode, $m1, $m2, $m3, $m4, $m5, $m6, $m7, $m8, $m9, $m10, $m11, $m12, $userID);
                        ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['InsertBudgetStatistic'], $period, '', '', '', $userID);

                        return 0;
                    } else {
                        return 2;
                    }
                }
            });
        }
    }

    public function store(Request $request){
        return $this->save($request, GlobalVariableController::$mode['Insert']);
    }

    public function update(Request $request){
        return $this->save($request, GlobalVariableController::$mode['Update']);
    }

    public function edit($idLog){
        $query = DB::table($this->mainTableName)->select($this->mainTableName.'.*', 'code as account_code')->where('id_log', $idLog)->first();

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
                ProcedureQueryController::deleteBudgetStatistic($request->id_log, $request->user_id);
                ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['DeleteBudgetStatistic'], $request->id_log, '', '', '', $request->user_id);
            });
        }
    }

    public function dataLookup(Request $request){
        $account = DB::table('const_statistic_account')->select('code', 'name')
            ->whereRaw('LEFT(code,1) <> "2"')
            ->orderBy('code')
            ->get();

        return response()->json([
            'account' => $account
        ]);
    }


}
