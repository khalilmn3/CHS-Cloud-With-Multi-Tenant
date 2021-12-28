<template>
    <div id="main-container" class="vs-con-loading__container">
        <vx-card class="box mb-2">
            <vs-row class="mb-2" vs-align="flext-start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                <vs-col vs-type="flex" vs-align="center">
                    <vs-input v-on:keyup.enter="search" :placeholder="$t('placeholder.search')" v-model.lazy="searchword" />
                    <vs-button id='search' ref="search" class="ml-2" color="primary" type="filled" @click="search">{{ $t('button.search') }}</vs-button>
                </vs-col>
            </vs-row>
            <vs-row class="mb-2" vs-align="flext-start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                <vs-col vs-type="flex" vs-align="center" vs-lg="5" vs-sm="6" vs-xs="12">
                    <vs-col vs-lg="12" vs-sm="12" vs-xs="12">
                        <v-tree ref="tree" :data='treeData' :multiple='false' :radio='true' @node-click="nodeclick()"/>
                    </vs-col>
                </vs-col>
            </vs-row>
        </vx-card>
        <vs-prompt :class="{'width-500p' : !((reportCodeInt == global.reportList.reservationList) || (reportCodeInt == global.reportList.cancelledReservation) || (reportCodeInt == global.reportList.noShowReservation) ||
                                    (reportCodeInt == global.reportList.voidedReservation) || (reportCodeInt == global.reportList.groupReservation) || (reportCodeInt == global.reportList.expectedArrival) ||
                                    (reportCodeInt == global.reportList.arrivalList) || (reportCodeInt == global.reportList.samedayReservation) || (reportCodeInt == global.reportList.balanceDeposit) ||
                                    (reportCodeInt == global.reportList.waitListReservation) || (reportCodeInt == global.reportList.advancedPaymentDeposit) ||
                                    (reportCodeInt == global.reportList.currentInHouse) || (reportCodeInt == global.reportList.guestInHouse) || (reportCodeInt == global.reportList.guestInHousebyBusinessSource) ||
                                    (reportCodeInt == global.reportList.guestInHousebyMarket) || (reportCodeInt == global.reportList.guestInHousebyBookingSource) || (reportCodeInt == global.reportList.guestInHousebyGuestType) ||
                                    (reportCodeInt == global.reportList.guestInHousebyCountry) || (reportCodeInt == global.reportList.guestInHousebyState) || (reportCodeInt == global.reportList.guestInHousebyCity) ||
                                    (reportCodeInt == global.reportList.guestInHousebyNationality) || (reportCodeInt == global.reportList.guestInHouseForecast) || (reportCodeInt == global.reportList.earlyCheckIn) ||
                                    (reportCodeInt == global.reportList.complimentGuest) || (reportCodeInt == global.reportList.houseUseGuest) || (reportCodeInt == global.reportList.dayUse) ||
                                    (reportCodeInt == global.reportList.earlyDeparture) || (reportCodeInt == global.reportList.expectedDeparture) || (reportCodeInt == global.reportList.extendedDeparture) ||
                                    (reportCodeInt == global.reportList.departureList) || (reportCodeInt == global.reportList.actualDepartureGuestList) ||

                                    (reportCodeInt == global.reportList.folioTransaction) || (reportCodeInt == global.reportList.folioList) || (reportCodeInt == global.reportList.masterFolio) || (reportCodeInt == global.reportList.deskFolio) ||
                                    (reportCodeInt == global.reportList.dailyFolioTransaction) || (reportCodeInt == global.reportList.monthlyFolioTransaction) || (reportCodeInt == global.reportList.yearlyTransaction) ||
                                    (reportCodeInt == global.reportList.chargeList) || (reportCodeInt == global.reportList.dailyChargeList) || (reportCodeInt == global.reportList.monthlyChargeList) || (reportCodeInt == global.reportList.yearlyChargeList) ||
                                    (reportCodeInt == global.reportList.cashierReport) || (reportCodeInt == global.reportList.cashierReportReprint) || (reportCodeInt == global.reportList.cashSummaryReport) ||
                                    (reportCodeInt == global.reportList.paymentList) || (reportCodeInt == global.reportList.dailyPaymentList) || (reportCodeInt == global.reportList.monthlyPaymentList) || (reportCodeInt == global.reportList.yearlyPaymentList) ||
                                    (reportCodeInt == global.reportList.dailySales) || (reportCodeInt == global.reportList.transactionByStaff) || (reportCodeInt == global.reportList.taxBreakdownDetailed) || (reportCodeInt == global.reportList.voidList) ||

                                    (reportCodeInt == global.reportList.roomRate) || (reportCodeInt == global.reportList.package) || (reportCodeInt == global.reportList.roomStatus) ||

                                    (reportCodeInt == global.reportList.company) || (reportCodeInt == global.reportList.phoneBook) ||

                                    (reportCodeInt == global.reportList.logUser) || (reportCodeInt == global.reportList.logShift) || (reportCodeInt == global.reportList.logMoveRoom) ||
                                    (reportCodeInt == global.reportList.logTransferTransaction) || (reportCodeInt == global.reportList.logSpecialAccess) || (reportCodeInt == global.reportList.keyLockHistory) ||
                                    (reportCodeInt == global.reportList.logVoidTransaction) || (reportCodeInt == global.reportList.logVoidTransaction) || (reportCodeInt == global.reportList.logHouseKeeping) ||
                                    (reportCodeInt == global.reportList.logPABX)),
                                     'options-report' : (element > 0 || resolutionWidth < 900)}"
                    :id="firstDialog" :type="global.dialog.typeDialog" :buttons-hidden="true" :active.sync="showModal" :title="modalTitle">
            <component :is="scrollbarTag" class="scroll-area p-4" :settings="global.perfectScrollbarSettings">
                <vs-row vs-type="flex">
                    <vs-col id="filter-date" :class="{ 'vs-lg-6' : element > 0 }" vs-sm="12">
                        <vx-card height="300" class="box">
                            <!-- For Small device -->
                            <div class="small-device" v-if="resolutionWidth < 900">
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                        <span><b>{{ $t('report.template') }}</b></span>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="10" vs-sm="10" vs-xs="9">
                                        <v-select :disabled="optionDisableTemplate" :clearable="false" :reduce="dataLookUpTemplate => dataLookUpTemplate.id_log" v-model="vModelLookUpIdTemplate" label="name" :options="dataLookUpTemplate">
                                            <template v-slot:option="dataLookUpTemplate">
                                                <vs-row v-if="(dataLookUpTemplate.is_default === '-1' && dataLookUpTemplate.is_system === '-1')" vs-align="center" vs-justify="flex-start" vs-w="w-full">
                                                    <feather-icon icon="FileTextIcon" svgClasses="stroke-current text-warning"/> <span><b> {{dataLookUpTemplate.name}}</b></span>
                                                </vs-row>
                                                <vs-row v-else-if="(dataLookUpTemplate.is_default === '-1' && dataLookUpTemplate.is_system === '0')" vs-align="center" vs-justify="flex-start" vs-w="w-full">
                                                    <feather-icon icon="FileTextIcon" /> <span><b> {{dataLookUpTemplate.name}}</b></span>
                                                </vs-row>
                                                <vs-row v-else-if="(dataLookUpTemplate.is_default === '0' && dataLookUpTemplate.is_system === '-1')" vs-align="center" vs-justify="flex-start" vs-w="w-full">
                                                    <feather-icon icon="FileTextIcon" svgClasses="stroke-current text-warning"/> <span> {{dataLookUpTemplate.name}}</span>
                                                </vs-row>
                                                <vs-row v-else-if="(dataLookUpTemplate.is_default === '0' && dataLookUpTemplate.is_system === '0')" vs-align="center" vs-justify="flex-start" vs-w="w-full">
                                                    <feather-icon icon="FileTextIcon"/> <span> {{dataLookUpTemplate.name}}</span>
                                                </vs-row>
                                            </template>
                                        </v-select>
                                    </vs-col>
                                </vs-row>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                        <span><b>{{ $t('report.options') }}</b></span>
                                    </vs-col>
                                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="10" vs-sm="10" vs-xs="9">
                                        <v-select :clearable="false" :reduce="dataLookUpOptionDate => dataLookUpOptionDate.value" v-model="vModelOptions" label="text" :options="dataLookUpOptionDate"></v-select>
                                    </vs-col>
                                </vs-row>
                                <div v-if="vModelOptions == 1">
                                    <vs-row class="box-body mb-2">
                                        <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                            <span>{{ $t('report.date') }}</span>
                                        </vs-col>
                                        <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="5" vs-sm="5" vs-xs="5">
                                            <date-picker :disabled="optionDisable.date" v-model="vModelDateSelected" :clearable="false" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                                        </vs-col>
                                        <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="5" vs-sm="4" vs-xs="4">
                                        </vs-col>
                                    </vs-row>
                                </div>
                                <div v-if="vModelOptions == 2">
                                    <vs-row class="box-body mb-2">
                                        <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                            <span>{{ $t('report.range') }}</span>
                                        </vs-col>
                                        <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="5" vs-sm="5" vs-xs="5">
                                            <date-picker v-on:input="setRadioCheck(undefined, 1)" v-model="vModelDateStart" :clearable="false" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                                        </vs-col>
                                        <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="5" vs-sm="4" vs-xs="4">
                                            <date-picker v-on:input="setRadioCheck(undefined, 2)" v-model="vModelDateEnd" :clearable="false" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                                        </vs-col>
                                    </vs-row>
                                </div>
                                <div v-if="vModelOptions == 3">
                                    <vs-row class="box-body mb-2">
                                        <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                            <span>{{ $t('report.week') }}</span>
                                        </vs-col>
                                        <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="10" vs-sm="10" vs-xs="9">
                                            <v-select :clearable="false" :reduce="dataLookUpWeek => dataLookUpWeek.value" v-model="vModelLookUp.week" label="text" :options="dataLookUpWeek" style="width:90px;min-width:80px;font-size=4px;padding-right:10px;"></v-select>
                                            <v-select :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.yearWeek" label="text" :options="dataLookUpYear" style="width:90px;min-width:80px;font-size=4px;padding-left:10px;"></v-select>
                                        </vs-col>
                                    </vs-row>
                                </div>
                                <div v-if="vModelOptions == 4">
                                    <vs-row class="box-body mb-2">
                                        <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                            <span>{{ $t('report.month') }}</span>
                                        </vs-col>
                                        <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="10" vs-sm="10" vs-xs="9">
                                            <v-select :clearable="false" :reduce="dataLookUpMonth => dataLookUpMonth.value" v-model="vModelLookUp.month" label="text" :options="dataLookUpMonth" style="width:90px;min-width:80px;font-size=4px;padding-right:10px;"></v-select>
                                            <v-select :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.yearMonth" label="text" :options="dataLookUpYear" style="width:90px;min-width:80px;font-size=4px;padding-left:10px;"></v-select>
                                        </vs-col>
                                    </vs-row>
                                </div>
                                <div v-if="vModelOptions == 5">
                                    <vs-row class="box-body mb-2">
                                        <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                            <span>{{ $t('report.quarter') }}</span>
                                        </vs-col>
                                        <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="10" vs-sm="10" vs-xs="9">
                                            <v-select :clearable="false" :reduce="dataLookUpQuarter => dataLookUpQuarter.value" v-model="vModelLookUp.quarter" label="text" :options="dataLookUpQuarter" style="width:90px;min-width:80px;font-size=4px;padding-right:10px;"></v-select>
                                            <v-select :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.yearQuarter" label="text" :options="dataLookUpYear" style="width:90px;min-width:80px;font-size=4px;padding-left:10px;"></v-select>
                                        </vs-col>
                                    </vs-row>
                                </div>
                                <div v-if="vModelOptions == 6">
                                    <vs-row class="box-body mb-2">
                                        <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                            <span>{{ $t('report.semester') }}</span>
                                        </vs-col>
                                        <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="10" vs-sm="10" vs-xs="9">
                                            <v-select :clearable="false" :reduce="dataLookUpSemester => dataLookUpSemester.value" v-model="vModelLookUp.semester" label="text" :options="dataLookUpSemester" style="width:90px;min-width:80px;font-size=4px;padding-right:10px;"></v-select>
                                            <v-select :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.yearSemester" label="text" :options="dataLookUpYear" style="width:90px;min-width:80px;font-size=4px;padding-left:10px;"></v-select>
                                        </vs-col>
                                    </vs-row>
                                </div>
                                <div v-if="vModelOptions == 7">
                                    <vs-row class="box-body mb-2">
                                        <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="2" vs-sm="3" vs-xs="3">
                                            <span>{{ $t('report.year') }}</span>
                                        </vs-col>
                                        <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-lg="10" vs-sm="10" vs-xs="9">
                                            <v-select :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.year" label="text" :options="dataLookUpYear" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                        </vs-col>
                                    </vs-row>
                                </div>
                            </div>
                            <!-- For Large Device -->
                            <div class="large-device" v-else>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3">
                                        <span>{{ $t('report.template') }}</span>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-lg="9" vs-sm="9" vs-xs="9">
                                        <v-select :disabled="optionDisableTemplate" :clearable="false" :reduce="dataLookUpTemplate => dataLookUpTemplate.id_log" v-model="vModelLookUpIdTemplate" label="name" :options="dataLookUpTemplate">
                                            <template v-slot:option="dataLookUpTemplate">
                                                <vs-row v-if="(dataLookUpTemplate.is_default === '-1' && dataLookUpTemplate.is_system === '-1')" vs-align="center" vs-justify="flex-start" vs-w="w-full">
                                                    <span style="color:red"><b> {{dataLookUpTemplate.name}}</b></span>
                                                </vs-row>
                                                <vs-row v-else-if="(dataLookUpTemplate.is_default === '-1' && dataLookUpTemplate.is_system === '0')" vs-align="center" vs-justify="flex-start" vs-w="w-full">
                                                    <span><b> {{dataLookUpTemplate.name}}</b></span>
                                                </vs-row>
                                                <vs-row v-else-if="(dataLookUpTemplate.is_default === '0' && dataLookUpTemplate.is_system === '-1')" vs-align="center" vs-justify="flex-start" vs-w="w-full">
                                                    <span style="color:red"> {{dataLookUpTemplate.name}}</span>
                                                </vs-row>
                                                <vs-row v-else-if="(dataLookUpTemplate.is_default === '0' && dataLookUpTemplate.is_system === '0')" vs-align="center" vs-justify="flex-start" vs-w="w-full">
                                                    <span> {{dataLookUpTemplate.name}}</span>
                                                </vs-row>
                                            </template>
                                        </v-select>
                                    </vs-col>
                                </vs-row>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="3">
                                        <vs-radio :disabled="optionDisable.date" v-model="vModelOptions" vs-name="radios1" vs-value="1">{{ $t('report.date') }}</vs-radio>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="5">
                                        <date-picker :disabled="optionDisable.date" v-on:input="setRadioCheck(1)" v-model="vModelDateSelected" :clearable="false" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                                    </vs-col>
                                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
                                    </vs-col>
                                </vs-row>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="3">
                                        <vs-radio :disabled="optionDisable.range" v-model="vModelOptions" vs-name="radios1" vs-value="2">{{ $t('report.range') }}</vs-radio>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="5">
                                        <date-picker :disabled="optionDisable.range" v-on:input="setRadioCheck(2, 1)" v-model="vModelDateStart" :clearable="false" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                                    </vs-col>
                                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="flex-end" vs-w="4">
                                        <date-picker :disabled="optionDisable.range" v-on:input="setRadioCheck(2, 2)" v-model="vModelDateEnd" :clearable="false" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                                    </vs-col>
                                </vs-row>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="3">
                                        <vs-radio :disabled="optionDisable.week" v-model="vModelOptions" vs-name="radios1" vs-value="3">{{ $t('report.week') }}</vs-radio>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="5">
                                        <v-select :disabled="optionDisable.week" v-on:input="setRadioCheck(3)" :clearable="false" :reduce="dataLookUpWeek => dataLookUpWeek.value" v-model="vModelLookUp.week" label="text" :options="dataLookUpWeek" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
                                        <v-select :disabled="optionDisable.week" v-on:input="setRadioCheck(3)" :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.yearWeek" label="text" :options="dataLookUpYear" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                </vs-row>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="3">
                                        <vs-radio :disabled="optionDisable.month" v-model="vModelOptions" vs-name="radios1" vs-value="4">{{ $t('report.month') }}</vs-radio>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="5">
                                        <v-select :disabled="optionDisable.month" v-on:input="setRadioCheck(4)" :clearable="false" :reduce="dataLookUpMonth => dataLookUpMonth.value" v-model="vModelLookUp.month" label="text" :options="dataLookUpMonth" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
                                        <v-select :disabled="optionDisable.month" v-on:input="setRadioCheck(4)" :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.yearMonth" label="text" :options="dataLookUpYear" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                </vs-row>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="3">
                                        <vs-radio :disabled="optionDisable.quarter" v-model="vModelOptions" vs-name="radios1" vs-value="5">{{ $t('report.quarter') }}</vs-radio>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="5">
                                        <v-select :disabled="optionDisable.quarter" v-on:input="setRadioCheck(5)" :clearable="false" :reduce="dataLookUpQuarter => dataLookUpQuarter.value" v-model="vModelLookUp.quarter" label="text" :options="dataLookUpQuarter" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
                                        <v-select :disabled="optionDisable.quarter" v-on:input="setRadioCheck(5)" :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.yearQuarter" label="text" :options="dataLookUpYear" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                </vs-row>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="3">
                                        <vs-radio :disabled="optionDisable.semester" v-model="vModelOptions" vs-name="radios1" vs-value="6">{{ $t('report.semester') }}</vs-radio>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="5">
                                        <v-select :disabled="optionDisable.semester" v-on:input="setRadioCheck(6)" :clearable="false" :reduce="dataLookUpSemester => dataLookUpSemester.value" v-model="vModelLookUp.semester" label="text" :options="dataLookUpSemester" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
                                        <v-select :disabled="optionDisable.semester" v-on:input="setRadioCheck(6)" :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.yearSemester" label="text" :options="dataLookUpYear" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                </vs-row>
                                <vs-row class="box-body mb-2">
                                    <vs-col vs-order="1" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="3">
                                        <vs-radio :disabled="optionDisable.year" v-model="vModelOptions" vs-name="radios1" vs-value="7">{{ $t('report.year') }}</vs-radio>
                                    </vs-col>
                                    <vs-col vs-order="2" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="5">
                                        <v-select :disabled="optionDisable.year" v-on:input="setRadioCheck(7)" :clearable="false" :reduce="dataLookUpYear => dataLookUpYear.value" v-model="vModelLookUp.year" label="text" :options="dataLookUpYear" style="width:115px;min-width:120px;font-size=4px;"></v-select>
                                    </vs-col>
                                    <vs-col vs-order="3" vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="4">
                                    </vs-col>
                                </vs-row>
                            </div>
                        </vx-card>
                    </vs-col>
                    <vs-col id="filter-string" vs-lg="6" vs-sm="12">
                        <div v-if="((reportCodeInt == global.reportList.reservationList) || (reportCodeInt == global.reportList.cancelledReservation) || (reportCodeInt == global.reportList.noShowReservation) ||
                                    (reportCodeInt == global.reportList.voidedReservation) || (reportCodeInt == global.reportList.groupReservation) || (reportCodeInt == global.reportList.expectedArrival) ||
                                    (reportCodeInt == global.reportList.arrivalList) || (reportCodeInt == global.reportList.samedayReservation) || (reportCodeInt == global.reportList.balanceDeposit) ||
                                    (reportCodeInt == global.reportList.waitListReservation) || (reportCodeInt == global.reportList.advancedPaymentDeposit) ||
                                    (reportCodeInt == global.reportList.currentInHouse) || (reportCodeInt == global.reportList.guestInHouse) || (reportCodeInt == global.reportList.guestInHousebyBusinessSource) ||
                                    (reportCodeInt == global.reportList.guestInHousebyMarket) || (reportCodeInt == global.reportList.guestInHousebyBookingSource) || (reportCodeInt == global.reportList.guestInHousebyGuestType) ||
                                    (reportCodeInt == global.reportList.guestInHousebyCountry) || (reportCodeInt == global.reportList.guestInHousebyState) || (reportCodeInt == global.reportList.guestInHousebyCity) ||
                                    (reportCodeInt == global.reportList.guestInHousebyNationality) || (reportCodeInt == global.reportList.guestInHouseForecast) || (reportCodeInt == global.reportList.earlyCheckIn) ||
                                    (reportCodeInt == global.reportList.complimentGuest) || (reportCodeInt == global.reportList.houseUseGuest) || (reportCodeInt == global.reportList.dayUse) ||
                                    (reportCodeInt == global.reportList.earlyDeparture) || (reportCodeInt == global.reportList.expectedDeparture) || (reportCodeInt == global.reportList.extendedDeparture) ||
                                    (reportCodeInt == global.reportList.departureList) || (reportCodeInt == global.reportList.actualDepartureGuestList) ||

                                    (reportCodeInt == global.reportList.folioTransaction) || (reportCodeInt == global.reportList.folioList) || (reportCodeInt == global.reportList.masterFolio) || (reportCodeInt == global.reportList.deskFolio) ||
                                    (reportCodeInt == global.reportList.dailyFolioTransaction) || (reportCodeInt == global.reportList.monthlyFolioTransaction) || (reportCodeInt == global.reportList.yearlyTransaction) ||
                                    (reportCodeInt == global.reportList.chargeList) || (reportCodeInt == global.reportList.dailyChargeList) || (reportCodeInt == global.reportList.monthlyChargeList) || (reportCodeInt == global.reportList.yearlyChargeList) ||
                                    (reportCodeInt == global.reportList.cashierReport) || (reportCodeInt == global.reportList.cashierReportReprint) || (reportCodeInt == global.reportList.cashSummaryReport) ||
                                    (reportCodeInt == global.reportList.paymentList) || (reportCodeInt == global.reportList.dailyPaymentList) || (reportCodeInt == global.reportList.monthlyPaymentList) || (reportCodeInt == global.reportList.yearlyPaymentList) ||
                                    (reportCodeInt == global.reportList.dailySales) || (reportCodeInt == global.reportList.transactionByStaff) || (reportCodeInt == global.reportList.taxBreakdownDetailed) || (reportCodeInt == global.reportList.voidList) ||

                                    (reportCodeInt == global.reportList.roomRate) || (reportCodeInt == global.reportList.package) || (reportCodeInt == global.reportList.roomStatus) ||

                                    (reportCodeInt == global.reportList.company) || (reportCodeInt == global.reportList.phoneBook) ||

                                    (reportCodeInt == global.reportList.logUser) || (reportCodeInt == global.reportList.logShift) || (reportCodeInt == global.reportList.logMoveRoom) ||
                                    (reportCodeInt == global.reportList.logTransferTransaction) || (reportCodeInt == global.reportList.logSpecialAccess) || (reportCodeInt == global.reportList.keyLockHistory) ||
                                    (reportCodeInt == global.reportList.logVoidTransaction) || (reportCodeInt == global.reportList.logVoidTransaction) || (reportCodeInt == global.reportList.logHouseKeeping) ||
                                    (reportCodeInt == global.reportList.logPABX)
                                    )">
                            <ReportFilter1 ref=ReportFilter1 :reportCodeInt="reportCodeInt"></ReportFilter1>
                        </div>
                    </vs-col>
                </vs-row>
            </component>
            <vs-row>
                <vs-col class="w-full flex box-body">
                    <div v-if="(vModelLookUpIdTemplate > 0) && customizeReportAccess == 1">
                        <vs-dropdown v-if="resolutionWidth >= 900" class="customize-dropdown" vs-trigger-click>
                            <vs-button v-on:click="showReportEditor(global.modeData.edit)" class="mb-3 ml-3">{{ $t('button.costumizeTemplate') }}</vs-button>
                            <vs-dropdown-menu>
                                <vs-dropdown-item @click="showReportEditor(global.modeData.insert)"><vs-icon icon="add" size="small" color="success"></vs-icon>{{ $t('button.insertTemplate') }}</vs-dropdown-item>
                                <vs-dropdown-item @click="showReportEditor(global.modeData.edit)"><vs-icon icon="edit" size="small" color="success"></vs-icon>{{ $t('button.editTemplate') }}</vs-dropdown-item>
                                <vs-dropdown-item @click="showReportEditor(global.modeData.duplicate)"><vs-icon icon="content_copy" size="small" color="blue"></vs-icon>{{ $t('button.duplicateTemplate') }}</vs-dropdown-item>
                                <vs-dropdown-item @click="showReportEditor(global.modeData.delete)" color="danger"><vs-icon icon="delete_forever" size="small" color="danger"></vs-icon>{{ $t('button.removeTemplate') }}</vs-dropdown-item>
                            </vs-dropdown-menu>
                        </vs-dropdown>
                    </div>
                    <vs-button class="ml-auto mr-3 mb-3" vs-align="flex-end" v-on:click="previewReport()"  color="primary" type="filled">{{ $t('button.preview') }}</vs-button>
                </vs-col>
            </vs-row>
        </vs-prompt>
        <vs-prompt class="dialog-second editor-report" :id="secondDialog" :type="global.dialog.typeDialog" :active.sync="showModalSecond" :buttons-hidden="true" :title="$t('report.title.templateEditor')">
            <component :is="scrollbarTag" class="scroll-area p-4" :settings="global.perfectScrollbarSettings">
                <ReportEditor ref=ReportEditor @showReportEditor="showReportEditor()" @closeModalReport="closeModalReport()" :modeDataEditor="this.modeDataEditor" :idLogTemplate="vModelLookUpIdTemplate" :reportCodeInt="reportCodeInt"></ReportEditor>
            </component>
        </vs-prompt>
        <report ref=report></report>
        <dialog-second ref="dialogsecond"></dialog-second>
    </div>
</template>

<script>

import { formatDateDatabase, capitalize } from '@/utils/format.js';
import $alert from '@/utils/alert.js';
import DatePicker from 'vue2-datepicker';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { VTree, VSelectTree } from 'vue-tree-halower';
import moment from 'moment';
import Report from '@/views/pages/components/report/Template.vue';
import DialogSecond from '@/views/pages/components/DialogSecond.vue';
import ReportResource from '@/api/report.js';
import UserSettingResource from '@/api/tools/user-setting/userSetting.js';
import ReportFilter1 from './components/report-filter1.vue';
import ReportEditor from './components/ReportEditor.vue';

const userSettingResource = new UserSettingResource();
const reportResource = new ReportResource();

export default {
    components: {
        DatePicker,
        VuePerfectScrollbar,
        VTree,
        VSelectTree,
        Report,
        ReportFilter1,
        ReportEditor,
        DialogSecond,
    },

    data() {
        return {
            // Report Editor
            modeDataEditor: 0,
            isTemplateSystemDefault: true,
            vModelLookUpIdTemplate: 0,
            modalTitle: '',
            showModal: false,
            showModalSecond: false,
            firstDialog: 'firstDialog',
            secondDialog: 'secondDialog',
            reportCodeInt: 0,
            reportFileName: '',
            searchword: '',
            treeData: [],
            // PopUp
            vModelOptions: 1,
            vModelDateSelected: '',
            vModelDateStart: '',
            vModelDateEnd: '',
            vModelLookUp: {},
            vModelReservation: '',
            dataLookUpOptionDate: [],
            dataLookUpTemplate: [],
            dataLookUpYear: [],
            dataLookUpWeek: [],
            dataLookUpMonth: [
                { text: '1', value: '1' },
                { text: '2', value: '2' },
                { text: '3', value: '3' },
                { text: '4', value: '4' },
                { text: '5', value: '5' },
                { text: '6', value: '6' },
                { text: '7', value: '7' },
                { text: '8', value: '8' },
                { text: '9', value: '9' },
                { text: '10', value: '10' },
                { text: '11', value: '11' },
                { text: '12', value: '12' },
            ],
            dataLookUpQuarter: [
                { text: 'I', value: '1' },
                { text: 'II', value: '2' },
                { text: 'III', value: '3' },
                { text: 'IV', value: '4' },
            ],
            dataLookUpSemester: [
                { text: 'I', value: '1' },
                { text: 'II', value: '2' },
            ],
            query: {
                Condition1: '',
                Condition2: '',
                Condition3: '',
                Condition4: '',
                Condition5: '',
                Condition6: '',
                Condition7: '',
                Condition8: '',
                Condition9: '',
            },
            optionDisableTemplate: false,
            optionDisable: {
                date: true,
                range: true,
                week: true,
                month: true,
                quarter: true,
                semester: true,
                year: true,
            },

            resolutionWidth: 0,
            element: 0,
            // User Access
            editReportAccess: '',
            exportReportAccess: '',
            customizeReportAccess: '',
        };
    },

    watch: {
        vModelLookUpIdTemplate() {
            this.setVariableIsSystem();
        },
    },

    beforeMount() {
    },

    methods: {
        previewReport() {
            if (this.reportCodeInt > 1000) {
                this.query.Condition1 = '';
                this.query.Condition2 = '';
                this.query.Condition3 = '';
                this.query.Condition4 = '';
                this.query.Condition5 = '';
                this.query.Condition6 = '';
                this.query.Condition7 = '';
                this.query.Condition8 = '';
                this.query.Condition9 = '';

                this.getFilterString(this.reportCodeInt);
                if (this.optionDisableTemplate) { // manual Template
                    this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportFailedLoadData'));
                } else { // Auto template From Query
                    const newTabReport = this.$router.resolve({
                        path: `/report/preview?reportId=${this.reportCodeInt}&templateID=${this.vModelLookUpIdTemplate}&dateDescription=${this.getDateDescription()
                        }&queryCondition1=${this.query.Condition1}&queryCondition2=${this.query.Condition2}&queryCondition3=${this.query.Condition3}&queryCondition4=${this.query.Condition4
                        }&queryCondition5=${this.query.Condition5}&queryCondition6=${this.query.Condition6}&queryCondition7=${this.query.Condition7}&queryCondition8=${this.query.Condition8
                        }&queryCondition9=${this.query.Condition9}`,
                    });
                    window.open(newTabReport.href, '_blank');
                }
            } else this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportFailedLoadData'));
        },

        addDialogCloseButton(elementID) {
            if (this.global.dialog.typeDialog === 'confirm') {
                const firstDialog = document.getElementById(elementID);
                if (firstDialog !== null) {
                    const headerDialog = firstDialog.getElementsByClassName('vs-dialog');

                    const vm = this;
                    const newElement = document.createElement('i');
                    newElement.className = 'vs-icon notranslate icon-scale vs-dialog-cancel vs-dialog-cancel--icon notranslate material-icons null';
                    newElement.id = elementID;
                    newElement.innerText = 'close';
                    newElement.addEventListener('click', () => {
                        vm.showModal = vm.showModalSecond;
                        vm.showModalSecond = false;
                    });
                    headerDialog[0].children[0].appendChild(newElement);
                }
            }
        },

        async setVariableIsSystem() {
            const { data } = await reportResource.isTemplateSystemDefault({ id_log: this.vModelLookUpIdTemplate });
            this.isTemplateSystemDefault = (data.is_system == '-1');
        },

        async showReportEditor(modeDataEditor) {
            if (modeDataEditor == this.global.modeData.edit && this.isTemplateSystemDefault && this.global.userInfo.groupCode != 'SYSTEM') {
                this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportCanNotEditTemplate'));
            } else if (modeDataEditor == this.global.modeData.delete) {
                if (this.isTemplateSystemDefault && this.global.userInfo.groupCode != 'SYSTEM') {
                    this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportCanNotDeleteTemplate'));
                } else {
                    const params = { id_log: this.vModelLookUpIdTemplate, user_id: this.global.userInfo.code };
                    await reportResource.deleteTemplateReport(params);
                    $alert.deleteAlertSuccess();
                    this.showModal = false;
                }
            } else {
                this.modeDataEditor = modeDataEditor;
                this.showModalSecond = !this.showModalSecond;
                this.$nextTick(() => {
                    this.addDialogCloseButton(this.secondDialog);
                });
            }
        },

        closeModalReport() {
            if (this.showModal) {
                this.showModal = false;
            }
        },

        getFilterString(reportCode) {
            if (reportCode == this.global.reportList.guestInHouseListing) {
                this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
            } else if (reportCode == this.global.reportList.guestInHouseForecast) {
                this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
                this.query.Condition2 = this.query.Condition1;

                // Filter Individual and Group //1=All 2=Individual 3=Group
                const optionSelect = this.$refs.ReportFilter1.vModelGuestType;
                if (optionSelect == 2) {
                    this.query.Condition1 = `${this.query.Condition1} AND reservation.group_code=""`;
                    this.query.Condition2 = `${this.query.Condition2} AND folio.group_code=""`;
                } else if (optionSelect == 3) {
                    if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND reservation.group_code<>""`;
                        this.query.Condition2 = `${this.query.Condition2} AND folio.group_code<>""`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND reservation.group_code="${this.$refs.ReportFilter1.vModelLookUp.guestGroup}"`;
                        this.query.Condition2 = `${this.query.Condition2} AND folio.group_code="${this.$refs.ReportFilter1.vModelLookUp.guestGroup}"`;
                    }
                }
                // Filter Company
                const companyCode = this.$refs.ReportFilter1.vModelLookUp.company;
                if (companyCode != null && companyCode != undefined) {
                    this.query.Condition1 = `${this.query.Condition1} AND contact_person.company_code="${companyCode}"`;
                    this.query.Condition2 = `${this.query.Condition2} AND contact_person.company_code="${companyCode}"`;
                }
                this.query.Condition1 = `${this.query.Condition1} AND reservation.status_code="${this.global.reservationStatus.new}"`;
                this.query.Condition2 = `${this.query.Condition2} AND folio.status_code<>"${this.global.folioStatus.cancelCheckIn}" AND folio.type_code="${this.global.folioType.guestFolio}"`;
            } else if ((reportCode == this.global.reportList.reservationList) || (reportCode == this.global.reportList.waitListReservation) || (reportCode == this.global.reportList.cancelledReservation) || (reportCode == this.global.reportList.noShowReservation) || (reportCode == this.global.reportList.voidedReservation)
                || (reportCode == this.global.reportList.groupReservation) || (reportCode == this.global.reportList.expectedArrival) || (reportCode == this.global.reportList.arrivalList) || (reportCode == this.global.reportList.samedayReservation) || (reportCode == this.global.reportList.balanceDeposit)
                // Front Desk
                || (reportCode == this.global.reportList.currentInHouse) || (reportCode == this.global.reportList.guestInHouse) || (reportCode == this.global.reportList.guestInHousebyBusinessSource) || (reportCode == this.global.reportList.guestInHousebyMarket) || (reportCode == this.global.reportList.guestInHousebyBookingSource) || (reportCode == this.global.reportList.guestInHousebyGuestType)
                || (reportCode == this.global.reportList.guestInHousebyCountry) || (reportCode == this.global.reportList.guestInHousebyState) || (reportCode == this.global.reportList.guestInHousebyCity) || (reportCode == this.global.reportList.guestInHousebyNationality)
                || (reportCode == this.global.reportList.folioList) || (reportCode == this.global.reportList.masterFolio) || (reportCode == this.global.reportList.deskFolio)
                || (reportCode == this.global.reportList.complimentGuest) || (reportCode == this.global.reportList.houseUseGuest)) {
                if ((reportCode == this.global.reportList.expectedArrival) || (reportCode == this.global.reportList.arrivalList) || (reportCode == this.global.reportList.samedayReservation)
                    || (reportCode == this.global.reportList.folioList) || (reportCode == this.global.reportList.masterFolio) || (reportCode == this.global.reportList.deskFolio)) {
                    this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.arrival)');
                } else if ((reportCode == this.global.reportList.cancelledReservation) || (reportCode == this.global.reportList.noShowReservation) || (reportCode == this.global.reportList.voidedReservation)) {
                    this.query.Condition1 = this.getDateCondition11('DATE(reservation.cancel_date)');
                } else if (reportCode == this.global.reportList.currentInHouse) {
                    this.query.Condition1 = '';
                } else if ((reportCode == this.global.reportList.guestInHouse) || (reportCode == this.global.reportList.guestInHousebyBusinessSource) || (reportCode == this.global.reportList.guestInHousebyMarket) || (reportCode == this.global.reportList.guestInHousebyBookingSource) || (reportCode == this.global.reportList.guestInHousebyGuestType)
                    || (reportCode == this.global.reportList.guestInHousebyCountry) || (reportCode == this.global.reportList.guestInHousebyState) || (reportCode == this.global.reportList.guestInHousebyCity) || (reportCode == this.global.reportList.guestInHousebyNationality)
                    || (reportCode == this.global.reportList.complimentGuest) || (reportCode == this.global.reportList.houseUseGuest)) {
                    this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
                } else if (reportCode == this.global.reportList.balanceDeposit) {
                    this.query.Condition1 = this.getDateCondition13('DATE(guest_deposit.audit_date)');
                } else {
                    this.query.Condition1 = this.getDateCondition11('DATE(reservation.audit_date)');
                }
                // Filter Individual and Group //1=All 2=Individual 3=Group
                const optionSelect = this.$refs.ReportFilter1.vModelGuestType;
                if (optionSelect == 2) {
                    if ((reportCode == this.global.reportList.currentInHouse) || (reportCode == this.global.reportList.guestInHouse) || (reportCode == this.global.reportList.guestInHousebyBusinessSource)
                        || (reportCode == this.global.reportList.guestInHousebyMarket) || (reportCode == this.global.reportList.guestInHousebyGuestType)
                        || (reportCode == this.global.reportList.guestInHousebyCountry) || (reportCode == this.global.reportList.guestInHousebyState) || (reportCode == this.global.reportList.guestInHousebyCity)
                        || (reportCode == this.global.reportList.complimentGuest) || (reportCode == this.global.reportList.houseUseGuest)) {
                        if (reportCode == this.global.reportList.currentInHouse) {
                            this.query.Condition1 = `${this.query.Condition1}IFNULL(folio.group_code,"")="" `;
                        } else {
                            this.query.Condition1 = `${this.query.Condition1} AND IFNULL(guest_in_house.group_code,"")="" `;
                        }
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND IFNULL(reservation.group_code,"")="" `;
                    }
                }
                if (optionSelect == 3) {
                    if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
                        if ((reportCode == this.global.reportList.currentInHouse) || (reportCode == this.global.reportList.guestInHouse) || (reportCode == this.global.reportList.guestInHousebyBusinessSource)
                            || (reportCode == this.global.reportList.guestInHousebyMarket) || (reportCode == this.global.reportList.guestInHousebyGuestType)
                            || (reportCode == this.global.reportList.guestInHousebyCountry) || (reportCode == this.global.reportList.guestInHousebyState) || (reportCode == this.global.reportList.guestInHousebyCity)
                            || (reportCode == this.global.reportList.complimentGuest) || (reportCode == this.global.reportList.houseUseGuest)) {
                            if (reportCode == this.global.reportList.currentInHouse) {
                                this.query.Condition1 = `${this.query.Condition1} IFNULL(folio.group_code,"")<>"" `;
                            } else {
                                this.query.Condition1 = `${this.query.Condition1} AND IFNULL(guest_in_house.group_code,"")<>"" `;
                            }
                        } else {
                            this.query.Condition1 = `${this.query.Condition1} AND IFNULL(reservation.group_code,"")<>"" `;
                        }
                    } else if ((reportCode == this.global.reportList.currentInHouse) || (reportCode == this.global.reportList.guestInHouse) || (reportCode == this.global.reportList.guestInHousebyBusinessSource)
                            || (reportCode == this.global.reportList.guestInHousebyMarket) || (reportCode == this.global.reportList.guestInHousebyGuestType)
                            || (reportCode == this.global.reportList.guestInHousebyCountry) || (reportCode == this.global.reportList.guestInHousebyState) || (reportCode == this.global.reportList.guestInHousebyCity)
                            || (reportCode == this.global.reportList.complimentGuest) || (reportCode == this.global.reportList.houseUseGuest)) {
                        if (reportCode == this.global.reportList.currentInHouse) {
                            this.query.Condition1 = `${this.query.Condition1} IFNULL(folio.group_code,"")="${this.$refs.ReportFilter1.vModelLookUp.guestGroup}" `;
                        } else {
                            this.query.Condition1 = `${this.query.Condition1} AND IFNULL(guest_in_house.group_code,"")="${this.$refs.ReportFilter1.vModelLookUp.guestGroup}" `;
                        }
                    } else if ((reportCode != this.global.reportList.folioList) && (reportCode != this.global.reportList.masterFolio) && (reportCode != this.global.reportList.deskFolio)) {
                        this.query.Condition1 = `${this.query.Condition1} AND IFNULL(reservation.group_code,"")="${this.$refs.ReportFilter1.vModelLookUp.guestGroup}" `;
                    }
                }

                // Exculde House Use on Guest In House
                const { showHouseUse } = this.$refs.ReportFilter1.checkBox;
                if ((reportCode == this.global.reportList.guestInHouse) || (reportCode == this.global.reportList.guestInHousebyBusinessSource) || (reportCode == this.global.reportList.guestInHousebyMarket) || (reportCode == this.global.reportList.guestInHousebyBookingSource) || (reportCode == this.global.reportList.guestInHousebyGuestType)
                    || (reportCode == this.global.reportList.guestInHousebyCountry) || (reportCode == this.global.reportList.guestInHousebyState) || (reportCode == this.global.reportList.guestInHousebyCity) || (reportCode == this.global.reportList.guestInHousebyNationality)) {
                    if (!showHouseUse) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_in_house.compliment_hu<>"${this.global.roomStatus.houseUse}"`;
                    }
                } else if (reportCode == this.global.reportList.complimentGuest) {
                    this.query.Condition1 = `${this.query.Condition1} AND guest_in_house.compliment_hu="${this.global.roomStatus.compliment}"`;
                } else if (reportCode == this.global.reportList.houseUseGuest) {
                    this.query.Condition1 = `${this.query.Condition1} AND guest_in_house.compliment_hu="${this.global.roomStatus.houseUse}"`;
                }

                // Filter Status Reservation
                if ((reportCode == this.global.reportList.reservationList) || (reportCode == this.global.reportList.groupReservation)) {
                    const guestStatusCode = this.$refs.ReportFilter1.vModelLookUp.constGuestStatus;
                    if (guestStatusCode != null || guestStatusCode != undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND reservation.status_code="${guestStatusCode}"`;
                    }
                } else if (reportCode == this.global.reportList.waitListReservation) {
                    this.query.Condition1 = `${this.query.Condition1} AND reservation.status_code="${this.global.reservationStatus.waitList}"`;
                } else if (reportCode == this.global.reportList.cancelledReservation) {
                    this.query.Condition1 = `${this.query.Condition1} AND reservation.status_code="${this.global.reservationStatus.cancel}"`;
                } else if (reportCode == this.global.reportList.noShowReservation) {
                    this.query.Condition1 = `${this.query.Condition1} AND reservation.status_code="${this.global.reservationStatus.noShow}"`;
                } else if (reportCode == this.global.reportList.voidedReservation) {
                    this.query.Condition1 = `${this.query.Condition1} AND reservation.status_code="${this.global.reservationStatus.void}"`;
                } else if (reportCode == this.global.reportList.expectedArrival) {
                    this.query.Condition1 = `${this.query.Condition1} AND reservation.status_code="${this.global.reservationStatus.new}"`;
                } else if (reportCode == this.global.reportList.arrivalList) {
                    this.query.Condition1 = `${this.query.Condition1} AND (IFNULL(reservation.status_code,"")="" OR reservation.status_code="${this.global.reservationStatus.checkIn}" OR reservation.status_code="${this.global.reservationStatus.checkOut}")`;
                } else if (reportCode == this.global.reportList.samedayReservation) {
                    this.query.Condition1 = `${this.query.Condition1} AND (reservation.status_code="${this.global.reservationStatus.checkIn}" OR reservation.status_code="${this.global.reservationStatus.checkOut}")`;
                } else if (reportCode == this.global.reportList.balanceDeposit) {
                    this.query.Condition1 = `${this.query.Condition1} AND reservation.status_code<>"${this.global.reservationStatus.void}"`;
                }
                // Filter Arrival List
                if (reportCode == this.global.reportList.arrivalList) {
                    const optionArrival = this.$refs.ReportFilter1.vModelOptionArrivalList;
                    if (optionArrival == 2) {
                        this.query.Condition1 = `${this.query.Condition1} AND folio.reservation_number<>"0"`;
                    } else if (optionArrival == 3) {
                        this.query.Condition1 = `${this.query.Condition1} AND folio.reservation_number="0"`;
                    }
                    // User ID
                    const userCode = this.$refs.ReportFilter1.vModelLookUp.user;
                    if (userCode != null && userCode != undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND folio.insert_by="${userCode}"`;
                    }
                }

                // Filter Business Source
                const { businessSource } = this.$refs.ReportFilter1.vModelLookUp;
                if (businessSource != null && businessSource != undefined) {
                    if (reportCode == this.global.reportList.guestInHousebyBusinessSource) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_detail.business_source_code="${businessSource}"`;
                    }
                }

                // Filter Company
                const companyCode = this.$refs.ReportFilter1.vModelLookUp.company;
                if (companyCode != null && companyCode != undefined) {
                    if (reportCode == this.global.reportList.guestInHouse) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_in_house.company_code="${companyCode}"`;
                    } else if ((reportCode == this.global.reportList.expectedArrival) || (reportCode == this.global.reportList.arrivalList) || (reportCode == this.global.reportList.reservationList)) {
                        this.query.Condition1 = `${this.query.Condition1} AND contact_person.company_code="${companyCode}"`;
                    }
                }

                // Filter Guest Deposit
                if ((reportCode == this.global.reportList.reservationList) || (reportCode == this.global.reportList.cancelledReservation) || (reportCode == this.global.reportList.noShowReservation)
                    || (reportCode == this.global.reportList.voidedReservation) || (reportCode == this.global.reportList.groupReservation)
                    || (reportCode == this.global.reportList.samedayReservation) || (reportCode == this.global.reportList.balanceDeposit) || (reportCode == this.global.reportList.waitListReservation)) {
                    this.query.Condition1 = `${this.query.Condition1} AND IFNULL(guest_deposit.void, "0")="0" AND IFNULL(guest_deposit.system_code, "${this.global.constProgramVariable.defaultSystemCode}")="${this.global.constProgramVariable.defaultSystemCode}"`;
                }

                // Filter Market
                const { market } = this.$refs.ReportFilter1.vModelLookUp;
                if (reportCode == this.global.reportList.guestInHousebyMarket) {
                    if (market != null && market != undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_in_house.market_code="${market}"`;
                    }
                }

                // Filter Booking Source
                const { bookingSource } = this.$refs.ReportFilter1.vModelLookUp;
                if (reportCode == this.global.reportList.guestInHousebyBookingSource) {
                    if (bookingSource != null && bookingSource != undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_in_house.booking_source_code="${bookingSource}"`;
                    }
                }

                // Filter Nationality
                const { nationality } = this.$refs.ReportFilter1.vModelLookUp;
                if (reportCode == this.global.reportList.guestInHousebyNationality) {
                    if (market != null && market != undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_in_house.nationality_code="${nationality}"`;
                    }
                }

                // Filter Folio Status
                const folioStatusOpen = this.$refs.ReportFilter1.checkBox.folioStatusClosed;
                const { folioStatusClosed } = this.$refs.ReportFilter1.checkBox;
                if ((reportCode == this.global.reportList.folioList) || (reportCode == this.global.reportList.masterFolio) || (reportCode == this.global.reportList.deskFolio)) {
                    if (folioStatusOpen) {
                        if (folioStatusClosed) {
                            this.query.Condition1 = `${this.query.Condition1} AND (folio.status_code="${this.global.folioStatus.open}" OR folio.status_code="${this.global.folioStatus.closed}")`;
                        } else {
                            this.query.Condition1 = `${this.query.Condition1} AND folio.status_code="${this.global.folioStatus.open}"`;
                        }
                    } else if (folioStatusClosed) {
                        this.query.Condition1 = `${this.query.Condition1} AND folio.status_code="${this.global.folioStatus.closed}"`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND folio.status_code="X"`;
                    }
                }
            } else if (reportCode == this.global.reportList.guestList) {
                this.query.Condition1 = this.getDateCondition21('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
            } else if (reportCode == this.global.reportList.incognitoGuest) {
                this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
            } else if (reportCode == this.global.reportList.earlyCheckIn) {
                this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');

                let { checkOutLimit } = this.$store.state.configurations.reservation;
                checkOutLimit = checkOutLimit.replace('.', ':');
                this.query.Condition1 = `${this.query.Condition1} AND TIME(guest_detail.arrival)<"${checkOutLimit}"`;

                // Filter Individual and Group //1=All 2=Individual 3=Group
                const optionSelect = this.$refs.ReportFilter1.vModelGuestType;
                if (optionSelect == 2) {
                    this.query.Condition1 = `${this.query.Condition1} AND IFNULL(folio.group_code,"")=""`;
                } else if (optionSelect == 3) {
                    if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND IFNULL(folio.group_code,"")<>""`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND IFNULL(folio.group_code,"")="${this.$refs.ReportFilter1.vModelLookUp.guestGroup}"`;
                    }
                }
                // Filter Company
                const companyCode = this.$refs.ReportFilter1.vModelLookUp.company;
                if (companyCode != null && companyCode != undefined) {
                    this.query.Condition1 = `${this.query.Condition1} AND contact_person.company_code="${companyCode}"`;
                }
            } else if ((reportCode == this.global.reportList.dayUse) || (reportCode == this.global.reportList.earlyDeparture)
                || (reportCode == this.global.reportList.expectedDeparture) || (reportCode == this.global.reportList.extendedDeparture) || (reportCode == this.global.reportList.departureList)
                || (reportCode == this.global.reportList.actualDepartureGuestList)) {
                this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)');
                // Filter Individual and Group //1=All 2=Individual 3=Group
                const optionSelect = this.$refs.ReportFilter1.vModelGuestType;
                if (optionSelect == 2) {
                    this.query.Condition1 = `${this.query.Condition1} AND IFNULL(folio.group_code,"")=""`;
                } else if (optionSelect == 3) {
                    if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND IFNULL(folio.group_code,"")<>""`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND IFNULL(folio.group_code,"")="${this.$refs.ReportFilter1.vModelLookUp.guestGroup}"`;
                    }
                }
                // Filter Company
                const companyCode = this.$refs.ReportFilter1.vModelLookUp.company;
                if (companyCode != null && companyCode != undefined) {
                    this.query.Condition1 = `${this.query.Condition1} AND contact_person.company_code="${companyCode}"`;
                }
            } else if ((reportCode == this.global.reportList.advancedPaymentDeposit) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport)
                || ((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.cashierReport))
                || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                || (reportCode == this.global.reportList.dailySales) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)
                || (reportCode == this.global.reportList.voidList)) {
                // Filter Date
                if (reportCode == this.global.reportList.advancedPaymentDeposit) {
                    this.query.Condition1 = this.getDateCondition11('guest_deposit.audit_date');
                } else if (reportCode == this.global.reportList.voidList) {
                    this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.void_date)');
                } else {
                    this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
                }

                if (reportCode == this.global.reportList.dailySales) {
                    this.query.Condition2 = this.getDateCondition1MTD('sub_folio.audit_date');
                    this.query.Condition3 = `${this.getDateCondition1YTD('sub_folio.audit_date')} AND cfg_init_account.sub_group_code<>"${this.global.subGroupAccount.accountPayable}"`;
                    this.query.Condition4 = this.getDateCondition11('guest_deposit.audit_date');
                    this.query.Condition5 = this.getDateCondition1MTD('guest_deposit.audit_date');
                    this.query.Condition6 = `${this.getDateCondition1YTD('guest_deposit.audit_date')} AND cfg_init_account.sub_group_code<>"${this.global.subGroupAccount.accountPayable}"`;
                } else if (reportCode == this.global.reportList.voidList) {
                    this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.void_date)');
                } else if (((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.yearlyTransaction))
                    || ((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList))
                    || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                    || (reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                    this.query.Condition2 = this.getDateCondition11('guest_deposit.audit_date');
                }

                // Charge Condition
                this.query.Condition7 = this.query.Condition1;
                this.query.Condition8 = this.query.Condition2;

                if ((reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                    // if (ProgramConfiguration.ShowTransferOnCashierReport) {
                    if (true) {
                        this.query.Condition1 = `${this.query.Condition1
                        } AND (cfg_init_account_sub_group.group_code="${this.global.groupAccount.payment}"`
                            + ` OR (sub_folio.account_code="${this.$store.state.configurations.globalAccount.transferCharge}" AND sub_folio.type_code="${this.global.transactionType.credit}" AND sub_folio.is_correction="0")`
                            + ` OR (sub_folio.account_code="${this.$store.state.configurations.globalAccount.transferCharge}" AND sub_folio.is_correction="-1"))`;
                        this.query.Condition2 = `${this.query.Condition2
                        } AND (cfg_init_account_sub_group.group_code="${this.global.groupAccount.payment}"`
                            + ` OR (guest_deposit.account_code="${this.$store.state.configurations.globalAccount.transferCharge}" AND guest_deposit.type_code="${this.global.transactionType.credit}" AND guest_deposit.is_correction="0")`
                            + ` OR (guest_deposit.account_code="${this.$store.state.configurations.globalAccount.transferCharge}" AND guest_deposit.is_correction="-1"))`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND cfg_init_account_sub_group.group_code="${this.global.groupAccount.payment}"`;
                        this.query.Condition2 = `${this.query.Condition2} AND cfg_init_account_sub_group.group_code="${this.global.groupAccount.payment}"`;
                    }
                }

                if (reportCode == this.global.reportList.advancedPaymentDeposit) {
                    this.query.Condition1 = `${this.query.Condition1} AND IFNULL(guest_deposit.void, "0")="0" AND IFNULL(guest_deposit.system_code, "${this.global.constProgramVariable.defaultSystemCode}")="${this.global.constProgramVariable.defaultSystemCode}"`;
                }

                // Filter User ID
                const userId = this.$refs.ReportFilter1.vModelLookUp.user;
                if (userId != '' && userId != undefined && userId != null) {
                    if (reportCode == this.global.reportList.advancedPaymentDeposit) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_deposit.insert_by="${userId}"`;
                    } else if (reportCode == this.global.reportList.dailySales) {
                        this.query.Condition3 = `${this.query.Condition3} AND sub_folio.insert_by="${userId}"`;
                        this.query.Condition6 = `${this.query.Condition6} AND guest_deposit.insert_by="${userId}"`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND sub_folio.insert_by="${userId}"`;
                        this.query.Condition7 = `${this.query.Condition7} AND sub_folio.insert_by="${userId}"`;
                    }
                    if (((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.yearlyTransaction))
                        || ((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList))
                        || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                        || (reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint)
                        || (reportCode == this.global.reportList.cashSummaryReport) || (reportCode == this.global.reportList.transactionByStaff)
                        || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                        this.query.Condition2 = `${this.query.Condition2} AND guest_deposit.insert_by="${userId}"`;
                        this.query.Condition8 = `${this.query.Condition8} AND guest_deposit.insert_by="${userId}"`;
                    }
                }

                // Filter Shift
                const shiftCode = this.$refs.ReportFilter1.vModelLookUp.shift;
                if (shiftCode != '' && shiftCode != null && shiftCode != undefined) {
                    if (reportCode == this.global.reportList.advancedPaymentDeposit) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_deposit.shift="${shiftCode}"`;
                    } else if (reportCode == this.global.reportList.dailySales) {
                        this.query.Condition3 = `${this.query.Condition3} AND sub_folio.shift="${shiftCode}"`;
                        this.query.Condition6 = `${this.query.Condition6} AND guest_deposit.shift="${shiftCode}"`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND sub_folio.shift="${shiftCode}"`;
                        this.queryCondition7 = `${this.queryCondition7} AND sub_folio.shift="${shiftCode}"`;
                    }

                    if (((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.yearlyTransaction))
                    || ((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList))
                    || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                    || (reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                        this.query.Condition2 = `${this.query.Condition2} AND guest_deposit.shift="${shiftCode}"`;
                        this.query.Condition8 = `${this.query.Condition8} AND guest_deposit.shift="${shiftCode}"`;
                    }
                }

                // Filter Sub Department
                const subDepartmentCode = this.$refs.ReportFilter1.vModelLookUp.subDepartment;
                if (subDepartmentCode != '' && subDepartmentCode != null && subDepartmentCode != undefined) {
                    if (reportCode == this.global.reportList.advancedPaymentDeposit) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_deposit.sub_department_code="${subDepartmentCode}"`;
                    } else if (reportCode == this.global.reportList.dailySales) {
                        this.query.Condition3 = `${this.query.Condition3} AND sub_folio.sub_department_code="${subDepartmentCode}"`;
                        this.query.Condition6 = `${this.query.Condition6} AND guest_deposit.sub_department_code="${subDepartmentCode}"`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND sub_folio.sub_department_code="${subDepartmentCode}"`;
                        this.query.Condition7 = `${this.query.Condition7} AND sub_folio.sub_department_code="${subDepartmentCode}"`;
                    }

                    if (((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.yearlyTransaction))
                    || ((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList))
                    || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                    || (reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                        this.query.Condition2 = `${this.query.Condition2} AND guest_deposit.sub_department_code="${subDepartmentCode}"`;
                        this.query.Condition8 = `${this.query.Condition8} AND guest_deposit.sub_department_code="${subDepartmentCode}"`;
                    }
                }

                // Filter Account
                const accountCode = this.$refs.ReportFilter1.vModelLookUp.account;
                if (accountCode != '' && accountCode != null && accountCode != undefined) {
                    if (reportCode == this.global.reportList.advancedPaymentDeposit) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_deposit.account_code="${accountCode}"`;
                    } else if (((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.yearlyTransaction))
                        || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                        || (reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport)) {
                        this.query.Condition1 = `${this.query.Condition1} AND sub_folio.account_code="${accountCode}"`;
                    } else if (((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList)) || (reportCode == this.global.reportList.taxBreakdownDetailed) || (reportCode == this.global.reportList.transactionByStaff)) {
                        this.query.Condition1 = `${this.query.Condition1} AND (sub_folio.account_code="${accountCode}" OR cfg_init_account_sub_group.group_code="${this.global.groupAccount.taxService}")`;
                        this.query.Condition7 = `${this.query.Condition7} AND (sub_folio.account_code="${accountCode}" OR cfg_init_account_sub_group.group_code="${this.global.groupAccount.taxService}")`;
                    } else if (reportCode == this.global.reportList.dailySales) {
                        this.query.Condition3 = `${this.query.Condition3} AND sub_folio.account_code="${accountCode}"`;
                        this.query.Condition6 = `${this.query.Condition6} AND guest_deposit.account_code="${accountCode}"`;
                    }

                    if (((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.yearlyTransaction))
                        || ((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList))
                        || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                        || (reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                        this.query.Condition2 = `${this.query.Condition2} AND guest_deposit.account_code="${accountCode}"`;
                        this.query.Condition8 = `${this.query.Condition8} AND guest_deposit.account_code="${accountCode}"`;
                    }

                    if (((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList)) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                        this.query.Condition3 = `\`Account Code\`="${accountCode}"`;
                    }
                }

                // Filter Account Sub Group
                const accountSubGroupCode = this.$refs.ReportFilter1.vModelLookUp.accountSubGroup;
                const { showAccountPayable } = this.$refs.ReportFilter1.checkBox;
                if (accountSubGroupCode != '' && accountSubGroupCode != null && accountSubGroupCode != undefined) {
                    if (reportCode == this.global.reportList.advancedPaymentDeposit) {
                        this.query.Condition1 = `${this.query.Condition1} AND cfg_init_account.sub_group_code="${accountSubGroupCode}"`;
                    } else if (reportCode == this.global.reportList.dailySales) {
                        this.query.Condition3 = `${this.query.Condition3} AND cfg_init_account.sub_group_code="${accountSubGroupCode}"`;
                        this.query.Condition6 = `${this.query.Condition6} AND cfg_init_account.sub_group_code="${accountSubGroupCode}"`;
                    } else if (((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.yearlyTransaction))
                            || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                            || (reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                        this.query.Condition1 = `${this.query.Condition1} AND cfg_init_account.sub_group_code="${accountSubGroupCode}"`;
                        this.query.Condition7 = `${this.query.Condition7} AND cfg_init_account.sub_group_code="${accountSubGroupCode}"`;
                    } else if ((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList)) {
                        this.query.Condition1 = `${this.query.Condition1} AND cfg_init_account.sub_group_code="${accountSubGroupCode}"`;
                    }

                    if (((reportCode >= this.global.reportList.folioTransaction) && (reportCode <= this.global.reportList.yearlyTransaction))
                    || ((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList))
                    || ((reportCode >= this.global.reportList.paymentList) && (reportCode <= this.global.reportList.yearlyPaymentList))
                    || (reportCode == this.global.reportList.cashierReport) || (reportCode == this.global.reportList.cashierReportReprint) || (reportCode == this.global.reportList.cashSummaryReport) || (reportCode == this.global.reportList.transactionByStaff)) {
                        this.query.Condition2 = `${this.query.Condition2} AND cfg_init_account.sub_group_code="${accountSubGroupCode}"`;
                        this.query.Condition8 = `${this.query.Condition8} AND cfg_init_account.sub_group_code="${accountSubGroupCode}"`;
                    }

                    if (((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList)) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                        this.query.Condition3 = `\`Account Sub Group Code\`="${accountSubGroupCode}"`;
                    }
                }

                if ((reportCode >= this.global.reportList.chargeList) && (reportCode <= this.global.reportList.yearlyChargeList)) {
                    if (showAccountPayable) {
                        this.query.Condition1 = this.query.Condition1;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND cfg_init_account.sub_group_code<>"${this.global.subGroupAccount.accountPayable}"`;
                    }
                }

                // Filter Folio Type
                if (reportCode != this.global.reportList.advancedPaymentDeposit && reportCode != this.global.reportList.dailySales) {
                    this.query.ConditionGF = `folio.type_code="${this.global.folioType.guestFolio}"`;
                    this.query.ConditionMF = `folio.type_code="${this.global.folioType.masterFolio}"`;
                    this.query.ConditionDF = `folio.type_code="${this.global.folioType.deskFolio}"`;
                    const { guestFolio } = this.$refs.ReportFilter1.checkBox;
                    const { masterFolio } = this.$refs.ReportFilter1.checkBox;
                    const { deskFolio } = this.$refs.ReportFilter1.checkBox;
                    if (guestFolio) {
                        if (masterFolio) {
                            if (deskFolio) {
                                this.query.Condition1 = `${this.query.Condition1} AND (${this.query.ConditionGF} OR ${this.query.ConditionMF} OR ${this.query.ConditionDF})`;
                                this.query.Condition7 = `${this.query.Condition7} AND (${this.query.ConditionGF} OR ${this.query.ConditionMF} OR ${this.query.ConditionDF})`;
                            }
                        } else if (deskFolio) {
                            this.query.Condition1 = `${this.query.Condition1} AND (${this.query.ConditionGF} OR ${this.query.ConditionDF})`;
                            this.query.Condition7 = `${this.query.Condition7} AND (${this.query.ConditionGF} OR ${this.query.ConditionDF})`;
                        } else {
                            this.query.Condition1 = `${this.query.Condition1} AND ${this.query.ConditionGF}`;
                            this.query.Condition7 = `${this.query.Condition7} AND ${this.query.ConditionGF}`;
                        }
                    } else if (masterFolio) {
                        if (deskFolio) {
                            this.query.Condition1 = `${this.query.Condition1} AND (${this.query.ConditionMF} OR ${this.query.ConditionDF})`;
                            this.query.Condition7 = `${this.query.Condition7} AND (${this.query.ConditionMF} OR ${this.query.ConditionDF})`;
                        } else {
                            this.query.Condition1 = `${this.query.Condition1} AND ${this.query.ConditionMF}`;
                            this.query.Condition7 = `${this.query.Condition7} AND ${this.query.ConditionMF}`;
                        }
                    } else if (deskFolio) {
                        this.query.Condition1 = `${this.query.Condition1} AND ${this.query.ConditionDF}`;
                        this.query.Condition7 = `${this.query.Condition7} AND ${this.query.ConditionDF}`;
                    } else {
                        this.query.Condition1 = `${this.query.Condition1} AND folio.type_code=""`;
                        this.query.Condition7 = `${this.query.Condition7} AND folio.type_code=""`;
                    }

                    // Filter Folio Status
                    if ((reportCode != this.global.reportList.voidList) && (reportCode != this.global.reportList.advancedPaymentDeposit) && (reportCode != this.global.reportList.dailySales)) {
                        const { folioStatusOpen } = this.$refs.ReportFilter1.checkBox;
                        const { folioStatusClosed } = this.$refs.ReportFilter1.checkBox;

                        if (folioStatusOpen) {
                            if (folioStatusClosed) {
                                this.query.Condition1 = `${this.query.Condition1} AND (folio.status_code="${this.global.folioStatus.open}" OR folio.status_code="${this.global.folioStatus.closed}")`;
                                this.query.Condition7 = `${this.query.Condition7} AND (folio.status_code="${this.global.folioStatus.open}" OR folio.status_code="${this.global.folioStatus.closed}")`;
                            } else {
                                this.query.Condition1 = `${this.query.Condition1} AND folio.status_code="${this.global.folioStatus.open}"`;
                                this.query.Condition7 = `${this.query.Condition7} AND folio.status_code="${this.global.folioStatus.open}"`;
                            }
                        } else if (folioStatusClosed) {
                            this.query.Condition1 = `${this.query.Condition1} AND folio.status_code="${this.global.folioStatus.closed}"`;
                            this.query.Condition7 = `${this.query.Condition7} AND folio.status_code="${this.global.folioStatus.closed}"`;
                        } else {
                            this.query.Condition1 = `${this.query.Condition1} AND folio.status_code="X"`;
                            this.query.Condition7 = `${this.query.Condition7} AND folio.status_code="X"`;
                        }
                    }
                }

                // Filter Reservation Number
                if ((reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                    const { reservationNumber } = this.$refs.ReportFilter1;
                    if (reservationNumber > 0) {
                        this.query.Condition1 = `${this.query.Condition1} AND sub_folio.folio_number = 0 `;
                        this.query.Condition2 = `${this.query.Condition2} AND guest_deposit.reservation_number = ${reservationNumber} `;

                        this.query.Condition7 = `${this.query.Condition7} AND sub_folio.folio_number = 0 `;
                        this.query.Condition8 = `${this.query.Condition8} AND guest_deposit.reservation_number = ${reservationNumber} `;
                    }
                }

                // Filter Folio
                if ((reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                    const { folioNumber } = this.$refs.ReportFilter1;
                    if (folioNumber > 0) {
                        this.query.Condition1 = `${this.query.Condition1} AND sub_folio.folio_number = ${folioNumber} `;
                        this.query.Condition2 = `${this.query.Condition2} AND guest_deposit.reservation_number = 0 `;

                        this.query.Condition7 = `${this.query.Condition7} AND sub_folio.folio_number = ${folioNumber} `;
                        this.query.Condition8 = `${this.query.Condition8} AND guest_deposit.reservation_number = 0 `;
                    }
                }

                // Filter Business Source
                if ((reportCode == this.global.reportList.chargeList) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                    const businessSourceCode = this.$refs.ReportFilter1.vModelLookUp.businessSource;
                    if (businessSourceCode != '' && businessSourceCode != null && businessSourceCode != undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND guest_detail.business_source_code = "${businessSourceCode}" `;
                        this.query.Condition2 = `${this.query.Condition2} AND (guest_detail.business_source_code = "${businessSourceCode}"  OR guest_detail1.business_source_code = "${businessSourceCode}") `;

                        this.query.Condition7 = `${this.query.Condition7} AND guest_detail.business_source_code = "${businessSourceCode}" `;
                        this.query.Condition8 = `${this.query.Condition8} AND (guest_detail.business_source_code = "${businessSourceCode}"  OR guest_detail1.business_source_code = "${businessSourceCode}") `;
                    }
                }
                // //Filter Company
                if ((reportCode == this.global.reportList.chargeList) || (reportCode == this.global.reportList.transactionByStaff) || (reportCode == this.global.reportList.taxBreakdownDetailed)) {
                    const companyCode = this.$refs.ReportFilter1.vModelLookUp.company;
                    if (companyCode != '' && companyCode != null && companyCode != undefined) {
                        this.query.Condition1 = `${this.query.Condition1} AND contact_person.company_code = "${companyCode}" `;
                        this.query.Condition2 = `${this.query.Condition2} AND (contact_person.company_code = "${companyCode}" OR contact_person1.company_code = "${companyCode}") `;

                        this.query.Condition7 = `${this.query.Condition7} AND contact_person.company_code = "${companyCode}" `;
                        this.query.Condition8 = `${this.query.Condition8} AND (contact_person.company_code = "${companyCode}" OR contact_person1.company_code = "${companyCode}") `;
                    }
                }
            } else if (reportCode == this.global.reportList.exportCSVbyDepartureDate) {
                this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)');
            } else if (reportCode == this.global.reportList.roomSalesbyRoomNumber) {
                this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
                this.query.Condition2 = this.getDateCondition11('folio.check_out_date');
                this.query.Condition3 = this.getDateCondition21('DATE(room_unavailable.from_date)', 'DATE(room_unavailable.to_date)');
            } else if (reportCode == this.global.reportList.todayRoomRevenueBreakDown) {
                this.query.Condition1 = ` AND ${this.getDateCondition23(' DATE(guest_detail.arrival)', 'DATE(guest_detail.departure) ')}`;
            } else if (reportCode == this.global.reportList.breakfastControl) {
                this.query.Condition1 = this.getDateCondition11('ADDDATE(guest_in_house.audit_date, INTERVAL 1 DAY)');
            } else if (reportCode == this.global.reportList.paymentBySubDepartment || reportCode == this.global.reportList.paymentByAccount) {
                this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
                this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.audit_date)');
            } else if (reportCode == this.global.reportList.revenueBySubDepartment) {
                this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
                this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.audit_date)');
            } else if (reportCode == this.global.reportList.packageSales) {
                this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
            } else if (reportCode == this.global.reportList.guestLedger || reportCode == this.global.reportList.guestDeposit || reportCode == this.global.reportList.guestAccount) {
                const dateCondition = this.getDateCondition01();
                this.query.Condition1 = ` DATE(guest_detail.departure)>"${dateCondition}"`
                                        + ` AND sub_folio.audit_date<="${dateCondition}"`
                                        + ' AND sub_folio.audit_date<DATE(guest_detail.departure)';
                if (reportCode == this.global.reportList.guestLedger) {
                    this.query.Condition1 = `${this.query.Condition1
                    } AND ((cfg_init_account_sub_group.group_code="${this.global.groupAccount.charge}" OR cfg_init_account_sub_group.group_code="${this.global.groupAccount.taxService}") OR (cfg_init_account_sub_group.group_code="${this.global.groupAccount.transfer}" AND sub_folio.account_code="${this.$store.state.configurations.globalAccount.transferCharge}"))`;
                } else if (reportCode == this.global.reportList.guestDeposit) {
                    this.query.Condition1 = `${this.query.Condition1
                    } AND (cfg_init_account_sub_group.group_code="${this.global.groupAccount.payment}" OR (cfg_init_account_sub_group.group_code="${this.global.groupAccount.transfer}" AND (sub_folio.account_code="${this.$store.state.configurations.globalAccount.transferDepositReservationToFolio}" OR sub_folio.account_code="${this.$store.state.configurations.globalAccount.transferPayment}")))`;
                } else if (reportCode == this.global.reportList.guestLedger) {
                    this.query.Condition1 = `${this.query.Condition1
                    } AND (cfg_init_account_sub_group.group_code<>"${this.global.groupAccount.transfer}" OR (cfg_init_account_sub_group.group_code="${this.global.groupAccount.transfer}" AND sub_folio.account_code<>"${this.$store.state.configurations.globalAccount.transferDepositReservation}"))`;
                }
            } else if (reportCode == this.global.reportList.dailyRevenueReport) {
                this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
                this.query.Condition2 = this.getDateCondition1MTD('sub_folio.audit_date');
                this.query.Condition3 = this.getDateCondition1YTD('sub_folio.audit_date');
                this.query.Condition4 = this.getDateCondition11('guest_deposit.audit_date');
                this.query.Condition5 = this.getDateCondition1MTD('guest_deposit.audit_date');
                this.query.Condition6 = this.getDateCondition1YTD('guest_deposit.audit_date');
            } else if (reportCode == this.global.reportList.correction) {
                this.query.Condition1 = this.getDateCondition11('guest_deposit.audit_date');
                this.query.Condition2 = this.getDateCondition11('sub_folio.audit_date');
            } else if (reportCode == this.global.reportList.cancelCheckIn) {
                this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)');
            } else if (reportCode == this.global.reportList.lostandFound) {
                this.query.Condition1 = this.getDateCondition11('DATE(date_posting)');
            } else if (reportCode == this.global.reportList.cancelCheckOut) {
                this.query.Condition1 = this.getDateCondition11('DATE(log_user.actual_date)');
            } else if (reportCode == this.global.reportList.voucher) {
                this.query.Condition1 = this.getDateCondition11('DATE(issued_date)');
            } else if (reportCode == this.global.reportList.voucherSRC) {
                this.query.Condition1 = this.getDateCondition11('IFNULL(acc_journal.`date`, "0000-00-00")');
            } else if (reportCode == this.global.reportList.roomRate) {
                const { status } = this.$refs.ReportFilter1.radios;
                // 1=All 2= Active 3= Non Active
                if (status == 2) {
                    this.query.Condition1 = ' cfg_init_room_rate.is_active = "-1"';
                } else if (status == 3) {
                    this.query.Condition1 = ' cfg_init_room_rate.is_active = "0"';
                }
            } else if (reportCode == this.global.reportList.package) {
                const { status } = this.$refs.ReportFilter1.radios;
                // 1=All 2= Active 3= Non Active
                if (status == 2) {
                    this.query.Condition1 = ' cfg_init_package.is_active = "-1"';
                } else if (status == 3) {
                    this.query.Condition1 = ' cfg_init_package.is_active = "0"';
                }
            } else if (reportCode == this.global.reportList.roomUnavailable) {
                this.query.Condition1 = this.getDateCondition21('room_unavailable.from_date', 'room_unavailable.to_date');
            } else if (reportCode == this.global.reportList.roomRevenue) {
                this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
                this.query.Condition1 = `${this.query.Condition1} AND cfg_init_account.sub_group_code="${this.global.subGroupAccount.room}" AND IFNULL(cfg_init_room.owner_code,"")<>""`;
            } else if (reportCode == this.global.reportList.roomHistory) {
                this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
                this.query.Condition2 = this.getDateCondition11('room_unavailable_history.audit_date');
            } else if (reportCode == this.global.reportList.roomStatus) {
                this.query.Condition1 = this.getDateConditionAuditDate2('DATE(from_date)', 'DATE(to_date)');

                const { roomStatus } = this.$refs.ReportFilter1.vModelLookUp;
                if (roomStatus != undefined && roomStatus != null) {
                    if ((roomStatus == this.global.roomStatus.dontDisturb) || (roomStatus == this.global.roomStatus.doubleLock) || (roomStatus == this.global.roomStatus.sleepOut)) {
                        this.query.Condition2 = `\`Status Code Mix\`="O" AND \`Status Occupied Code\`="${roomStatus}"`;
                    } else if (roomStatus == this.global.roomStatus.vacant) {
                        this.query.Condition2 = '`Status Code Mix`="V"';
                    } else if (roomStatus == this.global.roomStatus.occupied) {
                        this.query.Condition2 = '`Status Code Mix`="O"';
                    } else if (roomStatus == this.global.roomStatus.houseUse) {
                        this.query.Condition2 = `\`CPHUStatus\`="${this.global.roomStatus.houseUse}"`;
                    } else if (roomStatus == this.global.roomStatus.compliment) {
                        this.query.Condition2 = `\`CPHUStatus\`="${this.global.roomStatus.compliment}"`;
                    } else if ((roomStatus == this.global.roomStatus.outOfOrder) || (roomStatus == this.global.roomStatus.officeUse) || (roomStatus == this.global.roomStatus.underConstruction)) {
                        this.query.Condition2 = `\`Status Code Mix\`="${roomStatus}"`;
                    } else {
                        this.query.Condition2 = `(\`Status Code Mix\`="V" OR \`Status Code Mix\`="O") AND \`Room Status Code\`="${roomStatus}"`;
                    }
                }

                const { building } = this.$refs.ReportFilter1.vModelLookUp;
                if (building != undefined && building != null) {
                    if (this.query.Condition2 == '') {
                        this.query.Condition2 = `\`Building\`="${building}"`;
                    } else {
                        this.query.Condition2 = `${this.query.Condition2} AND \`Building\`="${building}"`;
                    }
                }

                const { floor } = this.$refs.ReportFilter1.vModelLookUp;
                if (floor != undefined && floor != null) {
                    if (this.query.Condition2 == '') {
                        this.query.Condition2 = `\`Floor\`="${floor}"`;
                    } else {
                        this.query.Condition2 = `${this.query.Condition2} AND \`Floor\`="${floor}"`;
                    }
                }
            } else if (reportCode == this.global.reportList.sales || reportCode == this.global.reportList.salesSummary || reportCode == this.global.reportList.frequentlySales || reportCode == this.global.reportList.voidedCheckList) {
                this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
            } else if (reportCode == this.global.reportList.captainOrderList || reportCode == this.global.reportList.cancelledCaptainOrderDetail) {
                this.query.Condition1 = this.getDateCondition11('DATE(pos_captain_order_transaction.audit_date)');
            } else if (reportCode == this.global.reportList.cancelledCaptainOrder) {
                this.query.Condition1 = this.getDateCondition11('DATE(pos_captain_order.audit_date)');
            } else if (reportCode == this.global.reportList.company) {
                const companyTypeCode = this.$refs.ReportFilter1.vModelLookUp.companyType;
                if (companyTypeCode != undefined && companyTypeCode != null) {
                    this.query.Condition1 = ` company.type_code = "${companyTypeCode}" `;
                }
            } else if (reportCode == this.global.reportList.phoneBook) {
                const phoneBookTypeCode = this.$refs.ReportFilter1.vModelLookUp.phoneBookType;
                if (phoneBookTypeCode != undefined && phoneBookTypeCode != null) {
                    this.query.Condition1 = ` phone_book.type_code = "${phoneBookTypeCode}" `;
                }
            } else if (reportCode == this.global.reportList.eventList) {
                this.query.Condition1 = this.getDateCondition21('DATE(events.Start)', 'DATE(events.Finish)');
            } else if (reportCode == this.global.reportList.occupiedGraphic || reportCode == this.global.reportList.occupiedbyBusinessSourceGraphic || reportCode == this.global.reportList.occupiedbyMarketGraphic || reportCode == this.global.reportList.occupiedbyGuestTypeGraphic
            || reportCode == this.global.reportList.occupiedbyCountryGraphic || reportCode == this.global.reportList.occupiedbyStateGraphic) {
                this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
            } else if (reportCode == this.global.reportList.occupancyGraphic) {
                this.query.Condition1 = this.getDateCondition11('date');
            } else if (reportCode == this.global.reportList.revenueGraphic) {
                this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
            } else if (reportCode == this.global.reportList.roomStatistic || reportCode == this.global.reportList.dailyFlashReport || reportCode == this.global.reportList.fbStatistic || reportCode == this.global.reportList.dailyStatisticReport) {
                this.query.Condition1 = this.getDateCondition11('`date`');
                this.query.Condition2 = this.getDateCondition1MTD('`date`');
                this.query.Condition3 = this.getDateCondition1MTDLastMonth('`date`');
                this.query.Condition4 = this.getDateCondition1YTD('`date`');
                this.query.Condition5 = this.getDateCondition1YTDLastYear('`date`');
                this.query.Condition6 = this.getDateCondition1YTDFromLastYear('`date`');
            } else if (reportCode == this.global.reportList.roomProduction) {
                let dateCondition = this.getDateCondition11('guest_in_house.audit_date');
                this.query.Condition1 = ` WHERE ${dateCondition}`;

                dateCondition = this.getDateCondition11('sub_folio.audit_date');
                this.query.Condition2 = ` WHERE ${dateCondition}`;

                dateCondition = this.getDateCondition11('guest_in_house.audit_date');
                this.query.Condition3 = dateCondition;

                dateCondition = this.getDateCondition11('folio.check_out_date');
                this.query.Condition4 = dateCondition;

                dateCondition = this.getDateCondition21('DATE(room_unavailable.from_date)', 'DATE(room_unavailable.to_date)');
                this.query.Condition5 = dateCondition;
            } else if (reportCode == this.global.reportList.oTAProductivity) {
                this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
            } else if (reportCode == this.global.reportList.marketStatistic) {
                this.query.Condition1 = this.getDateCondition11('DATE(market_statistic.audit_date)');
            } else if (reportCode == this.global.reportList.dailyHotelCompetitor) {
                this.query.Condition1 = this.getDateCondition11('DATE(competitor_data.date)');
            } else if (reportCode == this.global.reportList.rateCodeAnalisys) {
                this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
            } else if (reportCode == this.global.reportList.salesContributionAnalysis) {
                this.query.Condition1 = this.getDateCondition11('DATE(market_statistic.audit_date)');
            } else if (reportCode == this.global.reportList.leadList || reportCode == this.global.reportList.taskList || reportCode == this.global.reportList.proposalList || reportCode == this.global.reportList.activityLog || reportCode == this.global.reportList.salesActivityDetail) {
                //
            } else if (reportCode == this.global.reportList.cityLedgerList) {
                //
            } else if (reportCode == this.global.reportList.cityLedgerAgingReport || reportCode == this.global.reportList.cityLedgerAgingReportDetail) {
                //
            } else if (reportCode == this.global.reportList.cityLedgerInvoice || reportCode == this.global.reportList.cityLedgerInvoiceDetail || reportCode == this.global.reportList.cityLedgerInvoicePayment) {
                //
            } else if (reportCode == this.global.reportList.cityLedgerInvoiceMutation) {
                //
            } else if (reportCode == this.global.reportList.bankTransactionList) {
                //
            } else if (reportCode == this.global.reportList.bankTransactionAgingReport || reportCode == this.global.reportList.bankTransactionAgingReportDetail) {
                //
            } else if (reportCode == this.global.reportList.bankReconciliation) {
                //
            } else if (reportCode == this.global.reportList.bankTransactionMutation) {
                //
            } else if (reportCode == this.global.reportList.apRefundDepositList || reportCode == this.global.reportList.apCommissionList) {
                //
            } else if (reportCode == this.global.reportList.apRefundDepositAgingReport || reportCode == this.global.reportList.apRefundDepositAgingReportDetail || reportCode == this.global.reportList.apCommissionAgingReport || reportCode == this.global.reportList.apCommissionAgingReportDetail) {
                //
            } else if (reportCode == this.global.reportList.apRefundDepositPayment || reportCode == this.global.reportList.apCommissionPayment) {
                //
            } else if (reportCode == this.global.reportList.apRefundDepositMutation || reportCode == this.global.reportList.apCommissionMutation) {
                //
            } else if (reportCode == this.global.reportList.logUser || reportCode == this.global.reportList.logMoveRoom || reportCode == this.global.reportList.logVoidTransaction || reportCode == this.global.reportList.logHouseKeeping || reportCode == this.global.reportList.logTransferTransaction) {
                this.query.Condition1 = this.getDateCondition11('DATE(log_user.actual_date)');

                if (reportCode == this.global.reportList.logMoveRoom) {
                    this.query.Condition1 = `${this.query.Condition1} AND log_user.action_id="${this.global.logUserAction.moveRoom}"`;
                } else if (reportCode == this.global.reportList.logVoidTransaction) {
                    this.query.Condition1 = `${this.query.Condition1} AND log_user.action_id="${this.global.logUserAction.voidTransaction}"`;
                } else if (reportCode == this.global.reportList.logHouseKeeping) {
                    this.query.Condition1 = `${this.query.Condition1} AND (log_user.action_id="${this.global.logUserAction.dirtyRoom}" OR log_user.action_id="${this.global.logUserAction.cleanRoom}" OR log_user.action_id="${this.global.logUserAction.readyRoom}")`;
                } else if (reportCode == this.global.reportList.logTransferTransaction) {
                    this.query.Condition1 = `${this.query.Condition1} AND log_user.action_id="${this.global.logUserAction.transferTransaction}"`;
                }

                // Filter User ID
                const userID = this.$refs.ReportFilter1.vModelLookUp.user;
                if (userID != undefined && userID != null) {
                    this.query.Condition1 = `${this.query.Condition1} AND log_user.user_id="${userID}"`;
                }

                // Filter Log User Action
                const logUserActionID = this.$refs.ReportFilter1.vModelLookUp.logUserAction;
                if (logUserActionID != undefined && logUserActionID != null) {
                    this.query.Condition1 = `${this.query.Condition1} AND log_user.action_id="${logUserActionID}"`;
                }
            } else if (reportCode == this.global.reportList.logShift) {
                //
            } else if (reportCode == this.global.reportList.keyLockHistory) {
                //
            } else if (reportCode == this.global.reportList.logSpecialAccess) {
                //
            } else if (reportCode == this.global.reportList.logPABX) {
                //
            }
        },

        setDateRangeActive(reportCode) {
            let DateMode;
            const vModelOptionB4 = this.vModelOptions;

            DateMode = '1111111';
            if ((reportCode == this.global.reportList.roomList) || (reportCode == this.global.reportList.roomStatus)
            || (reportCode == this.global.reportList.roomRate) || (reportCode == this.global.reportList.roomRateBreakdown) || (reportCode == this.global.reportList.roomRateStructure)
            || (reportCode == this.global.reportList.package) || (reportCode == this.global.reportList.packageBreakdown)
            || (reportCode == this.global.reportList.folioOpenBalance) || (reportCode == this.global.reportList.repeaterGuest) || (reportCode == this.global.reportList.currentInHouse)
            || (reportCode == this.global.reportList.guestProfile) || (reportCode == this.global.reportList.company) || (reportCode == this.global.reportList.phoneBook)
            || (reportCode == this.global.reportList.contractRate) || (reportCode == this.global.reportList.roomType)
            ) {
                DateMode = '0000000';
            } else if ((reportCode == this.global.reportList.guestInHouseForecast)
            || (reportCode == this.global.reportList.dailyFolioTransaction) || (reportCode == this.global.reportList.dailyChargeList)
            || (reportCode == this.global.reportList.dailyPaymentList) || (reportCode == this.global.reportList.dailySales)
            || (reportCode == this.global.reportList.dailyRevenueReport) || (reportCode == this.global.reportList.dailyRevenueReportSummary)
            || (reportCode == this.global.reportList.roomCountSheet) || (reportCode == this.global.reportList.roomCountSheetByBuildingFloorRoomType) || (reportCode == this.global.reportList.roomCountSheetByRoomTypeBedType)
            || (reportCode == this.global.reportList.roomStatistic) || (reportCode == this.global.reportList.dailyFlashReport) || (reportCode == this.global.reportList.fbStatistic)
            || (reportCode == this.global.reportList.guestLedger) || (reportCode == this.global.reportList.guestDeposit)
            || (reportCode == this.global.reportList.guestAccount) || (reportCode == this.global.reportList.todayRoomRevenueBreakDown)) {
                DateMode = '1000000';
            } else if ((reportCode == this.global.reportList.monthlyFolioTransaction) || (reportCode == this.global.reportList.monthlyChargeList) || (reportCode == this.global.reportList.monthlyPaymentList)) {
            } else if ((reportCode == this.global.reportList.yearlyTransaction) || (reportCode == this.global.reportList.yearlyChargeList)
                || (reportCode == this.global.reportList.yearlyPaymentList) || (reportCode == this.global.reportList.guestForecastReportYearly)) {
                DateMode = '0000001';
            } else if (reportCode == this.global.reportList.guestForecastComparison) {
                DateMode = '1111100';
            } else if (reportCode == this.global.reportList.oTAProductivity) {
                DateMode = '1011111';
            } else if ((reportCode == this.global.reportList.roomProduction) && (ReportTemplate.RoomProduction == 'RoomProduction02.fr3')) {
                DateMode = '1111001';
            }

            if (this.resolutionWidth < 900) { // For Small device
                let CanCangeActive = true;
                this.dataLookUpOptionDate = [];
                for (let i = 1; i <= 7; i++) {
                    let textLookUp = '';
                    if (DateMode[i - 1] == '1') {
                        if (i == 1) {
                            textLookUp = 'Date';
                            this.optionDisable.date = false;
                            if (CanCangeActive) {
                                this.vModelOptions = 1;
                                CanCangeActive = false;
                            }
                        } else if (i == 2) {
                            textLookUp = 'Range';
                            if (CanCangeActive) {
                                this.vModelOptions = 2;
                                CanCangeActive = false;
                            }
                        } else if (i == 3) {
                            textLookUp = 'Week';
                            if (CanCangeActive) {
                                this.vModelOptions = 3;
                                CanCangeActive = false;
                            }
                        } else if (i == 4) {
                            textLookUp = 'Month';
                            if (CanCangeActive) {
                                this.vModelOptions = 4;
                                CanCangeActive = false;
                            }
                        } else if (i == 5) {
                            textLookUp = 'Quarter';
                            if (CanCangeActive) {
                                this.vModelOptions = 5;
                                CanCangeActive = false;
                            }
                        } else if (i == 6) {
                            textLookUp = 'Semester';
                            if (CanCangeActive) {
                                this.vModelOptions = 6;
                                CanCangeActive = false;
                            }
                        } else if (i == 7) {
                            textLookUp = 'Year';
                            if (CanCangeActive) {
                                this.vModelOptions = 7;
                                CanCangeActive = false;
                            }
                        }
                        this.item = {};
                        this.item.value = i;
                        this.item.text = textLookUp;
                        this.dataLookUpOptionDate.push(this.item);
                    }
                }

                if (DateMode == '0000000') {
                    this.item = {};
                    this.item.value = 1;
                    this.item.text = 'Date';
                    this.dataLookUpOptionDate.push(this.item);

                    this.optionDisable.date = true;
                    this.vModelOptions = 1;
                }
            } else if (this.resolutionWidth >= 900) { // For Large Device
            // Date
                this.optionDisable.date = DateMode[0] != '1';
                // Date Range
                this.optionDisable.range = DateMode[1] != '1';
                // Week
                this.optionDisable.week = DateMode[2] != '1';
                // Month
                this.optionDisable.month = DateMode[3] != '1';
                // Quarter
                this.optionDisable.quarter = DateMode[4] != '1';
                // Semester
                this.optionDisable.semester = DateMode[5] != '1';
                // Year
                this.optionDisable.year = DateMode[6] != '1';

                if (!this.optionDisable.date) {
                    this.vModelOptions = 1;
                } else if (!this.optionDisable.range) {
                    this.vModelOptions = 2;
                } else if (!this.optionDisable.week) {
                    this.vModelOptions = 3;
                } else if (!this.optionDisable.month) {
                    this.vModelOptions = 4;
                } else if (!this.optionDisable.quarter) {
                    this.vModelOptions = 5;
                } else if (!this.optionDisable.semester) {
                    this.vModelOptions = 6;
                } else if (!this.optionDisable.year) {
                    this.vModelOptions = 7;
                }
                // If No options disabled check option date
                if (DateMode == '0000000') {
                    this.vModelOptions = 1;
                }
            }
            // Check Options Before if now enabled change to option before
            if (vModelOptionB4 > 0 && DateMode[vModelOptionB4 - 1] == '1') {
                this.vModelOptions = vModelOptionB4;
            }
        },

        getDateDescription() {
            if (this.vModelOptions == 1) {
                return `Date ${moment(this.vModelDateSelected).format('DD/MM/YYYY')}`;
            }
            if (this.vModelOptions == 2) {
                return `Date Range: ${moment(this.vModelDateStart).format('DD/MM/YYYY')} - ${moment(this.vModelDateEnd).format('DD/MM/YYYY')}`;
            }
            if (this.vModelOptions == 3) {
                return `Week ${this.vModelLookUp.week} of Year ${this.vModelLookUp.yearWeek}`;
            }
            if (this.vModelOptions == 4) {
                return `Month ${this.vModelLookUp.month} of Year ${this.vModelLookUp.yearMonth}`;
            }
            if (this.vModelOptions == 5) {
                return `Quarter ${this.vModelLookUp.quarter} of Year ${this.vModelLookUp.yearQuarter}`;
            }
            if (this.vModelOptions == 6) {
                return `Semester ${this.vModelLookUp.semester} of Year ${this.vModelLookUp.yearSemester}`;
            }
            if (this.vModelOptions == 7) {
                return `Year ${this.vModelLookUp.year}`;
            }
        },

        getDateConditionAuditDate(dateParameter) {
            return `${dateParameter}="${this.auditDate}"`;
        },

        getDateConditionAuditDate2(dateParameter1, dateParameter2) {
            return `((${dateParameter1}<=${this.auditDate} AND ${dateParameter2}>=${this.auditDate}))`;
        },

        getDateCondition01() {
        // return Start Date
            if (this.vModelOptions == 1) {
                return this.vModelDateSelected;
            }
            if (this.vModelOptions == 2) {
                return this.vModelDateStart;
            }
            if (this.vModelOptions == 3) {
                if (this.vModelLookUp.week == 1) {
                    return `${this.vModelLookUp.yearWeek }-01-01`;
                }
                if (this.vModelLookUp.week == 53) {
                    const dateFromWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week + 1)
                        .toDate());
                    return dateFromWeek;
                }

                const dateFromWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                    .toDate());
                return dateFromWeek;
            }
            if (this.vModelOptions == 4) {
                let dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                dateFromMonth = formatDateDatabase(moment(dateFromMonth).startOf('month'));

                return dateFromMonth;
            }
            if (this.vModelOptions == 5) {
                let dateFromQuarter = moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                dateFromQuarter = formatDateDatabase(moment(dateFromQuarter).startOf('month'));

                return dateFromQuarter;
            }
            if (this.vModelOptions == 6) {
                let dateFromSemester = moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate();
                dateFromSemester = formatDateDatabase(moment(dateFromSemester).startOf('month'));

                return dateFromSemester;
            }
            if (this.vModelOptions == 7) {
                let dateFromYear = moment().date(1).month(11).year(this.vModelLookUp.year)
                    .toDate();
                dateFromYear = formatDateDatabase(moment(dateFromYear).startOf('month'));

                return dateFromYear;
            }
        },

        getDateCondition02() {
        // return End Date
            if (this.vModelOptions == 1) {
                return this.vModelDateSelected;
            }
            if (this.vModelOptions == 2) {
                return this.vModelDateEnd;
            }
            if (this.vModelOptions == 3) {
                if (this.vModelLookUp.week == 53) {
                    return `${this.vModelLookUp.yearWeek}-01-01`;
                }

                const dateFromWeek = formatDateDatabase(moment(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                    .toDate()).add(6, 'days'));
                return dateFromWeek;
            }
            if (this.vModelOptions == 4) {
                let dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                dateFromMonth = formatDateDatabase(moment(dateFromMonth).endOf('month'));

                return dateFromMonth;
            }
            if (this.vModelOptions == 5) {
                let dateFromQuarter = moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                dateFromQuarter = formatDateDatabase(moment(dateFromQuarter).endOf('month'));

                return dateFromQuarter;
            }
            if (this.vModelOptions == 6) {
                let dateFromSemester = moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate();
                dateFromSemester = formatDateDatabase(moment(dateFromSemester).endOf('month'));

                return dateFromSemester;
            }
            if (this.vModelOptions == 7) {
                let dateFromYear = moment().date(1).month(11).year(this.vModelLookUp.year)
                    .toDate();
                dateFromYear = formatDateDatabase(moment(dateFromYear).endOf('month'));

                return dateFromYear;
            }
        },

        getDateCondition11(dateParameter) {
            let resultTemp = '';
            if (this.vModelOptions == 1) {
                resultTemp = `${dateParameter}="${this.vModelDateSelected}"`;
                return resultTemp;
            }
            if (this.vModelOptions == 2) {
                resultTemp = `${dateParameter}>="${this.vModelDateStart}" AND ${dateParameter}<="${this.vModelDateEnd}"`;
                return resultTemp;
            }
            if (this.vModelOptions == 3) {
                resultTemp = `WEEK(${dateParameter}, 3)="${this.vModelLookUp.week}" AND YEAR(${dateParameter})="${this.vModelLookUp.yearWeek}"`;
                return resultTemp;
            }
            if (this.vModelOptions == 4) {
                resultTemp = `MONTH(${dateParameter})="${this.vModelLookUp.month}" AND YEAR(${dateParameter})="${this.vModelLookUp.yearMonth}"`;
                return resultTemp;
            }
            if (this.vModelOptions == 5) {
                resultTemp = `MONTH(${dateParameter})>="${((this.vModelLookUp.quarter) * 3) - 2}"`
                      + ` AND MONTH(${dateParameter})<="${(this.vModelLookUp.quarter) * 3}"`
                      + ` AND YEAR(${dateParameter})="${this.vModelLookUp.yearQuarter}"`;
                return resultTemp;
            }
            if (this.vModelOptions == 6) {
                resultTemp = `MONTH(${dateParameter})>="${((this.vModelLookUp.semester) * 6) - 5}"`
                      + ` AND MONTH(${dateParameter})<="${(this.vModelLookUp.semester) * 6}"`
                      + ` AND YEAR(${dateParameter})="${this.vModelLookUp.yearSemester}"`;
                return resultTemp;
            }
            if (this.vModelOptions == 7) {
                resultTemp = `YEAR(${dateParameter})="${this.vModelLookUp.year}"`;
                return resultTemp;
            }
        },

        getDateCondition12A(dateParameter) {
        // DateParameter <= Start Date
            if (this.vModelOptions == 1) {
                return `${dateParameter}<="${this.vModelDateSelected}"`;
            }
            if (this.vModelOptions == 2) {
                return `${dateParameter}<="${this.vModelDateStart}"`;
            }
            if (this.vModelOptions == 3) {
                const dateFromWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                    .toDate());
                return `${dateParameter}<="${dateFromWeek}"`;
            }
            if (this.vModelOptions == 4) {
                let dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                dateFromMonth = formatDateDatabase(moment(dateFromMonth).startOf('month'));

                return `${dateParameter}<="${dateFromMonth}"`;
            }
            if (this.vModelOptions == 5) {
                let dateFromQuarter = moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                dateFromQuarter = formatDateDatabase(moment(dateFromQuarter).startOf('month'));

                return `${dateParameter}<="${dateFromQuarter}"`;
            }
            if (this.vModelOptions == 6) {
                let dateFromSemester = moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate();
                dateFromSemester = formatDateDatabase(moment(dateFromSemester).startOf('month'));

                return `${dateParameter}<="${dateFromSemester}"`;
            }
            if (this.vModelOptions == 7) {
                let dateFromYear = moment().date(1).month(11).year(this.vModelLookUp.year)
                    .toDate();
                dateFromYear = formatDateDatabase(moment(dateFromYear).startOf('month'));

                return `${dateParameter}<="${dateFromYear}"`;
            }
        },

        getDateCondition12B(dateParameter) {
        // DateParameter < Start Date
            if (this.vModelOptions == 1) {
                return `${dateParameter}<"${this.vModelDateSelected}"`;
            }
            if (this.vModelOptions == 2) {
                return `${dateParameter}<"${this.vModelDateStart}"`;
            }
            if (this.vModelOptions == 3) {
                const dateFromWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                    .toDate());
                return `${dateParameter}<"${dateFromWeek}"`;
            }
            if (this.vModelOptions == 4) {
                let dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                dateFromMonth = formatDateDatabase(moment(dateFromMonth).startOf('month'));

                return `${dateParameter}<"${dateFromMonth}"`;
            }
            if (this.vModelOptions == 5) {
                let dateFromQuarter = moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                dateFromQuarter = formatDateDatabase(moment(dateFromQuarter).startOf('month'));

                return `${dateParameter}<"${dateFromQuarter}"`;
            }
            if (this.vModelOptions == 6) {
                let dateFromSemester = moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate();
                dateFromSemester = formatDateDatabase(moment(dateFromSemester).startOf('month'));

                return `${dateParameter}<"${dateFromSemester}"`;
            }
            if (this.vModelOptions == 7) {
                let dateFromYear = moment().date(1).month(11).year(this.vModelLookUp.year)
                    .toDate();
                dateFromYear = formatDateDatabase(moment(dateFromYear).startOf('month'));

                return `${dateParameter}<"${dateFromYear}"`;
            }
        },

        getDateCondition12C(dateParameter) {
        // DateParameter > Start Date
            if (this.vModelOptions == 1) {
                return `${dateParameter}>"${this.vModelDateSelected}"`;
            }
            if (this.vModelOptions == 2) {
                return `${dateParameter}>"${this.vModelDateStart}"`;
            }
            if (this.vModelOptions == 3) {
                const dateFromWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                    .toDate());
                return `${dateParameter}>"${dateFromWeek}"`;
            }
            if (this.vModelOptions == 4) {
                let dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                dateFromMonth = formatDateDatabase(moment(dateFromMonth).startOf('month'));

                return `${dateParameter}>"${dateFromMonth}"`;
            }
            if (this.vModelOptions == 5) {
                let dateFromQuarter = moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                dateFromQuarter = formatDateDatabase(moment(dateFromQuarter).startOf('month'));

                return `${dateParameter}>"${dateFromQuarter}"`;
            }
            if (this.vModelOptions == 6) {
                let dateFromSemester = moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate();
                dateFromSemester = formatDateDatabase(moment(dateFromSemester).startOf('month'));

                return `${dateParameter}>"${dateFromSemester}"`;
            }
            if (this.vModelOptions == 7) {
                let dateFromYear = moment().date(1).month(11).year(this.vModelLookUp.year)
                    .toDate();
                dateFromYear = formatDateDatabase(moment(dateFromYear).startOf('month'));

                return `${dateParameter}>"${dateFromYear}"`;
            }
        },

        getDateCondition13(dateParameter) {
            // dateParameter <= End Date
            if (this.vModelOptions == 1) {
                return `${dateParameter}<="${this.vModelDateSelected}"`;
            }
            if (this.vModelOptions == 2) {
                return `${dateParameter}<="${this.vModelDateEnd}"`;
            }
            if (this.vModelOptions == 3) {
                const dateFromWeek = formatDateDatabase(moment(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                    .toDate()).add(6, 'days'));
                return `${dateParameter}<="${dateFromWeek}"`;
            }
            if (this.vModelOptions == 4) {
                let dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                dateFromMonth = formatDateDatabase(moment(dateFromMonth).endOf('month'));
                return `${dateParameter}<="${dateFromMonth}"`;
            }
            if (this.vModelOptions == 5) {
                let dateFromQuarter = moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                dateFromQuarter = formatDateDatabase(moment(dateFromQuarter).endOf('month'));

                return `${dateParameter}<="${dateFromQuarter}"`;
            }
            if (this.vModelOptions == 6) {
                let dateFromSemester = moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate();
                dateFromSemester = formatDateDatabase(moment(dateFromSemester).endOf('month'));

                return `${dateParameter}<="${dateFromSemester}"`;
            }
            if (this.vModelOptions == 7) {
                let dateFromYear = moment().date(1).month(11).year(this.vModelLookUp.year)
                    .toDate();
                dateFromYear = formatDateDatabase(moment(dateFromYear).endOf('month'));

                return `${dateParameter}<="${dateFromYear}"`;
            }
        },

        getDateCondition13A(dateParameter) {
            // DateParameter > End Date
            if (this.vModelOptions == 1) {
                return `${dateParameter}>"${this.vModelDateSelected}"`;
            }
            if (this.vModelOptions == 2) {
                return `${dateParameter}>"${this.vModelDateEnd}"`;
            }
            if (this.vModelOptions == 3) {
                const dateFromWeek = formatDateDatabase(moment(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                    .toDate()).add(6, 'days'));
                return `${dateParameter}>"${dateFromWeek}"`;
            }
            if (this.vModelOptions == 4) {
                let dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                dateFromMonth = formatDateDatabase(moment(dateFromMonth).endOf('month'));
                return `${dateParameter}>"${dateFromMonth}"`;
            }
            if (this.vModelOptions == 5) {
                let dateFromQuarter = moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                dateFromQuarter = formatDateDatabase(moment(dateFromQuarter).endOf('month'));

                return `${dateParameter}>"${dateFromQuarter}"`;
            }
            if (this.vModelOptions == 6) {
                let dateFromSemester = moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate();
                dateFromSemester = formatDateDatabase(moment(dateFromSemester).endOf('month'));

                return `${dateParameter}>"${dateFromSemester}"`;
            }
            if (this.vModelOptions == 7) {
                let dateFromYear = moment().date(1).month(11).year(this.vModelLookUp.year)
                    .toDate();
                dateFromYear = formatDateDatabase(moment(dateFromYear).endOf('month'));

                return `${dateParameter}>"${dateFromYear}"`;
            }
        },

        getDateCondition1MTD(dateParameter) {
            if (this.vModelOptions == 1) {
                return `${dateParameter}>="${formatDateDatabase(moment(this.vModelDateSelected).startOf('month'))}" AND ${dateParameter}<="${this.vModelDateSelected}"`;
            }
        },

        getDateCondition1YTD(dateParameter) {
            if (this.vModelOptions == 1) {
                const startDateOfTheYear = moment(moment(this.vModelDateSelected).month(0).toDate()).startOf('month');
                return `${dateParameter}>="${formatDateDatabase(startDateOfTheYear)}" AND ${dateParameter}<="${this.vModelDateSelected}"`;
            }
        },

        getDateCondition1YTDLastYear(dateParameter) {
            if (this.vModelOptions == 1) {
                const startOfDateMonthLastYear = formatDateDatabase(moment(moment(this.vModelDateSelected).add(-12, 'M')).startOf('month'));
                const dateLastYear = formatDateDatabase(moment(this.vModelDateSelected).add(-12, 'M'));

                return `${dateParameter}>="${startOfDateMonthLastYear}" AND ${dateParameter}<="${dateLastYear}"`;
            }
        },

        getDateCondition1YTDFromLastYear(dateParameter) {
            if (this.vModelOptions == 1) {
                const startOfDateMonthLastYear = formatDateDatabase(moment(moment(this.vModelDateSelected).add(-12, 'M')).startOf('month'));
                return `${dateParameter}>="${startOfDateMonthLastYear}" AND ${dateParameter}<="${this.vModelDateSelected}"`;
            }
        },

        getDateCondition21(dateParameter1, dateParameter2) {
            let dateFrom = '';
            let dateTo = '';
            if (this.vModelOptions == 1) {
                dateFrom = this.vModelDateSelected;
                dateTo = this.vModelDateSelected;
            } else if (this.vModelOptions == 2) {
                dateFrom = this.vModelDateStart;
                dateTo = this.vModelDateEnd;
            } else if (this.vModelOptions == 3) {
                if (this.vModelLookUp.week == 1) {
                    dateFrom = `${this.vModelLookUp.yearWeek}-01-01`;
                } else if (this.vModelOptions == 53) {
                    const dateFromStartWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek + 1).week(1)
                        .toDate());
                    dateFrom = dateFromStartWeek;
                } else {
                    const dateFromStartWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                        .toDate());
                    dateFrom = dateFromStartWeek;
                }

                if (this.vModelLookUp.week == 53) {
                    dateTo = `${this.vModelLookUp.yearWeek}-12-31`;
                } else {
                    const dateFromWeek = formatDateDatabase(moment(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                        .toDate()).add(6, 'days'));
                    dateTo = dateFromWeek;
                }
            } else if (this.vModelOptions == 4) {
                const dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                const startOfMonth = formatDateDatabase(moment(dateFromMonth).startOf('month'));
                const endOfMonth = formatDateDatabase(moment(dateFromMonth).endOf('month'));

                dateFrom = startOfMonth;
                dateTo = endOfMonth;
            } else if (this.vModelOptions == 5) {
                const dateFromQuarter = moment().date(1).month(((this.vModelLookUp.quarter - 1) * 3)).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                const dateToQuarter = moment(moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate()).endOf('month');

                dateFrom = formatDateDatabase(dateFromQuarter);
                dateTo = formatDateDatabase(dateToQuarter);
            } else if (this.vModelOptions == 6) {
                const dateFromSemester = moment().date(1).month(((this.vModelLookUp.semester - 1) * 6)).year(this.vModelLookUp.yearSemester)
                    .toDate();
                const dateToSemester = moment(moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate()).endOf('month');

                dateFrom = formatDateDatabase(dateFromSemester);
                dateTo = formatDateDatabase(dateToSemester);
            } else if (this.vModelOptions == 7) {
                dateFrom = `${this.vModelLookUp.year}-01-01`;
                dateTo = `${this.vModelLookUp.year}-12-31`;
            }

            if ((dateFrom != '') && (dateTo != '')) {
                dateFrom = `"${dateFrom}"`;
                dateTo = `"${dateTo}"`;
                return `((${dateParameter1}<=${dateTo} AND ${dateParameter2}>=${dateFrom}))`;
            }
        },

        getDateCondition22(dateParameter1, dateParameter2) {
            let dateFrom = '';
            let dateTo = '';
            if (this.vModelOptions == 1) {
                dateFrom = this.vModelDateSelected;
                dateTo = this.vModelDateSelected;
            } else if (this.vModelOptions == 2) {
                dateFrom = this.vModelDateStart;
                dateTo = this.vModelDateEnd;
            } else if (this.vModelOptions == 3) {
                if (this.vModelLookUp.week == 1) {
                    dateFrom = `${this.vModelLookUp.yearWeek}-01-01`;
                } else if (this.vModelOptions == 53) {
                    const dateFromStartWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek + 1).week(1)
                        .toDate());
                    dateFrom = dateFromStartWeek;
                } else {
                    const dateFromStartWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                        .toDate());
                    dateFrom = dateFromStartWeek;
                }

                if (this.vModelLookUp.week == 53) {
                    dateTo = `${this.vModelLookUp.yearWeek}-12-31`;
                } else {
                    const dateFromWeek = formatDateDatabase(moment(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                        .toDate()).add(6, 'days'));
                    dateTo = dateFromWeek;
                }
            } else if (this.vModelOptions == 4) {
                const dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                const startOfMonth = formatDateDatabase(moment(dateFromMonth).startOf('month'));
                const endOfMonth = formatDateDatabase(moment(dateFromMonth).endOf('month'));

                dateFrom = startOfMonth;
                dateTo = endOfMonth;
            } else if (this.vModelOptions == 5) {
                const dateFromQuarter = moment().date(1).month(((this.vModelLookUp.quarter - 1) * 3)).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                const dateToQuarter = moment(moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate()).endOf('month');

                dateFrom = formatDateDatabase(dateFromQuarter);
                dateTo = formatDateDatabase(dateToQuarter);
            } else if (this.vModelOptions == 6) {
                const dateFromSemester = moment().date(1).month(((this.vModelLookUp.semester - 1) * 6)).year(this.vModelLookUp.yearSemester)
                    .toDate();
                const dateToSemester = moment(moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate()).endOf('month');

                dateFrom = formatDateDatabase(dateFromSemester);
                dateTo = formatDateDatabase(dateToSemester);
            } else if (this.vModelOptions == 7) {
                dateFrom = `${this.vModelLookUp.year}-01-01`;
                dateTo = `${this.vModelLookUp.year}-12-31`;
            }

            if ((dateFrom != '') && (dateTo != '')) {
                dateFrom = `"${dateFrom}"`;
                dateTo = `"${dateTo}"`;
                return `(((${dateParameter1}<${dateParameter2}) AND (${dateParameter1}<=${dateTo} AND ${dateParameter2}>${dateFrom})) OR `
                        + `((${dateParameter1}=${dateParameter2}) AND (${dateParameter1}>=${dateFrom} AND ${dateParameter2}<=${dateTo})))`;
            }
        },

        getDateCondition23(dateParameter1, dateParameter2) {
            let dateFrom = '';
            let dateTo = '';
            if (this.vModelOptions == 1) {
                dateFrom = this.vModelDateSelected;
                dateTo = this.vModelDateSelected;
            } else if (this.vModelOptions == 2) {
                dateFrom = this.vModelDateStart;
                dateTo = this.vModelDateEnd;
            } else if (this.vModelOptions == 3) {
                if (this.vModelLookUp.week == 1) {
                    dateFrom = `${this.vModelLookUp.yearWeek}-01-01`;
                } else if (this.vModelOptions == 53) {
                    const dateFromStartWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek + 1).week(1)
                        .toDate());
                    dateFrom = dateFromStartWeek;
                } else {
                    const dateFromStartWeek = formatDateDatabase(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                        .toDate());
                    dateFrom = dateFromStartWeek;
                }

                if (this.vModelLookUp.week == 53) {
                    dateTo = `${this.vModelLookUp.yearWeek}-12-31`;
                } else {
                    const dateFromWeek = formatDateDatabase(moment(moment().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week)
                        .toDate()).add(6, 'days'));
                    dateTo = dateFromWeek;
                }
            } else if (this.vModelOptions == 4) {
                const dateFromMonth = moment().date(1).month((this.vModelLookUp.month - 1)).year(this.vModelLookUp.yearMonth)
                    .toDate();
                const startOfMonth = formatDateDatabase(moment(dateFromMonth).startOf('month'));
                const endOfMonth = formatDateDatabase(moment(dateFromMonth).endOf('month'));

                dateFrom = startOfMonth;
                dateTo = endOfMonth;
            } else if (this.vModelOptions == 5) {
                const dateFromQuarter = moment().date(1).month(((this.vModelLookUp.quarter - 1) * 3)).year(this.vModelLookUp.yearQuarter)
                    .toDate();
                const dateToQuarter = moment(moment().date(1).month((this.vModelLookUp.quarter * 3) - 1).year(this.vModelLookUp.yearQuarter)
                    .toDate()).endOf('month');

                dateFrom = formatDateDatabase(dateFromQuarter);
                dateTo = formatDateDatabase(dateToQuarter);
            } else if (this.vModelOptions == 6) {
                const dateFromSemester = moment().date(1).month(((this.vModelLookUp.semester - 1) * 6)).year(this.vModelLookUp.yearSemester)
                    .toDate();
                const dateToSemester = moment(moment().date(1).month((this.vModelLookUp.semester * 6) - 1).year(this.vModelLookUp.yearSemester)
                    .toDate()).endOf('month');

                dateFrom = formatDateDatabase(dateFromSemester);
                dateTo = formatDateDatabase(dateToSemester);
            } else if (this.vModelOptions == 7) {
                dateFrom = `${this.vModelLookUp.year}-01-01`;
                dateTo = `${this.vModelLookUp.year}-12-31`;
            }

            if ((dateFrom != '') && (dateTo != '')) {
                dateFrom = `"${dateFrom}"`;
                dateTo = `"${dateTo}"`;
                return `((${dateFrom}>=${dateParameter1} AND ${dateTo}<${dateParameter2}))`;
            }
        },

        setRadioCheck(param, changeFrom) {
            if (param != undefined) {
                this.vModelOptions = param;
            }

            const tempStartDate = new Date(this.vModelDateStart);
            const tempEndDate = new Date(this.vModelDateEnd);

            // 1=From Date Start 2=From Date End
            if (changeFrom != undefined) {
                if (changeFrom == 1 && tempStartDate > tempEndDate) {
                    this.vModelDateEnd = this.vModelDateStart;
                } else if (changeFrom == 2 && tempEndDate < tempStartDate) {
                    this.vModelDateStart = this.vModelDateEnd;
                }
            }
        },

        search() {
            // Modify Search Capitalize word
            this.searchword = capitalize(this.searchword);
            this.$refs.tree.searchNodes(this.searchword);
        },

        async nodeclick() {
            this.reportFileName = '';
            this.reportCodeInt = 0;
            this.selectedNode = this.$refs.tree.getSelectedNodes();
            if (this.selectedNode.length > 0) {
                this.reportCodeInt = await this.selectedNode[0].id;
                this.modalTitle = this.selectedNode[0].title;
                if (this.reportCodeInt > 1000) {
                    this.setDateRangeActive(this.reportCodeInt);
                    this.$loadingIndicator(this)
                    const { data } = await reportResource.reportTemplate({ reportCode: this.reportCodeInt });
                    this.dataLookUpTemplate = data.reportTemplate;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');

                    // Report having Template
                    if (data.reportTemplate.length > 0) {
                        this.optionDisableTemplate = false;
                        for (let $i = 0; $i < this.dataLookUpTemplate.length; $i++) {
                            if (data.reportTemplate[$i].is_default == '-1') {
                                this.vModelLookUpIdTemplate = data.reportTemplate[$i].id_log;
                                this.isTemplateSystemDefault = (data.reportTemplate[$i].is_system == '-1');
                            }
                        }
                    } else {
                    // Setup File Name Report if Have No Template
                        this.optionDisableTemplate = true;
                        this.vModelLookUpIdTemplate = 0;
                        this.isTemplateSystemDefault = true;
                        if (this.reportCodeInt == this.global.reportList.dailyRevenueReport) {
                            this.reportFileName = 'DailyRevenueReport.mrt';
                        }
                    }
                    this.showModal = true;
                    setTimeout(() => {
                        if (this.global.dialog.isAddHeaderCloseButton) {
                            this.addDialogCloseButton(this.firstDialog);
                            this.element = document.getElementsByClassName('filter-string').length;
                        }
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                    }, 100);
                }
            } else {
                this.reportCodeInt = 0;
            }
        },

        async getDataReportList() {
            this.$loadingIndicator(this)
            const { data } = await reportResource.reportListData({ userID: this.global.userInfo.code });
            this.treeData = data.dataTree;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        async getYearSelect() {
            this.auditDateStr = this.auditDate.split('-');
            this.yearInt = parseInt(this.auditDateStr[0]);
            this.jsonObj = [];
            for (let i = this.yearInt - 5; i <= this.yearInt + 5; i++) {
                this.item = {};
                this.item.text = i;
                this.item.value = i;
                this.jsonObj.push(this.item);
            }
            this.dataLookUpYear = this.jsonObj;

            this.vModelLookUp.yearWeek = this.yearInt;
            this.vModelLookUp.yearMonth = this.yearInt;
            this.vModelLookUp.yearQuarter = this.yearInt;
            this.vModelLookUp.yearSemester = this.yearInt;
            this.vModelLookUp.year = this.yearInt;
        },

        async getWeekSelect() {
            this.jsonObj = [];
            for (let i = 1; i <= 53; i++) {
                this.item = {};
                this.item.text = i;
                this.item.value = i;
                this.jsonObj.push(this.item);
            }
            this.dataLookUpWeek = this.jsonObj;
        },

        getResolution() {
            this.resolutionWidth = screen.width;
        },

        async dispatchAuditDate() {
            await this.$store.dispatch('getAuditDate');
            this.vModelDateSelected = await this.auditDate;
            this.vModelDateStart = this.vModelDateSelected;
            this.vModelDateEnd = this.vModelDateSelected;
            this.getWeekSelect();
            this.getYearSelect();
            this.getDataReportList();
            // get Audit Date week
            this.vModelLookUp.week = moment(this.auditDate).format('w');
            // get Audit Date Month
            this.vModelLookUp.month = moment(this.auditDate).format('M');
            // get Audit Date Quater
            this.vModelLookUp.quarter = moment(this.auditDate).format('Q');
            // get Audit Date Semester
            this.vModelLookUp.semester = (this.vModelLookUp.month <= 6) ? '1' : '2';
        },

        // Preview report access
        async getPreviewReportAccess() {
            const { data } = await userSettingResource.getOtherAccess({ code: this.userID });
            if (data.otherAccess != undefined && data.otherAccess != null && data.otherAccess != '') {
                this.editReportAccess = data.otherAccess[this.global.otherAccessOrder.editReport];
                this.exportReportAccess = data.otherAccess[this.global.otherAccessOrder.exportReport];
                this.customizeReportAccess = data.otherAccess[this.global.otherAccessOrder.customizeReport];
            }
        },

        back() {
            if (this.$refs.dialogsecond.showDialog) {
                this.$refs.dialogsecond.showDialog = false;
            } else {
                this.showModal = false;
            }
        },
    },

    computed: {
        auditDate() {
            return this.$store.state.auditLog.auditDate;
        },
        userID() { return this.$store.state.auth.accountCode; },

        scrollbarTag() { return this.$store.getters.scrollbarTag; },
    },

    created() {
        // Handle Back Button & forward on browser create hook
        const unregisterRouterGuard = this.$router.beforeEach((to, from, next) => {
            if (this.showModal || this.$refs.dialogsecond.showDialog) {
                this.back();
                next(false);
            } else {
                next();
            }
        });

        // Destroyed hook
        this.$once('hook:destroyed', () => {
            unregisterRouterGuard();
        });
        this.dispatchAuditDate();
    },

    beforeMount() {
        this.getPreviewReportAccess();
    },
    async mounted() {
        this.getResolution();
        setTimeout(()=>{
            const elem = document.getElementById('search');
            elem.click();
        }, 3000);
        this.element = document.getElementsByClassName('filter-string').length;
    },
};
</script>

<style lang="scss" scoped>
    .is_system{
        color: rgba(var(--vs-danger));
    }

    #filter-string{
        padding-bottom: 10px;
        div{
            height: 100%;
        }
        .vx-card{
            height: 100%;
        }
    }
    @media only screen and (min-width: 900px) {
        #filter-string{
            padding-left: 10px;
        }

        .customize-dropdown{
            cursor: pointer;
            display: initial
        }
    }

    @media only screen and (max-width: 899px) {
        .customize-dropdown{
            display: none
        }
    }

    #filter-date{
        padding-bottom: 10px;
        div{
            height: 100%;

            .small-device{
                height: 100%
            }
        }
        .large-device{
            div{
                height: 100%;

                .vx-card{
                    height: 100%;
                }
            }
        }
    }

    .customize-dropdown{
        cursor: pointer;
    }
</style>
