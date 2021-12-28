/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store.js'
import globalVariable from "@/utils/globalVariable";
// import initProgress from './utils/nprogress'

// import NProgress from 'nprogress';
const progressShowDelay = 100;
let routeResolved = false;

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '/home',
            component: () => import('./layouts/main/Main.vue'),
            meta: { requiresAuth : true },
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/dashboard/Dashboard.vue'),
                },
                    {
                        path: '/reservation/availability',
                        name: 'availability',
                        component: () => import('./views/pages/reservations/availability/Availability.vue'),
                        meta: {
                            pageTitle: 'Availability',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Availability', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.availability
                        },
                        props: {titleForm:'Availability', routeApi: 'reservation', mainTableName: 'reservation'},
                    },
                    {
                        path: '/reservation/room-availability',
                        name: 'room-availability',
                        component: () => import('./views/pages/reservations/availability/RoomAvailability.vue'),
                        meta: {
                            pageTitle: 'Room Availability',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Room Availability', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.roomAvailability
                        },
                        props: {titleForm:'Room Availability'},
                    },
                    {
                        path: '/reservation/reservation-list',
                        name: 'reservation-list',
                        component: () => import('./views/pages/reservations/Reservation.vue'),
                        meta: {
                            pageTitle: 'Reservation',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Reservation', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.reservation
                        },
                        props: {titleForm:'Reservation', routeApi: 'reservation', mainTableName: 'reservation'},
                    },
                    {
                        path: '/reservation/guest-group',
                        name: 'guest-group',
                        component: () => import('./views/pages/reservations/guest-group/GuestGroup.vue'),
                        meta: {
                            pageTitle: 'Guest Group',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Guest Group', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.guestGroup
                        },
                        props: {titleForm:'Guest Group'},
                    },
                {
                    path: '/guestinhouse',
                    name: 'guestinhouse',
                    component: () => import('./views/pages/guest-in-house/GuestInHouse'),
                    meta: {
                        pageTitle: 'Guest In House',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Guest In House', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.guestInHouse
                    },
                    props: {titleForm:'Guest In House', routeApi: 'guestinhouse', mainTableName: 'folio'},
                },
                {
                    path: '/housekeeping',
                    name: 'housekeeping',
                    component: () => import('./views/pages/housekeeping/HouseKeeping.vue'),
                    meta: {
                        pageTitle: 'Housekeeping',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Housekeeping', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.houseKeeping
                    },
                    props: {titleForm:'House Keeping', routeApi: 'housekeeping', mainTableName: 'housekeeping'},
                },
                {
                    path: '/desk-folio',
                    name: 'desk-folio',
                    component: () => import('./views/pages/desk-folio/DeskFolio.vue'),
                    meta: {
                        pageTitle: 'Desk Folio',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Desk Folio', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.deskFolio
                    },
                    props: {titleForm:'Desk Folio', routeApi: 'deskfolio', mainTableName: 'folio'},
                },
                {
                    path: '/master-folio',
                    name: 'master-folio',
                    component: () => import('./views/pages/master-folio/MasterFolio.vue'),
                    meta: {
                        pageTitle: 'Master Folio',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Master Folio', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.masterFolio
                    },
                    props: {titleForm:'Master Folio', routeApi: 'masterfolio', mainTableName: 'folio'},
                },
                {
                    path: '/folio-history',
                    name: 'folio-history',
                    component: () => import('./views/pages/folio-history/FolioHistory.vue'),
                    meta: {
                        pageTitle: 'Folio History',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Folio History', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.folioHistory
                    },
                    props: {titleForm:'Folio History', routeApi: 'foliohistory', mainTableName: 'foliohistory'},
                },
                    {
                        path: '/transaction',
                        name: 'transaction',
                        component: () => import('./views/pages/components/transaction/Transaction.vue'),
                        meta: {
                            pageTitle: 'Folio Transaction',
                            routeOrder: 100
                        },
                        props: true,
                },
                {
                    path: '/lost-and-found',
                    name: 'lost-and-found',
                    component: () => import('./views/pages/lost-and-found/LostAndFound.vue'),
                    meta: {
                        pageTitle: 'Lost and Found',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Lost and Found', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.lostAndFound
                    },
                    props: {titleForm: 'Lost and Found'},
                },
                {
                    path: '/night-audit/auto-post-transaction',
                    name: 'auto-post-transaction',
                    component: () => import('./views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue'),
                    meta: {
                        pageTitle: 'Auto Post Transaction',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Auto Post Transaction', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.autoPostTransaction
                    },
                    props: true,
                },
                {
                    path: '/night-audit/dayend-close',
                    name: 'dayend-close',
                    component: () => import('@/views/pages/night-audit/dayend-close/DayendClose.vue'),
                    meta: {
                        pageTitle: 'Dayend Close',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Dayend Close', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.dayendClose
                    },
                    props: true,
                },
                    {
                        path: '/back-office/ap/refund',
                        name: 'ap-refund',
                        component: () => import('@/views/pages/back-office/APRefundDeposit.vue'),
                        meta: {
                            pageTitle: 'AP Refund Deposit',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'AP Refund Deposit', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.apRefundDeposit
                        },
                        props: {
                            formType: globalVariable.global.formType.apRefundDeposit,
                        },
                    },
                    {
                        path: '/back-office/ap/commission-other',
                        name: 'ap-commission-other',
                        component: () => import('@/views/pages/back-office/APCommissionAndOther.vue'),
                        meta: {
                            pageTitle: 'AP Commission and Other',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'AP Commission and Other', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.apCommissionAndOther
                        },
                        props: {
                            formType: globalVariable.global.formType.apCommissionAndOther,
                        },
                    },
                    {
                        path: '/back-office/ar/city-ledger',
                        name: 'ar-city-ledger',
                        component: () => import('@/views/pages/back-office/ARCityLedger.vue'),
                        meta: {
                            pageTitle: 'AR City Ledger',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'AR City Ledger', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.arCityLedger},
                        props: true,
                    },
                    {
                        path: '/back-office/ar/city-ledger-invoice',
                        name: 'ar-city-ledger-invoice',
                        component: () => import('@/views/pages/back-office/ARCityLedgerInvoice.vue'),
                        meta: {
                            pageTitle: 'AR City Ledger Invoice',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'AR City Ledger Invoice', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.arCityLedgerInvoice
                        },
                        props: {
                            formType: globalVariable.global.formType.arCityLedgerInvoice,
                        },
                    },
                    {
                        path: '/back-office/ar/bank-transaction',
                        name: 'ar-bank-transaction',
                        component: () => import('@/views/pages/back-office/BankTransaction.vue'),
                        meta: {
                            pageTitle: 'Bank Transaction',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'Bank Transaction', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.bankTransaction
                        },
                        props: {
                            formType: globalVariable.global.formType.bankTransaction,
                        },
                    },
                    {
                        path: '/back-office/ar/bank-reconciliation',
                        name: 'ar-bank-reconciliation',
                        component: () => import('@/views/pages/back-office/BankReconciliation.vue'),
                        meta: {
                            pageTitle: 'Bank Reconciliation',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'Bank Reconciliation', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.bankReconciliation
                        },
                        props: {
                            formType: globalVariable.global.formType.bankReconciliation,
                        },
                    },
                    {
                        path: '/back-office/receipt',
                        name: 'receipt',
                        component: () => import('@/views/pages/back-office/Receipt.vue'),
                        meta: {
                            pageTitle: 'Receipt',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'Receipt', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.receipt
                        },
                        props: {
                            formType: globalVariable.global.formType.receipt,
                        },
                    },
                    {
                        path: '/back-office/budget/income',
                        name: 'income-budget',
                        component: () => import('@/views/pages/back-office/IncomeBudget.vue'),
                        meta: {
                            pageTitle: 'Income Budget',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'Income Budget', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.incomeBudget
                        },
                        props: {
                            formType: globalVariable.global.formType.incomeBudget,
                        },
                    },
                    {
                        path: '/back-office/budget/statistic',
                        name: 'budget-statistic',
                        component: () => import('@/views/pages/back-office/BudgetStatistic.vue'),
                        meta: {
                            pageTitle: 'Budget Statistic',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Back Office', active: true },
                                { title: 'Budget Statistic', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.budgetStatistic
                        },
                        props: {
                            formType: globalVariable.global.formType.budgetStatistic,
                        },
                    },
                    {
                        path: '/back-office/export-jurnal',
                        name: 'export-jurnal',
                        component: () => import('@/views/pages/UnderConstruction.vue'),
                        meta: {routeOrder: globalVariable.global.accessUserMenuOrder.exportJournal},
                        props: true,
                    },
                    {
                        path: '/back-office/report',
                        name: 'report',
                        component: () => import('@/views/pages/report/Report.vue'),
                        meta: {
                            pageTitle: 'Report',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Report', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.report,
                        },
                        props: true
                    },
                    {
                        path: '/cashier-report',
                        name: 'cashier-report',
                        component: () => import('@/views/pages/cashier-report/CashierReport.vue'),
                        meta: {
                            pageTitle: 'Cashier Report',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Report', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.cashierReport,
                        },
                        props: true,
                    },
            //USER SETTING
                    {
                        path: '/configuration/usersetting/user',
                        name: 'configuration-usersetting-user',
                        component: () => import('./views/pages/Tools/user-setting/user.vue'),
                        meta: {
                            pageTitle: 'User',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Tools', active: true },
                                { title: 'User Setting', active: true },
                                { title: 'User', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.user},
                        props: {
                            titleForm: 'Users ',
                            routeApi: 'usersetting_user',
                            mainTableName: 'users'
                        },
                    },
                    {
                        path: '/configuration/usersetting/usergroup',
                        name: 'configuration-usersetting-usergroup',
                        component: () => import('./views/pages/Tools/user-setting/UserGroup.vue'),
                        meta: {
                            pageTitle: 'User Group',
                            breadcrumb: [
                                { title: 'Home', url: '/' },
                                { title: 'Tools', active: true },
                                { title: 'User Setting', active: true },
                                { title: 'User Group', active: true },
                            ],
                            routeOrder: globalVariable.global.accessUserMenuOrder.userGroup
                        },
                        props: {titleForm: 'User Group ', routeApi: 'usersetting/usergroup', mainTableName: 'user_group'},
                },
            // MARKETING
                    //Phonebook
                {
                    path: '/marketing/phone_book',
                    name: 'phone-book',
                    component: () => import('./views/pages/marketing/PhoneBook.vue'),
                    meta: {
                        pageTitle: 'Phone Book',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Marketing', active: true },
                            { title: 'Phone Book', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.phoneBook
                    },
                    props: {titleForm: 'Phone Book '},
                },
            // CONFIGURATION
                {
                    path: '/configuration/reservation1/roomtype',
                    name: 'configuration-reservation1-roomtype',
                    component: () => import('./views/pages/Tools/configurations/reservation1/RoomType.vue'),
                    meta: {
                        pageTitle: 'Room Type',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room Type', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: {
                        titleForm: 'Room Type',
                        routeApi: 'room_type',
                        mainTableName: 'cfg_init_room_type'
                    },
                },
                {
                    path: '/configuration/reservation1/room',
                    name: 'configuration-reservation1-room',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Room.vue'),
                    meta: {
                        pageTitle: 'Room',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Room', routeApi: 'room', mainTableName: 'cfg_init_room' },
                },
                {
                    path: '/configuration/reservation1/package',
                    name: 'configuration-reservation1-package',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Package.vue'),
                    meta: {
                        pageTitle: 'Package',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Package', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Package', routeApi: 'package', mainTableName: 'cfg_init_package'
                    },
                },
                {
                    path: '/configuration/reservation1/bedtype',
                    name: 'configuration-reservation1-bedtype',
                    component: () => import('./views/pages/Tools/configurations/reservation1/BedType.vue'),
                    meta: {
                        pageTitle: 'Bed Type',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Bed Type', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Bed Type', routeApi: 'bedtype', mainTableName: 'cfg_init_bed_type'
                    },
                },
                {
                    path: '/configuration/reservation1/roomview',
                    name: 'configuration-reservation1-roomview',
                    component: () => import('./views/pages/Tools/configurations/reservation1/RoomView.vue'),
                    meta: {
                        pageTitle: 'Room View',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room View', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Room View', routeApi: 'roomview', mainTableName: 'cfg_init_room_view'
                    },
                },
                {
                    path: '/configuration/reservation1/owner',
                    name: 'configuration-reservation1-owner',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Owner.vue'),
                    meta: {
                        pageTitle: 'Owner',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Owner', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Owner', routeApi: 'owner', mainTableName: 'cfg_init_owner'
                    },
                },
                {
                    path: '/configuration/reservation1/roomrate',
                    name: 'configuration-reservation1-roomrate',
                    component: () => import('./views/pages/Tools/configurations/reservation1/RoomRate.vue'),
                    meta: {
                        pageTitle: 'Room Rate',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room Rate', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Room Rate', routeApi: 'roomrate', mainTableName: 'cfg_init_room_rate'
                    },
                },
                {
                    path: '/configuration/reservation1/dynamicrate',
                    name: 'configuration-reservation1-dynamicrate',
                    component: () => import('./views/pages/Tools/configurations/reservation1/DynamicRate.vue'),
                    meta: {
                        pageTitle: 'Dynamic Rate',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Dynamic Rate', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Dynamic Rate', routeApi: 'dynamicrate', mainTableName: 'cfg_init_room_rate_dynamic'
                    },
                },
                {
                    path: '/configuration/reservation1/lastdeal',
                    name: 'configuration-reservation1-lastdeal',
                    component: () => import('./views/pages/Tools/configurations/reservation1/LastDeal.vue'),
                    meta: {
                        pageTitle: 'Last Rate',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Last Deal', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Last Deal', routeApi: 'lastdeal', mainTableName: 'cfg_init_room_rate_last_deal'
                    },
                },
                {
                    path: '/configuration/reservation1/roomrate_subcategory',
                    name: 'configuration-reservation1-roomrate_subcategory',
                    component: () => import('./views/pages/Tools/configurations/reservation1/RoomRateSubCategory.vue'),
                    meta: {
                        pageTitle: 'Room Rate Sub Category',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room Rate Sub Category', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Room Rate Sub Category', routeApi: 'roomrate-subcategory', mainTableName: 'cfg_init_room_rate_sub_category'
                    },
                },
                {
                    path: '/configuration/reservation1/roomrate_category',
                    name: 'configuration-reservation1-roomrate_category',
                    component: () => import('./views/pages/Tools/configurations/reservation1/RoomRateCategory.vue'),
                    meta: {
                        pageTitle: 'Room Rate Category',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room Rate Category', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Room Rate Category', routeApi: 'roomrate-category', mainTableName: 'cfg_init_room_rate_category'
                    },
                },
                {
                    path: '/configuration/reservation1/room_unavailable_reason',
                    name: 'configuration-reservation1-room_unavailable_reason',
                    component: () => import('./views/pages/Tools/configurations/reservation1/RoomUnavailableReason.vue'),
                    meta: {
                        pageTitle: 'Room Unavailable Reason',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room Unavailable Reason', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Room Unavailable Reason', routeApi: 'room-unavailable-reason', mainTableName: 'cfg_init_room_unavailable_reason'
                    },
                },
                {
                    path: '/configuration/reservation1/roomboy',
                    name: 'configuration-reservation1-roomboy',
                    component: () => import('./views/pages/Tools/configurations/reservation1/RoomBoy.vue'),
                    meta: {
                        pageTitle: 'Room Boy',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room Boy', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Room Boy', routeApi: 'roomboy', mainTableName: 'cfg_init_room_boy'
                    },
                },
                {
                    path: '/configuration/reservation1/title',
                    name: 'configuration-reservation1-title',
                    component: () => import('./views/pages/Tools/configurations/reservation1/GuestTitle.vue'),
                    meta: {
                        pageTitle: 'Guest Title',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Guest Title', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Guest Title', routeApi: 'title', mainTableName: 'cfg_init_title'
                    },
                },
                {
                    path: '/configuration/reservation1/guest_type',
                    name: 'configuration-reservation1-guest_type',
                    component: () => import('./views/pages/Tools/configurations/reservation1/GuestType.vue'),
                    meta: {
                        pageTitle: 'Guest Type',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Guest Type', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Guest Type', routeApi: 'guest_type', mainTableName: 'cfg_init_guest_type'
                    },
                },
                {
                    path: '/configuration/reservation1/country',
                    name: 'configuration-reservation1-country',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Country.vue'),
                    meta: {
                        pageTitle: 'Country',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Country', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Country', routeApi: 'country', mainTableName: 'cfg_init_country'
                    },
                },
                {
                    path: '/configuration/reservation1/state',
                    name: 'configuration-reservation1-state',
                    component: () => import('./views/pages/Tools/configurations/reservation1/State.vue'),
                    meta: {
                        pageTitle: 'State',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'State', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'State', routeApi: 'state', mainTableName: 'cfg_init_state'
                    },
                },
                {
                    path: '/configuration/reservation1/nationality',
                    name: 'configuration-reservation1-nationality',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Nationality.vue'),
                    meta: {
                        pageTitle: 'Nationality',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Nationality', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Nationality', routeApi: 'nationality', mainTableName: 'cfg_init_nationality'
                    },
                },
                {
                    path: '/configuration/reservation1/language',
                    name: 'configuration-reservation1-language',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Language.vue'),
                    meta: {
                        pageTitle: 'Language',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Language', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Language', routeApi: 'language', mainTableName: 'cfg_init_language'
                    },
                },
                {
                    path: '/configuration/reservation1/idcardtype',
                    name: 'configuration-reservation1-idcardtype',
                    component: () => import('./views/pages/Tools/configurations/reservation1/IDCardType.vue'),
                    meta: {
                        pageTitle: 'ID Card Type',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'ID Card Type', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'ID Card Type', routeApi: 'idcardtype', mainTableName: 'cfg_init_id_card_type'
                    },
                },
                {
                    path: '/configuration/reservation1/payment_type',
                    name: 'configuration-reservation1-payment_type',
                    component: () => import('./views/pages/Tools/configurations/reservation1/PaymentType.vue'),
                    meta: {
                        pageTitle: 'Payment Type',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Payment Type', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Payment Type', routeApi: 'payment_type', mainTableName: 'cfg_init_payment_type'
                    },
                },
                {
                    path: '/configuration/reservation1/market_category',
                    name: 'configuration-reservation1-market_category',
                    component: () => import('./views/pages/Tools/configurations/reservation1/MarketCategory.vue'),
                    meta: {
                        pageTitle: 'Market Category',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Market Category', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Market Category', routeApi: 'market_category', mainTableName: 'cfg_init_market_category'
                    },
                },
                {
                    path: '/configuration/reservation1/market',
                    name: 'configuration-reservation1-market',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Market.vue'),
                    meta: {
                        pageTitle: 'Market',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Market', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Market', routeApi: 'market', mainTableName: 'cfg_init_market'
                    },
                },
                {
                    path: '/configuration/reservation1/marketing',
                    name: 'configuration-reservation1-marketing',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Marketing.vue'),
                    meta: {
                        pageTitle: 'Marketing',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Marketing', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Marketing', routeApi: 'marketing', mainTableName: 'cfg_init_marketing'
                    },
                },
                {
                    path: '/configuration/reservation1/card_bank',
                    name: 'configuration-reservation1-card_bank',
                    component: () => import('./views/pages/Tools/configurations/reservation1/CardBank.vue'),
                    meta: {
                        pageTitle: 'Card Bank',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Card Bank', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Card Bank', routeApi: 'card_bank', mainTableName: 'cfg_init_card_bank'
                    },
                },
                {
                    path: '/configuration/reservation1/card_type',
                    name: 'configuration-reservation1-card_type',
                    component: () => import('./views/pages/Tools/configurations/reservation1/CardType.vue'),
                    meta: {
                        pageTitle: 'Card Type',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Card Type', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Card Type', routeApi: 'card_type', mainTableName: 'cfg_init_card_type'
                    },
                },
                {
                    path: '/configuration/reservation1/loan_item',
                    name: 'configuration-reservation1-loan_item',
                    component: () => import('./views/pages/Tools/configurations/reservation1/LoanItem.vue'),
                    meta: {
                        pageTitle: 'Loan Item',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Loan Item', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Loan Item', routeApi: 'loan_item', mainTableName: 'cfg_init_loan_item'
                    },
                },
                {
                    path: '/configuration/reservation1/credit_card_charge',
                    name: 'configuration-reservation1-credit_card_charge',
                    component: () => import('./views/pages/Tools/configurations/reservation1/CreditCardCharge.vue'),
                    meta: {
                        pageTitle: 'Credit Card Charge',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Credit Card Charge', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Credit Card Charge', routeApi: 'credit_card_charge', mainTableName: 'cfg_init_credit_card_charge'
                    },
                },
                {
                    path: '/configuration/reservation1/phone_book_type',
                    name: 'configuration-reservation1-phone_book_type',
                    component: () => import('./views/pages/Tools/configurations/reservation1/PhoneBookType.vue'),
                    meta: {
                        pageTitle: 'Phone Book Type',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Phone Book Type', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Phone Book Type', routeApi: 'phone_book_type', mainTableName: 'cfg_init_phone_book_type'
                    },
                },
                {
                    path: '/configuration/reservation1/member_point_type',
                    name: 'configuration-reservation1-member_point_type',
                    component: () => import('@/views/pages/UnderConstruction.vue'),
                    meta: {routeOrder: globalVariable.global.accessUserMenuOrder.configuration},
                    props: { titleForm: 'Member Point Type', routeApi: 'member_point_type', mainTableName: 'cfg_init_member_point_type'
                    },
                },
                {
                    path: '/configuration/reservation1/member_outlet_discount',
                    name: 'configuration-reservation1-member_outlet_discount',
                    component: () => import('@/views/pages/UnderConstruction.vue'),
                    meta: {
                        pageTitle: 'Member Outlet Discount',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Member Outlet Discount', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Member Outlet Discount', routeApi: 'member_outlet_discount', mainTableName: 'pos_cfg_init_member_outlet_discount'
                    },
                },
                {
                    path: '/configuration/reservation1/member',
                    name: 'configuration-reservation1-member',
                    component: () => import('@/views/pages/UnderConstruction.vue'),
                    meta: {
                        pageTitle: 'Member',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Member', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Member', routeApi: 'member', mainTableName: 'cfg_init_member'
                    },
                },
                {
                    path: '/configuration/reservation1/voucher_reason',
                    name: 'configuration-reservation1-voucher_reason',
                    component: () => import('./views/pages/Tools/configurations/reservation1/VoucherReason.vue'),
                    meta: {
                        pageTitle: 'Voucher Reason',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Voucher Reason', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Voucher Reason', routeApi: 'voucher_reason', mainTableName: 'cfg_init_voucher_reason'
                    },
                },
                {
                    path: '/configuration/reservation1/competitor_category',
                    name: 'configuration-reservation1-competitor_category',
                    component: () => import('./views/pages/Tools/configurations/reservation1/CompetitorCategory.vue'),
                    meta: {
                        pageTitle: 'Competitor Category',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Competitor Category', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Competitor Category', routeApi: 'competitor_category', mainTableName: 'cfg_init_competitor_category'
                    },
                },
                {
                    path: '/configuration/reservation1/competitor',
                    name: 'configuration-reservation1-competitor',
                    component: () => import('./views/pages/Tools/configurations/reservation1/Competitor.vue'),
                    meta: {
                        pageTitle: 'Competitor',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Competitor', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Competitor', routeApi: 'competitor', mainTableName: 'competitor'
                    },
                },
                {
                    path: '/configuration/reservation1/room_amenities',
                    name: 'configuration-reservation1-room_amenities',
                    component: () => import('./views/pages/Tools/configurations/reservation1/RoomAmenities.vue'),
                    meta: {
                        pageTitle: 'Room Amenities',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 1', active: true },
                            { title: 'Room Amenities', active: true },
                        ],
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                    props: { titleForm: 'Room Amenities', routeApi: 'room_amenities', mainTableName: 'cfg_init_room_amenities'
                    },
                },
                {
                    path: '/configuration/reservation2',
                    name: 'configuration-reservation2',
                    component: () => import('./views/pages/Tools/configurations/Reservation2.vue'),
                    meta: {
                        pageTitle: 'Reservation 2',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Reservation 2', active: true },
                        ],
                        isConfiguration: true,
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                },
                {
                    path: '/configuration/global_parameter',
                    name: 'configuration-global-parameter',
                    component: () => import('./views/pages/Tools/configurations/GlobalParameter.vue'),
                    meta: {
                        pageTitle: 'Global Parameter',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Global Parameter', active: true },
                        ],
                        isConfiguration: true,
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                },
                {
                    path: '/configuration/company_information',
                    name: 'configuration-company-information',
                    component: () => import('./views/pages/Tools/configurations/CompanyInformation.vue'),
                    meta: {
                        pageTitle: 'Company Information',
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Tools', active: true },
                            { title: 'Configuration', active: true },
                            { title: 'Company Information', active: true },
                        ],
                        isConfiguration: true,
                        routeOrder: globalVariable.global.accessUserMenuOrder.configuration
                    },
                },
            // END CONFIGURATION
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
                {
                    path: '/',
                    name: 'login',
                    component: () => import('@/views/pages/SignIn')
                },
                {
                    path: '/logout',
                    name: 'logout',
                    component: () => import('@/views/pages/SignOut.vue')
                },
                {
                    path: '/change-password',
                    name: 'change-password',
                    meta: { requiresAuth : true },
                    component: () => import('@/views/pages/ChangePassword.vue')
                },
                {
                    path: '/signup',
                    name: 'signup',
                    component: () => import('@/views/pages/SignUp.vue')
                },
                {
                    path: '/pages/error-401',
                    name: 'page-unauth-401',
                    component: () => import('@/views/pages/UnAuth401.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue')
                },
            ]
        },
        // =============================================================================
    // REPORT
    // =============================================================================
    {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
    // =============================================================================
    // PAGES
    // =============================================================================
          {
            path: '/report/preview',
            name: 'preview-report',
            component: () => import('@/views/pages/components/report/Template.vue'),
            props: true
          }
        ]
    },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

// router.afterEach(() => {
//   // Remove initial loading
//   const appLoading = document.getElementById('loading-bg')
//     if (appLoading) {
//         appLoading.style.display = "none";
//     }
// })


import $request from '@/utils/request.js';
router.beforeEach(async (to, from, next) => {
    let auth = store.getters.isAuth
    if (auth) {
        await $request.get('auth-check')
            .then(response => {
                
            }).catch(async error => { 
                auth = false;
                await store.dispatch('logout'); 
            });    
    }
    routeProcess(to, from, next, auth);
})

// loading animation when page still loading
router.afterEach(() => {
    const appLoading = document.getElementById('loading-bg')
      if (appLoading) {
          appLoading.style.display = "none";
      }
  })

function routeProcess(to, from, next, auth) {
    //Authentication
    store.commit('CLEAR_ERRORS') 
    let isChangedPassword = store.getters.isChangedPassword
    if(from.matched.some(record => record.meta.isConfiguration) && !to.matched.some(record => record.meta.isConfiguration)){
        location.replace(to.path)
    } else {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!auth) {
                next({ name: 'login' })
            } else {
                if(!isChangedPassword && to.name != 'change-password'){
                    next({name: 'change-password'})
                }else
                if (to.matched.some(record => record.meta.routeOrder)) { //proteksi Route from user group
                    let menuAccessOrderData = store.state.userSettingUserGroup.menuAcesssUserData;

                    if (to.meta.routeOrder >= 100) { //Checking Router No in Menu/Nested Other menu to open, But User Direct Access Path
                        if(from.name != undefined && from.name != null && from.name != '') {
                            next()
                        }
                        else{
                            next({name: 'page-unauth-401'})
                        }
                    }
                    else if(menuAccessOrderData.length === 0){ //Access menu direct patch
                        store.dispatch('setAccessMenuUser', store.state.auth.accountCode).then(() => {
                            menuAccessOrderData = store.state.userSettingUserGroup.menuAcesssUserData.groupAccess
                            if( menuAccessOrderData[to.meta.routeOrder] != undefined && menuAccessOrderData[to.meta.routeOrder] === '1') {
                                next()
                            }
                            else{
                                next({name: 'page-unauth-401'})
                            }
                        })
                    }
                    else{ //Access menu normal example: active on Home first or after login
                        menuAccessOrderData = store.state.userSettingUserGroup.menuAcesssUserData.groupAccess
                        if( menuAccessOrderData[to.meta.routeOrder] != undefined && menuAccessOrderData[to.meta.routeOrder] === '1') {
                            next()
                        }
                        else{
                            next({name: 'page-unauth-401'})
                        }
                    }
                }
                else {
                    next()
                }
            }
        } else if(to.name == 'login' && auth && isChangedPassword){
            next({name: 'home'})
        } else {
            next()
        }
    }
}
/**
 * Initializes NProgress after a specified delay only if the route was not resolved yet.
 */


// router.beforeEach((to, from, next) => {
//     NProgress.start()
//     NProgress.set(0.1)
//     next()
//   })
//   router.afterEach(() => {
//     setTimeout(() => NProgress.done(), 500)
//   })

export default router
