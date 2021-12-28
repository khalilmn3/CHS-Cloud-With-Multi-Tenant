<?php

namespace App\Http\Controllers;

use App\Folio\Models\SubFolio;
use App\General\Models\ShiftLog;
use App\Guest\Models\GuestDeposit;
use App\Http\Controllers\General\AuditLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CashierReportController extends Controller
{
    public function index(Request $request){
        $mainTableName = 'sub_folio';
        $unionTable1 = 'guest_deposit';
        $auditDate = AuditLogController::auditDate();
        $userId= $request->user_id;
        $shift = ShiftLog::where('user_id',$userId)->where('is_open','-1')->orderBy('id','desc')->first();
        $shiftId = null;
        if(!empty($shift)){
            $shiftId = $shift->id;
        }


        $depositReservation = GuestDeposit::select(
            DB::raw('ROUND(SUM('.$unionTable1.'.amount)) AS amount'),
            'cfg_init_account.name AS account')
            ->leftJoin('reservation',$unionTable1.'.reservation_number','reservation.number')
            ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
            ->leftJoin('cfg_init_account',$unionTable1.'.account_code','cfg_init_account.code')
            ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
            ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
            ->leftJoin('log_shift',$unionTable1.'.log_shift_id','log_shift.id')
            ->where('const_account_group.code',GlobalVariableController::$accountGroup['Payment'])
            ->where($unionTable1.'.type_code',GlobalVariableController::$transactionType['Credit'])
            ->where($unionTable1.'.log_shift_id',$shiftId)
            ->where($unionTable1.'.audit_date',$auditDate)
            ->where($unionTable1.'.void','0')
            ->groupBy($unionTable1.'.account_code')
            ->get();

        $paymentInHouse = SubFolio::select(
            DB::raw('ROUND(SUM('.$mainTableName.'.amount)) AS amount'),
            'cfg_init_account.name AS account')
            ->leftJoin('folio',$mainTableName.'.folio_number','folio.number')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->leftJoin('cfg_init_account',$mainTableName.'.account_code','cfg_init_account.code')
            ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
            ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
            ->leftJoin('log_shift',$mainTableName.'.log_shift_id','log_shift.id')
            ->where('const_account_group.code',GlobalVariableController::$accountGroup['Payment'])
            ->where($mainTableName.'.type_code',GlobalVariableController::$transactionType['Credit'])
            ->where($mainTableName.'.log_shift_id',$shiftId)
            ->where($mainTableName.'.audit_date',$auditDate)
            ->where($mainTableName.'.void','0')
            ->groupBy($mainTableName.'.account_code')
            ->get();

            $refundReservation = GuestDeposit::select(
                DB::raw('ROUND(SUM('.$unionTable1.'.amount)) AS amount'),
                'cfg_init_account.name AS account')
                ->leftJoin('reservation',$unionTable1.'.reservation_number','reservation.number')
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_account',$unionTable1.'.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                ->leftJoin('log_shift',$unionTable1.'.log_shift_id','log_shift.id')
                ->where('const_account_group.code',GlobalVariableController::$accountGroup['Payment'])
                ->where($unionTable1.'.type_code',GlobalVariableController::$transactionType['Debit'])
                ->where($unionTable1.'.log_shift_id',$shiftId)
                ->where($unionTable1.'.audit_date',$auditDate)
                ->where($unionTable1.'.void','0')
                ->groupBy($unionTable1.'.account_code')
                ->get();

            $refundInHouse = SubFolio::select(
                DB::raw('ROUND(SUM('.$mainTableName.'.amount)) AS amount'),
                'cfg_init_account.name AS account')
                ->leftJoin('folio',$mainTableName.'.folio_number','folio.number')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_account',$mainTableName.'.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                ->leftJoin('log_shift',$mainTableName.'.log_shift_id','log_shift.id')
                ->where('const_account_group.code',GlobalVariableController::$accountGroup['Payment'])
                ->where($mainTableName.'.type_code',GlobalVariableController::$transactionType['Debit'])
                ->where($mainTableName.'.log_shift_id',$shiftId)
                ->where($mainTableName.'.audit_date',$auditDate)
                ->where($mainTableName.'.void','0')
                ->groupBy($mainTableName.'.account_code')
                ->get();

        //Cash In
        $cashIn = array_merge($paymentInHouse->toArray(),$depositReservation->toArray());
        $totalCashIn =[];
        foreach ($cashIn as $val) {
            if (!isset($totalCashIn[$val['account']]))
                $totalCashIn[$val['account']] = $val;
            else
                $totalCashIn[$val['account']]['amount'] += $val['amount'];
        }
        $totalCashIn = array_values($totalCashIn);

        //Cash Out
        $cashOut = array_merge($refundInHouse->toArray(),$refundReservation->toArray());
        $totalCashOut = [];
        foreach ($cashOut as $val) {
            if (!isset($totalCashOut[$val['account']]))
                $totalCashOut[$val['account']] = $val;
            else
                $totalCashOut[$val['account']]['amount'] += $val['amount'];
        }
        $totalCashOut = array_values($totalCashOut);

        //Balance
        $balanceX = array_merge($totalCashIn,$totalCashOut);
        $balance = [];
        foreach ($balanceX as $val) {
            if (!isset($balance[$val['account']]))
                $balance[$val['account']] = $val;
            else
                $balance[$val['account']]['amount'] -= $val['amount'];
        }
        $balance = array_values($balance);

        //Total Balance
        $totalBalance = 0;
        if(count($balance) > 0){
            foreach($balance as $balanceX){
                $totalBalance += $balanceX['amount'];
            }
        }

            return response()->json([
                'paymentInHouse' => $paymentInHouse,
                'depositReservation' => $depositReservation,
                'refundInHouse' => $refundInHouse,
                'refundReservation' => $refundReservation,
                'totalCashIn' => $totalCashIn,
                'totalCashOut' => $totalCashOut,
                'balance' => $balance,
                'totalBalance' => $totalBalance,
                'shiftInfo' => $shift
            ]);
    }

    public function closeShift(Request $request){
        ProcedureQueryController::updateLogShiftClose($request->id);
        return 0;
    }
}
