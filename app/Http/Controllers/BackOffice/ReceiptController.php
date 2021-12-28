<?php

namespace App\Http\Controllers\BackOffice;

use App\Http\Controllers\Controller;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ReceiptController extends Controller
{
    public function index(Request $request) {
        $filterList = [
            'number',
            'receive_from',
            'for_payment',
            'user_id'
        ];

        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 4 ? $filterList[$searchBy] : '';

        $query = DB::table('receipt')->orderBy('number');


        if(!empty($keyword) && !empty($searchBy)){
            $query->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
        };

        return response()->json($query->limit($limit)->get());
    }

    public function save(Request $request, $mode) {
        $validator = Validator::make(
            $request->all(),[
            'number' =>  $mode == GlobalVariableController::$mode['Update'] ? 'required' : '',
            'receive_from' => 'required',
            'amount' => 'required',
            'issued_date' => 'required',
            'for_payment' => 'required',
            'issued_date' => 'required',
            'user_id' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            DB::transaction(function () use($request, $mode) {
                $number = $request->number;
                $receiveFrom = $request->receive_from;
                $amount = $request->amount;
                $issuedDate = $request->issued_date;
                $forPayment = $request->for_payment;
                $userID = $request->user_id;

                if($mode == GlobalVariableController::$mode['Update']){
                    ProcedureQueryController::updateReceipt($number, $receiveFrom, $amount, $issuedDate, $forPayment);
                    ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['UpdateReceipt'], $number, '', '', '', $userID);

                    return 0;
                } else {
                    $date = date_format(date_create(), 'Y-m-d');
                    $number = HelperController::getReceiptNumber($date);
                    if(!ProcedureQueryController::checkCode('receipt', 'number', 'number', $number)){
                        ProcedureQueryController::insertReceipt($number, $receiveFrom, $amount, $issuedDate, $forPayment);
                        ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['InsertReceipt'], $number, '', '', '', $userID);

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
    public function edit($number){
        $query = DB::table('receipt')->where('number',$number)->first();

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
                ProcedureQueryController::deleteReceipt($request->id_log);
                ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['DeleteReceipt'], $request->number, '', '', '', $request->user_id);
            });
        }
    }

    public function receiptNumber(){
        $date = date_format(date_create(), 'Y-m-d');
        return HelperController::getReceiptNumber($date);
    }
}
