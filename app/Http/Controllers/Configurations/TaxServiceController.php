<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\Account;
use App\Guest\Models\GuestDeposit;
use App\Http\Controllers\AuditDateController;
use App\Http\Controllers\Configurations\ConfigurationController;
use App\Http\Controllers\General\ShiftLogController;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Folio\SubFolioController;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\HelperController;
use Illuminate\Support\Facades\DB;
class TaxServiceController extends Controller
{
    public static function insertValueAccount($request, $postingType, $type, $isTaxes, $folioNumber, $account, $amount, $remark){
       $Account= Account::select('tax','service','service_tax','is_tax_include','is_service_include')->where('cfg_init_account.code',$account)
            ->join('cfg_init_tax_and_service','cfg_init_account.tax_and_service_code','cfg_init_tax_and_service.code')
            ->first();

        $taxServiceInclude= $Account->is_tax_include == '-1' && $Account->is_service_include == '-1';
        $taxServiceExclude= $Account->is_tax_include == '0' && $Account->is_service_include == '0';
        $taxExludeServiceInclude = $Account->is_tax_include == '0' && $Account->is_service_include == '-1';
        $taxIncludeServiceExlude = $Account->is_tax_include == '-1' && $Account->is_service_include == '0';


        $tax = $Account->tax / 100;
        $service = $Account->service / 100;
        $serviceTax= ($Account->service_tax / 100) * $service;
        $taxWithServiceTax = $tax + $serviceTax;
        $taxService = ($taxWithServiceTax + $service) + 1;
        $serviceOnly = $service + 1;
        $taxOnly = ($tax / 100) + 1;
        $result = null;
        $taxValue = null;
        $serviceValue = null;

        $breakdown = HelperController::getSubFolioBreakdown1();
        if( $isTaxes ){
            if( $taxServiceInclude ){
                $result = $amount / $taxService;
                $taxValue = $result * $taxWithServiceTax;
                $serviceValue = $result * $service;
                $nett = $amount - round($taxValue,3) - round($serviceValue,3);
            } else if( $taxServiceExclude ){
                $result = $amount;
                $taxValue = $amount * $taxWithServiceTax;
                $serviceValue = $amount * $service;
                $nett = $amount;
            } else if( $taxExludeServiceInclude ){
                $result = $amount / $serviceOnly;
                $taxValue = $amount * $tax;
                $serviceValue = $result * $service;
                $nett = $result;
            } else if( $taxIncludeServiceExlude ){
                $result = $amount / ($taxWithServiceTax + 1);
                $taxValue = $result * $taxWithServiceTax;
                $serviceValue = $result * $service;
                $nett = $result;
            }
        } else {
            $nett = $amount;
        }

    }


}
