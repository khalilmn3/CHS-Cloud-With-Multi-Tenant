<?php

namespace App\Http\Controllers\NightAudit;

use App\Configurations\Models\Room;
use App\Configurations\Models\RoomUnavailable;
use App\Folio\Models\Folio;
use App\Guest\Models\GuestDetail;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use App\Reservation;
use App\Tools\UserSetting\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class NightAuditController extends Controller
{
//AUTO POSTING
    public function precheckAutoPost(Request $request)
    {
        $params = $request->all();
        $allowZeroAmount= HelperController::trueFalseString(Arr::get($params,'allow_zero_amount',false));
        $resposting= Arr::get($params,'reposting',false);
        $auditDate=AuditLogController::auditDate();
        $complimentHu = '';
        $xFolio = Folio::select(
            'folio.number',
            'folio.voucher_number',
            'folio.compliment_hu',
            'guest_detail.arrival',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_number',
            'guest_detail.room_rate_code',
            'guest_detail.weekday_rate',
            'guest_detail.weekend_rate',
            'guest_detail.discount_percent',
            'guest_detail.discount',
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'),
            'cfg_init_room_rate.tax_and_service_code',
            'cfg_init_room_rate.charge_frequency_code')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<=',$auditDate)
            ->whereDate('guest_detail.departure','>',$auditDate)
            ->orderBy('guest_detail.room_number')
            ->get();
            // return response()->json($xFolio);

        //ROOM CHARGE
        if(!empty($xFolio)){
            $result= [];
            foreach($xFolio as $folio){
                $complimentHu = $folio->compliment_hu;
                if(HelperController::isScheduledRate($folio->number,$auditDate)){
                    $complimentHu = HelperController::getScheduledRateComplimentHu($folio->number,$auditDate);
                }
                if(!(!$allowZeroAmount && !empty($complimentHu) && $complimentHu != '' && $complimentHu != ' ')){
                    if(HelperController::isCanPostRoomCharge($folio->charge_frequency_code,$folio->arrival)){
                        $folioNumber= $folio->number;
                        $roomNumber= $folio->room_number;
                        $guestName= $folio->full_name;
                        $roomRateCode= $folio->room_rate_code;
                        $adult= $folio->adult;
                        $child= $folio->child;
                        $taxServiceCodeM= $folio->tax_and_service_code;
                        $isScheduled= HelperController::isScheduledRate($folioNumber, $auditDate);
                        if($isScheduled){
                            $amount = HelperController::getScheduledRoomRate($folioNumber,$auditDate);
                        }else{
                            if(HelperController::isWeekend($auditDate)){
                                $amount= $folio->weekend_rate;
                            } else {
                                $amount = $folio->weekday_rate;
                            }
                        }
                        $amountPost= HelperController::getRoomChargeWillPost($folioNumber);
                        $resultX = '';
                        $amountPosted = 0;
                        $countAutoPost= HelperController::getCountAutoPosting($folioNumber,GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),'',$auditDate);
                        if(!empty($countAutoPost) || $countAutoPost > 0){
                            $amountPosted = HelperController::getAmountAutoPosting($folioNumber,GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),GlobalVariableController::$postingType['Room'],$auditDate);
                            $resultX = 'Already Posted '.$countAutoPost.' times';
                        }
                    }
                    //ADD RESULT TO ARRAY
                    array_push($result,[
                        'type' => 'Room Charge',
                        'folio_number' => $folioNumber,
                        'room_number' => $roomNumber,
                        'full_name' => $guestName,
                        'room_rate_code' => $isScheduled ? $roomRateCode.'(Scheduled)' : $roomRateCode,
                        'amount' => $amount,
                        'amount_post' => $amountPost,
                        'amount_posted' => $amountPosted,
                        'result' => $resultX,
                    ]);
                }
            }

        }
        //EXTRA CHARGE
        $xExtraCharge= DB::table('guest_extra_charge')->select(
            'guest_extra_charge.*',
            'guest_detail.arrival',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_number',
            'cfg_init_account.name as account',
            'guest_extra_charge.package_name AS package',
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
            ->leftJoin('folio','guest_extra_charge.folio_number','folio.number')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->leftJoin('cfg_init_account','guest_extra_charge.account_code','cfg_init_account.code')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<=',$auditDate)
            ->whereDate('guest_detail.departure','>',$auditDate)
            ->orderBy('guest_detail.room_number')
            ->orderBy('guest_extra_charge.id_log')
            ->get();

        if(!empty($xExtraCharge)){
            foreach($xExtraCharge as $extraCharge){
                if(HelperController::isCanPostRoomCharge($extraCharge->charge_frequency_code,$extraCharge->arrival)){
                    $folioNumber= $extraCharge->folio_number;
                    $roomNumber= $extraCharge->room_number;
                    $guestName= $extraCharge->full_name;
                    $adult= $extraCharge->adult;
                    $child= $extraCharge->child;
                    $taxServiceCodeM= $extraCharge->tax_and_service_code;
                    $amount= HelperController::getTotalBreakdownAmount($extraCharge->quantity, $extraCharge->amount, $extraCharge->extra_pax, HelperController::variant($extraCharge->per_pax),
                        HelperController::variant($extraCharge->include_child), HelperController::variant($extraCharge->per_pax_extra), $extraCharge->max_pax, $adult, $child);

                    $resultX = '';
                    $amountPosted = 0;
                    $amountPost = HelperController::getExtraChargeWillPost($folioNumber,$extraCharge->id_log);
                    $countAutoPost= HelperController::getCountAutoPosting($folioNumber,$extraCharge->account_code,GlobalVariableController::$postingType['ExtraCharge'],$auditDate);
                    if(!empty($countAutoPost) || $countAutoPost > 0){
                        $amountPosted = HelperController::getAmountAutoPosting($folioNumber,$extraCharge->account_code,GlobalVariableController::$postingType['ExtraCharge'],$auditDate);
                        $resultX = 'Already Posted';
                    }
                }
                //ADD RESULT TO ARRAY
                array_push($result,[
                    'type' => 'Extra Charge',
                    'folio_number' => $folioNumber,
                    'room_number' => $roomNumber,
                    'full_name' => $guestName,
                    'room_rate_code' => empty($extraCharge->package) ? $extraCharge->account : $extraCharge->package,
                    'amount' => $amount,
                    'amount_post' => $amountPost,
                    'amount_posted' => $amountPosted,
                    'result' => $resultX,
                ]);
            }
        }
        return response()->json($result);
    }

    public function autoPost(Request $request){
        $params= $request->all();
        $subFolio= Arr::get($params,'sub_folio','A');
        $resposting= HelperController::trueFalseString(Arr::get($params, 'reposting', false));
        $allowZeroAmount= HelperController::trueFalseString(Arr::get($params, 'allow_zero_amount',false));
        $userId= Arr::get($params, 'user_id','WEBMASTER');
        $auditDate= AuditLogController::auditDate();

        $xFolio = Folio::select(
            'folio.number',
            'folio.voucher_number',
            'folio.compliment_hu',
            'guest_detail.arrival',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_number',
            'guest_detail.room_rate_code',
            'guest_detail.weekday_rate',
            'guest_detail.weekend_rate',
            'guest_detail.discount_percent',
            'guest_detail.discount',
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'),
            'cfg_init_room_rate.tax_and_service_code',
            'cfg_init_room_rate.charge_frequency_code')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<=',$auditDate)
            ->whereDate('guest_detail.departure','>',$auditDate)
            ->orderBy('guest_detail.room_number')
            ->get();

        //ROOM CHARGE
        if(!empty($xFolio)){
            $result= [];
            $complimentHu= '';
            foreach($xFolio as $folio){
                $complimentHu = $folio->compliment_hu;
                if(HelperController::isScheduledRate($folio->number,$auditDate)){
                    $complimentHu = HelperController::getScheduledRateComplimentHu($folio->number,$auditDate);
                    //SET STATUS COMPLIMENT
                    ProcedureQueryController::updateFolioComplimentHu($folio->number,$complimentHu,$userId);
                }
                if(!(!$allowZeroAmount && !empty($complimentHu) && $complimentHu != ' ')){
                    if(HelperController::isCanPostRoomCharge($folio->charge_frequency_code,$folio->arrival)){
                        $folioNumber= $folio->number;
                        $roomNumber= $folio->room_number;
                        $guestName= $folio->full_name;
                        $roomRateCode= $folio->room_rate_code;
                        $adult= $folio->adult;
                        $child= $folio->child;
                        $isScheduled= HelperController::isScheduledRate($folioNumber, $auditDate);
                        if($isScheduled){
                            $amount = HelperController::getScheduledRoomRate($folioNumber,$auditDate);
                        }else{
                            if(HelperController::isWeekend($auditDate)){
                                $amount= $folio->weekend_rate;
                            } else {
                                $amount = $folio->weekday_rate;
                            }
                        }
                        $resultX = '';
                        $amountPosted = 0;
                        $countAutoPost= HelperController::getCountAutoPosting($folioNumber,GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),'',$auditDate);
                        if(!empty($countAutoPost) || $countAutoPost > 0){
                            if($resposting){
                                if($amount <= 0 && !$allowZeroAmount){
                                    $resultX= 'Zero amount not allowed';
                                } else {
                                    $correctionBreakdown= HelperController::getBreakdownAutoPosting($folioNumber,GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),GlobalVariableController::$postingType['Room'],$auditDate);
                                    if($correctionBreakdown > 0){
                                        if($countAutoPost <= 1){
                                            ProcedureQueryController::deleteGuestInHouse($auditDate,$folioNumber,$userId);
                                        }
                                        ProcedureQueryController::voidSubFolioByCorrectionBreakdown($correctionBreakdown,$userId,'Reposting at Auto Posting', $userId);
                                        ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['VoidTransaction'], $correctionBreakdown, '','','Reposting Auto Posting', $userId );
                                    }
                                    $postingRoomCharge= HelperController::postingRoomCharge($folioNumber, $subFolio, $allowZeroAmount, $userId );

                                    if($postingRoomCharge == 0){
                                        $resultX= 'Reposting successful';
                                    }else if($postingRoomCharge == 1){
                                        $resultX= 'Breakdown Too Large';
                                    }else if($postingRoomCharge == 2){
                                        $resultX= 'Zero Amount Not Allowed';
                                    }else if($postingRoomCharge == 3){
                                        $resultX= 'No Room Charge for Today';
                                    }else if($postingRoomCharge == 4){
                                        $resultX= 'No Room Charge for Complimen';
                                    }else if($postingRoomCharge == 5){
                                        $resultX= '5';
                                    }else if($postingRoomCharge == 6){
                                        $resultX= '6';
                                    }else if($postingRoomCharge == 404){
                                        $resultX= 'Posting Room Charge Failed';
                                    }
                                }
                            } else {
                                $resultX = 'Already Posted '.$countAutoPost.' times';
                            }
                        } else {
                            if($amount <= 0 && !$allowZeroAmount){
                                $resultX = 'Zero Amount not Allowed';
                            } else {
                                $postingRoomCharge= HelperController::postingRoomCharge($folioNumber, $subFolio, $allowZeroAmount, $userId );
                                if($postingRoomCharge == 0){
                                    $resultX= 'Posting successful';
                                }else if($postingRoomCharge == 1){
                                    $resultX= 'Breakdown Too Large';
                                }else if($postingRoomCharge == 2){
                                    $resultX= 'Zero Amount Not Allowed';
                                }else if($postingRoomCharge == 3){
                                    $resultX= 'No Room Charge for Today';
                                }else if($postingRoomCharge == 4){
                                    $resultX= 'No Room Charge for Compliment';
                                }else if($postingRoomCharge == 5){
                                    $resultX= '5';
                                }else if($postingRoomCharge == 6){
                                    $resultX= '6';
                                }else if($postingRoomCharge == 404){
                                    $resultX= 'Posting Room Charge Failed';
                                }
                            }
                        }
                        $amountPosted = HelperController::getAmountAutoPosting($folioNumber,GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']),GlobalVariableController::$postingType['Room'],$auditDate);
                    } else {
                        $resultX= 'No Room Charge for Today';
                    }
                    //ADD RESULT TO ARRAY
                    array_push($result,[
                        'type' => 'Room Charge',
                        'folio_number' => $folioNumber,
                        'room_number' => $roomNumber,
                        'full_name' => $guestName,
                        'room_rate_code' =>  $isScheduled ? $roomRateCode.'(Scheduled)' : $roomRateCode,
                        'amount' => $amount,
                        'amount_post' => $amountPosted,
                        'amount_posted' => $amountPosted,
                        'result' => $resultX,
                    ]);
                }
            }
        }

        //EXTRA CHARGE
        $xExtraCharge= DB::table('guest_extra_charge')->select(
            'guest_extra_charge.*',
            'guest_detail.arrival',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_number',
            'cfg_init_account.name as account',
            'guest_extra_charge.package_name AS package',
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
            ->leftJoin('folio','guest_extra_charge.folio_number','folio.number')
            ->leftJoin('cfg_init_account','guest_extra_charge.account_code','cfg_init_account.code')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<=',$auditDate)
            ->whereDate('guest_detail.departure','>',$auditDate)
            ->orderBy('guest_detail.room_number')
            ->orderBy('guest_extra_charge.id_log')
            ->get();

        if(!empty($xExtraCharge)){
            foreach($xExtraCharge as $extraCharge){
                if(HelperController::isCanPostRoomCharge($extraCharge->charge_frequency_code,$extraCharge->arrival)){
                    $folioNumber= $extraCharge->folio_number;
                    $roomNumber= $extraCharge->room_number;
                    $guestName= $extraCharge->full_name;
                    $adult= $extraCharge->adult;
                    $child= $extraCharge->child;
                    $amount= HelperController::getTotalBreakdownAmount($extraCharge->quantity, $extraCharge->amount, $extraCharge->extra_pax, HelperController::variant($extraCharge->per_pax),
                        HelperController::variant($extraCharge->include_child), HelperController::variant($extraCharge->per_pax_extra), $extraCharge->max_pax, $adult, $child);

                    $resultX = '';
                    $amountPosted = 0;
                    $amountPost = HelperController::getExtraChargeWillPost($folioNumber,$extraCharge->id_log);
                    $countAutoPost= HelperController::getCountAutoPosting($folioNumber,$extraCharge->account_code,GlobalVariableController::$postingType['ExtraCharge'],$auditDate);
                    if(!empty($countAutoPost) || $countAutoPost > 0){
                        if($resposting){
                            if($amount <= 0 && !$allowZeroAmount){
                                $resultX = 'Zero amount not allowed';
                            }else{
                                $correctionBreakdown=HelperController::getBreakdownAutoPosting($folioNumber, $extraCharge->account_code, GlobalVariableController::$postingType['ExtraCharge'], $auditDate);
                                if(!empty($correctionBreakdown)){
                                    ProcedureQueryController::voidSubFolioByCorrectionBreakdown($correctionBreakdown, $userId, 'Reposting at Auto Posting', $userId);
                                    ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['VoidTransaction'], $correctionBreakdown, '','','Reposting at Auto Posting', $userId );
                                }
                                $postingExtraCharge= HelperController::postingExtraCharge($folioNumber, $extraCharge->id_log, $subFolio, $userId);
                                if($postingExtraCharge == 0){
                                    $resultX= 'Reposting successful';
                                }else if($postingExtraCharge == 1){
                                    $resultX= 'Breakdown Too Large';
                                }else if($postingExtraCharge == 2){
                                    $resultX= 'No Extra Chrage for today';
                                }else if($postingExtraCharge == 404){
                                    $resultX= 'Posting Extra Charge Failed';
                                }
                            }
                        } else {
                            $resultX= 'Already posted';
                        }
                    } else {
                        if($amount <= 0 && !$allowZeroAmount ){
                            $resultX= 'Zero amount not allowed';
                        } else {
                            $postingExtraCharge= HelperController::postingExtraCharge($folioNumber, $extraCharge->id_log, $subFolio, $userId);
                            if($postingExtraCharge == 0){
                                $resultX= 'Posting successful';
                            }else if($postingExtraCharge == 1){
                                $resultX= 'Breakdown Too Large';
                            }else if($postingExtraCharge == 2){
                                $resultX= 'No Extra Chrage for today';
                            }else if($postingExtraCharge == 404){
                                $resultX= 'Posting Extra Charge Failed';
                            }
                        }
                    }
                    $amountPosted = HelperController::getAmountAutoPosting($folioNumber,$extraCharge->account_code,GlobalVariableController::$postingType['ExtraCharge'],$auditDate);
                } else {
                    $resultX= 'No Extra Chrage for today';
                }
                //ADD RESULT TO ARRAY
                array_push($result,[
                    'type' => 'Extra Charge',
                    'folio_number' => $folioNumber,
                    'room_number' => $roomNumber,
                    'full_name' => $guestName,
                    'room_rate_code' => empty($extraCharge->package) ? $extraCharge->account : $extraCharge->package,
                    'amount' => $amount,
                    'amount_post' => $amountPost,
                    'amount_posted' => $amountPosted,
                    'result' => $resultX,
                ]);
            }
        }
        return response()->json($result);
    }
//DAYEND CLOSED
    //PRECHECK DAYEND CLOSE
        public function criticalError(){

            $expiresAt = Carbon::now()->addMinutes(1);
            $auditDate= AuditLogController::auditDate();
            $dateNow= date('Y-m-d');
            $result= [];
            $stepAmount= 0;
            if($auditDate < $dateNow){
                    Cache::add('step',0, $expiresAt);
                    Cache::add('FinalStep',0, $expiresAt);
                if(Cache::get('FinalStep') == 1){
                    Cache::put('FinalStep',0, $expiresAt);
                    Cache::put('step',$stepAmount, $expiresAt);
                }
                if(Cache::has('status')){
                    if(Cache::get('status') == 1 && Cache::get('step') < 5){
                        Cache::put('step',$stepAmount, $expiresAt);
                    }
                }
                //RESERVATION EXPECTED ARRIVAL
                $xReservation= Reservation::select(
                    'reservation.number',
                    'reservation.status_code',
                    'guest_detail.adult',
                    'guest_detail.child',
                    'guest_detail.arrival',
                    'guest_detail.room_rate_code',
                    'guest_detail.bed_type_code',
                    'guest_detail.room_number',
                    DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
                    ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                    ->whereIn('reservation.status_code',[GlobalVariableController::$reservationStatus['New'],GlobalVariableController::$reservationStatus['WaitList']])
                    ->whereDate('guest_detail.arrival',$auditDate)
                    ->orderBy('reservation.number')
                    ->get();

                if(count($xReservation) <> 0){
                    foreach($xReservation as $reservation){
                        if(!empty($reservation)){
                            $solution1= $reservation->status_code == GlobalVariableController::$reservationStatus['New'] ? (empty($reservation->room_number) ? 'Auto Assign' : 'Check In') : 'Unset Wait List';
                            $solution2= 'Cancel';
                            $solution3= 'Change Arrival';
                            $solution4= 'No Show';

                            //ADD RESULT TO ARRAY
                            array_push($result,[
                                'type' => 'Reservation',
                                'number' => $reservation->number,
                                'room_number' => $reservation->room_number,
                                'full_name' => $reservation->full_name,
                                'description' => $reservation->status_code == GlobalVariableController::$reservationStatus['WaitList'] ? 'Must Check In Today (Wait List)' : 'Must Check In Today',
                                'solution1' => $solution1,
                                'solution2' => $solution2,
                                'solution3' => $solution3,
                                'solution4' => $solution4,
                            ]);
                        }
                    }
                    Cache::put('status', 1, $expiresAt);
                } else {
                    Cache::put('status', 0, $expiresAt);
                }
                if(Cache::get('step') == 0){
                    Cache::put('step',Cache::get('step') + 1,$expiresAt);
                    return response()->json([
                        'step' => Cache::get('step'),
                        'status' => Cache::get('status'),
                        'data' => $result
                    ]);
                }


            //FOLIO EXPECTED DEPARTURE
                $xFolio= Folio::select(
                'folio.number',
                'folio.type_code',
                'folio.voucher_number',
                'folio.compliment_hu',
                'guest_detail.arrival',
                'guest_detail.adult',
                'guest_detail.child',
                'guest_detail.room_rate_code',
                'guest_detail.room_number',
                'cfg_init_room_rate.charge_frequency_code',
                DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
                ->whereDate('guest_detail.arrival','<=',$auditDate)
                ->whereDate('guest_detail.departure',$auditDate)
                ->orderBy('folio.type_code')
                ->orderBy('guest_detail.room_number')
                ->orderBy('folio.number')
                ->get();

                if(count($xFolio) <> 0){
                    foreach($xFolio as $folio){
                        if(!empty($folio)){
                            $type= ($folio->type_code == GlobalVariableController::$folioType['GuestFolio'] ? 'Guest Folio' : ($folio->type_code == GlobalVariableController::$folioType['DeskFolio'] ? 'Desk Folio' : ($folio->type_code == GlobalVariableController::$folioType['MasterFolio'] ? 'Master Folio' : '')));
                            $solution1= 'Check Out';
                            $solution2= 'Extend';
                            $solution3= '';
                            $solution4= '';

                            //ADD RESULT TO ARRAY
                            array_push($result,[
                                'type' => $type,
                                'number' => $folio->number,
                                'room_number' => $folio->room_number,
                                'full_name' => $folio->full_name,
                                'description' => 'Must Check Out Today',
                                'solution1' => $solution1,
                                'solution2' => $solution2,
                                'solution3' => $solution3,
                                'solution4' => $solution4,
                            ]);

                        }
                    }

                    Cache::put('status', 1, $expiresAt);
                } else {
                    Cache::put('status', 0, $expiresAt);
                }
                if(Cache::get('step') == 1){
                    Cache::put('step',Cache::get('step') + 1, $expiresAt);
                    return response()->json([
                        'step' => Cache::get('step'),
                        'status' => Cache::get('status'),
                        'data' => $result
                    ]);
                }

            //CAPTAIN ORDER STILL OPEN
                $xCaptainOrder= DB::table('pos_captain_order')->select(
                    'pos_captain_order.id_log',
                    'pos_captain_order.table_number',
                    DB::raw('CONCAT(pos_captain_order.title_code, pos_captain_order.full_name) AS full_name'))
                    ->where('pos_captain_order.is_open','-1')
                    ->where('pos_captain_order.is_cancel','0')
                    ->orderBy('pos_captain_order.id_log')
                    ->get();

                if(count($xCaptainOrder) <> 0){
                    foreach($xCaptainOrder as $captainOrder){
                        if(!empty($captainOrder)){
                            $type= 'Captain Order';
                            $solution1= 'Open POS';
                            $solution2= '';
                            $solution3= '';
                            $solution4= '';

                            //ADD RESULT TO ARRAY
                            array_push($result,[
                                'type' => $type,
                                'number' => $captainOrder->id_log,
                                'room_number' => $captainOrder->table_number,
                                'full_name' => $captainOrder->full_name,
                                'description' => 'Captain Order still open',
                                'solution1' => $solution1,
                                'solution2' => $solution2,
                                'solution3' => $solution3,
                                'solution4' => $solution4,
                            ]);
                        }
                    }
                    Cache::put('status', 1, $expiresAt);
                } else {
                    Cache::put('status', 0, $expiresAt);
                }
                if(Cache::get('step') == 2){
                    Cache::put('step',3, $expiresAt);
                    return response()->json([
                        'step' => Cache::get('step'),
                        'status' => Cache::get('status'),
                        'data' => $result
                    ]);
                }

            //GUEST FOLIO WITHOUT ROOM CHARGE
                $xRoomCharge= Folio::select(
                    'folio.number',
                    'folio.type_code',
                    'folio.voucher_number',
                    'folio.compliment_hu',
                    'guest_detail.arrival',
                    'guest_detail.adult',
                    'guest_detail.child',
                    'guest_detail.room_rate_code',
                    'guest_detail.room_number',
                    'cfg_init_room_rate.charge_frequency_code',
                    DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                    ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
                    ->where('folio.type_code',GlobalVariableController::$folioType['GuestFolio'])
                    ->whereDate('guest_detail.arrival','<=',$auditDate)
                    ->whereDate('guest_detail.departure','>',$auditDate)
                    ->orderBy('folio.type_code')
                    ->orderBy('guest_detail.room_number')
                    ->orderBy('folio.number')
                    ->get();

                if(count($xRoomCharge) <> 0){
                    foreach($xRoomCharge as $folio){
                        if(!empty($folio)){
                            $complimentHu= $folio->compliment_hu;
                            if(HelperController::isScheduledRate($folio->number, $auditDate)){
                                $complimentHu= HelperController::getScheduledRateComplimentHu($folio->number, $auditDate);
                            }

                            if(!(!GlobalVariableController::allowZeroAmount() && !empty($complimentHu) && $complimentHu != ' ')){
                                if(HelperController::isCanPostRoomCharge($folio->charge_frequency_code, $folio->arrival)){
                                    if(!HelperController::isAlreadyAutoPosting($folio->number, GlobalVariableController::globalAccount(GlobalVariableController::$configurationName['AccountRoomCharge']), '', $auditDate) &&
                                        (GlobalVariableController::allowZeroAmount() || HelperController::getRoomRate($folio->room_rate_code,$auditDate,$folio->adult, $folio->child, HelperController::isWeekend($auditDate)) > 0 )){

                                        $type= 'Guest Folio';
                                        $solution1= 'Auto Posting';
                                        $solution2= '';
                                        $solution3= '';
                                        $solution4= '';

                                        //ADD RESULT TO ARRAY
                                        array_push($result,[
                                            'type' => $type,
                                            'number' => $folio->number,
                                            'room_number' => $folio->room_number,
                                            'full_name' => $folio->full_name,
                                            'description' => 'There is no Room Charge posted today',
                                            'solution1' => $solution1,
                                            'solution2' => $solution2,
                                            'solution3' => $solution3,
                                            'solution4' => $solution4,
                                        ]);
                                    Cache::put('status', 1, $expiresAt);
                                    }
                                }
                            }
                        }
                    }
                } else {
                    Cache::put('status', 0, $expiresAt);
                }
                if(Cache::get('step') == 3){
                    Cache::put('step',4, $expiresAt);
                    return response()->json([
                        'step' => Cache::get('step'),
                        'status' => Cache::get('status'),
                        'data' => $result
                    ]);
                }

            //FOLIO CLOSED, BALANCE > 0
                $xxFolio= Folio::select(
                    'sub_folio.folio_number AS number',
                    'folio.type_code',
                    'folio.compliment_hu',
                    'folio.voucher_number',
                    'guest_detail.arrival',
                    'guest_detail.adult',
                    'guest_detail.child',
                    'guest_detail.room_rate_code',
                    'guest_detail.room_number',
                    'cfg_init_room_rate.charge_frequency_code',
                    DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
                    ->leftJoin('sub_folio','folio.number','sub_folio.folio_number')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                    ->where('folio.status_code',GlobalVariableController::$folioStatus['Closed'])
                    ->where('sub_folio.void','0')
                    ->groupBy('sub_folio.folio_number')
                    ->havingRaw('SUM(CASE WHEN sub_folio.type_code = "D" THEN (sub_folio.quantity*sub_folio.amount) ELSE -(sub_folio.quantity*sub_folio.amount) END)<>0 ')
                    ->orderBy('folio.type_code')
                    ->orderBy('guest_detail.room_number')
                    ->orderBy('sub_folio.folio_number')
                    ->get();

                if(count($xxFolio) <> 0){
                    foreach($xxFolio as $folio){
                        if(!empty($folio)){
                            $type= ($folio->type_code == GlobalVariableController::$folioType['GuestFolio'] ? 'Guest Folio' :( $folio->type_code == GlobalVariableController::$folioType['DeskFolio'] ? 'Desk Folio' : ($folio->type_code == GlobalVariableController::$folioType['MasterFolio'] ? 'Master Folio' : '')));
                            $solution1= 'Show Folio';
                            $solution2= '';
                            $solution3= '';
                            $solution4= '';

                            //ADD RESULT TO ARRAY
                            array_push($result,[
                                'type' => $type,
                                'number' => $folio->number,
                                'room_number' => $folio->room_number,
                                'full_name' => $folio->full_name,
                                'description' => 'Already check out, but had open Balance',
                                'solution1' => $solution1,
                                'solution2' => $solution2,
                                'solution3' => $solution3,
                                'solution4' => $solution4,
                            ]);
                        }
                    }
                }

            //RESERVATION !NEW HAVE BALANCE
                $xxReservation= Reservation::select(
                'reservation.number',
                'guest_detail.adult',
                'guest_detail.child',
                'guest_detail.room_rate_code',
                'guest_detail.bed_type_code',
                'guest_detail.room_number',
                    DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
                    ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                    ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                    ->leftJoin('guest_deposit', function($join){
                        $join->on('reservation.number','guest_deposit.reservation_number')
                            ->where('guest_deposit.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode']);
                        })
                    ->where('reservation.status_code','!=',GlobalVariableController::$reservationStatus['New'])
                    ->where('guest_deposit.void','0')
                    ->where('guest_deposit.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode'])
                    ->groupBy('guest_deposit.reservation_number')
                    ->havingRaw('SUM(CASE WHEN guest_deposit.type_code = "D" THEN (guest_deposit.amount) ELSE -(guest_deposit.amount) END)<>0')
                    ->orderBy('reservation.number')
                    ->get();

                if(count($xxReservation) <> 0){
                    foreach($xxReservation as $reservation){
                        if(!empty($reservation)){
                            $type= 'Reservation';
                            $solution1= 'Show Deposit';
                            $solution2= '';
                            $solution3= '';
                            $solution4= '';

                            //ADD RESULT TO ARRAY
                            array_push($result,[
                                'type' => $type,
                                'number' => $reservation->number,
                                'room_number' => $reservation->room_number,
                                'full_name' => $reservation->full_name,
                                'description' => 'Already check in / check out, but had open Balance',
                                'solution1' => $solution1,
                                'solution2' => $solution2,
                                'solution3' => $solution3,
                                'solution4' => $solution4,
                            ]);
                            Cache::put('status', 1, $expiresAt);
                        }
                    }
                } else {
                    Cache::put('status', 0, $expiresAt);
                }

                if(Cache::get('step') == 4){
                    Cache::put('step',5, $expiresAt);
                    return response()->json([
                        'step' => Cache::get('step'),
                        'status' => Cache::get('status'),
                        'finalStep' => Cache::get('FinalStep'),
                        'data' => $result
                    ]);
                }

                if(Cache::get('step') == 5){
                    Cache::put('FinalStep',1, $expiresAt);
                    Cache::put('step',6, $expiresAt);
                    return response()->json([
                        'step' => Cache::get('step'),
                        'status' => Cache::get('status'),
                        'finalStep' => Cache::get('FinalStep'),
                        'data' => $result
                    ]);
                }
            } else {
                Cache::put('FinalStep',0, $expiresAt);
                Cache::put('step',$stepAmount, $expiresAt);
                return response()->json([
                    'step' => 0,
                    'status' => 3
                ]);
            }
        }



    //WARNING ERROR
        public static function warningError(){
            $result = [];
            //FOLIO CLOSED, BALANCE > 0
            $xFolio= Folio::select(
                'sub_folio.folio_number AS number',
                'folio.type_code',
                'folio.compliment_hu',
                'folio.voucher_number',
                'guest_detail.arrival',
                'guest_detail.adult',
                'guest_detail.child',
                'guest_detail.room_rate_code',
                'guest_detail.room_number',
                'cfg_init_room_rate.charge_frequency_code',
                DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
                ->leftJoin('sub_folio','folio.number','sub_folio.folio_number')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                ->where('folio.status_code',GlobalVariableController::$folioStatus['Closed'])
                ->where('sub_folio.void','0')
                ->groupBy('sub_folio.folio_number')
                ->havingRaw('SUM(CASE WHEN sub_folio.type_code = "D" THEN (sub_folio.quantity*sub_folio.amount) ELSE -(sub_folio.quantity*sub_folio.amount) END)<>0 ')
                ->orderBy('folio.type_code')
                ->orderBy('guest_detail.room_number')
                ->orderBy('sub_folio.folio_number')
                ->get();

            if(!empty($xFolio)){
                foreach($xFolio as $folio){
                    if(!empty($folio)){
                        $type= $folio->type_code == GlobalVariableController::$folioType['GuestFolio'] ? 'Guest Folio' :( $folio->type_code == GlobalVariableController::$folioType['DeskFolio'] ? 'Desk Folio' : ($folio->type_code == GlobalVariableController::$folioType['MasterFolio'] ? 'Master Folio' : ''));
                        $solution1= 'Show Folio';
                        $solution2= '';
                        $solution3= '';
                        $solution4= '';

                        //ADD RESULT TO ARRAY
                        array_push($result,[
                            'type' => $type,
                            'number' => $folio->number,
                            'room_number' => $folio->room_number,
                            'full_name' => $folio->full_name,
                            'description' => 'Already check out, but had open Balance',
                            'solution1' => $solution1,
                            'solution2' => $solution2,
                            'solution3' => $solution3,
                            'solution4' => $solution4,
                        ]);
                    }
                }
            }

            //RESERVATION !NEW HAVE BALANCE
            $xReservation= Reservation::select(
            'reservation.number',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_rate_code',
            'guest_detail.bed_type_code',
            'guest_detail.room_number',
                DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS full_name'))
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                ->leftJoin('guest_deposit', function($join){
                    $join->on('reservation.number','guest_deposit.reservation_number')
                        ->where('guest_deposit.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode']);
                    })
                ->where('reservation.status_code','!=',GlobalVariableController::$reservationStatus['New'])
                ->where('guest_deposit.void','0')
                ->where('guest_deposit.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode'])
                ->groupBy('guest_deposit.reservation_number')
                ->havingRaw('SUM(CASE WHEN guest_deposit.type_code = "D" THEN (guest_deposit.amount) ELSE -(guest_deposit.amount) END)<>0')
                ->orderBy('reservation.number')
                ->get();

            if(!empty($xReservation)){
                foreach($xReservation as $reservation){
                    if(!empty($reservation)){
                        $type= 'Reservation';
                        $solution1= 'Show Deposit';
                        $solution2= '';
                        $solution3= '';
                        $solution4= '';

                        //ADD RESULT TO ARRAY
                        array_push($result,[
                            'type' => $type,
                            'number' => $reservation->number,
                            'room_number' => $reservation->room_number,
                            'full_name' => $reservation->full_name,
                            'description' => 'Already check in / check out, but had open Balance',
                            'solution1' => $solution1,
                            'solution2' => $solution2,
                            'solution3' => $solution3,
                            'solution4' => $solution4,
                        ]);
                    }
                }
            }
            return response()->json($result);
        }
    // PROCESS DAYEND CLOSED
        public function processDayEndClosed(Request $request){
            $expiresAt = Carbon::now()->addMinutes(1);
            $auditDate= AuditLogController::auditDate();
            $dateNow = date('Y-m-d');
            $userId= $request['user_id'];
            Cache::add('finalAuditStep',0, $expiresAt);
            Cache::add('auditStep',0, $expiresAt);

            if(Cache::get('finalAuditStep') == 1){
                Cache::put('auditStep',0, $expiresAt);
                Cache::put('finalAuditStep',0, $expiresAt);
            }
            DB::beginTransaction();
            try{
                if(Cache::get('auditStep') == 0){
                    Cache::put('auditStep',1, $expiresAt);
                    self::logOutAllUser($userId);
                    self::updateRoomStatusDayendClosed($userId);
                } else if(Cache::get('auditStep') == 1){
                    Cache::put('auditStep',2, $expiresAt);
                    self::insertRoomStatistic($auditDate,$userId);
                } else if(Cache::get('auditStep') == 2){
                    Cache::put('auditStep',3, $expiresAt);
                    self::closeAllShift($userId);
                } else if(Cache::get('auditStep') == 3){
                    Cache::put('auditStep',4, $expiresAt);
                    self::setAuditDate($auditDate,$userId);
                } else if(Cache::get('auditStep') == 4){
                    Cache::put('auditStep',5, $expiresAt);
                    procedureQueryController::insertRoomStatus();
                    Cache::put('finalAuditStep',1);
                }

                DB::commit();
                return response()->json([
                    'auditStep' => Cache::get('auditStep')
                ]);
            } catch (\Exception $e){
                DB::rollBack();
                Cache::put('auditStep',0, $expiresAt);
                return response()->json([
                    'status' => 'Error: '.$e->getMessage()
                ]);
            };

        }

        public static function setAuditDate($auditDate, $userId){
            ProcedureQueryController::insertAuditDate($auditDate, $userId);
        }

        public static function LogOutAllUser($userId){
            $userGroup = User::select('id')->where('id',$userId)->first();
            if(!empty($userGroup)){
                DB::table('oauth_access_tokens')->whereNot('group_id',$userGroup->id)->delete();
            }
        }

        public static function closeAllShift(){
            ProcedureQueryController::closeAllShift();
        }

        public static function updateRoomStatusDayendClosed($userId){
            $auditDate= AuditLogController::auditDate();
            $folio= GuestDetail ::select('guest_detail.room_number')
                ->leftJoin('folio','guest_detail.id','folio.guest_detail_id')
                ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
                ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio']);
            $unavailable= RoomUnavailable::select('room_number')
                ->where('from_date','<=',FormatController::formatDate($auditDate))
                ->where('to_date','>=',FormatController::formatDate($auditDate));
            $xQuery= Room::select(
                'cfg_init_room.number',
                DB::raw('IF(IFNULL(Folio.room_number, "")="", "0", "-1") AS is_folio'),
                DB::raw('IF(IFNULL(Unavailable.room_number, "")="", "0", "-1") AS is_unavailable'))
                ->leftJoinSub($folio,'Folio', function($join){
                    $join->on('cfg_init_room.number','=','Folio.room_number');
                })
                ->leftJoinSub($unavailable, 'Unavailable', function($join){
                    $join->on('cfg_init_room.number','=','Unavailable.room_number');
                })
                ->whereRaw('IFNULL(Folio.room_number, "")<>""')
                ->orWhereRaw('IFNULL(Folio.room_number, "")=""')
                ->where('cfg_init_room.status_code',GlobalVariableController::$roomStatus['Ready'])
                ->orWhereRaw('IFNULL(Unavailable.room_number, "")<>""')
                ->orderBy('cfg_init_room.number')
                ->get();

            if(!empty($xQuery)){
                foreach($xQuery as $query){
                    if(!empty($query)){
                        //OC TO OD
                        if(HelperController::variant($query->is_folio) || HelperController::variant($query->is_unavailable)){
                            ProcedureQueryController::updateRoomStatus($query->number, GlobalVariableController::$roomStatus['Dirty'], $userId);
                            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['DirtyRoom'],$query->number,'','SYSTEM','Dayend Closed','SYSTEM');
                        } else {
                            //VR to VC
                            if(GlobalVariableController::VRVCRoomStatus()){
                                ProcedureQueryController::updateRoomStatus($query->number, GlobalVariableController::$roomStatus['Clean'], $userId);
                                ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['CleanRoom'],$query->number,'','SYSTEM','Dayend Closed','SYSTEM');
                            }
                        }
                    }
                }
            }
        }

        public static function insertRoomStatistic($auditDate, $userId){
            $result = ProcedureQueryController::postGuestInHouse($auditDate, $userId);
            $result = ProcedureQueryController::postRoomUnavailableHistory($auditDate, $userId);
            $result = ProcedureQueryController::postRoomStatistic($auditDate);
            $result = ProcedureQueryController::postMarketStatistic($auditDate);
            $result = ProcedureQueryController::postFBStatistic($auditDate);
            $result = ProcedureQueryController::updateGuestInHouseComplimentHU(FormatController::incDay($auditDate,1), $userId);
            $result = ProcedureQueryController::processMemberPointExpire(FormatController::incDay($auditDate,1), $userId);
            $result = ProcedureQueryController::processVoucherExpire(FormatController::incDay($auditDate,1), $userId);

            return $result;
        }

    public function autoAssign(Request $request){
        $reservation= Reservation::select('reservation.guest_detail_id')->where('number',$request['number'])->first();
        if(!empty($reservation)){
            $id = $reservation->guest_detail_id;
            $roomNumber = HelperController::getRoomNumber($request['number'],true,true,true);
            ProcedureQueryController::updateRoomNumber($id,$roomNumber,$request['user_id']);
        }
    }

    public function getLastDayendClose(){
        $query= DB::table('audit_log')->select('posting_date')->orderBy('id','DESC')->first();
        if(!empty($query)){
            $query= $query->posting_date;
        } else {
            $query= '2020-01-01 00:00:00';
        }
        return response()->json($query);
    }

}
