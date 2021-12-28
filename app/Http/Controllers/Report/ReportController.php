<?php

namespace App\Http\Controllers\Report;

use App\Configurations\Models\LogUserAction;
use App\Reservation;
use App\Configurations\Models\Company;
use App\Configurations\Models\CompanyType;
use App\Configurations\Models\ConstGuestStatus;
use App\Configurations\Models\Room;
use App\Configurations\Models\RoomUnavailable;
use App\Configurations\Models\Market;
use App\Configurations\Models\SubDepartment;
use App\Configurations\Models\Account;
use App\Configurations\Models\PhoneBookType;
use App\Guest\Models\GuestGroup;
use App\Folio\Models\Folio;
use App\Folio\Models\SubFolio;
use App\Guest\Models\GuestDeposit;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FormatController;
use App\Http\Controllers\General\AuditLogController;
use App\Http\Controllers\GlobalVariableController as Variable;
use App\Http\Controllers\GlobalVariableController;
use App\Http\Controllers\ProcedureQueryController;
use App\Http\Controllers\HelperController;
use App\Tools\UserSetting\User;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class ReportController extends Controller
{
    protected $companyProfile;

    public function __construct(){
        $this->companyProfile = HelperController::getCompanyProfile();
    }
        public static function makeReportTemplate(){
            $queryData = DB::table('cfg_init_account')
                ->get();
            // $queryData = DB::select(
            //     DB::raw('SELECT "" AS M1, "" AS M2, "" AS M3, "" AS M4, "" AS M5, "" AS M6, "" AS M7, "" AS M8, "" AS M9, "" AS M10, "" AS M11, "" AS M12, "" AS M13, "" AS M14, "" AS M15, "" AS M16, "" AS M17, "" AS M18, "" AS M19, "" AS M20, "" AS M21, "" AS M22, "" AS M23, "" AS M24, "" AS M25'));

            //$queryData = DB::select(DB::raw('SELECT number, owner_code FROM cfg_init_room'));

            $hotelInformation = HelperController::getCompanyProfile();
            return response()->json([
                'company' => $hotelInformation,
                'data' => $queryData
            ]);
        }

        public static function getReportListData(Request $request){
            $params = $request->all();
            $userID= Arr::get($params, 'userID', '');

            $accessReportSQL = User::select('access_report')
                ->leftJoin('user_group', 'users.group_code', 'user_group.code')
                ->where('users.code', $userID)
                ->first();

            $accessReport = '';
            try {
                $accessReport = Crypt::decryptString($accessReportSQL->access_report);
            } catch (DecryptException $e) {
                $accessReport = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
            }

            if(strlen($accessReport) < 165 ){
                $accessReport = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
            }


            $mainTableName = 'report';
            $parent = DB::table($mainTableName)
            ->select('code', 'name', 'tag_order')
            ->where('code', '<=', 1000)
            ->where('is_show', "-1")
            ->get();

            $child = DB::table($mainTableName)
            ->select(
                $mainTableName.'.name',
                $mainTableName.'.code',
                $mainTableName.'.parent_id',
                $mainTableName.'.tag_order')
            ->where($mainTableName.'.code', '>', 1000)
            ->where($mainTableName.'.is_show', "-1")
            ->orderBy($mainTableName.'.id_sort')
            ->get();

            foreach($parent as $Parent){
                $dataChild = array();

                foreach($child as $Child){
                    if ($Parent->code === $Child->parent_id){
                        $fileName =  str_replace(' ', '', $Child->name);

                        $dataChild [] = array('id' => $Child->code, 'title' => $Child->name, 'visible' => ($accessReport[$Child->tag_order] == '1' ? true:false), 'fileName' => $fileName, 'tagOrder' => $Child->tag_order);
                    }
                }
                $dataTree [] = array('id' => $Parent->code, 'title' => $Parent->name, 'expanded' => false, 'tagOrder' =>$Parent->tag_order, 'children' => $dataChild);
            }

            return response()->json([
                'dataTree' => $dataTree,
            ]);
        }

        public static function getReportTemplate(Request $request){
            $params = $request->all();
            $reportCode= Arr::get($params, 'reportCode', '');

            $reportTemplate = DB::table('report_template')
                ->select('id_log', 'name', 'is_default', 'is_system')
                ->where('report_code', $reportCode)
                ->orderBy('id_sort')
                ->get();

            return response()->json([
                'reportTemplate' => $reportTemplate
            ]);
        }

        // public static function processReportTemplate($ReportCode, $Limit, $GroupLevel, $TemplateID, $DateDescription, $QueryCondition1, $QueryCondition2, $QueryCondition3, $QueryCondition4, $QueryCondition5, $QueryCondition6, $QueryCondition7, $QueryCondition8, $ReportPrint){
        public static function processReportTemplate(Request $request){
            $params = $request->all();
            $ReportCode= Arr::get($params, 'reportId', '');
            $TemplateID= Arr::get($params, 'templateID', '');
            $queryCondition1= Arr::get($params, 'queryCondition1', '');
            $queryCondition2= Arr::get($params, 'queryCondition2', '');
            $queryCondition3= Arr::get($params, 'queryCondition3', '');
            $queryCondition4= Arr::get($params, 'queryCondition4', '');
            $queryCondition5= Arr::get($params, 'queryCondition5', '');
            $queryCondition6= Arr::get($params, 'queryCondition6', '');
            $queryCondition7= Arr::get($params, 'queryCondition7', '');
            $queryCondition8= Arr::get($params, 'queryCondition8', '');
            $queryCondition9= Arr::get($params, 'queryCondition9', '');

            // $ReportCode = 1001;
            // $TemplateID = 1;
            //Table report
            $Report = 'report';
            $ReportDefaultField = 'report_default_field';
            $ReportTemplate = 'report_template';
            $ReportTemplateField = 'report_template_field';
            $ReportGroupField = 'report_group_field';
            $ReportOrderField = 'report_order_field';
            $ReportGroupingField = 'report_grouping_field';
            //Condition Sintax
            $ConditionSyntax1 = '"Condition1"="Condition1"';
            $ConditionSyntax2 = '"Condition2"="Condition2"';
            $ConditionSyntax3 = '"Condition3"="Condition3"';
            $ConditionSyntax4 = '"Condition4"="Condition4"';
            $ConditionSyntax5 = '"Condition5"="Condition5"';
            $ConditionSyntax6 = '"Condition6"="Condition6"';
            $ConditionSyntax7 = '"Condition7"="Condition7"';
            $ConditionSyntax8 = '"Condition8"="Condition8"';
            $ConditionSyntax9 = '"Condition9"="Condition9"';
            $OrderBySyntax = '#ORDER BY';
            $GroupBySyntax = '#GROUP BY';
            //Query Report For Page
            $reportPageSize = DB::table($ReportTemplate)
                                ->select('*')
                                ->where('id_log', $TemplateID)
                                ->first();

            $template [] = array('pageSize' => $reportPageSize->paper_size, 'pageWidth' => $reportPageSize->paper_width, 'pageHeight' => $reportPageSize->paper_height,
                'orientation' => $reportPageSize->is_portrait, 'reportName' => $reportPageSize->name,
                'reportGroupLevel' => $reportPageSize->group_level, 'headerHeight' => $reportPageSize->header_row_height, 'rowHeight' => $reportPageSize->row_height,
                'horizontalBorder' => $reportPageSize->horizontal_border, 'verticalBorder' => $reportPageSize->vertical_border, 'showFooter' => $reportPageSize->show_footer);

            //Query Report Template
            $reportTemplateData = DB::table($Report)
                ->select('report_query')
                ->where('code', $ReportCode)
                ->first();;

            //Process Replace with default Field
            $reportTemplateQuery = $reportTemplateData->report_query;
            $arrReportTemplate = preg_split("/\r\n|\n|\r/", $reportTemplateQuery);
            $countArrReportTemplate = count($arrReportTemplate);
            //Delete All Field
            for($i=0; $i < $countArrReportTemplate - 1; $i++ ){
               if($arrReportTemplate[$i] == 'FROM'){
                    break;
               }
               else{
                   unset($arrReportTemplate[$i]);
               }
            }

            //Reindex Array
            $arrReportTemplate = array_values($arrReportTemplate);
            //Get Field From Template Field & Set Header Name
            $reportTemplateField = DB::select(DB::raw
                                  ('SELECT
                                  '.$ReportDefaultField.'.field_query,
                                  '.$ReportTemplateField.'.*,
                                  const_report_format.name AS FormatName,
                                  const_report_format.is_numeric,
                                  const_report_font.name AS FontName
                                 FROM
                                  '.$ReportTemplateField.'
                                  LEFT OUTER JOIN const_report_format ON ('.$ReportTemplateField.'.format_code = const_report_format.code)
                                  LEFT OUTER JOIN const_report_font ON ('.$ReportTemplateField.'.font = const_report_font.code)
                                  LEFT OUTER JOIN '.$ReportTemplate.' ON ('.$ReportTemplateField.'.template_id = '.$ReportTemplate.'.id_log)
                                  LEFT OUTER JOIN '.$ReportDefaultField.' ON ('.$ReportTemplateField.'.field_name = '.$ReportDefaultField.'.field_name AND '.$ReportTemplate.'.report_code = '.$ReportDefaultField.'.report_code)
                                 WHERE '.$ReportTemplateField.'.template_id=' .$TemplateID.'
                                 ORDER BY '.$ReportTemplateField.'.id_sort'));

            $arrReportTemplateField = array();
            //Header
            $headerName = array();
            $headerWidth = array();

            $constFont = array('Arial', 'Tahoma', 'Verdana', 'Microsoft Sans Serif', 'Times New Roman', 'Comic Sans MS', 'Lucida Console');
            $constFormat = array('', '%2.0n', '%2.1n', '%2.2n', '%2.3n', 'dd/MM/yyyy', 'dd/MM/yy', 'dd-MM-yyyy', 'dd-MM-yy', 'dd/MM/yyyy HH:mm:ss', 'dd/MM/yy HH:mm:ss', 'dd/MM/yyyy HH:mm', 'dd/MM/yy HH:mm', 'HH:mm:ss', 'HH:mm');

            $headerFontSize = array();
            $headerFontColor = array();
            $headerAlignment = array();
            $headerFont = array();
            //Master Data/Column
            $columnName = array();
            $formatCode = array();
            $columnFontSize = array();
            $columnFontColor = array();
            $columnAlignment = array();
            //Footer
            $footerType = array();

            array_push($arrReportTemplateField, 'SELECT');
            foreach($reportTemplateField as $reportTemplateFieldData){
                if($reportTemplateFieldData->field_query == '(EmptyField)') {
                    array_push($arrReportTemplateField, ' "" AS EmptyField,');
                }
                else if ($reportTemplateFieldData->field_query != '(Number)'){
                    array_push($arrReportTemplateField, $reportTemplateFieldData->field_query . ',');
                }
                //Header
                array_push($headerName, $reportTemplateFieldData->header_name);
                array_push($headerWidth, $reportTemplateFieldData->width);
                array_push($headerFontSize, $reportTemplateFieldData->header_font_size);
                array_push($headerFontColor, $reportTemplateFieldData->header_font_color);
                array_push($headerAlignment, $reportTemplateFieldData->header_alignment);
                array_push($headerFont, $reportTemplateFieldData->font);
                //Column
                array_push($columnName, $reportTemplateFieldData->field_name);
                array_push($formatCode, $reportTemplateFieldData->format_code);
                array_push($columnFontSize , $reportTemplateFieldData->font_size);
                array_push($columnFontColor , $reportTemplateFieldData->font_color);
                array_push($columnAlignment, $reportTemplateFieldData->alignment);
                //Footer
                array_push($footerType, $reportTemplateFieldData->footer_type);
            }

            //change Value Array Font with Const Font
            $headerFontFix = array();
            for($i = 0; $i < count($headerFont); $i++){
                array_push($headerFontFix, $constFont[$headerFont[$i]]);
            }
            //process value const format
            $formatCodeValue = array();
            for($i = 0; $i < count($formatCode); $i++){
                array_push($formatCodeValue, $constFormat[$formatCode[$i]]);
            }

            //Processs Group By Field
            $reportGroupField = DB::select(
                DB::raw(
                   'SELECT
                    report_group_field.field_name,
                    report_default_field.field_query
                   FROM
                    report_group_field
                    LEFT OUTER JOIN report_template ON (report_group_field.template_id = report_template.id_log)
                    LEFT OUTER JOIN report_default_field ON (report_group_field.field_name = report_default_field.field_name AND report_template.report_code = report_default_field.report_code)
                   WHERE '.$ReportGroupField.'.template_id='.$TemplateID.'
                   ORDER BY '.$ReportGroupField.'.id_sort'));

            $addFieldCondition = array();
            $GroupByString = '';
            if ($reportGroupField){
                foreach($reportGroupField as $reportGroupFieldData){
                    if (!in_array($reportGroupFieldData->field_query.',', $arrReportTemplateField)) {
                        array_push($arrReportTemplateField, $reportGroupFieldData->field_query.',');
                        array_push($addFieldCondition, $reportGroupFieldData->field_name);
                    }
                    $GroupByString = $GroupByString.'`'.$reportGroupFieldData->field_name.'`,';
                }
            }
            if($GroupByString != ''){
                $GroupByString = 'GROUP BY '.FormatController::leftStr($GroupByString, strlen($GroupByString) - 1);
            }
            //Processing Order By
            $reportOrderField = DB::select(
                DB::raw(
                    'SELECT
                    report_order_field.field_name,
                    report_order_field.is_ascending,
                    report_default_field.field_query
                   FROM
                    report_order_field
                    LEFT OUTER JOIN report_template ON (report_order_field.template_id = report_template.id_log)
                    LEFT OUTER JOIN report_default_field ON (report_order_field.field_name = report_default_field.field_name AND report_template.report_code = report_default_field.report_code)
                   WHERE '.$ReportOrderField.'.template_id='.$TemplateID.'
                   ORDER BY '.$ReportOrderField.'.id_sort'));

            $OrderByString = '';
            if ($reportOrderField){
                foreach($reportOrderField as $reportOrderFieldData){
                    if (!in_array($reportOrderFieldData->field_query.',', $arrReportTemplateField)) {
                        array_push($arrReportTemplateField, $reportOrderFieldData->field_query.',');
                        array_push($addFieldCondition, $reportOrderFieldData->field_name);
                    }
                    $OrderByString = $OrderByString.'`'.$reportOrderFieldData->field_name.'`,';
                }
            }
            if($OrderByString != ''){
                $OrderByString = 'ORDER BY '.FormatController::leftStr($OrderByString, strlen($OrderByString) - 1);
            }
            //Processing Grouping Field
            $reportGroupingField = DB::select(
                DB::raw('SELECT
                report_grouping_field.field_name,
                report_default_field.field_query
               FROM
                report_grouping_field
                LEFT OUTER JOIN report_template ON (report_grouping_field.template_id = report_template.id_log)
                LEFT OUTER JOIN report_default_field ON (report_grouping_field.field_name = report_default_field.field_name AND report_template.report_code = report_default_field.report_code)
               WHERE '.$ReportGroupingField.'.template_id='.$TemplateID.'
               ORDER BY '.$ReportGroupingField.'.id_sort'));

            $groupingField = array();
            if ($reportGroupingField){
                foreach($reportGroupingField as $reportGroupingFieldData){
                    if (!in_array($reportGroupingFieldData->field_query.',', $arrReportTemplateField)) {
                        array_push($arrReportTemplateField, $reportGroupingFieldData->field_query.',');
                        array_push($addFieldCondition, $reportGroupingFieldData->field_name);
                    }
                    array_push($groupingField, $reportGroupingFieldData->field_name);
                }
            }

            //Clear Tanda Koma On Last Array
            $arrReportTemplateField[count($arrReportTemplateField) - 1] = FormatController::leftStr($arrReportTemplateField[count($arrReportTemplateField) - 1], strlen($arrReportTemplateField[count($arrReportTemplateField) - 1]) - 1);
            $arrReportTemplateField[count($arrReportTemplateField) - 1] = $arrReportTemplateField[count($arrReportTemplateField) - 1].' ';
            //Merge Template Query
            $countMergeTemplate = count($arrReportTemplate);
            for ($i=0; $i<$countMergeTemplate; $i++){
                array_push($arrReportTemplateField, $arrReportTemplate[$i]);
            }

            //Change Array to String
            $reportTemplateFinish = implode(PHP_EOL, $arrReportTemplateField);
            //Replace Sintax
            if ($queryCondition1 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax1, $queryCondition1, $reportTemplateFinish);
            }
            if ($queryCondition2 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax2, $queryCondition2, $reportTemplateFinish);
            }
            if ($queryCondition3 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax3, $queryCondition3, $reportTemplateFinish);
            }
            if ($queryCondition4 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax4, $queryCondition4, $reportTemplateFinish);
            }
            if ($queryCondition5 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax5, $queryCondition5, $reportTemplateFinish);
            }
            if ($queryCondition6 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax6, $queryCondition6, $reportTemplateFinish);
            }
            if ($queryCondition7 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax7, $queryCondition7, $reportTemplateFinish);
            }
            if ($queryCondition8 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax8, $queryCondition8, $reportTemplateFinish);
            }
            if ($queryCondition9 != ''){
                $reportTemplateFinish = str_replace($ConditionSyntax9, $queryCondition9, $reportTemplateFinish);
            }

            if ($GroupByString != ''){
                $reportTemplateFinish = str_replace($GroupBySyntax, $GroupByString, $reportTemplateFinish);
            }
            if ($OrderByString != ''){
                $reportTemplateFinish = str_replace($OrderBySyntax, $OrderByString, $reportTemplateFinish);
            }

            $reportTemplateFinish = DB::select(DB::raw($reportTemplateFinish));
            $hotelInformation = HelperController::getCompanyProfile();

            return response()->json([
                    'company' => $hotelInformation,
                    'data' => $reportTemplateFinish,
                    'fieldData' => array($headerName, $columnName, $formatCode, $formatCodeValue, $headerWidth, $headerFontSize, $columnFontSize, $headerFontColor, $columnFontColor, $headerAlignment, $columnAlignment, $headerFontFix, $footerType),
                    'template' => $template,
                    'groupingField' => $groupingField,
            ]);
        }

        public static function editReportEditor(Request $request){
            $templateId = $request->id_log;
            //$templateId = 1;

            $reportTemplate = DB::table('report_template')
                ->where('id_log', $templateId)
                ->first();
            $templateCode = $reportTemplate->report_code;

            $ReportDefaultField = DB::table('report_default_field')
                ->select('field_name')
                ->where('report_code', $templateCode)
                ->orderBy('id_sort')
                ->get();

            $reportGroupField = DB::table('report_group_field')
                ->select('field_name')
                ->where('template_id', $templateId)
                ->orderBy('id_sort')
                ->get();

            $reportOrderField = DB::table('report_order_field')
                ->select('field_name', 'is_ascending')
                ->where('template_id', $templateId)
                ->orderBy('id_sort')
                ->get();

            $reportGroupingField = DB::table('report_grouping_field')
                ->select('field_name')
                ->where('template_id', $templateId)
                ->orderBy('id_sort')
                ->get();

            $reportTemplateField = DB::table('report_template_field')
                ->where('template_id', $templateId)
                ->orderBy('id_sort')
                ->get();

            return response()->json([
                'reportTemplate' => $reportTemplate,
                'reportTemplateField' => $reportTemplateField,
                'reportDefaultField' => $ReportDefaultField,
                'reportGroupField' => $reportGroupField,
                'reportOrderField' => $reportOrderField,
                'reportGroupingField' => $reportGroupingField,
            ]);
        }

        public static function updateTemplateDefaultReport(Request $request){
            $params = $request->all();
            $templateId = $params['templateId'];

            //Delete
            ProcedureQueryController::deleteTemplateGroupField($templateId);
            ProcedureQueryController::deleteTemplateOrderField($templateId);
            ProcedureQueryController::deleteTemplateGroupingField($templateId);
            ProcedureQueryController::deleteTemplateDefaultField($templateId);

            //Report Group
            foreach($params['reportGroup'] as $param){
                $param = (object)$param;
                ProcedureQueryController::insertTemplateGroupField($param->template_id, $param->field_name, $param->id_sort);
            }
            //Report Order
            foreach($params['reportOrder'] as $param){
                $param = (object)$param;
                ProcedureQueryController::insertTemplateOrderField($param->template_id, $param->field_name, $param->is_ascending, $param->id_sort);
            }
            //Report Grouping
            foreach($params['reportGrouping'] as $param){
                $param = (object)$param;
                ProcedureQueryController::insertTemplateGroupingField($param->template_id, $param->field_name, $param->id_sort);
            }
            //Report Default Field
            foreach($params['reportField'] as $param){
                $param = (object)$param;
                ProcedureQueryController::insertTemplateDefaultField($param->template_id, $param->field_name, $param->header_name, $param->footer_type,
                    $param->format_code, $param->width, $param->font, $param->font_size, $param->font_color, $param->alignment, $param->header_font_size,
                    $param->header_font_color, $param->header_alignment, $param->id_sort);
            }
            return 0;
        }

        public static function insertTemplateReport(Request $request){
            $templateId = ProcedureQueryController::insertTemplateReport(
                $request->report_code, $request->name, $request->group_level, $request->header_remark, $request->show_footer, $request->paper_size, $request->paper_width, $request->paper_height,
                $request->is_portrait, $request->header_row_height, $request->row_height, $request->horizontal_border, $request->vertical_border, $request->sign_name1,
                $request->sign_position1, $request->sign_name2, $request->sign_position2, $request->sign_name3, $request->sign_position3, $request->sign_name4,
                $request->sign_position4, $request->user_id
            );

            return response()->json([
                'status' => 0,
                'templateId' => $templateId,
            ]);
        }

        public static function updateTemplateReport(Request $request){
            ProcedureQueryController::updateTemplateReport(
                $request->id_log, $request->name, $request->group_level, $request->header_remark, $request->show_footer, $request->paper_size, $request->paper_width, $request->paper_height,
                $request->is_portrait, $request->header_row_height, $request->row_height, $request->horizontal_border, $request->vertical_border, $request->sign_name1,
                $request->sign_position1, $request->sign_name2, $request->sign_position2, $request->sign_name3, $request->sign_position3, $request->sign_name4,
                $request->sign_position4, $request->user_id
            );
            return response()->json([
                'status' => 0,
                'templateId' => $request->id_log,
            ]);
        }

        public static function isTemplateSystemDefault(Request $request){
            $queryDB = DB::table('report_template')
                ->select('is_system')
                ->where('id_log', $request->id_log)
                ->first();

            $result = $queryDB->is_system;

            return response()->json([
                'is_system' => $result,
            ]);
        }

        public static function deleteTemplateReport(Request $request){
            ProcedureQueryController::deleteTemplateReport($request->id_log, $request->user_id);
            return 0;
        }

        public static function setAsDefaultTemplate(Request $request){
            ProcedureQueryController::setAsDefaultTemplateReport($request->report_code, $request->id_log, $request->user_id);
            return 0;
        }

        public static function setAsSystemDefaultTemplate(Request $request){
            ProcedureQueryController::setAsSystemDefaultTemplateReport($request->report_code, $request->is_system, $request->id_log, $request->user_id);
            return 0;
        }

        public static function ReportDataLookUpFilter1(){
            $user = DB::table('users')->select('code', 'name')->orderBy('code')->get();
            $guetGroup = GuestGroup::select('code', 'name')->orderBy('code')->get();
            $company = Company::select('code', 'name')->orderBy('code')->get();
            $companyType = CompanyType::select('code', 'name')->orderBy('id_sort')->get();
            $constGuestStatus = ConstGuestStatus::select('code', 'name')->orderBy('code')->get();
            $market = Market::select('code', 'name')->orderBy('code')->get();
            $businessSource = Company::select('code', 'name')->where('is_business_source','-1')->orderBy('code')->get();
            $subDepartment = SubDepartment::select('code', 'name')->orderBy('code')->get();
            $account = Account::select('code', 'name')->orderBy('code')->get();
            $subAccount = DB::table('cfg_init_account_sub_group')->select('code', 'name')->orderBy('code')->get();
            $nationality = DB::table('cfg_init_nationality')->select('code', 'name')->orderBy('code')->get();
            $bookingSource = DB::table('cfg_init_booking_source')->select('code', 'name')->orderBy('code')->get();
            $shift = DB::table('working_shift')->select('shift')->get();
            $building = Room::select('building')->groupBy('building')->get();
            $floor = Room::select('floor')->groupBy('floor')->get();
            $roomStatus = DB::table('const_room_status')->select('code', 'name')->orderBy('id_sort')->get();
            $phoneBookType = PhoneBookType::select('code', 'name')->orderBy('id_sort')->get();
            $logUserAction = LogUserAction::select('id', 'name')->orderBy('id_sort')->get();

            return response()->json([
                'user' => $user,
                'guestGroup' => $guetGroup,
                'company' => $company,
                'companyType' => $companyType,
                'constGuestStatus' => $constGuestStatus,
                'market' => $market,
                'businessSource' => $businessSource,
                'subDepartment' => $subDepartment,
                'account' => $account,
                'subAccount' => $subAccount,
                'nationality' => $nationality,
                'bookingSource' => $bookingSource,
                'shift' => $shift,
                'building' => $building,
                'floor' => $floor,
                'roomStatus' => $roomStatus,
                'phoneBookType' => $phoneBookType,
                'logUserAction' => $logUserAction,
            ]);
        }

        public static function reservationList($type,$fromDate,$toDate,$month,$year,$status){
            $title= 'Reservation List';
            $query= Reservation::select(
            'reservation.number',
            'reservation.reservation_by AS ReservationBy',
            'reservation.notes AS Notes',
            'reservation.hk_note AS HK Notes',
            'reservation.audit_date AS AuditDate',
            'reservation.user_id AS LastUpdate',
            DB::raw('ROUND(IFNULL(SUM(CASE WHEN guest_deposit.type_code="C" THEN guest_deposit.amount ELSE -guest_deposit.amount END), 0)) AS Deposit'),
            'contact_person.title_code AS Title',
            'contact_person.full_name AS FullName',
            DB::raw('TRIM(CONCAT(contact_person.street, " ", IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name), " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
            DB::raw('IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name) AS City'),
            DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
            'contact_person.phone1 AS Phone1',
            'contact_person.phone2 AS Phone2',
            'contact_person.fax AS Fax',
            'contact_person.email AS Email',
            'contact_person.website AS Website',
            'contact_person.id_card_number AS IDCardNumber',
            'contact_person.is_male AS Gender',
            'contact_person.birth_place AS BirthPlace',
            'contact_person.birth_date AS BirthDate',
            'guest_detail.arrival AS Arrival',
            'guest_detail.departure AS Departure',
            DB::raw('DATE(guest_detail.arrival) AS DateArrival'),
            DB::raw('DATE(guest_detail.departure) AS DateDeparture'),
            'guest_detail.adult AS Adult',
            'guest_detail.child AS Child',
            DB::raw('IF(guest_detail.discount_percent="-1", (guest_detail.discount * guest_detail.weekday_rate / 100), guest_detail.discount) AS Discount'),
            'guest_detail.weekday_rate AS WeekdayRate',
            'guest_detail.weekend_rate AS WeekendRate',
            'guest_detail.room_number AS RoomNumber',
            'guest_detail.bill_instruction AS Bill Instruction',
            'guest_group.name AS Group',
            'const_guest_status.name AS Status',
            'cfg_init_country.name AS Country',
            'cfg_init_state.name AS State',
            'company.name AS Company',
            'cfg_init_guest_type.name AS Guest Type',
            'cfg_init_id_card_type.name AS ID Card Type',
            'cfg_init_room_type.name AS RoomType',
            'cfg_init_room_rate.name AS RateType',
            'cfg_init_market.name AS Market',
            'cfg_init_booking_source.name AS Booking Source',
            'company1.name AS Bussiness Source')
            ->leftJoin('guest_deposit','reservation.number','guest_deposit.reservation_number')
            ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
            ->leftJoin('cfg_init_city','contact_person.city_code','cfg_init_city.code')
            ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
            ->leftJoin('cfg_init_booking_source','guest_detail.booking_source_code','cfg_init_booking_source.code')
            ->leftJoin('guest_group','reservation.group_code','guest_group.code')
            ->leftJoin('const_guest_status','reservation.status_code','const_guest_status.code')
            ->leftJoin('cfg_init_country','contact_person.country_code','cfg_init_country.code')
            ->leftJoin('cfg_init_state','contact_person.state_code','cfg_init_state.code')
            ->leftJoin('company','contact_person.company_code','company.code')
            ->leftJoin('cfg_init_guest_type','contact_person.guest_type_code','cfg_init_guest_type.code')
            ->leftJoin('cfg_init_id_card_type','contact_person.id_card_code','cfg_init_id_card_type.code')
            ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
            ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
            ->leftJoin('cfg_init_market','guest_detail.market_code','cfg_init_market.code')
            ->leftJoin('cfg_init_room_rate_business_source','cfg_init_room_rate.code','cfg_init_room_rate_business_source.room_rate_code')
            ->leftJoin('company as company1','guest_detail.business_source_code','company1.code')
            ->groupBy('reservation.number');

            // if($type == 1 && !empty($fromDate)){
            //     $query->whereDate('arrival','=', FormatController::formatDate($fromDate));
            //     $date='Date :'.$fromDate;
            // }
            // if($type == 2 && !empty($fromDate) && !empty($toDate)){
            //     $query->whereDate('arrival','>=', FormatController::formatDate($fromDate));
            //     $query->whereDate('arrival','<=', FormatController::formatDate($toDate));

            //     $date='Date Range :'.$fromDate.' - '.$toDate;
            // }
            // if($type == 3 && !empty($month)){
            //     $query->whereDate('arrival','>=', FormatController::formatDate($fromDate));
            //     $query->whereDate('arrival','<=', FormatController::formatDate($toDate));

            //     $date='Month :'.$month;
            // }
            // if($type == 4 && !empty($year)){
            //     $query->whereDate('arrival','>=', FormatController::formatDate($fromDate));
            //     $query->whereDate('arrival','<=', FormatController::formatDate($toDate));

            //     $date='Year :'.$year;
            // }

            // if(!empty($status)){
            //     $query->where('const_guest_status.code',$status);
            // }


            return [
                'title' => $title,
                'data' => $query->get()];
        }

        public static function registrationFormReservation($reservationNumber){
            $title= ['name' => 'GUEST REGISTRATION FORM'];
            $query= Reservation::select(
                'reservation.number AS reservation_number',
                'reservation.reservation_by AS ReservationBy',
                'reservation.notes AS Notes',
                'reservation.hk_note AS HK Notes',
                'reservation.insert_by AS InsertBy',
                'reservation.voucher_number_ta AS VoucherNumber',
                'reservation.audit_date AS AuditDate',
                'reservation.user_id AS LastUpdate',
                DB::raw('ROUND(IFNULL(SUM(CASE WHEN guest_deposit.type_code="C" THEN guest_deposit.amount ELSE -guest_deposit.amount END), 0)) AS Deposit'),
                'contact_person.title_code AS Title',
                'contact_person.full_name AS FullName',
                DB::raw('TRIM(CONCAT(contact_person.street, " ", IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name), " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
                DB::raw('IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name) AS City'),
                DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
                'contact_person.phone1 AS Phone1',
                'contact_person.phone2 AS Phone2',
                'contact_person.fax AS Fax',
                'contact_person.email AS Email',
                'contact_person.website AS Website',
                'contact_person.id_card_number AS IDCardNumber',
                'contact_person.is_male AS Gender',
                'contact_person.birth_place AS BirthPlace',
                'contact_person.birth_date AS BirthDate',
                'guest_detail.arrival AS Arrival',
                'guest_detail.departure AS Departure',
                DB::raw('DATE(guest_detail.arrival) AS DateArrival'),
                DB::raw('DATE(guest_detail.departure) AS DateDeparture'),
                'guest_detail.adult AS Adult',
                'guest_detail.child AS Child',
                DB::raw('IF(guest_detail.discount_percent="-1", (guest_detail.discount * guest_detail.weekday_rate / 100), guest_detail.discount) AS Discount'),
                'guest_detail.weekday_rate AS WeekdayRate',
                'guest_detail.weekend_rate AS WeekendRate',
                'guest_detail.room_number AS RoomNumber',
                'guest_detail.bill_instruction AS Bill Instruction',
                'cfg_init_payment_type.name AS PaymentType',
                'guest_group.name AS Group',
                'const_guest_status.name AS Status',
                'cfg_init_country.name AS Country',
                'cfg_init_state.name AS State',
                'cfg_init_nationality.name AS Nationality',
                'company.name AS Company',
                'cfg_init_guest_type.name AS Guest Type',
                'cfg_init_id_card_type.name AS ID Card Type',
                'cfg_init_room_type.name AS RoomType',
                'cfg_init_room_rate.name AS RateType',
                'cfg_init_room_rate.code AS RateCode',
                'cfg_init_market.name AS Market',
                'cfg_init_booking_source.name AS Booking Source',
                'company1.name AS Bussiness Source')
                ->leftJoin('guest_deposit','reservation.number','guest_deposit.reservation_number')
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_city','contact_person.city_code','cfg_init_city.code')
                ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                ->leftJoin('cfg_init_booking_source','guest_detail.booking_source_code','cfg_init_booking_source.code')
                ->leftJoin('guest_group','reservation.group_code','guest_group.code')
                ->leftJoin('const_guest_status','reservation.status_code','const_guest_status.code')
                ->leftJoin('cfg_init_payment_type','guest_detail.payment_type_code','cfg_init_payment_type.code')
                ->leftJoin('cfg_init_country','contact_person.country_code','cfg_init_country.code')
                ->leftJoin('cfg_init_nationality','contact_person.nationality_code','cfg_init_nationality.code')
                ->leftJoin('cfg_init_state','contact_person.state_code','cfg_init_state.code')
                ->leftJoin('company','contact_person.company_code','company.code')
                ->leftJoin('cfg_init_guest_type','contact_person.guest_type_code','cfg_init_guest_type.code')
                ->leftJoin('cfg_init_id_card_type','contact_person.id_card_code','cfg_init_id_card_type.code')
                ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
                ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                ->leftJoin('cfg_init_market','guest_detail.market_code','cfg_init_market.code')
                ->leftJoin('cfg_init_room_rate_business_source','cfg_init_room_rate.code','cfg_init_room_rate_business_source.room_rate_code')
                ->leftJoin('company as company1','guest_detail.business_source_code','company1.code')
                ->where('reservation.number',$reservationNumber)->get();

                return [
                    'title' => $title,
                    'data' => $query
                ];
        }
        public static function registrationFormInHouse($folioNumber){
            $title= ['name' => 'GUEST REGISTRATION FORM'];
            $query= Folio::select(
                'folio.number AS reservation_number',
                'reservation.reservation_by AS ReservationBy',
                'folio.notes AS Notes',
                'folio.hk_note AS HK Notes',
                'folio.insert_by AS InsertBy',
                'folio.voucher_number_ta AS VoucherNumber',
                'folio.first_insert AS AuditDate',
                'folio.user_id AS LastUpdate',
                'contact_person.title_code AS Title',
                'contact_person.full_name AS FullName',
                DB::raw('TRIM(CONCAT(contact_person.street, " ", IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name), " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
                DB::raw('IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name) AS City'),
                DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
                'contact_person.phone1 AS Phone1',
                'contact_person.phone2 AS Phone2',
                'contact_person.fax AS Fax',
                'contact_person.email AS Email',
                'contact_person.website AS Website',
                'contact_person.id_card_number AS IDCardNumber',
                'contact_person.is_male AS Gender',
                'contact_person.birth_place AS BirthPlace',
                'contact_person.birth_date AS BirthDate',
                'guest_detail.arrival AS Arrival',
                'guest_detail.departure AS Departure',
                DB::raw('DATE(guest_detail.arrival) AS DateArrival'),
                DB::raw('DATE(guest_detail.departure) AS DateDeparture'),
                'guest_detail.adult AS Adult',
                'guest_detail.child AS Child',
                DB::raw('IF(guest_detail.discount_percent="-1", (guest_detail.discount * guest_detail.weekday_rate / 100), guest_detail.discount) AS Discount'),
                'guest_detail.weekday_rate AS WeekdayRate',
                'guest_detail.weekend_rate AS WeekendRate',
                'guest_detail.room_number AS RoomNumber',
                'guest_detail.bill_instruction AS Bill Instruction',
                'cfg_init_payment_type.name AS PaymentType',
                'guest_group.name AS Group',
                'const_guest_status.name AS Status',
                'cfg_init_country.name AS Country',
                'cfg_init_state.name AS State',
                'cfg_init_nationality.name AS Nationality',
                'company.name AS Company',
                'cfg_init_guest_type.name AS Guest Type',
                'cfg_init_id_card_type.name AS ID Card Type',
                'cfg_init_room_type.name AS RoomType',
                'cfg_init_room_rate.name AS RateType',
                'cfg_init_room_rate.code AS RateCode',
                'cfg_init_market.name AS Market',
                'cfg_init_booking_source.name AS Booking Source',
                'company1.name AS Bussiness Source')
                ->leftJoin('reservation','folio.reservation_number','reservation.number')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_city','contact_person.city_code','cfg_init_city.code')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('cfg_init_booking_source','guest_detail.booking_source_code','cfg_init_booking_source.code')
                ->leftJoin('guest_group','folio.group_code','guest_group.code')
                ->leftJoin('const_guest_status','folio.status_code','const_guest_status.code')
                ->leftJoin('cfg_init_payment_type','guest_detail.payment_type_code','cfg_init_payment_type.code')
                ->leftJoin('cfg_init_country','contact_person.country_code','cfg_init_country.code')
                ->leftJoin('cfg_init_nationality','contact_person.nationality_code','cfg_init_nationality.code')
                ->leftJoin('cfg_init_state','contact_person.state_code','cfg_init_state.code')
                ->leftJoin('company','contact_person.company_code','company.code')
                ->leftJoin('cfg_init_guest_type','contact_person.guest_type_code','cfg_init_guest_type.code')
                ->leftJoin('cfg_init_id_card_type','contact_person.id_card_code','cfg_init_id_card_type.code')
                ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
                ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                ->leftJoin('cfg_init_market','guest_detail.market_code','cfg_init_market.code')
                ->leftJoin('cfg_init_room_rate_business_source','cfg_init_room_rate.code','cfg_init_room_rate_business_source.room_rate_code')
                ->leftJoin('company as company1','guest_detail.business_source_code','company1.code')
                ->where('folio.number',$folioNumber)->get();

                return [
                    'title' => $title,
                    'data' => $query
                ];
        }

        public static function receiptDeposit($guestDepositId){
                $currency = HelperController::getDefaultCurrency();
                $query= DB::table('guest_deposit')->select(
                    'guest_deposit.reservation_number AS reservation_number',
                    'guest_deposit.remark AS Remark',
                    DB::raw('ROUND(IFNULL(guest_deposit.amount, 0)) AS Deposit'),
                    DB::raw('CASE WHEN const_account_group.code="'.GlobalVariableController::$accountGroup['Payment'].'" THEN IF(guest_deposit.type_code="C","-1","0") ELSE "" END AS isDeposit'),
                    'cfg_init_account.name as Account',
                    'guest_deposit.audit_date as AuditDate',
                    'guest_deposit.id_log as ID',
                    DB::raw('CONCAT(contact_person.title_code,contact_person.full_name) as FullName'))
                    ->leftJoin('reservation','guest_deposit.reservation_number','reservation.number')
                    ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                    ->leftJoin('cfg_init_account','guest_deposit.account_code','cfg_init_account.code')
                    ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                    ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                    ->where('guest_deposit.id_log',$guestDepositId)->get();

                $title = ['name' => !empty($query) && $query[0]->isDeposit == '-1' ? 'RECERVATION DEPOSIT RECEIPT' : 'RESERVATION DEPOSIT REFUND RECEIPT'];
                $query[0]->Currency = $currency;
                    return [
                        'title' => $title,
                        'data' => $query
                    ];
                }

        public static function receiptFolio($subFolioId){
            $currency = HelperController::getDefaultCurrency();
            $query= DB::table('sub_folio')->select(
                'sub_folio.folio_number AS folio_number',
                'sub_folio.remark AS Remark',
                DB::raw('ROUND(IFNULL(sub_folio.amount, 0)) AS Amount'),
                DB::raw('CASE WHEN const_account_group.code="'.GlobalVariableController::$accountGroup['Payment'].'" THEN IF(sub_folio.type_code="C","-1","0") ELSE "" END AS isDeposit'),
                'cfg_init_account.name as Account',
                'sub_folio.audit_date as AuditDate',
                'sub_folio.id_log as ID',
                'guest_detail.room_number as RoomNumber',
                DB::raw('CONCAT(contact_person.title_code,contact_person.full_name) as FullName'))
                ->leftJoin('folio','sub_folio.folio_number','folio.number')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_account','sub_folio.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                ->where('sub_folio.id_log',$subFolioId)
                ->get();

            $title = ['name' => !empty($query) && $query[0]->isDeposit == '-1' ? 'FOLIO DEPOSIT RECEIPT' : 'FOLIO DEPOSIT REFUND RECEIPT'];
            $query[0]->Currency = $currency;
            return [
                'title' => $title,
                'data' => $query
            ];

        }

        public static function proformaInvoice($reservationNumber){
            $title = ['name' => 'PROFORMA INVOICE'];
            $group= GuestGroup::select('guest_group.code','guest_group.name')
                ->leftJoin('reservation','reservation.group_code','guest_group.code')
                ->where('reservation.number',$reservationNumber)->first();

            $companyBankAccount= HelperController::getCompanyBankAccount();

            $query= Reservation::select(
                'reservation.number AS reservation_number',
                'reservation.insert_by AS InsertBy',
                'reservation.voucher_number_ta AS VoucherNumber',
                'reservation.audit_date AS AuditDate',
                'reservation.user_id AS LastUpdate',
                DB::raw('COUNT(DISTINCT reservation.number) AS Room'),
                DB::raw('CAST(CAST(DATEDIFF(DATE(guest_detail.departure), DATE(guest_detail.arrival))*2 AS SIGNED)/2 AS SIGNED) AS Night'),
                DB::raw('ROUND(IFNULL(SUM(CASE WHEN guest_deposit.type_code="C" THEN guest_deposit.amount ELSE -guest_deposit.amount END), 0)) AS Deposit'),
                'contact_person.title_code AS Title',
                DB::raw('CASE WHEN reservation.group_code="" THEN CONCAT(contact_person.title_code,contact_person.full_name) ELSE guest_group.name END AS FullName'),
                DB::raw('TRIM(CONCAT(contact_person.street, " ", IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name), " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
                DB::raw('IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name) AS City'),
                DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
                'contact_person.phone1 AS Phone1',
                'contact_person.phone2 AS Phone2',
                'contact_person.fax AS Fax',
                'contact_person.email AS Email',
                'contact_person.website AS Website',
                'contact_person.id_card_number AS IDCardNumber',
                'contact_person.is_male AS Gender',
                'contact_person.birth_place AS BirthPlace',
                'contact_person.birth_date AS BirthDate',
                'guest_detail.arrival AS Arrival',
                'guest_detail.departure AS Departure',
                DB::raw('DATE(guest_detail.arrival) AS DateArrival'),
                DB::raw('DATE(guest_detail.departure) AS DateDeparture'),
                'guest_detail.adult AS Adult',
                'guest_detail.child AS Child',
                DB::raw('ROUND(IF(guest_detail.discount_percent="-1", (guest_detail.discount * guest_detail.weekday_rate / 100), guest_detail.discount)) AS Discount'),
                DB::raw('ROUND(IF(guest_detail.discount_percent="-1", IF(guest_detail.discount>0,(guest_detail.weekday_rate*(100-guest_detail.discount)/100),guest_detail.weekday_rate), guest_detail.weekday_rate - guest_detail.discount)) AS Rate'),
                DB::raw('ROUND(guest_detail.weekday_rate) AS WeekdayRate'),
                DB::raw('ROUND(guest_detail.weekend_rate) AS WeekendRate'),
                'guest_detail.room_number AS RoomNumber',
                'guest_detail.bill_instruction AS Bill Instruction',
                'cfg_init_payment_type.name AS PaymentType',
                'guest_group.name AS Group',
                'const_guest_status.name AS Status',
                'cfg_init_country.name AS Country',
                'cfg_init_state.name AS State',
                'cfg_init_nationality.name AS Nationality',
                'company.name AS Company',
                'cfg_init_guest_type.name AS Guest Type',
                'cfg_init_id_card_type.name AS ID Card Type',
                'cfg_init_room_type.name AS RoomType',
                'cfg_init_room_rate.name AS RateType',
                'cfg_init_room_rate.code AS RateCode',
                'cfg_init_market.name AS Market',
                'cfg_init_booking_source.name AS Booking Source',
                'company1.name AS Bussiness Source',
                DB::raw('count(*) as Total'))
                ->leftJoin('guest_deposit','reservation.number','guest_deposit.reservation_number')
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_city','contact_person.city_code','cfg_init_city.code')
                ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                ->leftJoin('cfg_init_booking_source','guest_detail.booking_source_code','cfg_init_booking_source.code')
                ->leftJoin('guest_group','reservation.group_code','guest_group.code')
                ->leftJoin('const_guest_status','reservation.status_code','const_guest_status.code')
                ->leftJoin('cfg_init_payment_type','guest_detail.payment_type_code','cfg_init_payment_type.code')
                ->leftJoin('cfg_init_country','contact_person.country_code','cfg_init_country.code')
                ->leftJoin('cfg_init_nationality','contact_person.nationality_code','cfg_init_nationality.code')
                ->leftJoin('cfg_init_state','contact_person.state_code','cfg_init_state.code')
                ->leftJoin('company','contact_person.company_code','company.code')
                ->leftJoin('cfg_init_guest_type','contact_person.guest_type_code','cfg_init_guest_type.code')
                ->leftJoin('cfg_init_id_card_type','contact_person.id_card_code','cfg_init_id_card_type.code')
                ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
                ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                ->leftJoin('cfg_init_market','guest_detail.market_code','cfg_init_market.code')
                ->leftJoin('cfg_init_room_rate_business_source','cfg_init_room_rate.code','cfg_init_room_rate_business_source.room_rate_code')
                ->leftJoin('company as company1','guest_detail.business_source_code','company1.code')
                ->where('reservation.status_code', GlobalVariableController::$reservationStatus['New'])
                ->groupBy('reservation.group_code')
                ->groupBy('guest_detail.room_type_code')
                ->groupBy('DateArrival')
                ->groupBy('DateDeparture')
                ->orderBy('DateArrival');

                if(!empty($group)){
                    $query->where('guest_group.code',$group->code);

                    $contact = GuestGroup::select(
                        'guest_group.name',
                        'guest_group.contact_person as ContactPerson',
                        'guest_group.fax AS Fax',
                        'guest_group.email AS Email',
                        'guest_group.website AS Website',
                        DB::raw('TRIM(CONCAT(guest_group.street, " ", guest_group.city, " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", guest_group.postal_code)) AS Address'),
                        DB::raw('(CASE WHEN guest_group.phone1 = "" THEN guest_group.phone2 ELSE CONCAT(guest_group.phone1, ", ", guest_group.phone2) END) AS Phone'))
                        ->leftJoin('cfg_init_city','guest_group.city_code','cfg_init_city.code')
                        ->leftJoin('cfg_init_country','guest_group.country_code','cfg_init_country.code')
                        ->leftJoin('cfg_init_state','guest_group.state_code','cfg_init_state.code')
                        ->where('guest_group.code',$group->code)->first();
                } else {
                    $query->where('reservation.number',$reservationNumber);

                    $contact= Reservation::select(
                        'contact_person.full_name as ContactPerson',
                        DB::raw('TRIM(CONCAT(contact_person.street, " ", IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name), " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
                        DB::raw('IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name) AS City'),
                        DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
                        'contact_person.phone1 AS Phone1',
                        'contact_person.phone2 AS Phone2',
                        'contact_person.fax AS Fax',
                        'contact_person.email AS Email',
                        'contact_person.website AS Website')
                        ->leftJoin('guest_deposit','reservation.number','guest_deposit.reservation_number')
                        ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                        ->leftJoin('cfg_init_city','contact_person.city_code','cfg_init_city.code')
                        ->leftJoin('cfg_init_country','contact_person.country_code','cfg_init_country.code')
                        ->leftJoin('cfg_init_nationality','contact_person.nationality_code','cfg_init_nationality.code')
                        ->leftJoin('cfg_init_state','contact_person.state_code','cfg_init_state.code')
                        ->where('reservation.number', $reservationNumber)->first();
                }

                $other = [
                    'contact' => $contact,
                    'companyBankAccount' => $companyBankAccount
                ];

                return [
                    'other' => $other,
                    'title' => $title,
                    'data' => $query->get()
                ];
        }

        public static function reservationConfirmation($reservationNumber){
            $title= [ 'name' => 'RESERVATION CONFIRMATION'];
            $companyBankAccount= HelperController::getCompanyBankAccount();
            $query= Reservation::select(
                'reservation.number AS reservation_number',
                'reservation.insert_by AS InsertBy',
                'reservation.voucher_number_ta AS VoucherNumber',
                'reservation.audit_date AS AuditDate',
                'reservation.user_id AS LastUpdate',
                DB::raw('COUNT(DISTINCT reservation.number) AS Room'),
                DB::raw('CAST(CAST(DATEDIFF(DATE(guest_detail.departure), DATE(guest_detail.arrival))*2 AS SIGNED)/2 AS SIGNED) AS Night'),
                DB::raw('ROUND(IFNULL(SUM(CASE WHEN guest_deposit.type_code="C" THEN guest_deposit.amount ELSE -guest_deposit.amount END), 0)) AS Deposit'),
                'contact_person.title_code AS Title',
                'contact_person.full_name AS FullName',
                DB::raw('TRIM(CONCAT(contact_person.street, " ", IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name), " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
                DB::raw('IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name) AS City'),
                DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
                'contact_person.phone1 AS Phone1',
                'contact_person.phone2 AS Phone2',
                'contact_person.fax AS Fax',
                'contact_person.email AS Email',
                'contact_person.website AS Website',
                'contact_person.id_card_number AS IDCardNumber',
                'contact_person.is_male AS Gender',
                'contact_person.birth_place AS BirthPlace',
                'contact_person.birth_date AS BirthDate',
                'guest_detail.arrival AS Arrival',
                'guest_detail.departure AS Departure',
                DB::raw('DATE(guest_detail.arrival) AS DateArrival'),
                DB::raw('DATE(guest_detail.departure) AS DateDeparture'),
                'guest_detail.adult AS Adult',
                'guest_detail.child AS Child',
                DB::raw('ROUND(IF(guest_detail.discount_percent="-1", (guest_detail.discount * guest_detail.weekday_rate / 100), guest_detail.discount)) AS Discount'),
                DB::raw('ROUND(IF(guest_detail.discount_percent="-1", IF(guest_detail.discount>0,(guest_detail.weekday_rate*(100-guest_detail.discount)/100),guest_detail.weekday_rate), guest_detail.weekday_rate - guest_detail.discount)) AS Rate'),
                DB::raw('ROUND(guest_detail.weekday_rate) AS WeekdayRate'),
                DB::raw('ROUND(guest_detail.weekend_rate) AS WeekendRate'),
                'guest_detail.room_number AS RoomNumber',
                'guest_detail.bill_instruction AS Bill Instruction',
                'cfg_init_payment_type.name AS PaymentType',
                'guest_group.name AS Group',
                'const_guest_status.name AS Status',
                'cfg_init_country.name AS Country',
                'cfg_init_state.name AS State',
                'cfg_init_nationality.name AS Nationality',
                'company.name AS Company',
                'cfg_init_guest_type.name AS Guest Type',
                'cfg_init_id_card_type.name AS ID Card Type',
                'cfg_init_room_type.name AS RoomType',
                'cfg_init_room_rate.name AS RateType',
                'cfg_init_room_rate.code AS RateCode',
                'cfg_init_market.name AS Market',
                'cfg_init_booking_source.name AS Booking Source',
                'company1.name AS Bussiness Source',
                DB::raw('count(*) as Total'))
                ->leftJoin('guest_deposit','reservation.number','guest_deposit.reservation_number')
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_city','contact_person.city_code','cfg_init_city.code')
                ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                ->leftJoin('cfg_init_booking_source','guest_detail.booking_source_code','cfg_init_booking_source.code')
                ->leftJoin('guest_group','reservation.group_code','guest_group.code')
                ->leftJoin('const_guest_status','reservation.status_code','const_guest_status.code')
                ->leftJoin('cfg_init_payment_type','guest_detail.payment_type_code','cfg_init_payment_type.code')
                ->leftJoin('cfg_init_country','contact_person.country_code','cfg_init_country.code')
                ->leftJoin('cfg_init_nationality','contact_person.nationality_code','cfg_init_nationality.code')
                ->leftJoin('cfg_init_state','contact_person.state_code','cfg_init_state.code')
                ->leftJoin('company','contact_person.company_code','company.code')
                ->leftJoin('cfg_init_guest_type','contact_person.guest_type_code','cfg_init_guest_type.code')
                ->leftJoin('cfg_init_id_card_type','contact_person.id_card_code','cfg_init_id_card_type.code')
                ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
                ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                ->leftJoin('cfg_init_market','guest_detail.market_code','cfg_init_market.code')
                ->leftJoin('cfg_init_room_rate_business_source','cfg_init_room_rate.code','cfg_init_room_rate_business_source.room_rate_code')
                ->leftJoin('company as company1','guest_detail.business_source_code','company1.code')
                ->where('reservation.number',$reservationNumber);

                $other = [
                    'companyBankAccount' => $companyBankAccount
                ];

                return [
                    'other' => $other,
                    'title' => $title,
                    'data' => $query->get()
                ];
        }

        public static function folio($folioNumber,$void,$possession,$transfered,$correction,$subFolioCode){
            $query = Folio::select(
                'folio.number as FolioNumber',
                'folio.type_code as folioType',
                DB::raw('CAST(CAST(DATEDIFF(DATE(guest_detail.departure), DATE(guest_detail.arrival))*2 AS SIGNED)/2 AS SIGNED) AS Night'),
                'contact_person.title_code AS Title',
                'contact_person.full_name AS FullName',
                DB::raw('TRIM(CONCAT(contact_person.street, " ", IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name), " ", IFNULL(cfg_init_state.name, ""), " ", IFNULL(cfg_init_country.name, ""), " ", contact_person.postal_code)) AS Address'),
                DB::raw('IF(contact_person.city_code="OTH", contact_person.city, cfg_init_city.name) AS City'),
                DB::raw('(CASE WHEN contact_person.phone1 = "" THEN contact_person.phone2 ELSE CONCAT(contact_person.phone1, ", ", contact_person.phone2) END) AS Phone'),
                DB::raw('(CASE WHEN folio.status_code = "'.GlobalVariableController::$folioStatus['Open'].'" THEN "Before Check Out" ELSE "After Check Out" END) AS FolioStatus'),
                'contact_person.phone1 AS Phone1',
                'contact_person.phone2 AS Phone2',
                'contact_person.fax AS Fax',
                'contact_person.email AS Email',
                'contact_person.website AS Website',
                'contact_person.id_card_number AS IDCardNumber',
                'contact_person.is_male AS Gender',
                'contact_person.birth_place AS BirthPlace',
                'contact_person.birth_date AS BirthDate',
                'guest_detail.arrival AS Arrival',
                'guest_detail.departure AS Departure',
                DB::raw('DATE(guest_detail.arrival) AS DateArrival'),
                DB::raw('DATE(guest_detail.departure) AS DateDeparture'),
                'guest_detail.adult AS Adult',
                'guest_detail.child AS Child',
                DB::raw('ROUND(IF(guest_detail.discount_percent="-1", (guest_detail.discount * guest_detail.weekday_rate / 100), guest_detail.discount)) AS Discount'),
                DB::raw('ROUND(IF(guest_detail.discount_percent="-1", IF(guest_detail.discount>0,(guest_detail.weekday_rate*(100-guest_detail.discount)/100),guest_detail.weekday_rate), guest_detail.weekday_rate - guest_detail.discount)) AS Rate'),
                DB::raw('ROUND(guest_detail.weekday_rate) AS WeekdayRate'),
                DB::raw('ROUND(guest_detail.weekend_rate) AS WeekendRate'),
                'guest_detail.room_number AS RoomNumber',
                'guest_detail.bill_instruction AS Bill Instruction',
                'cfg_init_payment_type.name AS PaymentType',
                'guest_group.name AS Group',
                'const_guest_status.name AS Status',
                'cfg_init_country.name AS Country',
                'cfg_init_state.name AS State',
                'cfg_init_nationality.name AS Nationality',
                'company.name AS Company',
                'cfg_init_guest_type.name AS Guest Type',
                'cfg_init_id_card_type.name AS ID Card Type',
                'cfg_init_room_type.name AS RoomType',
                'cfg_init_room_rate.name AS RateType',
                'cfg_init_room_rate.code AS RateCode',
                'cfg_init_market.name AS Market',
                'cfg_init_booking_source.name AS Booking Source',
                'company1.name AS Bussiness Source')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_city','contact_person.city_code','cfg_init_city.code')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('cfg_init_booking_source','guest_detail.booking_source_code','cfg_init_booking_source.code')
                ->leftJoin('guest_group','folio.group_code','guest_group.code')
                ->leftJoin('const_guest_status','folio.status_code','const_guest_status.code')
                ->leftJoin('cfg_init_payment_type','guest_detail.payment_type_code','cfg_init_payment_type.code')
                ->leftJoin('cfg_init_country','contact_person.country_code','cfg_init_country.code')
                ->leftJoin('cfg_init_nationality','contact_person.nationality_code','cfg_init_nationality.code')
                ->leftJoin('cfg_init_state','contact_person.state_code','cfg_init_state.code')
                ->leftJoin('company','contact_person.company_code','company.code')
                ->leftJoin('cfg_init_guest_type','contact_person.guest_type_code','cfg_init_guest_type.code')
                ->leftJoin('cfg_init_id_card_type','contact_person.id_card_code','cfg_init_id_card_type.code')
                ->leftJoin('cfg_init_room_type','guest_detail.room_type_code','cfg_init_room_type.code')
                ->leftJoin('cfg_init_room_rate','guest_detail.room_rate_code','cfg_init_room_rate.code')
                ->leftJoin('cfg_init_market','guest_detail.market_code','cfg_init_market.code')
                ->leftJoin('cfg_init_room_rate_business_source','cfg_init_room_rate.code','cfg_init_room_rate_business_source.room_rate_code')
                ->leftJoin('company as company1','guest_detail.business_source_code','company1.code')
                ->where('folio.number',$folioNumber)
                ->get();

                $credit = 'ROUND(SUM(CASE WHEN sub_folio.type_code="C" then sub_folio.amount ELSE "0" END))';
                $debit = 'ROUND(SUM(CASE WHEN sub_folio.type_code="D" then sub_folio.amount ELSE "0" END))';
                $creditForeign = 'ROUND(SUM(CASE WHEN sub_folio.type_code="C" then sub_folio.amount_foreign ELSE "0" END))';
                $debitForeign = 'ROUND(SUM(CASE WHEN sub_folio.type_code="D" then sub_folio.amount_foreign ELSE "0" END))';
                $payment = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND sub_folio.type_code="C" then sub_folio.amount ELSE "0" END))';
                $paymentC = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND sub_folio.type_code="D" then sub_folio.amount ELSE "0" END))';
                $charge = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND sub_folio.type_code="D" then sub_folio.amount ELSE "0" END))';
                $chargeC = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND sub_folio.type_code="C" then sub_folio.amount ELSE "0" END))';
                $paymentForeign = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND sub_folio.type_code="C" then sub_folio.amount_foreign ELSE "0" END))';
                $paymentCForeign = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code="2" AND sub_folio.type_code="D" then sub_folio.amount_foreign ELSE "0" END))';
                $chargeForeign = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND sub_folio.type_code="D" then sub_folio.amount_foreign ELSE "0" END))';
                $chargeCForeign = 'ROUND(SUM(CASE WHEN cfg_init_account_sub_group.group_code!="2" AND sub_folio.type_code="C" then sub_folio.amount_foreign ELSE "0" END))';

                $folioTransfered=Folio::select('folio.number as folioNumber','guest_detail.room_number as roomNumber','contact_person.full_name')
                    ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id');

                $subFolio = SubFolio::select(
                    'cfg_init_sub_department.name as sub_department',
                    'company.name as company',
                    'sub_folio.audit_date',
                    'sub_folio.room_number',
                    'sub_folio.remark',
                    DB::raw('CONCAT(cfg_init_account.name,IF(sub_folio.remark="","",CONCAT(" - ",sub_folio.remark)))as Account'),
                    DB::raw('ROUND(SUM(CASE WHEN const_account_group.code!="'.GlobalVariableController::$accountGroup['Payment'].'" THEN IF(sub_folio.type_code="D",sub_folio.amount,-sub_folio.amount) ELSE 0 END)) AS Charge'),
                    DB::raw('ROUND(CASE WHEN const_account_group.code="'.GlobalVariableController::$accountGroup['Payment'].'" THEN IF(sub_folio.type_code="D",sub_folio.amount,0) ELSE 0 END) AS Refund'),
                    DB::raw('ROUND(CASE WHEN const_account_group.code="'.GlobalVariableController::$accountGroup['Payment'].'" THEN IF(sub_folio.type_code="C",sub_folio.amount,-sub_folio.amount) ELSE 0 END) AS Payment'),
                    DB::raw(
                        'CASE WHEN sub_folio.belongs_to!='.$folioNumber.' THEN CONCAT("From: ",folio_from.folioNumber,", R-",folio_from.roomNumber,", G-",folio_from.full_name)
                        WHEN sub_folio.folio_number!='.$folioNumber.' THEN CONCAT("To: ",folio_to.folioNumber,", R-",folio_to.roomNumber,", G-",folio_to.full_name)
                        ELSE "" END AS transfer_status'),
                    DB::raw('SUM(CASE WHEN sub_folio.type_code="C" THEN sub_folio.amount - IF(sub_folio.type_code="D",sub_folio.amount,0) ELSE 0 END) as Balance'),
                    DB::raw('IF('.$credit.' > '.$debit.','.$credit.'-'.$debit.',0) AS credit'),
                    DB::raw('IF('.$debit.' > '.$credit.','.$debit.'-'.$credit.',0) AS debit'),
                    DB::raw('IF('.$creditForeign.' > '.$debitForeign.','.$creditForeign.'-'.$debitForeign.',0) AS creditForeign'),
                    DB::raw('IF('.$debitForeign.' > '.$creditForeign.','.$debitForeign.'-'.$creditForeign.',0) AS debitForeign'))
                    ->leftJoin('cfg_init_sub_department','sub_folio.sub_department_code', 'cfg_init_sub_department.code')
                    ->leftJoin('cfg_init_account', 'sub_folio.account_code', 'cfg_init_account.code')
                    ->leftJoin('folio','sub_folio.folio_number', 'folio.number')
                    ->leftJoin('contact_person','folio.contact_person_id', 'contact_person.id')
                    ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                    ->leftJoin('company' ,'sub_folio.direct_bill_code','company.code')
                    ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                    ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                    ->leftJoinSub($folioTransfered,'folio_from','sub_folio.belongs_to','folio_from.folioNumber')
                    ->leftJoinSub($folioTransfered,'folio_to','sub_folio.folio_number','folio_to.folioNumber')
                    ->where('sub_folio.folio_number',$folioNumber);

                if($void != 'true'){
                    $subFolio->where('sub_folio.void','0');
                }

                if($possession == 'true'){
                    $subFolio->where('sub_folio.folio_number',$folioNumber)
                    ->Where('sub_folio.belongs_to',$folioNumber);
                }
                if($transfered == 'true'){
                    $subFolio->orWhere('sub_folio.belongs_to',$folioNumber)->where('sub_folio.folio_number','!=',$folioNumber)->where('sub_folio.void','0');
                }
                if($subFolioCode != 'All' && !empty($subFolioCode)){
                    $subFolio->where('sub_folio.group_code',$subFolioCode);
                }

                if($correction != 'true'){
                    $subFolio->groupBy('correction_breakdown');
                }else{
                    $subFolio->groupBy('breakdown1');
                }

                $transactionData = $subFolio->get();
                $balance = 0;
                $totalCharge = 0;
                $totalPayment = 0;
                $refund = 0;
                $i = 0;
                foreach($transactionData as $transactionDataX){
                    $balance += $transactionDataX->credit - $transactionDataX->debit;
                    $totalCharge += $transactionDataX->Charge;
                    $totalPayment += $transactionDataX->Payment;
                    $transactionData[$i]->Balance = $balance;
                    $i += 1;
                }
                if($totalPayment > $totalCharge){
                    $refund = $totalPayment - $totalCharge;
                }


                $other = [
                    'transaction' => $transactionData,
                    'total' => [
                        'totalBalance' => $balance,
                        'totalRefund' => $refund
                    ]
                ];

                $title = ['name' => ($query[0]->folioType == GlobalVariableController::$folioType['GuestFolio'] ? 'GUEST FOLIO' : ($query[0]->folioType == GlobalVariableController::$folioType['DeskFolio'] ? 'DESK FOLIO' : ($query[0]->folioType == GlobalVariableController::$folioType['MasterFolio'] ? 'MASTER FOLIO' : '')))];
                return [
                    'other' => $other,
                    'title' => $title,
                    'data' => $query
                ];
        }

        public static function cashierReport($userId){
            $mainTableName = 'sub_folio';
            $auditDate = AuditLogController::auditDate();
            $unionTable1 = 'guest_deposit';
            $shiftId = HelperController::getLogShiftID($userId);
            $title = [
                'name' => 'CASHIER REPORT',
                'auditDate' => $auditDate];

            $union1 = GuestDeposit::select(
                DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) AS Account'),
                DB::raw('ROUND(IF('. $unionTable1.'.type_code="C",amount,-amount)) AS Amount'),
                DB::raw('CONCAT("R-",reservation_number) as RefNumber'),
                DB::raw('CONCAT(IFNULL(contact_person.title_code,""),IFNULL(contact_person.full_name,"")) AS GuestName'),
                $unionTable1.'.audit_date',
                DB::raw('"" as room_number'),
                $unionTable1.'.document_number',
                $unionTable1.'.insert_by',
                $unionTable1.'.shift')
                ->leftJoin('reservation',$unionTable1.'.reservation_number','reservation.number')
                ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_account',$unionTable1.'.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                ->leftJoin('log_shift',$unionTable1.'.log_shift_id','log_shift.id')
                ->where('const_account_group.code',GlobalVariableController::$accountGroup['Payment'])
                ->where($unionTable1.'.log_shift_id',$shiftId)
                ->where($unionTable1.'.audit_date',$auditDate)
                ->where($unionTable1.'.void','0');

            $query = SubFolio::select(
                DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) AS Account'),
                DB::raw('ROUND(IF('. $mainTableName.'.type_code="C",amount,-amount)) AS Amount'),
                DB::raw('CONCAT("F-",folio_number) as RefNumber'),
                DB::raw('CONCAT(IFNULL(contact_person.title_code,""),IFNULL(contact_person.full_name,"")) AS GuestName'),
                $mainTableName.'.audit_date',
                $mainTableName.'.room_number',
                $mainTableName.'.document_number',
                $mainTableName.'.insert_by',
                $mainTableName.'.shift')
                ->leftJoin('folio',$mainTableName.'.folio_number','folio.number')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->leftJoin('cfg_init_account',$mainTableName.'.account_code','cfg_init_account.code')
                ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                ->leftJoin('log_shift',$mainTableName.'.log_shift_id','log_shift.id')
                ->where('const_account_group.code',GlobalVariableController::$accountGroup['Payment'])
                ->where($mainTableName.'.log_shift_id',$shiftId)
                ->where($mainTableName.'.audit_date',$auditDate)
                ->where($mainTableName.'.void','0')
                // ->groupBy(DB::raw('DATE(guest_deposit.audit_date)'))
                ->union($union1);

                $union2 = GuestDeposit::select(
                    DB::raw('ROUND(SUM(IF('. $unionTable1.'.type_code="C",amount,-amount))) AS TotalAmount'),
                    DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) AS TotalAccount'))
                    ->leftJoin('reservation',$unionTable1.'.reservation_number','reservation.number')
                    ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                    ->leftJoin('cfg_init_account',$unionTable1.'.account_code','cfg_init_account.code')
                    ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                    ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                    ->leftJoin('log_shift',$unionTable1.'.log_shift_id','log_shift.id')
                    ->where('const_account_group.code',GlobalVariableController::$accountGroup['Payment'])
                    ->where($unionTable1.'.log_shift_id',$shiftId)
                    ->where($unionTable1.'.audit_date',$auditDate)
                    ->where($unionTable1.'.void','0')
                    ->groupBy($unionTable1.'.account_code');

                $query2 = SubFolio::select(
                    DB::raw('ROUND(SUM(IF('. $mainTableName.'.type_code="C",amount,-amount))) AS TotalAmount'),
                    DB::raw('CONCAT(cfg_init_account.code," - ",cfg_init_account.name) AS TotalAccount'))
                    ->leftJoin('folio',$mainTableName.'.folio_number','folio.number')
                    ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                    ->leftJoin('cfg_init_account',$mainTableName.'.account_code','cfg_init_account.code')
                    ->leftJoin('cfg_init_account_sub_group','cfg_init_account.sub_group_code','cfg_init_account_sub_group.code')
                    ->leftJoin('const_account_group','cfg_init_account_sub_group.group_code','const_account_group.code')
                    ->leftJoin('log_shift',$mainTableName.'.log_shift_id','log_shift.id')
                    ->where('const_account_group.code',GlobalVariableController::$accountGroup['Payment'])
                    ->where($mainTableName.'.log_shift_id',$shiftId)
                    ->where($mainTableName.'.audit_date',$auditDate)
                    ->where($mainTableName.'.void','0')
                    // ->groupBy('folio.number')
                    ->groupBy($mainTableName.'.account_code')
                    ->union($union2)
                    ->groupBy('cfg_init_account.code')
                    ->get();

                $query2 = $query2->toArray();
                $total = [];
                foreach ($query2 as $val) {
                    if (!isset($total[$val['TotalAccount']]))
                        $total[$val['TotalAccount']] = $val;
                    else
                        $total[$val['TotalAccount']]['TotalAmount'] += $val['TotalAmount'];
                }
                $total = array_values($total);

                return [
                    'title' => $title,
                    'other' => $total,
                    'data' => $query->get()
                ];
        }

        public static function roomCheckList($xSelected){
            $selected = explode(", ",$xSelected);

            $audit_date = AuditLogController::auditDate();
            $unavailable=DB::table('room_unavailable')
                ->select(
                    'room_number',
                    'from_date',
                    'to_date',
                    'status_code',
                    'note',
                    'id_log')
                ->where('from_date','<=',$audit_date)
                ->where('to_date','>=',$audit_date)
                ->groupBy('room_number');
            $reservation=DB::table('reservation')
                ->select(
                    DB::raw('CONCAT(contact_person.title_code, contact_person.full_name) AS name'),
                    DB::raw('"Expected Arrival" AS GroupCode'),
                    'guest_detail.room_number as room',
                    'guest_detail.arrival',
                    'const_room_status.name as room_status',
                    'cfg_init_bed_type.name as bed_type',
                    'cfg_init_room_type.name as room_type')
                    ->leftJoin('contact_person','reservation.contact_person_id','contact_person.id')
                    ->leftJoin('guest_detail','reservation.guest_detail_id','guest_detail.id')
                    ->leftJoin('cfg_init_room','guest_detail.room_number','cfg_init_room.number')
                    ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
                    ->leftJoin('const_room_status','cfg_init_room.status_code','const_room_status.code')
                    ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
                    ->where('reservation.status_code','N');
            $folio = DB::table('folio')
                ->select(
                    'number as folio_number',
                    'room_status_code',
                    'compliment_hu',
                    'hk_note',
                    'status_code',
                    'contact_person.full_name as full_name',
                    'guest_detail.arrival as dateArrival',
                    'guest_detail.departure as dateDeparture',
                    'guest_detail.room_number as room_number',
                    'guest_group.name as group')
                ->leftJoin('guest_detail','folio.guest_detail_id','guest_detail.id')
                ->leftJoin('guest_group','folio.group_code','guest_group.code')
                ->leftJoin('contact_person','folio.contact_person_id','contact_person.id')
                ->where('folio.status_code','O')
                ->where('folio.type_code','F');
            $inHouse = Room::select(
                'number as room',
                'cfg_init_room_type.name as room_type',
                'cfg_init_bed_type.name as bed_type',
                'folio.full_name as name',
                'const_room_status.name as room_status',
                DB::raw('"Guest In House" as GroupCode'))
                ->leftJoinSub($folio, 'folio', 'cfg_init_room.number', 'folio.room_number')
                ->leftJoin('const_room_status','cfg_init_room.status_code','const_room_status.code')
                ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
                ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
                ->leftJoinSub($unavailable, 'unavailable', 'cfg_init_room.number', 'unavailable.room_number')
                ->orderBy('cfg_init_room.number','ASC')
                ->whereDate('folio.dateDeparture','!=', $audit_date)
                ->where('folio.full_name','<>','');
            $departure = Room::select(
                'number as room',
                'cfg_init_room_type.name as room_type',
                'cfg_init_bed_type.name as bed_type',
                'folio.full_name as name',
                'const_room_status.name as room_status',
                DB::raw('IF(IFNULL(unavailable.status_code, "")="" AND IFNULL(folio.full_name, "") <> "", "-1", "0") AS is_occupied'),
                DB::raw('"Expected Departure" AS GroupCode'),
                'folio.dateDeparture')
                ->leftJoinSub($folio, 'folio', 'cfg_init_room.number', 'folio.room_number')
                ->leftJoin('const_room_status','cfg_init_room.status_code','const_room_status.code')
                ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
                ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
                ->leftJoinSub($unavailable, 'unavailable', 'cfg_init_room.number', 'unavailable.room_number')
                ->orderBy('cfg_init_room.number','ASC')
                ->whereDate('folio.dateDeparture', $audit_date);

            $vacant =Room::select(
                'number as room',
                'cfg_init_room_type.name as room_type',
                'cfg_init_bed_type.name as bed_type',
                'reservation.name as name',
                'const_room_status.name as room_status',
                DB::raw('IF(IFNULL(unavailable.status_code, "")="" AND IFNULL(folio.full_name, "") <> "", "-1", "0") AS is_occupied'),
                DB::raw('"Vacant" AS GroupCode'))

                ->leftJoinSub($folio, 'folio', 'cfg_init_room.number', 'folio.room_number')
                ->leftJoinSub($reservation, 'reservation', 'cfg_init_room.number', 'reservation.room')
                ->leftJoin('const_room_status','cfg_init_room.status_code','const_room_status.code')
                ->leftJoin('cfg_init_bed_type','cfg_init_room.bed_type_code','cfg_init_bed_type.code')
                ->leftJoin('cfg_init_room_type','cfg_init_room.room_type_code','cfg_init_room_type.code')
                ->leftJoinSub($unavailable, 'unavailable', 'cfg_init_room.number', 'unavailable.room_number')
                ->orderBy('cfg_init_room.number','ASC')
                ->groupBy('cfg_init_room.number')
                ->where('folio.full_name',null)
                ->where('reservation.name',null);

            if(!empty($xSelected)){
                $inHouse->whereIn('cfg_init_room.number',$selected);
                $departure->whereIn('cfg_init_room.number',$selected);
                $reservation->whereIn('cfg_init_room.number',$selected);
                $vacant->whereIn('cfg_init_room.number',$selected);
            };

            $title = ['name' => 'HOUSEKEEPING CHECK LIST',
                        'auditDate' => $audit_date];
            $data = [];
            array_push($data,$inHouse->get());
            array_push($data,$departure->get());
            array_push($data,$reservation
                ->whereDate('guest_detail.arrival',$audit_date)
                ->orderBy('guest_detail.room_number','ASC')
                ->get());
            array_push($data,!empty($xSelected) ? $vacant->get() : []);

            return [
                'data' => $data,
                'title' => $title
            ];
        }

        public static function printInvoice($number, $isStatement){
            $companyCode= '';
            $mainTableName = 'invoice';
            $detailTableName = 'invoice_item';

            $queryCondition1 = $mainTableName. '.number="' .$number. '"';
            $queryCondition2 = $detailTableName. '.invoice_number="' .$number. '"';
            if($isStatement){
                $queryCondition1 = $mainTableName. '.is_paid="0"';
                $queryCondition2 = $mainTableName. '.is_paid="0"';
                if($companyCode <> ''){
                    $queryCondition1 = $queryCondition1. ' AND ' .$mainTableName. '.company_code="' .$companyCode. '"';
                    $queryCondition2 = $queryCondition2. 'AND sub_folio.direct_bill_code="' .$companyCode. '" ';
                }
            }

            $queryInvoice = DB::table($mainTableName)->select(
                $mainTableName. '.number',
                DB::raw('DATE_FORMAT('.$mainTableName. '.issued_date, "%m-%d-%Y") as issued_date'),
                DB::raw('DATE_FORMAT('.$mainTableName. '.due_date, "%m-%d-%Y") as due_date'),
                $mainTableName. '.remark',
                DB::raw('DATEDIFF(' .$mainTableName. '.due_date, ' .$mainTableName. '.issued_date) AS DayLimit'),
                'company.name as company',
                'company.ar_limit',
                'contact_person.full_name',
                'contact_person.street',
                DB::raw('IF(contact_person.city_code="OTH",contact_person.city,cfg_init_city.name) as city'),
                'contact_person.phone1',
                'contact_person.fax',
                'cfg_init_country.name as country',
                'cfg_init_state.name as state')
                ->leftJoin('company', $mainTableName. '.company_code', 'company.code')
                ->leftJoin('contact_person', $mainTableName. '.contact_person_id', 'contact_person.id')
                ->leftJoin('cfg_init_city', 'contact_person.city_code', 'cfg_init_city.code')
                ->leftJoin('cfg_init_country', 'contact_person.country_code', 'cfg_init_country.code')
                ->leftJoin('cfg_init_state', 'contact_person.state_code', 'cfg_init_state.code')
                ->whereRaw($queryCondition1)
                ->get();

            $queryInvoiceDetail = DB::table($detailTableName)->select(
                $detailTableName. '.invoice_number',
                $detailTableName. '.folio_number',
                DB::raw('ROUND('.$detailTableName. '.amount / ' .$detailTableName. '.exchange_rate) AS Amount'),
                $detailTableName. '.amount_charged_foreign',
                DB::raw('(' .$detailTableName. '.amount_paid / ' .$detailTableName. '.exchange_rate) AS AmountPaid'),
                DB::raw('IF(IFNULL(' .$detailTableName. '.remark, "")="", "", CONCAT(" - ", ' .$detailTableName. '.remark)) AS Remark'),
                $detailTableName. '.type_code',
                'sub_folio.room_number',
                DB::raw('IF(IFNULL(folio.voucher_number_ta, "")="", "", CONCAT(" - ", folio.voucher_number_ta)) AS VoucherNumberTA'),
                'contact_person.full_name',
                DB::raw('DATE_FORMAT(guest_detail.arrival, "%m-%d-%Y") as arrival'),
                DB::raw('DATE_FORMAT(guest_detail.departure, "%m-%d-%Y") as departure'),
                'cfg_init_currency.symbol',
                'company.name')
                ->leftJoin('invoice', 'invoice_item.invoice_number', 'invoice.number')
                ->leftJoin('sub_folio', $detailTableName. '.sub_folio_id', 'sub_folio.id_log')
                ->leftJoin('folio', 'sub_folio.folio_number', 'folio.number')
                ->leftJoin('contact_person', 'folio.contact_person_id', 'contact_person.id')
                ->leftJoin('guest_detail', 'folio.guest_detail_id', 'guest_detail.id')
                ->leftJoin('cfg_init_currency', 'invoice_item.currency_code', 'cfg_init_currency.code')
                ->leftJoin('company', 'sub_folio.direct_bill_code', 'company.code')
                ->whereRaw($queryCondition2)
                ->orderBy($detailTableName.'.folio_number')
                ->get();

            $other = [
                'companyBankAccount' => HelperController::getCompanyBankAccount()
            ];
            $title = ['name' => $isStatement ? 'AR STATEMENT' : 'INVOICE'];
            if(count($queryInvoice) > 0){
                $data = [
                    'invoice' => $queryInvoice,
                    'invoice_item' => $queryInvoiceDetail,
                ];
            } else {
                $data = [];
            }

            ProcedureQueryController::updateInvoicePrintCount($number);
            ProcedureQueryController::insertLogUserW8UserId(GlobalVariableController::$logUserAction['PrintInvoice'], $number, ProcedureQueryController::getUserLogin(), '', '', ProcedureQueryController::getUserLogin());

            return [
                'data' => $data,
                'title' => $title,
                'other' => $other
            ];

        }

        public static function printInvoicePaymentReceive($refNumber){
            $query = DB::table('invoice_payment')->select(
                'invoice_payment.invoice_number',
                'invoice_payment.ref_number',
                DB::raw('ROUND(SUM(invoice_payment.amount)) AS Amount'),
                'invoice_payment.date',
                'company.name as company')
                ->leftJoin('invoice', 'invoice_payment.invoice_number', 'invoice.number')
                ->leftJoin('company', 'invoice.company_code', 'company.code')
                ->where('invoice_payment.ref_number', $refNumber)
                ->groupBy('invoice_payment.ref_number')
                ->get();


            $title = ['name' => 'KWITANSI INVOICE / INVOICE RECEIPT'];
            if(count($query) > 0){
                $query[0]->Currency = HelperController::getDefaultCurrency();
            }

            return [
                'title' => $title,
                'data' => $query
            ];
        }

        public static function printReceipt($number){
            $title = "KWITANSI / RECEIPT";
            $query = DB::table('receipt')->where('number', $number)->first();
            $date = date_create($query->issued_date);
            $dateFormat = date_format($date, 'd F Y');
            $query->date = $dateFormat;
            return [
                'title' => $title,
                'other' => '',
                'data' => $query
            ];
        }
}
