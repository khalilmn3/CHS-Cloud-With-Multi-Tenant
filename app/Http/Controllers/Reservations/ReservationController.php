<?php

namespace App\Http\Controllers\Reservations;

use App\Configurations\Models\Account;
use App\Configurations\Models\BedType;
use App\Configurations\Models\BookingSource;
use App\Configurations\Models\CardBank;
use App\Configurations\Models\CardType;
use App\Configurations\Models\City;
use App\Configurations\Models\CommissionType;
use App\Configurations\Models\Company;
use App\Configurations\Models\Country;
use App\Configurations\Models\CreditCardCharge;
use App\Configurations\Models\Currency;
use App\Configurations\Models\GuestTitle;
use App\Configurations\Models\GuestType;
use App\Configurations\Models\IDCardType;
use App\Configurations\Models\Market;
use App\Configurations\Models\Marketing;
use App\Configurations\Models\Member;
use App\Configurations\Models\Nationality;
use App\Configurations\Models\PaymentType;
use App\Configurations\Models\Room;
use App\Configurations\Models\RoomRate;
use App\Configurations\Models\RoomRateBusinessSource;
use App\Configurations\Models\RoomType;
use App\Configurations\Models\RoomUnavailable;
use App\Configurations\Models\RoomView;
use App\Configurations\Models\State;
use App\Configurations\Models\SubDepartment;
use App\Folio\Models\Folio;
use App\Folio\Models\SubFolio;
use App\Guest\Models\ContactPerson;
use App\Guest\Models\GuestDeposit;
use App\Guest\Models\GuestProfile;
use App\Guest\Models\GuestDetail;
use App\Reservation;
use App\Guest\Models\GuestGroup;
use App\Http\Controllers\AuditDateController;
use App\Http\Controllers\Configurations\ConfigurationController;
use App\Http\Controllers\Configurations\TaxServiceController;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Folio\SubFolioController;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\GuestDepositController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\Report\ReportController;
use App\Http\Controllers\ProcedureQueryController;
use App\Reservations\Models\ReservationExtraCharge;
use App\Reservations\Models\ReservationScheduledRate;
use Carbon\Carbon;
use DateTime;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use App\Http\Controllers\ServerDS\MethodController;
use App\Http\Controllers\ServerDS\MethodStringListController;
use Illuminate\Support\Facades\Date;

class ReservationController extends Controller
{
    protected $mainTableName = 'reservation';

    public function index(Request $request)
    {
        $search= $request->all();
        // using API
        if(GlobalVariableController::$useApiService){
            $data = MethodController::getAPI(MethodStringListController::$reservation['getReservation'], $search,'');

            return $data;
        }
        // using local DB
        $filterList =[
            'const_reservation_status.name',
            'reservation.reservation_by',
            'TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code))',
            'cfg_init_state.name',
            'cfg_init_country.name',
            '(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END)',
            'contact_person.fax',
            'reservation.document_number',
            'reservation.booking_code',
            'reservation.notes',
            'reservation.hk_note',
            'const_room_status.name',
            'reservation.insert_by',
            'reservation.cancel_by',
            'contact_person.full_name',
            'reservation.number',
            'guest_detail.room_number',
            'room_type.name',
            'bed_type.name',
            'room_rate.name',
            'reservation.voucher_number_ta',
            'guest_group.name',
            'company.name',
            'market.name',
            'bill_instruction',
            'reservation.user_id'
        ];

        $limit = Arr::get($search, 'limit', 100);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 26 ? $filterList[$searchBy] : '';
        $filter = Arr::get($search, 'filter','');
        $arrival = Arr::get($search, 'arrival', false);
        $departure =  Arr::get($search, 'departure', false);
        $dateFrom =  Arr::get($search, 'date_from', '');
        $dateTo =  Arr::get($search, 'date_to', '');
        $group =  Arr::get($search, 'group', '');
        $auditDate = AuditLogController::auditDate();

        $unavailable=DB::table('room_unavailable')
            ->select(
                'room_number',
                'from_date',
                'to_date',
                'status_code',
                'note',
                'id_log')
            ->where('from_date','<=',$auditDate)
            ->where('to_date','>=',$auditDate)
            ->groupBy('room_number');

        $folioStatus = DB::table('folio')
            ->select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id','guest_detail.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->groupBy('guest_detail.room_number');

        $constOtherIcon = DB::table('const_other_icon');
        $guestDeposit = GuestDeposit::select(
            'reservation_number',
            'type_code',
            'amount',
            DB::raw('ROUND(SUM(CASE WHEN type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN IFNULL(amount, 0) ELSE "0" END) - SUM(CASE WHEN type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN IFNULL(amount, 0) ELSE "0" END)) AS Deposit'))
            ->where('guest_deposit.void','0')
            ->where('guest_deposit.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode'])
            ->groupBy('reservation_number');
        $totalDeposit= Reservation::select(
            DB::raw('SUM(GuestDeposit.Deposit) as Deposit'),
            DB::raw('SUM(guest_detail.weekday_rate) as weekday_rate'),
            DB::raw('SUM(guest_detail.weekend_rate) as weekend_rate'),
            DB::raw('SUM(guest_detail.adult) as adult'),
            DB::raw('SUM(guest_detail.child) as child'))
            ->leftJoin('contact_person', $this->mainTableName.'.contact_person_id','contact_person.id')
            ->leftJoin('guest_detail', $this->mainTableName.'.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_country', 'contact_person.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state', 'contact_person.state_code','cfg_init_state.code')
            ->leftJoin('cfg_init_nationality', 'contact_person.nationality_code', 'cfg_init_nationality.code')
            ->leftJoin('cfg_init_guest_type', 'contact_person.guest_type_code','cfg_init_guest_type.code')
            ->leftJoin('company', 'contact_person.company_code', 'company.code')
            ->leftJoin('guest_group', $this->mainTableName.'.group_code','guest_group.code')
            ->leftJoin('cfg_init_market as market', 'guest_detail.market_code', 'market.code')
            ->leftJoin('cfg_init_room_type as room_type', 'guest_detail.room_type_code', 'room_type.code')
            ->leftJoin('cfg_init_room', 'guest_detail.room_number', 'cfg_init_room.number')
            ->leftJoin('cfg_init_bed_type as bed_type', 'guest_detail.bed_type_code', 'bed_type.code')
            ->leftJoin('cfg_init_room_rate as room_rate', 'guest_detail.room_rate_code','room_rate.code')
            ->leftJoin('const_guest_status', $this->mainTableName.'.status_code','const_guest_status.code')
            ->leftJoin('const_reservation_status', $this->mainTableName.'.status_code2','const_reservation_status.code')
            ->leftJoinSub($unavailable,'unavailable','cfg_init_room.number','unavailable.room_number')
            ->leftJoinSub($folioStatus, 'FolioStatus', function($join){
                    $join->on('guest_detail.room_number','FolioStatus.room_number');
            })
            ->joinSub($constOtherIcon, 'IconIncognito', function($join){
                $join->on('IconIncognito.code','IconIncognito.code')
                        ->where('IconIncognito.code','I');
            })
            ->joinSub($constOtherIcon, 'IconLock', function($join){
                $join->on('IconLock.code','IconLock.code')
                        ->where('IconLock.code','L');
            })
            ->joinSub($constOtherIcon, 'AllotmentLock', function($join){
                $join->on('AllotmentLock.code','AllotmentLock.code')
                        ->where('AllotmentLock.code','A');
            })
            ->joinSub($constOtherIcon, 'IconMember', function($join){
                $join->on('IconMember.code','IconMember.code')
                        ->where('IconMember.code','E');
            })
            ->leftJoin('const_room_status', function($join){
                $join->on(DB::raw('IF(IFNULL(FolioStatus.room_number,"")="", cfg_init_room.status_code, CONCAT("O",cfg_init_room.status_code))'),'const_room_status.code');
            })
            ->leftJoin('const_room_block_status', 'cfg_init_room.block_status_code','const_room_block_status.code')
            ->leftJoin('member', $this->mainTableName.'.guest_profile_id','member.guest_profile_id')
                ->leftJoinSub($guestDeposit, 'GuestDeposit', function($join){
                    $join->on($this->mainTableName.'.number','GuestDeposit.reservation_number');
                });

        $model = DB::table($this->mainTableName)
        ->select(
            $this->mainTableName.'.number as reservation_number',
            $this->mainTableName.'.guest_profile_id',
            $this->mainTableName.'.reservation_by',
            $this->mainTableName.'.group_code',
            $this->mainTableName.'.status_code',
            $this->mainTableName.'.status_code2',
            DB::raw('IF('.$this->mainTableName.'.is_incognito="-1", "IC", "") AS Incognito'),
            $this->mainTableName.'.document_number',
            $this->mainTableName.'.voucher_number_ta',
            $this->mainTableName.'.notes',
            $this->mainTableName.'.hk_note',
            $this->mainTableName.'.first_insert',
            $this->mainTableName.'.cancel_date',
            $this->mainTableName.'.cancel_by',
            $this->mainTableName.'.insert_by',
            $this->mainTableName.'.is_lock',
            $this->mainTableName.'.is_from_allotment',
            $this->mainTableName.'.booking_code',
            $this->mainTableName.'.user_id',
            DB::raw('contact_person.id AS ContactPersonID'),
            DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS FullName'),
            DB::raw('TRIM(CONCAT(contact_person.street, " ", contact_person.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
            DB::raw('cfg_init_state.name AS State'),
            DB::raw('cfg_init_country.name AS Country'),
            DB::raw('cfg_init_nationality.name AS Nationality'),
            DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
            'contact_person.fax',
            DB::raw('IFNULL(cfg_init_guest_type.color, 0) AS GuestTypeColor'),
            DB::raw('company.name AS Company'),
            DB::raw('guest_detail.id AS GuestDetailID'),
            'guest_detail.arrival',
            DB::raw('DATE(guest_detail.arrival) AS DateArrival'),
            DB::raw('TIME(guest_detail.arrival) AS TimeArrival'),
            'guest_detail.departure',
            DB::raw('DATE(guest_detail.departure) AS DateDeparture'),
            DB::raw('TIME(guest_detail.departure) AS TimeDeparture'),
            'guest_detail.adult',
            'guest_detail.child',
            'guest_detail.room_type_code',
            'guest_detail.bed_type_code',
            'guest_detail.room_number',
            'guest_detail.room_rate_code',
            'guest_detail.weekday_rate',
            'guest_detail.weekend_rate',
            'market.name as market',
            DB::raw('IF(guest_detail.discount_percent="-1", "%", "") AS DiscountPercent'),
            DB::raw('guest_detail.discount AS Discount'),
            DB::raw('IF((commission_type_code * 1)<= 4, "%", "") AS CommissionPercent'),
            DB::raw('guest_detail.commission_value AS CommissionValue'),
            DB::raw('guest_detail.bill_instruction AS BillInstruction'),
            DB::raw('guest_group.name AS GuestGroup'),
            DB::raw('CONCAT(room_type.name, " ", IFNULL(bed_type.name, "")) AS RoomType'),
            'cfg_init_room.name AS RoomName',
            'cfg_init_room.status_code AS room_status',
            DB::raw('room_rate.name AS RoomRate'),
            DB::raw('const_guest_status.name AS GuestStatus'),
            DB::raw('const_guest_status.id_sort AS IDSortGuestStatus'),
            DB::raw('const_reservation_status.name AS ReservationStatus'),
            'const_reservation_status.id_sort AS IDSortReservationStatus',
            DB::raw('IF(reservation.is_incognito="-1", IconIncognito.code, NULL) AS IncognitoIcon'),
            DB::raw('IF(reservation.is_lock="-1", IconLock.code, NULL) AS LockIcon'),
            DB::raw('IF(reservation.is_from_allotment="-1", AllotmentLock.code, NULL) AS AllotmentIcon'),
            DB::raw('IF(IFNULL(member.code,"")="", NULL, IconMember.code) AS MemberIcon'),
            // DB::raw('const_room_status.code AS RoomStatus'),
            DB::raw('IF(IFNULL(unavailable.status_code, "")<>"", unavailable.status_code, CONCAT(IF(IFNULL(FolioStatus.room_number, "") <> "", "O", "V"), cfg_init_room.status_code)) AS RoomStatus'),
            DB::raw('const_room_status.id_sort AS IDSortRoomStatus'),
            DB::raw('IFNULL(const_room_block_status.code, "") AS RoomBlockedStatus'),
            DB::raw('SUM(CASE WHEN guest_deposit.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN IFNULL(guest_deposit.amount, 0) ELSE -IFNULL(guest_deposit.amount, 0) END) AS Deposit'))
            ->leftJoin('contact_person', $this->mainTableName.'.contact_person_id','contact_person.id')
            ->leftJoin('guest_detail', $this->mainTableName.'.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_country', 'contact_person.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state', 'contact_person.state_code','cfg_init_state.code')
            ->leftJoin('cfg_init_nationality', 'contact_person.nationality_code', 'cfg_init_nationality.code')
            ->leftJoin('cfg_init_guest_type', 'contact_person.guest_type_code','cfg_init_guest_type.code')
            ->leftJoin('company', 'contact_person.company_code', 'company.code')
            ->leftJoin('guest_group', $this->mainTableName.'.group_code','guest_group.code')
            ->leftJoin('cfg_init_room_type as room_type', 'guest_detail.room_type_code', 'room_type.code')
            ->leftJoin('cfg_init_market as market', 'guest_detail.market_code', 'market.code')
            ->leftJoin('cfg_init_room', 'guest_detail.room_number', 'cfg_init_room.number')
            ->leftJoin('cfg_init_bed_type as bed_type', 'guest_detail.bed_type_code', 'bed_type.code')
            ->leftJoin('cfg_init_room_rate as room_rate', 'guest_detail.room_rate_code','room_rate.code')
            ->leftJoin('const_guest_status', $this->mainTableName.'.status_code','const_guest_status.code')
            ->leftJoin('const_reservation_status', $this->mainTableName.'.status_code2','const_reservation_status.code')
            ->leftJoinSub($unavailable,'unavailable','cfg_init_room.number','unavailable.room_number')
            ->leftJoinSub($folioStatus, 'FolioStatus', function($join){
                    $join->on('guest_detail.room_number','FolioStatus.room_number');
            })
            ->joinSub($constOtherIcon, 'IconIncognito', function($join){
                $join->on('IconIncognito.code','IconIncognito.code')
                        ->where('IconIncognito.code','I');
            })
            ->joinSub($constOtherIcon, 'IconLock', function($join){
                $join->on('IconLock.code','IconLock.code')
                        ->where('IconLock.code','L');
            })
            ->joinSub($constOtherIcon, 'AllotmentLock', function($join){
                $join->on('AllotmentLock.code','AllotmentLock.code')
                        ->where('AllotmentLock.code','A');
            })
            ->joinSub($constOtherIcon, 'IconMember', function($join){
                $join->on('IconMember.code','IconMember.code')
                        ->where('IconMember.code','E');
            })
            ->leftJoin('const_room_status', function($join){
                $join->on(DB::raw('IF(IFNULL(FolioStatus.room_number,"")="", cfg_init_room.status_code, CONCAT("O",cfg_init_room.status_code))'),'const_room_status.code');
            })
            ->leftJoin('const_room_block_status', 'cfg_init_room.block_status_code','const_room_block_status.code')
            ->leftJoin('member', $this->mainTableName.'.guest_profile_id','member.guest_profile_id')
            ->leftJoin('guest_deposit', function($join){
                $join->on($this->mainTableName.'.number','guest_deposit.reservation_number')
                        ->where('guest_deposit.void','0')
                        ->where('guest_deposit.system_code',GlobalVariableController::$constProgramVariable['DefaultSystemCode']);
            })

        ->groupBy($this->mainTableName.'.number')
        ->orderBy(DB::raw('IFNULL(cfg_init_room.id_sort, 0)', 'guest_detail.room_number'));
        if(empty($group)){
            if (!empty($filter) && $filter != 'All'){
                $model->where($this->mainTableName.'.status_code','like','%'.$filter.'%');
                if(!empty($keyword) && !empty($searchBy)){
                    $model->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
                }

                $totalDeposit->where($this->mainTableName.'.status_code','like','%'.$filter.'%');
                if(!empty($keyword) && !empty($searchBy)){
                    $totalDeposit->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
                }
            } else {
                if(!empty($keyword) && !empty($searchBy)){
                    $model->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
                }

                if(!empty($keyword) && !empty($searchBy)){
                    $totalDeposit->whereRaw($searchBy.' LIKE "%'.$keyword.'%"');
                }
            }
        } else {
            // $model->WhereDate('guest_detail.arrival', AuditDateController::index())->where($this->mainTableName.'.status_code','N')->WhereDate('guest_detail.departure','!=', AuditDateController::index());
            $model->where($this->mainTableName.'.status_code','N');

            $totalDeposit->where($this->mainTableName.'.status_code','N');
        }

        if(!empty($dateFrom)){
            $model->whereDate('guest_detail.arrival','>=',$dateFrom);

            $totalDeposit->whereDate('guest_detail.arrival','>=',$dateFrom);
        }
        if(!empty($dateTo)){
            $model->whereDate('guest_detail.departure','<=', $dateTo);

            $totalDeposit->whereDate('guest_detail.departure','<=', $dateTo);
        }


        if(!empty($group)){
            $model->where($this->mainTableName.'.group_code', $group);

            $totalDeposit->where($this->mainTableName.'.group_code', $group);
        }

        return response()->json([
            'data' => $model->limit($limit)->get(),
            'total' => $totalDeposit->limit($limit)->get() ]);
    }

    public function store(Request $request)
    {
        $params =$request->all();
        // using API
        if(GlobalVariableController::$useApiService){
            $params['reservation_number']= 0;
            $params['folio_number']= 0;
            $params['guest_detail_id']= Arr::get($params, 'guest_detail_id','');
            $params['contact_person_id']= Arr::get($params, 'contact_person_id','');
            $params['status_code']= 'N';
            $params['purpose_of']= Arr::get($params, 'purpose_of','');
            $params['cm_res_status']= Arr::get($params, 'cm_res_status','');
            $params['guest_profile_id']= Arr::get($params, 'guest_profile_id','');
            $params['arrival'] = Arr::get($params,'arrival','');
            $params['departure'] = Arr::get($params,'departure','');
            $params['room_type_code'] = Arr::get($params,'room_type_code','');
            $params['bed_type_code'] = Arr::get($params,'bed_type_code','');
            $params['room_number'] = HelperController::ifNull(Arr::get($params,'room_number',''));
            $params['adult'] = Arr::get($params,'adult',1);
            $params['child'] = Arr::get($params,'child',0);
            $params['business_source_code'] = Arr::get($params,'business_source_code', '');
            $params['commission_type_code'] = Arr::get($params,'commission_type_code', '');
            $params['commission_value'] = Arr::get($params,'commission_value', 0);
            $params['market_code'] = Arr::get($params,'market_code','');
            $params['booking_source_code'] = Arr::get($params,'booking_source_code','');
            $params['room_rate_code'] = Arr::get($params,'room_rate_code','');
            $params['weekday_rate'] = Arr::get($params,'weekday_rate',0);
            $params['weekend_rate'] = Arr::get($params,'weekend_rate',0);
            $params['discount_percent'] = Arr::get($params,'discount_percent','0');
            $params['discount'] = Arr::get($params,'discount','');
            $params['payment_type_code'] = Arr::get($params,'payment_type_code','');
            $params['bill_instruction'] = Arr::get($params,'bill_instruction','');
            $params['title_code'] = HelperController::ifNull(Arr::get($params,'title_code',''));
            $params['full_name'] = Arr::get($params,'full_name','');
            $params['street'] = HelperController::ifNull(Arr::get($params,'street',''));
            $params['country_code'] = HelperController::ifNull(Arr::get($params,'country_code',''));
            $params['state_code'] = HelperController::ifNull(Arr::get($params,'state_code',''));
            $params['city_code'] = HelperController::ifNull(Arr::get($params,'city_code',''));
            $params['city'] = HelperController::ifNull(Arr::get($params,'city',''));
            $params['nationality_code'] = HelperController::ifNull(Arr::get($params,'nationality_code',''));
            $params['postal_code'] = HelperController::ifNull(Arr::get($params,'postal_code',''));
            $params['phone1'] = HelperController::ifNull(Arr::get($params,'phone1',''));
            $params['phone2'] = HelperController::ifNull(Arr::get($params,'phone2',''));
            $params['fax'] = HelperController::ifNull(Arr::get($params,'fax',''));
            $params['email'] = HelperController::ifNull(Arr::get($params,'email',''));
            $params['website'] = HelperController::ifNull(Arr::get($params,'website',''));
            $params['company_code'] = HelperController::ifNull(Arr::get($params,'company_code',''));
            $params['guest_type_code'] = HelperController::ifNull(Arr::get($params,'guest_type_code',''));
            $params['id_card_code'] = HelperController::ifNull(Arr::get($params,'id_card_code',''));
            $params['id_card_number'] = HelperController::ifNull(Arr::get($params,'id_card_number',''));
            $params['is_male'] = HelperController::trueFalse(Arr::get($params,'is_male','-1'));
            $params['birth_place'] = HelperController::ifNull(Arr::get($params,'birth_place',''));
            $params['birth_date'] = FormatController::formatDate(Arr::get($params,'birth_date',''));
            $params['type_code'] = Arr::get($params,'type_code', GlobalVariableController::$contactPersonType['Guest']);
            $params['custom_field01'] = Arr::get($params,'custom_field01','');
            $params['custom_field02'] = Arr::get($params,'custom_field02','');
            $params['custom_field03'] = Arr::get($params,'custom_field03','');
            $params['custom_field04'] = Arr::get($params,'custom_field04','');
            $params['custom_field05'] = Arr::get($params,'custom_field05','');
            $params['custom_field06'] = Arr::get($params,'custom_field06','');
            $params['custom_field07'] = Arr::get($params,'custom_field07','');
            $params['custom_field08'] = Arr::get($params,'custom_field08','');
            $params['custom_field09'] = Arr::get($params,'custom_field09','');
            $params['custom_field10'] = Arr::get($params,'custom_field10','');
            $params['custom_field11'] = Arr::get($params,'custom_field11','');
            $params['custom_field12'] = Arr::get($params,'custom_field12','');
            $params['custom_lookup_field_code01'] = Arr::get($params,'custom_lookup_field_code01','');
            $params['custom_lookup_field_code02'] = Arr::get($params,'custom_lookup_field_code02','');
            $params['custom_lookup_field_code03'] = Arr::get($params,'custom_lookup_field_code03','');
            $params['custom_lookup_field_code04'] = Arr::get($params,'custom_lookup_field_code04','');
            $params['custom_lookup_field_code05'] = Arr::get($params,'custom_lookup_field_code05','');
            $params['custom_lookup_field_code06'] = Arr::get($params,'custom_lookup_field_code06','');
            $params['custom_lookup_field_code07'] = Arr::get($params,'custom_lookup_field_code07','');
            $params['custom_lookup_field_code08'] = Arr::get($params,'custom_lookup_field_code08','');
            $params['custom_lookup_field_code09'] = Arr::get($params,'custom_lookup_field_code09','');
            $params['custom_lookup_field_code10'] = Arr::get($params,'custom_lookup_field_code10','');
            $params['custom_lookup_field_code11'] = Arr::get($params,'custom_lookup_field_code11','');
            $params['custom_lookup_field_code12'] = Arr::get($params,'custom_lookup_field_code12','');
            $params['customer_code'] = Arr::get($params,'customer_code','');
            $params['member_code'] = Arr::get($params,'member_code','');
            $params['currency_code'] = Arr::get($params,'currency_code','IDR');
            $params['exchange_rate'] = Arr::get($params,'exchange_rate',1);
            $params['is_constant_currency'] = HelperController::trueFalse(Arr::get($params,'is_constant_currency', '-1'));
            $params['reservation_by'] = Arr::get($params,'reservation_by','');
            $params['group_code'] = Arr::get($params,'group_code','');
            $params['is_incognito'] = HelperController::trueFalse(Arr::get($params,'is_incognito',''));
            $params['marketing_code'] = Arr::get($params,'marketing_code','');
            $params['document_number'] = Arr::get($params,'document_number','');
            $params['voucher_number_ta'] = Arr::get($params,'voucher_number_ta','');
            $params['flight_number'] =  Arr::get($params,'flight_number','');
            $params['flight_arrival'] = FormatController::formatDateTime(Arr::get($params,'flight_arrival',''));
            $params['flight_departure'] = FormatController::formatDateTime(Arr::get($params,'flight_departure',''));
            $params['notes'] = Arr::get($params,'notes','');
            $params['show_notes'] = HelperController::trueFalse(Arr::get($params,'show_notes','0'));
            $params['hk_note'] = Arr::get($params,'hk_note','');
            $params['booking_code'] = Arr::get($params,'booking_code','');
            $params['ota_id'] = Arr::get($params,'ota_id','');
            $params['wait_list'] = Arr::get($params,'wait_list',0);

            $data = MethodController::postAPI(MethodStringListController::$reservation['saveReservation'], $params,'0');

            if($data->status == 0){

            }

            return $data;
        }
        // using local DB
        $guestProfileId1= Arr::get($params, 'guest_profile_id','');
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
        $marketCode = Arr::get($params,'market_code','');
        $bookingSource = Arr::get($params,'booking_source_code','');
        $roomRate = Arr::get($params,'room_rate_code','');
        $weekdayRate = Arr::get($params,'weekday_rate',0);
        $weekendRate = Arr::get($params,'weekend_rate',0);
        $discountPercent = Arr::get($params,'discount_percent','0');
        $discount = Arr::get($params,'discount','');
        $paymentType = Arr::get($params,'payment_type_code','');
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
        $currency = Arr::get($params,'currency_code','IDR');
        $exchangeRate = Arr::get($params,'exchange_rate',1);
        $isConstantCurrency = HelperController::trueFalse(Arr::get($params,'is_constant_currency', '-1'));
        $reservationBy = Arr::get($params,'reservation_by','');
        $groupCode = Arr::get($params,'group_code','');
        $statusCode = GlobalVariableController::$reservationStatus['New'];
        $isIncognito = HelperController::trueFalse(Arr::get($params,'is_incognito',''));
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

        if(!empty($roomNumber)){
            $isRoomAvailable2 = HelperController::isRoomAvailable($roomNumber, $arrival, $departure, 0, 0, 0, 0, false, false);
        } else {
            $isRoomAvailable2 = true;
        }

        if(FormatController::formatDate($request['arrival']) < FormatController::formatDate(AuditLogController::auditDate())){
            return response()->json([
                'number' => '',
                'status' => 3
            ]);
        }
        else if(FormatController::formatDate($request['departure']) <= FormatController::formatDate($request['arrival'])){
            return response()->json([
                'number' => '',
                'status' => 4
            ]);
        }
        else if (intval(HelperController::getAvailableRoomCountByType($roomType, $bedType, $arrival, $departure, 0, 0, 0, 0, false, false)) <= 0){
            return response()->json([
                'number' => '',
                'status' => 1
            ]);
        } else if (!$isRoomAvailable2) {
            return response()->json([
                'number' => '',
                'status' => 1
            ]);
        }
        else{
            $guestDetailId = ProcedureQueryController::insertGuestDetail($arrival, $departure, $adult, $child, $roomType, $bedType, $roomNumber, $roomRate,
                $weekdayRate, $weekendRate, $discountPercent, $discount, $businessSource, $commissionType, $commissionValue, $paymentType,
                $marketCode, $bookingSource, $billInstruction, $params['user_id']);

            $contactPersonId1 = ProcedureQueryController::insertContactPerson($title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,$phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05,$customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,$customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $params['user_id']);

            if(empty($guestProfileId1)){
                $guestProfileId1 = ProcedureQueryController::insertGuestProfile( $title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,$phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                    $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05,$customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                    $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,$customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $customerCode, $registrationDate, $source, $params['user_id']);
            }
            $contactPersonId2 = '';
            $contactPersonId3 = '';
            $contactPersonId4 = '';

            $guestProfileId2  = '';
            $guestProfileId3  = '';
            $guestProfileId4  = '';

            if(!empty($guestDetailId) && !empty($contactPersonId1) && !empty($guestProfileId1)){
                ProcedureQueryController::insertReservation($contactPersonId1, $contactPersonId2, $contactPersonId3, $contactPersonId4, $guestDetailId, $memberCode, $guestProfileId1, $guestProfileId2,
                    $guestProfileId3, $guestProfileId4, $currency, $exchangeRate, $isConstantCurrency, $reservationBy, $groupCode, $statusCode, $isIncognito, $marketing,
                    $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture, $notes, $showNotes, $hkNote, $auditDate, '0', $bookingCode,
                    $otaId, '', $params['user_id']);

                $resvNumber= Reservation::select('number')->where('user_id',$params['user_id'])->orderBy('number', 'DESC')->first()->number;
            }

            return response()->json([
                'number' => $resvNumber,
                'status' => 0
            ]);

        }
    }

    public function insertReservationGroup(Request $request){
        $datas = $request->all();

        $countSuccess = 0;
        $countFailed = 0;
        foreach ($datas as $data){
            $params = $data;

            $guestProfileId1= Arr::get($params, 'guest_profile_id','');
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
            $marketCode = Arr::get($params,'market_code','');
            $bookingSource = Arr::get($params,'booking_source_code','');
            $roomRate = Arr::get($params,'room_rate_code','');
            $weekdayRate = Arr::get($params,'weekday_rate',0);
            $weekendRate = Arr::get($params,'weekend_rate',0);
            $discountPercent = Arr::get($params,'discount_percent','0');
            $discount = Arr::get($params,'discount','');
            $paymentType = Arr::get($params,'payment_type_code','');
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
            $currency = Arr::get($params,'currency_code','IDR');
            $exchangeRate = Arr::get($params,'exchange_rate',1);
            $isConstantCurrency = HelperController::trueFalse(Arr::get($params,'is_constant_currency', '-1'));
            $reservationBy = Arr::get($params,'reservation_by','');
            $groupCode = Arr::get($params,'group_code','');
            $statusCode = Arr::get($params,'status_code', GlobalVariableController::$reservationStatus['New']);
            $isIncognito = HelperController::trueFalse(Arr::get($params,'is_incognito',''));
            $marketing = Arr::get($params,'marketing_code','');
            $documentNumber = Arr::get($params,'document_number','');
            $voucherNumberTa = Arr::get($params,'voucher_number_ta','');
            $flightNumber =  Arr::get($params,'flight_number','');
            $flightArrival = Arr::get($params,'flight_arrival','');
            $flightDeparture = Arr::get($params,'flight_departure','');
            $notes = Arr::get($params,'notes','');
            $showNotes = HelperController::trueFalse(Arr::get($params,'show_notes','0'));
            $hkNote = Arr::get($params,'hk_note','');
            $auditDate = Arr::get($params,'audit_date','');
            $bookingCode = Arr::get($params,'booking_code','');
            $otaId = Arr::get($params,'ota_id','');
            $cmResStatus = Arr::get($params,'cm_res_status','');
            $rooms = Arr::get($params,'rooms',0);
            $count = 0;
            for($x=0; $x < $rooms; $x++){
                if(FormatController::formatDate($arrival) < FormatController::formatDate(AuditLogController::auditDate())){
                    $countFailed += 1;
                }
                else if(FormatController::formatDate($departure) <= FormatController::formatDate($arrival)){
                    $countFailed += 1;
                }
                else if (intval(HelperController::getAvailableRoomCountByType($roomType, $bedType, $arrival, $departure, 0, 0, 0, 0, false, false)) <= 0){
                    $countFailed += 1;
                }
                else
                {
                    ProcedureQueryController::insertGuestDetail($arrival, $departure, $adult, $child, $roomType, $bedType, $roomNumber, $roomRate,
                        $weekdayRate, $weekendRate, $discountPercent, $discount, $businessSource, $commissionType, $commissionValue, $paymentType,
                        $marketCode, $bookingSource, $billInstruction, $params['user_id']);

                    ProcedureQueryController::insertContactPerson($title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,$phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                        $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05,$customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                        $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,$customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $params['user_id']);

                    if(empty($guestProfileId1)){
                        ProcedureQueryController::insertGuestProfile( $title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,$phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                        $birthDate, $typeCode, $customField01, $customField02, $customField03, $customField04, $customField05,$customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                        $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,$customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $customerCode, $registrationDate, $source, $params['user_id']);

                        $guestProfileId1 = GuestProfile::select('id_log')->where('user_id',$params['user_id'])->orderBy('id_log', 'DESC')->first()->id_log;
                    }

                    $guestDetailId = GuestDetail::select('id')->where('user_id', $params['user_id'])->orderBy('id','DESC')->first()->id;
                    $contactPersonId1 = ContactPerson::select('id')->where('user_id', $params['user_id'])->orderBy('id','DESC')->first()->id;
                    $contactPersonId2 = '';
                    $contactPersonId3 = '';
                    $contactPersonId4 = '';
                    $guestProfileId2  = '';
                    $guestProfileId3  = '';
                    $guestProfileId4  = '';

                    if(!empty($guestDetailId) && !empty($contactPersonId1) && !empty($guestProfileId1)){
                        ProcedureQueryController::insertReservation($contactPersonId1, $contactPersonId2, $contactPersonId3, $contactPersonId4, $guestDetailId, $memberCode, $guestProfileId1, $guestProfileId2,
                                $guestProfileId3, $guestProfileId4, $currency, $exchangeRate, $isConstantCurrency, $reservationBy, $groupCode, $statusCode, $isIncognito, $marketing,
                                $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture, $notes, $showNotes, $hkNote, $auditDate, '0', $bookingCode,
                                $otaId, '', $params['user_id']);
                    }
                    $countSuccess += 1;
                }
                $count += 1;
            }
        }

        return response()->json([
            'countSuccess' => $countSuccess,
            'countFailed' => $countFailed,
        ]);
    }

    public function edit($id)
    {
        // using API
        if(GlobalVariableController::$useApiService){
            $data = MethodController::getAPI(MethodStringListController::$reservation['editReservation'], '',$id);

            return $data;
        }
        // using local DB
        $mainTableName = 'reservation';

        $reservation = Reservation::select(
            $mainTableName.'.*', 'guest_detail.*', 'contact_person.*', 'cfg_init_room.status_code as room_status', 'reservation.number as reservation_number',
            DB::raw('ROUND(guest_detail.weekday_rate,3) as weekday_rate'),
            DB::raw('ROUND(guest_detail.weekend_rate,3) as weekend_rate'),
            DB::raw('SUM((CASE WHEN guest_deposit.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN guest_deposit.amount ELSE 0 END) - (CASE WHEN guest_deposit.type_code="'.GlobalVariableController::$transactionType['Credit'].'" THEN guest_deposit.amount ELSE 0 END)) as balance')
            )
            ->leftJoin('guest_detail', $mainTableName.'.guest_detail_id', 'guest_detail.id')
            ->leftJoin('contact_person', $mainTableName.'.contact_person_id', 'contact_person.id')
            ->leftJoin('guest_deposit', $mainTableName.'.number', 'guest_deposit.reservation_number')
            ->leftJoin('cfg_init_room', 'guest_detail.room_number', 'cfg_init_room.number')
            ->where($mainTableName.'.number',$id)->first();

            $bed = BedType::select('cfg_init_bed_type.code','cfg_init_bed_type.name')
            ->rightJoin('cfg_init_room','cfg_init_bed_type.code','cfg_init_room.bed_type_code')
            ->groupBy('cfg_init_bed_type.code')->where('cfg_init_room.room_type_code',$reservation->room_type_code);

            $roomType = $reservation->room_type_code;
            $businessSource =  $reservation->business_source_code;
            $company = RoomRateBusinessSource::select('company_code','room_rate_code');
            $arrival =  $reservation->arrival;
            $departure =  $reservation->departure;
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

            return response()->json([
                'reservation' => $reservation,
                'bed_type' => $bed->get(),
                'room_rate' => $roomRate->orderBy('id_sort','ASC')->get(),
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $params =$request->all();
        // using API
        if(GlobalVariableController::$useApiService){
            $params['folio_number']= Arr::get($params, 'folio_number', 0);
            $params['birth_date']= FormatController::formatDate(Arr::get($params, 'birth_date', ''));
            $params['flight_arrival']= FormatController::formatDateTime(Arr::get($params,'flight_arrival',''));
            $params['flight_departure']= FormatController::formatDateTime(Arr::get($params,'flight_departure',''));
            $params['commission_type_code']=Arr::get($params,'commission_type_code', '');
            $params['purpose_of']=Arr::get($params,'purpose_of', '');
            $data = MethodController::postAPI(MethodStringListController::$reservation['saveReservation'], $params,'1');

            return $data;
        }
        // using local DB
        $resvNumber= Arr::get($params, 'reservation_number', '');
        $guestDetailId= Arr::get($params, 'guest_detail_id', '');
        $contactPersonId= Arr::get($params, 'contact_person_id', '');
        $guestProfileId1= Arr::get($params, 'guest_profile_id','');
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
        $marketCode = Arr::get($params,'market_code','');
        $bookingSource = Arr::get($params,'booking_source_code','');
        $roomRate = Arr::get($params,'room_rate_code','');
        $weekdayRate = Arr::get($params,'weekday_rate',0);
        $weekendRate = Arr::get($params,'weekend_rate',0);
        $discountPercent = Arr::get($params,'discount_percent','0');
        $discount = Arr::get($params,'discount','');
        $paymentType = Arr::get($params,'payment_type_code','');
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
        $exchangeRate = HelperController::getExchangeRateCurrency($currency);
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

        $isNew = Reservation::select('number')
            ->whereIn('status_code',[GlobalVariableController::$reservationStatus['New'],GlobalVariableController::$reservationStatus['WaitList']])
            ->where('number',$resvNumber)->first();
        if(FormatController::formatDate($request['arrival']) >= FormatController::formatDate(AuditLogController::auditDate())){
            if(FormatController::formatDate($request['departure']) > FormatController::formatDate($request['arrival'])){
                if(!empty($isNew)){
                    // $isRoomAvailable = HelperController::isRoomNumberAvailable($roomType, $bedType, $arrival, $departure,$resvNumber,'','','',false,$roomNumber,false,true,false);
                    $isRoomAvailable = intval(HelperController::getAvailableRoomCountByType($roomType, $bedType, $arrival, $departure, $resvNumber, 0, 0, 0, false, false));

                    // if(FormatController::formatDate($request['arrival']) >= FormatController::formatDate(AuditLogController::auditDate())){
                        if($isRoomAvailable > 0){
                            if(!empty($roomNumber)){
                                $isRoomAvailable2 = HelperController::isRoomAvailable($roomNumber, $arrival, $departure,$resvNumber, 0, 0, 0, false, false);
                            } else {
                                $isRoomAvailable2 = true;
                            }
                            if($isRoomAvailable2){
                                ProcedureQueryController::updateGuestDetail($guestDetailId, $arrival, $departure, $adult, $child, $roomType, $bedType, $roomNumber, $roomRate, $weekdayRate, $weekendRate,
                                $discountPercent, $discount, $businessSource, $commissionType, $commissionValue, $paymentType, $marketCode, $bookingSource, $billInstruction);

                                ProcedureQueryController::updateContactPerson($contactPersonId, $title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1, $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace,
                                    $birthDate, $customField01, $customField02, $customField03, $customField04, $customField05, $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01,
                                    $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06, $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $params['user_id']);


                                ProcedureQueryController::updateGuestProfile($guestProfileId1, $title, $fullName, $street, $country, $state, $cityCode, $city, $nationality, $postal, $phone1,
                                    $phone2, $fax, $email, $website, $company, $guestType, $idCard, $idCardNumber, $isMale, $birthPlace, $birthDate, $customField01, $customField02, $customField03, $customField04, $customField05,
                                    $customField06, $customField07, $customField08, $customField09, $customField10, $customField11, $customField12, $customLookup01, $customLookup02, $customLookup03, $customLookup04, $customLookup05, $customLookup06,
                                    $customLookup07, $customLookup08, $customLookup09, $customLookup10, $customLookup11, $customLookup12, $registrationDate, $params['user_id']);


                                DB::select(
                                    'CALL update_reservation_contact_person_id(?,?,?)',[
                                        $resvNumber, $contactPersonId, $params['user_id']
                                    ]);

                                    $contactPersonId2 = '';
                                    $contactPersonId3 = '';
                                    $contactPersonId4 = '';
                                    $guestProfileId2  = '';
                                    $guestProfileId3  = '';
                                    $guestProfileId4  = '';

                                if(!empty($guestDetailId) && !empty($contactPersonId) && !empty($guestProfileId1)){
                                    ProcedureQueryController::updateReservation($resvNumber, $memberCode, $contactPersonId2, $contactPersonId3, $contactPersonId4, $guestProfileId1, $guestProfileId2,
                                        $guestProfileId3, $guestProfileId4, $currency, $exchangeRate, $isConstantCurrency, $reservationBy, $groupCode, $statusCode, $isIncognito, $marketing,
                                        $documentNumber, $voucherNumberTa, $flightNumber, $flightArrival, $flightDeparture, $notes, $showNotes, $hkNote, $otaId, '', $params['user_id']);
                                }
                                return response()->json([
                                    'number' => $resvNumber,
                                    'status' => 0
                                ]);
                            } else {
                                return response()->json([
                                'number' => '',
                                'status' => 1
                                ]);
                            }
                        } else {
                            return response()->json([
                                'number' => '',
                                'status' => 1
                            ]);
                        }
                } else {
                    return response()->json([
                        'number' => '',
                        'status' => 2
                    ]);
                }
            } else {
                return response()->json([
                    'number' => '',
                    'status' => 4
                ]);
            }
        } else {
            return response()->json([
                'number' => '',
                'status' => 3
            ]);
        }


        return response()->json($resvNumber);
    }

    public function cancel(Request $request){
        $params =$request->all();
        // using API
        if(GlobalVariableController::$useApiService){
            // $params['folio_number']= Arr::get($params, 'folio_number', 0);
            // $params['birth_date']= FormatController::formatDate(Arr::get($params, 'birth_date', ''));
            // $params['flight_arrival']= FormatController::formatDateTime(Arr::get($params,'flight_arrival',''));
            // $params['flight_departure']= FormatController::formatDateTime(Arr::get($params,'flight_departure',''));
            // $params['commission_type_code']=Arr::get($params,'commission_type_code', '');
            // $params['purpose_of']=Arr::get($params,'purpose_of', '');
            $data = MethodController::postAPI(MethodStringListController::$reservation['cancelReservation'], $params,$params['reservation_number']);

            return $data;
        }
        // using local DB
        $reservation = Reservation::select('status_code')->where('number',$params['reservation_number'])->first();
        if(!empty($reservation)){
            if($reservation->status_code == GlobalVariableController::$reservationStatus['New'] || $reservation->status_code == GlobalVariableController::$reservationStatus['WaitList']){
                ProcedureQueryController::cancelReservation($params['reservation_number'], $params['status_code'], AuditLogController::auditDate(), $params['cancel_by'], $params['reason'], $params['user_id']);
                $deposit= GuestDepositController::totalDeposit($params['reservation_number'], 'total');
                if($deposit <> 0 ){
                    GuestDepositController::cancelDeposit($request);
                }
                return 0;
            } else {
                return 1;
            }

        } else {
            return 2;
        }
    }

    public function setWaitList(Request $request){
        $params= $request->all();
        $reservation = Reservation::select('status_code','guest_detail_id')->where('number',$params['number'])->where('status_code', GlobalVariableController::$reservationStatus['New'])->first();
        if(!empty($reservation)){
            ProcedureQueryController::updateReservationStatus($params['number'],GlobalVariableController::$reservationStatus['WaitList'],$params['user_id']);
            ProcedureQueryController::updateRoomNumber($reservation->guest_detail_id,'',$request['user_id']);
            return 0;
        }else{
            return 1;
        }
    }

    public function unsetWaitList(Request $request){
        $reservation = ProcedureQueryController::getReservationWaitlistDetail($request->number);

        if(!$reservation){
            return 1;
        } else if(FormatController::formatDate($reservation->arrival) < AuditLogController::auditDate()) {
            return 2;
        } else if(HelperController::getAvailableRoomCountByType($reservation->room_type_code, $reservation->bed_type_code, $reservation->arrival, $reservation->departure, 0, 0, 0, 0, false, false) <= 0){
            return 3;
        } else{
            ProcedureQueryController::updateReservationStatus($request->number, GlobalVariableController::$reservationStatus['New'], $request->user_id);

            return 0;
        }
    }

    public function reservationStatus($id){
        // using API
        if(GlobalVariableController::$useApiService){
            $data = MethodController::getAPI(MethodStringListController::$reservation['getReservationStatus'], '',$id);

            return $data;
        }

        $status = Reservation::select(
            DB::raw('DATE(guest_detail.arrival) as DateArrival'),
            DB::raw('DATE(guest_detail.departure) as DateDeparture'),
            'contact_person.full_name',
            'cfg_init_room.number as room_number',
            'cfg_init_room.status_code as room_status',
            'reservation.status_code as reservation_status',
            'reservation.is_lock as is_lock',
            'reservation.user_id')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person', 'reservation.contact_person_id','contact_person.id')
            ->leftJoin('cfg_init_room', 'guest_detail.room_number', 'cfg_init_room.number')
            ->where('reservation.number', $id)->first();
        $balance = ProcedureQueryController::getGuestDepositBalance($id);
        $status->balance = $balance;
        return response()->json($status);
    }

    public function autoAssign(Request $request){
        $params = $request->all();
        // using API
        if(GlobalVariableController::$useApiService){
            $data = MethodController::getAPI(MethodStringListController::$reservation['autoAssign'], $params,'');

            return $data;
        }

        $remove = Arr::get($params, 'is_remove','');
        $ready= Arr::get($params, 'ready', 0);
        $reservationNumber = $request->reservation_number;

        $reservationX= Reservation::select('reservation.number', 'reservation.guest_detail_id','guest_detail.room_number', 'is_lock')
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->whereIn('number',$reservationNumber)->get();

        if(count($reservationX) > 0) {
            $result = [];
            foreach($reservationX as $reservation){
                $status = 404;
                $roomNumber = '';
                if($reservation->is_lock == '-1'){
                    $status = 5;
                } else if(empty($reservation->room_number)){  //AUTO ASSIGN ROOM
                    $id = $reservation->guest_detail_id;
                    $roomNumber = empty($remove) ? HelperController::getRoomNumber($reservation->number,true,true,$ready > 0) : '';
                    if(!empty($roomNumber)){
                        ProcedureQueryController::updateRoomNumber($id,$roomNumber,$request['user_id']);
                        $status = 0;
                    }else{
                        if($ready > 0){
                            $status = 4;
                        } else {
                            $status = 3;
                        }
                    }
                } else {
                    //REMOVE AUTO ASSIGN
                    if(!empty($remove)){
                        ProcedureQueryController::updateRoomNumber($reservation->guest_detail_id,'',$request['user_id']);
                        $status = 0;
                    }else{
                        $status = 1;
                    }
                }

                array_push($result,[
                    'reservationNumber' => $reservation->number,
                    'status' => $status,
                    'roomNumber' => $roomNumber
                ]);
            }
        } else {
            array_push($result,[
                'reservationNumber' => '',
                'status' => 2,
                'roomNumber' => ''
            ]);;
        }
        return $result;
    }

    public function lockReservation(Request $request){
        $params = $request->all();

        DB::select(
            'CALL update_reservation_lock(?,?,?)',[
                $params['reservation_number'], $params['is_lock'], $params['user_id']
            ]);
    }

    public function updateStatus(Request $request){
        $params=$request->all();

        DB::select(
            'CALL update_reservation_status(?,?,?)',
            [
                $params['reservation_number'], $params['status_code'], $params['user_id']
            ]);
    }

    public function checkIn(Request $request){
        $params=$request->all();
        $reservationNumber= Arr::get($params,'reservation_number','');
        $routingList= Arr::get($params, 'routing_account',[]);
        $countFailed = 0;
        $countSuccess = 0;

        // $result = 404;
        // CHECK IN GROUP
        if(is_array($request['reservation_number'])){
            $array= array();
            foreach($request['reservation_number'] as $number){
                $result['number'] = $number;
                $request['reservation_number'] = $number;

                if(empty(HelperController::getFolioByReservationNumber($number))){
                    $checkInStatus = self::checkInReservation($request);
                    $folioNumber= HelperController::getFolioByReservationNumber($number);
                    $result['folio_number'] = $folioNumber;
                    if(json_decode($checkInStatus) !== null){
                        $result['status'] = $checkInStatus;
                        $countFailed +=1;
                    } else {
                        $result['status'] = 0;
                        $countSuccess +=1;
                    }
                    //AUTO ROUTING
                    if(!empty($routingList) && !empty($folioNumber)){
                        foreach($routingList as $routing){
                            ProcedureQueryController::insertAutomaticRouting($folioNumber, $routing['account_code'], $routing['folio_transfer'], $routing['sub_folio'], $request['user_id']);
                        }
                    }
                } else {
                    $countFailed += 1;
                    $result['status'] = 4;
                }
                array_push($array,$result);
            }
            return response()->json([
                'data' => $array,
                'status' => [
                    'failed' => $countFailed,
                    'success' => $countSuccess
                    ]
                ]);
        // CHECK IN INDIVIDUAL
        } else {
            return self::checkInReservation($request);
        }
    }


    public static function checkInReservation(Request $request){
        // 404: 'Failed, Reservation not found'
        // 0: Success,
        // 1: Room Type not Available
        // 2: Room Number not Assign
        // 3: Arrival date not equal with current Audit date
        // 4: Reservation already check-in
        // 5: Room Blocked
        // 6: Room ready
        // 7: Room Occupied
        $params=$request->all();

        // using API
        if(GlobalVariableController::$useApiService){
            $params['folio_number']= Arr::get($params, 'folio_number', 0);
            $params['birth_date']= FormatController::formatDate(Arr::get($params, 'birth_date', ''));
            $params['flight_arrival']= FormatController::formatDateTime(Arr::get($params,'flight_arrival',''));
            $params['flight_departure']= FormatController::formatDateTime(Arr::get($params,'flight_departure',''));
            $params['commission_type_code']=Arr::get($params,'commission_type_code', '');
            $params['purpose_of']=Arr::get($params,'purpose_of', '');
            $data = MethodController::postAPI(MethodStringListController::$reservation['checkInReservation'], $params, $params['reservation_number']);

            return $data;
        }
        // using local DB
        $reservation = Reservation::select(
            'reservation.*', 'guest_detail.*', 'contact_person.*'
            )
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->leftJoin('contact_person', 'reservation.contact_person_id', 'contact_person.id' )
            ->where('number',$request['reservation_number']);

        $reservation = $reservation->first();
        $auditDate = AuditLogController::auditDate();

        if(empty($reservation)){
            return 404;
        }
        else if(empty($reservation->room_number)){
            return 2;
        }
        else if(HelperController::isRoomBlockedNow($reservation->room_number)){
            return 5;
        }
        else if(!empty(HelperController::getFolioByReservationNumber($params['reservation_number']))){
            return 4;
        }
        else if(FormatController::formatDate($reservation->arrival) !== $auditDate){
            return 3;
        }
        else if(!HelperController::isRoomReadyNow($reservation->room_number)){
            return 6;
        }
        else if(HelperController::isRoomOccupiedNow($reservation->room_number)){
            return 7;
        }
        else if (!HelperController::isRoomAvailable($reservation->room_number, $reservation->arrival, $reservation->departure, $params['reservation_number'], 0, 0, 0, true, false)){
            return 1;
        }
        else{
            $guestDetailId = ProcedureQueryController::insertGuestDetail(FormatController::mergetDateW8TimeNow($reservation->arrival), $reservation->departure, $reservation->adult, $reservation->child, $reservation->room_type_code, $reservation->bed_type_code, $reservation->room_number, $reservation->room_rate_code,
                $reservation->weekday_rate, $reservation->weekend_rate, $reservation->discount_percent, $reservation->discount, $reservation->business_source_code, $reservation->commission_type_code, $reservation->commission_value, $reservation->payment_type_code,
                $reservation->market_code, $reservation->booking_source_code, $reservation->bill_instruction, $params['user_id']);

            $contactPersonId1 = ProcedureQueryController::insertContactPerson($reservation->title_code, $reservation->full_name, $reservation->street, $reservation->country_code, $reservation->state_code, $reservation->city_code, $reservation->city, $reservation->nationality_code,
                $reservation->postal_code, $reservation->phone1,$reservation->phone2, $reservation->fax, $reservation->email, $reservation->website, $reservation->company_code, $reservation->guest_type_code, $reservation->id_card_code, $reservation->id_card_number, $reservation->is_male, $reservation->birth_place,
                $reservation->birth_date, $reservation->type_code, $reservation->custom_field01, $reservation->custom_field02, $reservation->custom_field03, $reservation->custom_field04, $reservation->custom_field05,$reservation->custom_field06, $reservation->custom_field07, $reservation->custom_field08, $reservation->custom_field09, $reservation->custom_field10, $reservation->custom_field11, $reservation->custom_field12, $reservation->custom_lookup_field_code01,
                $reservation->custom_lookup_field_code02, $reservation->custom_lookup_field_code03, $reservation->custom_lookup_field_code04, $reservation->custom_lookup_field_code05, $reservation->custom_lookup_field_code06,$reservation->custom_lookup_field_code07, $reservation->custom_lookup_field_code08, $reservation->custom_lookup_field_code09, $reservation->custom_lookup_field_code10, $reservation->custom_lookup_field_code11, $reservation->custom_lookup_field_code12, $params['user_id']);

            $folioNumber = ProcedureQueryController::insertFolio(GlobalVariableController::$folioType['GuestFolio'], '', $params['reservation_number'], $contactPersonId1, $reservation->contact_person_id2, $reservation->contact_person_id3, $reservation->contact_person_id4,
                    $guestDetailId, $reservation->member_code, $reservation->guest_profile_id, $reservation->guest_profile_id2, $reservation->guest_profile_id3, $reservation->guest_profile_id4, $reservation->currency_code,
                    $reservation->exchange_rate, $reservation->is_constant_currency, $reservation->group_code, 0, '', GlobalVariableController::$folioTransferBy['NoTransfer'], '', HelperController::trueFalse($reservation->is_incognito), $reservation->marketing_code,
                    $reservation->document_number, $reservation->voucher_number_ta, $reservation->flight_number, $reservation->flight_arrival, $reservation->flight_departure, $reservation->notes, $reservation->show_notes, $reservation->hk_note,
                    $reservation->is_from_allotment, GlobalVariableController::$system['CakrasoftHotelSystem'], $params['user_id']);

            ProcedureQueryController::updateRoomStatus($reservation->room_number, GlobalVariableController::$roomStatus['Clean'], $params['user_id']);
            ProcedureQueryController::updateReservationStatus($reservation->number, GlobalVariableController::$reservationStatus['InHouse'], $params['user_id']);

            //Scheduled Rate
            $scheduledRate = ReservationScheduledRate::where('reservation_number',$params['reservation_number'])->get();
            if(!empty($scheduledRate)){
                foreach($scheduledRate as $scheduledRateX){
                    ProcedureQueryController::insertGuestScheduledRate($folioNumber, $scheduledRateX->from_date, $scheduledRateX->to_date, $scheduledRateX->room_rate_code, $scheduledRateX->rate, $scheduledRateX->compliment_hu, $params['user_id']);
                }

            }
            if (ProcedureQueryController::isScheduledRate($folioNumber, $auditDate)){
                $complimentHU = ProcedureQueryController::getScheduledRateComplimentHU($folioNumber, $auditDate);
                if ($complimentHU != ''){
                    ProcedureQueryController::updateFolioComplimentHu($folioNumber, $complimentHU, $params['user_id']);
                }
            }

            //Extra Charge
            ProcedureQueryController::insertGuestExtraChargeCheckIn($params['reservation_number'], $folioNumber, $params['user_id']);

            $deposit= GuestDepositController::totalDeposit($params['reservation_number'], 'total');
            if( $deposit != 0){
                $idSubFolio = ProcedureQueryController::insertSubFolio1($folioNumber, GlobalVariableController::$subFolioGroup['A'], $reservation->room_number, ConfigurationController::value(null, GlobalVariableController::$configurationCategory['GlobalSubDepartment'], GlobalVariableController::$configurationName['SDFrontOffice']),
                    ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']),  ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']), '', '', '', 'Transfer Deposit from Reservation :'.$params['reservation_number'], '',
                    '', GlobalVariableController::$transactionType['Credit'], '', '', '', '', '', GlobalVariableController::$postingType['Deposit'], '', 0, 1, $deposit, '', false, true, '', $params['user_id']);

                $idLogDeposit = GuestDepositController::insertDeposit($request,GlobalVariableController::$transactionType['Debit'], ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AccountTransferDepositReservationToFolio']),$deposit, 'Transfer Deposit to Folio :'.$params['reservation_number'] );
                ProcedureQueryController::updateGuestDepositTransferPairIdFolio($idLogDeposit, $idSubFolio);
            }

            //Guest Breakdown
            ProcedureQueryController::insertGuestBreakdown($folioNumber, $reservation->room_rate_code, $params['user_id']);

            //Log User
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['CheckInReservation'], 'link1' => $params['reservation_number'], 'link2' => $folioNumber, 'userid' => $params['user_id']];
            ProcedureQueryController::insertLogUserX($logParams);

            return response()->json([
                'status' => 'success',
                'folio_number' => $folioNumber,
                'room_number' => $reservation->room_number
            ]);
        }
    }

    public function dataLookUp(Request $request){
        $params1=$request->all();
         // using API
         if(GlobalVariableController::$useApiService){
             $params2 = [
                'room_type' => Arr::get($params1,'room_type',false),
                'business_source' => Arr::get($params1,'business_source',false),
                'commission_type' => Arr::get($params1,'commission_type',false),
                'market' => Arr::get($params1,'market',false),
                'booking_source' => Arr::get($params1,'booking_source',false),
                'payment_type' => Arr::get($params1,'payment_type',false),
                'title' => Arr::get($params1,'title',false),
                'member' => Arr::get($params1,'member',false),
                'country' => Arr::get($params1,'country',false),
                'country_code' => Arr::get($params1,'country_code',''),
                'state_code' => Arr::get($params1,'state_code',''),
                'state' => Arr::get($params1,'state',false),
                'city' => Arr::get($params1,'city',false),
                'nationality' => Arr::get($params1,'nationality',false),
                'company' => Arr::get($params1,'company',false),
                'guest_type' => Arr::get($params1,'guest_type',false),
                'id_card' => Arr::get($params1,'id_card',false),
                'group' => Arr::get($params1,'group',false),
                'marketing' => Arr::get($params1,'marketing',false),
             ];
            $data = MethodController::getAPI(MethodStringListController::$reservation['getDataLookup'], $params2,'');

            return $data;
        }
        // using local DB
        $roomType = RoomType::select('code','name')->get();
        $businessSource = Company::select('code', 'name')->where('is_business_source','-1')->get();
        $commissionType = CommissionType::select('code','name')->get();
        $market = Market::select('code','name')->get();
        $bookingSource = BookingSource::select('code','name')->get();
        $paymentType= PaymentType::select('code','name')->get();
        $title = GuestTitle::select('code','name')->get();
        $member = Member::select('code','guest_profile.full_name as name')
            ->leftJoin('guest_profile','member.guest_profile_id','guest_profile.id_log')
            ->where('is_for_room','-1')
            ->get();
        $country = Country::select('code','name')->get();
        $city = City::select('code','name')->where('state_code','OT')->get();
        $nationality = Nationality::select('code','name')->get();
        $company = Company::select('code','name')->get();
        $guestType = GuestType::select('code','name')->get();
        $idCard = IDCardType::select('code','name')->get();
        $group = GuestGroup::select('code','name')->where('is_active','-1')->get();
        $marketing = Marketing::select('code','name')->get();

        return response()->json([
            'room_type' => $roomType,
            'business_source' => $businessSource,
            'commission_type' => $commissionType,
            'market' => $market,
            'booking_source' => $bookingSource,
            'payment_type' => $paymentType,
            'title' => $title,
            'member' => $member,
            'country' => $country,
            'city' => $city,
            'nationality' => $nationality,
            'company' => $company,
            'guest_type' => $guestType,
            'id_card' => $idCard,
            'group' => $group,
            'marketing' => $marketing,
        ]);
    }

    public function dataLookupTransfer($reservationNumber){
        $reservation = Reservation::select(
            'number',
            'contact_person.full_name',
            'guest_detail.room_number')
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
            ->where('status_code', GlobalVariableController::$reservationStatus['New'])
            ->where('number','!=',$reservationNumber)
            ->orderBy('reservation.number')
            ->get();

        $folio= Folio::select(
            'number',
            'const_folio_type.name as folio_type',
            'contact_person.full_name',
            'guest_detail.room_number')
            ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
            ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
            ->leftJoin('const_folio_type','folio.type_code','const_folio_type.code')
            ->where('status_code', GlobalVariableController::$folioStatus['Open'])
            ->groupBy('folio.number')
            ->orderBy('folio.number')
            ->orderBy('const_folio_type.name')
            ->get();

        return response()->json([
            'reservation' => $reservation,
            'folio' => $folio
        ]);
    }

    public function cityState(Request $request){
        $params = $request->all();
        $countryCode = Arr::get($params, 'country', '');
        $stateCode = Arr::get($params , 'state' , 'OT');

        $city = HelperController::getCityByState($stateCode);
        $state = HelperController::getStateByCountry($countryCode);

        return response()->json([
            'state' => $state,
            'city' => $city
        ]);
    }


    public function roomRate(Request $request){
        $params= $request->all();
         // using API
         if(GlobalVariableController::$useApiService){
             $params2 = [
                'arrival' => FormatController::formatDate(Arr::get($params,'arrival','')),
                'departure' => FormatController::formatDate(Arr::get($params,'departure','')),
                'room_type_code' => Arr::get($params,'room_type',''),
                'business_source_code' => Arr::get($params,'business_source',''),
                'company_code' => Arr::get($params,'company',''),
                'market_code' => Arr::get($params,'marketing',''),
             ];
            $data = MethodController::getAPI(MethodStringListController::$reservation['getRoomRate'], $params2,'');

            return $data;
        }
        // using local DB
        $roomType = Arr::get($params, 'room_type', '');
        $businessSource = Arr::get($params, 'business_source', 0);
        $arrival = Arr::get($params, 'arrival','');
        $departure = Arr::get($params, 'departure','');
        $day_number = date('N', strtotime($arrival));

        $company = RoomRateBusinessSource::select('company_code','room_rate_code');

        $roomRate = RoomRate::select('code','name',DB::raw('IFNULL(Business_source.company_code, 0) as business_source'))
            ->whereDate('from_date','<=', FormatController::formatDate($arrival))->whereDate('to_date','>=',FormatController::formatDate($departure))
            ->where('is_active','-1')
            ->leftJoinSub($company, 'Business_source','cfg_init_room_rate.code','Business_source.room_rate_code');

        if(!empty($businessSource)){
            if(!HelperController::trueFalseString(ConfigurationController::value(null,null,GlobalVariableController::$configurationName['AlwaysShowPublishRate']))){
                $roomRate->where('Business_source.company_code', $businessSource);
            }else{
                $roomRate->whereraw('(Business_source.company_code="'.$businessSource.'" OR IFNULL(Business_source.company_code, 0) = 0)');
            }
        } else {
            $roomRate->where('Business_source.company_code', null);
        }


        if(!empty($roomType)){
            $roomRate->where('room_type_code','like', '%'.$roomType.'%');
        }
        if($day_number <> 0){
            $roomRate->where('day'.$day_number, '-1');
        }
        return response()->json($roomRate->orderBy('id_sort','ASC')->get());

    }

    public function dailyRate(Request $request){
        $params = $request->all();
        // using API
        if(GlobalVariableController::$useApiService){
            $params2 = [
               'room_rate_code' => Arr::get($params,'room_rate',''),
               'adult' => Arr::get($params,'adult','1'),
               'child' => Arr::get($params,'child','0'),
            ];
           $data = MethodController::getAPI(MethodStringListController::$reservation['getCalculateDailyRate'], $params2,'');

           return $data;
       }
       // using local DB
        $rate = Arr::get($params, 'room_rate', '');
        $adult = Arr::get($params, 'adult', '1');

        if($adult > '0' && $rate != ''){
            if($adult <= '4' && $adult >= '1' ){
                $roomRate = RoomRate::select('weekday_rate'.$adult.' as weekday_rate', 'weekend_rate'.$adult.' as weekend_rate');
            } else if( $adult > '4 '){
                $roomRate = RoomRate::select('weekday_rate4 as weekday_rate', 'weekend_rate4 as weekend_rate');
            }
            if(!empty($rate)){
                $roomRate->where('code','like','%'.$rate.'%');
            }

            return response()->json($roomRate->first());
        }
        return response()->json([
            'weekday_rate' => 0,
            'weekend_rate' => 0
        ]);
    }

    public function roomNumber(Request $request){
        $search= $request->all();
        // using API
        if(GlobalVariableController::$useApiService){
            $params = [
                'room_type_code' => Arr::get($search, 'room_type_code', ''),
                'room_number' => Arr::get($search, 'room_number', ''),
                'bed_type_code' => Arr::get($search, 'bed_type_code', ''),
                'arrival' => FormatController::formatDate(Arr::get($search, 'arrival', '')),
                'departure' => FormatController::formatDate(Arr::get($search, 'departure', '')),
                'reservation_number' => Arr::get($search, 'reservation_number', 0) == '' ? 0 : $search['reservation_number'],
                'folio_number' => Arr::get($search, 'folio_number', 0) == '' ? 0 : $search['folio_number'],
                'unavailable_id' => Arr::get($search, 'unavailable_id', 0),
                'room_allotment_id' => Arr::get($search, 'room_allotment_id', 0),
                'allotment' => Arr::get($search, 'allotment', false),
                'ready' => Arr::get($search, 'ready', true)
            ];
           $data = MethodController::getAPI(MethodStringListController::$reservation['getRoomNumber'], $params,'');

           return $data;
       }
    //    using local DB
        $roomType = Arr::get($search, 'room_type_code', '');
        $roomNumber = Arr::get($search, 'room_number', '');
        $bedType = Arr::get($search, 'bed_type_code', '');
        $arrival = FormatController::formatDate(Arr::get($search, 'arrival', ''));
        $departure = FormatController::formatDate(Arr::get($search, 'departure', ''));
        $resvNumber = Arr::get($search, 'reservation_number', 0);
        $folioNumber = Arr::get($search, 'folio_number', 0);
        $unavailableID = Arr::get($search, 'unavailable_id', 0);
        $roomAllotmentID = Arr::get($search, 'room_allotment_id', 0);
        $allotment = Arr::get($search, 'allotment', false);
        $ready = Arr::get($search, 'ready', true);

        $bed = BedType::select('cfg_init_bed_type.code','cfg_init_bed_type.name')
            ->rightJoin('cfg_init_room','cfg_init_bed_type.code','cfg_init_room.bed_type_code')
            ->groupBy('cfg_init_bed_type.code');

        if(!empty($roomType)){
            $bed->where('room_type_code',$roomType);
        }

        $roomNumber = HelperController::getRoomAvailableByType($roomType, $bedType, $arrival, $departure, $resvNumber, $folioNumber, $unavailableID, $roomAllotmentID, false, $roomNumber, $ready, false, false);
        $roomTypeNumber = intval(HelperController::getAvailableRoomCountByType($roomType, $bedType, $arrival, $departure,  $resvNumber, $folioNumber, $unavailableID, $roomAllotmentID, $ready, false));

        return response()->json([
                'room' => $roomNumber,
                'bed_type' => $bed->get(),
                'available_room' => $roomTypeNumber
        ]);
    }

    public function guestProfile(Request $request){
        $params = $request->all();
        $fullName= Arr::get($params, 'q','');


        $guest= GuestProfile::select('full_name','id_log')->where('is_active','-1');

        if(!empty($fullName)){
            $guest->where('full_name','like','%'.$fullName.'%');
        }

        return response()->json($guest->get());
    }

    public function guestProfileDetail(Request $request){
        $params= $request->all();
        $id_log = Arr::get($params, 'q', '');

        $guestProfileDetail = GuestProfile::where('id_log', $id_log)->first();

        return response()->json($guestProfileDetail);
    }

    public static function availableRoom(Request $request){
        $search= $request->all();
        $roomType = Arr::get($search, 'room_type_code', '');
        $bedType = Arr::get($search, 'bed_type_code', '');
        $arrival = FormatController::formatDate(Arr::get($search, 'arrival', ''));
        $departure = FormatController::formatDate(Arr::get($search, 'departure', ''));
        $resvNumber = Arr::get($search, 'resv_number', '');
        $folioNumber = Arr::get($search, 'folio_number', '');
        $unavailableID = Arr::get($search, 'unavailable_id', '');
        $roomAllotmentID = Arr::get($search, 'room_allotment_id', '');
        $allotment = Arr::get($search, 'allotment', false);
        $isAvailable =
        $ready = Arr::get($search, 'ready', false);

        $countDay = FormatController::daysBetween(FormatController::formatDate($arrival), FormatController::formatDate($departure));

        if($countDay <= 0){

        }

        //QUERY SELECTED
        $reservation = Reservation::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'reservation.guest_detail_id', 'guest_detail.id')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereDate('guest_detail.arrival','<',$departure)
            ->whereDate('guest_detail.departure','>',$arrival);
        $folio= Folio::select('guest_detail.room_number')
            ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
            ->where('folio.status_code',GlobalVariableController::$folioStatus['Open'])
            ->where('folio.type_code', GlobalVariableController::$folioType['GuestFolio'])
            ->whereDate('guest_detail.arrival','<',$departure)
            ->whereDate('guest_detail.departure','>',$arrival);
        $roomUnavailable = RoomUnavailable::select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_unavailable.room_number','cfg_init_room.number')
            ->whereDate('room_unavailable.from_date','<',$departure)
            ->whereDate('room_unavailable.to_date','>=',$arrival);
        $roomAllotment = DB::table('room_allotment')->select('cfg_init_room.number')
            ->leftJoin('cfg_init_room','room_allotment.room_number','cfg_init_room.number');
        $room = Room::select('number as available_room')
            ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code');
        $RoomType = RoomType::select('code as room_type')
            ->leftJoin('cfg_init_room','cfg_init_room.room_type_code','cfg_init_room_type.code');


        //QUERY CONDITION
            if(!empty($roomType)){
                $room->where('cfg_init_room.room_type_code',$roomType);
                $reservation->where('guest_detail.room_type_code',$roomType);
                $folio->where('guest_detail.room_type_code',$roomType);
                $roomUnavailable->where('cfg_init_room.room_type_code',$roomType);
                $RoomType->where('cfg_init_room_type', $roomType);
            }
            if(!empty($bedType)){
                $room->where('cfg_init_room.bed_type_code',$bedType);
                $reservation->where('guest_detail.bed_type_code',$bedType);
            }

            if(!empty($unavailableID)){
                $roomUnavailable->where('room_unavailable.id_log','<>',$unavailableID);
            }
            if(!empty($resvNumber)){
                $reservation->where('reservation.number','<>',$resvNumber);
                $folio->where('folio.reservation_number','<>',$resvNumber);
            }
            if(!empty($folioNumber)){
                $folio->where('folio.number','<>', $folioNumber);
            }

            if($ready == 'true'){
                $room->where('status_code', GlobalVariableController::$roomStatus['Ready']);
            }

            if($allotment){
                $roomAllotment->whereDate('room_allotment.from_date','<=', $arrival);
            }

            // $sumCount = $room - $reservation - $folio -$roomUnavailable - $roomAllotment ;
        $room
            ->whereNotIn('number', $reservation->get())
            ->whereNotIn('number', $folio->get())
            ->whereNotIn('number', $roomUnavailable->get())
            ->whereNotIn('number', $roomAllotment->get());

            // if($room->count() > $reservation->count() ){
            //     return $room->count() - $reservation->count();
            // } else {
            //     return 0;
            // }
            return $room->count();
    }

    public function dataLookupDeposit(Request $request){
        $currency= Currency::select('code','name','exchange_rate')->orderBy('is_default','DESC')->get();
        $subFolio= DB::table('sub_folio_group')->select('code','name')->get();
        $subDepartment = SubDepartment::select('code','name')->orderBy('id_sort','ASC')->get();
        $cardType = CardType::select('code','name')->get();
        $cardBank = CardBank::select('code','name')->get();

        return response()->json([
            'currency' => $currency,
            'sub_folio' => $subFolio,
            'sub_department' => $subDepartment,
            'card_type' => $cardType,
            'card_bank' => $cardBank
        ]);
    }

    public function exchangeRate(Request $request){
        $params = $request->all();
        $currency = Arr::get($params, 'currency_code',HelperController::getDefaultCurrency());
        $exchRate= HelperController::getExchangeRateCurrency($currency);
        return response()->json($exchRate);
    }

    public function account(Request $request){
        $params = $request->all();
        $type = Arr::get($params, 'type','');
        $subDep = Arr::get($params, 'sub_department_code','');
        $currency = Arr::get($params, 'currency_code','');

        $account= Account::select('cfg_init_account.code','cfg_init_account.name',
            DB::raw('IFNULL(charge_percent, 0) as charge_percent'))
            ->where('type_code', GlobalVariableController::$transactionType['Credit'])
            ->leftJoin('cfg_init_credit_card_charge','cfg_init_account.code','cfg_init_credit_card_charge.account_code')
            ->leftJoin('cfg_init_currency' ,'cfg_init_account.code' ,'cfg_init_currency.account_code');

        if($type == 'PYMT'){
            $account->where('cfg_init_currency.code', $currency);
        }

        if(!empty($subDep)){
            $account->where('sub_department_code','like', '%'.$subDep.'%');
        }

        if(!empty($type)){
            $account->where('sub_group_code', $type);
        }

        return response()->json($account->get());
    }
    public function creditCardCharge(Request $request){
        $params = $request->all();
        $account = Arr::get($params, 'account_code','');

        $charge= CreditCardCharge::select('charge_percent');

        if(!empty($account)){
            $charge->where('account_code', $charge);
        }

        return response()->json($charge->get());
    }

    public function reservationGroupList(Request $request){
        $params = $request->all();
        $reservationNumber = Arr::get($params, 'reservation_number',[]);
        $reservation = Reservation::select('reservation.group_code')
            ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
            ->whereIn('reservation.number',$request['reservation_number'])->first();
        if(!empty($reservation)){
            $query = Reservation::select(
                'number AS id',
                'number',
                'guest_detail.room_number',
                'contact_person.full_name as full_name',
                'cfg_init_room_type.name as room_type',
                'guest_detail.arrival',
                'guest_detail.departure'
                // DB::raw('SUM(CASE WHEN guest_deposit.type_code="'.GlobalVariableController::$transactionType['Debit'].'" THEN IFNULL(guest_deposit.amount, 0) ELSE IFNULL(guest_deposit.amount, 0) END) AS Deposit')
                )
                ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
                ->leftJoin('guest_deposit','reservation.number','guest_deposit.reservation_number')
                ->where('reservation.status_code',GlobalVariableController::$reservationStatus['New'])
                ->whereIn('reservation.number',$reservationNumber)
                ->distinct();

            return response()->json($query->get());
        } else {
            return 404;
        }
    }

    public function inserLogUserUpdateReservation(Request $request){
        $dataB4 = $request['dataB4'];
        $dataAfter = $request['dataAfter'];
        $userId = $request['userId'];
        $resvNumber = $dataAfter['number'];

        //Arrival
        $arrivalB4 = Arr::get($dataB4, 'arrival', '');
        $arrivalAfter = Arr::get($dataAfter, 'arrival', '');
        if($arrivalB4 !== $arrivalAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIArrival'], 'link1' => $resvNumber, 'link2' => $arrivalB4, 'link3' => $arrivalAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Night
        $nightB4 = Arr::get($dataB4, 'night', 0);
        $nightAfter = $request['nightAfter'];
        if($nightB4 !== $nightAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSINights'], 'link1' => $resvNumber, 'link2' => $nightB4, 'link3' => $nightAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Departure
        $departureB4 = Arr::get($dataB4, 'departure', '');
        $departureAfter = Arr::get($dataAfter, 'departure', '');
        if($departureB4 !== $departureAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIDeparture'], 'link1' => $resvNumber, 'link2' => $departureB4, 'link3' => $departureAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Adult
        $adultB4 = Arr::get($dataB4, 'adult', '');
        $adultAfter = Arr::get($dataAfter, 'adult', '');
        if($adultB4 !== $adultAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIAdult'], 'link1' => $resvNumber, 'link2' => $adultB4, 'link3' => $adultAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Child
        $childB4 = Arr::get($dataB4, 'child', '');
        $childAfter = Arr::get($dataAfter, 'child', '');
        if($childB4 !== $childAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIChild'], 'link1' => $resvNumber, 'link2' => $childB4, 'link3' => $childAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Room Type
        $roomTypeCodeB4 = Arr::get($dataB4, 'room_type_code', '');
        $roomTypeCodeAfter = Arr::get($dataAfter, 'room_type_code', '');
        if($roomTypeCodeB4 !== $roomTypeCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIRoomType'], 'link1' => $resvNumber, 'link2' => $roomTypeCodeB4, 'link3' => $roomTypeCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Room
        $roomNumberB4 = Arr::get($dataB4, 'room_number', '');
        $roomNumberAfter = Arr::get($dataAfter, 'room_number', '');
        if($roomNumberB4 !== $roomNumberAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIRoom'], 'link1' => $resvNumber, 'link2' => $roomNumberB4, 'link3' => $roomNumberAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Room Rate
        $roomRateCodeB4 = Arr::get($dataB4, 'room_rate_code', '');
        $roomRateCodeAfter = Arr::get($dataAfter, 'room_rate_code', '');
        if($roomRateCodeB4 !== $roomRateCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIRoomRate'], 'link1' => $resvNumber, 'link2' => $roomRateCodeB4, 'link3' => $roomRateCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Business Source
        $businessSourceCodeB4 = Arr::get($dataB4, 'business_source_code', '');
        $businessSourceCodeAfter = Arr::get($dataAfter, 'business_source_code', '');
        if($businessSourceCodeB4 !== $businessSourceCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIBusinessSource'], 'link1' => $resvNumber, 'link2' => $businessSourceCodeB4, 'link3' => $businessSourceCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Commission Type
        $commissionTypeCodeB4 = Arr::get($dataB4, 'commission_type_code', '');
        $commissionTypeCodeAfter = Arr::get($dataAfter, 'commission_type_code', '');
        if($commissionTypeCodeB4 !== $commissionTypeCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSICommissionType'], 'link1' => $resvNumber, 'link2' => $commissionTypeCodeB4, 'link3' => $commissionTypeCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Commission Value
        $commissionValueB4 = Arr::get($dataB4, 'commission_value', '');
        $commissionValueAfter = Arr::get($dataAfter, 'commission_value', '');
        if($commissionValueB4 !== $commissionValueAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSICommissionValue'], 'link1' => $resvNumber, 'link2' => $commissionValueB4, 'link3' => $commissionValueAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Weekday Rate
        $weekdayRateB4 = Arr::get($dataB4, 'weekday_rate', '');
        $weekdayRateAfter = Arr::get($dataAfter, 'weekday_rate', '');
        if($weekdayRateB4 !== $weekdayRateAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIWeekdayRate'], 'link1' => $resvNumber, 'link2' => $weekdayRateB4, 'link3' => $weekdayRateAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Weekend Rate
        $weekendRateB4 = Arr::get($dataB4, 'weekend_rate', '');
        $weekendRateAfter = Arr::get($dataAfter, 'weekend_rate', '');
        if($weekendRateB4 !== $weekendRateAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIWeekendRate'], 'link1' => $resvNumber, 'link2' => $weekendRateB4, 'link3' => $weekendRateAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Discount
        $discountB4 = Arr::get($dataB4, 'discount', '');
        $discountAfter = Arr::get($dataAfter, 'discount', '');
        if($discountB4 !== $discountAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIDiscount'], 'link1' => $resvNumber, 'link2' => $discountB4, 'link3' => $discountAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Payment Type
        $paymentTypeCodeB4 = Arr::get($dataB4, 'payment_type_code', '');
        $paymentTypeCodeAfter = Arr::get($dataAfter, 'payment_type_code', '');
        if($paymentTypeCodeB4 !== $paymentTypeCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIPaymentType'], 'link1' => $resvNumber, 'link2' => $paymentTypeCodeB4, 'link3' => $paymentTypeCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Market
        $marketCodeB4 = Arr::get($dataB4, 'market_code', '');
        $marketCodeAfter = Arr::get($dataAfter, 'market_code', '');
        if($marketCodeB4 !== $marketCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIMarket'], 'link1' => $resvNumber, 'link2' => $marketCodeB4, 'link3' => $marketCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Bill Instruction
        $billInstructionB4 = Arr::get($dataB4, 'bill_instruction', '');
        $billInstructionAfter = Arr::get($dataAfter, 'bill_instruction', '');
        if($billInstructionB4 !== $billInstructionAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIBillInstruction'], 'link1' => $resvNumber, 'link2' => $billInstructionB4, 'link3' => $billInstructionAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Currency
        $currencyCodeB4 = Arr::get($dataB4, 'currency_code', '');
        $currencyCodeAfter = Arr::get($dataAfter, 'currency_code', '');
        if($currencyCodeB4 !== $currencyCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSICurrency'], 'link1' => $resvNumber, 'link2' => $currencyCodeB4, 'link3' => $currencyCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Exchange Rate
        $exchangeRateB4 = Arr::get($dataB4, 'exchange_rate', '');
        $exchangeRateAfter = Arr::get($dataAfter, 'exchange_rate', '');
        if($exchangeRateB4 !== $exchangeRateAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URSIExchangeRate'], 'link1' => $resvNumber, 'link2' => $exchangeRateB4, 'link3' => $exchangeRateAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Title
        $titleB4 = Arr::get($dataB4, 'title_code', '');
        $titleAfter = Arr::get($dataAfter, 'title_code', '');
        if($titleB4 !== $titleAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPITitle'], 'link1' => $resvNumber, 'link2' => $titleB4, 'link3' => $titleAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Full Name
        $fullNameB4 = Arr::get($dataB4, 'full_name', '');
        $fullNameAfter = Arr::get($dataAfter, 'full_name', '');
        if($fullNameB4 !== $fullNameAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIFullName'], 'link1' => $resvNumber, 'link2' => $fullNameB4, 'link3' => $fullNameAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Reservation By
        $reservationByB4 = Arr::get($dataB4, 'reservation_by', '');
        $reservationByAfter = Arr::get($dataAfter, 'reservation_by', '');
        if($reservationByB4 !== $reservationByAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIReservationBy'], 'link1' => $resvNumber, 'link2' => $reservationByB4, 'link3' => $reservationByAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Street
        $streetB4 = Arr::get($dataB4, 'street', '');
        $streetAfter = Arr::get($dataAfter, 'street', '');
        if($streetB4 !== $streetAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIStreet'], 'link1' => $resvNumber, 'link2' => $streetB4, 'link3' => $streetAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //City
        $cityCodeB4 = Arr::get($dataB4, 'city_code', '');
        $cityCodeAfter = Arr::get($dataAfter, 'city_code', '');
        if($cityCodeB4 !== $cityCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPICity'], 'link1' => $resvNumber, 'link2' => $cityCodeB4, 'link3' => $cityCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Country
        $countryCodeB4 = Arr::get($dataB4, 'country_code', '');
        $countryCodeAfter = Arr::get($dataAfter, 'country_code', '');
        if($countryCodeB4 !== $countryCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPICountry'], 'link1' => $resvNumber, 'link2' => $countryCodeB4, 'link3' => $countryCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //State
        $stateCodeB4 = Arr::get($dataB4, 'state_code', '');
        $stateCodeAfter = Arr::get($dataAfter, 'state_code', '');
        if($stateCodeB4 !== $stateCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIState'], 'link1' => $resvNumber, 'link2' => $stateCodeB4, 'link3' => $stateCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //State
        $postCodeB4 = Arr::get($dataB4, 'postal_code', '');
        $postCodeAfter = Arr::get($dataAfter, 'postal_code', '');
        if($postCodeB4 !== $postCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIPostCode'], 'link1' => $resvNumber, 'link2' => $postCodeB4, 'link3' => $postCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Phone1
        $phone1B4 = Arr::get($dataB4, 'phone1', '');
        $phone1After = Arr::get($dataAfter, 'phone1', '');
        if($phone1B4 !== $phone1After){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIPhone1'], 'link1' => $resvNumber, 'link2' => $phone1B4, 'link3' => $phone1After, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Phone2
        $phone2B4 = Arr::get($dataB4, 'phone2', '');
        $phone2After = Arr::get($dataAfter, 'phone2', '');
        if($phone2B4 !== $phone2After){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIPhone2'], 'link1' => $resvNumber, 'link2' => $phone2B4, 'link3' => $phone2After, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Fax
        $faxB4 = Arr::get($dataB4, 'fax', '');
        $faxAfter = Arr::get($dataAfter, 'fax', '');
        if($faxB4 !== $faxAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIFax'], 'link1' => $resvNumber, 'link2' => $faxB4, 'link3' => $faxAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Email
        $emailB4 = Arr::get($dataB4, 'email', '');
        $emailAfter = Arr::get($dataAfter, 'email', '');
        if($emailB4 !== $emailAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIEmail'], 'link1' => $resvNumber, 'link2' => $emailB4, 'link3' => $emailAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Website
        $websiteB4 = Arr::get($dataB4, 'website', '');
        $websiteAfter = Arr::get($dataAfter, 'website', '');
        if($websiteB4 !== $websiteAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIWebsite'], 'link1' => $resvNumber, 'link2' => $websiteB4, 'link3' => $websiteAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Company
        $companyCodeB4 = Arr::get($dataB4, 'company_code', '');
        $companyCodeAfter = Arr::get($dataAfter, 'company_code', '');
        if($companyCodeB4 !== $companyCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPICompany'], 'link1' => $resvNumber, 'link2' => $companyCodeB4, 'link3' => $companyCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Guest Type
        $guestTypeCodeB4 = Arr::get($dataB4, 'guest_type_code', '');
        $guestTypeCodeAfter = Arr::get($dataAfter, 'guest_type_code', '');
        if($guestTypeCodeB4 !== $guestTypeCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIGuestType'], 'link1' => $resvNumber, 'link2' => $guestTypeCodeB4, 'link3' => $guestTypeCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //ID Card
        $idCardCodeB4 = Arr::get($dataB4, 'id_card_code', '');
        $idCardCodeAfter = Arr::get($dataAfter, 'id_card_code', '');
        if($idCardCodeB4 !== $idCardCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIIDCardType'], 'link1' => $resvNumber, 'link2' => $idCardCodeB4, 'link3' => $idCardCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //ID Card Number
        $idCardNumberB4 = Arr::get($dataB4, 'id_card_number', '');
        $idCardNumberAfter = Arr::get($dataAfter, 'id_card_number', '');
        if($idCardNumberB4 !== $idCardNumberAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIIDCardNumber'], 'link1' => $resvNumber, 'link2' => $idCardNumberB4, 'link3' => $idCardNumberAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Birthday Place
        $birthPlaceB4 = Arr::get($dataB4, 'birth_place', '');
        $birthPlaceAfter = Arr::get($dataAfter, 'birth_place', '');
        if($birthPlaceB4 !== $birthPlaceAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIBirthdayPlace'], 'link1' => $resvNumber, 'link2' => $birthPlaceB4, 'link3' => $birthPlaceAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Birth Date
        $birthDateB4 = Arr::get($dataB4, 'birth_date', '');
        $birthDateAfter = Arr::get($dataAfter, 'birth_date', '');
        if($birthDateB4 !== $birthDateAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URPIBirthdate'], 'link1' => $resvNumber, 'link2' => $birthDateB4, 'link3' => $birthDateAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Group
        $groupCodeB4 = Arr::get($dataB4, 'group_code', '');
        $groupCodeAfter = Arr::get($dataAfter, 'group_code', '');
        if($groupCodeB4 !== $groupCodeAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGIGroup'], 'link1' => $resvNumber, 'link2' => $groupCodeB4, 'link3' => $groupCodeAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Document Number
        $documentNumberB4 = Arr::get($dataB4, 'document_number', '');
        $documentNumberAfter = Arr::get($dataAfter, 'document_number', '');
        if($documentNumberB4 !== $documentNumberAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGIDocumentNumber'], 'link1' => $resvNumber, 'link2' => $documentNumberB4, 'link3' => $documentNumberAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Flight Number
        $flightNumberB4 = Arr::get($dataB4, 'flight_number', '');
        $flightNumberAfter = Arr::get($dataAfter, 'flight_number', '');
        if($flightNumberB4 !== $flightNumberAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGIFlightNumber'], 'link1' => $resvNumber, 'link2' => $flightNumberB4, 'link3' => $flightNumberAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Flight Arrival
        $flightArrivalB4 = Arr::get($dataB4, 'flight_arrival', '');
        $flightArrivalAfter = Arr::get($dataAfter, 'flight_arrival', '');
        if($flightArrivalB4 !== $flightArrivalAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGIFlightArrival'], 'link1' => $resvNumber, 'link2' => $flightArrivalB4, 'link3' => $flightArrivalAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Flight Departure
        $flightDepartureB4 = Arr::get($dataB4, 'flight_departure', '');
        $flightDepartureAfter = Arr::get($dataAfter, 'flight_departure', '');
        if($flightDepartureB4 !== $flightDepartureAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGIFlightDeparture'], 'link1' => $resvNumber, 'link2' => $flightDepartureB4, 'link3' => $flightDepartureAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Notes
        $notesB4 = Arr::get($dataB4, 'notes', '');
        $notesAfter = Arr::get($dataAfter, 'notes', '');
        if($notesB4 !== $notesAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGINotes'], 'link1' => $resvNumber, 'link2' => $notesB4, 'link3' => $notesAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //HK Notes
        $hkNoteB4 = Arr::get($dataB4, 'hk_note', '');
        $hkNoteAfter = Arr::get($dataAfter, 'hk_note', '');
        if($hkNoteB4 !== $hkNoteAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGIHKNotes'], 'link1' => $resvNumber, 'link2' => $hkNoteB4, 'link3' => $hkNoteAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Marketing
        $marketingB4 = Arr::get($dataB4, 'marketing_code', '');
        $marketingAfter = Arr::get($dataAfter, 'marketing_code', '');
        if($marketingB4 !== $marketingAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGIMarketing'], 'link1' => $resvNumber, 'link2' => $marketingB4, 'link3' => $marketingAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }
        //Voucher Number TA
        $voucherNumberTAB4 = Arr::get($dataB4, 'voucher_number_ta', '');
        $voucherNumberTAAfter = Arr::get($dataAfter, 'voucher_number_ta', '');
        if($voucherNumberTAB4 !== $voucherNumberTAAfter){
            $logParams = ['actionId' => GlobalVariableController::$logUserAction['URGITAVoucherNumber'], 'link1' => $resvNumber, 'link2' => $voucherNumberTAB4, 'link3' => $voucherNumberTAAfter, 'userid' => $userId];
            ProcedureQueryController::insertLogUserX($logParams);
        }

        return response()->json([
            'status' => 0,
        ]);
    }

    public function availability(Request $request){
        $result= HelperController::getRoomTypeAvailability($request->fromDate,$request->night,HelperController::trueFalseString($request->isBedType), $request->filter);
        return $result;
    }

    public function RoomavailabilityForm(Request $request){
        $result= HelperController::getRoomAvailabilityForm($request['fromDate'], $request['night'],
            $request['roomTypeCode'], $request['bedTypeCode'], $request['building'],
            $request['floor'],$request['roomViewCode'],$request['roomStatusCode'],$request['smokingRoom']);
        return $result;
    }

    public function RoomavailabilityFormLookUp(){
        $roomType = RoomType::select('code','name')->get();
        $bedType = BedType::select('code','name')->get();
        $roomStatus = [
            ['code' => '', 'name' => 'All'],
            ['code' => 'R', 'name' => 'Ready'],
            ['code' => 'C', 'name' => 'Clean'],
            ['code' => 'D', 'name' => 'Dirty']
        ];
        $roomView = RoomView::select('code','name')->get();
        $smokingRoom = ['All','Yes','No'];
        $building = Room::select('building')->distinct()->get();
        $floor = Room::select('floor')->distinct()->get();

        return  response()->json([
            'dlRoomType' => $roomType,
            'dlBedType' => $bedType,
            'dlBuilding' => $building,
            'dlFloor' => $floor,
            'dlRoomStatus' => $roomStatus,
            'dlRoomView' => $roomView,
            'dlSmokingRoom' => $smokingRoom,
        ]);
    }

}
