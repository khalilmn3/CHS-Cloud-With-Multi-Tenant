<?php

namespace App\Http\Controllers\Folio;

use App\Configurations\Models\BedType;
use App\Configurations\Models\RoomRate;
use App\Configurations\Models\RoomRateBusinessSource;
use App\Folio\Models\Folio;
use App\Guest\Models\GuestDetail;
use App\Guest\Models\GuestProfile;
use App\Guest\Models\ContactPerson;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\ProcedureQueryController;
use Illuminate\Support\Carbon;
use DateTime;

class FolioController extends Controller
{
    public static function index(Request $request, $folioType, $folioStatus){
        $filterList = [
           'folio.number',
           'folio.reservation_number',
           'guest_detail.room_number',
           'room_type.name',
           'reservation.reservation_by',
			'CONCAT(contact_person.title_code, contact_person.full_name)', //5
            'guest_group.name',
            'room_rate.name',
            'company.name',
            'cfg_init_market.name',
            'TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code))', //10
            '(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END)',
            'const_folio_status.name',
            'cfg_init_guest_type.name',
            'folio.insert_by',
            'folio.check_out_by', //15
            'folio.cancel_by',
            'folio.user_id',
        ];
        $params = $request->all();
        $keyword = Arr::get($params, 'keyword','');
        $searchBy = Arr::get($params, 'searchBy','');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 18 && is_numeric($searchBy) ? $filterList[$searchBy] : '';
        $limit = Arr::get($params, 'limit',0);
        $date = Arr::get($params, 'date','');
        $folioStatus = is_array($folioStatus) ? $folioStatus : [$folioStatus];
        $folioType = is_array($folioType) ? $folioType : [$folioType];

        $totalBalance=Folio::select(
            DB::raw('ROUND(SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN IFNULL(sub_folio.amount, 0) ELSE "0" END) - SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN IFNULL(sub_folio.amount, 0) ELSE "0" END)) AS balance'))       ->leftJoin('guest_detail','folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_room','guest_detail.room_number', 'cfg_init_room.number')
            ->leftJoin('cfg_init_market','guest_detail.market_code', 'cfg_init_market.code')
            ->leftJoin('contact_person','folio.contact_person_id', 'contact_person.id')
            ->leftJoin('cfg_init_country', 'contact_person.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state', 'contact_person.state_code','cfg_init_state.code')
            ->leftJoin('cfg_init_nationality', 'contact_person.nationality_code', 'cfg_init_nationality.code')
            ->leftJoin('company' ,'contact_person.company_code', 'company.code')
            ->leftJoin('reservation' ,'folio.reservation_number', 'reservation.number')
            ->leftJoin('const_folio_type' ,'folio.type_code', 'const_folio_type.code')
            ->leftJoin('const_folio_status' ,'folio.status_code', 'const_folio_status.code')
            ->leftJoin('cfg_init_room_type as room_type', 'guest_detail.room_type_code', 'room_type.code')
            ->leftJoin('cfg_init_room_rate as room_rate', 'guest_detail.room_rate_code', 'room_rate.code')
            ->leftJoin('cfg_init_guest_type', 'contact_person.guest_type_code', 'cfg_init_guest_type.code')
            ->leftJoin('guest_group', 'folio.group_code', 'guest_group.code')
            ->leftJoin('sub_folio', function($query){
                $query->on('folio.number', 'sub_folio.folio_number')
                    ->where('sub_folio.void','0')
                    ->where('sub_folio.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode']);
            })
            ->where('folio.status_code', $folioStatus);

        $query = Folio::select(
            DB::raw('DATE(guest_detail.arrival) AS date_arrival'),
            DB::raw('DATE(guest_detail.departure) AS date_departure'),
            DB::raw('TIME(guest_detail.arrival) AS time_arrival'),
            DB::raw('TIME(guest_detail.departure) AS time_departure'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS FullName'),
            DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
            DB::raw('TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
            DB::raw('ROUND(SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN IFNULL(sub_folio.amount, 0) ELSE "0" END) - SUM(CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN IFNULL(sub_folio.amount, 0) ELSE "0" END)) AS balance'),
            'contact_person.full_name AS full_name',
            'guest_detail.room_number AS room_number',
            'guest_detail.bill_instruction',
            'reservation.number AS reservation_number',
            'room_type.name AS room_type',
            'folio.number AS folio_number',
            'folio.is_lock AS is_lock',
            'guest_detail.weekday_rate',
            'guest_detail.weekend_rate',
            'room_rate.name AS room_rate',
            'guest_detail.adult',
            'guest_detail.child',
            'guest_group.name as guest_group',
            'folio.voucher_number_ta',
            'folio.hk_note',
            'folio.notes',
            'folio.insert_by AS insert_by',
            'folio.check_out_by AS check_out_by',
            'folio.user_id as user_id',
            'const_folio_type.name as folio_type',
            'const_folio_status.name as folio_status',
            'cfg_init_guest_type.name as guest_type',
            'folio.type_code as folioType',
            'company.name as company',
            'cfg_init_market.name as market'
            )
            ->leftJoin('guest_detail','folio.guest_detail_id', 'guest_detail.id')
            ->leftJoin('cfg_init_market','guest_detail.market_code', 'cfg_init_market.code')
            ->leftJoin('cfg_init_room','guest_detail.room_number', 'cfg_init_room.number')
            ->leftJoin('contact_person','folio.contact_person_id', 'contact_person.id')
            ->leftJoin('cfg_init_country', 'contact_person.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state', 'contact_person.state_code','cfg_init_state.code')
            ->leftJoin('cfg_init_nationality', 'contact_person.nationality_code', 'cfg_init_nationality.code')
            ->leftJoin('company' ,'contact_person.company_code', 'company.code')
            ->leftJoin('reservation' ,'folio.reservation_number', 'reservation.number')
            ->leftJoin('const_folio_type' ,'folio.type_code', 'const_folio_type.code')
            ->leftJoin('const_folio_status' ,'folio.status_code', 'const_folio_status.code')
            ->leftJoin('cfg_init_guest_type', 'contact_person.guest_type_code', 'cfg_init_guest_type.code')
            ->leftJoin('cfg_init_room_type as room_type', 'guest_detail.room_type_code', 'room_type.code')
            ->leftJoin('cfg_init_room_rate as room_rate', 'guest_detail.room_rate_code', 'room_rate.code')
            ->leftJoin('guest_group', 'folio.group_code', 'guest_group.code')
            ->leftJoin('sub_folio', function($query){
                $query->on('folio.number', 'sub_folio.folio_number')
                    ->where('sub_folio.void','0')
                    ->where('sub_folio.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode']);
            })
            ->groupBy('folio.number')
            ->orderBy('guest_detail.departure','ASC')
            ->whereIn('folio.status_code', $folioStatus);

            if(count($folioType) > 0){
                $query->whereIn('folio.type_code', $folioType);

                $totalBalance->whereIn('folio.type_code', $folioType);
            }

            if(!empty($date)){
                $query->whereDate('guest_detail.departure', $date);

                $totalBalance->whereDate('guest_detail.departure', $date);
            }
            if(!empty($keyword) && !empty($searchBy)){
                $query->whereRaw($searchBy.' like "%'.$keyword.'%"');

                $totalBalance->whereRaw($searchBy.' like "%'.$keyword.'%"');
            }

        return [
            'data' => $query->limit($limit)->get(),
            'total' => $totalBalance->get()];
    }
    public static function store(Request $request, $folioType, $systemCode, $mode){
        $params = $request->all();
        $resvNumber = HelperController::ifNullInt(Arr::get($params,'reservation_number',0));
        $guestProfileId1 = Arr::get($params, 'guest_profile_id','');
        $contactPersonId = Arr::get($params, 'contact_person_id', '');
        $contactPersonId2 = Arr::get($params, 'contact_person_id2', '');
        $contactPersonId3 = Arr::get($params, 'contact_person_id3', '');
        $contactPersonId4 = Arr::get($params, 'contact_person_id4', '');
        $guestProfileId2 = Arr::get($params, 'guest_profile_id2','');
        $guestProfileId3 = Arr::get($params, 'guest_profile_id3','');
        $guestProfileId4 = Arr::get($params, 'guest_profile_id4','');
        $guestDetailId = Arr::get($params, 'guest_detail_id', '');
        $arrival = Arr::get($params,'arrival','');
        $departure = Arr::get($params,'departure','');
        $roomType = Arr::get($params,'room_type_code','');
        $bedType = Arr::get($params,'bed_type_code','');
        $roomNumber = HelperController::ifNull(Arr::get($params,'room_number',''));
        $adult = Arr::get($params,'adult',1);
        $child = Arr::get($params,'child',0);
        $businessSource = Arr::get($params,'business_source_code', '');
        $commissionType = Arr::get($params,'commission_type_code', '');
        $commissionValue = Arr::get($params,'commission_value', 0);
        $marketCode = Arr::get($params,'market_code', GlobalVariableController::defaultVariable(GlobalVariableController::$configurationName['DVMarket']));
        $bookingSource = Arr::get($params,'booking_source_code','');
        $roomRate = Arr::get($params,'room_rate_code','');
        $weekdayRate = Arr::get($params,'weekday_rate',0);
        $weekendRate = Arr::get($params,'weekend_rate',0);
        $discountPercent = Arr::get($params,'discount_percent','0');
        $discount = Arr::get($params,'discount','');
        $paymentType = Arr::get($params,'payment_type_code', GlobalVariableController::defaultVariable(GlobalVariableController::$configurationName['DVPaymentType']));
        $billInstruction = Arr::get($params,'bill_instruction','');
        $title = HelperController::ifNull(Arr::get($params,'title_code',''));
        $fullName = Arr::get($params,'full_name','');
        $street = HelperController::ifNull(Arr::get($params,'street',''));
        $country = HelperController::ifNull(Arr::get($params,'country_code',''));
        $state = HelperController::ifNull(Arr::get($params,'state_code',''));
        $cityCode = HelperController::ifNull(Arr::get($params,'city_code',''));
        $city = HelperController::ifNull(Arr::get($params,'city',''));
        $nationality = HelperController::ifNull(Arr::get($params,'nationality_code',''));
        $postal = HelperController::ifNull(Arr::get($params,'postal_code',''));
        $phone1 = HelperController::ifNull(Arr::get($params,'phone1',''));
        $phone2 = HelperController::ifNull(Arr::get($params,'phone2',''));
        $fax = HelperController::ifNull(Arr::get($params,'fax',''));
        $email = HelperController::ifNull(Arr::get($params,'email',''));
        $website = HelperController::ifNull(Arr::get($params,'website',''));
        $company = HelperController::ifNull(Arr::get($params,'company_code',''));
        $guestType = HelperController::ifNull(Arr::get($params,'guest_type_code',''));
        $idCard = HelperController::ifNull(Arr::get($params,'id_card_code',''));
        $idCardNumber = HelperController::ifNull(Arr::get($params,'id_card_number',''));
        $isMale = HelperController::trueFalse(Arr::get($params,'is_male','-1'));
        $birthPlace = HelperController::ifNull(Arr::get($params,'birth_place',''));
        $birthDate = HelperController::ifNull(Arr::get($params,'birth_date',''));
        $typeCode = Arr::get($params,'type_code', GlobalVariableController::$contactPersonType['Guest']);
        $customField01 = Arr::get($params,'custom_field01','');
        $customField02 = Arr::get($params,'custom_field02','');
        $customField03 = Arr::get($params,'custom_field03','');
        $customField04 = Arr::get($params,'custom_field04','');
        $customField05 = Arr::get($params,'custom_field05','');
        $customField06 = Arr::get($params,'custom_field06','');
        $customField07 = Arr::get($params,'custom_field07','');
        $customField08 = Arr::get($params,'custom_field08','');
        $customField09 = Arr::get($params,'custom_field09','');
        $customField10 = Arr::get($params,'custom_field10','');
        $customField11 = Arr::get($params,'custom_field11','');
        $customField12 = Arr::get($params,'custom_field12','');
        $customLookup01 = Arr::get($params,'custom_lookup_field_code01','');
        $customLookup02 = Arr::get($params,'custom_lookup_field_code02','');
        $customLookup03 = Arr::get($params,'custom_lookup_field_code03','');
        $customLookup04 = Arr::get($params,'custom_lookup_field_code04','');
        $customLookup05 = Arr::get($params,'custom_lookup_field_code05','');
        $customLookup06 = Arr::get($params,'custom_lookup_field_code06','');
        $customLookup07 = Arr::get($params,'custom_lookup_field_code07','');
        $customLookup08 = Arr::get($params,'custom_lookup_field_code08','');
        $customLookup09 = Arr::get($params,'custom_lookup_field_code09','');
        $customLookup10 = Arr::get($params,'custom_lookup_field_code10','');
        $customLookup11 = Arr::get($params,'custom_lookup_field_code11','');
        $customLookup12 = Arr::get($params,'custom_lookup_field_code12','');
        $customerCode = Arr::get($params,'customer_code','');
        $registrationDate = Carbon::now();
        $source = GlobalVariableController::$system['CakrasoftHotelSystem'];
        $memberCode = Arr::get($params,'member_code','');
        $currency = Arr::get($params,'currency_code',HelperController::getDefaultCurrency());
        $exchangeRate = Arr::get($params,'exchange_rate', HelperController::getExchangeRateCurrency($currency));
        $isConstantCurrency = HelperController::trueFalse(Arr::get($params,'is_constant_currency', '-1'));
        $reservationBy = Arr::get($params,'reservation_by','');
        $groupCode = Arr::get($params,'group_code','');
        $statusCode = Arr::get($params,'status_code', GlobalVariableController::$reservationStatus['New']);
        $isIncognito = HelperController::trueFalse(Arr::get($params,'is_incognito','0'));
        $marketing = Arr::get($params,'marketing_code','');
        $documentNumber = Arr::get($params,'document_number','');
        $voucherNumberTa = Arr::get($params,'voucher_number_ta','');
        $flightNumber =  Arr::get($params,'flight_number','');
        $flightArrival = Arr::get($params,'flight_arrival','');
        $flightDeparture = Arr::get($params,'flight_departure','');
        $notes = Arr::get($params,'notes','');
        $showNotes = HelperController::trueFalse(Arr::get($params,'show_notes','0'));
        $hkNote = Arr::get($params,'hk_note','');
        $auditDate = AuditLogController::auditDate();
        $bookingCode = Arr::get($params,'booking_code','');
        $otaId = Arr::get($params,'ota_id','');
        $cmResStatus = Arr::get($params,'cm_res_status','');

        if($mode == GlobalVariableController::$mode['Insert']){
            //CREATE GUEST DETAIL
            $guestDetailId = ProcedureQueryController::insertGuestDetail(FormatController::mergetDateW8TimeNow($arrival), $departure, $adult, $child, $roomType, $bedType, $roomNumber, $roomRate,
                $weekdayRate, $weekendRate, $discountPercent, $discount, $businessSource, $commissionType, $commissionValue, $paymentType,
                $marketCode, $bookingSource, $billInstruction, $request->user_id);
            //CREATE CONTACT PERSON
            $contactPersonId1 = ProcedureQueryController::insertContactPerson($title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,
                $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05,
                $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,
                $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $request->user_id);

            //CREATE GUEST PROFILE
            if(empty($guestProfileId1) && $folioType == GlobalVariableController::$folioType['GuestFolio']){
                $guestProfileId1 = ProcedureQueryController::insertGuestProfile($title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,
                    $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                    $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05,
                    $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                    $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,
                    $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12,
                    $customerCode, $registrationDate, $source, $request->user_id);
            }
            //CREATE FOLIO
                $folioNumber = ProcedureQueryController::insertFolio($folioType, '', $resvNumber, $contactPersonId1, $contactPersonId2, $contactPersonId3, $contactPersonId4,
                    $guestDetailId, $memberCode, $guestProfileId1, $guestProfileId2, $guestProfileId3, $guestProfileId4, $currency, $exchangeRate, $isConstantCurrency, $groupCode, 0,'',
                    GlobalVariableController::$folioTransferBy['NoTransfer'],'', $isIncognito, $marketing, $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture,
                    $notes, $showNotes, $hkNote, '-1', '0', $systemCode, $request->user_id);

            //update room status
            if ($folioType === GlobalVariableController::$folioType['GuestFolio']){
                ProcedureQueryController::updateRoomStatus($roomNumber, GlobalVariableController::$roomStatus['Clean'], $request->user_id);
            }

            //Log User
            $actionId = 0;
            if ($folioType === GlobalVariableController::$folioType['GuestFolio']){
                $actionId = GlobalVariableController::$logUserAction['WalkIn'];
            }
            else if ($folioType === GlobalVariableController::$folioType['MasterFolio']){
                $actionId = GlobalVariableController::$logUserAction['InsertMasterFolio'];
            }
            else if ($folioType === GlobalVariableController::$folioType['DeskFolio']){
                $actionId = GlobalVariableController::$logUserAction['InsertDeskFolio'];
            }

            if ($actionId !== 0){
                $logParams = ['actionId' => $actionId, 'link1' => $folioNumber, 'userid' => $params['user_id']];
                ProcedureQueryController::insertLogUserX($logParams);
            }

            return ['status' => 'create data successfully'];

        } else if ( $mode == GlobalVariableController::$mode['Update']){
                ProcedureQueryController::updateGuestDetail($guestDetailId, $arrival, $departure, $adult, $child, $roomType, $bedType, $roomNumber, $roomRate,
                    $weekdayRate, $weekendRate, $discountPercent, $discount, $businessSource, $commissionType, $commissionValue, $paymentType,
                    $marketCode, $bookingSource, $billInstruction);

                ProcedureQueryController::updateContactPerson($contactPersonId, $title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,
                    $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                    $birthDate, $customField01, $customField02, $customField03, $customField04, $customField05,
                    $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                    $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,
                    $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $request->user_id);

                ProcedureQueryController::updateGuestProfile($guestProfileId1, $title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,
                    $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                    $birthDate, $customField01, $customField02, $customField03, $customField04, $customField05,
                    $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                    $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,
                    $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12,
                        $registrationDate, $request->user_id);

                DB::select(
                    'CALL update_folio(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[
                        $request->number, $memberCode, $contactPersonId2, $contactPersonId3, $contactPersonId4,
                        $guestProfileId1, $guestProfileId2, $guestProfileId3, $guestProfileId4, $currency, $exchangeRate, $isConstantCurrency,'', $groupCode, $isIncognito,
                        $marketing, $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture, $notes, $showNotes, $hkNote, $request->user_id
                    ]);

            }

    }

    public static function edit($id){
        $mainTableName = 'folio';

        $query = Folio::select(
            $mainTableName.'.*', 'folio.number as folio_number', 'guest_detail.*', 'contact_person.*',
            'guest_detail.weekday_rate as room_rate_amount',
            'cfg_init_room.status_code as room_status',
            DB::raw('SUM((CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN sub_folio.amount ELSE 0 END) - (CASE WHEN sub_folio.type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN sub_folio.amount ELSE 0 END)) as balance'),
            DB::raw('CASE WHEN guest_detail.discount_percent="-1" then CONCAT(round(guest_detail.discount,1), "%") ELSE guest_detail.discount END AS discount_amount'),
            DB::raw('CASE WHEN guest_detail.discount_percent="-1" then guest_detail.weekday_rate - round(guest_detail.weekday_rate * guest_detail.discount / 100)
             ELSE guest_detail.weekday_rate - guest_detail.discount END AS room_charge'))
            ->leftJoin('guest_detail', $mainTableName.'.guest_detail_id', 'guest_detail.id')
            ->leftJoin('contact_person', $mainTableName.'.contact_person_id', 'contact_person.id')
            ->leftJoin('sub_folio', function($query){
                $query->on('folio.number', 'sub_folio.folio_number')
                    ->where('sub_folio.void','0')
                    ->where('sub_folio.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode']);
            })
            ->leftJoin('cfg_init_room', 'guest_detail.room_number', 'cfg_init_room.number')
            ->leftJoin('cfg_init_room_rate', 'guest_detail.room_rate_code', 'cfg_init_room_rate.code')
            ->where($mainTableName.'.number',$id)->first();

            $bed = BedType::select('cfg_init_bed_type.code','cfg_init_bed_type.name')
            ->rightJoin('cfg_init_room','cfg_init_bed_type.code','cfg_init_room.bed_type_code')
            ->groupBy('cfg_init_bed_type.code')->where('cfg_init_room.room_type_code',$query->room_type_code);

            $roomType = $query->room_type_code;
            $businessSource =  $query->business_source_code;
            $company = RoomRateBusinessSource::select('company_code','room_rate_code');
            $arrival =  $query->arrival;
            $departure =  $query->departure;
            $day_number = date('N', strtotime($arrival));
            $roomRate = RoomRate::select('code','name',DB::raw('IFNULL(business_source.company_code, 0) as business_source'))->whereDate('from_date','<=', $arrival)->whereDate('to_date','>=',$departure)
            ->leftJoinSub($company, 'business_source','cfg_init_room_rate.code','business_source.room_rate_code');

            if(empty($businessSource)){
                $roomRate->Where('business_source.company_code',null);
            }

            if(!empty($roomType)){
                $roomRate->where('room_type_code','like', '%'.$roomType.'%');
            }
            if($day_number <> 0){
                $roomRate->where('day'.$day_number, '-1');
            }

            return [
                'list' => $query,
                'bed_type' => $bed->get(),
                'room_rate' => $roomRate->orderBy('id_sort','ASC')->get()
            ];
    }

    public function folioStatus($id){
        $folio= Folio::select('folio.status_code','folio.type_code')->where('number',$id)->first();

        return response()->json($folio);
    }

}
