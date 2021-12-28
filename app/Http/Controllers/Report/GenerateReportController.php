<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use App\Http\Controllers\HelperController;
use App\Mail\SendMailable;
use Illuminate\Http\Request;
use App\Http\Controllers\GlobalVariableController as Variable;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Mail;

class GenerateReportController extends Controller
{

    public static function generateReport(Request $request)
    {
        $params=$request->all();
        $reservationNumber = Arr::get($params, 'reservationNumber','');
        $folioNumber = Arr::get($params, 'folioNumber','');
        $number = Arr::get($params, 'number','');
        $type=Arr::get($params,'type','');
        $fromDate=Arr::get($params,'fromDate','');
        $toDate=Arr::get($params,'toDate','');
        $month=Arr::get($params,'month','');
        $year=Arr::get($params,'year','');
        $status=Arr::get($params,'status','');
        $subFolioId=Arr::get($params,'subFolioId','');
        $guestDepositId=Arr::get($params,'guestDepositId','');
        $isVoid=Arr::get($params,'void','');
        $isCorrection=Arr::get($params,'correction','');
        $isPossession=Arr::get($params,'possession','');
        $isTransfered=Arr::get($params,'transfered','');
        $subFolioCode=Arr::get($params,'subFolioCode','');
        $preview=Arr::get($params,'preview',0);
        $selectedRoom = Arr::get($params,'selected','');
        $isStatement = HelperController::trueFalseString(Arr::get($params,'isStatement',false));
        $receipient = explode(',',$request['receipient']);
        $reportId = $request['reportId'];
        $userId = $request->userId;
        $data = [];
        $companyProfile= HelperController::getCompanyProfile();

        if ($reportId == Variable::$reportList['RegistrationFormReservation']){

            $data = ReportController::registrationFormReservation($reservationNumber);

        } else if ($reportId == Variable::$reportList['RegistrationFormInHouse']){

            $data = ReportController::registrationFormInHouse($folioNumber);

        } else if ($reportId == Variable::$reportList['ReceiptDeposit']){

            $data = ReportController::receiptDeposit($guestDepositId);

        } else if ($reportId == Variable::$reportList['ReceiptFolio']){

            $data = ReportController::receiptFolio($subFolioId);

        } else if ($reportId == Variable::$reportList['ProformaInvoice']){

            $data = ReportController::proformaInvoice($reservationNumber);

        } else if ($reportId == Variable::$reportList['ConfirmationLetter']){

            $data = ReportController::reservationConfirmation($reservationNumber);

        } else if ($reportId == Variable::$reportList['Folio']){

            $data = ReportController::folio($folioNumber,$isVoid,$isPossession,$isTransfered,$isCorrection,$subFolioCode);

        } else if ($reportId == Variable::$reportList['RoomCheckList']){

            $data = ReportController::roomCheckList($selectedRoom);

        } else if ($reportId == Variable::$reportList['CashierReport']){

            $data = ReportController::cashierReport($userId);

        } else if ($reportId == Variable::$reportList['CityLedgerInvoice']){

            $data = ReportController::printInvoice($number, $isStatement);

        } else if ($reportId == Variable::$reportList['InvoicePaymentReceipt']){

            $data = ReportController::printInvoicePaymentReceive($number);

        } else if ($reportId == Variable::$reportList['Receipt']){

            $data = ReportController::printReceipt($number);

        }

        return response()->json([
            'company' => $companyProfile,
            'data' => $data['data'],
            'title' => $data['title'],
            'other' => !empty($data['other']) ? $data['other'] : []
            ]);
    }

    public static function emailReport($pdf,$data,$receipient){
        Mail::send('email/email', $data, function ($message)use($data,$pdf,$receipient) {
            $message->to($receipient);
            $message->from('khalil@gmail.com');
            $message->subject('Report');
            $message->attachData($pdf->output(),$data['title'].'.pdf');
        });

        return 0;
    }
}
