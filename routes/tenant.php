<?php

declare(strict_types=1);

use App\Http\Controllers\API\UserController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuditDateController;
use App\Http\Controllers\BackOffice\APCommissionAndOther;
use App\Http\Controllers\BackOffice\APRefundDepositController;
use App\Http\Controllers\BackOffice\ARCityLedgerController;
use App\Http\Controllers\BackOffice\BudgetStatisticController;
use App\Http\Controllers\BackOffice\IncomeBudgetController;
use App\Http\Controllers\BackOffice\ReceiptController;
use App\Http\Controllers\CashierReportController;
use App\Http\Controllers\Configurations\BedTypeController;
use App\Http\Controllers\Configurations\ConfigurationController;
use App\Http\Controllers\Configurations\PackageBreakdownController;
use App\Http\Controllers\Configurations\PackageBusinessSourceController;
use App\Http\Controllers\Configurations\PackageController;
use App\Http\Controllers\Configurations\RoomAmenitiesController;
use App\Http\Controllers\Configurations\RoomBoyController;
use App\Http\Controllers\Configurations\RoomController;
use App\Http\Controllers\Configurations\RoomRateBreakdownController;
use App\Http\Controllers\Configurations\RoomRateBusinessSourceController;
use App\Http\Controllers\Configurations\RoomRateCategoryController;
use App\Http\Controllers\Configurations\RoomRateController;
use App\Http\Controllers\Configurations\RoomRateSubCategoryController;
use App\Http\Controllers\Configurations\RoomTypeController;
use App\Http\Controllers\Configurations\RoomUnavailableReasonController;
use App\Http\Controllers\Configurations\RoomViewController;
use App\Http\Controllers\Configurations\SubDepartmentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Folio\DeskFolioController;
use App\Http\Controllers\Folio\FolioController;
use App\Http\Controllers\Folio\FolioHistoryController;
use App\Http\Controllers\Folio\MasterFolioController;
use App\Http\Controllers\Folio\TransactionController;
use App\Http\Controllers\General\ShiftLogController;
use App\Http\Controllers\GuestDepositController;
use App\Http\Controllers\GuestInHouse\GuestExtraChargeController;
use App\Http\Controllers\GuestInHouse\GuestInHouseController;
use App\Http\Controllers\GuestInHouse\GuestScheduledRateController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\Housekeeping\HousekeepingController;
use App\Http\Controllers\Housekeeping\ReportController as HousekeepingReportController;
use App\Http\Controllers\Marketing\PhoneBookController;
use App\Http\Controllers\NightAudit\NightAuditController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\Report\GenerateReportController;
use App\Http\Controllers\Report\ReportController;
use App\Http\Controllers\ReportPageController;
use App\Http\Controllers\Reservations\GuestGroupController;
use App\Http\Controllers\Reservations\ReservationController;
use App\Http\Controllers\Reservations\ReservationExtraChargeController;
use App\Http\Controllers\Reservations\ReservationScheduledRateController;
use App\Http\Controllers\Tools\UserSetting\UserGroupController;
use App\Http\Controllers\TrackingDataController;
use App\ReservationScheduleRate;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyByDomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {
    
    Route::prefix('api')->group(function () {

        // Route::post('/special-access/check', 'General\SpecialAccessController@checkSpecialAccess']);
        // // Route::get('/test', 'BackOffice\ReceiptController@receiptNumber']);
    
        // Route::post('/receipt/number', 'BackOffice\ReceiptController@receiptNumber']);
    
    
        // Route::get('report/preview', 'Report\GenerateReportController@generateReport']);
        //END API TESTING PUPOSE AREA===========================================================================
    
    
        // Route::post('amount', [TransactionController::class, 'correction']);
        // Route::post('amount2', 'HelperController@getRoomAvailability2']);
        // Route::get('report/{id1}/{id2}', [ReportController::class, 'reservation']);
        // Route::post('report/test', [HousekeepingController::class, 'roomStatus']);
    
        // Route::get('/report/company-profile', 'General\CompanyInformationController@hotelInformation']);
    
        // Route::post('/reservation/report/registrationform', [ReservationController::class, 'registrationForm']); 

        // Login
        Route::post('logout', [UserController::class, 'logout']);
        Route::post('login', [UserController::class, 'login']);
        Route::post('register', [UserController::class, 'register']);
        Route::post('cek-login', [UserController::class, 'cekUserLoginOtherDevice']);
        Route::get('/shift/open-shift', [ShiftLogController::class,'openShift']);
        Route::get('/shift/working-shift', [App\Http\Controllers\General\ShiftLogController::class,'workingShift']);
        
        Route::group(['middleware' => 'auth:api'], function(){
            
            Route::get('auth-check', [UserController::class, 'authCheck']);

            Route::get('report/preview', [GenerateReportController::class, 'generateReport']);

            Route::post('details', [UserController::class, 'details']);
            Route::get('/usersetting/user', [UserController::class, 'userList']);
            Route::get('/usersetting/usergroup/specialaccess', [UserGroupController::class, 'getSpecialAccessList']);
            
            // Nightaudit
            Route::post('/precheck', [NightAuditController::class, 'precheckAutoPost']);
            Route::post('/updateroom/{id}', [NightAuditController::class, 'updateRoomStatusDayendClosed']);
            Route::post('/autopost', [NightAuditController::class, 'autoPost']);

            Route::post('/getcount/{id}', [HelperController::class, 'postRoomStatistic']);
            Route::post('/getcount2/{id}', [HelperController::class, 'getRoomAvailability2']);

            //--------------------DASHBOARD---------------------------------------------
            Route::post('/dashboard/roomstatistic2', [DashboardController::class, 'roomStatistic2']);
            Route::post('/dashboard/expected-arrival-departure', [DashboardController::class, 'expectedArrivalDeparture']);
            Route::post('/dashboard/roomstatistic', [DashboardController::class, 'roomStatistic']);
            Route::post('/dashboard/room-sold', [DashboardController::class, 'roomSold']);
            Route::post('/dashboard/room-status', [DashboardController::class, 'roomStatus']);

            //--------------------AUDIT DATE---------------------------------------------
            Route::resource('/auditdate', AuditDateController::class);

            //--------------------REPORT-------------------------------------------------
            Route::get('report/reportlistdata', [ReportController::class, 'getReportListData']);
            Route::get('report/reporttemplate', [ReportController::class, 'getReportTemplate']);
            Route::get('report/reportdatalookupfilter1', [ReportController::class, 'ReportDataLookUpFilter1']);
            Route::get('report/processreporttemplate', [ReportController::class, 'processReportTemplate']);
            Route::get('report/email', [PdfController::class, 'generatePdf']);
            //--------------------Report Template Editor--------------------------------------------------
            Route::get('report/editreporteditor', [ReportController::class, 'editReportEditor']);
            Route::post('report/inserttemplatereport', [ReportController::class, 'insertTemplateReport']);
            Route::post('report/updatetemplatereport', [ReportController::class, 'updateTemplateReport']);
            Route::post('report/updatetemplatedefaultreport', [ReportController::class, 'updateTemplateDefaultReport']);
            Route::post('report/deletetemplatereport', [ReportController::class, 'deleteTemplateReport']);
            Route::get('report/istemplatesystemdefault', [ReportController::class, 'isTemplateSystemDefault']);
            Route::get('report/setasdefaulttemplate', [ReportController::class, 'setAsDefaultTemplate']);
            Route::get('report/setassystemdefaulttemplate', [ReportController::class, 'setAsSystemDefaultTemplate']);

            //--------------------Tracking-------------------------------------------------
            Route::post('/tracking/datagrid', [TrackingDataController::class, 'dataAgGrid']);

            //--------------------Reservation------------------------------------------------
            Route::post('/reservation/cancel', [ReservationController::class, 'cancel']);
            Route::put('/reservation/checkin', [ReservationController::class, 'checkIn']);
            Route::get('/reservation/status/{id}', [ReservationController::class, 'reservationStatus']);
            Route::get('/reservation/form/datalookup', [ReservationController::class, 'dataLookUp']);
            Route::get('/reservation/form/availableroom', [ReservationController::class, 'availableRoom']);
            Route::get('/reservation/form/guestprofile', [ReservationController::class, 'guestProfile']);
            Route::get('/reservation/form/guestprofiledetail', [ReservationController::class, 'guestProfileDetail']);
            Route::get('/reservation/form/roomrate', [ReservationController::class, 'roomRate']);
            Route::get('/reservation/form/dailyrate', [ReservationController::class, 'dailyRate']);
            Route::get('/reservation/form/citystate', [ReservationController::class, 'cityState']);
            Route::get('/reservation/form/charge', [ReservationController::class, 'creditCardCharge']);
            Route::post('/reservation/form/roomnumber', [ReservationController::class, 'roomNumber']);
            Route::post('/reservation/form/reservationgroup', [ReservationController::class, 'reservationGroupList']);
            Route::post('/reservation/scheduledrate/delete', [ReservationScheduleRate::class, 'delete']);
            Route::put('/reservation/lock', [ReservationController::class, 'lockReservation']);
            Route::put('/reservation/autoassign', [ReservationController::class, 'autoAssign']);
            // GUEST DEPOSIT
            Route::get('/reservation/guestdeposit/form/lookup', [ReservationController::class, 'dataLookupDeposit']);
            Route::get('/reservation/guestdeposit/update/subdepartment/{id}', [GuestDepositController::class, 'editSubDepartment']);
            Route::get('/reservation/guestdeposit/lookup/subdepartment/{id}', [GuestDepositController::class, 'dataLookupSubDepartment']);
            Route::get('/reservation/guestdeposit/update/remark/{id}', [GuestDepositController::class, 'editRemark']);
            Route::get('/reservation/guestdeposit/update/documentnumber/{id}', [GuestDepositController::class, 'editDocumentNumber']);
            Route::get('/reservation/guestdeposit/form/lookup/transfer/{id}', [ReservationController::class, 'dataLookupTransfer']);
            Route::get('/reservation/guestdeposit/form/exchrate', [ReservationController::class, 'exchangeRate']);
            Route::get('/reservation/guestdeposit/form/account', [ReservationController::class, 'account']);
            Route::get('/reservation/guestdeposit/balance', [GuestDepositController::class, 'balance']);
            Route::post('/reservation/guestdeposit/update/subdepartment', [GuestDepositController::class, 'updateSubDepartment']);
            Route::post('/reservation/guestdeposit/update/remark', [GuestDepositController::class, 'updateRemark']);
            Route::post('/reservation/guestdeposit/update/documentnumber', [GuestDepositController::class, 'updateDocumentNumber']);
            Route::post('/reservation/guestdeposit/transfer', [GuestDepositController::class, 'transferDeposit']);
            Route::post('/reservation/guestdeposit/cancel', [GuestDepositController::class, 'cancelDeposit']);
            Route::post('/reservation/guestdeposit/void', [GuestDepositController::class, 'void']);
            Route::post('/reservation/guestdeposit/correction', [GuestDepositController::class, 'correction']);
            Route::post('/reservation/guestdeposit/correction/amountbefore', [GuestDepositController::class, 'getGuestDepositTotalAmount']);
            Route::get('/reservation/guestdeposit/total/{id}/{query}', [GuestDepositController::class, 'totalDeposit']);
            // EXTRA CHARGE
            Route::get('/reservation/extracharge/lookup', [ReservationExtraChargeController::class, 'Lookup']);
            Route::post('/reservation/extracharge/package', [ReservationExtraChargeController::class, 'insertExtraChargePackage']);
            Route::post('/reservation/extracharge/delete', [ReservationExtraChargeController::class, 'delete']);
            Route::post('/reservation/waitlist/set', [ReservationController::class, 'setWaitList']);
            Route::post('/reservation/waitlist/unset', [ReservationController::class, 'unsetWaitList']);
            Route::post('/reservation/guestgroup/reservation', [ReservationController::class, 'insertReservationGroup']);
            Route::post('/reservation/availability', [ReservationController::class, 'availability']);
            Route::post('/reservation/roomavailability', [ReservationController::class, 'RoomavailabilityForm']);
            Route::post('/reservation/roomavailability/lookup', [ReservationController::class, 'RoomavailabilityFormLookUp']);
            Route::post('/reservation/loguserupdatereservation', [ReservationController::class, 'inserLogUserUpdateReservation']);

            //extra charge breakdown
            Route::post('/reservation/extracharge/breakdown/insert', [ReservationExtraChargeController::class, 'insertBreakdown']);
            Route::post('/reservation/extracharge/breakdown/update', [ReservationExtraChargeController::class, 'updateBreakdown']);
            Route::post('/reservation/extracharge/breakdown/sub-group-account', [ReservationExtraChargeController::class, 'subGroupAccount']);
            Route::post('/reservation/extracharge/breakdown/delete', [ReservationExtraChargeController::class, 'deleteBreakdown']);
            Route::get('/reservation/extracharge/breakdown/list/{id}', [ReservationExtraChargeController::class, 'getBreakdownList']);
            Route::get('/reservation/extracharge/breakdown/edit/{id}', [ReservationExtraChargeController::class, 'editBreakdown']);
            // resource
            Route::post('/reservation/guestgroup/delete', [GuestGroupController::class, 'delete']);
            Route::resource('/reservation/guestgroup', GuestGroupController::class);
            Route::resource('/reservation/guestdeposit', GuestDepositController::class);
            Route::resource('/reservation/extracharge', ReservationExtraChargeController::class);
            Route::resource('/reservation/scheduledrate', ReservationScheduledRateController::class);
            Route::resource('/reservation', ReservationController::class);
            //--------------------Guest In House------------------------------------------------
            Route::post('/guestinhouse/scheduledrate/delete', [GuestScheduledRateController::class, 'delete']);
            Route::post('/guestinhouse/posting/autoroomcharge', [GuestInHouseController::class, 'postingRoomCharge']);
            Route::post('/guestinhouse/compliment', [GuestInHouseController::class, 'complimentHu']);
            Route::post('/guestinhouse/other/moveroom', [GuestInHouseController::class, 'moveRoom']);
            Route::post('/guestinhouse/other/switchroom', [GuestInHouseController::class, 'switchRoom']);
            Route::post('/guestinhouse/other/list/switchroom', [GuestInHouseController::class, 'listSwitchRoom']);
            Route::post('/guestinhouse/other/lock', [GuestInHouseController::class, 'lockFolio']);
            Route::post('/guestinhouse/other/incognito', [GuestInHouseController::class, 'setIncognito']);
            Route::post('/guestinhouse/other/cancel', [GuestInHouseController::class, 'cancelCheckIn']);
            Route::post('/guestinhouse/other/message', [GuestInHouseController::class, 'message']);
            Route::post('/guestinhouse/other/todo', [GuestInHouseController::class, 'toDo']);
            Route::post('/guestinhouse/checkout', [GuestInHouseController::class, 'checkOut']);
            Route::post('/guestinhouse/loguserupdateguestinhouse', [GuestInHouseController::class, 'logUserUpdateGuestInHouse']);
            //extra charge breakdown
            Route::get('/guestinhouse/extracharge/lookup', [GuestExtraChargeController::class, 'lookup']);
            Route::post('/guestinhouse/extracharge/delete', [GuestExtraChargeController::class, 'delete']);
            Route::post('/guestinhouse/extracharge/package', [GuestExtraChargeController::class, 'insertExtraChargePackage']);
            Route::post('/guestinhouse/extracharge/breakdown/insert', [GuestExtraChargeController::class, 'insertBreakdown']);
            Route::post('/guestinhouse/extracharge/breakdown/update', [GuestExtraChargeController::class, 'updateBreakdown']);
            Route::post('/guestinhouse/extracharge/breakdown/delete', [GuestExtraChargeController::class, 'deleteBreakdown']);
            Route::post('/guestinhouse/extracharge/breakdown/sub-group-account', [GuestExtraChargeController::class, 'subGroupAccount']);
            Route::get('/guestinhouse/extracharge/breakdown/list/{id}', [GuestExtraChargeController::class, 'getBreakdownList']);
            Route::get('/guestinhouse/extracharge/breakdown/edit/{id}', [GuestExtraChargeController::class, 'editBreakdown']);
            // Route::post('/guestinhouse/autopost', [GuestInHouseController::class, 'checkOut']);
            Route::resource('/guestinhouse/extracharge', GuestExtraChargeController::class);
            Route::resource('/guestinhouse/scheduledrate', GuestScheduledRateController::class);
            Route::resource('/guestinhouse', GuestInHouseController::class);

            //--------------------Transaction------------------------------------------------
            Route::get('/transaction/form/lookup', [TransactionController::class, 'lookup']);
            Route::get('/transaction/form/exchrate', [TransactionController::class, 'exchRate']);
            Route::get('/transaction/form/account', [TransactionController::class, 'account']);
            Route::get('/transaction/form/foliotype', [TransactionController::class, 'folioType']);
            Route::get('/transaction/transfer/list/routing', [TransactionController::class, 'listRouting']);
            Route::get('/transaction/transfer/list/return', [TransactionController::class, 'listReturnTransfer']);
            Route::get('/transaction/transfer/list/folio', [TransactionController::class, 'listFolio']);
            Route::get('/transaction/balance', [TransactionController::class, 'balance']);
            Route::get('/transaction/foliotype', [TransactionController::class, 'getFolioType']);
            Route::get('/transaction/lookup/subdepartment/{id}', [TransactionController::class, 'dataLookupSubDepartment']);
            Route::get('/transaction/lookup/company/{id}', [TransactionController::class, 'dataLookupCompany']);
            Route::get('/transaction/update/subdepartment/{id}', [TransactionController::class, 'editSubDepartment']);
            Route::get('/transaction/update/remark/{id}', [TransactionController::class, 'editRemark']);
            Route::get('/transaction/update/documentnumber/{id}', [TransactionController::class, 'editDocumentNumber']);
            Route::get('/transaction/update/directbill/{id}', [TransactionController::class, 'editDirectBill']);
            //properties
            Route::get('/transaction/properties/list1/{idlog}', [TransactionController::class, 'properties1']);
            Route::get('/transaction/properties/list2/{idlog}', [TransactionController::class, 'properties2']);
            Route::get('/transaction/properties/list3/{idlog}', [TransactionController::class, 'properties3']);
            Route::get('/transaction/package/list', [TransactionController::class, 'getPackageList']);
            Route::post('/transaction/transfer/routing/remove', [TransactionController::class, 'removeRouting']);
            Route::post('/transaction/transfer/transaction', [TransactionController::class, 'transferTransaction']);
            Route::post('/transaction/transfer/balance', [TransactionController::class, 'transferBalance']);
            Route::post('/transaction/transfer/routing', [TransactionController::class, 'automaticRouting']);
            Route::post('/transaction/transfer/return', [TransactionController::class, 'returnTransfer']);
            Route::post('/transaction/correction/amountbefore', [TransactionController::class, 'getSubFolioTotalAmount']);
            Route::post('/transaction/correction', [TransactionController::class, 'correction']);
            Route::get('/transaction/advanced-correction/{id}', [TransactionController::class, 'getAdvancedCorrectionBreakdown']);

            Route::post('/transaction/advanced-correction', [TransactionController::class, 'advancedCorrection']);
            Route::post('/transaction/void', [TransactionController::class, 'void']);
            Route::post('/transaction/charge', [TransactionController::class, 'charge']);
            Route::post('/transaction/payment', [TransactionController::class, 'payment']);
            Route::post('/transaction/move', [TransactionController::class, 'moveSubFolio']);
            Route::post('/transaction/update/subdepartment', [TransactionController::class, 'updateSubDepartment']);
            Route::post('/transaction/update/remark', [TransactionController::class, 'updateRemark']);
            Route::post('/transaction/update/documentnumber', [TransactionController::class, 'updateDocumentNumber']);
            Route::post('/transaction/update/directbill', [TransactionController::class, 'updateDirectBill']);
            Route::resource('/transaction', TransactionController::class);
            //package
            Route::post('/transaction/package/package', [TransactionController::class, 'insertPackage']);
            Route::post('/transaction/package/package-lookup', [TransactionController::class, 'packageLookup']);
            Route::get('/transaction/package/package-breakdown/{id}', [TransactionController::class, 'packageBreakdown']);

            //--------------------Lost And Found------------------------------------------------
            Route::post('/lost-and-found/active', [LostAndFoundController::class, 'updateActive']);
            Route::post('/lost-and-found/delete', [LostAndFoundController::class, 'delete']);
            Route::resource('/lost-and-found', LostAndFoundController::class);

            //--------------------Cashier Report------------------------------------------------
            Route::resource('/cashier-report', CashierReportController::class);
            Route::post('/cashier-report/close-shift', [CashierReportController::class, 'closeShift']);

            //--------------------Night Audit------------------------------------------------
            Route::post('/nightaudit/autopost/precheck', [NightAuditController::class, 'precheckAutoPost']);
            Route::post('/nightaudit/autopost/post', [NightAuditController::class, 'autoPost']);
            Route::post('/nightaudit/dayend/precheck/critical', [NightAuditController::class, 'criticalError']);
            Route::post('/nightaudit/dayend/precheck/warning', [NightAuditController::class, 'warningError']);
            Route::post('/nightaudit/dayend/audit', [NightAuditController::class, 'processDayEndClosed']);
            Route::get('/nightaudit/dayend/lastdayend', [NightAuditController::class, 'getLastDayendClose']);

            //--------------------Folio History------------------------------------------------
            Route::post('/foliohistory/cancelcheckout', [FolioHistoryController::class, 'cancelCheckOut']);
            Route::resource('/foliohistory', FolioHistoryController::class);

            //--------------------FOLIO--------------------------------------------------
            Route::get('/folio/status/{id}', [FolioController::class,'folioStatus']);
            //--------------------Desk Folio------------------------------------------------
            Route::resource('/deskfolio', DeskFolioController::class);

            //--------------------Master Folio------------------------------------------------
            Route::post('/masterfolio/mastergroupexist', [MasterFolioController::class, 'isMasterFolioExist']);
            Route::post('/masterfolio/mastergroup/getmaster', [MasterFolioController::class, 'getMasterFolioGroup']);
            Route::post('/masterfolio/mastergroup', [MasterFolioController::class, 'createMasterFolioGroup']);
            Route::resource('/masterfolio', MasterFolioController::class);

            //---------------------Sub Department-----------------------------------------//
            Route::resource('/subdepartment', SubDepartmentController::class);

            //--------------------Housekeeping------------------------------------------------
            Route::get('/housekeeping/table/datagrid', [HousekeepingController::class, 'dataAgGrid']);
            Route::get('/housekeeping/form/datalookup', [HousekeepingController::class, 'dataLookUp']);
            Route::get('/housekeeping/form/filterlookup', [HousekeepingController::class, 'filterLookup']);
            Route::post('/housekeeping/delete', [HousekeepingController::class, 'delete']);
            Route::post('/housekeeping/roomstatus', [HousekeepingController::class, 'roomStatus']);
            Route::get('/housekeeping/report/checklist', [HousekeepingReportController::class, 'CheckList']);
            Route::resource('/housekeeping', HousekeepingController::class);
            //--------------------Special Access--------------------------------------
            // Route::post('/special-access/check', 'General\SpecialAccessController@checkSpecialAccess']);

            //--------------------Marketing--------------------------------------
            Route::post('/phonebook/datalookup', [PhoneBookController::class, 'dataLookup']);
            Route::post('/phonebook/delete', [PhoneBookController::class, 'delete']);
            Route::resource('/phonebook', PhoneBookController::class);

        //--------------------Back Office--------------------------------------
            // AP Refund Deposit
            Route::post('/ap-refund-deposit/lookup/transaction', [APRefundDepositController::class, 'transactionIDList']);
            Route::post('/ap-refund-deposit/payment/index', [APRefundDepositController::class, 'paymentDetail']);
            Route::post('/ap-refund-deposit/payment/delete', [APRefundDepositController::class, 'deletePayment']);
            Route::post('/ap-refund-deposit/datalookup', [APRefundDepositController::class, 'dataLookup']);
            Route::resource('/ap-refund-deposit', APRefundDepositController::class);

            // AP Commission and Other
            Route::post('/ap-commission/lookup/transaction', [APCommissionAndOther::class, 'transactionIDList']);
            Route::post('/ap-commission/payment/index', [APCommissionAndOther::class, 'paymentDetail']);
            Route::post('/ap-commission/payment/delete', [APCommissionAndOther::class, 'deletePayment']);
            Route::post('/ap-commission/datalookup', [APCommissionAndOther::class, 'dataLookup']);
            Route::resource('/ap-commission', APCommissionAndOther::class);

            // Receipt
            Route::get('/receipt/number', [ReceiptController::class, 'receiptNumber']);
            Route::post('/receipt/delete', [ReceiptController::class, 'delete']);
            Route::resource('/receipt', ReceiptController::class);

            // Income Budget
            Route::post('/income-budget/datalookup', [IncomeBudgetController::class, 'dataLookup']);
            Route::post('/income-budget/delete', [IncomeBudgetController::class, 'delete']);
            Route::resource('/income-budget', IncomeBudgetController::class);

            // Budget Statistic
            Route::post('/budget-statistic/datalookup', [BudgetStatisticController::class, 'dataLookup']);
            Route::post('/budget-statistic/delete', [BudgetStatisticController::class, 'delete']);
            Route::resource('/budget-statistic', BudgetStatisticController::class);

        //--------------------AR City Ledger--------------------------------------
            // Payment
            Route::get('/ar-city-ledger/payment/index', [ARCityLedgerController::class, 'getInvoicePayment']);
            Route::get('/ar-city-ledger/payment/datalookup', [ARCityLedgerController::class, 'dataLookupPayment']);
            Route::post('/ar-city-ledger/payment', [ARCityLedgerController::class, 'insertPayment']);
            Route::post('/ar-city-ledger/payment/delete', [ARCityLedgerController::class, 'deleteInvoicePayment']);

            Route::get('/ar-city-ledger/invoice', [ARCityLedgerController::class, 'indexInvoice']);
            Route::post('/ar-city-ledger/invoice/detail', [ARCityLedgerController::class, 'getInvoiceDetail']);
            Route::post('/ar-city-ledger/direct-bill/edit', [ARCityLedgerController::class, 'editDirectBill']);
            Route::post('/ar-city-ledger/direct-bill/update', [ARCityLedgerController::class, 'updateDirectBill']);
            Route::post('/ar-city-ledger/folio', [ARCityLedgerController::class, 'getFolio']);
            Route::post('/ar-city-ledger/filter/company-type', [ARCityLedgerController::class, 'getCompanyType']);
            Route::post('/ar-city-ledger/datalookup', [ARCityLedgerController::class, 'dataLookup']);
            Route::post('/ar-city-ledger/delete', [ARCityLedgerController::class, 'delete']);
            Route::resource('/ar-city-ledger', ARCityLedgerController::class);

            //--------------------Bank Transaction------------------------------------------------
            Route::post('/bank-transaction/lookup/account', [BankTransactionController::class, 'lookupBankAccount']);
            Route::post('/bank-transaction/lookup/transaction', [BankTransactionController::class, 'lookupTransaction']);
            Route::post('/bank-transaction/reconciliation/detail', [BankTransactionController::class, 'reconciliationDetail']);
            Route::post('/bank-transaction/reconciliation/delete', [BankTransactionController::class, 'deleteReconciliation']);
            Route::get('/bank-transaction/reconciliation', [BankTransactionController::class, 'indexReconciliation']);
            Route::resource('/bank-transaction', BankTransactionController::class);


            //--------------------User------------------------------------------------
            Route::get('/special-access/check', [UserController::class, 'userList']);
            Route::get('/usersetting/user', [UserController::class, 'userList']);
            Route::get('/usersetting/lookup/usergroup', [UserController::class, 'userGroup']);
            Route::get('/usersetting/user/{id}/edit', [UserController::class, 'edit']);
            Route::put('/usersetting/user', [UserController::class, 'update']);
            Route::post('/usersetting/user/delete', [UserController::class, 'delete']);
            Route::post('/usersetting/user/change-password', [UserController::class, 'changePassword']);
            Route::post('/usersetting/user', [UserController::class, 'store']);
            //--------------------User Group------------------------------------------------
            Route::get('/usersetting/usergroup/getreportlist', [UserGroupController::class, 'getReportList']);
            Route::post('/usersetting/usergroup/delete', [UserGroupController::class, 'delete']);
            Route::get('/usersetting/usergroup/table/datagrid', [UserGroupController::class, 'dataAgGrid']);
            Route::resource('/usersetting/usergroup', UserGroupController::class);
            //--------------------User group access
            Route::post('usersetting/get-other-access', [UserGroupController::class, 'getOtherAccess']);
            Route::post('usersetting/get-preview-report-access', [UserGroupController::class, 'getPreviewReportAccess']);
            Route::post('usersetting/get-folio-access', [UserGroupController::class, 'getFolioAccess']);
            Route::post('usersetting/get-deposit-access', [UserGroupController::class, 'getDepositAccess']);
            Route::get('usersetting/getmenuaccessusergroup', [UserGroupController::class, 'getMenuAccess']);
            Route::get('usersetting/usergroup', [UserGroupController::class, 'getMenuAccess']);

            //--------------------Room Type------------------------------------------------
            Route::post('/room_type/delete', [RoomTypeController::class, 'delete']);
            Route::get('/room_type/table/datagrid', [RoomTypeController::class, 'dataAgGrid']);
            Route::resource('/room_type', RoomTypeController::class);
            //--------------------Room-----------------------------------------------------
            Route::post('/room/delete', [RoomController::class, 'delete']);
            Route::get('/room/table/datagrid', [RoomController::class, 'dataAgGrid']);
            Route::get('/room/form/datalookup/', [RoomController::class, 'dataLookUp']);
            Route::resource('/room', RoomController::class);
            //--------------------Package-----------------------------------------------------
            Route::post('/package/delete', [PackageController::class, 'delete']);
            Route::get('/package/table/datagrid', [PackageController::class, 'dataAgGrid']);
            Route::get('/package/form/datalookup/', [PackageController::class, 'dataLookUp']);
            Route::get('/package/form/account/', [PackageController::class, 'account']);
            Route::resource('/package', PackageController::class);
            //--------------------Package Breakdown-----------------------------------------------------
            Route::post('/packagebreakdown/delete', [PackageBreakdownController::class, 'delete']);
            Route::get('/packagebreakdown/table/datagrid/{id}', [PackageBreakdownController::class, 'dataAgGrid']);
            Route::get('/packagebreakdown/form/account', [PackageBreakdownController::class, 'account']);
            Route::resource('/packagebreakdown', PackageBreakdownController::class);

            //--------------------Package Business Source-----------------------------------------------------
            Route::post('/business/delete', [PackageBusinessSourceController::class, 'delete']);
            Route::get('/business/table/datagrid/{business}', [PackageBreakdownController::class, 'dataAgGrid']);
            Route::get('/business/form/datalookup', [PackageBreakdownController::class, 'dataLookUp']);
            Route::resource('/business', PackageBreakdownController::class);

            //--------------------RoomRate-----------------------------------------------------
            Route::post('/roomrate/delete', [RoomRateController::class, 'delete']);
            Route::get('/roomrate/table/datagrid', [RoomRateController::class, 'dataAgGrid']);
            Route::get('/roomrate/form/datalookup', [RoomRateController::class, 'dataLookUp']);
            Route::get('/roomrate/form/account', [RoomRateController::class, 'account']);
            Route::get('/roomrate/dynamicrate', [RoomRateController::class, 'dynamicRate']);
            Route::get('/roomrate/lastdeal', [RoomRateController::class, 'getRoomRateLastDeal']);
            Route::post('/roomrate/dynamicrate', [RoomRateController::class, 'insertRoomRateBaseSession']);
            Route::post('/roomrate/lastdeal', [RoomRateController::class, 'insertRoomRateLastDeal']);
            Route::resource('/roomrate', RoomRateController::class);

            //--------------------RoomRate Breakdown-----------------------------------------------------
            Route::post('/roomratebreakdown/delete', [RoomRateBreakdownController::class, 'delete']);
            Route::get('/roomratebreakdown/table/datagrid/{id}', [RoomRateBreakdownController::class, 'dataAgGrid']);
            Route::get('/roomratebreakdown/form/account', [RoomRateBreakdownController::class, 'account']);
            Route::resource('/roomratebreakdown', RoomRateBreakdownController::class);

            //--------------------RoomRate Business Source-----------------------------------------------------
            Route::post('/roomratebusiness/delete', [RoomRateBusinessSourceController::class, 'delete']);
            Route::get('/roomratebusiness/table/datagrid/{business}', [RoomRateBusinessSourceController::class, 'dataAgGrid']);
            Route::get('/roomratebusiness/form/datalookup', [RoomRateBusinessSourceController::class, 'dataLookUp']);
            Route::resource('/roomratebusiness', RoomRateBusinessSourceController::class);
            //--------------------RoomRate Currency------------------------------------------------------------
            Route::post('/roomratecurrency/delete', [RoomRateCurrencyController::class, 'delete']);
            Route::get('/roomratecurrency/table/datagrid/{business}', [RoomRateCurrencyController::class, 'dataAgGrid']);
            Route::get('/roomratecurrency/form/datalookup/{id}', [RoomRateCurrencyController::class, 'dataLookUp']);
            Route::resource('/roomratecurrency', RoomRateCurrencyController::class);
            //--------------------Bed Type-----------------------------------------------------
            Route::post('/bedtype/delete', [BedTypeController::class, 'delete']);
            Route::get('/bedtype/table/datagrid', [BedTypeController::class, 'dataAgGrid']);
            Route::resource('/bedtype', BedTypeController::class);
            //--------------------Room View-----------------------------------------------------
            Route::post('/roomview/delete', [RoomViewController::class, 'delete']);
            Route::resource('/roomview', RoomViewController::class);
            Route::get('/roomview/table/datagrid', [RoomViewController::class, 'dataAgGrid']);
            //--------------------Room Rate Category-----------------------------------------------------
            Route::post('/roomrate-category/delete', [RoomRateCategoryController::class, 'delete']);
            Route::get('/roomrate-category/table/datagrid', [RoomRateCategoryController::class, 'dataAgGrid']);
            Route::resource('/roomrate-category', RoomRateCategoryController::class);
            //--------------------Room Rate Sub Category-----------------------------------------------------
            Route::post('/roomrate-subcategory/delete', [RoomRateSubCategoryController::class, 'delete']);
            Route::get('/roomrate-subcategory/table/datagrid', [RoomRateSubCategoryController::class, 'dataAgGrid']);
            Route::get('/roomrate-subcategory/form/datalookup', [RoomRateSubCategoryController::class, 'dataLookUp']);
            Route::resource('/roomrate-subcategory', RoomRateSubCategoryController::class);
            //--------------------Room Aminities-----------------------------------------------------
            Route::post('/room_amenities/delete', [RoomAmenitiesController::class, 'delete']);
            Route::get('/room_amenities/table/datagrid', [RoomAmenitiesController::class, 'dataAgGrid']);
            Route::get('/room_amenities/form/datalookup', [RoomAmenitiesController::class, 'dataLookUp']);
            Route::resource('/room_amenities', RoomAmenitiesController::class);
            //--------------------Room Unavailable Reason-----------------------------------------------------
            Route::post('/room-unavailable-reason/delete', [RoomUnavailableReasonController::class, 'delete']);
            Route::get('/room-unavailable-reason/table/datagrid', [RoomUnavailableReasonController::class, 'dataAgGrid']);
            Route::resource('/room-unavailable-reason', RoomUnavailableReasonController::class);
            //--------------------Room Boy-----------------------------------------------------
            Route::post('/roomboy/delete', [RoomBoyController::class, 'delete']);
            Route::get('/roomboy/table/datagrid', [RoomBoyController::class, 'dataAgGrid']);
            Route::resource('/roomboy', RoomBoyController::class);
            //--------------------Guest Title-----------------------------------------------------
            // Route::post('/title/delete', 'Configurations\GuestTitleController@delete']);
            // Route::get('/title/table/datagrid', 'Configurations\GuestTitleController@dataAgGrid']);
            // Route::resource('/title', 'Configurations\GuestTitleController']);
            // //--------------------Guest Type-----------------------------------------------------
            // Route::post('/guest_type/delete', 'Configurations\GuestTypeController@delete']);
            // Route::get('/guest_type/table/datagrid', 'Configurations\GuestTypeController@dataAgGrid']);
            // Route::resource('/guest_type', 'Configurations\GuestTypeController']);
            // //--------------------Country-----------------------------------------------------
            // Route::post('/country/delete', 'Configurations\CountryController@delete']);
            // Route::get('/country/table/datagrid', 'Configurations\CountryController@dataAgGrid']);
            // Route::get('/country/form/datalookup', 'Configurations\CountryController@dataLookUp']);
            // Route::resource('/country', 'Configurations\CountryController']);
            // //--------------------State-----------------------------------------------------
            // Route::post('/state/delete', 'Configurations\StateController@delete']);
            // Route::get('/state/table/datagrid', 'Configurations\StateController@dataAgGrid']);
            // Route::get('/state/form/datalookup', 'Configurations\StateController@dataLookUp']);
            // Route::resource('/state', 'Configurations\StateController']);
            // //--------------------Nationality-----------------------------------------------------
            // Route::post('/nationality/delete', 'Configurations\NationalityController@delete']);
            // Route::get('/nationality/table/datagrid', 'Configurations\NationalityController@dataAgGrid']);
            // Route::get('/nationality/form/datalookup', 'Configurations\NationalityController@dataLookUp']);
            // Route::resource('/nationality', 'Configurations\NationalityController']);
            // //--------------------language-----------------------------------------------------
            // Route::post('/language/delete', 'Configurations\LanguageController@delete']);
            // Route::get('/language/table/datagrid', 'Configurations\LanguageController@dataAgGrid']);
            // Route::get('/language/form/datalookup', 'Configurations\LanguageController@dataLookUp']);
            // Route::resource('/language', 'Configurations\LanguageController']);
            // //--------------------idcardtype-----------------------------------------------------
            // Route::post('/idcardtype/delete', 'Configurations\IDCardTypeController@delete']);
            // Route::get('/idcardtype/table/datagrid', 'Configurations\IDCardTypeController@dataAgGrid']);
            // Route::get('/idcardtype/form/datalookup', 'Configurations\IDCardTypeController@dataLookUp']);
            // Route::resource('/idcardtype', 'Configurations\IDCardTypeController']);
            // //--------------------payment_type-----------------------------------------------------
            // Route::post('/payment_type/delete', 'Configurations\PaymentTypeController@delete']);
            // Route::get('/payment_type/table/datagrid', 'Configurations\PaymentTypeController@dataAgGrid']);
            // Route::get('/payment_type/form/datalookup', 'Configurations\PaymentTypeController@dataLookUp']);
            // Route::resource('/payment_type', 'Configurations\PaymentTypeController']);
            // //--------------------market_category-----------------------------------------------------
            // Route::post('/market_category/delete', 'Configurations\MarketCategoryController@delete']);
            // Route::get('/market_category/table/datagrid', 'Configurations\MarketCategoryController@dataAgGrid']);
            // Route::get('/market_category/form/datalookup', 'Configurations\MarketCategoryController@dataLookUp']);
            // Route::resource('/market_category', 'Configurations\MarketCategoryController']);
            // //--------------------market-----------------------------------------------------
            // Route::post('/market/delete', 'Configurations\MarketController@delete']);
            // Route::get('/market/table/datagrid', 'Configurations\MarketController@dataAgGrid']);
            // Route::get('/market/form/datalookup', 'Configurations\MarketController@dataLookUp']);
            // Route::resource('/market', 'Configurations\MarketController']);
            // //--------------------marketing-----------------------------------------------------
            // Route::post('/marketing/delete', 'Configurations\MarketingController@delete']);
            // Route::get('/marketing/table/datagrid', 'Configurations\MarketingController@dataAgGrid']);
            // Route::get('/marketing/form/datalookup', 'Configurations\MarketingController@dataLookUp']);
            // Route::resource('/marketing', 'Configurations\MarketingController']);
            // //--------------------card_bank-----------------------------------------------------
            // Route::post('/card_bank/delete', 'Configurations\CardBankController@delete']);
            // Route::get('/card_bank/table/datagrid', 'Configurations\CardBankController@dataAgGrid']);
            // Route::get('/card_bank/form/datalookup', 'Configurations\CardBankController@dataLookUp']);
            // Route::resource('/card_bank', 'Configurations\CardBankController']);
            // //--------------------card_type-----------------------------------------------------
            // Route::post('/card_type/delete', 'Configurations\CardTypeController@delete']);
            // Route::get('/card_type/table/datagrid', 'Configurations\CardTypeController@dataAgGrid']);
            // Route::get('/card_type/form/datalookup', 'Configurations\CardTypeController@dataLookUp']);
            // Route::resource('/card_type', 'Configurations\CardTypeController']);
            // //--------------------loan_item-----------------------------------------------------
            // Route::post('/loan_item/delete', 'Configurations\LoanItemController@delete']);
            // Route::get('/loan_item/table/datagrid', 'Configurations\LoanItemController@dataAgGrid']);
            // Route::get('/loan_item/form/datalookup', 'Configurations\LoanItemController@dataLookUp']);
            // Route::resource('/loan_item', 'Configurations\LoanItemController']);
            // //--------------------credit_card_charge-----------------------------------------------------
            // Route::post('/credit_card_charge/delete', 'Configurations\CreditCardChargeController@delete']);
            // Route::get('/credit_card_charge/table/datagrid', 'Configurations\CreditCardChargeController@dataAgGrid']);
            // Route::get('/credit_card_charge/form/datalookup', 'Configurations\CreditCardChargeController@dataLookUp']);
            // Route::resource('/credit_card_charge', 'Configurations\CreditCardChargeController']);
            // //--------------------phone_book_type-----------------------------------------------------
            // Route::post('/phone_book_type/delete', 'Configurations\PhoneBookTypeController@delete']);
            // Route::get('/phone_book_type/table/datagrid', 'Configurations\PhoneBookTypeController@dataAgGrid']);
            // Route::get('/phone_book_type/form/datalookup', 'Configurations\PhoneBookTypeController@dataLookUp']);
            // Route::resource('/phone_book_type', 'Configurations\PhoneBookTypeController']);
            // //--------------------member_point_type-----------------------------------------------------
            // Route::post('/member_point_type/delete', 'Configurations\MemberPointTypeController@delete']);
            // Route::get('/member_point_type/table/datagrid', 'Configurations\MemberPointTypeController@dataAgGrid']);
            // Route::get('/member_point_type/form/datalookup', 'Configurations\MemberPointTypeController@dataLookUp']);
            // Route::resource('/member_point_type', 'Configurations\MemberPointTypeController']);
            // //--------------------member_outlet_discount-----------------------------------------------------
            // Route::post('/member_outlet_discount/delete', 'Configurations\MemberOutletDiscountController@delete']);
            // Route::get('/member_outlet_discount/table/datagrid', 'Configurations\MemberOutletDiscountController@dataAgGrid']);
            // Route::get('/member_outlet_discount/form/datalookup', 'Configurations\MemberOutletDiscountController@dataLookUp']);
            // Route::resource('/member_outlet_discount', 'Configurations\MemberOutletDiscountController']);
            // //--------------------member-----------------------------------------------------
            // Route::post('/member/delete', 'Configurations\MemberController@delete']);
            // Route::get('/member/table/datagrid', 'Configurations\MemberController@dataAgGrid']);
            // Route::get('/member/form/datalookup', 'Configurations\MemberController@dataLookUp']);
            // Route::resource('/member', 'Configurations\MemberController']);
            // //--------------------voucher_reason-----------------------------------------------------
            // Route::post('/voucher_reason/delete', 'Configurations\VoucherReasonController@delete']);
            // Route::get('/voucher_reason/table/datagrid', 'Configurations\VoucherReasonController@dataAgGrid']);
            // Route::get('/voucher_reason/form/datalookup', 'Configurations\VoucherReasonController@dataLookUp']);
            // Route::resource('/voucher_reason', 'Configurations\VoucherReasonController']);
            // //--------------------competitor_category-----------------------------------------------------
            // Route::post('/competitor_category/delete', 'Configurations\CompetitorCategoryController@delete']);
            // Route::get('/competitor_category/table/datagrid', 'Configurations\CompetitorCategoryController@dataAgGrid']);
            // Route::get('/competitor_category/form/datalookup', 'Configurations\CompetitorCategoryController@dataLookUp']);
            // Route::resource('/competitor_category', 'Configurations\CompetitorCategoryController']);
            // //--------------------competitor-----------------------------------------------------
            // Route::post('/competitor/delete', 'Configurations\CompetitorController@delete']);
            // Route::get('/competitor/table/datagrid', 'Configurations\CompetitorController@dataAgGrid']);
            // Route::get('/competitor/form/datalookup', 'Configurations\CompetitorController@dataLookUp']);
            // Route::resource('/competitor', 'Configurations\CompetitorController']);

            // //--------------------Owner-----------------------------------------------------
            // Route::post('/owner/delete', 'Configurations\OwnerController@delete']);
            // Route::resource('/owner', 'Configurations\OwnerController']);
            // Route::get('/owner/table/datagrid', 'Configurations\OwnerController@dataAgGrid']);
            // //--------------------Country------------------------------------------------
            // Route::get('/table/country', 'Configurations\CountryController@dataAgGrid']);

            // //--------------------CONFIG------------------------------------------------
            Route::get('/configuration/company-information', [ConfigurationController::class, 'getCompanyInformation']);
            Route::get('/configuration/company-information/lookup', [ConfigurationController::class, 'getCompanyInformationLookup']);
            Route::get('/configuration/reservation2', [ConfigurationController::class, 'getWalkingReservation2List']);
            Route::get('/configuration/reservation2/lookup', [ConfigurationController::class, 'getWalkingReservation2Lookup']);
            Route::get('/configuration/global-parameter', [ConfigurationController::class, 'getGlobalParameterList']);
            Route::get('/configuration/global-parameter/lookup', [ConfigurationController::class, 'getGlobalParameterLookup']);
            Route::get('/configuration/load-all-configuration', [ConfigurationController::class, 'getConfigurationList']);
            Route::post('/configuration/company-information/update', [ConfigurationController::class, 'updateCompanyInformation']);
            Route::post('/configuration/reservation2/update', [ConfigurationController::class, 'updateWalkingReservation2']);
            Route::post('/configuration/global-parameter/update', [ConfigurationController::class, 'updateGlobalParameter']);
        });

    });
    
    Route::get('/report/{any}', ReportPageController::class)->where('any', '.*');
    Route::get('/{any}', ApplicationController::class)->where('any', '.*');
});
