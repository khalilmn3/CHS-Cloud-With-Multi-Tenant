<?php

namespace App\Http\Controllers;

use App\Configurations\Models\Account;
use App\Configurations\Models\ChargeFrequency;
use App\Configurations\Models\Company;
use App\Configurations\Models\SubDepartment;
use App\Configurations\Models\TaxService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class DataLookupController extends Controller
{
    public static function account($group, $dept){
        if(!empty($dept)){
            $query= Account::select(DB::raw('CONCAT(code," - ",name) as name'),'code', 'sub_group_code')->where('sub_department_code','like', '%'.$dept.'%')->get();

            if($group != null){
             $query->where('sub_group_code',$group);
            }
            return $query;
        }
    }

    public static function subDepartment(){
        $query = SubDepartment::select('name','code')->orderBy('id_sort','ASC')->get();
        return $query;
    }

    public static function taxService(){
        $query = TaxService::select('name','code')->get();
        return $query;
    }

    public static function chargeFrequently(){
        $query = ChargeFrequency::select('name','code')->get();
        return $query;
    }

    public static function outlet(){
        $query = DB::table('pos_cfg_init_outlet')->select('name','code','sub_department_code')->get();
        return $query;
    }

    public static function product($outletCode){
        $query = DB::table('pos_cfg_init_product')->select('pos_cfg_init_product.name','pos_cfg_init_product.code','account_code')
            ->leftJoin('pos_cfg_init_product_group', 'pos_cfg_init_product.group_code','pos_cfg_init_product_group.code')
            ->where('outlet_code', $outletCode)
            ->get();
        return $query;
    }

    public static function company($isBusinessSource, $isDirectBill){
        $company = Company::select('company.*');

        if($isBusinessSource){
            $company->where('is_business_source', '-1');
        }
        if($isDirectBill){
            $company->where('is_direct_bill', '-1');
        }

        return $company->get();
    }

}
