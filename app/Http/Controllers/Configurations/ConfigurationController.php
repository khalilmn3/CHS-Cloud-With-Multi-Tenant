<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\Account;
use App\Configurations\Models\CompanyType;
use App\Configurations\Models\Configuration;
use App\Configurations\Models\Country;
use App\Configurations\Models\Department;
use App\Configurations\Models\Market;
use App\Configurations\Models\PaymentType;
use App\Configurations\Models\RoomRate;
use App\Configurations\Models\RoomType;
use App\Configurations\Models\State;
use App\Configurations\Models\SubDepartment;
use App\General\Models\CompanyInformation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Http\Controllers\GlobalVariableController as GlobalVariable;
use App\Http\Controllers\HelperController as Helper;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProcedureQueryController;
use App\Tools\UserSetting\UserGroup;
use App\User;

class ConfigurationController extends Controller
{
    public function index(Request $request){
        $params= $request->all();
        $systemCode = Arr::get($params, 'system_code', '');
        $category = Arr::get($params, 'category', '');
        $name = Arr::get($params, 'name', '');

        $config = Configuration::select('value','name');

        if(!empty($systemCode)){
            $config->where('system_code',$systemCode);
        }
        if(!empty($category)){
            $config->where('category', $category);
        }
        if(!empty($name)){
            $config->where('name', $name);
        }

        return response()->json($config->get());
    }
    public static function value($systemCode, $category, $vName){
        $name = Arr::get($vName, 'name', '');

        $config = Configuration::select('value','name');

        if(!empty($systemCode)){
            $config->where('system_code',$systemCode);
        }
        if(!empty($category)){
            $config->where('category', $category);
        }
        if(!empty($vName)){
            $config->where('name', $vName);
        }
        $config = $config->first();

        if(!empty($config)){
            return $config->value;
        }
        return '';



    }

    public function getConfigurationList(){
        $query = Configuration::all();
        $dvCurrency= HelperController::getDefaultCurrency();
        return response()->json([
            'configurations' => $query,
            'dvCurrency' => $dvCurrency
            ]);
    }

    public function getWalkingReservation2List(){
        $configuration = Configuration::select('name','value','default_value')
            ->whereIn('category',[GlobalVariable::$configurationCategory['Reservation'],GlobalVariable::$configurationCategory['DefaultVariable'],GlobalVariable::$configurationCategory['AmountPreset']])
            ->where('system_code',GlobalVariable::$constProgramVariable['DefaultSystemCode'])
            ->get();

        $market = Market::select('code','name')->get();
        $roomType= RoomType::select('code','name')->get();
        $subDepartment= SubDepartment::select('code','name')->get();
        $paymentType= PaymentType::select('code','name')->get();
        $roomRate= RoomRate::select('code','name')->get();

        if(!empty($configuration)){
            foreach($configuration as $configurationX){
                if($configurationX->name == GlobalVariable::$configurationName['IsRoomNumberRequired']){
                    $IsRoomNumberRequired = $configurationX->value;
                    $IsRoomNumberRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsBusinessSourceRequired']){
                    $IsBusinessSourceRequired = $configurationX->value;
                    $IsBusinessSourceRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsMarketRequired']){
                    $IsMarketRequired = $configurationX->value;
                    $IsMarketRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsTitleRequired']){
                    $IsTitleRequired = $configurationX->value;
                    $IsTitleRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsNationalityRequired']){
                    $IsNationalityRequired = $configurationX->value;
                    $IsNationalityRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsPhone1Required']){
                    $IsPhone1Required = $configurationX->value;
                    $IsPhone1RequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsEmailRequired']){
                    $IsEmailRequired = $configurationX->value;
                    $IsEmailRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsCompanyRequired']){
                    $IsCompanyRequired = $configurationX->value;
                    $IsCompanyRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsHKNoteRequired']){
                    $IsHKNoteRequired = $configurationX->value;
                    $IsHKNoteRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsTAVoucherRequired']){
                    $IsTAVoucherRequired = $configurationX->value;
                    $IsTAVoucherRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsStateRequired']){
                    $IsStateRequired = $configurationX->value;
                    $IsStateRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['IsCityRequired']){
                    $IsCityRequired = $configurationX->value;
                    $IsCityRequiredDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['KeylockLimit']){
                    $KeylockLimit = $configurationX->value;
                    $KeylockLimitDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['CheckOutLimit']){
                    $CheckOutLimit = $configurationX->value;
                    $CheckOutLimitDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['PostFirstNightCharge']){
                    $PostFirstNightCharge = $configurationX->value;
                    $PostFirstNightChargeDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['PostDiscount']){
                    $PostDiscount = $configurationX->value;
                    $PostDiscountDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['FilterRateByMarket']){
                    $FilterRateByMarket = $configurationX->value;
                    $FilterRateByMarketDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['FilterRateByCompany']){
                    $FilterRateByCompany = $configurationX->value;
                    $FilterRateByCompanyDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AlwaysShowPublishRate']){
                    $AlwaysShowPublishRate = $configurationX->value;
                    $AlwaysShowPublishRateDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['LockFolioOnCheckIn']){
                    $LockFolioOnCheckIn = $configurationX->value;
                    $LockFolioOnCheckInDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AutoGenerateCompanyCode']){
                    $AutoGenerateCompanyCode = $configurationX->value;
                    $AutoGenerateCompanyCodeDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['CompanyCodeDigit']){
                    $CompanyCodeDigit = $configurationX->value;
                    $CompanyCodeDigitDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DVRoomType']){
                    $DVRoomType = $configurationX->value;
                    $DVRoomTypeDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DVRoomRate']){
                    $DVRoomRate = $configurationX->value;
                    $DVRoomRateDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DVSubDepartment']){
                    $DVSubDepartment = $configurationX->value;
                    $DVSubDepartmentDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DVPaymentType']){
                    $DVPaymentType = $configurationX->value;
                    $DVPaymentTypeDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DVComplimentRate']){
                    $DVComplimentRate = $configurationX->value;
                    $DVComplimentRateDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DVHouseUseRate']){
                    $DVHouseUseRate = $configurationX->value;
                    $DVHouseUseRateDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DVMarket']){
                    $DVMarket = $configurationX->value;
                    $DVMarketDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DVIndividualMarket']){
                    $DVIndividualMarket = $configurationX->value;
                    $DVIndividualMarketDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['APPreset1']){
                    $APPreset1 = $configurationX->value;
                    $APPreset1DV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['APPreset2']){
                    $APPreset2 = $configurationX->value;
                    $APPreset2DV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['APPreset3']){
                    $APPreset3 = $configurationX->value;
                    $APPreset3DV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['APPreset4']){
                    $APPreset4 = $configurationX->value;
                    $APPreset4DV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['APPreset5']){
                    $APPreset5 = $configurationX->value;
                    $APPreset5DV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['APPreset6']){
                    $APPreset6 = $configurationX->value;
                    $APPreset6DV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['APPreset7']){
                    $APPreset7 = $configurationX->value;
                    $APPreset7DV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['APPreset8']){
                    $APPreset8 = $configurationX->value;
                    $APPreset8DV = $configurationX->default_value;
                }
            }
            return response()->json([
                'data' => [
                    'value'=>[
                        'is_room_number_required' => Helper::trueFalseString($IsRoomNumberRequired),
                        'is_business_source_required' => Helper::trueFalseString($IsBusinessSourceRequired),
                        'is_market_required' => Helper::trueFalseString($IsMarketRequired),
                        'is_title_required' => Helper::trueFalseString($IsTitleRequired),
                        'is_nationality_required' => Helper::trueFalseString($IsNationalityRequired),
                        'is_phone1_required' => Helper::trueFalseString($IsPhone1Required),
                        'is_email_required' => Helper::trueFalseString($IsEmailRequired),
                        'is_company_required' => Helper::trueFalseString($IsCompanyRequired),
                        'is_hk_note_required' => Helper::trueFalseString($IsHKNoteRequired),
                        'is_ta_voucher_required' => Helper::trueFalseString($IsTAVoucherRequired),
                        'is_state_required' => Helper::trueFalseString($IsStateRequired),
                        'is_city_required' => Helper::trueFalseString($IsCityRequired),
                        'filter_rate_by_market' => Helper::trueFalseString($FilterRateByMarket),
                        'filter_rate_by_company' => Helper::trueFalseString($FilterRateByCompany),
                        'always_show_publish_rate' => Helper::trueFalseString($AlwaysShowPublishRate),
                        'lock_folio_on_check_in' => Helper::trueFalseString($LockFolioOnCheckIn),
                        'auto_generate_company_code' => Helper::trueFalseString($AutoGenerateCompanyCode),
                        'post_first_night_charge' => Helper::trueFalseString($PostFirstNightCharge),
                        'post_discount' => Helper::trueFalseString($PostDiscount),
                        'keylock_limit' => $KeylockLimit,
                        'check_out_time' => $CheckOutLimit,
                        'company_code_digit' => $CompanyCodeDigit,
                        'default_room_type' => $DVRoomType,
                        'default_room_rate' => $DVRoomRate,
                        'default_sub_department' => $DVSubDepartment,
                        'default_payment_type' => $DVPaymentType,
                        'default_compliment_rate' => $DVComplimentRate,
                        'default_house_rate' => $DVHouseUseRate,
                        'default_market' => $DVMarket,
                        'default_individual_market' => $DVIndividualMarket,
                        'ap_preset1' => $APPreset1,
                        'ap_preset2' => $APPreset2,
                        'ap_preset3' => $APPreset3,
                        'ap_preset4' => $APPreset4,
                        'ap_preset5' => $APPreset5,
                        'ap_preset6' => $APPreset6,
                        'ap_preset7' => $APPreset7,
                        'ap_preset8' => $APPreset8,
                    ],
                    'defaultValue' => [
                        'is_room_number_required' => Helper::trueFalseString($IsRoomNumberRequiredDV),
                        'is_business_source_required' => Helper::trueFalseString($IsBusinessSourceRequiredDV),
                        'is_market_required' => Helper::trueFalseString($IsMarketRequiredDV),
                        'is_title_required' => Helper::trueFalseString($IsTitleRequiredDV),
                        'is_nationality_required' => Helper::trueFalseString($IsNationalityRequiredDV),
                        'is_phone1_required' => Helper::trueFalseString($IsPhone1RequiredDV),
                        'is_email_required' => Helper::trueFalseString($IsEmailRequiredDV),
                        'is_company_required' => Helper::trueFalseString($IsCompanyRequiredDV),
                        'is_hk_note_required' => Helper::trueFalseString($IsHKNoteRequiredDV),
                        'is_ta_voucher_required' => Helper::trueFalseString($IsTAVoucherRequiredDV),
                        'is_state_required' => Helper::trueFalseString($IsStateRequiredDV),
                        'is_city_required' => Helper::trueFalseString($IsCityRequiredDV),
                        'filter_rate_by_market' => Helper::trueFalseString($FilterRateByMarketDV),
                        'filter_rate_by_company' => Helper::trueFalseString($FilterRateByCompanyDV),
                        'always_show_publish_rate' => Helper::trueFalseString($AlwaysShowPublishRateDV),
                        'lock_folio_on_check_in' => Helper::trueFalseString($LockFolioOnCheckInDV),
                        'auto_generate_company_code' => Helper::trueFalseString($AutoGenerateCompanyCodeDV),
                        'post_first_night_charge' => Helper::trueFalseString($PostFirstNightChargeDV),
                        'post_discount' => Helper::trueFalseString($PostDiscountDV),
                        'keylock_limit' => $KeylockLimitDV,
                        'check_out_time' => $CheckOutLimitDV,
                        'company_code_digit' => $CompanyCodeDigit,
                        'company_code_digit' => $CompanyCodeDigitDV,
                        'default_room_type' => $DVRoomTypeDV,
                        'default_room_rate' => $DVRoomRateDV,
                        'default_sub_department' => $DVSubDepartmentDV,
                        'default_payment_type' => $DVPaymentTypeDV,
                        'default_compliment_rate' => $DVComplimentRateDV,
                        'default_house_rate' => $DVHouseUseRateDV,
                        'default_market' => $DVMarketDV,
                        'default_individual_market' => $DVIndividualMarketDV,
                        'ap_preset1' => $APPreset1DV,
                        'ap_preset2' => $APPreset2DV,
                        'ap_preset3' => $APPreset3DV,
                        'ap_preset4' => $APPreset4DV,
                        'ap_preset5' => $APPreset5DV,
                        'ap_preset6' => $APPreset6DV,
                        'ap_preset7' => $APPreset7DV,
                        'ap_preset8' => $APPreset8DV,
                    ],
                ],
                'lookup' => [
                    'room_rate' => $roomRate,
                    'market' => $market,
                    'room_type' => $roomType,
                    'sub_department' => $subDepartment,
                    'payment_type' => $paymentType,
                ]

            ]);
        }
    }

    public function getWalkingReservation2Lookup(){
        $market = Market::select('code','name')->get();
        $roomType= RoomType::select('code','name')->get();
        $subDepartment= SubDepartment::select('code','name')->get();
        $paymentType= PaymentType::select('code','name')->get();
        $roomRate= RoomRate::select('code','name')->get();

        return response()->json([
            'room_rate' => $roomRate,
            'market' => $market,
            'room_type' => $roomType,
            'sub_department' => $subDepartment,
            'payment_type' => $paymentType,
        ]);
    }

    public function updateWalkingReservation2(Request $request){
        $params = $request->all();
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsRoomNumberRequired'], Helper::varianString($params['is_room_number_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsBusinessSourceRequired'], Helper::varianString($params['is_business_source_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsMarketRequired'], Helper::varianString($params['is_market_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsTitleRequired'], Helper::varianString($params['is_title_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsNationalityRequired'], Helper::varianString($params['is_nationality_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsPhone1Required'], Helper::varianString($params['is_phone1_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsEmailRequired'], Helper::varianString($params['is_email_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsCompanyRequired'], Helper::varianString($params['is_company_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsHKNoteRequired'], Helper::varianString($params['is_hk_note_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsTAVoucherRequired'], Helper::varianString($params['is_ta_voucher_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsStateRequired'], Helper::varianString($params['is_state_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['IsCityRequired'], Helper::varianString($params['is_city_required']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['FilterRateByMarket'], Helper::varianString($params['filter_rate_by_market']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['FilterRateByCompany'], Helper::varianString($params['filter_rate_by_company']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['AlwaysShowPublishRate'], Helper::varianString($params['always_show_publish_rate']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['LockFolioOnCheckIn'], Helper::varianString($params['lock_folio_on_check_in']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['AutoGenerateCompanyCode'], Helper::varianString($params['auto_generate_company_code']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['PostFirstNightCharge'], Helper::varianString($params['post_first_night_charge']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['PostDiscount'], Helper::varianString($params['post_discount']),$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['KeylockLimit'],$params['keylock_limit'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['CheckOutLimit'],$params['check_out_time'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['Reservation'],
            GlobalVariable::$configurationName['CompanyCodeDigit'],$params['company_code_digit'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['DefaultVariable'],
            GlobalVariable::$configurationName['DVRoomType'],$params['default_room_type'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['DefaultVariable'],
            GlobalVariable::$configurationName['DVRoomRate'],$params['default_room_rate'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['DefaultVariable'],
            GlobalVariable::$configurationName['DVSubDepartment'],$params['default_sub_department'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['DefaultVariable'],
            GlobalVariable::$configurationName['DVPaymentType'],$params['default_payment_type'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['DefaultVariable'],
            GlobalVariable::$configurationName['DVComplimentRate'],$params['default_compliment_rate'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['DefaultVariable'],
            GlobalVariable::$configurationName['DVHouseUseRate'],$params['default_house_rate'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['DefaultVariable'],
            GlobalVariable::$configurationName['DVMarket'],$params['default_market'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['DefaultVariable'],
            GlobalVariable::$configurationName['DVIndividualMarket'],$params['default_individual_market'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['AmountPreset'],
            GlobalVariable::$configurationName['APPreset1'],$params['ap_preset1'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['AmountPreset'],
            GlobalVariable::$configurationName['APPreset2'],$params['ap_preset2'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['AmountPreset'],
            GlobalVariable::$configurationName['APPreset3'],$params['ap_preset3'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['AmountPreset'],
            GlobalVariable::$configurationName['APPreset4'],$params['ap_preset4'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['AmountPreset'],
            GlobalVariable::$configurationName['APPreset5'],$params['ap_preset5'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['AmountPreset'],
            GlobalVariable::$configurationName['APPreset6'],$params['ap_preset6'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['AmountPreset'],
            GlobalVariable::$configurationName['APPreset7'],$params['ap_preset7'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['AmountPreset'],
            GlobalVariable::$configurationName['APPreset8'],$params['ap_preset8'],$params['user_id']);

            return response()->json($params);
    }

    public function getGlobalParameterList(){
        $configuration = Configuration::select('name','value','default_value')
            ->whereIn('category',[GlobalVariable::$configurationCategory['GlobalAccount'],GlobalVariable::$configurationCategory['GlobalDepartment'],GlobalVariable::$configurationCategory['GlobalSubDepartment'],GlobalVariable::$configurationCategory['GlobalOther'],GlobalVariable::$configurationCategory['Other']])
            ->whereIn('system_code',[GlobalVariable::$constProgramVariable['DefaultSystemCode'],'G'])
            ->get();

        $account = Account::select('code','name')->get();
        $subDepartment = SubDepartment::select('code','name')->get();
        $travelAgentType = CompanyType::select('code','name')->get();
        $paymentType = PaymentType::select('code','name')->get();
        $department= Department::select('code','name')->get();

        if(!empty($configuration)){
            foreach($configuration as $configurationX){
                if($configurationX->name == GlobalVariable::$configurationName['AccountRoomCharge']){
                    $AccountRoomCharge = $configurationX->value;
                    $AccountRoomChargeDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountExtraBed']){
                    $AccountExtraBed = $configurationX->value;
                    $AccountExtraBedDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountCanceletionFee']){
                    $AccountCanceletionFee = $configurationX->value;
                    $AccountCanceletionFeeDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountNoShow']){
                    $AccountNoShow = $configurationX->value;
                    $AccountNoShowDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountBreakfast']){
                    $AccountBreakfast = $configurationX->value;
                    $AccountBreakfastDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountTelephone']){
                    $AccountTelephone = $configurationX->value;
                    $AccountTelephoneDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountAPRefundDeposit']){
                    $AccountAPRefundDeposit = $configurationX->value;
                    $AccountAPRefundDepositDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountAPCommission']){
                    $AccountAPCommission = $configurationX->value;
                    $AccountAPCommissionDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountCreditCardAdm']){
                    $AccountCreditCardAdm = $configurationX->value;
                    $AccountCreditCardAdmDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountCash']){
                    $AccountCash = $configurationX->value;
                    $AccountCashDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountCityLedger']){
                    $AccountCityLedger = $configurationX->value;
                    $AccountCityLedgerDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountVoucher']){
                    $AccountVoucher = $configurationX->value;
                    $AccountVoucherDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountVoucherCompliment']){
                    $AccountVoucherCompliment = $configurationX->value;
                    $AccountVoucherComplimentDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountTax']){
                    $AccountTax = $configurationX->value;
                    $AccountTaxDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountService']){
                    $AccountService = $configurationX->value;
                    $AccountServiceDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountTransferDepositReservation']){
                    $AccountTransferDepositReservation = $configurationX->value;
                    $AccountTransferDepositReservationDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountTransferDepositReservationToFolio']){
                    $AccountTransferDepositReservationToFolio = $configurationX->value;
                    $AccountTransferDepositReservationToFolioDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountTransferCharge']){
                    $AccountTransferCharge = $configurationX->value;
                    $AccountTransferChargeDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['AccountTransferPayment']){
                    $AccountTransferPayment = $configurationX->value;
                    $AccountTransferPaymentDV = $configurationX->default_value;
                }

                if($configurationX->name == GlobalVariable::$configurationName['CompanyTypeTravelAgent']){
                    $CompanyTypeTravelAgent = $configurationX->value;
                    $CompanyTypeTravelAgentDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['DFoodBeverage']){
                    $DFoodBeverage = $configurationX->value;
                    $DFoodBeverageDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['SDFrontOffice']){
                    $SDFrontOffice = $configurationX->value;
                    $SDFrontOfficeDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['SDHouseKeeping']){
                    $SDHouseKeeping = $configurationX->value;
                    $SDHouseKeepingDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['SDBanquet']){
                    $SDBanquet = $configurationX->value;
                    $SDBanquetDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['SDAccounting']){
                    $SDAccounting = $configurationX->value;
                    $SDAccountingDV = $configurationX->default_value;
                }
                if($configurationX->name == GlobalVariable::$configurationName['GOPaymentType']){
                    $GOPaymentType = $configurationX->value;
                    $GOPaymentTypeDV = $configurationX->default_value;
                }
            }

            return response()->json([
                'data' => [
                    'value'=>[
                        'account_room_charge' => $AccountRoomCharge,
                        'account_extra_bed' => $AccountExtraBed,
                        'account_cancellation_fee' => $AccountCanceletionFee,
                        'account_no_show' => $AccountNoShow,
                        'account_breakfast' => $AccountBreakfast,
                        'account_telephone' => $AccountTelephone,
                        'account_ap_refund_deposit' => $AccountAPRefundDeposit,
                        'account_ap_commission' => $AccountAPCommission,
                        'account_cc_admin' => $AccountCreditCardAdm,
                        'account_cash' => $AccountCash,
                        'account_city_ledger' => $AccountCityLedger,
                        'account_voucher' => $AccountVoucher,
                        'account_voucher_compliment' => $AccountVoucherCompliment,
                        'account_tax' => $AccountTax,
                        'account_service' => $AccountService,
                        'account_transfer_deposit_reservation' => $AccountTransferDepositReservation,
                        'account_transfer_deposit_reservation_to_folio' => $AccountTransferDepositReservationToFolio,
                        'account_transfer_charge' => $AccountTransferCharge,
                        'account_transfer_payment' => $AccountTransferPayment,
                        'travel_agent_type' => $CompanyTypeTravelAgent,
                        'food_and_beverage' => $DFoodBeverage,
                        'front_office' => $SDFrontOffice,
                        'housekeeping' => $SDHouseKeeping,
                        'banquet' => $SDBanquet,
                        'accounting' => $SDAccounting,
                        'payment_type' => $GOPaymentType,
                    ],
                    'defaultValue'=> [
                        'account_room_charge' => $AccountRoomChargeDV,
                        'account_extra_bed' => $AccountExtraBedDV,
                        'account_cancellation_fee' => $AccountCanceletionFeeDV,
                        'account_no_show' => $AccountNoShowDV,
                        'account_breakfast' => $AccountBreakfastDV,
                        'account_telephone' => $AccountTelephoneDV,
                        'account_ap_refund_deposit' => $AccountAPRefundDepositDV,
                        'account_ap_commission' => $AccountAPCommissionDV,
                        'account_cc_admin' => $AccountCreditCardAdmDV,
                        'account_cash' => $AccountCashDV,
                        'account_city_ledger' => $AccountCityLedgerDV,
                        'account_voucher' => $AccountVoucherDV,
                        'account_voucher_compliment' => $AccountVoucherComplimentDV,
                        'account_tax' => $AccountTaxDV,
                        'account_service' => $AccountServiceDV,
                        'account_transfer_deposit_reservation' => $AccountTransferDepositReservationDV,
                        'account_transfer_deposit_reservation_to_folio' => $AccountTransferDepositReservationToFolioDV,
                        'account_transfer_charge' => $AccountTransferChargeDV,
                        'account_transfer_payment' => $AccountTransferPaymentDV,
                        'travel_agent_type' => $CompanyTypeTravelAgentDV,
                        'food_and_beverage' => $DFoodBeverageDV,
                        'front_office' => $SDFrontOfficeDV,
                        'housekeeping' => $SDHouseKeepingDV,
                        'banquet' => $SDBanquetDV,
                        'accounting' => $SDAccountingDV,
                        'payment_type' => $GOPaymentTypeDV,

                    ]
                ],
                'lookup' =>[
                    'account' => $account,
                    'sub_department' => $subDepartment,
                    'travel_agent_type' => $travelAgentType,
                    'payment_type' => $paymentType,
                    'department' => $department
                ]
            ]);
        }
    }

    public function getGlobalParameterLookup(){
        $account = Account::select('code','name')->get();
        $subDepartment = SubDepartment::select('code','name')->get();
        $travelAgentType = CompanyType::select('code','name')->get();
        $paymentType = PaymentType::select('code','name')->get();
        $department= Department::select('code','name')->get();

        return response()->json([
            'account' => $account,
            'sub_department' => $subDepartment,
            'travel_agent_type' => $travelAgentType,
            'payment_type' => $paymentType,
            'department' => $department
        ]);
    }

    public function updateGlobalParameter(Request $request){
        $params = $request->all();
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountRoomCharge'],$params['account_room_charge'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountExtraBed'],$params['account_extra_bed'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountCanceletionFee'],$params['account_cancellation_fee'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountNoShow'],$params['account_no_show'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountBreakfast'],$params['account_breakfast'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountTelephone'],$params['account_telephone'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountAPRefundDeposit'],$params['account_ap_refund_deposit'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountAPCommission'],$params['account_ap_commission'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountCreditCardAdm'],$params['account_cc_admin'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountCash'],$params['account_cash'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountCityLedger'],$params['account_city_ledger'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountVoucher'],$params['account_voucher'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountVoucherCompliment'],$params['account_voucher_compliment'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountTax'],$params['account_tax'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountService'],$params['account_service'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountTransferDepositReservation'],$params['account_transfer_deposit_reservation'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountTransferDepositReservationToFolio'],$params['account_transfer_deposit_reservation_to_folio'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountTransferCharge'],$params['account_transfer_charge'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalAccount'],
            GlobalVariable::$configurationName['AccountTransferPayment'],$params['account_transfer_payment'],$params['user_id']);
        ProcedureQueryController::updateConfiguration('G', GlobalVariable::$configurationCategory['Other'],
            GlobalVariable::$configurationName['CompanyTypeTravelAgent'],$params['travel_agent_type'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalDepartment'],
            GlobalVariable::$configurationName['DFoodBeverage'],$params['food_and_beverage'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalSubDepartment'],
            GlobalVariable::$configurationName['SDFrontOffice'],$params['front_office'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalSubDepartment'],
            GlobalVariable::$configurationName['SDHouseKeeping'],$params['housekeeping'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalSubDepartment'],
            GlobalVariable::$configurationName['SDBanquet'],$params['banquet'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalSubDepartment'],
            GlobalVariable::$configurationName['SDAccounting'],$params['accounting'],$params['user_id']);
        ProcedureQueryController::updateConfiguration(GlobalVariable::$constProgramVariable['DefaultSystemCode'], GlobalVariable::$configurationCategory['GlobalOther'],
            GlobalVariable::$configurationName['GOPaymentType'],$params['payment_type'],$params['user_id']);

            return 0;
    }

    public function getCompanyInformation(){
        $company= CompanyInformation::first();
        $country= Country::select('code','name')->get();
        $state= State::select('code','name')->get();

        return response()->json([
            'data' => $company,
            'lookup' => [
                'country' => $country,
                'state' => $state
            ]
        ]);
    }

    public function getCompanyInformationLookup(Request $request){
        $params = $request->all();
        $country= Country::select('code','name')->get();
        $state= State::select('code','name');

        if(!empty($params['country_code'])){
            $state->where('country_code',$params['country_code']);
        }

        return response()->json([
            'country' => $country,
            'state' => $state->get()
        ]);
    }

    public function updateCompanyInformation(Request $request){
        $params = $request->all();
        $userGroup= User::select('group_code')->where('code',$params['user_id'])->first();
        $companyInformation = CompanyInformation::first();

        if(!empty($userGroup)){
            CompanyInformation::where('code',$params['code'])->update([
                'country_code' => $params['country_code'],
                'state_code' => $params['state_code'],
                'postal_code' => $params['postal_code'],
                'phone1' => $params['phone1'],
                'phone2' => $params['phone2'],
                'fax' => $params['fax'],
                'email' => $params['email'],
                'website' => $params['website'],
                'foto' => $params['foto']
            ]);
            return 0;
        } else {
            return 1;
        }
    }
}
