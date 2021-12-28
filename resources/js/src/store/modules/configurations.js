import ConfigurationsResource from '@/api/configurations.js'
const configurationsResource = new ConfigurationsResource;

function getValueByName(json, name){
    if(json){
        return json.filter(function(result){return result.name == name;})[0].value;
    }
}

function getVariant(val){
    return val === 'true' || val === 'True' || val === true
}

let configurations = localStorage.getItem('configurations') != 'undefined' ? JSON.parse(localStorage.getItem('configurations')) : '';

const state = {
    iconPrefix: localStorage.getItem('icon_color'),
    configurations      : localStorage.getItem('configurations') != 'undefined' ? JSON.parse(localStorage.getItem('configurations')) : '',
    defaultCurrency     : localStorage.getItem('configurations') || null,
//Format Setting
    shortDateFormat     : getValueByName(configurations, 'SHORT_DATE_FORMAT'),
    currencyFormat     : getValueByName(configurations, 'CURRENCY_FORMAT'),
//Room Status Color
    roomStatusColor: {
        reserved : getValueByName(configurations, 'RESERVED'),
        occupied : getValueByName(configurations, 'OCCUPIED'),
        houseUse : getValueByName(configurations, 'HOUSE_USE'),
        compliment : getValueByName(configurations, 'COMPLIMENT'),
        outOfOrder : getValueByName(configurations, 'OUT_OF_ORDER'),
        officeUse : getValueByName(configurations, 'OFFICE_USE'),
        underConstruction : getValueByName(configurations, 'UNDER_CONSTRUCTION'),
        available : getValueByName(configurations, 'AVAILABLE'),
    },
//Global Account
    globalAccount: {
        roomCharge: getValueByName(configurations, 'ACCOUNT_ROOM_CHARGE'),
        extraBed: getValueByName(configurations, 'ACCOUNT_EXTRA_BED'),
        cancelationFee: getValueByName(configurations, 'ACCOUNT_CANCELETION_FEE'),
        breakfast: getValueByName(configurations, 'ACCOUNT_BREAKFAST'),
        telephone: getValueByName(configurations, 'ACCOUNT_TELEPHONE'),
        apRefundDeposit: getValueByName(configurations, 'ACCOUNT_AP_REFUND_DEPOSIT'),
        aPCommission: getValueByName(configurations, 'ACCOUNT_AP_COMMISSION'),
        cCAdmin: getValueByName(configurations, 'ACCOUNT_CC_ADM'),
        cash: getValueByName(configurations, 'ACCOUNT_CASH'),
        cityLedger: getValueByName(configurations, 'ACCOUNT_CITY_LEDGER'),
        voucher: getValueByName(configurations, 'ACCOUNT_VOUCHER'),
        voucherCompliment: getValueByName(configurations, 'ACCOUNT_VOUCHER_COMPLIMENT'),
        tax: getValueByName(configurations, 'ACCOUNT_TAX'),
        service: getValueByName(configurations, 'ACCOUNT_SERVICE'),
        transferDepositReservation: getValueByName(configurations, 'ACCOUNT_TRANSFER_DEPOSIT_RESERVATION'),
        transferDepositReservationToFolio: getValueByName(configurations, 'ACCOUNT_TRANSFER_DEPOSIT_RESERVATION_TO_FOLIO'),
        transferCharge: getValueByName(configurations, 'ACCOUNT_TRANSFER_CHARGE'),
        transferPayment: getValueByName(configurations, 'ACCOUNT_TRANSFER_PAYMENT'),
        noShow: getValueByName(configurations, 'ACCOUNT_NO_SHOW'),
    },
//Reservation
    reservation: {
        checkOutLimit: getValueByName(configurations, 'CHECK_OUT_LIMIT'),
        isTitleRequired: getVariant(getValueByName(configurations, 'IS_TITLE_REQUIRED')),
        isTAVoucherRequired: getVariant(getValueByName(configurations, 'IS_TA_VOUCHER_REQUIRED')),
        isStateRequired: getVariant(getValueByName(configurations, 'IS_STATE_REQUIRED')),
        isRoomNumberRequired: getVariant(getValueByName(configurations, 'IS_ROOM_NUMBER_REQUIRED')),
        isPhone1Required: getVariant(getValueByName(configurations, 'IS_PHONE1_REQUIRED')),
        isNationalityRequired: getVariant(getValueByName(configurations, 'IS_NATIONALITY_REQUIRED')),
        isMarketRequired: getVariant(getValueByName(configurations, 'IS_MARKET_REQUIRED')),
        isHKNoteRequired: getVariant(getValueByName(configurations, 'IS_HK_NOTE_REQUIRED')),
        isEmailRequired: getVariant(getValueByName(configurations, 'IS_EMAIL_REQUIRED')),
        isCompanyRequired: getVariant(getValueByName(configurations, 'IS_COMPANY_REQUIRED')),
        isCityRequired: getVariant(getValueByName(configurations, 'IS_CITY_REQUIRED')),
        isBusinessSourceRequired: getVariant(getValueByName(configurations, 'IS_BUSINESS_SOURCE_REQUIRED'))
    },
}

const mutations = {
    SET_CONFIGURATIONS(state, value) {
        state.configurations = value
      },
    SET_DEFAULT_CURRENCY(state, value) {
        state.defaultCurrency = value
    },
    SET_ICON_PREFIX(state, value) {
        localStorage.setItem('icon_color', value);
        state.iconPrefix = value
    }
}

const actions = {
    async getConfigurations({ commit }) {
        let { data } = await configurationsResource.loadAllConfigurationList();
        let iconColor = localStorage.getItem('icon_color');
        if (iconColor === null) commit('SET_ICON_PREFIX', 'color_');
        localStorage.setItem('configurations',JSON.stringify(data.configurations));
        localStorage.setItem('default_currency',data.dvCurrency);
        commit('SET_CONFIGURATIONS', data.configurations)
        commit('SET_DEFAULT_CURRENCY', data.dvCurrency)
      },
}

const getters = {
    iconPrefix: state =>            { return state.iconPrefix},
    defaultCurrency: state =>       { return state.defaultCurrency},
//FORMAT SETTING
    shortDateFormat: state =>       { return getValueByName(state.configurations, 'SHORT_DATE_FORMAT')},
    currencyFormat: state =>        { return getValueByName(state.configurations, 'CURRENCY_FORMAT')},
//RESERVATION
    checkOutLimit: state =>         { return getValueByName(state.configurations, 'CHECK_OUT_LIMIT')},
    isTitleRequired: state =>       { return getVariant(getValueByName(state.configurations, 'IS_TITLE_REQUIRED'))},
    isTAVoucherRequired: state =>   { return getVariant(getValueByName(state.configurations, 'IS_TA_VOUCHER_REQUIRED'))},
    isStateRequired: state =>       { return getVariant(getValueByName(state.configurations, 'IS_STATE_REQUIRED'))},
    isRoomNumberRequired: state =>  { return getVariant(getValueByName(state.configurations, 'IS_ROOM_NUMBER_REQUIRED'))},
    isPhone1Required: state =>      { return getVariant(getValueByName(state.configurations, 'IS_PHONE1_REQUIRED'))},
    isNationalityRequired: state => { return getVariant(getValueByName(state.configurations, 'IS_NATIONALITY_REQUIRED'))},
    isMarketRequired: state =>      { return getVariant(getValueByName(state.configurations, 'IS_MARKET_REQUIRED'))},
    isHKNoteRequired: state =>      { return getVariant(getValueByName(state.configurations, 'IS_HK_NOTE_REQUIRED'))},
    isEmailRequired: state =>       { return getVariant(getValueByName(state.configurations, 'IS_EMAIL_REQUIRED'))},
    isCompanyRequired: state =>     { return getVariant(getValueByName(state.configurations, 'IS_COMPANY_REQUIRED'))},
    isCityRequired: state =>        { return getVariant(getValueByName(state.configurations, 'IS_CITY_REQUIRED'))},
    isBusinessSourceRequired: state => { return getVariant(getValueByName(state.configurations, 'IS_BUSINESS_SOURCE_REQUIRED'))},
//DEFAULT VARIABLE
    dvRoomType: state =>            { return getValueByName(state.configurations, 'DV_ROOM_TYPE')},
    dvRoomRate: state =>            { return getValueByName(state.configurations, 'DV_ROOM_RATE')},
    dvSubDepartment: state =>       { return getValueByName(state.configurations, 'DV_SUB_DEPARTMENT')},
    dvPaymentType: state =>         { return getValueByName(state.configurations, 'DV_PAYMENT_TYPE')},
    dvComplimentRate: state =>      { return getValueByName(state.configurations, 'DV_COMPLIMENT_RATE')},
    dvHouseUseRate: state =>        { return getValueByName(state.configurations, 'DV_HOUSE_USE_RATE')},
    dvMarket: state =>              { return getValueByName(state.configurations, 'DV_MARKET')},
    dvIndividualMarket: state =>    { return getValueByName(state.configurations, 'DV_INDIVIDUAL_MARKET')},
//GLOBAL ACCOUNT
    roomCharge: state =>            { return getValueByName(state.configurations, 'ACCOUNT_ROOM_CHARGE')},
    extraBed: state =>              { return getValueByName(state.configurations, 'ACCOUNT_EXTRA_BED')},
    cancelationFee: state =>        { return getValueByName(state.configurations, 'ACCOUNT_CANCELETION_FEE')},
    breakfast: state =>             { return getValueByName(state.configurations, 'ACCOUNT_BREAKFAST')},
    telephone: state =>             { return getValueByName(state.configurations, 'ACCOUNT_TELEPHONE')},
    apRefundDeposit: state =>       { return getValueByName(state.configurations, 'ACCOUNT_AP_REFUND_DEPOSIT')},
    aPCommission: state =>          { return getValueByName(state.configurations, 'ACCOUNT_AP_COMMISSION')},
    cCAdmin: state =>               { return getValueByName(state.configurations, 'ACCOUNT_CC_ADM')},
    cash: state =>                  { return getValueByName(state.configurations, 'ACCOUNT_CASH')},
    cityLedger: state =>            { return getValueByName(state.configurations, 'ACCOUNT_CITY_LEDGER')},
    voucher: state =>               { return getValueByName(state.configurations, 'ACCOUNT_VOUCHER')},
    voucherCompliment: state =>     { return getValueByName(state.configurations, 'ACCOUNT_VOUCHER_COMPLIMENT')},
    tax: state =>                   { return getValueByName(state.configurations, 'ACCOUNT_TAX')},
    service: state =>               { return getValueByName(state.configurations, 'ACCOUNT_SERVICE')},
    transferDepositReservation: state => { return getValueByName(state.configurations, 'ACCOUNT_TRANSFER_DEPOSIT_RESERVATION')},
    transferDepositReservationToFolio: state => { return getValueByName(state.configurations, 'ACCOUNT_TRANSFER_DEPOSIT_RESERVATION_TO_FOLIO')},
    transferCharge: state =>        { return getValueByName(state.configurations, 'ACCOUNT_TRANSFER_CHARGE')},
    transferPayment: state =>       { return getValueByName(state.configurations, 'ACCOUNT_TRANSFER_PAYMENT')},
    noShow: state =>                { return getValueByName(state.configurations, 'ACCOUNT_NO_SHOW')},
//GLOBAL DEPARTMENT
    dFoodBeverage: state =>         { return getValueByName(state.configurations, 'DEPARTMENT_FOOD_BEVERAGE')},
//GLOBAL SUB DEPARTMENT
    sdFrontOffice: state =>         { return getValueByName(state.configurations, 'SUB_DEPARTMENT_FRONT_OFFICE')},
    sdHouseKeeping: state =>        { return getValueByName(state.configurations, 'SUB_DEPARTMENT_HOUSE_KEEPING')},
    sdBanquet: state =>             { return getValueByName(state.configurations, 'SUB_DEPARTMENT_BANQUET')},
    sdAccounting: state =>          { return getValueByName(state.configurations, 'SUB_DEPARTMENT_ACCOUNTING')},
// GLOBAL OTHER
    goPaymentType: state =>         { return getValueByName(state.configurations, 'PAYMENT_TYPE')},
    //FOLIO
    allowZeroAmount: state =>         { return getVariant(getValueByName(state.configurations, 'ALLOW_ZERO_AMOUNT'))},

}

export default {
    state,
    actions,
    mutations,
    getters
}
