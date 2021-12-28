<?php

use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// API TESTING PUPOSE AREA==============================================================================

Route::post('/special-access/check', 'General\SpecialAccessController@checkSpecialAccess');
// Route::get('/test', 'BackOffice\ReceiptController@receiptNumber');

Route::post('/receipt/number', 'BackOffice\ReceiptController@receiptNumber');


// Route::get('report/preview', 'Report\GenerateReportController@generateReport');
//END API TESTING PUPOSE AREA===========================================================================


Route::post('logout', 'API\UserController@logout');
Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');
Route::post('amount', 'Folio\TransactionController@correction');
Route::post('amount2', 'HelperController@getRoomAvailability2');
Route::get('report/{id1}/{id2}', 'Report\ReportController@reservation');
Route::post('report/test', 'Housekeeping\HousekeepingController@roomStatus');

Route::get('/report/company-profile', 'General\CompanyInformationController@hotelInformation');


Route::post('/reservation/report/registrationform', 'Reservations\ReservationController@registrationForm');

//Uncomment for testing Report
//Route::get('report/maketemplate', 'Report\ReportController@makeReportTemplate');


// Route::group(['middleware' => 'auth.api'], function() {
//     Route::get('logout', 'AuthController@logout');
// });

Route::get('/usersetting/usergroup/specialaccess', 'Tools\UserSetting\UserGroupController@getSpecialAccessList');

Route::post('cek-login', 'API\UserController@cekUserLoginOtherDevice');

Route::get('/shift/working-shift', 'General\ShiftLogController@workingShift');
Route::get('/shift/open-shift', 'General\ShiftLogController@openShift');

// Route::get('report/preview', 'Report\GenerateReportController@generateReport');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::group(['middleware' => 'auth:api'], function(){

    Route::get('auth-check', [UserController::class, 'authCheck']);
    Route::get('report/preview', 'Report\GenerateReportController@generateReport');

    Route::post('details', 'API\UserController@details');
    Route::get('/usersetting/user', 'API\UserController@userList');

    Route::post('/precheck', 'NightAudit\NightAuditController@precheckAutoPost');
    Route::post('/updateroom/{id}', 'NightAudit\NightAuditController@updateRoomStatusDayendClosed');

    Route::post('/autopost', 'NightAudit\NightAuditController@autoPost');
    Route::post('/getcount/{id}', 'HelperController@postRoomStatistic');
    Route::post('/getcount2/{id}', 'HelperController@getRoomAvailability2');

    //--------------------DASHBOARD---------------------------------------------
    Route::post('/dashboard/roomstatistic2', 'DashboardController@roomStatistic2');
    Route::post('/dashboard/expected-arrival-departure', 'DashboardController@expectedArrivalDeparture');
    Route::post('/dashboard/roomstatistic', 'DashboardController@roomStatistic');
    Route::post('/dashboard/room-sold', 'DashboardController@roomSold');
    Route::post('/dashboard/room-status', 'DashboardController@roomStatus');

    //--------------------AUDIT DATE---------------------------------------------
    Route::resource('/auditdate', 'General\AuditLogController');

    //--------------------REPORT-------------------------------------------------
    Route::get('report/reportlistdata', 'Report\ReportController@getReportListData');
    Route::get('report/reporttemplate', 'Report\ReportController@getReportTemplate');
    Route::get('report/reportdatalookupfilter1', 'Report\ReportController@ReportDataLookUpFilter1');
    Route::get('report/processreporttemplate', 'Report\ReportController@processReportTemplate');
    Route::get('report/email', 'Report\PdfController2@generatePdf');
    //--------------------Report Template Editor--------------------------------------------------
    Route::get('report/editreporteditor', 'Report\ReportController@editReportEditor');
    Route::post('report/inserttemplatereport', 'Report\ReportController@insertTemplateReport');
    Route::post('report/updatetemplatereport', 'Report\ReportController@updateTemplateReport');
    Route::post('report/updatetemplatedefaultreport', 'Report\ReportController@updateTemplateDefaultReport');
    Route::post('report/deletetemplatereport', 'Report\ReportController@deleteTemplateReport');
    Route::get('report/istemplatesystemdefault', 'Report\ReportController@isTemplateSystemDefault');
    Route::get('report/setasdefaulttemplate', 'Report\ReportController@setAsDefaultTemplate');
    Route::get('report/setassystemdefaulttemplate', 'Report\ReportController@setAsSystemDefaultTemplate');

    //--------------------Tracking-------------------------------------------------
    Route::post('/tracking/datagrid', 'TrackingDataController@dataAgGrid');

    //--------------------Reservation------------------------------------------------
    Route::post('/reservation/cancel', 'Reservations\ReservationController@cancel');
    Route::put('/reservation/checkin', 'Reservations\ReservationController@checkIn');
    Route::get('/reservation/status/{id}', 'Reservations\ReservationController@reservationStatus');
    Route::get('/reservation/form/datalookup', 'Reservations\ReservationController@dataLookUp');
    Route::get('/reservation/form/availableroom', 'Reservations\ReservationController@availableRoom');
    Route::get('/reservation/form/guestprofile', 'Reservations\ReservationController@guestProfile');
    Route::get('/reservation/form/guestprofiledetail', 'Reservations\ReservationController@guestProfileDetail');
    Route::get('/reservation/form/roomrate', 'Reservations\ReservationController@roomRate');
    Route::get('/reservation/form/dailyrate', 'Reservations\ReservationController@dailyRate');
    Route::get('/reservation/form/citystate', 'Reservations\ReservationController@cityState');
    Route::get('/reservation/form/charge', 'Reservations\ReservationController@creditCardCharge');
    Route::post('/reservation/form/roomnumber', 'Reservations\ReservationController@roomNumber');
    Route::post('/reservation/form/reservationgroup', 'Reservations\ReservationController@reservationGroupList');
    Route::post('/reservation/scheduledrate/delete', 'Reservations\ReservationScheduledRateController@delete');
    Route::put('/reservation/lock', 'Reservations\ReservationController@lockReservation');
    Route::put('/reservation/autoassign', 'Reservations\ReservationController@autoAssign');
    Route::get('/reservation/extracharge/lookup', 'Reservations\ReservationExtraChargeController@Lookup');
    Route::get('/reservation/guestdeposit/form/lookup', 'Reservations\ReservationController@dataLookupDeposit');
    Route::get('/reservation/guestdeposit/update/subdepartment/{id}', 'GuestDepositController@editSubDepartment');
    Route::get('/reservation/guestdeposit/lookup/subdepartment/{id}', 'GuestDepositController@dataLookupSubDepartment');
    Route::get('/reservation/guestdeposit/update/remark/{id}', 'GuestDepositController@editRemark');
    Route::get('/reservation/guestdeposit/update/documentnumber/{id}', 'GuestDepositController@editDocumentNumber');
    Route::get('/reservation/guestdeposit/form/lookup/transfer/{id}', 'Reservations\ReservationController@dataLookupTransfer');
    Route::get('/reservation/guestdeposit/form/exchrate', 'Reservations\ReservationController@exchangeRate');
    Route::get('/reservation/guestdeposit/form/account', 'Reservations\ReservationController@account');
    Route::get('/reservation/guestdeposit/balance', 'GuestDepositController@balance');
    Route::post('/reservation/extracharge/package', 'Reservations\ReservationExtraChargeController@insertExtraChargePackage');
    Route::post('/reservation/extracharge/delete', 'Reservations\ReservationExtraChargeController@delete');
    Route::post('/reservation/waitlist/set', 'Reservations\ReservationController@setWaitList');
    Route::post('/reservation/waitlist/unset', 'Reservations\ReservationController@unsetWaitList');
    Route::post('/reservation/guestgroup/reservation', 'Reservations\ReservationController@insertReservationGroup');
    Route::post('/reservation/availability', 'Reservations\ReservationController@availability');
    Route::post('/reservation/roomavailability', 'Reservations\ReservationController@RoomavailabilityForm');
    Route::post('/reservation/roomavailability/lookup', 'Reservations\ReservationController@RoomavailabilityFormLookUp');
    Route::post('/reservation/loguserupdatereservation', 'Reservations\ReservationController@inserLogUserUpdateReservation');
    Route::post('/reservation/guestdeposit/update/subdepartment', 'GuestDepositController@updateSubDepartment');
    Route::post('/reservation/guestdeposit/update/remark', 'GuestDepositController@updateRemark');
    Route::post('/reservation/guestdeposit/update/documentnumber', 'GuestDepositController@updateDocumentNumber');
    Route::post('/reservation/guestdeposit/transfer', 'GuestDepositController@transferDeposit');
    Route::post('/reservation/guestdeposit/cancel', 'GuestDepositController@cancelDeposit');
    Route::post('/reservation/guestdeposit/void', 'GuestDepositController@void');
    Route::post('/reservation/guestdeposit/correction', 'GuestDepositController@correction');
    Route::post('/reservation/guestdeposit/correction/amountbefore', 'GuestDepositController@getGuestDepositTotalAmount');
    Route::get('/reservation/guestdeposit/total/{id}/{query}', 'GuestDepositController@totalDeposit');
    Route::post('/reservation/guestgroup/delete', 'Reservations\GuestGroupController@delete');

    //extra charge breakdown
    Route::post('/reservation/extracharge/breakdown/insert', 'Reservations\ReservationExtraChargeController@insertBreakdown');
    Route::post('/reservation/extracharge/breakdown/update', 'Reservations\ReservationExtraChargeController@updateBreakdown');
    Route::post('/reservation/extracharge/breakdown/sub-group-account', 'Reservations\ReservationExtraChargeController@subGroupAccount');
    Route::post('/reservation/extracharge/breakdown/delete', 'Reservations\ReservationExtraChargeController@deleteBreakdown');
    Route::get('/reservation/extracharge/breakdown/list/{id}', 'Reservations\ReservationExtraChargeController@getBreakdownList');
    Route::get('/reservation/extracharge/breakdown/edit/{id}', 'Reservations\ReservationExtraChargeController@editBreakdown');
    // resource
    Route::resource('/reservation/guestgroup', 'Reservations\GuestGroupController');
    Route::resource('/reservation/guestdeposit', 'GuestDepositController');
    Route::resource('/reservation/extracharge', 'Reservations\ReservationExtraChargeController');
    Route::resource('/reservation/scheduledrate', 'Reservations\ReservationScheduledRateController');
    Route::resource('/reservation', 'Reservations\ReservationController');


    //--------------------Guest In House------------------------------------------------

    Route::get('/guestinhouse/extracharge/lookup', 'GuestInHouse\GuestExtraChargeController@lookup');
    Route::post('/guestinhouse/extracharge/delete', 'GuestInHouse\GuestExtraChargeController@delete');
    Route::post('/guestinhouse/scheduledrate/delete', 'GuestInHouse\GuestScheduledRateController@delete');
    Route::post('/guestinhouse/posting/autoroomcharge', 'GuestInHouse\GuestInHouseController@postingRoomCharge');
    Route::post('/guestinhouse/compliment', 'GuestInHouse\GuestInHouseController@complimentHu');
    Route::post('/guestinhouse/other/moveroom', 'GuestInHouse\GuestInHouseController@moveRoom');
    Route::post('/guestinhouse/other/switchroom', 'GuestInHouse\GuestInHouseController@switchRoom');
    Route::post('/guestinhouse/other/list/switchroom', 'GuestInHouse\GuestInHouseController@listSwitchRoom');
    Route::post('/guestinhouse/other/lock', 'GuestInHouse\GuestInHouseController@lockFolio');
    Route::post('/guestinhouse/other/incognito', 'GuestInHouse\GuestInHouseController@setIncognito');
    Route::post('/guestinhouse/other/cancel', 'GuestInHouse\GuestInHouseController@cancelCheckIn');
    Route::post('/guestinhouse/other/message', 'GuestInHouse\GuestInHouseController@message');
    Route::post('/guestinhouse/other/todo', 'GuestInHouse\GuestInHouseController@toDo');
    Route::post('/guestinhouse/checkout', 'GuestInHouse\GuestInHouseController@checkOut');
    Route::post('/guestinhouse/extracharge/package', 'GuestInHouse\GuestExtraChargeController@insertExtraChargePackage');
    Route::post('/guestinhouse/loguserupdateguestinhouse', 'GuestInHouse\GuestInHouseController@logUserUpdateGuestInHouse');
    //extra charge breakdown
    Route::post('/guestinhouse/extracharge/breakdown/insert', 'GuestInHouse\GuestExtraChargeController@insertBreakdown');
    Route::post('/guestinhouse/extracharge/breakdown/update', 'GuestInHouse\GuestExtraChargeController@updateBreakdown');
    Route::post('/guestinhouse/extracharge/breakdown/delete', 'GuestInHouse\GuestExtraChargeController@deleteBreakdown');
    Route::post('/guestinhouse/extracharge/breakdown/sub-group-account', 'GuestInHouse\GuestExtraChargeController@subGroupAccount');
    Route::get('/guestinhouse/extracharge/breakdown/list/{id}', 'GuestInHouse\GuestExtraChargeController@getBreakdownList');
    Route::get('/guestinhouse/extracharge/breakdown/edit/{id}', 'GuestInHouse\GuestExtraChargeController@editBreakdown');
    // Route::post('/guestinhouse/autopost', 'GuestInHouse\GuestInHouseController@checkOut');
    Route::resource('/guestinhouse/extracharge', 'GuestInHouse\GuestExtraChargeController');
    Route::resource('/guestinhouse/scheduledrate', 'GuestInHouse\GuestScheduledRateController');
    Route::resource('/guestinhouse', 'GuestInHouse\GuestInHouseController');

        //--------------------Transaction------------------------------------------------

        Route::get('/transaction/form/lookup', 'Folio\TransactionController@lookup');
        Route::get('/transaction/form/exchrate', 'Folio\TransactionController@exchRate');
        Route::get('/transaction/form/account', 'Folio\TransactionController@account');
        Route::get('/transaction/form/foliotype', 'Folio\TransactionController@folioType');
        Route::get('/transaction/transfer/list/routing', 'Folio\TransactionController@listRouting');
        Route::get('/transaction/transfer/list/return', 'Folio\TransactionController@listReturnTransfer');
        Route::get('/transaction/transfer/list/folio', 'Folio\TransactionController@listFolio');
        Route::get('/transaction/balance', 'Folio\TransactionController@balance');
        Route::get('/transaction/foliotype', 'Folio\TransactionController@getFolioType');
        Route::get('/transaction/lookup/subdepartment/{id}', 'Folio\TransactionController@dataLookupSubDepartment');
        Route::get('/transaction/lookup/company/{id}', 'Folio\TransactionController@dataLookupCompany');
        Route::get('/transaction/update/subdepartment/{id}', 'Folio\TransactionController@editSubDepartment');
        Route::get('/transaction/update/remark/{id}', 'Folio\TransactionController@editRemark');
        Route::get('/transaction/update/documentnumber/{id}', 'Folio\TransactionController@editDocumentNumber');
        Route::get('/transaction/update/directbill/{id}', 'Folio\TransactionController@editDirectBill');
        //properties
        Route::get('/transaction/properties/list1/{idlog}', 'Folio\TransactionController@properties1');
        Route::get('/transaction/properties/list2/{idlog}', 'Folio\TransactionController@properties2');
        Route::get('/transaction/properties/list3/{idlog}', 'Folio\TransactionController@properties3');
        Route::get('/transaction/package/list', 'Folio\TransactionController@getPackageList');
        Route::post('/transaction/transfer/routing/remove', 'Folio\TransactionController@removeRouting');
        Route::post('/transaction/transfer/transaction', 'Folio\TransactionController@transferTransaction');
        Route::post('/transaction/transfer/balance', 'Folio\TransactionController@transferBalance');
        Route::post('/transaction/transfer/routing', 'Folio\TransactionController@automaticRouting');
        Route::post('/transaction/transfer/return', 'Folio\TransactionController@returnTransfer');
        Route::post('/transaction/correction/amountbefore', 'Folio\TransactionController@getSubFolioTotalAmount');
        Route::post('/transaction/correction', 'Folio\TransactionController@correction');
        Route::get('/transaction/advanced-correction/{id}', 'Folio\TransactionController@getAdvancedCorrectionBreakdown');

        Route::post('/transaction/advanced-correction', 'Folio\TransactionController@advancedCorrection');
        Route::post('/transaction/void', 'Folio\TransactionController@void');
        Route::post('/transaction/charge', 'Folio\TransactionController@charge');
        Route::post('/transaction/payment', 'Folio\TransactionController@payment');
        Route::post('/transaction/move', 'Folio\TransactionController@moveSubFolio');
        Route::post('/transaction/update/subdepartment', 'Folio\TransactionController@updateSubDepartment');
        Route::post('/transaction/update/remark', 'Folio\TransactionController@updateRemark');
        Route::post('/transaction/update/documentnumber', 'Folio\TransactionController@updateDocumentNumber');
        Route::post('/transaction/update/directbill', 'Folio\TransactionController@updateDirectBill');
        Route::resource('/transaction', 'Folio\TransactionController');
        //package
        Route::post('/transaction/package/package', 'Folio\TransactionController@insertPackage');
        Route::post('/transaction/package/package-lookup', 'Folio\TransactionController@packageLookup');
        Route::get('/transaction/package/package-breakdown/{id}', 'Folio\TransactionController@packageBreakdown');


    //--------------------Lost And Found------------------------------------------------
    Route::post('/lost-and-found/active', 'FrontDesk\LostAndFoundController@updateActive');
    Route::post('/lost-and-found/delete', 'FrontDesk\LostAndFoundController@delete');
    Route::resource('/lost-and-found', 'FrontDesk\LostAndFoundController');

    //--------------------Cashier Report------------------------------------------------
    Route::resource('/cashier-report', 'CashierReportController');
    Route::post('/cashier-report/close-shift', 'CashierReportController@closeShift');


    //--------------------Night Audit------------------------------------------------
    Route::post('/nightaudit/autopost/precheck', 'NightAudit\NightAuditController@precheckAutoPost');
    Route::post('/nightaudit/autopost/post', 'NightAudit\NightAuditController@autoPost');
    Route::post('/nightaudit/dayend/precheck/critical', 'NightAudit\NightAuditController@criticalError');
    Route::post('/nightaudit/dayend/precheck/warning', 'NightAudit\NightAuditController@warningError');
    Route::post('/nightaudit/dayend/audit', 'NightAudit\NightAuditController@processDayEndClosed');
    Route::get('/nightaudit/dayend/lastdayend', 'NightAudit\NightAuditController@getLastDayendClose');

    //--------------------Folio History------------------------------------------------
    Route::post('/foliohistory/cancelcheckout', 'Folio\FolioHistoryController@cancelCheckOut');
    Route::resource('/foliohistory', 'Folio\FolioHistoryController');

    //--------------------FOLIO--------------------------------------------------
    Route::get('/folio/status/{id}', 'Folio\FolioController@folioStatus');
    //--------------------Desk Folio------------------------------------------------
    Route::resource('/deskfolio', 'Folio\DeskFolioController');

    //--------------------Master Folio------------------------------------------------
    Route::post('/masterfolio/mastergroupexist', 'Folio\MasterFolioController@isMasterFolioExist');
    Route::post('/masterfolio/mastergroup/getmaster', 'Folio\MasterFolioController@getMasterFolioGroup');
    Route::post('/masterfolio/mastergroup', 'Folio\MasterFolioController@createMasterFolioGroup');
    Route::resource('/masterfolio', 'Folio\MasterFolioController');

    //---------------------Sub Department-----------------------------------------//
    Route::resource('/subdepartment','Configurations\SubDepartmentController');

    //--------------------Housekeeping------------------------------------------------
    Route::get('/housekeeping/table/datagrid', 'Housekeeping\HousekeepingController@dataAgGrid');
    Route::get('/housekeeping/form/datalookup', 'Housekeeping\HousekeepingController@dataLookUp');
    Route::get('/housekeeping/form/filterlookup', 'Housekeeping\HousekeepingController@filterLookup');
    Route::post('/housekeeping/delete', 'Housekeeping\HousekeepingController@delete');
    Route::post('/housekeeping/roomstatus', 'Housekeeping\HousekeepingController@roomStatus');
    Route::get('/housekeeping/report/checklist', 'Housekeeping\ReportController@CheckList');
    Route::resource('/housekeeping', 'Housekeeping\HousekeepingController');
    //--------------------Special Access--------------------------------------
    // Route::post('/special-access/check', 'General\SpecialAccessController@checkSpecialAccess');


    //--------------------Marketing--------------------------------------
    Route::post('/phonebook/datalookup', 'Marketing\PhoneBookController@dataLookup');
    Route::post('/phonebook/delete', 'Marketing\PhoneBookController@delete');
    Route::resource('/phonebook', 'Marketing\PhoneBookController');

//--------------------Back Office--------------------------------------
    // AP Refund Deposit
    Route::post('/ap-refund-deposit/lookup/transaction', 'BackOffice\APRefundDepositController@transactionIDList');
    Route::post('/ap-refund-deposit/payment/index', 'BackOffice\APRefundDepositController@paymentDetail');
    Route::post('/ap-refund-deposit/payment/delete', 'BackOffice\APRefundDepositController@deletePayment');
    Route::post('/ap-refund-deposit/datalookup', 'BackOffice\APRefundDepositController@dataLookup');
    Route::resource('/ap-refund-deposit', 'BackOffice\APRefundDepositController');

    // AP Commission and Other
    Route::post('/ap-commission/lookup/transaction', 'BackOffice\APCommissionAndOther@transactionIDList');
    Route::post('/ap-commission/payment/index', 'BackOffice\APCommissionAndOther@paymentDetail');
    Route::post('/ap-commission/payment/delete', 'BackOffice\APCommissionAndOther@deletePayment');
    Route::post('/ap-commission/datalookup', 'BackOffice\APCommissionAndOther@dataLookup');
    Route::resource('/ap-commission', 'BackOffice\APCommissionAndOther');

    // Receipt
    Route::get('/receipt/number', 'BackOffice\ReceiptController@receiptNumber');
    Route::post('/receipt/delete', 'BackOffice\ReceiptController@delete');
    Route::resource('/receipt', 'BackOffice\ReceiptController');

    // Income Budget
    Route::post('/income-budget/datalookup', 'BackOffice\IncomeBudgetController@dataLookup');
    Route::post('/income-budget/delete', 'BackOffice\IncomeBudgetController@delete');
    Route::resource('/income-budget', 'BackOffice\IncomeBudgetController');

    // Budget Statistic
    Route::post('/budget-statistic/datalookup', 'BackOffice\BudgetStatisticController@dataLookup');
    Route::post('/budget-statistic/delete', 'BackOffice\BudgetStatisticController@delete');
    Route::resource('/budget-statistic', 'BackOffice\BudgetStatisticController');

//--------------------AR City Ledger--------------------------------------
    // Payment
    Route::get('/ar-city-ledger/payment/index', 'BackOffice\ARCityLedgerController@getInvoicePayment');
    Route::get('/ar-city-ledger/payment/datalookup', 'BackOffice\ARCityLedgerController@dataLookupPayment');
    Route::post('/ar-city-ledger/payment', 'BackOffice\ARCityLedgerController@insertPayment');
    Route::post('/ar-city-ledger/payment/delete', 'BackOffice\ARCityLedgerController@deleteInvoicePayment');

    Route::get('/ar-city-ledger/invoice', 'BackOffice\ARCityLedgerController@indexInvoice');
    Route::post('/ar-city-ledger/invoice/detail', 'BackOffice\ARCityLedgerController@getInvoiceDetail');
    Route::post('/ar-city-ledger/direct-bill/edit', 'BackOffice\ARCityLedgerController@editDirectBill');
    Route::post('/ar-city-ledger/direct-bill/update', 'BackOffice\ARCityLedgerController@updateDirectBill');
    Route::post('/ar-city-ledger/folio', 'BackOffice\ARCityLedgerController@getFolio');
    Route::post('/ar-city-ledger/filter/company-type', 'BackOffice\ARCityLedgerController@getCompanyType');
    Route::post('/ar-city-ledger/datalookup', 'BackOffice\ARCityLedgerController@dataLookup');
    Route::post('/ar-city-ledger/delete', 'BackOffice\ARCityLedgerController@delete');
    Route::resource('/ar-city-ledger', 'BackOffice\ARCityLedgerController');

    //--------------------Bank Transaction------------------------------------------------
    Route::post('/bank-transaction/lookup/account', 'BackOffice\BankTransactionController@lookupBankAccount');
    Route::post('/bank-transaction/lookup/transaction', 'BackOffice\BankTransactionController@lookupTransaction');
    Route::post('/bank-transaction/reconciliation/detail', 'BackOffice\BankTransactionController@reconciliationDetail');
    Route::post('/bank-transaction/reconciliation/delete', 'BackOffice\BankTransactionController@deleteReconciliation');
    Route::get('/bank-transaction/reconciliation', 'BackOffice\BankTransactionController@indexReconciliation');
    Route::resource('/bank-transaction', 'BackOffice\BankTransactionController');


    //--------------------User------------------------------------------------
    Route::get('/special-access/check', 'API\UserController@userList');
    Route::get('/usersetting/user', 'API\UserController@userList');
    Route::get('/usersetting/lookup/usergroup', 'API\UserController@userGroup');
    Route::get('/usersetting/user/{id}/edit', 'API\UserController@edit');
    Route::put('/usersetting/user', 'API\UserController@update');
    Route::post('/usersetting/user/delete', 'API\UserController@delete');
    Route::post('/usersetting/user/change-password', 'API\UserController@changePassword');
    Route::post('/usersetting/user', 'API\UserController@store');
    //--------------------User Group------------------------------------------------
    Route::get('/usersetting/usergroup/getreportlist', 'Tools\UserSetting\UserGroupController@getReportList');
    Route::post('/usersetting/usergroup/delete', 'Tools\UserSetting\UserGroupController@delete');
    Route::get('/usersetting/usergroup/table/datagrid', 'Tools\UserSetting\UserGroupController@dataAgGrid');
    Route::resource('/usersetting/usergroup', 'Tools\UserSetting\UserGroupController');
    //--------------------User group access
    Route::post('usersetting/get-other-access', 'Tools\UserSetting\UserGroupController@getOtherAccess');
    Route::post('usersetting/get-preview-report-access', 'Tools\UserSetting\UserGroupController@getPreviewReportAccess');
    Route::post('usersetting/get-folio-access', 'Tools\UserSetting\UserGroupController@getFolioAccess');
    Route::post('usersetting/get-deposit-access', 'Tools\UserSetting\UserGroupController@getDepositAccess');
    Route::get('usersetting/getmenuaccessusergroup', 'Tools\UserSetting\UserGroupController@getMenuAccess');
    Route::get('usersetting/usergroup', 'Tools\UserSetting\UserGroupController@getMenuAccess');

    //--------------------Room Type------------------------------------------------
    Route::post('/room_type/delete', 'Configurations\RoomTypeController@delete');
    Route::get('/room_type/table/datagrid', 'Configurations\RoomTypeController@dataAgGrid');
    Route::resource('/room_type', 'Configurations\RoomTypeController');
    //--------------------Room-----------------------------------------------------
    Route::post('/room/delete', 'Configurations\RoomController@delete');
    Route::get('/room/table/datagrid', 'Configurations\RoomController@dataAgGrid');
    Route::get('/room/form/datalookup/', 'Configurations\RoomController@dataLookUp');
    Route::resource('/room', 'Configurations\RoomController');
    //--------------------Package-----------------------------------------------------
    Route::post('/package/delete', 'Configurations\PackageController@delete');
    Route::get('/package/table/datagrid', 'Configurations\PackageController@dataAgGrid');
    Route::get('/package/form/datalookup/', 'Configurations\PackageController@dataLookUp');
    Route::get('/package/form/account/', 'Configurations\PackageController@account');
    Route::resource('/package', 'Configurations\PackageController');
    //--------------------Package Breakdown-----------------------------------------------------
    Route::post('/packagebreakdown/delete', 'Configurations\PackageBreakdownController@delete');
    Route::get('/packagebreakdown/table/datagrid/{id}', 'Configurations\PackageBreakdownController@dataAgGrid');
    Route::get('/packagebreakdown/form/account', 'Configurations\PackageBreakdownController@account');
    Route::resource('/packagebreakdown', 'Configurations\PackageBreakdownController');

    //--------------------Package Business Source-----------------------------------------------------
    Route::post('/business/delete', 'Configurations\PackageBusinessSourceController@delete');
    Route::get('/business/table/datagrid/{business}', 'Configurations\PackageBusinessSourceController@dataAgGrid');
    Route::get('/business/form/datalookup', 'Configurations\PackageBusinessSourceController@dataLookUp');
    Route::resource('/business', 'Configurations\PackageBusinessSourceController');

    //--------------------RoomRate-----------------------------------------------------
    Route::post('/roomrate/delete', 'Configurations\RoomRateController@delete');
    Route::get('/roomrate/table/datagrid', 'Configurations\RoomRateController@dataAgGrid');
    Route::get('/roomrate/form/datalookup', 'Configurations\RoomRateController@dataLookUp');
    Route::get('/roomrate/form/account', 'Configurations\RoomRateController@account');
    Route::get('/roomrate/dynamicrate', 'Configurations\RoomRateController@dynamicRate');
    Route::get('/roomrate/lastdeal', 'Configurations\RoomRateController@getRoomRateLastDeal');
    Route::post('/roomrate/dynamicrate', 'Configurations\RoomRateController@insertRoomRateBaseSession');
    Route::post('/roomrate/lastdeal', 'Configurations\RoomRateController@insertRoomRateLastDeal');


    Route::resource('/roomrate', 'Configurations\RoomRateController');


    //--------------------RoomRate Breakdown-----------------------------------------------------
    Route::post('/roomratebreakdown/delete', 'Configurations\RoomRateBreakdownController@delete');
    Route::get('/roomratebreakdown/table/datagrid/{id}', 'Configurations\RoomRateBreakdownController@dataAgGrid');
    Route::get('/roomratebreakdown/form/account', 'Configurations\RoomRateBreakdownController@account');
    Route::resource('/roomratebreakdown', 'Configurations\RoomRateBreakdownController');

    //--------------------RoomRate Business Source-----------------------------------------------------
    Route::post('/roomratebusiness/delete', 'Configurations\RoomRateBusinessSourceController@delete');
    Route::get('/roomratebusiness/table/datagrid/{business}', 'Configurations\RoomRateBusinessSourceController@dataAgGrid');
    Route::get('/roomratebusiness/form/datalookup', 'Configurations\RoomRateBusinessSourceController@dataLookUp');
    Route::resource('/roomratebusiness', 'Configurations\RoomRateBusinessSourceController');
    //--------------------RoomRate Currency------------------------------------------------------------
    Route::post('/roomratecurrency/delete', 'Configurations\RoomRateCurrencyController@delete');
    Route::get('/roomratecurrency/table/datagrid/{business}', 'Configurations\RoomRateCurrencyController@dataAgGrid');
    Route::get('/roomratecurrency/form/datalookup/{id}', 'Configurations\RoomRateCurrencyController@dataLookUp');
    Route::resource('/roomratecurrency', 'Configurations\RoomRateCurrencyController');
    //--------------------Bed Type-----------------------------------------------------
    Route::post('/bedtype/delete', 'Configurations\BedTypeController@delete');
    Route::get('/bedtype/table/datagrid', 'Configurations\BedTypeController@dataAgGrid');
    Route::resource('/bedtype', 'Configurations\BedTypeController');
    //--------------------Room View-----------------------------------------------------
    Route::post('/roomview/delete', 'Configurations\RoomViewController@delete');
    Route::resource('/roomview', 'Configurations\RoomViewController');
    Route::get('/roomview/table/datagrid', 'Configurations\RoomViewController@dataAgGrid');
    //--------------------Room Rate Category-----------------------------------------------------
    Route::post('/roomrate-category/delete', 'Configurations\RoomRateCategoryController@delete');
    Route::get('/roomrate-category/table/datagrid', 'Configurations\RoomRateCategoryController@dataAgGrid');
    Route::resource('/roomrate-category', 'Configurations\RoomRateCategoryController');
    //--------------------Room Rate Sub Category-----------------------------------------------------
    Route::post('/roomrate-subcategory/delete', 'Configurations\RoomRateSubCategoryController@delete');
    Route::get('/roomrate-subcategory/table/datagrid', 'Configurations\RoomRateSubCategoryController@dataAgGrid');
    Route::resource('/roomrate-subcategory', 'Configurations\RoomRateSubCategoryController');
    Route::get('/roomrate-subcategory/form/datalookup', 'Configurations\RoomRateSubCategoryController@dataLookUp');
    //--------------------Room Aminities-----------------------------------------------------
    Route::post('/room_amenities/delete', 'Configurations\RoomAmenitiesController@delete');
    Route::get('/room_amenities/table/datagrid', 'Configurations\RoomAmenitiesController@dataAgGrid');
    Route::get('/room_amenities/form/datalookup', 'Configurations\RoomAmenitiesController@dataLookUp');
    Route::resource('/room_amenities', 'Configurations\RoomAmenitiesController');
    //--------------------Room Unavailable Reason-----------------------------------------------------
    Route::post('/room-unavailable-reason/delete', 'Configurations\RoomUnavailableReasonController@delete');
    Route::get('/room-unavailable-reason/table/datagrid', 'Configurations\RoomUnavailableReasonController@dataAgGrid');
    Route::resource('/room-unavailable-reason', 'Configurations\RoomUnavailableReasonController');
    //--------------------Room Boy-----------------------------------------------------
    Route::post('/roomboy/delete', 'Configurations\RoomBoyController@delete');
    Route::get('/roomboy/table/datagrid', 'Configurations\RoomBoyController@dataAgGrid');
    Route::resource('/roomboy', 'Configurations\RoomBoyController');
    //--------------------Guest Title-----------------------------------------------------
    Route::post('/title/delete', 'Configurations\GuestTitleController@delete');
    Route::get('/title/table/datagrid', 'Configurations\GuestTitleController@dataAgGrid');
    Route::resource('/title', 'Configurations\GuestTitleController');
    //--------------------Guest Type-----------------------------------------------------
    Route::post('/guest_type/delete', 'Configurations\GuestTypeController@delete');
    Route::get('/guest_type/table/datagrid', 'Configurations\GuestTypeController@dataAgGrid');
    Route::resource('/guest_type', 'Configurations\GuestTypeController');
    //--------------------Country-----------------------------------------------------
    Route::post('/country/delete', 'Configurations\CountryController@delete');
    Route::get('/country/table/datagrid', 'Configurations\CountryController@dataAgGrid');
    Route::get('/country/form/datalookup', 'Configurations\CountryController@dataLookUp');
    Route::resource('/country', 'Configurations\CountryController');
    //--------------------State-----------------------------------------------------
    Route::post('/state/delete', 'Configurations\StateController@delete');
    Route::get('/state/table/datagrid', 'Configurations\StateController@dataAgGrid');
    Route::get('/state/form/datalookup', 'Configurations\StateController@dataLookUp');
    Route::resource('/state', 'Configurations\StateController');
    //--------------------Nationality-----------------------------------------------------
    Route::post('/nationality/delete', 'Configurations\NationalityController@delete');
    Route::get('/nationality/table/datagrid', 'Configurations\NationalityController@dataAgGrid');
    Route::get('/nationality/form/datalookup', 'Configurations\NationalityController@dataLookUp');
    Route::resource('/nationality', 'Configurations\NationalityController');
    //--------------------language-----------------------------------------------------
    Route::post('/language/delete', 'Configurations\LanguageController@delete');
    Route::get('/language/table/datagrid', 'Configurations\LanguageController@dataAgGrid');
    Route::get('/language/form/datalookup', 'Configurations\LanguageController@dataLookUp');
    Route::resource('/language', 'Configurations\LanguageController');
    //--------------------idcardtype-----------------------------------------------------
    Route::post('/idcardtype/delete', 'Configurations\IDCardTypeController@delete');
    Route::get('/idcardtype/table/datagrid', 'Configurations\IDCardTypeController@dataAgGrid');
    Route::get('/idcardtype/form/datalookup', 'Configurations\IDCardTypeController@dataLookUp');
    Route::resource('/idcardtype', 'Configurations\IDCardTypeController');
    //--------------------payment_type-----------------------------------------------------
    Route::post('/payment_type/delete', 'Configurations\PaymentTypeController@delete');
    Route::get('/payment_type/table/datagrid', 'Configurations\PaymentTypeController@dataAgGrid');
    Route::get('/payment_type/form/datalookup', 'Configurations\PaymentTypeController@dataLookUp');
    Route::resource('/payment_type', 'Configurations\PaymentTypeController');
    //--------------------market_category-----------------------------------------------------
    Route::post('/market_category/delete', 'Configurations\MarketCategoryController@delete');
    Route::get('/market_category/table/datagrid', 'Configurations\MarketCategoryController@dataAgGrid');
    Route::get('/market_category/form/datalookup', 'Configurations\MarketCategoryController@dataLookUp');
    Route::resource('/market_category', 'Configurations\MarketCategoryController');
    //--------------------market-----------------------------------------------------
    Route::post('/market/delete', 'Configurations\MarketController@delete');
    Route::get('/market/table/datagrid', 'Configurations\MarketController@dataAgGrid');
    Route::get('/market/form/datalookup', 'Configurations\MarketController@dataLookUp');
    Route::resource('/market', 'Configurations\MarketController');
    //--------------------marketing-----------------------------------------------------
    Route::post('/marketing/delete', 'Configurations\MarketingController@delete');
    Route::get('/marketing/table/datagrid', 'Configurations\MarketingController@dataAgGrid');
    Route::get('/marketing/form/datalookup', 'Configurations\MarketingController@dataLookUp');
    Route::resource('/marketing', 'Configurations\MarketingController');
    //--------------------card_bank-----------------------------------------------------
    Route::post('/card_bank/delete', 'Configurations\CardBankController@delete');
    Route::get('/card_bank/table/datagrid', 'Configurations\CardBankController@dataAgGrid');
    Route::get('/card_bank/form/datalookup', 'Configurations\CardBankController@dataLookUp');
    Route::resource('/card_bank', 'Configurations\CardBankController');
    //--------------------card_type-----------------------------------------------------
    Route::post('/card_type/delete', 'Configurations\CardTypeController@delete');
    Route::get('/card_type/table/datagrid', 'Configurations\CardTypeController@dataAgGrid');
    Route::get('/card_type/form/datalookup', 'Configurations\CardTypeController@dataLookUp');
    Route::resource('/card_type', 'Configurations\CardTypeController');
    //--------------------loan_item-----------------------------------------------------
    Route::post('/loan_item/delete', 'Configurations\LoanItemController@delete');
    Route::get('/loan_item/table/datagrid', 'Configurations\LoanItemController@dataAgGrid');
    Route::get('/loan_item/form/datalookup', 'Configurations\LoanItemController@dataLookUp');
    Route::resource('/loan_item', 'Configurations\LoanItemController');
    //--------------------credit_card_charge-----------------------------------------------------
    Route::post('/credit_card_charge/delete', 'Configurations\CreditCardChargeController@delete');
    Route::get('/credit_card_charge/table/datagrid', 'Configurations\CreditCardChargeController@dataAgGrid');
    Route::get('/credit_card_charge/form/datalookup', 'Configurations\CreditCardChargeController@dataLookUp');
    Route::resource('/credit_card_charge', 'Configurations\CreditCardChargeController');
    //--------------------phone_book_type-----------------------------------------------------
    Route::post('/phone_book_type/delete', 'Configurations\PhoneBookTypeController@delete');
    Route::get('/phone_book_type/table/datagrid', 'Configurations\PhoneBookTypeController@dataAgGrid');
    Route::get('/phone_book_type/form/datalookup', 'Configurations\PhoneBookTypeController@dataLookUp');
    Route::resource('/phone_book_type', 'Configurations\PhoneBookTypeController');
    //--------------------member_point_type-----------------------------------------------------
    Route::post('/member_point_type/delete', 'Configurations\MemberPointTypeController@delete');
    Route::get('/member_point_type/table/datagrid', 'Configurations\MemberPointTypeController@dataAgGrid');
    Route::get('/member_point_type/form/datalookup', 'Configurations\MemberPointTypeController@dataLookUp');
    Route::resource('/member_point_type', 'Configurations\MemberPointTypeController');
    //--------------------member_outlet_discount-----------------------------------------------------
    Route::post('/member_outlet_discount/delete', 'Configurations\MemberOutletDiscountController@delete');
    Route::get('/member_outlet_discount/table/datagrid', 'Configurations\MemberOutletDiscountController@dataAgGrid');
    Route::get('/member_outlet_discount/form/datalookup', 'Configurations\MemberOutletDiscountController@dataLookUp');
    Route::resource('/member_outlet_discount', 'Configurations\MemberOutletDiscountController');
    //--------------------member-----------------------------------------------------
    Route::post('/member/delete', 'Configurations\MemberController@delete');
    Route::get('/member/table/datagrid', 'Configurations\MemberController@dataAgGrid');
    Route::get('/member/form/datalookup', 'Configurations\MemberController@dataLookUp');
    Route::resource('/member', 'Configurations\MemberController');
    //--------------------voucher_reason-----------------------------------------------------
    Route::post('/voucher_reason/delete', 'Configurations\VoucherReasonController@delete');
    Route::get('/voucher_reason/table/datagrid', 'Configurations\VoucherReasonController@dataAgGrid');
    Route::get('/voucher_reason/form/datalookup', 'Configurations\VoucherReasonController@dataLookUp');
    Route::resource('/voucher_reason', 'Configurations\VoucherReasonController');
    //--------------------competitor_category-----------------------------------------------------
    Route::post('/competitor_category/delete', 'Configurations\CompetitorCategoryController@delete');
    Route::get('/competitor_category/table/datagrid', 'Configurations\CompetitorCategoryController@dataAgGrid');
    Route::get('/competitor_category/form/datalookup', 'Configurations\CompetitorCategoryController@dataLookUp');
    Route::resource('/competitor_category', 'Configurations\CompetitorCategoryController');
    //--------------------competitor-----------------------------------------------------
    Route::post('/competitor/delete', 'Configurations\CompetitorController@delete');
    Route::get('/competitor/table/datagrid', 'Configurations\CompetitorController@dataAgGrid');
    Route::get('/competitor/form/datalookup', 'Configurations\CompetitorController@dataLookUp');
    Route::resource('/competitor', 'Configurations\CompetitorController');

    //--------------------Owner-----------------------------------------------------
    Route::post('/owner/delete', 'Configurations\OwnerController@delete');
    Route::resource('/owner', 'Configurations\OwnerController');
    Route::get('/owner/table/datagrid', 'Configurations\OwnerController@dataAgGrid');
    //--------------------Country------------------------------------------------
    Route::get('/table/country', 'Configurations\CountryController@dataAgGrid');

    //--------------------CONFIG------------------------------------------------
    Route::get('/configuration/company-information', 'Configurations\ConfigurationController@getCompanyInformation');
    Route::get('/configuration/company-information/lookup', 'Configurations\ConfigurationController@getCompanyInformationLookup');
    Route::get('/configuration/reservation2', 'Configurations\ConfigurationController@getWalkingReservation2List');
    Route::get('/configuration/reservation2/lookup', 'Configurations\ConfigurationController@getWalkingReservation2Lookup');
    Route::get('/configuration/global-parameter', 'Configurations\ConfigurationController@getGlobalParameterList');
    Route::get('/configuration/global-parameter/lookup', 'Configurations\ConfigurationController@getGlobalParameterLookup');
    Route::get('/configuration/load-all-configuration', 'Configurations\ConfigurationController@getConfigurationList');
    Route::post('/configuration/company-information/update', 'Configurations\ConfigurationController@updateCompanyInformation');
    Route::post('/configuration/reservation2/update', 'Configurations\ConfigurationController@updateWalkingReservation2');
    Route::post('/configuration/global-parameter/update', 'Configurations\ConfigurationController@updateGlobalParameter');

});
