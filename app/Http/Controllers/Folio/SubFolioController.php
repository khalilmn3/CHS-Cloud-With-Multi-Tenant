<?php

namespace App\Http\Controllers\Folio;

use App\Folio\Models\Folio;
use App\Folio\Models\SubFolio;
use App\Http\Controllers\AuditDateController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\General\ShiftLogController;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
class SubFolioController extends Controller
{
    public static function index(Request $request){
        $mainTableName = 'sub_folio';
        $params=$request->all();
        $keyword=Arr::get($params,'keyword','');
        $searchby=Arr::get($params, 'searchBy','');
        $subFolio= Arr::get($params,'subFolio','All');
        $transfered= Arr::get($params,'transfered','false');
        $possession= Arr::get($params,'possession','false');
        $void= Arr::get($params,'void','false');
        $correction= Arr::get($params,'correction','false');

        $credit = 'ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $debit = 'ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount ELSE "0" END),3)';
        $creditForeign = 'ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="C" then '.$mainTableName.'.amount_foreign ELSE "0" END),3)';
        $debitForeign = 'ROUND(SUM(CASE WHEN '.$mainTableName.'.type_code="D" then '.$mainTableName.'.amount_foreign ELSE "0" END),3)';

        $folioTransfered=Folio::select('folio.number as folioNumber','guest_detail.room_number as roomNumber','contact_person.full_name')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id');

        $query = SubFolio::select(
            'sub_folio.*',
            'cfg_init_sub_department.name as sub_department',
            'company.name as company',
            'cfg_init_account.sub_group_code',
            DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) AS account'),
            DB::raw(
                'CASE WHEN sub_folio.belongs_to!='.$request['folio_number'].' THEN CONCAT("From: ",folio_from.folioNumber,", R-",folio_from.roomNumber,", G-",folio_from.full_name)
                WHEN sub_folio.folio_number!='.$request['folio_number'].' THEN CONCAT("To: ",folio_to.folioNumber,", R-",folio_to.roomNumber,", G-",folio_to.full_name)
                ELSE "" END AS transfer_status'),
            DB::raw('IF('.$credit.' > '.$debit.','.$credit.'-'.$debit.',0) AS credit'),
            DB::raw('IF('.$debit.' > '.$credit.','.$debit.'-'.$credit.',0) AS debit'),
            DB::raw('IF('.$creditForeign.' > '.$debitForeign.','.$creditForeign.'-'.$debitForeign.',0) AS creditForeign'),
            DB::raw('IF('.$debitForeign.' > '.$creditForeign.','.$debitForeign.'-'.$creditForeign.',0) AS debitForeign'),
            DB::raw('CASE WHEN const_account_group.code="'.GlobalVariableController::$accountGroup['Payment'].'" THEN IF('.$mainTableName.'.type_code="C","-1","0") ELSE "" END AS isPayment'))

        ->leftJoin('cfg_init_sub_department','sub_folio.sub_department_code', 'cfg_init_sub_department.code' )
        ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
        ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
        ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
        ->leftJoin('folio','sub_folio.folio_number', 'folio.number')
        ->leftJoin('contact_person','folio.contact_person_id', 'contact_person.id')
        ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
        ->leftJoin('company' ,'sub_folio.direct_bill_code','company.code')
        ->leftJoinSub($folioTransfered,'folio_from','sub_folio.belongs_to','folio_from.folioNumber')
        ->leftJoinSub($folioTransfered,'folio_to','sub_folio.folio_number','folio_to.folioNumber')
        ->where('sub_folio.folio_number',$request['folio_number']);

        $query2 = Folio::select(
            'guest_detail.bill_instruction',
            'folio.notes')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->where('folio.number',$request['folio_number'])
            ->first();
        $totalBalance = ProcedureQueryController::getFolioBalance2($request['folio_number']);
        $footer =[
            'bill_instruction' => $query2->bill_instruction,
            'notes' => $query2->notes,
            'balance' => $totalBalance['balance'],
            'debit' => $totalBalance['debit'],
            'credit' => $totalBalance['credit']
        ];

        if($void != 'true'){
            $query->where('sub_folio.void','0');
        }

        if($possession == 'true'){
            $query->where('sub_folio.folio_number',$request['folio_number'])
            ->Where('sub_folio.belongs_to',$request['folio_number']);
        }
        if($transfered == 'true'){
            $query->orWhere('sub_folio.belongs_to',$request['folio_number'])->where('sub_folio.folio_number','!=',$request['folio_number'])->where('sub_folio.void','0');
        }
        if(!empty($keyword) && !empty($searchBy)){
            $query->where($searchby,'like','%'.$keyword.'%');
        }
        if($subFolio != 'All'){
            $query->where('sub_folio.group_code',$subFolio);
        }

        if($void != 'true'){
            $query->where('sub_folio.void','0');
        }

        if($correction != 'true'){
            $query->groupBy('correction_breakdown');
        }else{
            $query->groupBy('breakdown1');
        }

        return [
            'data' => $query->orderBy('correction_breakdown')->get(),
            'footer' => $footer
        ];
    }

}
