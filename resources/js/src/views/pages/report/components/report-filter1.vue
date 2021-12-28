<template>
    <vx-card class="filter-string box">
        <!-- Filter Guest Status -->
        <div v-if="((reportCodeInt == global.reportList.reservationList) || (reportCodeInt == global.reportList.cancelledReservation) || (reportCodeInt == global.reportList.noShowReservation) ||
                    (reportCodeInt == global.reportList.voidedReservation) || (reportCodeInt == global.reportList.groupReservation) || (reportCodeInt == global.reportList.expectedArrival) ||
                    (reportCodeInt == global.reportList.samedayReservation) || (reportCodeInt == global.reportList.balanceDeposit) || (reportCodeInt == global.reportList.waitListReservation) ||
                    (reportCodeInt == global.reportList.currentInHouse) || (reportCodeInt == global.reportList.guestInHouse) || (reportCodeInt == global.reportList.guestInHousebyBusinessSource) ||
                    (reportCodeInt == global.reportList.guestInHousebyMarket) || (reportCodeInt == global.reportList.guestInHousebyGuestType) ||
                    (reportCodeInt == global.reportList.guestInHousebyCountry) || (reportCodeInt == global.reportList.guestInHousebyState) || (reportCodeInt == global.reportList.guestInHousebyCity) ||
                    (reportCodeInt == global.reportList.guestInHouseForecast) || (reportCodeInt == global.reportList.earlyCheckIn) || (reportCodeInt == this.global.reportList.dayUse) ||
                    (reportCodeInt == this.global.reportList.earlyDeparture) || (reportCodeInt == this.global.reportList.expectedDeparture) || (reportCodeInt == this.global.reportList.extendedDeparture) ||
                    (reportCodeInt == this.global.reportList.departureList) || (reportCodeInt == this.global.reportList.actualDepartureGuestList)
                    )">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
                    <div v-if="((reportCodeInt != global.reportList.groupReservation))">
                        <span><b>{{ $t('report.filterGuestType') }}</b></span>
                    </div>
                    <div v-else>
                        <span><b>{{ $t('report.filterGroup') }}</b></span>
                    </div>
                </vs-col>
            </vs-row>
            <div v-if="((reportCodeInt != global.reportList.groupReservation))">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                        <vs-radio v-model="vModelGuestType" vs-name="radioFilter" vs-value="1">{{ $t('report.all') }}</vs-radio>
                    </vs-col>
                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                        <vs-radio v-model="vModelGuestType" vs-name="radioFilter" vs-value="2">{{ $t('report.individual') }}</vs-radio>
                    </vs-col>
                </vs-row>
            </div>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <div v-if="((reportCodeInt != global.reportList.groupReservation))">
                        <vs-radio v-model="vModelGuestType" vs-name="radioFilter" vs-value="3">{{ $t('report.group') }}</vs-radio>
                    </div>
                    <div v-else>
                        <span>{{ $t('report.group') }}</span>
                    </div>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" v-on:input="onSelectGuestType(3)" :reduce="dataLookGuestGroup => dataLookGuestGroup.code" v-model="vModelLookUp.guestGroup" label="name" :options="dataLookGuestGroup"></v-select>
                </vs-col>
            </vs-row>
        </div>
        <!-- Filter Arrival List Options -->
        <div v-if="((reportCodeInt == global.reportList.arrivalList))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
                    <div v-if="((reportCodeInt == global.reportList.arrivalList))">
                        <span><b>{{ $t('report.filterArrivalList') }}</b></span>
                    </div>
                </vs-col>
            </vs-row>
            <div v-if="((reportCodeInt == global.reportList.arrivalList))">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                        <vs-radio v-model="vModelOptionArrivalList" vs-name="radioArrivalList" vs-value="1">{{ $t('report.all') }}</vs-radio>
                    </vs-col>
                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                        <vs-radio v-model="vModelOptionArrivalList" vs-name="radioArrivalList" vs-value="2">{{ $t('report.byReservation') }}</vs-radio>
                    </vs-col>
                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                        <vs-radio v-model="vModelOptionArrivalList" vs-name="radioArrivalList" vs-value="3">{{ $t('report.byWalkIn') }}</vs-radio>
                    </vs-col>
                </vs-row>
            </div>
        </div>
        <!-- Filter UserID Arrival List -->
        <div v-if="((reportCodeInt == global.reportList.arrivalList))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
                    <div v-if="((reportCodeInt == global.reportList.arrivalList))">
                        <span><b>{{ $t('report.filterUserID') }}</b></span>
                    </div>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.userID') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="dataLookUser => dataLookUser.code" v-model="vModelLookUp.user" label="code" :options="dataLookUser"></v-select>
                </vs-col>
            </vs-row>
        </div>
        <!-- Filter Header Guest Status & Company -->
        <div>
            <div v-if="((reportCodeInt == global.reportList.reservationList) || (reportCodeInt == global.reportList.groupReservation) || (reportCodeInt == global.reportList.expectedArrival) || (reportCodeInt == global.reportList.guestInHouse) ||
                        (reportCodeInt == global.reportList.guestInHouseForecast) || (reportCodeInt == global.reportList.earlyCheckIn) ||
                        (reportCodeInt == global.reportList.earlyDeparture) || (reportCodeInt == global.reportList.expectedDeparture) || (reportCodeInt == global.reportList.extendedDeparture) || (reportCodeInt == global.reportList.departureList) ||
                        (reportCodeInt == global.reportList.actualDepartureGuestList)
                        )">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
                        <div v-if="((reportCodeInt == global.reportList.reservationList))">
                            <span><b>{{ $t('report.filterStatusCompany') }}</b></span>
                        </div>
                        <div v-else-if="((reportCodeInt == global.reportList.groupReservation))">
                            <span><b>{{ $t('report.filterStatus') }}</b></span>
                        </div>
                        <div v-else-if="((reportCodeInt == global.reportList.expectedArrival) || (reportCodeInt == global.reportList.guestInHouse) || (reportCodeInt == global.reportList.guestInHouseForecast) || (reportCodeInt == global.reportList.earlyCheckIn) ||
                                        (reportCodeInt == global.reportList.earlyDeparture) || (reportCodeInt == this.global.reportList.dayUse) || (reportCodeInt == global.reportList.expectedDeparture) || (reportCodeInt == global.reportList.extendedDeparture) || (reportCodeInt == global.reportList.departureList) ||
                                        (reportCodeInt == global.reportList.actualDepartureGuestList)
                                        )">
                            <span><b>{{ $t('report.filterCompany') }}</b></span>
                        </div>
                    </vs-col>
                </vs-row>
            </div>
            <!-- Filter Guest Status -->
            <div v-if="((reportCodeInt == global.reportList.reservationList) || (reportCodeInt == global.reportList.groupReservation))">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                        <span>{{ $t('report.status') }}</span>
                    </vs-col>
                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                        <v-select class="w-full" :reduce="dataLookConstGuestStatus => dataLookConstGuestStatus.code" v-model="vModelLookUp.constGuestStatus" label="name" :options="dataLookConstGuestStatus"></v-select>
                    </vs-col>
                </vs-row>
            </div>
            <!-- Filter Company -->
            <div v-if="((reportCodeInt == global.reportList.reservationList) || (reportCodeInt == global.reportList.expectedArrival) || (reportCodeInt == global.reportList.guestInHouse) ||
                        (reportCodeInt == global.reportList.guestInHouseForecast) || (reportCodeInt == global.reportList.earlyCheckIn) || (reportCodeInt == this.global.reportList.dayUse) || (reportCodeInt == global.reportList.earlyDeparture) ||
                        (reportCodeInt == global.reportList.expectedDeparture) || (reportCodeInt == global.reportList.extendedDeparture) || (reportCodeInt == global.reportList.departureList) ||
                        (reportCodeInt == global.reportList.actualDepartureGuestList)
                        )">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                        <span>{{ $t('report.company') }}</span>
                    </vs-col>
                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                        <v-select class="w-full" :reduce="dataLookCompany => dataLookCompany.code" v-model="vModelLookUp.company" label="name" :options="dataLookCompany"></v-select>
                    </vs-col>
                </vs-row>
            </div>
        </div>

    <!-- // Filter Business Source/ MARKET / BOOKING SRC / NATIONALITY -->
        <div v-if="((reportCodeInt == global.reportList.guestInHousebyBusinessSource) || (reportCodeInt == global.reportList.guestInHousebyMarket) || (reportCodeInt == global.reportList.guestInHousebyBookingSource) ||
                    (reportCodeInt == global.reportList.guestInHousebyNationality))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
                    <div>
                        <span><b>{{ $t('report.filterOptions') }}</b></span>
                    </div>
                </vs-col>
            </vs-row>

            <div v-if="((reportCodeInt == global.reportList.guestInHousebyBusinessSource))">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                        <span>{{ $t('report.businessSource') }}</span>
                    </vs-col>
                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                        <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.businessSource" label="name" :options="dataLookBusinessSource"></v-select>
                    </vs-col>
                </vs-row>
            </div>
            <div v-if="((reportCodeInt == global.reportList.guestInHousebyMarket))">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                        <span>{{ $t('report.marketList') }}</span>
                    </vs-col>
                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                        <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.market" label="name" :options="dataLookMarket"></v-select>
                    </vs-col>
                </vs-row>
            </div>
            <div v-if="((reportCodeInt == global.reportList.guestInHousebyBookingSource))">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                        <span>{{ $t('report.bookingSource') }}</span>
                    </vs-col>
                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                        <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.bookingSource" label="name" :options="dataLookBookingSource"></v-select>
                    </vs-col>
                </vs-row>
            </div>
            <div v-if="((reportCodeInt == global.reportList.guestInHousebyNationality))">
                <vs-row class="box-body mb-2" vs-align="center">
                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                        <span>{{ $t('report.nationality') }}</span>
                    </vs-col>
                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                        <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.nationality" label="name" :options="dataLookNationality"></v-select>
                    </vs-col>
                </vs-row>
            </div>
        </div>
        <!--Filter Show House Use Report-->
        <div v-if="((reportCodeInt == global.reportList.guestInHouse) || (reportCodeInt == global.reportList.guestInHousebyBusinessSource) ||
                    (reportCodeInt == global.reportList.guestInHousebyMarket) || (reportCodeInt == global.reportList.guestInHousebyBookingSource) || (reportCodeInt == global.reportList.guestInHousebyGuestType) ||
                    (reportCodeInt == global.reportList.guestInHousebyCountry) || (reportCodeInt == global.reportList.guestInHousebyState) ||
                    (reportCodeInt == global.reportList.guestInHousebyCity) || (reportCodeInt == global.reportList.guestInHousebyNationality))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span></span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <vs-checkbox v-model="checkBox.showHouseUse">{{ $t('report.showHouseUse') }}</vs-checkbox>
                </vs-col>
            </vs-row>
        </div>

        <!-- filter transaction -->
        <div v-if="((reportCodeInt == global.reportList.advancedPaymentDeposit) || (reportCodeInt == global.reportList.folioTransaction) ||
                    (reportCodeInt == global.reportList.dailyFolioTransaction) || (reportCodeInt == global.reportList.monthlyFolioTransaction) || (reportCodeInt == global.reportList.yearlyTransaction) ||
                    (reportCodeInt == global.reportList.chargeList) || (reportCodeInt == global.reportList.dailyChargeList) || (reportCodeInt == global.reportList.monthlyChargeList) || (reportCodeInt == global.reportList.yearlyChargeList) ||
                    (reportCodeInt == global.reportList.cashierReport) || (reportCodeInt == global.reportList.cashierReportReprint) || (reportCodeInt == global.reportList.cashSummaryReport) ||
                    (reportCodeInt == global.reportList.paymentList) || (reportCodeInt == global.reportList.dailyPaymentList) || (reportCodeInt == global.reportList.monthlyPaymentList) || (reportCodeInt == global.reportList.yearlyPaymentList) ||
                    (reportCodeInt == global.reportList.dailySales) || (reportCodeInt == global.reportList.transactionReportByStaff) || (reportCodeInt == global.reportList.taxBreakdownDetailed) || (reportCodeInt == global.reportList.voidList)
                    )">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="12" vs-sm="12" vs-xs="12">
                    <div>
                        <span><b>{{ $t('report.filterOptions') }}</b></span>
                    </div>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.userID') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="dataLookUser => dataLookUser.code" v-model="vModelLookUp.user" label="code" :options="dataLookUser"></v-select>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.shift') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.shift" v-model="vModelLookUp.shift" label="shift" :options="dataLookShift"></v-select>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.subDepartment') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.subDepartment" label="name" :options="dataLookSubDepartment"></v-select>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.account') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.account" label="name" :options="dataLookAccount"></v-select>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.subGroupAccount') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.accountSubGroup" label="name" :options="dataLookSubAccount"></v-select>
                </vs-col>
            </vs-row>
            <vs-row v-if="((reportCodeInt == global.reportList.chargeList))" class="box-body  mb-2">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.company') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.company" label="name" :options="dataLookCompany"></v-select>
                </vs-col>
            </vs-row>
            <vs-row v-if="((reportCodeInt == global.reportList.chargeList))" class="box-body  mb-2">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.businessSource') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.businessSource" label="name" :options="dataLookBusinessSource"></v-select>
                </vs-col>
            </vs-row>
            <vs-row v-if="((reportCodeInt == global.reportList.chargeList) || (reportCodeInt == global.reportList.yearlyChargeList))" class="box-body  mb-2">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span></span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <vs-checkbox v-model="checkBox.showAccountPayable">{{ $t('report.showAccountPayable') }}</vs-checkbox>
                </vs-col>
            </vs-row>
        </div>
            <!-- <vs-row v-if="(reportCodeInt == global.reportList.guestInHouseListing)" class="box-body  mb-2">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span></span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <vs-checkbox v-model="checkBox.showReservationBy">Show Reservation By</vs-checkbox>
                </vs-col>
            </vs-row> -->
         <!-- FILTER FOLIO TYPE -->
        <div v-if="(reportCodeInt == global.reportList.folioTransaction) || (reportCodeInt == global.reportList.dailyFolioTransaction) || (reportCodeInt == global.reportList.monthlyFolioTransaction) || (reportCodeInt == global.reportList.yearlyTransaction) ||
                    (reportCodeInt == global.reportList.chargeList) || (reportCodeInt == global.reportList.dailyChargeList) || (reportCodeInt == global.reportList.monthlyChargeList) || (reportCodeInt == global.reportList.yearlyChargeList) ||
                    (reportCodeInt == global.reportList.cashierReport) || (reportCodeInt == global.reportList.cashierReportReprint) || (reportCodeInt == global.reportList.cashSummaryReport) ||
                    (reportCodeInt == global.reportList.paymentList) || (reportCodeInt == global.reportList.dailyPaymentList) || (reportCodeInt == global.reportList.monthlyPaymentList) || (reportCodeInt == global.reportList.yearlyPaymentList) ||
                    (reportCodeInt == global.reportList.transactionReportByStaff) || (reportCodeInt == global.reportList.taxBreakdownDetailed) || (reportCodeInt == global.reportList.voidList)
                    ">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start">
                    <span><b>{{ $t('report.folioTypeOptions') }}</b></span>
                </vs-col>
            </vs-row>
            <vs-row class="box-body  mb-2" vs-type="flex" vs-justify="space-between">
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                    <vs-checkbox v-model="checkBox.guestFolio">{{ $t('report.guestFolio') }}</vs-checkbox>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                    <vs-checkbox v-model="checkBox.deskFolio">{{ $t('report.deskFolio') }}</vs-checkbox>
                </vs-col>
                 <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                    <vs-checkbox v-model="checkBox.masterFolio">{{ $t('report.masterFolio') }}</vs-checkbox>
                </vs-col>
            </vs-row>
        </div>

        <!-- FILTER FOLIO STATUS -->
        <div v-if="(reportCodeInt == global.reportList.folioTransaction) || (reportCodeInt == global.reportList.folioList) || (reportCodeInt == global.reportList.masterFolio) || (reportCodeInt == global.reportList.deskFolio) ||
                    (reportCodeInt == global.reportList.dailyFolioTransaction) || (reportCodeInt == global.reportList.monthlyFolioTransaction) || (reportCodeInt == global.reportList.yearlyTransaction) ||
                    (reportCodeInt == global.reportList.chargeList) || (reportCodeInt == global.reportList.dailyChargeList) || (reportCodeInt == global.reportList.monthlyChargeList) || (reportCodeInt == global.reportList.yearlyChargeList) ||
                    (reportCodeInt == global.reportList.cashierReport) || (reportCodeInt == global.reportList.cashierReportReprint) || (reportCodeInt == global.reportList.cashSummaryReport) ||
                    (reportCodeInt == global.reportList.paymentList) || (reportCodeInt == global.reportList.dailyPaymentList) || (reportCodeInt == global.reportList.monthlyPaymentList) || (reportCodeInt == global.reportList.yearlyPaymentList) ||
                    (reportCodeInt == global.reportList.transactionByStaff) || (reportCodeInt == global.reportList.taxBreakdownDetailed)
                    ">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start">
                    <span><b>{{ $t('report.folioStatusOptions') }}</b></span>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-type="flex" vs-justify="flex-start">
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                    <vs-checkbox v-model="checkBox.folioStatusOpen">{{ $t('report.open') }}</vs-checkbox>
                </vs-col>
                <vs-col class="ml-5" vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                    <vs-checkbox v-model="checkBox.folioStatusClosed">{{ $t('report.closed') }}</vs-checkbox>
                </vs-col>
            </vs-row>
        </div>

        <!--FILTER PACKAGE STATUS-->
        <div v-if="((reportCodeInt == global.reportList.roomRate) || (reportCodeInt == global.reportList.package))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start">
                    <span><b>{{ $t('report.status') }}</b></span>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-type="flex" vs-justify="flex-start">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                    <vs-radio v-model="radios.status" vs-name="radiosStatus" vs-value="1">{{ $t('report.all') }}</vs-radio>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                    <vs-radio v-model="radios.status" vs-name="radiosStatus" vs-value="2">{{ $t('report.active') }}</vs-radio>
                </vs-col>
                <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="4" vs-sm="4" vs-xs="4">
                    <vs-radio v-model="radios.status" vs-name="radiosStatus" vs-value="3">{{ $t('report.nonActive') }}</vs-radio>
                </vs-col>
            </vs-row>
        </div>

        <!--FILTER ROOM STATUS-->
        <div v-if="((reportCodeInt == global.reportList.roomStatus))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.building') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.building" v-model="vModelLookUp.building" label="building" :options="dataLookBuilding"></v-select>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.floor') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.floor" v-model="vModelLookUp.floor" label="floor" :options="dataLookFloor"></v-select>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.status') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.roomStatus" label="name" :options="dataLookRoomStatus"></v-select>
                </vs-col>
            </vs-row>
        </div>
        <!-- FIlTER COMPANY TYPE -->
        <div v-if="((reportCodeInt == global.reportList.company))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start">
                    <span><b>{{ $t('report.filterOptions') }}</b></span>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.companyType') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.companyType" label="name" :options="dataLookCompanyType"></v-select>
                </vs-col>
            </vs-row>
        </div>
        <!-- FIlTER PHONE BOOK TYPE -->
        <div v-if="((reportCodeInt == global.reportList.phoneBook))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start">
                    <span><b>{{ $t('report.filterOptions') }}</b></span>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.phoneBookType') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.phoneBookType" label="name" :options="dataLookPhoneBookType"></v-select>
                </vs-col>
            </vs-row>
        </div>
        <div v-if="((reportCodeInt == global.reportList.logUser) || (reportCodeInt == global.reportList.logShift) || (reportCodeInt == global.reportList.logMoveRoom) ||
            (reportCodeInt == global.reportList.logTransferTransaction) || (reportCodeInt == global.reportList.logSpecialAccess) || (reportCodeInt == global.reportList.keyLockHistory) ||
            (reportCodeInt == global.reportList.logVoidTransaction) || (reportCodeInt == global.reportList.logVoidTransaction) || (reportCodeInt == global.reportList.logHouseKeeping) ||
            (reportCodeInt == global.reportList.logPABX))">
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start">
                    <span><b>{{ $t('report.filterOptions') }}</b></span>
                </vs-col>
            </vs-row>
            <vs-row class="box-body mb-2" vs-align="center">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.userID') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.code" v-model="vModelLookUp.user" label="code" :options="dataLookUser"></v-select>
                </vs-col>
            </vs-row>
            <vs-row v-if="((reportCodeInt == global.reportList.logUser))" class="box-body  mb-2">
                <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                    <span>{{ $t('report.action') }}</span>
                </vs-col>
                <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                    <v-select class="w-full" :reduce="data => data.id" v-model="vModelLookUp.logUserAction" label="name" :options="dataLookLogUserAction"></v-select>
                </vs-col>
            </vs-row>
        </div>
    </vx-card>
</template>

<script>
import ReportResource from '@/api/report.js';

const reportResource = new ReportResource();

export default {
    props: ['reportCodeInt'],

    data() {
        return {
            vModelGuestType: 1,
            vModelOptionArrivalList: 1,
            dataLookGuestGroup: [],
            dataLookConstGuestStatus: [],
            dataLookCompany: [],
            dataLookCompanyType: [],
            dataLookUser: [],
            dataLookSubDepartment: [],
            dataLookBusinessSource: [],
            dataLookShift: [],
            dataLookAccount: [],
            dataLookMarket: [],
            dataLookSubAccount: [],
            dataLookNationality: [],
            dataLookBookingSource: [],
            dataLookBuilding: [],
            dataLookFloor: [],
            dataLookRoomStatus: [],
            dataLookPhoneBookType: [],
            dataLookLogUserAction: [],
            vModelLookUp: {},
            radios: {
                status: 1,
            },
            checkBox: {
                folioStatusOpen: true,
                folioStatusClosed: true,
                guestFolio: true,
                deskFolio: true,
                masterFolio: true,
            },
        };
    },
    methods: {
        async getDataLookUpReportFilter1() {
            const { data } = await reportResource.ReportDataLookUpFilter1();
            this.dataLookGuestGroup = data.guestGroup;
            this.dataLookConstGuestStatus = data.constGuestStatus;
            this.dataLookCompany = data.company;
            this.dataLookCompanyType = data.companyType;
            this.dataLookBookingSource = data.bookingSource;
            this.dataLookBusinessSource = data.businessSource;
            this.dataLookAccount = data.account;
            this.dataLookSubAccount = data.subAccount;
            this.dataLookNationality = data.nationality;
            this.dataLookSubDepartment = data.subDepartment;
            this.dataLookMarket = data.market;
            this.dataLookUser = data.user;
            this.dataLookShift = data.shift;
            this.dataLookBuilding = data.building;
            this.dataLookFloor = data.floor;
            this.dataLookRoomStatus = data.roomStatus;
            this.dataLookPhoneBookType = data.phoneBookType;
            this.dataLookLogUserAction = data.logUserAction;
        },

        onSelectGuestType(param) {
            this.vModelGuestType = param;
        },

    },

    async created() {
        this.getDataLookUpReportFilter1();
    },

    mounted() {
        //
    },

};
</script>
