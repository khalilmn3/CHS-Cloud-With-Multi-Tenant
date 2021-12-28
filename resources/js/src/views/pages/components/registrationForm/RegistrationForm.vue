<template>
    <div class="guest-form">
        <dialog-prompt class="registration-form"
            scrollOff
            :button1="modeDataValue !== global.modeData.tracking && (activeTab == 1 && (resvStatus !== global.reservationStatus.checkIn) && ((vModel.status_code == global.reservationStatus.new) || (vModel.status_code == global.reservationStatus.waitList) || (modeDataValue == global.modeData.insert) || (isGuestInHouse && vModel.status_code == global.folioStatus.open) || (isFolioHistory) ))"
            :button2="modeDataValue !== global.modeData.tracking && (activeTab == 1) && (resvStatus == global.reservationStatus.checkIn) && (vModel.status_code == global.reservationStatus.new)"
            :textButton2 ="$t('button.checkIn')"
            :title="titleForm || titlePopup"
            :width="modeDataValue !== global.modeData.tracking ? 80 : 600"
            :active="modalMain"
            :idButton2="'button-checkin'"
            @button1="(isReservation || (isReservationFromAvaibility && isFromAvailability)) ? handleSaveReservation() : handleSaveGuestInHouse()"
            :buttonDisabled2="btnMainSaveDisabled"
            :idButton1="'button-save-main-form'"
            :buttonDisabled1="btnMainSaveDisabled"
            @button2="handleSaveReservation()"
            @close="val=>modalMain = val">
            <template #body>
                <div v-if="modeDataValue == global.modeData.tracking">
                    <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
                </div>
                <div v-else class="popup-body form-container">
                    <vs-tabs id="tabContainer" ref="popupContainer" class="popup-container" vs-position="left">
                        <!---------------- FORM RESERVATION ---------------------------->
                            <vs-tab id="stayInformation" @click="activeTab = 1" :label="$t('registrationForm.bookingInformation.title')" :data-vv-scope="scope1">
                                <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                    <vs-collapse type="margin">
                                    <!---------------------------------TAB CONTENT 1 ------------------------------------------->
                                        <vx-card class="mb-3" icon="date_range" :title="$t('registrationForm.bookingInformation.form.bookingInformation')" collapseAction>
                                            <vs-row>
                                                <vs-col class="content-left lg:w-1/2">
                                                    <vs-row vs-type="flex" vs-justify="space-between">
                                                        <vs-col vs-lg="6" vs-xs="6"><span style="font-weight:bold">{{$t('registrationForm.bookingInformation.form.stayInformation')}}</span></vs-col>
                                                        <vs-col vs-lg="4" vs-xs="6"><vs-input-number :disabled="isFolioHistory" @input="handleChangeNight(); getRoomNumber('bed_type',vModel)" class="number-input" min="1" :label="$t('registrationForm.bookingInformation.form.night')+':'" v-model="nights" /></vs-col>
                                                    </vs-row>
                                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-col class="wrap-form-select" vs-lg="6" vs-xs="12">
                                                            <vs-row><label><span class="required"> {{$t('registrationForm.bookingInformation.form.arrivalDate')}}</span></label></vs-row>
                                                            <vs-row>
                                                                <date-picker
                                                                    :clearable="false"
                                                                    :disabled="(!isReservation || (isFromAvailability && !isReservationFromAvaibility)|| (resvStatus == global.reservationStatus.checkIn))"
                                                                    :disabled-date="dateTodayDisable"
                                                                    type="datetime"
                                                                    :show-time-panel="showTimeRangePanel"
                                                                    @close="showTimeRangePanel = false"
                                                                    @input="getTotalDays(); getRoomNumber('',vModel)"
                                                                    confirm
                                                                    confirm-text="Ok"
                                                                    :lang="$t('lang')"
                                                                    value-type="YYYY-MM-DD HH:mm:ss"
                                                                    format="DD/MM/YYYY HH:mm:ss"
                                                                    label="name"
                                                                    class="w-full"
                                                                    v-model="vModel.arrival" v-validate="'required'" name="arrival" :data-vv-scope="scope1">
                                                                    <template v-slot:footer>
                                                                        <vs-button size="small" @click="resetDate">
                                                                            {{ $t('common.datepicker.reset') }}
                                                                        </vs-button>
                                                                        <vs-button size="small" @click="toggleTimeRangePanel">
                                                                            {{ showTimeRangePanel ? $t('common.datepicker.selectDate') : $t('common.datepicker.selectTime') }}
                                                                        </vs-button>
                                                                    </template>
                                                                </date-picker>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.arrival')">{{ errors.first(scope1+'.arrival')}}</span>
                                                            </vs-row>
                                                        </vs-col>
                                                        <vs-col class="wrap-form-select" vs-lg="6" vs-xs="12">
                                                            <vs-row><label><span class="required"> {{$t('registrationForm.bookingInformation.form.departureDate')}}</span></label></vs-row>
                                                            <vs-row>
                                                                <date-picker
                                                                    :disabled="isFolioHistory"
                                                                    :clearable="false"
                                                                    :disabled-date="dateTodayDisable"
                                                                    type="datetime"
                                                                    :show-time-panel="showTimeRangePanel"
                                                                    @close="showTimeRangePanel = false"
                                                                    @input="getTotalDays(); getRoomNumber('',vModel)"
                                                                    confirm
                                                                    confirm-text="Ok"
                                                                    :lang="$t('lang')"
                                                                    value-type="YYYY-MM-DD HH:mm:ss"
                                                                    format="DD/MM/YYYY HH:mm:ss"
                                                                    label="name"
                                                                    class="w-full"
                                                                    v-model="vModel.departure" v-validate="'required'" name="departure" :data-vv-scope="scope1">
                                                                    <template v-slot:footer>
                                                                        <vs-button size="small" @click="resetDate">
                                                                            {{ $t('common.datepicker.reset') }}
                                                                        </vs-button>
                                                                        <vs-button size="small" @click="toggleTimeRangePanel">
                                                                            {{ showTimeRangePanel ? $t('common.datepicker.selectDate') : $t('common.datepicker.selectTime') }}
                                                                        </vs-button>
                                                                    </template>
                                                                </date-picker>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.arrival')">{{ errors.first(scope1+'.arrival')}}</span>
                                                            </vs-row>
                                                        </vs-col>
                                                    </vs-row>
                                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-1/2 required">
                                                        <vs-row><label>{{$t('registrationForm.bookingInformation.form.roomType')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select :disabled="(vModel.is_lock == '-1' && isReservation) || ((modeDataValue == global.modeData.edit && !isReservation) || ((isFromAvailability && !isReservationFromAvaibility) ? true:false) || (resvStatus == global.reservationStatus.checkIn) || (isFolioHistory))" @input="getRoomNumber(null,vModel); resetOptionsChange=true; resetOnOptionsChangeRoomNumber = true" class="w-full" id="form-select" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.room_type" v-model="vModel.room_type_code" v-validate="'required'" name="room type" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.room type')">{{ errors.first(scope1+'.room type') || dbErrors.room_type_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                        <div class="wrap-form-select w-full md:w-1/2 required">
                                                            <vs-row><label>{{$t('registrationForm.bookingInformation.form.bedType')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select :disabled="(vModel.is_lock == '-1' && isReservation) || ((modeDataValue == global.modeData.edit && !isReservation) || ((isFromAvailability && !isReservationFromAvaibility) ? true:false) || (resvStatus == global.reservationStatus.checkIn) || (isFolioHistory))" @input="getRoomNumber('bed_type',vModel);resetOptionsChange=true; resetOnOptionsChangeRoomNumber = true" id="form-select" :resetOnOptionsChange="resetOptionsChange" :clearable="false" class="w-full" label="name" :reduce="value => value.code" :options="bedTypes" v-model="vModel.bed_type_code" v-validate="'required'" name="bed type" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.bed type')">{{ errors.first(scope1+'.bed type') || dbErrors.bed_type_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-row :class="{'required' : isRoomNumberRequired}" class="wrap-form-select w-full">
                                                            <label><span style="margin-right:5px; margin-top: auto;">{{$t('registrationForm.bookingInformation.form.room')}}</span></label>
                                                            <vs-checkbox v-if="isReservation" :disabled="(vModel.is_lock == '-1' && isReservation) || resvStatus == global.reservationStatus.checkIn" class="w-full md:w-6/12" @input="getRoomNumber('bed_type',vModel)" style="padding:0px; margin: inherit;" v-model="readyRoom">{{ $t('registrationForm.bookingInformation.form.ready') }}</vs-checkbox>
                                                        </vs-row>
                                                        <vs-row  vs-type="flex" vs-justify="space-between">
                                                            <vs-col vs-w="4" vs-xs="12">
                                                                    <vs-row>
                                                                        <v-select class="wrap-form-select w-full height250" :disabled="(vModel.is_lock == '-1' && isReservation) || ((modeDataValue==global.modeData.edit && !isReservation) || ((isFromAvailability && !isReservationFromAvaibility) ? true:false) || (resvStatus == global.reservationStatus.checkIn) || (isFolioHistory))" :resetOnOptionsChange="resetOnOptionsChangeRoomNumber" id="form-select" label="number" :reduce="value => value.number" :options="roomNumber" v-model="vModel.room_number" v-validate="!isReservation || isRoomNumberRequired ? 'required' : ''" name="room number" :data-vv-scope="scope1" ></v-select>
                                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.room number')">{{ errors.first(scope1+'.room number') || dbErrors.room_number | toString  }}</span>
                                                                    </vs-row>
                                                            </vs-col>
                                                            <vs-col style="margin-right:15px;" vs-w="3" vs-xs="12">
                                                                <vs-input-number :disabled="(isFolioHistory)" class="number-input" min="1" :label="$t('registrationForm.bookingInformation.form.adult')+':'" v-model="vModel.adult" v-validate="'required'" name="adult" :data-vv-scope="scope1" />
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.adult')">{{ errors.first(scope1+'.adult') || dbErrors.adult | toString  }}</span>
                                                            </vs-col>
                                                            <vs-col style="margin-right:15px;" vs-w="3" vs-xs="12">
                                                                <vs-input-number :disabled="(isFolioHistory)" class="number-input" :label="$t('registrationForm.bookingInformation.form.child')+':'" v-model="vModel.child" />
                                                            </vs-col>
                                                        </vs-row>
                                                        <vs-row class="wrap-form-select"  vs-type="flex" vs-justify="space-between">
                                                            <span id="available" v-if="vModel.room_type_code" style="margin-right:5px; margin-top: auto;">{{$t('registrationForm.bookingInformation.form.available')}} : {{ availableRoom }}</span>
                                                        </vs-row>
                                                    </vs-row>
                                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div :class="{'required' : isBusinessSourceRequired}" class="wrap-form-select w-full md:w-4/12">
                                                        <vs-row><label>{{$t('registrationForm.bookingInformation.form.businessSource')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select :disabled="(isFolioHistory)" class="w-full height200" id="form-select" @input="getRoomRate(vModel)" label="name" :reduce="value => value.code" :options="dataLookup.business_source" v-model="vModel.business_source_code" v-validate="isBusinessSourceRequired ? 'required' : ''" name="business source" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.business source')">{{ errors.first(scope1+'.business source') || dbErrors.business_source_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                        <div class="wrap-form-select w-full md:w-4/12">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.commissionType')}}</vs-row>
                                                            <vs-row>
                                                                <v-select :disabled="(isFolioHistory)" id="form-select" class="w-full height200" label="name" :reduce="value => value.code" :options="dataLookup.commission_type" v-model="vModel.commission_type_code"></v-select>
                                                            </vs-row>
                                                        </div>
                                                        <div class="wrap-form-select w-full md:w-4/12">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.commissionValue')}}</vs-row>
                                                            <vs-row>
                                                                <input-number :disabled="(isFolioHistory)" ref="quantity" class="w-full" v-model="vModel.commission_value" />
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div :class="{'required' : isMarketRequired}" class="wrap-form-select w-full md:w-6/12">
                                                        <vs-row><label>{{$t('registrationForm.bookingInformation.form.market')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select :disabled="(isFolioHistory)" class="w-full height150" :clearable="false" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.market" v-model="vModel.market_code" v-validate="isMarketRequired ? 'required' : ''" name="market" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.market')">{{ errors.first(scope1+'.market') || dbErrors.market_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                        <div class="wrap-form-select w-full md:w-6/12">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.bookingSource')}}</vs-row>
                                                            <vs-row>
                                                                <v-select :disabled="(isFolioHistory)" id="form-select" class="w-full height150" label="name" :reduce="value => value.code" :options="dataLookup.booking_source" v-model="vModel.booking_source_code"></v-select>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                </vs-col>
                                        <!------------------ COLOM TWO ------------------------------>
                                                <vs-col class="content-right lg:w-1/2">
                                                    <span style="font-weight:bold">{{$t('registrationForm.bookingInformation.form.rateInformation')}}</span>
                                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-6/12 required">
                                                            <vs-row><label>{{$t('registrationForm.bookingInformation.form.roomRate')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select :disabled="(isFolioHistory)" class="w-full" id="form-select" :clearable="false" @input="getDailyRate(vModel)" :resetOnOptionsChange="resetOptionsChange" label="name" :reduce="value => value.code" :options="roomRates" v-model="vModel.room_rate_code" v-validate="'required'" name="room rate" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.room rate')">{{ errors.first(scope1+'.room rate') || dbErrors.room_rate_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                        <div class="w-full md:w-1/2">
                                                            <vs-row>
                                                                <span class="wrap-form-select" style="margin-right:5px;">{{$t('registrationForm.bookingInformation.form.discount')}}</span>
                                                                <vs-radio :disabled="(isFolioHistory)" class="w-full wrap-form-select md:w-4/12" @input="setDiscountRate" v-model="vModel.discount_percent" vs-name="percent_amount" vs-value="0" >{{$t('registrationForm.bookingInformation.form.amount')}}</vs-radio>
                                                                <vs-radio :disabled="(isFolioHistory)" class="w-full wrap-form-select md:w-3/12" @input="setDiscountRate" v-model="vModel.discount_percent" vs-name="percent_amount" vs-value="-1" >{{$t('registrationForm.bookingInformation.form.percent')}}</vs-radio>
                                                            </vs-row>
                                                            <vs-row>
                                                                <input-number :disabled="(isFolioHistory)" class="w-full" @input="setDiscountRate" v-model="vModel.discount" />
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <input-number :disabled="(isFolioHistory)" class="w-full md:w-1/2" @input="setDiscountRate" :label="$t('common.weekday')" v-model="vModel.weekday_rate" />
                                                        <input-number disabled class="w-full md:w-1/2"  label="." v-model="weekday_rate_discount" />
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <input-number :disabled="(isFolioHistory)" class="w-full md:w-1/2" @input="setDiscountRate" :label="$t('common.weekend')" v-model="vModel.weekend_rate" />
                                                        <input-number disabled class="w-full md:w-1/2" label="." v-model="weekend_rate_discount" />
                                                    </vs-row>
                                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-6/12 required">
                                                            <vs-row><label>{{$t('registrationForm.bookingInformation.form.paymentType')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select :disabled="(isFolioHistory)" class="w-full" id="form-select" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.payment_type" v-model="vModel.payment_type_code" v-validate="'required'" name="payment type" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.payment type')">{{ errors.first(scope1+'.payment type') || dbErrors.payment_type_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row vs-type="flex" class="wrap-form-select mt-3" vs-justify="space-between">
                                                        <vs-textarea :disabled="(isFolioHistory)" class="w-full" :label="$t('registrationForm.bookingInformation.form.billInstruction')" v-model="vModel.bill_instruction" />
                                                    </vs-row>
                                                </vs-col>
                                            </vs-row>
                                        </vx-card>
                                    <!-------------------------------- TAB CONTENT 2 ------------------------------------------->
                                        <vx-card class="mb-3" icon="date_range" :title="$t('registrationForm.bookingInformation.form.personalInformation')" collapseAction>
                                            <vs-row>
                                                <vs-col vs-lg="6" vs-xs="12" class="content-left">
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div :class="{'required' : isTitleRequired}" class="wrap-form-select w-full md:w-4/12">
                                                            <vs-row><label>{{$t('registrationForm.bookingInformation.form.title')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select class="w-full" id="form-select" label="code" :reduce="value => value.code" :options="dataLookup.title" v-model="vModel.title_code" name="title" v-validate="isTitleRequired ? 'required' : ''" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.title')">{{ errors.first(scope1+'.title') || dbErrors.title_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                        <div class="w-full vs-input md:w-8/12">
                                                            <vs-row class="wrap-form-select required"><label>{{$t('registrationForm.bookingInformation.form.fullName')}}</label></vs-row>
                                                            <vs-row>
                                                                <suggestions
                                                                    id="fullname"
                                                                    v-model="vModel.full_name"
                                                                    :options="guestProfileOptions"
                                                                    class="w-full"
                                                                    :onItemSelected="onSearchItemSelected"
                                                                    :onInputChange="onInputChange"
                                                                    v-validate="'required'" name="fullname" :data-vv-scope="scope1">
                                                                    <div slot="item" slot-scope="props" class="single-item">
                                                                        <span>{{props.item.full_name}}</span>
                                                                    </div>
                                                                </suggestions>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.fullname')">{{ errors.first(scope1+'.fullname') || dbErrors.full_name | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                        <vs-row vs-type="flex" class="wrap-form-select" vs-justify='flex-end'>
                                                            <vs-button @click="resetGuestInformationDetail" size="small">Reset</vs-button>
                                                        </vs-row>
                                                    </vs-row>
                                                    <vs-row v-if="(isReservation || isReservationFromAvaibility)" :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.resvBy')" :description-text="errors.first(scope1+'.reservation by') || dbErrors.reservation_by | toString" class="required w-full" v-model="vModel.reservation_by" :maxLength="100" v-validate="'required'" name="reservation by" :data-vv-scope="scope1"/>
                                                        <!-- <span class="error-text text-danger" v-show="errors.has(scope1+'.reservation by')">{{ errors.first(scope1+'.reservation by') || dbErrors.reservation_by | toString  }}</span> -->
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.member')}}</vs-row>
                                                            <vs-row>
                                                                <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="dataLookup.member" v-model="vModel.member_code"></v-select>
                                                            </vs-row>
                                                        </div>
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.street')" class="w-full md:w-1/2" v-model="vModel.street" :maxLength="100"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                        <vs-row>{{$t('registrationForm.bookingInformation.form.country')}}</vs-row>
                                                            <vs-row>
                                                                <v-select class="w-full" @input="getState(true); resetOnOptionsChangeState = true" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.country" v-model="vModel.country_code"></v-select>
                                                            </vs-row>
                                                        </div>
                                                        <div :class="{'required' : isStateRequired}" class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row><label>{{$t('registrationForm.bookingInformation.form.state')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select id="form-select" @input="getState(false); resetOnOptionsChangeCity = true" :resetOnOptionsChange="resetOnOptionsChangeState" class="w-full" label="name" :reduce="value => value.code" :options="state" v-model="vModel.state_code" v-validate=" isStateRequired ? 'required' : ''" name="state" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.state')">{{ errors.first(scope1+'.state') || dbErrors.state_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div :class="{'required' : isStateRequired}" class="wrap-form-select w-full md:w-1/2">
                                                        <vs-row><label>{{$t('registrationForm.bookingInformation.form.city')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select class="w-full" id="city" :resetOnOptionsChange="resetOnOptionsChangeCity" label="name" :reduce="value => value.code" :options="city" v-model="vModel.city_code" v-validate=" isCityRequired ? 'required' : ''" name="city" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.city')">{{ errors.first(scope1+'.city') || dbErrors.city_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                        <vs-input :disabled="vModel.city_code !== 'OTH'" class="w-full md:w-1/2" label="." v-model="vModel.city"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div :class="{'required' : isNationalityRequired}" class="wrap-form-select w-full md:w-1/2">
                                                        <vs-row><label>{{$t('registrationForm.bookingInformation.form.nationality')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select class="w-full" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.nationality" v-model="vModel.nationality_code" v-validate=" isNationalityRequired ? 'required' : ''" name="nationality" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.nationality')">{{ errors.first(scope1+'.nationality') || dbErrors.nationality_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                        <vs-input class="w-full md:w-1/2" :label="$t('registrationForm.bookingInformation.form.postCode')" v-model="vModel.postal_code" :maxLength="10"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <span class="wrap-form-select" style="margin-right:5px;">{{$t('registrationForm.bookingInformation.form.gender')}}</span>
                                                        <vs-radio class="w-full wrap-form-select md:w-4/12 " v-model="vModel.is_male" vs-name="is_male" vs-value="-1" >{{$t('registrationForm.bookingInformation.form.male')}}</vs-radio>
                                                        <vs-radio class="w-full wrap-form-select md:w-4/12" v-model="vModel.is_male" vs-name="is_male" vs-value="0" >{{$t('registrationForm.bookingInformation.form.female')}}</vs-radio>
                                                    </vs-row>
                                                </vs-col>
                                        <!-------------------------------- COLOM TWO ---------------------------------->
                                                <vs-col vs-lg="6" vs-xs="12" class="content-right">
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.phone')+' 1'" :class="{'required' : isPhone1Required}" class="w-full md:w-1/2" placeholder="+62xxxxxxxxxxx" v-model="vModel.phone1" :maxLength="50" :description-text="errors.first(scope1+'.phone1') || dbErrors.phone1 | toString" v-validate=" isPhone1Required ? 'required' : ''" name="phone1" :data-vv-scope="scope1"/>
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.phone')+' 2'" class="w-full md:w-1/2" placeholder="+62xxxxxxxxxxx" v-model="vModel.phone2" :maxLength="50"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.fax')" class="w-full md:w-1/2" v-model="vModel.fax" :maxLength="20"/>
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.email')" :class="{'required' : isEmailRequired}" class="w-full md:w-1/2" placeholder="anonym@somewhere.com" v-model="vModel.email" :maxLength="50" :description-text="errors.first(scope1+'.email') || dbErrors.email | toString" v-validate=" isEmailRequired ? 'required' : ''" name="email" :data-vv-scope="scope1"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.website')" class="w-full md:w-1/2" placeholder="www.website.com" v-model="vModel.website" :maxLength="50"/>
                                                        <div :class="{'required' : isPhone1Required}" class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row><label>{{$t('registrationForm.bookingInformation.form.company')}}</label></vs-row>
                                                            <vs-row>
                                                                <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="dataLookup.company" v-model="vModel.company_code" v-validate=" isCompanyRequired ? 'required' : ''" name="company" :data-vv-scope="scope1"></v-select>
                                                                <span class="error-text text-danger" v-show="errors.has(scope1+'.company')">{{ errors.first(scope1+'.company') || dbErrors.company_code | toString  }}</span>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.gsType')}}</vs-row>
                                                            <vs-row>
                                                                <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="dataLookup.guest_type" v-model="vModel.guest_type_code"></v-select>
                                                            </vs-row>
                                                        </div>
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row>.</vs-row>
                                                            <vs-row class="wrap-form-select w-full">
                                                                <vs-checkbox class="w-full" style="padding:0px; margin: inherit;" v-model="vModel.is_incognito">{{ $t('registrationForm.bookingInformation.form.incognitoGuest') }}</vs-checkbox>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.idCardType')}}</vs-row>
                                                            <vs-row>
                                                                <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="dataLookup.id_card" v-model="vModel.id_card_code"></v-select>
                                                            </vs-row>
                                                        </div>
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.idCardNumber')" class="w-full md:w-1/2" v-model="vModel.id_card_number" :maxLength="25"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.birthPlace')" class="w-full md:w-1/2" v-model="vModel.birth_place" :maxLength="50"/>
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.birthDate')}}</vs-row>
                                                            <vs-row>
                                                                <date-picker
                                                                    type="date"
                                                                    confirm
                                                                    confirm-text="Ok"
                                                                    :lang="$t('lang')"
                                                                    value-type="YYYY-MM-DD"
                                                                    format="DD/MM/YYYY"
                                                                    label="name"
                                                                    class="w-full"
                                                                    placeholder="DD/MM/YYYY"
                                                                    v-model="vModel.birth_date">
                                                                    <template v-slot:footer>
                                                                        <vs-button size="small" @click="resetDate">
                                                                            {{ $t('common.datepicker.reset') }}
                                                                        </vs-button>
                                                                    </template>
                                                                </date-picker>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                </vs-col>
                                            </vs-row>
                                        <!-- </tab-content> -->
                                        </vx-card>

                                    <!---------------------------------TAB CONTENT 3 ------------------------------------------->
                                        <vx-card icon="date_range" :title="$t('registrationForm.bookingInformation.form.generalInformation')" collapseAction>
                                            <vs-row>
                                                <vs-col vs-lg="6" vs-xs="12" class="content-left">
                                                    <vs-row :class="[rowMarginBottom, 'wrap-form-select']" vs-type="flex" vs-justify="space-between">
                                                        <vs-row>{{$t('registrationForm.bookingInformation.form.group')}}</vs-row>
                                                            <vs-row>
                                                                <v-select class="w-full" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.group" v-model="vModel.group_code" ></v-select>
                                                            </vs-row>
                                                    </vs-row>
                                                    <vs-row :class="[rowMarginBottom, 'wrap-form-select']" vs-type="flex" vs-justify="space-between">
                                                        <vs-row>{{$t('registrationForm.bookingInformation.form.marketing')}}</vs-row>
                                                            <vs-row>
                                                                <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="dataLookup.marketing" v-model="vModel.marketing_code"></v-select>
                                                            </vs-row>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.doc')+' #'" class="w-full" v-model="vModel.document_number" :maxLength="50"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.taVoucher')+' #'" :class="{'required' : isTAVoucherRequired}" class="w-full" v-model="vModel.voucher_number_ta" :maxLength="50" :description-text="errors.first(scope1+'.ta voucher') || dbErrors.voucher_number_ta | toString" v-validate=" isTAVoucherRequired ? 'required' : ''" name="ta voucher" :data-vv-scope="scope1"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.flightNumber')+' #'" class="w-full" v-model="vModel.flight_number" :maxLength="20"/>
                                                    </vs-row>
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                        <vs-row>{{$t('registrationForm.bookingInformation.form.flightArrival')}}</vs-row>
                                                        <vs-row>
                                                            <date-picker
                                                                type="datetime"
                                                                :show-time-panel="showTimeRangePanel"
                                                                @close="showTimeRangePanel = false"
                                                                confirm
                                                                confirm-text="Ok"
                                                                :lang="$t('lang')"
                                                                value-type="YYYY-MM-DD HH:mm:ss"
                                                                format="DD/MM/YYYY HH:mm:ss"
                                                                label="name"
                                                                class="w-full"
                                                                placeholder="DD/MM/YYYY HH:mm:ss"
                                                                v-model="vModel.flight_arrival">
                                                                <template v-slot:footer>
                                                                    <vs-button size="small" @click="resetDate">
                                                                        {{ $t('common.datepicker.reset') }}
                                                                    </vs-button>
                                                                    <vs-button size="small" @click="toggleTimeRangePanel">
                                                                        {{ showTimeRangePanel ? $t('common.datepicker.selectDate') : $t('common.datepicker.selectTime') }}
                                                                    </vs-button>
                                                                </template>
                                                            </date-picker>
                                                        </vs-row>
                                                        </div>
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.flightDeparture')}}</vs-row>
                                                            <vs-row>
                                                                <date-picker
                                                                    type="datetime"
                                                                    :show-time-panel="showTimeRangePanel"
                                                                    @close="showTimeRangePanel = false"
                                                                    confirm
                                                                    confirm-text="Ok"
                                                                    :lang="$t('lang')"
                                                                    value-type="YYYY-MM-DD HH:mm:ss"
                                                                    format="DD/MM/YYYY HH:mm:ss"
                                                                    label="name"
                                                                    class="w-full"
                                                                    placeholder="DD/MM/YYYY HH:mm:ss"
                                                                    v-model="vModel.flight_departure">
                                                                    <template v-slot:footer>
                                                                        <vs-button size="small" @click="resetDate">
                                                                            {{ $t('common.datepicker.reset') }}
                                                                        </vs-button>
                                                                        <vs-button size="small" @click="toggleTimeRangePanel">
                                                                            {{ showTimeRangePanel ? $t('common.datepicker.selectDate') : $t('common.datepicker.selectTime') }}
                                                                        </vs-button>
                                                                    </template>
                                                                </date-picker>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                </vs-col>
                                            <!-- COLOM TWO -->
                                                <vs-col vs-lg="6" vs-xs="12" class="content-right">
                                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row class="wrap-form-select w-full">
                                                                <vs-checkbox class="w-full" style="padding:0px; margin: inherit;" v-model="vModel.show_notes">{{ $t('registrationForm.bookingInformation.form.showNotesAtCheckIn') }}</vs-checkbox>
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row :class="[rowMarginBottom, 'wrap-form-select']" vs-type="flex" vs-justify="space-between">
                                                        <vs-textarea style="margin-bottom:0px" class="w-full" :placeholder="$t('placeholder.notes')" :label="$t('registrationForm.bookingInformation.form.notes')" v-model="vModel.notes" />
                                                    </vs-row>
                                                    <vs-row :class="[rowMarginBottom, 'wrap-form-select']" vs-type="flex" vs-justify="space-between">
                                                        <vs-textarea :class="{'required' : isHKNoteRequired}" class="w-full" :placeholder="$t('placeholder.notes')" :label="$t('registrationForm.bookingInformation.form.hkNotes')" v-model="vModel.hk_note" v-validate=" isHKNoteRequired ? 'required' : ''" name="hk note" :data-vv-scope="scope1" style="margin-bottom:0px"/>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.hk note')">{{ errors.first(scope1+'.hk note') || dbErrors.hk_note | toString  }}</span>
                                                    </vs-row>
                                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.resv')+' #'}}</vs-row>
                                                            <vs-row>
                                                                <vs-input disabled class="w-full" v-model="vModel.reservation_number" />
                                                            </vs-row>
                                                        </div>
                                                        <div class="wrap-form-select w-full md:w-1/2">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.folio')+' #'}}</vs-row>
                                                            <vs-row>
                                                                <vs-input disabled class="w-full" v-model="vModel.folio_number" />
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                        <div class="wrap-form-select w-full">
                                                            <vs-row>{{$t('registrationForm.bookingInformation.form.balance')+' #'}}</vs-row>
                                                            <vs-row>
                                                                <input-number disabled class="w-full" v-model="vModel.balance" />
                                                            </vs-row>
                                                        </div>
                                                    </vs-row>
                                                </vs-col>
                                            </vs-row>
                                        </vx-card>
                                    </vs-collapse>
                                </VuePerfectScrollbar>
                            </vs-tab>
                        <!---------------- DEPOSIT TABLE COMPONENT --------------------->
                            <vs-tab v-if="isReservation" :disabled="depositTab" id="deposit" @click="activeTab = 2" :label="$t('registrationForm.deposit.title.deposit')">
                                <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                    <vs-card>
                                        <vs-row vs-type="flex" vs-align="center" vs-justify="space-between">
                                            <h6>{{ $t('registrationForm.deposit.balance') }} : {{ balanceDeposit | currency_format }} </h6>
                                            <div class="flex">
                                                <vs-button :disabled="!depositAccess.transfer" class="mr-2" @click="handleTransferDeposit" color="success"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/transfer_icon24.png"/>{{ $t('button.transfer') }}</vs-button>
                                                <vs-button :disabled="!depositAccess.cash && !depositAccess.card && !depositAccess.cashRefund && !depositAccess.otherPayment"  @click="modalPaymentOption=!modalPaymentOption" icon="add">{{ $t('button.payment') }}</vs-button>
                                            </div>
                                        </vs-row>
                                    </vs-card>
                                    <vs-card id="depositTable" class="vs-con-loading__container">
                                        <div style="overflow:auto">
                                            <vs-row vs-w="6" class="mb-3">
                                                <vs-col vs-lg="6">
                                                    <vs-row>
                                                        <label for="">{{ $t('registrationForm.deposit.showVoid') }}</label>
                                                        <vs-switch id="void" label="void" v-model="showVoidDeposit" v-on:change="getDepositList()" vs-icon="done"/>
                                                    </vs-row>
                                                </vs-col>
                                                <vs-col vs-lg="6">
                                                    <vs-row>
                                                        <label for="">{{ $t('registrationForm.deposit.showCorrection') }}</label>
                                                        <vs-switch id="correction" color="success" v-on:change="getDepositList()" v-model="showCorrectionDeposit" vs-icon="done"/>
                                                    </vs-row>
                                                </vs-col>
                                            </vs-row>
                                            <deposit :table="true" :userAccess="depositAccess" @handleUpdateType="handleUpdateTypeDeposit" @handleTransferDeposit="handleTransferDeposit" @showModal="showDepositForm" @printReceipt="handlePrintReceipt" :data="guestDeposit" :total="totalGuestDeposit" @credential="showCredential"></deposit>
                                        </div>
                                    </vs-card>
                                </VuePerfectScrollbar>
                            </vs-tab>
                        <!---------------- SCHEDULED RATE TABLE COMPONENT -------------->
                            <vs-tab :disabled="scheduledRateTab" id="scheduledRate" @click="activeTab = 3" :label="$t('registrationForm.scheduledRate.title')">
                                <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                    <vs-row vs-type="flex" vs-justify="flex-end">
                                        <vs-button @click="handleSidebarScheduledRate('',global.modeData.insert)" icon="add">{{ $t('button.insert') }}</vs-button>
                                    </vs-row>
                                    <br/>
                                    <scheduled-rate ref="scheduledRate" @refreshData="getScheduledRate()" @delete="handleDeleteScheduledRate" @showModal="handleSidebarScheduledRate" :table="true" :data="scheduledRate"></scheduled-rate>
                                </VuePerfectScrollbar>
                            </vs-tab>
                        <!---------------- EXTRA CHARGE TABLE COMPONENT ---------------->
                            <vs-tab :disabled="extraChargeTab" id="extraCharge" @click="activeTab = 4" :label="$t('registrationForm.extraCharge.title.extraCharge')">
                                <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                    <extra-charge ref="extraCharge" :table="true" @handlePackage="handlePackage" @refreshData="getExtraCharge" @showModal="showExtraChargeForm" @delete="deleteExtraCharge" :data="extraCharges"></extra-charge>
                                </VuePerfectScrollbar>
                            </vs-tab>
                    </vs-tabs>
                </div>
            <!---------------- END FORM ---------------->
            <!----------- POPUP CHILD ------------------>
                <dialog-prompt :idPrompt="'popup-deposit'" paymentForm
                    :button1="modeChildValue !== global.modeData.tracking"
                    :title="modalChildTitle"
                    :width="modeChildValue == global.modeData.tracking ? 800 : ''"
                    :active="modalChild"
                    :idButton1="'button-save-child-form'"
                    :buttonDisabled1="btnChildSaveDisabled"
                    @button1="(modeChildValue === global.modeDeposit.cash || modeChildValue === global.modeDeposit.card || modeChildValue === global.modeDeposit.other|| modeChildValue === global.modeDeposit.refund) ? saveDeposit() : ''"
                    @close="val=>modalChild = val">
                    <template #body>

                        <div v-if="modeChildValue === global.modeData.tracking">
                            <tracking v-bind:idData="idData" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
                        </div>
                        <!--------- START POPUP DEPOSIT----------->
                        <div v-else-if="modeChildValue === global.modeDeposit.cash || modeChildValue === global.modeDeposit.card || modeChildValue === global.modeDeposit.other|| modeChildValue === global.modeDeposit.refund" class="popup-body">
                            <div ref="form">
                                <vs-row class="mt-6">
                                <!--------- COLUMN ONE ----------->
                                    <div id="transaction" :class="{'content-left vs-lg-6 vs-xs-12' : modeChildValue === global.modeDeposit.card}">
                                        <h5 v-if="modeChildValue === global.modeDeposit.card" style="margin-bottom:5px">Transaction Information</h5>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{$t('transaction.currency')}}</vs-row>
                                                <vs-row>
                                                    <v-select class="w-full" @input="getExchangeRate" id="form-select" :clearable="false" label="code" :reduce="value => value.code" :options="dataLookupDeposit.currency" v-model="vDeposit.currency_code" v-validate="'required'" name="currency" data-vv-scope="deposit"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has('deposit.currency')">{{ errors.first('deposit.currency') }}</span>
                                                </vs-row>
                                            </div>
                                            <input-number disabled ref="quantity" class="w-full md:w-1/2" :label="$t('transaction.excRate')" v-model="vDeposit.exchange_rate" :description="errors.first('deposit.exc.rate') || dbErrors.exchange_rate | toString" v-validate="'required'" name="exc.rate" data-vv-scope="deposit" />
                                        </vs-row>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{$t('transaction.subDepartment')}}</vs-row>
                                                <vs-row>
                                                    <v-select class="w-full height250" id="form-select" @input="getAccount()" append-to-body :clearable="false" label="name" :reduce="value => value.code" :options="dataLookupDeposit.sub_department" v-model="vDeposit.sub_department_code" v-validate="'required'" name="sub department" data-vv-scope="deposit"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has('deposit.sub department')">{{ errors.first('deposit.sub department') }}</span>
                                                </vs-row>
                                            </div>
                                            <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{$t('transaction.account')}}</vs-row>
                                                <vs-row>
                                                    <v-select id="form-select" :resetOnOptionsChange="true" :clearable="false" label="name" class="w-full" :options="accounts" v-model="account" v-validate="'required'" name="account" data-vv-scope="deposit">
                                                        <template slot="option" slot-scope="option">
                                                            {{ option.code }} | {{ option.name }}
                                                        </template>
                                                    </v-select>
                                                    <span class="error-text text-danger" v-show="errors.has('deposit.account')">{{ errors.first('deposit.account') }}</span>
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <input-number class="w-full md:w-1/2" @input="getTotalAmount" :label="$t('transaction.amount') +' '+ vDeposit.currency_code" v-model="vDeposit.amount_foreign" :description="errors.first('deposit.amount') || dbErrors.quantity | toString" v-validate="'required|min_value:0.001'" name="amount" data-vv-scope="deposit" />
                                            <input-number disabled class="w-full md:w-1/2" :label="$t('transaction.amount')+' '+defaultCurrency" v-model="vDeposit.amount" />
                                        </vs-row>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <vs-input :label="$t('transaction.remark')" class="w-full" v-model="vDeposit.remark" :maxLength="50"/>
                                        </vs-row>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <vs-input :label="$t('transaction.docNumber')" class="w-full" v-model="vDeposit.document_number" :maxLength="50" :description="errors.first('deposit.doc number')" v-validate="'required'" name="doc number" data-vv-scope="deposit" />
                                            <span class="error-text text-danger" v-show="errors.has('deposit.doc number')">{{ errors.first('deposit.doc number') }}</span>
                                        </vs-row>
                                    </div>
                                <!--------- COLUMN TWO ----------->
                                    <vs-col v-if="modeChildValue === global.modeDeposit.card" vs-lg="6" vs-xs="12" class="content-right">
                                        <h4 style="margin-bottom:5px">Card Information</h4>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{$t('transaction.cardType')}}</vs-row>
                                                <vs-row>
                                                    <v-select class="w-full height250" id="form-select" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookupDeposit.card_bank" v-model="vDeposit.card_bank_code" v-validate="'required'" name="card bank" data-vv-scope="card"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has('card.card bank')">{{ errors.first('card.card bank') }}</span>
                                                </vs-row>
                                            </div>
                                            <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>.</vs-row>
                                                <vs-row>
                                                    <v-select id="form-select" :clearable="false" :reduce="value => value.code" label="name" class="w-full" :options="dataLookupDeposit.card_type" v-model="vDeposit.card_type_code" v-validate="'required'" name="card type" data-vv-scope="card">
                                                    </v-select>
                                                    <span class="error-text text-danger" v-show="errors.has('card.card type')">{{ errors.first('card.card type') }}</span>
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <vs-input :label="$t('transaction.cardNumber')" class="w-full" placeholder="1234-5678-1234-5678" v-model="vDeposit.card_number" :maxLength="50"/>
                                        </vs-row>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <vs-input :label="$t('transaction.cardHolder')" class="w-full md:w-1/2" v-model="vDeposit.holder" :maxLength="50"/>
                                            <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{ $t('transaction.expirationDate') }}</vs-row>
                                                <vs-row>
                                                    <vs-col vs-lg="6">
                                                        <v-select id="expDate" placeholder="MM" :clearable="false" class="w-full height200" :options="global.mt" v-model="vDeposit.exp_month"></v-select>
                                                    </vs-col>
                                                    <vs-col vs-lg="6">
                                                        <v-select id="expDate" placeholder="YY" :clearable="false" class="w-full height200" :options="global.yr" v-model="vDeposit.exp_year"></v-select>
                                                    </vs-col>
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <input-number class="w-full md:w-1/2" @input="getTotalAmount" :label="$t('transaction.charge') +' (%)'"  v-model="vDeposit.charge_percent" :description="errors.first('card.amount') || dbErrors.quantity | toString" v-validate="'required'" name="amount" data-vv-scope="card" />
                                            <input-number disabled class="w-full md:w-1/2" label="." v-model="vDeposit.charge_amount" :description="errors.first('card.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" data-vv-scope="card" />
                                        </vs-row>
                                        <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                            <input-number disabled class="w-full" :label="$t('transaction.totalAmount')" v-model="vDeposit.total_amount" :description="errors.first('card.amount') || dbErrors.quantity | toString" v-validate="'required'" name="amount" data-vv-scope="card" />
                                        </vs-row>
                                    </vs-col>
                                </vs-row>
                            </div>
                        </div>
                    <!-- ------- END POPUP DEPOSIT--------- -->

                <!-- ------- END POPUP EXTRA CHARGE ---------- -->
                    </template>
                </dialog-prompt>

                <!-- ------- START POPUP EXTRA CHARGE--------- -->
                <dialog-prompt
                    :button1="activeTabExtraCharge == 1"
                    :title="modalChildTitle"
                    :child="1"
                    :width="600"
                    :active="modalChildExtraCharge"
                    :idButton1="'button-save-child-form'"
                    :buttonDisabled1="btnChildSaveDisabled"
                    @button1="handleSaveExtraCharge()"
                    @close="val=>modalChildExtraCharge = val">
                    <template #body>
                        <div ref="form" class="flex">
                            <vs-tabs ref="popupContainer" class="popup-container" vs-position="left">
                                <vs-tab @click="activeTabExtraCharge = 1" :label="$t('registrationForm.extraCharge.title.extraCharge')">
                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                        <div class="wrap-form-select w-full md:w-1/2 required">
                                            <vs-row><label>{{$t('registrationForm.extraCharge.form.outlet')}}</label></vs-row>
                                            <vs-row>
                                                <v-select class="w-full" id="form-select" @input="handleChangeOutlet" label="name" :options="dlExtraCharge.outlet" v-model="vExtraCharge.outlet"/>
                                            </vs-row>
                                        </div>
                                        <div class="wrap-form-select w-full md:w-1/2 required">
                                            <vs-row><label>{{$t('registrationForm.extraCharge.form.product')}}</label></vs-row>
                                            <vs-row>
                                                <v-select class="w-full" id="form-select" @input="handleChangeProduct" :resetOnOptionsChange="resetProduct" label="name" :options="dlExtraCharge.product" v-model="vExtraCharge.product"/>
                                            </vs-row>
                                        </div>
                                    </vs-row>
                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                        <div class="wrap-form-select w-full md:w-1/2 required">
                                            <vs-row><label>{{$t('registrationForm.extraCharge.form.subDepartment')}}</label></vs-row>
                                            <vs-row>
                                                <v-select class="w-full" id="form-select" @input="handleChangeSubDepartment" :clearable="false" label="name" :reduce="value => value.code" :options="dlExtraCharge.sub_department" v-model="vExtraCharge.sub_department_code" v-validate="'required'" name="sub department" data-vv-scope="extraCharge"></v-select>
                                                <span class="error-text text-danger" v-show="errors.has('extraCharge.sub department')">{{ errors.first('extraCharge.sub department') }}</span>
                                            </vs-row>
                                        </div>
                                        <div class="wrap-form-select w-full md:w-1/2 required">
                                            <vs-row><label>{{$t('registrationForm.extraCharge.form.account')}}</label></vs-row>
                                            <vs-row>
                                                <v-select  class="w-full" id="form-select" :resetOnOptionsChange="resetOptionsChange" :clearable="false" label="name" :reduce="value => value.code" :options="dlExtraCharge.account" v-model="vExtraCharge.account_code" v-validate="'required'" name="account" data-vv-scope="extraCharge"/>
                                                <span class="error-text text-danger" v-show="errors.has('extraCharge.account')">{{ errors.first('extraCharge.account') }}</span>
                                            </vs-row>
                                        </div>
                                    </vs-row>
                                    <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                        <input-number :disabled="vExtraCharge.per_pax" class="w-full sm:w-4/12 required" :label="$t('registrationForm.extraCharge.form.quantity')"  v-model="vExtraCharge.quantity" :description="errors.first('extraCharge.quantity') || dbErrors.quantity | toString" v-validate="'required'" name="quantity" data-vv-scope="extraCharge"/>
                                        <input-number class="w-full sm:w-4/12 required" :label="$t('registrationForm.extraCharge.form.amount')" v-model="vExtraCharge.amount" :description="errors.first('extraCharge.amount') || dbErrors.quantity | toString" v-validate="'required'" name="amount" data-vv-scope="extraCharge" />
                                        <div class="w-full sm:w-1/4">
                                            <vs-row class="check-box-pax">
                                                <vs-checkbox class="w-full" v-model="vExtraCharge.per_pax" @input="vExtraCharge.quantity = vExtraCharge.per_pax ? 1 : vExtraCharge.quantity ; vExtraCharge.max_pax = vExtraCharge.per_pax ? 1000 : 1" >{{ $t('registrationForm.extraCharge.form.perPax') }}</vs-checkbox>
                                            </vs-row>
                                            <vs-row>
                                                <vs-checkbox :disabled="!vExtraCharge.per_pax" class="w-full" v-model="vExtraCharge.include_child">{{ $t('registrationForm.extraCharge.form.includeChild') }}</vs-checkbox>
                                            </vs-row>
                                        </div>
                                    </vs-row>
                                    <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                        <div class="wrap-form-select w-full md:w-1/2">
                                            <vs-row>{{$t('registrationForm.extraCharge.form.taxAndService')}}</vs-row>
                                            <vs-row>
                                                <v-select id="form-select" class="w-full" :clearable="false" label="name" :reduce="value => value.code" :options="dlExtraCharge.tax_and_service" v-model="vExtraCharge.tax_and_service_code"></v-select>

                                            </vs-row>
                                        </div>
                                        <div class="wrap-form-select w-full md:w-1/2 required">
                                            <vs-row><label>{{$t('registrationForm.extraCharge.form.chargeFrequency')}}</label></vs-row>
                                            <vs-row>
                                                <v-select id="form-select" class="w-full" :reduce="value => value.code" label="name" :clearable="false" :options="dlExtraCharge.charge_frequency" v-model="vExtraCharge.charge_frequency_code" v-validate="'required'" name="charge frequency" data-vv-scope="extraCharge"></v-select>
                                                <span class="error-text text-danger" v-show="errors.has('extraCharge.charge frequency')">{{ errors.first('extraCharge.charge frequency') }}</span>
                                            </vs-row>
                                        </div>
                                    </vs-row>
                                    <vs-row vs-type="flex" :class="rowMarginBottom" vs-justify="space-between">
                                        <vs-divider>Extra Charge</vs-divider>
                                        <vs-row vs-type="flex" vs-justify="space-between">
                                            <vs-input-number class="number-input md:w-3/12" :label="$t('registrationForm.extraCharge.form.maxPax')+':'" v-model="vExtraCharge.max_pax" min="1" />
                                            <input-number class="w-full md:w-4/12" :label="$t('registrationForm.extraCharge.form.extraPax')" v-model="vExtraCharge.extra_pax" />
                                            <vs-checkbox class="checkbox-3col w-full md:w-3/12" v-model="vExtraCharge.per_pax_extra">{{ $t('registrationForm.extraCharge.form.perPax') }}</vs-checkbox>
                                        </vs-row>
                                        <vs-divider class="mt-5"></vs-divider>
                                    </vs-row>
                                </vs-tab>
                                <vs-tab :disabled="extraChargeBreakdownTabDisabled" @click="activeTabExtraCharge = 2" :label="$t('registrationForm.extraCharge.title.breakdown')">
                                    <BreakdownExtraCharge ref="extraChargeBreakdown" @refreshData="getExtraChargeBreakdown" @delete="deleteExtraChargeBreakdown" @showModal="handleShowExtraChargeBreakdown" :data="extraChargeBreakdownData"/>
                                </vs-tab>
                            </vs-tabs>
                        </div>
                    </template>
                </dialog-prompt>
                <!-- BREAKDOWN  -->
                <dialog-prompt
                    button1
                    :title="titleExtraChargeBreakdown"
                    :child="2"
                    :width="500"
                    :active="modalChildExtraChargeBreakdown"
                    :idButton1="'button-save-child-breakdown-form'"
                    :buttonDisabled1="btnChildSaveDisabledBreakdown"
                    @button1="handleSaveExtraChargeBreakdown()"
                    @close="val=>modalChildExtraChargeBreakdown = val">
                    <template #body>
                        <div>
                            <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2 required">
                                    <vs-row><label>{{$t('registrationForm.extraCharge.form.outlet')}}</label></vs-row>
                                    <vs-row>
                                        <v-select class="w-full" id="form-select" @input="handleChangeOutletBreakdown()" label="name" :options="dlExtraChargeBreakdown.outlet" v-model="vExtraChargeBreakdown.outlet"/>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2 required">
                                    <vs-row><label>{{$t('registrationForm.extraCharge.form.product')}}</label></vs-row>
                                    <vs-row>
                                        <v-select class="w-full" id="form-select" @input="handleChangeProductBreakdown()" :resetOnOptionsChange="resetProductBreakdown" label="name" :options="dlExtraChargeBreakdown.product" v-model="vExtraChargeBreakdown.product"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2 required">
                                    <vs-row><label>{{$t('registrationForm.extraCharge.form.subDepartment')}}</label></vs-row>
                                    <vs-row>
                                        <v-select class="w-full" id="form-select" @input="handleChangeSubDepartmentBreakdown()" :clearable="false" label="name" :reduce="value => value.code" :options="dlExtraChargeBreakdown.sub_department" v-model="vExtraChargeBreakdown.sub_department_code" v-validate="'required'" name="sub department" data-vv-scope="extraChargeBreakdown"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('extraChargeBreakdown.sub department')">{{ errors.first('extraChargeBreakdown.sub department') }}</span>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2 required">
                                    <vs-row><label>{{$t('registrationForm.extraCharge.form.account')}}</label></vs-row>
                                    <vs-row>
                                        <v-select  class="w-full" id="form-select" @input="handleChangeAccount()" label="name" :reduce="value => value.code" :options="dlExtraChargeBreakdown.account" v-model="vExtraChargeBreakdown.account_code" v-validate="'required'" name="account" data-vv-scope="extraChargeBreakdown"/>
                                        <span class="error-text text-danger" v-show="errors.has('extraChargeBreakdown.account')">{{ errors.first('extraChargeBreakdown.account') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full required">
                                    <vs-row><label>{{$t('registrationForm.extraCharge.form.businessSource')}}</label></vs-row>
                                    <vs-row>
                                        <v-select :disabled="businessSourceBreakdownDisabled" class="w-full" id="form-select" label="name" :options="dlExtraChargeBreakdown.business_source" :reduce="value => value.code" v-model="vExtraChargeBreakdown.company_code" v-validate="!businessSourceBreakdownDisabled ? 'required' : ''" name="business source" data-vv-scope="extraChargeBreakdown"/>
                                        <span class="error-text text-danger" v-show="errors.has('extraChargeBreakdown.business source')">{{ errors.first('extraChargeBreakdown.business source') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <input-number :disabled="vExtraChargeBreakdown.per_pax == 1 || vExtraChargeBreakdown.per_pax == true" class="w-full sm:w-4/12 required" :label="$t('registrationForm.extraCharge.form.quantity')"  v-model="vExtraChargeBreakdown.quantity" :description="errors.first('extraChargeBreakdown.quantity') || dbErrors.quantity | toString" v-validate="'required'" name="quantity|min_value:1" data-vv-scope="extraChargeBreakdown"/>
                                <input-number class="w-full sm:w-4/12 required" :label="$t('registrationForm.extraCharge.form.amount')" v-model="vExtraChargeBreakdown.amount" :description="errors.first('extraChargeBreakdown.amount') || dbErrors.quantity | toString" v-validate="'required|min_value:0.001'" name="amount" data-vv-scope="extraChargeBreakdown" />
                                <div class="w-full sm:w-1/4">
                                    <vs-row class="check-box-pax">
                                        <vs-checkbox class="w-full" v-model="vExtraChargeBreakdown.per_pax" @input="vExtraChargeBreakdown.quantity = vExtraChargeBreakdown.per_pax ? 1 : vExtraChargeBreakdown.quantity ; vExtraChargeBreakdown.max_pax = vExtraChargeBreakdown.per_pax ? 1000 : 1" >{{ $t('registrationForm.extraCharge.form.perPax') }}</vs-checkbox>
                                    </vs-row>
                                    <vs-row>
                                        <vs-checkbox :disabled="!vExtraChargeBreakdown.per_pax" class="w-full" v-model="vExtraChargeBreakdown.include_child">{{ $t('registrationForm.extraCharge.form.includeChild') }}</vs-checkbox>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('registrationForm.extraCharge.form.taxAndService')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" class="w-full" :clearable="false" label="name" :reduce="value => value.code" :options="dlExtraChargeBreakdown.tax_and_service" v-model="vExtraChargeBreakdown.tax_and_service_code"></v-select>

                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2 required">
                                    <vs-row><label>{{$t('registrationForm.extraCharge.form.chargeFrequency')}}</label></vs-row>
                                    <vs-row>
                                        <v-select id="form-select" class="w-full" :reduce="value => value.code" label="name" :clearable="false" :options="dlExtraChargeBreakdown.charge_frequency" v-model="vExtraChargeBreakdown.charge_frequency_code" v-validate="'required'" name="charge frequency" data-vv-scope="extraChargeBreakdown"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('extraChargeBreakdown.charge frequency')">{{ errors.first('extraChargeBreakdown.charge frequency') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row vs-type="flex" :class="rowMarginBottom" vs-justify="space-between">
                                <vs-divider>Extra Charge</vs-divider>
                                <vs-row vs-type="flex" vs-justify="space-between">
                                    <vs-input-number class="number-input md:w-3/12" :label="$t('registrationForm.extraCharge.form.maxPax')+':'" v-model="vExtraChargeBreakdown.max_pax" min="1" />
                                    <input-number class="w-full md:w-4/12" :label="$t('registrationForm.extraCharge.form.extraPax')" v-model="vExtraChargeBreakdown.extra_pax" />
                                    <vs-checkbox class="checkbox-3col w-full md:w-3/12" v-model="vExtraChargeBreakdown.per_pax_extra">{{ $t('registrationForm.extraCharge.form.perPax') }}</vs-checkbox>
                                </vs-row>
                                <vs-divider class="mt-5"></vs-divider>
                            </vs-row>
                        </div>
                    </template>
                </dialog-prompt>
                <!-- // SCHEDULED RATE -->
                <dialog-prompt :idPrompt="'popup-scheduledRate'"
                    button1
                    :title="titleModalScheduledRate"
                    :child="1"
                    :active="modalScheduledRate"
                    :idButton1="'button-save-child-form'"
                    :buttonDisabled1="btnChildSaveDisabled"
                    @button1="handleSaveScheduleRate()"
                    @close="val=>modalScheduledRate = val">
                    <template #body>
                        <div class="popup-container">
                            <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                <vs-row>{{ $t('registrationForm.scheduledRate.form.fromDate') }}</vs-row>
                                <vs-row>
                                    <date-picker :lang="$t('lang')" :clearable="false" @change="vScheduled.to_date = vScheduled.to_date < vScheduled.from_date ? vScheduled.from_date : vScheduled.to_date" value-type="YYYY-MM-DD" :disabled-date="fromDateScheduledDisable" format="DD/MM/YYYY" label="name" class="w-full" v-model="vScheduled.from_date" v-validate="'required'" name="from date" data-vv-scope="scheduled"/>
                                    <span class="error-text text-danger" v-show="errors.has('scheduled.from date')">{{ errors.first('scheduled.from date') || dbErrors.from_date | toString  }}</span>

                                </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{ $t('registrationForm.scheduledRate.form.toDate') }}</vs-row>
                                    <vs-row>
                                        <date-picker :lang="$t('lang')" :clearable="false" value-type="YYYY-MM-DD" :disabled-date="toDateScheduledDisable" format="DD/MM/YYYY" label="name" class="w-full" v-model="vScheduled.to_date" v-validate="'required'" name="to date" data-vv-scope="scheduled"/>
                                        <span class="error-text text-danger" v-show="errors.has('scheduled.to date')">{{ errors.first('scheduled.to date') || dbErrors.to_date | toString  }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full">
                                    <vs-row>{{ $t('registrationForm.scheduledRate.form.roomRate') }}</vs-row>
                                    <vs-row>
                                        <v-select class="w-full" id="form-select" :clearable="false" @input="handleChangeRoomRate" label="name" :reduce="value => value.code" :options="roomRates" v-model="vScheduled.room_rate_code" v-validate="'required'" name="room rate" data-vv-scope="scheduled"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('scheduled.room rate')">{{ errors.first('scheduled.room rate') || dbErrors.room_rate_code | toString  }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row  :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <vs-row class="wrap-form-select">{{ $t('registrationForm.scheduledRate.form.rateAmount') }}</vs-row>
                                <vs-row>
                                    <input-number class="w-full" v-model="vScheduled.rate" :description-text="errors.first('scheduled.rate') || dbErrors.rate | toString" v-validate="'required'" name="rate" data-vv-scope="scheduled"/>
                                </vs-row>
                            </vs-row>
                            <vs-divider position="center">
                                {{ $t('registrationForm.scheduledRate.form.complimentOption') }}
                            </vs-divider>
                                <ul class="leftx wrap-form-select">
                                    <li>
                                        <vs-radio v-model="vScheduled.compliment_hu" vs-name="compliment" vs-value=" ">{{ $t('registrationForm.scheduledRate.form.none') }}</vs-radio>
                                    </li>
                                    <li>
                                        <vs-radio color="rgb(1,76,115)" v-model="vScheduled.compliment_hu" vs-name="compliment" vs-value="P"><icon-comp width="18px" height="18px"/>{{ $t('registrationForm.scheduledRate.form.compliment') }}</vs-radio>
                                    </li>
                                    <li>
                                        <vs-radio color="rgb(0,101,50)" v-model="vScheduled.compliment_hu" vs-name="compliment" vs-value="H"><icon-hu width="18px" height="18px"/> {{ $t('registrationForm.scheduledRate.form.houseUse') }}</vs-radio>
                                    </li>
                                </ul>
                            <vs-divider/>
                        </div>
                    </template>
                </dialog-prompt>
                <!-- END SCHEDULED RATE -->
                <!-- PAYMENT OPTION -->
                <vs-prompt buttons-hidden class="payment-option" :active.sync="modalPaymentOption" :title="$t('transaction.title.paymentOption')">
                    <div class="box">
                        <vs-row id="row1" vs-type="flex" vs-justify="flex-start">
                            <vs-col class="button1" id="cash" vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                                <vs-button :disabled="!depositAccess.cash" type="border" class="w-full" color="success" @click="showDepositForm('',global.modeDeposit.cash)"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/cash_icon24.png"/>{{$t('button.cash')}}</vs-button>
                            </vs-col>
                            <vs-col class="button2" id="card" vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                                <vs-button :disabled="!depositAccess.card" type="border" class="w-full" @click="showDepositForm('',global.modeDeposit.card)"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/card_icon24.png"/>{{$t('button.card')}}</vs-button>
                            </vs-col>
                        </vs-row>
                        <vs-row id="row2" vs-type="flex" vs-justify="flex-start">
                            <vs-col class="button3" id="direct-bill" vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                                <vs-button :disabled="!depositAccess.cashRefund" type="border" class="w-full" @click="showDepositForm('',global.modeDeposit.refund)"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/cash_refund_icon24.png"/>{{$t('button.cashRefund')}}</vs-button>
                            </vs-col>
                            <vs-col class="button4" id="other-payment" vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                                <vs-button :disabled="!depositAccess.otherPayment" type="border" class="w-full" @click="showDepositForm('',global.modeDeposit.other)"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/other_payment_icon24.png"/>{{$t('button.otherPayment')}}</vs-button>
                            </vs-col>
                        </vs-row>
                    </div>
                </vs-prompt>
                <!-- END PAYMENT OPTION -->
                <!-- TRANSFER DEPOSIT -->
                <dialog-prompt
                    button1
                    :title="$t('registrationForm.transferDeposit.title') + reservationNumber"
                    :child="1"
                    :width="600"
                    :active="modalTransferDeposit"
                    :idButton1="'button-save-child-form'"
                    :buttonDisabled1="btnChildSaveDisabled"
                    @button1="handleSaveTransferDeposit()"
                    @close="val=>modalTransferDeposit = val">
                    <template #body>
                        <div>
                            <vs-divider>{{ $t('registrationForm.transferDeposit.transferTo') }}</vs-divider>
                            <vs-row vs-align="center" class="wrap-form-select" :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <div class="md:w-3/5 flex w-full">
                                    <vs-radio class="md:w-1/3 w-full" v-model="vTransfer.transfer_type" :vs-value="1">{{ $t('registrationForm.transferDeposit.folio') }}</vs-radio>
                                    <v-select class="md:w-2/3 w-full" id="form-select" @input="vTransfer.transfer_type = 1" :clearable="false" label="number" :reduce="value => value.number" :options="dlFolios" v-model="vTransfer.folio_number_to" v-validate="vTransfer.transfer_type == 1 ? 'required' : ''" name="folio" data-vv-scope="transfer">
                                        <template slot="option" slot-scope="option">
                                            {{ option.number }} | {{ option.full_name }} || {{ option.folio_type }}
                                        </template>
                                    </v-select>
                                    <span class="error-text text-danger" v-show="errors.has('transfer.folio')">{{ errors.first('transfer.folio') || dbErrors.folio_number_to | toString  }}</span>
                                </div>
                                <vs-col class="md:w-1/3 flex w-full" vs-align="center">
                                    <label class="md:w-1/3 w-full">{{ $t('registrationForm.transferDeposit.subFolio') }}</label>
                                    <v-select class="md:w-2/3 w-full" id="form-select" :clearable="false" :options="global.subFolioGroup" v-model="vTransfer.sub_folio" v-validate="vTransfer.transfer_type == 1 ? 'required' : ''" name="sub folio" data-vv-scope="transfer"></v-select>
                                    <span class="error-text text-danger" v-show="errors.has('transfer.sub folio')">{{ errors.first('transfer.sub folio') || dbErrors.sub_folio | toString  }}</span>
                                </vs-col>
                            </vs-row>
                            <vs-row vs-align="center" class="wrap-form-select" :class="rowMarginBottom" vs-type="flex" vs-justify="flex-start">
                                <div class="flex w-full">
                                    <vs-radio class="md:w-1/3 w-full" v-model="vTransfer.transfer_type" :vs-value="2">{{ $t('registrationForm.transferDeposit.otherReservation') }}</vs-radio>
                                    <v-select class="md:w-2/3 w-full" id="form-select" @input="vTransfer.transfer_type = 2" :clearable="false" label="number" :reduce="value => value.number" :options="dlReservations" v-model="vTransfer.reservation_number_to" v-validate="vTransfer.transfer_type == 2 ? 'required' :''" name="reservation number" data-vv-scope="transfer">
                                        <template slot="option" slot-scope="option">
                                            {{ option.number }} | {{ option.full_name }}
                                        </template>
                                    </v-select>
                                    <span class="error-text text-danger" v-show="errors.has('transfer.reservation number')">{{ errors.first('transfer.reservation number') || dbErrors.reservation_number_to | toString  }}</span>
                                </div>
                            </vs-row>
                            <vs-divider>{{ $t('registrationForm.transferDeposit.transferDetail') }}</vs-divider>
                            <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="flex-start">
                                <label class="md:w-1/3 w-full">{{ $t('registrationForm.transferDeposit.amount') }}</label>
                                <input-number class="md:w-2/5 w-full" v-model="vTransfer.amount" :description-text="errors.first('transfer.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" data-vv-scope="transfer"/>
                            </vs-row>
                            <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="flex-start">
                                <label class="md:w-1/3 w-full">{{ $t('registrationForm.transferDeposit.remark') }}</label>
                                <vs-input class="md:w-2/3 w-full" v-model="vTransfer.remark"/>
                            </vs-row>
                        </div>
                    </template>
                </dialog-prompt>
                <!-- UPDATE REMARK/SUBDEPARTMENT/DOC NUMBER -->
                <update-transaction ref="updateTypeDeposit" :formType="global.formType.reservation" :isShowCorrectionOrProperties="showCorrectionDeposit" @refreshData="getDepositList"/>
            <!----------- END POPUP CHILD -------------->
                <!-- CORRECTION -->
                <vs-prompt
                    @cancel="newCorrectionValue=0"
                    @accept="correctionData"
                    :title="$t('transaction.correction')"
                    :active.sync="correctionPrompt">
                    <div class="con-exemple-prompt">
                        <input-number disabled :label="$t('transaction.correctionAmountBefore')" class="w-full" v-model="oldCorrectionValue"/>
                        <input-number :label="$t('transaction.correctionAmountAfter')" class="w-full" v-model="newCorrectionValue"/>
                    </div>
                </vs-prompt>
            <!--------- START PROMPT CREDENTIAL----------->
                <credential :value="credential"
                    :specialAccessType="specialAccessType"
                    :activeCredential="activeCredentialPrompt"
                    :isCredential="isCredential"
                    :isReason="isReason"
                    :title="credentialTitle"
                    @update:active-credential="val=>activeCredentialPrompt = val"
                    @acceptReason="acceptReason"
                    @acceptCredential="acceptReason"
                    @closedCredential="closedCredential()"
                    @input="(newValue)=>{ credential = newValue }"/>
            <!--------- END PROMPT CREDENTIAL----------->
            </template>
        </dialog-prompt>
        <!-- </vs-prompt> -->
    </div>
</template>
<script>
import '@sass/vuexy/pages/form_deposit_charge.scss';
import { dateDiff } from '@/utils/general.js';
import Tracking from '@/views/pages/components/Tracking.vue';
import $dialog from '@/utils/dialog.js';
import $alert from '@/utils/alert.js';
import { formConfig } from '@/utils/formConfig.js';
import Credential from '@/views/pages/components/Credential';

import DatePicker from 'vue2-datepicker';
import '@sass/vuexy/components/datepicker.scss';
import Suggestions from '@/views/pages/components/autocomplete.vue';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
// <!------------------additional element---------------------->
import UpdateTransaction from '@/views/pages/components/transaction/components/UpdateDialog'
import InputNumber from '@/views/pages/components/Number';
import IconHU from '@/components/icon/IconHU';
import IconCOMP from '@/components/icon/IconComp';
import { formatNumberValue, formatDateDatabase, formatDateTimeDatabase } from '@/utils/format.js';
// API
import GuestInHouseResource from '@/api/guestinhouse/guestInHouse';
import GHScheduledRateResource from '@/api/guestinhouse/scheduledRate';
import RVScheduledRateResource from '@/api/reservation/scheduledRate';
import GHExtraChargeResource from '@/api/guestinhouse/extraCharge';
import RVExtraChargeResource from '@/api/reservation/extraCharge';
import GuestProfileResource from '@/api/guestProfile';
import ReservationResource from '@/api/reservation/reservation';
import DepositResource from '@/api/reservation/deposit';
import TrackingDataResource from '@/api/trackingData';
import UserSettingResource from '@/api/tools/user-setting/userSetting.js';
import Deposit from './tab-components/deposit/Deposit.vue';
import ExtraCharge from './tab-components/extraCharge/ExtraCharge.vue';
import ScheduledRate from './tab-components/scheduledRate/ScheduledRate.vue';
import BreakdownExtraCharge from './tab-components/extraCharge/Breakdown';

const depositResource = new DepositResource();
const reservationResource = new ReservationResource();
const guestProfileResource = new GuestProfileResource();
const guestInHouseResource = new GuestInHouseResource();
const ghScheduledRateResource = new GHScheduledRateResource();
const rvScheduledRateResource = new RVScheduledRateResource();
const ghExtraChargeResource = new GHExtraChargeResource();
const rvExtraChargeResource = new RVExtraChargeResource();
const userSettingResource = new UserSettingResource();
const trackingDataResource = new TrackingDataResource();

// <!------------------end additional element---------------------->
export default {
    name: 'RegistrationForm',
    props: {
        titleForm: String,
        mainTableName: String,
        isDayendClose: Boolean,
        isReservation: Boolean,
        isGuestInHouse: Boolean,
        isFolioHistory: Boolean,
        isFromAvailability: Boolean,
    },
    components: {
        VuePerfectScrollbar,
        tracking: Tracking,
        Suggestions,
        InputNumber,
        ScheduledRate,
        ExtraCharge,
        Deposit,
        DatePicker,
        Credential,
        UpdateTransaction,
        BreakdownExtraCharge,
        'icon-hu': IconHU,
        'icon-comp': IconCOMP,
    },

    data() {
        return {
            // LogUser
            logUserDataB4: [],
            logUserDataAfter: [],
            // form config
            rowMarginBottom: formConfig.rowMarginBottom,
            // query data search
            search: {
                limit: 1000,
                walkedIn: true,
                checkedIn: true,
                departure: true,
            },
            // Ag-Grid
            columnDefs: null,
            rowData: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            statusBar: null,
            sideBar: null,
            paginationPageSize: null,
            rowSelection: null,
            dataTracking: null,
            // Parameter From Child
            idData: '',
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modePopUp: 0,
            modeDataValueTracking: 0,
            modeChildValue: '',
            modeScheduledRate: 0,
            modeExtraCharge: 0,
            // data error handling from laravel validation//
            dbErrors: {},
            // Pop Up
            modalMain: false,
            modalChild: false,
            modalPreventClose: false,
            // ------------------need setting manual-----------------//
            // for vModel Data
            vModel: {
                full_name: '',
            },
            // vModel
            vDeposit: {}, // deposit
            vScheduled: {}, // schedule rate
            vExtraCharge: {}, // extra charge
            outlet: {},
            modalChildTitle: '',
            accounts: [],
            dataLookupDeposit: '',
            rate: {
                weekend: 0,
                weekday: 0,
            },
            account: null,
            nights: 1,
            discount: 0,
            availableRoom: 0,
            resetOnOptionsChangeState: false,
            resetOnOptionsChangeCity: false,
            resetOnOptionsChangeRoomNumber: false,
            roomNumber: [],
            folioNumber: '',
            reservationNumber: '',
            roomRates: [],
            bedTypes: [],
            city: [],
            guestProfile: {},
            state: [],
            totalGuestDeposit: [{
                credit: 0,
                debit: 0,
            }],
            balanceDeposit: 0,
            resvStatus: '',
            readyRoom: true,
            weekday_rate_discount: 0,
            weekend_rate_discount: 0,
            guestProfileOptions: {
                placeholder: '',
            },
            modalPaymentOption: false,
            modalScheduledRate: false,
            modalChildExtraCharge: false,
            modalChildExtraChargeBreakdown: false,
            titleModalScheduledRate: '',
            hideLoadingIndicator: false,
            // ------------------additional-------------------------//
            // Data Lookup//
            dataLookup: {},
            dlExtraCharge: [],
            // Data table//
            scheduledRate: [],
            extraCharges: [],
            guestDeposit: [],
            // validation scope//
            scope1: 'stayInformation',
            showTimeRangePanel: false,
            activeTab: 1,
            scheduledRateTab: true,
            depositTab: true,
            extraChargeTab: true,
            resetOptionsChange: false,
            resetOptionsChangeMoveRoom: false,
            resetProduct: false,
            // title popup//
            titlePopup: '',
            // ------CREDENTIAL-------//
            activeCredentialPrompt: false,
            isCredential: false,
            isReason: false,
            credentialTitle: '',
            credential: {
                user: '',
                pass: '',
            },
            specialAccessType: 1000,
            showCorrectionDeposit: false,
            showVoidDeposit: false,
            correctionPrompt: false,
            newCorrectionValue: 0,
            oldCorrectionValue: 0,
            paramsData: '',
            idLog: '',

            balance: 0,
            btnMainSaveDisabled: false,
            btnChildSaveDisabled: false,
            rateB4: {},
            // Temp Variable From Avaiblity on button-main-save
            isReservationFromAvaibility: true,
            roomNumberB4: null,
            roomNumberEditB4: null,
            isRoomExist: false,
            isCanEnabledSaveBtnMain: true,
            // Transfer
            modalTransferDeposit: false,
            vTransfer: {},
            dlFolios: [],
            dlReservations: [],

            depositAccess: {
                otherPayment: false,
                cash: false,
                card: false,
                cashRefund: false,
                void: false,
                correction: false,
                transfer: false,
                updateSubDepartment: false,
                updateRemark: false,
                updateDocumentNumber: false,
            },

            // breakdown extra charge
            btnChildSaveDisabledBreakdown: false,
            extraChargeBreakdownData: null,
            extraChargeBreakdownTabDisabled: false,
            modeExtraChargeBreakdown: '',
            vExtraChargeBreakdown: {},
            dlExtraChargeBreakdown: {},
            resetProductBreakdown: false,
            idLogExtraCharge: '',
            activeTabExtraCharge: 1,
            titleExtraChargeBreakdown: '',
            businessSourceBreakdownDisabled: true,

            // ------------------end need setting manual-----------------//

        };
    },

    methods: {
        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },

        precheck() {
            this.$emit('precheck');
        },

        // ------------------need setting manual for crud-----------------//
        // ------------------ Guest In House CRUD------------------//
        async getGuestInHouseList(search) {
            this.search = search;
            try {
                const { data } = await guestInHouseResource.list(search);
                this.rowData = data;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert(error);
            }
        },

        async editGuestInHouse(id) {
            try {
                const { data } = await guestInHouseResource.get(id.folio_number);
                this.setDataBeforeEdit(await data.list);
                this.roomRates = await data.room_rate;
                this.bedTypes = await data.bed_type;
                this.vModel = data.list;
                this.setRateBefore();
                this.roomNumberEditB4 = this.vModel.room_number;
                this.titlePopup = `Update Guest In House - Folio :${id.folio_number}`;
                // this.$closeLoadingIndicator(this);
            } catch (error) {
                // this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert(error);
            }
        },

        async insertLogUserUpdateGuestInHouse(dataAfter) {
            try {
                this.logUserDataAfter = dataAfter;
                const nightAfter = dateDiff(dataAfter.arrival, dataAfter.departure);
                await guestInHouseResource.logUserUpdateGuestInHouse({
                    dataB4: this.logUserDataB4[0], dataAfter: this.logUserDataAfter, userId: this.global.userInfo.code, nightAfter,
                });
            } catch (error) {
                //
            }
        },

        async updateGuestInHouse(params) {
            try {
                const { data } = await guestInHouseResource.update(params);
                if (data == 0) {
                    await this.insertLogUserUpdateGuestInHouse(params);
                    this.modalMain = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.insertUpdateGuestInHouse.${data}`));
                }
                if (this.isDayendClose) {
                    this.precheck();
                }
                this.btnMainSaveDisabled = false;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
            } catch (error) {
                this.btnMainSaveDisabled = false;
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert(message);
            }
        },

        async insertGuestInHouse(resource) {
            try {
                const { data } = await guestInHouseResource.store(resource);
                if (data == 0) {
                    this.resetData();
                    this.modalMain = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.roomNotAvailable(this.$t(`responseStatus.insertUpdateGuestInHouse.${data}`));
                }
                this.btnMainSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
            } catch (error) {
                this.btnMainSaveDisabled = false;
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$closeLoadingIndicator(this);
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        refreshData(search) {
            this.$emit('refreshData', search, this.hideLoadingIndicator);
        },

        async resetData() {
            this.vModel = {
                number: 0,
                arrival: this.getDateTimeArrival(),
                departure: this.departureResv,
                wait_list: false,
                adult: 1,
                child: 0,
                full_name: '',
                commission_value: 0,
                room_type_code: this.dvRoomType,
                weekday_rate: 0,
                weekend_rate: 0,
                discount_percent: '-1',
                payment_type_code: this.dvPaymentType,
                market_code: this.dvMarket,
                discount: 0,
                is_male: '-1',
                birth_date: '',
                is_incognito: false,
                audit_date: this.auditDate,
                folio_number: '',
                reservation_number: '',
                balance: 0,
                user_id: this.global.userInfo.code,
            };
            this.availableRoom = 0;
            this.resvStatus = '';
            this.nights = 1;
            this.weekday_rate_discount = 0;
            this.weekend_rate_discount = 0;
            this.dbErrors = {};
            this.dataTracking = null;
            this.modalScheduledRate = false;
            this.resetOnOptionsChangeState = false;
            this.resetOnOptionsChangeCity = false;
            this.resetOnOptionsChangeRoomNumber = false;
            this.resetOptionsChange = false;
            this.guestDeposit = null;
            this.resetOnChange = false;
            this.btnMainSaveDisabled = false;
            this.readyRoom = (this.isReservation || (this.isFromAvailability && this.isReservationFromAvaibility)) ? false : (this.modeDataValue == this.global.modeData.insert);
            this.resetOptionsChangeMoveRoom = false; // prevent reloading input select change Move Room
            this.$validator.pause();
            this.$nextTick(() => {
                this.$validator.errors.clear();
                this.$validator.fields.items.forEach((field) => field.reset());
                this.$validator.fields.items.forEach((field) => this.errors.remove(field));
                this.$validator.resume();
            });
        },

        setNewReservationWalkIn(dataParams) { // use on Room Availability
            if (this.isReservationFromAvaibility) {
                this.vModel.arrival = dataParams.arrival;
                this.vModel.departure = dataParams.departure;
            }
            this.vModel.room_type_code = dataParams.room_type_code;
            this.getRoomRate();
            this.vModel.bed_type_code = dataParams.bed_type_code;
            this.vModel.room_number = dataParams.room_number;
            this.getRoomNumber('', this.vModel);
        },

        async showForm(idData, modeData, isReservation, reservationStatus) {
            this.modeDataValue = modeData;
            this.isReservationFromAvaibility = isReservation || this.isReservation;
            this.idData = idData;
            this.reservationNumber = idData.reservation_number;
            this.resetData(); // do not change the order
            this.disabledTab(modeData);
            this.resvStatus = reservationStatus;
            this.activeTab = 1;
            this.$loadingIndicator(this);
            if (isReservation || this.isReservation) { // Reservation Form
                if (modeData === this.global.modeData.edit || modeData === this.global.modeData.duplicate) {
                    this.resetOnChange = false;
                    await this.getDataLookUp();
                    this.titlePopup = this.resvStatus == this.global.reservationStatus.checkIn ? `Check In Reservation - Number: ${this.idData.reservation_number}` : `Update Reservation - Number: ${this.idData.reservation_number}`;
                    if (!this.isFromAvailability || modeData !== this.global.modeData.insert) {
                        await this.editReservation(this.idData.reservation_number);
                        if(modeData == this.global.modeData.duplicate) {
                            this.vModel.room_number = '';
                            this.vModel.reservation_number = '';
                            this.vModel.folio_number = '';
                        }
                        this.getState(true);
                        this.setDiscountRate();
                        this.getTotalDays();
                        // this.getExtraCharge();
                        // this.getScheduledRate();
                        // this.getDepositList();
                        await this.getRoomNumber('bed_type', this.vModel);
                    }
                    this.vModel.flight_arrival = this.vModel.flight_arrival == '0000-00-00 00:00:00' ? '' : this.vModel.flight_arrival;
                    this.vModel.flight_departure = this.vModel.flight_departure == '0000-00-00 00:00:00' ? '' : this.vModel.flight_departure;
                    this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;

                        if(!this.global.isError) {
                            this.modalMain = true;
                        }

                    this.$closeLoadingIndicator(this);
                } else if (modeData === this.global.modeData.insert) {
                        this.titlePopup = 'Insert Reservation';
                        this.getDataLookUp();
                        await this.getRoomNumber('', this.vModel);
                        this.activeTab = 1;
                        this.$closeLoadingIndicator(this);
                        if (this.isFromAvailability) {
                            this.setNewReservationWalkIn(this.idData);
                        }
                        if(!this.global.isError) {
                            this.modalMain = true;
                        }
                } else if (modeData === this.global.modeData.tracking) {
                    this.trackingData(idData);
                }
            } else if (modeData === this.global.modeData.edit) { // Guest In House Form
                this.folioNumber = idData.folio_number;
                this.getDataLookUp();
                await this.editGuestInHouse(idData);
                this.vModel.flight_arrival = this.vModel.flight_arrival == '0000-00-00 00:00:00' ? '' : this.vModel.flight_arrival;
                this.vModel.flight_departure = this.vModel.flight_departure == '0000-00-00 00:00:00' ? '' : this.vModel.flight_departure;
                this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;
                this.readyRoom = false;
                if (this.vModel.status_code !== this.global.folioStatus.open && !this.isFolioHistory) {
                    this.refreshData(this.search);
                    return;
                }

                this.getState(true);
                await this.getRoomNumber('bed_type', this.vModel);
                this.setDiscountRate();
                this.getTotalDays();
                this.getScheduledRate();
                this.getExtraCharge();
                this.$closeLoadingIndicator(this);

                if(!this.global.isError) {
                    this.modalMain = true;
                }
            } else if (modeData === this.global.modeData.insert) {
                this.titlePopup = this.$t('registrationForm.title.insertWalkIn');
                this.activeTab = 1;
                this.getDataLookUp();
                await this.getRoomNumber('', this.vModel);
                if (this.isFromAvailability) {
                    this.readyRoom = true;
                    this.setNewReservationWalkIn(this.idData);
                }
                this.$closeLoadingIndicator(this);

                if(!this.global.isError) {
                    this.modalMain = true;
                }
            } else if (modeData === this.global.modeData.tracking) {
                await this.trackingData(idData);
            }
        },

        disabledTab(mode) {
            this.$nextTick(() => {
                // if (document.getElementById('stayInformation') != undefined) {
                this.scheduledRateTab = mode == this.global.modeData.insert;
                this.depositTab = mode == this.global.modeData.insert;
                this.extraChargeTab = mode == this.global.modeData.insert;
                // document.getElementById('stayInformation').click();
                // }
            });
        },

        // ------------------ END Guest In House CRUD------------------//

        // ------------------ RESERVATION CRUD------------------//

        async getReservationList(search) {
            try {
                const { data } = await reservationResource.list(search);
                this.rowData = data;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                $alert.errorFetchDataAlert(error);
                this.$closeLoadingIndicator(this);
            }
        },

        setDataBeforeEdit(dataB4) {
            const night = dateDiff(dataB4.arrival, dataB4.departure);
            this.logUserDataB4 = [
                { // Stay Information
                    arrival: dataB4.arrival,
                    night,
                    departure: dataB4.departure,
                    adult: dataB4.adult,
                    child: dataB4.child,
                    room_type_code: dataB4.room_type_code,
                    room_number: dataB4.room_number,
                    room_rate_code: dataB4.room_rate_code,
                    business_source_code: dataB4.business_source_code,
                    commission_type_code: dataB4.commission_type_code,
                    commission_value: dataB4.commission_value,
                    weekday_rate: dataB4.weekday_rate,
                    weekend_rate: dataB4.weekend_rate,
                    discount: dataB4.discount,
                    payment_type_code: dataB4.payment_type_code,
                    market_code: dataB4.market_code,
                    bill_instruction: dataB4.bill_instruction,
                    currency_code: dataB4.currency_code,
                    exchange_rate: dataB4.exchange_rate,
                    // personal information
                    title_code: dataB4.title_code,
                    full_name: dataB4.full_name,
                    reservation_by: dataB4.reservation_by,
                    street: dataB4.street,
                    city_code: dataB4.city_code,
                    country_code: dataB4.country_code,
                    state_code: dataB4.state_code,
                    postal_code: dataB4.postal_code,
                    phone1: dataB4.phone1,
                    phone2: dataB4.phone2,
                    fax: dataB4.fax,
                    email: dataB4.email,
                    website: dataB4.website,
                    company_code: dataB4.company_code,
                    guest_type_code: dataB4.guest_type_code,
                    id_card_code: dataB4.id_card_code,
                    id_card_number: dataB4.id_card_number,
                    birth_place: dataB4.birth_place,
                    birth_date: dataB4.birth_date,
                    // General Information
                    group_code: dataB4.group_code,
                    document_number: dataB4.document_number,
                    flight_number: dataB4.flight_number,
                    flight_arrival: dataB4.flight_arrival,
                    flight_departure: dataB4.flight_departure,
                    notes: dataB4.notes,
                    hk_note: dataB4.hk_note,
                    marketing_code: dataB4.marketing_code,
                    voucher_number_ta: dataB4.voucher_number_ta,
                },
            ];
        },

        async editReservation(reservationNumber, isDuplicate) {
            try {
                const { data } = await reservationResource.get(reservationNumber);
                this.roomRates = await data.room_rate;
                this.bedTypes = await data.bed_type;
                this.vModel = await data.reservation;
                if(!isDuplicate){
                    this.setDataBeforeEdit(await data.reservation);
                    this.setRateBefore();
                    this.roomNumberEditB4 = this.vModel.room_number;
                }
                // this.$closeLoadingIndicator(this);
            } catch (error) {
                $alert.errorFetchDataAlert(error);
                // this.$closeLoadingIndicator(this);
            }
        },

        async insertLogUserUpdateReservation(dataAfter) {
            try {
                this.logUserDataAfter = dataAfter;
                const nightAfter = dateDiff(dataAfter.arrival, dataAfter.departure);
                await reservationResource.logUserUpdateReservation({
                    dataB4: this.logUserDataB4[0], dataAfter: this.logUserDataAfter, userId: this.global.userInfo.code, nightAfter,
                });
            } catch (error) {
                //
            }
        },

        async updateReservation(params) {
            try {
                params.wait_list = false;
                params.user_id= this.global.userInfo.code;
                const { data } = await reservationResource.update(params);
                if (this.resvStatus != this.global.reservationStatus.checkIn) {
                    if (data.status == 0) {
                        this.insertLogUserUpdateReservation(params);
                        this.modalMain = false;
                        if (this.isDayendClose) { // update reservation on Dayend close
                            // this.modalMain = false;
                            this.precheck();
                            return;
                        }
                        this.$vs.dialog({
                            color: 'primary',
                            // type: 'confirm',
                            title: this.$t('message.informationTitle'),
                            text: this.$t('message.insertReservationSuccessfully'),
                            acceptText: this.$t('button.ok'),
                            // cancelText: this.$t('button.no'),
                            // accept: (() => {
                            //     this.setDataBeforeEdit(params);
                            //     this.btnMainSaveDisabled = false;
                            // }),
                            // cancel: (() => { this.modalMain = false; }),
                        });
                        this.hideLoadingIndicator = true;
                        this.$closeLoadingIndicator(this);
                    } else if (data.status > 0) {
                        this.btnMainSaveDisabled = false;
                        $dialog.information(this.$t(`responseStatus.insertUpdateReservation.${data.status}`));
                    }
                }

                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
            } catch (error) {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert(message);
            }
        },

        async insertReservation(params) {
            try {
                const { data } = await reservationResource.store(params);
                await this.refreshData(this.search);
                if (data.status == 0) {
                    this.modalMain = false;
                    this.$vs.dialog({
                        color: 'primary',
                        // type: 'confirm',
                        title: this.$t('message.informationTitle'),
                        text: this.$t('message.updateReservationSuccessfully') + data.number,
                        acceptText: this.$t('button.ok'),
                        // cancelText: this.$t('button.no'),
                        // accept: (async () => {
                        //     this.titlePopup = this.$t('registrationForm.title.updateReservation') + data.number;
                        //     await this.editReservation(data.number);
                        //     // this.setDataBeforeEdit(params);
                        //     // this.setRateBefore()
                        //     this.btnMainSaveDisabled = false;
                        //     this.modeDataValue = this.global.modeData.edit;
                        // }),
                        // cancel: (() => { this.modalMain = false; }),
                    });
                    // tab enabled
                    this.scheduledRateTab = false;
                    this.depositTab = false;
                    this.extraChargeTab = false;
                    this.reservationNumber = data.number;
                    this.vModel.number = data.number;
                    this.vModel.reservation_number = data.number;
                } else if (data.status > 0) {
                    this.btnMainSaveDisabled = false;
                    $dialog.information(this.$t(`responseStatus.insertUpdateReservation.${data.status}`));
                }
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                this.$closeLoadingIndicator(this);
            } catch (error) {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert(message);
            }
        },

        async handleSaveReservation() {
            const validate = this.modalChild === false ? this.scope1 : 'deposit';
            this.$validator.validateAll(validate).then(async (result) => {
                if (result) {
                    // Call method get room number to check list room to avoid duplicate reservation on same room (Open 2 Windows or more)
                    this.btnMainSaveDisabled = true;
                    this.isCanEnabledSaveBtnMain = false;
                    this.$loadingIndicator(this);
                    // this.$vs.loading({ container: '#button-save-main-form', scale: this.global.scaleLoadingButton });
                    await this.getRoomNumber('bed_type');
                    this.$nextTick(() => {
                        if ((this.vModel.room_number != null && this.vModel.room_number != '' && !this.isRoomExist) && (this.resvStatus !== this.global.reservationStatus.checkIn)) {
                            $dialog.roomNumberNotAvailable(this.$t('message.previousRoomNotAvailable'));
                            this.$closeLoadingIndicator(this);
                            this.btnMainSaveDisabled = false;
                        } else {
                            this.btnMainSaveDisabled = true;
                            this.handleSaveReservation2();
                        }
                    });
                } else {
                    $alert.inputRequiredAlert();
                }
            });
        },

        handleSaveReservation2() {
            if ((parseFloat(this.vModel.weekday_rate) < parseFloat(this.rateB4.weekday_rate)) || (parseFloat(this.vModel.weekend_rate) < parseFloat(this.rateB4.weekend_rate)) || (parseFloat(this.vModel.discount) > parseFloat(this.rateB4.discount)) || (this.modeDataValue == this.global.modeData.edit && this.vModel.room_rate_code != this.rateB4.room_rate_code)) {
               this.$closeLoadingIndicator(this);
               this.showCredential2('', true, true, this.global.accessSpecialOrder.overrideRateDiscount, this.$t('specialAccessList.overrideRateDiscount'));
            } else {
                this.handleSaveReservation3();
            }
        },

        async handleSaveReservation3() {
            if (this.resvStatus == this.global.reservationStatus.checkIn) {
                this.checkInDataReservation();
            } else if (!this.modalChild && this.resvStatus != this.global.reservationStatus.checkIn) {
                if (this.modeDataValue === this.global.modeData.insert || this.modeDataValue === this.global.modeData.duplicate) {
                    this.vModel.user_id = this.global.userInfo.code
                    this.insertReservation(this.vModel);
                } else if (this.modeDataValue === this.global.modeData.edit) {
                    if (this.vModel.business_source_code !== this.logUserDataB4[0].business_source_code) {
                        this.showCredential2('', true, true, this.global.accessSpecialOrder.businessSource, this.$t('reservation.businessSource'));
                    } else {
                        this.vModel.user_id = this.global.userInfo.code
                        await this.updateReservation(this.vModel);
                    }
                }
            }
        },

        // ------------------ END RESERVATION CRUD------------------//

        async insertGuestInHouse2(paramVModel) {
            // Call method get room number to check list room to avoid duplicate check In on same room (Open 2 Windows or more)
            this.isCanEnabledSaveBtnMain = false;
            await this.getRoomNumber('bed_type');
            this.$nextTick(() => {
                if (!this.isRoomExist) {
                    this.modalMain = false;
                    this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
                    $dialog.roomNumberNotAvailable(this.$t('message.previousRoomNotAvailableSaveGuesInHouse'));
                } else {
                    this.insertGuestInHouse(paramVModel);
                }
            });
        },

        handleSaveGuestInHouse() {
            const validate = this.scope1;
            this.$validator.validateAll(validate).then(async (result) => {
                if (result) {
                    this.btnMainSaveDisabled = true;
                    this.handleSaveGuestInHouse2();
                } else {
                    $alert.inputRequiredAlert();
                }
            });
        },

        handleSaveGuestInHouse2() {
            if ((this.vModel.weekday_rate < this.rateB4.weekday_rate) || (this.vModel.weekend_rate < this.rateB4.weekend_rate) || (this.vModel.discount > this.rateB4.discount) || (this.modeDataValue == this.global.modeData.edit && this.vModel.room_rate_code != this.rateB4.room_rate_code)) {
                this.showCredential2('', true, true, this.global.accessSpecialOrder.overrideRateDiscount, this.$t('specialAccessList.overrideRateDiscount'));
            } else {
                this.$loadingIndicator(this);
                this.handleSaveGuestInHouse3();
            }
        },

        async handleSaveGuestInHouse3() {
            if (this.modeDataValue === this.global.modeData.insert) {
                // this.$vs.loading({ container: '#button-save-main-form', scale: this.global.scaleLoadingButton });
                this.vModel.user_id = this.global.userInfo.code
                this.insertGuestInHouse2(this.vModel);
            } else if (this.modeDataValue === this.global.modeData.edit) {
                // this.$vs.loading({ container: '#button-save-main-form', scale: this.global.scaleLoadingButton });
                if (this.vModel.business_source_code !== this.logUserDataB4[0].business_source_code) {
                    this.showCredential2('', true, true, this.global.accessSpecialOrder.businessSource, this.$t('reservation.businessSource'));
                } else {
                    this.vModel.user_id = this.global.userInfo.code
                    await this.updateGuestInHouse(this.vModel);
                }
            }
        },

        setRateBefore() {
            this.rateB4.weekday_rate = this.logUserDataB4[0].weekday_rate;
            this.rateB4.weekend_rate = this.logUserDataB4[0].weekend_rate;
            this.rateB4.room_rate_code = this.logUserDataB4[0].room_rate_code;
            this.rateB4.discount = this.logUserDataB4[0].discount;
        },

        // ------------------POPULATE SELECT OPTIONS----------------------//

        async getDataLookUp() {
            try {
                const params = {
                    title: true,
                    member: true,
                    country: true,
                    city: true,
                    nationality: true,
                    company: true,
                    guest_type: true,
                    id_card: true,
                    business_source: true,
                    commission_type: true,
                    market: true,
                    booking_source: true,
                    payment_type: true,
                    room_type: true,
                    group: true,
                    marketing: true
                }
                const { data } = await guestInHouseResource.dataLookup(params);
                this.dataLookup = data;
                this.city = data.city;
                this.global.isError = false;
                // this.$closeLoadingIndicator(this);
            } catch (error) {
                // this.$closeLoadingIndicator(this);
                this.global.isError = true;
                $alert.errorFetchDataAlert(error);
            }
        },

        isRoomNumberExist(roomBefore, dataRoom) {
            let result = false;
            for (let i = 0; i < dataRoom.length; i++) {
                if (roomBefore === dataRoom[i].number) {
                    result = true;
                    break;
                }
            }
            return result;
        },

        async getRoomNumber(type) {
            this.btnMainSaveDisabled = true;
            this.roomNumberB4 = this.vModel.room_number;
            let arrivalDate = this.vModel.arrival;
            if (this.modeDataValue === this.global.modeData.edit && (!this.isReservation || !this.isReservationFromAvaibility)) {
                arrivalDate = this.auditDate;
            }

            const params = {
                room_type_code: this.vModel.room_type_code,
                bed_type_code: this.vModel.bed_type_code,
                reservation_number: this.vModel.reservation_number,
                folio_number: this.vModel.folio_number,
                room_number: this.vModel.room_number,
                ready: this.readyRoom,
                arrival: arrivalDate,
                departure: this.vModel.departure,
            };
            try {
                const { data } = await reservationResource.roomNumber(params);
                this.roomNumber = await data.room;
                this.availableRoom = await data.available_room;

                if (this.isFromAvailability || this.modeDataValue === this.global.modeData.edit) {
                    this.vModel.room_number = null;
                }

                this.isRoomExist = true;
                // if edit guest in house(available room in list back to previous room)
                if (this.roomNumberB4 !== null || (this.modeDataValue == this.global.modeData.edit && !this.isReservation && !this.isReservationFromAvaibility)) {
                    this.isRoomExist = await this.isRoomNumberExist((this.modeDataValue === this.global.modeData.edit && !this.isReservation && !this.isReservationFromAvaibility) ? this.roomNumberEditB4 : this.roomNumberB4, data.room);
                    if (this.isRoomExist) {
                        this.vModel.room_number = (this.modeDataValue === this.global.modeData.edit && !this.isReservation && !this.isReservationFromAvaibility) ? this.roomNumberEditB4 : this.roomNumberB4;
                    }
                }

                if (type !== 'bed_type') {
                    this.bedTypes = data.bed_type;
                    this.getRoomRate();
                }
                // Enabled if not save reservation Or Save Guest In House
                if (this.isCanEnabledSaveBtnMain) {
                    this.btnMainSaveDisabled = false;
                } else {
                    this.isCanEnabledSaveBtnMain = true;
                }
                this.global.isError = false;
            } catch (error) {
                // Enabled if not save reservation Or Save Guest In House
                if (this.isCanEnabledSaveBtnMain) {
                    this.btnMainSaveDisabled = false;
                } else {
                    this.isCanEnabledSaveBtnMain = true;
                }
                this.global.isError = true;
                $alert.errorFetchDataAlert(error);
            }
        },

        async getRoomRate(model) {
            if (this.vModel.room_type_code != null) {
                const params = {
                    room_type: this.vModel.room_type_code,
                    arrival: this.vModel.arrival,
                    departure: this.vModel.departure,
                    business_source: this.vModel.business_source_code,
                };
                try {
                    const { data } = await guestInHouseResource.roomRate(params);
                    this.roomRates = data;
                } catch (error) {
                    $alert.errorFetchDataAlert(error);
                }
            }
        },

        async getDailyRate(model) {
            const params = {
                adult: this.vModel.adult,
                room_rate: model.room_rate_code,
            };
            try {
                const { data } = await guestInHouseResource.dailyRate(params);
                this.rate = {
                    weekday: parseFloat(data.weekday_rate),
                    weekend: parseFloat(data.weekend_rate),
                };
                if (this.modeDataValue != this.global.modeData.edit) {
                    this.rateB4 = {
                        weekday_rate: parseFloat(data.weekday_rate),
                        weekend_rate: parseFloat(data.weekend_rate),
                        discount: 0,
                    };
                }
                if (model == this.vModel) {
                    this.vModel.weekday_rate = this.rate.weekday;
                    this.vModel.weekend_rate = this.rate.weekend;
                }
                this.setDiscountRate();
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        async getState(state) {
            if (this.vModel.country_code) {
                const params = {
                    country_code: this.vModel.country_code,
                    state_code: this.vModel.state_code,
                    city: true,
                    country: true,
                    state: true
                };
                try {
                    const { data } = await guestInHouseResource.dataLookup(params);
                    if (state == true) {
                        this.state = data.state;
                        this.city = data.city;
                    } else {
                        this.city = data.city;
                    }
                } catch (error) {
                    $alert.errorFetchDataAlert(error);
                }
            }
        },
        // ------------------END POPULATE SELECT OPTIONS----------------------//

        //  DATEPICKER CONFIGURATION //
        dateTodayDisable(date) {
            const audit = new Date(this.auditDate);
            audit.setDate(audit.getDate() - 1);
            return date < audit;
        },

        toggleTimeRangePanel() {
            this.showTimeRangePanel = !this.showTimeRangePanel;
        },

        //  END DATEPICKER CONFIGURATION //

        // ------------------START CRUD SCHEDULED RATE-------------------------------//
        async getScheduledRate() {
            const params = {
                number: this.isReservation ? this.reservationNumber : this.folioNumber,
            };
            try {
                const { data } = this.isReservation ? await rvScheduledRateResource.list(params) : await ghScheduledRateResource.list(params);
                this.scheduledRate = data;
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        async updateScheduledRate() {
            try {
                this.vScheduled.number = this.isReservation ? this.reservationNumber : this.folioNumber;
                this.vScheduled.user_id = this.global.userInfo.code;
                const { data } = this.isReservation ? await rvScheduledRateResource.update(this.vScheduled) : await ghScheduledRateResource.update(this.vScheduled);
                if (data == 0) {
                    this.$refs.scheduledRate.refreshData();
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.scheduledRate.${data}`));
                }
                this.modalScheduledRate = false;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorModifyingDataAlert();
            }
        },

        async editScheduledRate(id) {
            this.$loadingIndicator(this);
            try {
                const { data } = this.isReservation ? await rvScheduledRateResource.get(id.id_log) : await ghScheduledRateResource.get(id.id_log);
                this.vScheduled = data;
                this.titleModalScheduledRate = this.$t('registrationForm.scheduledRate.form.updateTitle');
                this.modalScheduledRate = true;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert(error);
            }
        },

        async insertScheduledRate() {
            try {
                this.$loadingIndicator(this);
                const { data } = this.isReservation ? await rvScheduledRateResource.store(this.vScheduled) : await ghScheduledRateResource.store(this.vScheduled);
                if (data == 0) {
                    this.$refs.scheduledRate.refreshData();
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.scheduledRate.${data}`));
                }
                this.modalScheduledRate = false;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        handleDeleteScheduledRate(val) {
            this.modeScheduledRate = this.global.modeData.delete;
            this.showCredential2(val, true, false, this.global.accessSpecialOrder.scheduledRate);
        },

        async deleteScheduledRate() {
            const params = {
                id_log: this.paramsData.id_log,
                user_id: this.global.userInfo.code,
            };
            this.modalScheduledRate = false;
            this.$loadingIndicator(this);
            try {
                const { data } = this.isReservation ? await rvScheduledRateResource.delete(params) : await ghScheduledRateResource.delete(params);
                this.$refs.scheduledRate.refreshData();
                this.$closeLoadingIndicator(this);
                $alert.deleteAlertSuccess();
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorDeleteDataAlert();
            }
        },

        async handleChangeRoomRate() {
            const params = {
                room_rate: this.vScheduled.room_rate_code,
            };
            const { data } = await guestInHouseResource.dailyRate(params);
            this.vScheduled.rate = parseFloat(data.weekday_rate);
        },

        resetScheduledRate() {
            this.vScheduled = {
                number: this.isReservation ? this.reservationNumber : this.folioNumber,
                from_date: formatDateDatabase(this.auditDate),
                to_date: formatDateDatabase(this.auditDate),
                rate: 0,
                compliment_hu: ' ',
                user_id: this.global.userInfo.code,
            };
            this.btnChildSaveDisabled = false;
        },

        handleSidebarScheduledRate(idData, modeData) {
            this.modalScheduledRate = false;
            this.modeScheduledRate = modeData;
            this.resetScheduledRate();
            if (modeData == this.global.modeData.edit) {
                this.editScheduledRate(idData);
            } else {
                this.titleModalScheduledRate = this.$t('registrationForm.scheduledRate.form.insertTitle');
                this.modalScheduledRate = !this.modalScheduledRate;
            }
        },

        handleSaveScheduleRate() {
            this.$validator.validateAll('scheduled')
                .then((result) => {
                    if (result) {
                        this.btnChildSaveDisabled = true;
                        this.modalScheduledRate = false;
                        if (this.vScheduled.to_date >= formatDateDatabase(this.vModel.departure)) {
                            $dialog.informationError(this.$t('message.dateOutOfStay'));
                            return;
                        }
                        // SHOW CREDENTIAL ACCESS
                        this.showCredential2('', true, false, this.global.accessSpecialOrder.scheduledRate);
                    } else {
                        $alert.inputRequiredAlert();
                    }
                });
        },

        fromDateScheduledDisable(date) {
            const arrival = new Date(this.vModel.arrival);
            arrival.setDate(arrival.getDate() - 1);
            return date < arrival;
        },

        toDateScheduledDisable(date) {
            const fromDate = new Date(this.vScheduled.from_date);
            fromDate.setDate(fromDate.getDate() - 1);
            return date < fromDate;
        },

        // ------------------END CRUD SCHEDULED RATE-------------------------------//

        // -------------------- CRUD FOR DEPOSIT---------------------------//
        async getAccount(type) {
            const params = {
                type: (this.modeChildValue === this.global.modeDeposit.cash ? this.global.subGroupAccount.cashPayment : (this.modeChildValue === this.global.modeDeposit.card ? this.global.subGroupAccount.creditOrDebitCard : (this.modeChildValue === this.global.modeDeposit.other ? this.global.subGroupAccount.bankTransfer : ''))),
                sub_department_code: this.vDeposit.sub_department_code,
                currency_code: this.vDeposit.currency_code,
            };
            try {
                const { data } = await depositResource.account(params);
                this.accounts = data;
                setTimeout(() => { this.account = type === this.global.subGroupAccount.cashPayment ? this.accounts[0] : this.account; }, 100);
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        async getExchangeRate(datax) {
            const params = {
                currency_code: datax || this.vDeposit.currency_code,
            };
            try {
                const { data } = await depositResource.exchangeRate(params);
                this.vDeposit.exchange_rate = data;
                this.vDeposit.amount = (this.vDeposit.amount_foreign * this.vDeposit.exchange_rate);
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        async getLookupDeposit() {
            try {
                const { data } = await depositResource.lookup();
                this.dataLookupDeposit = data;
                if (this.vDeposit.currency_code) {
                    this.getExchangeRate();
                }
                this.$closeLoadingIndicator(this);
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        async getDepositList(isCloseLoadingIndicator) {
            const params = {
                id: this.reservationNumber,
                isShowCorrection: this.showCorrectionDeposit,
                isShowVoid: this.showVoidDeposit,
            };
            if (this.modalMain && this.activeTab == 2) {
                this.$loadingIndicator(this);
            }
            try {
                const { data } = await depositResource.list(params);
                this.guestDeposit = data.guestDeposit;
                this.totalGuestDeposit = data.total;
                this.balanceDeposit = data.total[0].balance;
                // this.modalMain = true;
                // this.$vs.loading.close('#depositTable>.con-vs-loading');
                if(isCloseLoadingIndicator) this.$closeLoadingIndicator(this);
            } catch (error) {
                // this.$vs.loading.close('#depositTable>.con-vs-loading');
                if(isCloseLoadingIndicator) this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert(error);
            }
        },

        async trackingDeposit(val) {
            const params = {
                id_log: val.id_log,
                table: this.global.tableName.guestDeposit
            };
            this.titlePopup = `Tracking Data - ID: ${params.id_log}`;
            this.$loadingIndicator(this);
            try {
                const { data } = await trackingDataResource.getData(params);
                this.dataTracking = data.modelGrid;
                this.modalChild = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
            this.$closeLoadingIndicator(this);
        },

        async insertDeposit() {
            try {
                const { data } = await depositResource.store(this.vDeposit);
                if (data == 0) {
                    this.modalChild = false;
                    this.getDepositList(true);
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.insertGuestDeposit.${data}`));
                    this.btnChildSaveDisabled = false;
                }
                this.$emit('refreshData');
                this.$vs.loading.close('#button-save-child-form>.con-vs-loading');
            } catch (error) {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-child-form>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        resetDeposit(mode) {
            this.vDeposit = {
                reservation_number: this.reservationNumber,
                currency_code: this.defaultCurrency,
                default_currency_code: this.defaultCurrency,
                exchange_rate: 1,
                sub_department_code: this.sdFrontOffice,
                account_code: mode === this.global.modeDeposit.cash ? this.cash : '',
                amount_foreign: 0,
                amount: 0,
                charge_percent: 0,
                charge_amount: 0,
                total_amount: 0,
                reservation_status: this.idData.status_code,
                remark: '',
                document_number: '',
                isRefund: false,
                audit_date: this.auditDate,
                user_id: this.global.userInfo.code,
            };
            this.account_code = '';
            this.account = null;
            this.btnChildSaveDisabled = false;
            this.$validator.pause();
            this.$nextTick(() => {
                this.$validator.errors.clear();
                this.$validator.fields.items.forEach((field) => field.reset());
                this.$validator.fields.items.forEach((field) => this.errors.remove(field));
                this.$validator.resume();
            });
            this.dbErrors = {};
        },

        async showDepositForm(val, modeData) {
            if((modeData == this.global.modeDeposit.cash && this.depositAccess.cash)
            || (modeData == this.global.modeDeposit.card && this.depositAccess.card)
            || (modeData == this.global.modeDeposit.refund && this.depositAccess.cashRefund)
            || (modeData == this.global.modeDeposit.other && this.depositAccess.otherPayment)
            || (modeData == this.global.modeData.tracking)) {
                this.modePopUp = 1;
                this.modalPaymentOption = false;
                this.resetDeposit(modeData);
                this.modeChildValue = modeData;
                this.$loadingIndicator(this);
                if (this.modeChildValue === this.global.modeDeposit.cash || this.modeChildValue === this.global.modeDeposit.refund) {
                    this.modalChildTitle = this.modeChildValue === this.global.modeDeposit.cash ? this.$t('registrationForm.deposit.title.cashDeposit') : this.$t('registrationForm.deposit.title.cashRefund');
                    if (this.modeChildValue === this.global.modeDeposit.refund) {
                        await this.getBalance();
                        this.vDeposit.isRefund = true;
                        this.vDeposit.amount_foreign = this.balanceDeposit < 0 ? -this.balanceDeposit : 0;
                        this.vDeposit.remark = this.$t('registrationForm.deposit.refund');
                    }
                    this.getLookupDeposit();
                    await this.getAccount(this.global.subGroupAccount.cashPayment);
                } else if (this.modeChildValue === this.global.modeDeposit.card) {
                    this.modalChildTitle = this.$t('registrationForm.deposit.title.cardDeposit');
                    this.getLookupDeposit();
                    await this.getAccount(this.global.subGroupAccount.creditOrDebitCard);
                } else if (this.modeChildValue === this.global.modeDeposit.other) {
                    this.modalChildTitle = this.$t('registrationForm.deposit.title.otherDeposit');
                    this.getLookupDeposit();
                    await this.getAccount(this.global.subGroupAccount.bankTransfer);
                } else if (this.modeChildValue === this.global.modeData.tracking) {
                    this.modalChildTitle = this.$t('title.trackingData') + ' ID: ' + val.id_log;
                    this.trackingDeposit(val);
                }
                this.$closeLoadingIndicator(this);
                this.modalChild = true;
            }
        },

        getTotalAmount() {
            const chargePercent = this.vDeposit.charge_percent >= 0 ? this.vDeposit.charge_percent : 0;
            this.vDeposit.amount = (this.vDeposit.amount_foreign * this.vDeposit.exchange_rate);
            this.vDeposit.charge_amount = (this.vDeposit.amount_foreign * chargePercent) / 100;
            this.vDeposit.total_amount = this.vDeposit.charge_amount + this.vDeposit.amount_foreign;
        },

        async saveDeposit() {
            this.$validator.validateAll('deposit').then(async (result) => {
                if (this.modeChildValue == this.global.modeDeposit.card) {
                    this.$validator.validateAll('card').then((resultx) => {
                        if (!resultx) {
                            $alert.inputRequiredAlert();
                        }
                    });
                }
                if (result) {
                    await this.getBalance();
                    if (this.modeChildValue == this.global.modeDeposit.refund && this.vDeposit.amount_foreign > (-this.balanceDeposit)) {
                        this.$vs.dialog({
                            color: 'danger',
                            title: this.$t('message.errorTitle'),
                            text: this.$t('message.maxRefund') + formatNumberValue(this.balanceDeposit < 0 ? -this.balanceDeposit : 0),
                            acceptText: this.$t('button.ok'),
                            accept: () => {
                                this.vDeposit.amount_foreign = this.balanceDeposit < 0 ? -this.balanceDeposit : 0;
                                this.getTotalAmount();
                            },
                        });
                        return;
                    }
                    this.$vs.loading({ container: '#button-save-child-form', scale: this.global.scaleLoadingButton });
                    this.btnChildSaveDisabled = true;
                    this.insertDeposit();
                }
            });
        },

        async correctionVoid() {
            const data = {
                userId: this.global.userInfo.code,
                userBy: this.credential.user,
                reason: this.credential.reason,
                isShowCorrection: this.showCorrectionDeposit,
                idLog: this.idLog,
                resvNumber: this.reservationNumber,
            };
            if (this.isCorrection) {
                try {
                    const amount = await this.getAmountBefore(this.idLog);
                    this.oldCorrectionValue = amount;
                    this.newCorrectionValue = amount;
                    this.correctionPrompt = true;
                } catch (error) {
                    $alert.errorFetchDataAlert();
                }
            } else {
                try {
                    await depositResource.void(data);
                    this.getDepositList(true);
                    $alert.acceptAlertSucces();
                } catch (error) {
                    $alert.errorSaveDataAlert();
                }
            }
        },

        async getAmountBefore(id) {
            const { data } = await depositResource.amountBefore({ idLog: id, isShowCorrection: this.showCorrectionDeposit });
            return data;
        },

        async correctionData() {
            const data = {
                userId: this.global.userInfo.code,
                userBy: this.credential.user,
                reason: this.credential.reason,
                amount: this.newCorrectionValue,
                idLog: this.paramsData.id_log,
            };
            try {
                await depositResource.correction(data);
                this.getDepositList(true);
                $alert.acceptAlertSucces();
            } catch (error) {
                $alert.errorSaveDataAlert();
            }
        },

        async getBalance() {
            const { data } = await depositResource.balance({ q: this.reservationNumber });
            this.balanceDeposit = data.balance;
            return data;
        },
        // ---------------------END CRUD DEPOSIT---------------------------//

        // ------------------START CRUD EXTRA CHARGE-------------------------------//

        async getExtraCharge() {
            const params = {
                number: this.isReservation ? this.reservationNumber : this.folioNumber,
            };
            try {
                const { data } = this.isReservation ? await rvExtraChargeResource.list(params) : await ghExtraChargeResource.list(params);
                this.extraCharges = data;
                // this.$closeLoadingIndicator(this);
            } catch (error) {
                // this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert(error);
            }
        },

        async getDataLookupExtraCharge() {
            const params = {
                q: this.vExtraCharge.sub_department_code,
                outlet: this.vExtraCharge.outlet_code,
            };
            try {
                const { data } = this.isReservation ? await rvExtraChargeResource.lookup(params) : await ghExtraChargeResource.lookup(params);
                this.dlExtraCharge = data;
                this.modalChildExtraCharge = true;
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        handleChangeSubDepartment() {
            this.getDataLookupExtraCharge();
            this.resetOptionsChange = true;
            const { account } = this.dlExtraCharge;
            for (const accountX of account) {
                if (accountX.code === this.vExtraCharge.account_code) {
                    break;
                } else {
                    this.vExtraCharge.account_code = '';
                    break;
                }
            }
        },

        handleChangeOutlet() {
            if(this.vExtraCharge.outlet) {
                this.vExtraCharge.sub_department_code = this.vExtraCharge.outlet.sub_department_code;
                this.vExtraCharge.outlet_code = this.vExtraCharge.outlet.code;
                this.getDataLookupExtraCharge();
                this.resetProduct = true;
                const { account } = this.dlExtraCharge;
                for (const accountX of account) {
                    if (accountX.code === this.vExtraCharge.account_code) {
                        break;
                    } else {
                        this.vExtraCharge.account_code = '';
                        break;
                    }
                }
            }
        },

        handleChangeProduct() {
            if(this.vExtraCharge.product) {
                this.vExtraCharge.product_code = this.vExtraCharge.product.code;
                const { account } = this.dlExtraCharge;
                for (const accountX of account) {
                    if (accountX.code === this.vExtraCharge.product.account_code) {
                        this.vExtraCharge.account_code = this.vExtraCharge.product.account_code;
                        break;
                    } else {
                        this.vExtraCharge.account_code = '';
                        break;
                    }
                }
            }
        },

        async insertExtraCharge() {
            try {
                const { data } = this.isReservation ? await rvExtraChargeResource.store(this.vExtraCharge) : await ghExtraChargeResource.store(this.vExtraCharge);
                if (data == 0) {
                    this.$refs.extraCharge.refreshData();
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.extraCharge.${data}`));
                }
                this.btnChildSaveDisabled = false;
                this.modalChildExtraCharge = false;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.btnChildSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async updateExtraCharge() {
            try {
                this.vExtraCharge.user_id = this.global.userInfo.code;
                const { data } = this.isReservation ? await rvExtraChargeResource.update(this.vExtraCharge) : await ghExtraChargeResource.update(this.vExtraCharge);
                if (data == 0) {
                    this.$refs.extraCharge.refreshData();
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.extraCharge.${data}`));
                }

                this.btnChildSaveDisabled = false;
                this.modalChildExtraCharge = false;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.btnChildSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorModifyingDataAlert();
            }
        },

        async deleteExtraCharge(data) {
            const params = {
                id_log: data.id_log,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this);
            try {
                const { data } = this.isReservation ? await rvExtraChargeResource.delete(params) : await ghExtraChargeResource.delete(params);
                this.$refs.extraCharge.refreshData();
                this.$closeLoadingIndicator(this);
                $alert.deleteAlertSuccess();
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorDeleteDataAlert();
            }
        },

        async editExtraCharge(id) {
            this.$loadingIndicator(this);
            try {
                this.idLogExtraCharge = id.id_log;
                const { data } = this.isReservation ? await rvExtraChargeResource.get(id.id_log) : await ghExtraChargeResource.get(id.id_log);
                this.vExtraCharge = data;
                this.vExtraCharge.outlet = {
                    code: data.outlet_code,
                    name: data.outlet_name,
                };
                this.vExtraCharge.product = {
                    code: data.product_code,
                    name: data.product_name,
                };
                this.getDataLookupExtraCharge();
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert(error);
            }
        },

        async showExtraChargeForm(data, mode) {
            this.modeExtraCharge = mode;
            this.activeTabExtraCharge = 1;
            this.resetExtraCharge();
            if (mode == this.global.modeData.insert) {
                this.extraChargeBreakdownTabDisabled = true;
                await this.getDataLookupExtraCharge();
                this.extraChargeBreakdownData = [];
                this.modalChildTitle = this.$t('registrationForm.extraCharge.title.insert');
            } else {
                this.extraChargeBreakdownTabDisabled = false;
                await this.editExtraCharge(data);
                this.modalChildTitle = this.$t('registrationForm.extraCharge.title.update');
            }
        },

        resetExtraCharge() {
            this.vExtraCharge = {
                number: this.isReservation ? this.reservationNumber : this.folioNumber,
                amount: 0,
                quantity: 1,
                per_pax: false,
                extra_pax: 0,
                per_pax_extra: false,
                max_pax: 1,
                sub_department_code: this.dvSubDepartment,
                charge_frequency_code: '1',
                user_id: this.global.userInfo.code,
            };
            this.resetOptionsChange = false;
            this.btnChildSaveDisabled = false;
        },

        handleSaveExtraCharge() {
            this.$validator.validateAll('extraCharge').then((result) => {
                if (result) {
                    this.btnChildSaveDisabled = true;
                    this.$loadingIndicator(this);
                    if (this.modeExtraCharge == this.global.modeData.insert) {
                        this.insertExtraCharge();
                    } else {
                        this.updateExtraCharge();
                    }
                } else {
                    $alert.inputRequiredAlert();
                }
            });
        },

        // Breakdown
        async handleShowExtraChargeBreakdown(params, modeData) {
            this.resetExtraChargeBreakdown();
            this.modeExtraChargeBreakdown = modeData;
            if(modeData == this.global.modeData.insert) {
                this.$loadingIndicator(this);
                this.titleExtraChargeBreakdown = this.$t('registrationForm.extraCharge.title.insertBreakdown');
                await this.getDataLookupExtraChargeBreakdown();
            } else if(modeData == this.global.modeData.edit) {
                this.$loadingIndicator(this);
                this.titleExtraChargeBreakdown = this.$t('registrationForm.extraCharge.title.updateBreakdown');
                await this.editExtraChargeBreakdown(params);
            }
            this.$closeLoadingIndicator(this);
        },

        async getExtraChargeBreakdown() {
            try {
                const { data } = this.isReservation ? await rvExtraChargeResource.breakdownList(this.idLogExtraCharge) : await ghExtraChargeResource.breakdownList(this.idLogExtraCharge);
                this.extraChargeBreakdownData = data;
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        async getDataLookupExtraChargeBreakdown() {
            const params = {
                q: this.vExtraChargeBreakdown.sub_department_code,
                outlet: this.vExtraChargeBreakdown.outlet_code,
            };
            try {
                const { data } = this.isReservation ? await rvExtraChargeResource.lookup(params) : await ghExtraChargeResource.lookup(params);
                this.dlExtraChargeBreakdown = data;
                this.modalChildExtraChargeBreakdown = true;
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        handleChangeSubDepartmentBreakdown() {
            this.getDataLookupExtraChargeBreakdown();
            this.resetOptionsChange = true;
            const { account } = this.dlExtraChargeBreakdown;
            for (const accountX of account) {
                if (accountX.code === this.vExtraChargeBreakdown.account_code) {
                    break;
                } else {
                    this.vExtraChargeBreakdown.account_code = '';
                    break;
                }
            }
        },

        handleChangeOutletBreakdown() {
            if(this.vExtraChargeBreakdown.outlet) {
                this.vExtraChargeBreakdown.sub_department_code = this.vExtraChargeBreakdown.outlet.sub_department_code;
                this.vExtraChargeBreakdown.outlet_code = this.vExtraChargeBreakdown.outlet.code;
                this.getDataLookupExtraChargeBreakdown();
                this.resetProductBreakdown = true;
                const { account } = this.dlExtraChargeBreakdown;
                for (const accountX of account) {
                    if (accountX.code === this.vExtraChargeBreakdown.account_code) {
                        break;
                    } else {
                        this.vExtraChargeBreakdown.account_code = '';
                        break;
                    }
                }
            }
        },

        handleChangeProductBreakdown() {
            if(this.vExtraChargeBreakdown.product) {
                this.vExtraChargeBreakdown.product_code = this.vExtraChargeBreakdown.product.code;
                const { account } = this.dlExtraChargeBreakdown;
                for (const accountX of account) {
                    if (accountX.code === this.vExtraChargeBreakdown.product.account_code) {
                        this.vExtraChargeBreakdown.account_code = this.vExtraChargeBreakdown.product.account_code;
                        break;
                    } else {
                        this.vExtraChargeBreakdown.account_code = '';
                        break;
                    }
                }
            }
        },

        async handleChangeAccount() {
            this.btnChildSaveDisabledBreakdown = true;
            const { data } = this.isReservation ? await rvExtraChargeResource.getSubGroupAccount( {code: this.vExtraChargeBreakdown.account_code}) : await ghExtraChargeResource.getSubGroupAccount({code:this.vExtraChargeBreakdown.account_code});
            if(data.sub_group_code === this.global.subGroupAccount.accountPayable) {
                this.businessSourceBreakdownDisabled = false;
            } else {
                this.businessSourceBreakdownDisabled = true;
                this.vExtraChargeBreakdown.company_code = '';
            }
            this.btnChildSaveDisabledBreakdown = false;
        },

        resetExtraChargeBreakdown() {
            this.vExtraChargeBreakdown = {
                number: this.isReservation ? this.reservationNumber : this.folioNumber,
                outlet_code: '',
                product_code: '',
                amount: 0,
                quantity: 1,
                per_pax: false,
                extra_pax: 0,
                per_pax_extra: false,
                max_pax: 1,
                sub_department_code: this.dvSubDepartment,
                charge_frequency_code: '1',
                user_id: this.global.userInfo.code,
            };
            this.businessSourceBreakdownDisabled = true;
            this.resetOptionsChange = false;
            this.btnChildSaveDisabledBreakdown = false;
        },

        handleSaveExtraChargeBreakdown() {
            this.$validator.validateAll('extraChargeBreakdown').then((result) => {
                if (result) {
                    this.btnChildSaveDisabledBreakdown = true;
                    this.$loadingIndicator(this);
                    if (this.modeExtraChargeBreakdown == this.global.modeData.insert) {
                        this.insertExtraChargeBreakdown();
                    } else {
                        this.updateExtraChargeBreakdown();
                    }
                } else {
                    $alert.inputRequiredAlert();
                }
            });
        },

        async insertExtraChargeBreakdown() {
            try {
                this.vExtraChargeBreakdown.extra_charge_id = this.idLogExtraCharge;
                const { data } = this.isReservation ? await rvExtraChargeResource.insertBreakdown(this.vExtraChargeBreakdown) : await ghExtraChargeResource.insertBreakdown(this.vExtraChargeBreakdown);
                if (data == 0) {
                    this.$refs.extraChargeBreakdown.refreshData();
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.extraCharge.${data}`));
                }
                this.btnChildSaveDisabledBreakdown = false;
                this.modalChildExtraChargeBreakdown = false;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.btnChildSaveDisabledBreakdown = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async updateExtraChargeBreakdown() {
            try {
                this.vExtraChargeBreakdown.user_id = this.global.userInfo.code;
                const { data } = this.isReservation ? await rvExtraChargeResource.updateBreakdown(this.vExtraChargeBreakdown) : await ghExtraChargeResource.updateBreakdown(this.vExtraChargeBreakdown);
                if (data == 0) {
                    this.$refs.extraChargeBreakdown.refreshData();
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.extraCharge.${data}`));
                }

                this.btnChildSaveDisabledBreakdown = false;
                this.modalChildExtraChargeBreakdown = false;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.btnChildSaveDisabledBreakdown = false;
                this.$closeLoadingIndicator(this);
                $alert.errorModifyingDataAlert();
            }
        },

        async deleteExtraChargeBreakdown(data) {
            const params = {
                id_log: data.id_log,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this);
            try {
                const { data } = this.isReservation ? await rvExtraChargeResource.deleteBreakdown(params) : await ghExtraChargeResource.deleteBreakdown(params);
                await this.$refs.extraChargeBreakdown.refreshData();
                this.$closeLoadingIndicator(this);
                $alert.deleteAlertSuccess();
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorDeleteDataAlert();
            }
        },

        async editExtraChargeBreakdown(id) {
            this.$loadingIndicator(this);
            try {
                const { data } = this.isReservation ? await rvExtraChargeResource.editBreakdown(id.id_log) : await ghExtraChargeResource.editBreakdown(id.id_log);
                this.vExtraChargeBreakdown = data;
                this.handleChangeAccount();
                this.vExtraChargeBreakdown.outlet = {
                    code: data.outlet_code,
                    name: data.outlet_name,
                };
                this.vExtraChargeBreakdown.product = {
                    code: data.product_code,
                    name: data.product_name,
                };
                this.getDataLookupExtraChargeBreakdown();
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert(error);
            }
        },

        handlePackage() {
            const packageId = this.$refs.extraCharge.vPackage;
            if(packageId) {
                this.showCredential2('', true, false, this.global.accessSpecialOrder.extraCharge, this.$t('registrationForm.extraCharge.title.extraCharge'));
            }
        },

        async insertExtraChargePackage() {
            try{
                this.$loadingIndicator(this);
                this.$refs.extraCharge.btnPackageDisabled = true;
                const params = {
                    number: this.isReservation ? this.reservationNumber : this.folioNumber,
                    package_code: this.$refs.extraCharge.vPackage,
                    user_id: this.userID,
                };
                const { data } = this.isReservation ? await rvExtraChargeResource.insertPackage(params) : await ghExtraChargeResource.insertPackage(params);
                if(data == 0) {
                    $alert.acceptAlertSucces();
                }
                this.$refs.extraCharge.vPackage = '';
                await this.$refs.extraCharge.refreshData();
                this.$closeLoadingIndicator(this);
                this.$refs.extraCharge.btnPackageDisabled = false;
            } catch(error) {
                this.$closeLoadingIndicator(this);
                this.$refs.extraCharge.btnPackageDisabled = false;
                $alert.errorSaveDataAlert();
            }
        },

        // ------------------END CRUD EXTRA CHARGE-------------------------------//
        // TRANSFER DEPOSIT
        async handleTransferDeposit() {
            if(this.depositAccess.transfer) {
                this.$loadingIndicator(this);
                this.getLookupTransfer();
                await this.getBalance();
                this.resetTransfer();
                if (this.balanceDeposit < 0) {
                    this.modalTransferDeposit = true;
                }
                this.$closeLoadingIndicator(this);
            }
        },

        async handleSaveTransferDeposit() {
            this.$validator.validateAll('transfer').then(async (result) => {
                if (result) {
                    this.$loadingIndicator(this);
                    this.btnChildSaveDisabled = true;
                    try{
                        const { data } = await depositResource.transferDeposit(this.vTransfer);
                        this.btnChildSaveDisabled = false;
                        if (data == 0) {
                            $alert.acceptAlertSucces();
                            this.modalTransferDeposit = false;
                            this.getDepositList(true);
                        } else {
                            this.$closeLoadingIndicator(this);
                        }
                    } catch (error) {
                        this.btnChildSaveDisabled = false;
                        const message = error.response.data.errors;
                        this.dbErrors = message == undefined ? '' : message;
                        $alert.errorSaveDataAlert(message);
                        this.$closeLoadingIndicator(this);
                    }
                }
            });
        },

        async resetTransfer() {
            this.btnChildSaveDisabled = false;
            this.vTransfer = {
                reservation_number: this.reservationNumber,
                folio_number_to: '',
                reservation_number_to: '',
                transfer_type: 1, // 1:folio, 2:reservation
                sub_folio: '',
                amount: this.balanceDeposit < 0 ? -this.balanceDeposit : 0,
                remark: '',
                user_id: this.global.userInfo.code,
            };
        },

        async getLookupTransfer() {
            const { data } = await depositResource.lookupTransfer(this.reservationNumber);
            this.dlFolios = data.folio;
            this.dlReservations = data.reservation;
        },

        // UPDATE SUB DEPARTMENT/REMARK/DOC NUMBER
        handleUpdateTypeDeposit(params, type) {
            if((type == 1 && this.userAccess.updateSubDepartment) || (type == 2 && this.userAccess.updateRemark) || (type == 3 && this.userAccess.updateDocumentNumber)) {
                this.$refs.updateTypeDeposit.handleUpdateType(params, type);
            }
        },
        // ----------------START OTHER OPTION------------------//
        async handleDuplicate(idData) {
            this.modeDataValue = this.global.modeData.insert;
            this.idData = idData;
            this.reservationNumber = idData.reservation_number;
            this.resetData(); // do not change the order
            this.disabledTab(this.global.modeData.insert);
            this.activeTab = 1;
            this.$loadingIndicator(this);

            this.resetOnChange = false;
            this.getDataLookUp();
            this.titlePopup = this.isReservation ? 'Duplicate Reservation' : 'Duplicate Guest In House';
                await this.editReservation(this.idData.reservation_number, true);
                this.vModel.room_number = '';
                this.vModel.reservation_number = '';
                this.vModel.folio_number = '';
                this.getState(true);
                this.setDiscountRate();
                this.getTotalDays();
                await this.getRoomNumber('bed_type', this.vModel);
            this.vModel.flight_arrival = this.vModel.flight_arrival == '0000-00-00 00:00:00' ? '' : this.vModel.flight_arrival;
            this.vModel.flight_departure = this.vModel.flight_departure == '0000-00-00 00:00:00' ? '' : this.vModel.flight_departure;
            this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;
            this.$closeLoadingIndicator(this);
            this.modalMain = true;
        },

        async handleCheckIn(paramsData) { // use on Check In Reservation Dayend close Solution
            this.paramsData = paramsData || this.paramsData;
            this.reservationNumber = paramsData.reservation_number;
            let status = {};
            let selected = '';
            this.$loadingIndicator(this);
            if (this.groupCheckIn) {
                if (paramsData) {
                    selected = await this.gridApi.getSelectedRows();
                }
                await this.getReservationNumber(selected);
                if (this.search.group && this.reservationNumberList.length > 0) {
                    await this.getFolioList(this.global.folioType.masterFolio, null);
                    this.getLookupDeposit();
                    this.getRoutingAccount();
                    this.getMasterFolio(); // set master folio group exist
                    await this.getReservationGroupList();
                    this.$refs.groupCheckInForm.resetRouting();
                    this.modalGroupCheckIn = true;
                } else {
                    $dialog.selectField();
                    this.$closeLoadingIndicator(this);
                }
            } else {
                status = await this.getReservationStatus();
                if (status.room_number == '') {
                    $dialog.information(this.$t('reservation.popup.pleaseAssignRoom'));
                } else if (status.room_status !== this.global.roomStatus.ready) {
                    $dialog.informationError(`Room ${status.room_number} not Ready`);
                } else {
                    this.showForm(this.paramsData, this.global.modeData.edit, true, this.global.reservationStatus.checkIn);
                }
            }
        },

        async unsetWaitList(reservationNumber) { // use on Dayend Close solution
            const params = {
                number: reservationNumber,
                user_id: this.global.userInfo.code,
            };
            try {
                const { data } = await reservationResource.unsetWaitList(params);
                if (data == 0) {
                    if (this.isDayendClose) {
                        this.precheck();
                    }
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.waitList.${data}`));
                }
                this.$closeLoadingIndicator(this);
            } catch (error) {
                $alert.errorSaveDataAlert();
            }
        },

        async autoAssignRoom(status, reservationNumber) { // use on Dayend Close solution
            const params = {
                ready: status, // 0=>all, 1=>ready
                reservation_number: reservationNumber,
                user_id: this.global.userInfo.code,
            };
            try {
                const { data } = await reservationResource.autoAssignRoom(params);
                this.$closeLoadingIndicator(this);
                if (data == 0) {
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.autoAssignRoom.${data}`));
                }
                if (this.isDayendClose) {
                    this.precheck();
                }
            } catch (error) {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                $alert.errorSaveDataAlert(message);
                this.$closeLoadingIndicator(this);
            }
        },

        async getReservationStatus() {
            const { data } = await reservationResource.reservationStatus(this.reservationNumber);
            return data;
        },

        async checkInDataReservation() {
            this.$validator.validateAll(this.scope1).then((result) => {
                if (!result) {
                    $alert.inputRequiredAlert();
                }
            });
            // const params = {
                this.vModel.reservation_number= this.reservationNumber;
                this.vModel.status_code= this.global.reservationStatus.checkIn;
                this.vModel.user_id= this.global.userInfo.code;
            // };
            this.$vs.loading({ container: '#button-checkin', scale: this.global.scaleLoadingButton });
            this.updateReservation(this.vModel);
            try {
                const { data } = await reservationResource.checkIn(this.vModel);
                this.$vs.loading.close('#button-checkin>.con-vs-loading');
                this.$closeLoadingIndicator(this);
                if (data.status == 'success') {
                    this.modalMain = false;
                    if (this.isDayendClose) {
                        this.precheck();
                        return;
                    }
                    $dialog.information(this.$t('message.checkInReservationSuccessfully') + this.$t('message.folioNo') + data.folio_number + this.$t('message.roomNo') + data.room_number);
                } else if (data > 0) {
                    $dialog.statusCheckInReservation(this.$t(`responseStatus.checkInReservation.${data}`));
                    this.btnMainSaveDisabled = false;
                }
            } catch (error) {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-checkin>.con-vs-loading');
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert(message);
            }
        },

        handleChangeNight() {
            if (this.nights > 0) {
                this.tempNights = this.nights;
                let departure = new Date(this.vModel.arrival);
                const time = new Date(this.vModel.departure);
                const h = this.addZeroHour(time.getHours());
                const m = this.addZeroHour(time.getMinutes());
                const s = this.addZeroHour(time.getSeconds());
                const times = `${h}:${m}:${s}`;
                const arrivalDate = new Date(this.vModel.arrival).getDate();
                const departureDate = parseInt(arrivalDate) + parseInt(this.nights);
                departure.setDate(departureDate);
                departure = formatDateDatabase(departure);
                if (departure >= this.auditDate) {
                    this.vModel.departure = formatDateTimeDatabase(`${departure} ${times}`);
                } else {
                    this.getTotalDays();
                }
            } else {
                this.nights = this.tempNights;
            }
        },

        // PRINT
        handlePrint(id, reportDirectory) {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.receiptDeposit}&guestDepositId=${id}&template=${reportDirectory}` });
            window.open(newTabReport.href, '_blank');
        },

        handlePrintReceipt(paramsData) {
            if (paramsData !== undefined) {
                if (paramsData.isPayment == '-1') {
                    this.handlePrint(paramsData.id_log, this.global.stimulsoftReportFileDirectory.receiptDeposit);
                } else if (paramsData.isPayment == '0') {
                    this.handlePrint(paramsData.id_log, this.global.stimulsoftReportFileDirectory.receiptDepositRefund);
                }
            }
        },

        // ----------------END OTHER OPTION------------------//

        setDiscountRate() {
            let discount1;
            let discount2;
            if (this.vModel.discount_percent == '-1') {
                discount1 = (this.vModel.weekday_rate * this.vModel.discount) / 100;
                discount2 = (this.vModel.weekend_rate * this.vModel.discount) / 100;
            } else {
                discount1 = this.vModel.discount;
                discount2 = this.vModel.discount;
            }
            this.weekday_rate_discount = this.vModel.weekday_rate - discount1;
            this.weekend_rate_discount = this.vModel.weekend_rate - discount2;
        },

        addZeroHour(i) {
            let a = i;
            if (a < 10) {
                a = `0${a}`;
            }
            return a;
        },

        getDateTimeArrival() {
            const time = new Date();
            const h = this.addZeroHour(time.getHours());
            const m = this.addZeroHour(time.getMinutes());
            const s = this.addZeroHour(time.getSeconds());
            const times = `${h}:${m}:${s}`;
            const arrResv = formatDateTimeDatabase(`${this.auditDate} ${times}`);
            return arrResv;
        },

        async getTotalDays() {
            const date1 = new Date(formatDateDatabase(this.vModel.arrival)).getTime();
            const date2 = new Date(formatDateDatabase(this.vModel.departure)).getTime();
            const auditDate = new Date(this.auditDate).getTime();
            if (date1 >= date2) {
                this.vModel.departure = this.departureResv2;
            }
            if (date1 < auditDate && this.modeDataValue === this.global.modeData.insert) {
                this.vModel.arrival = await this.getDateTimeArrival();
            }
            const date3 = new Date(formatDateDatabase(this.vModel.arrival));
            const date4 = new Date(formatDateDatabase(this.vModel.departure));

            // To calculate the time difference of two dates
            const diffInTime = date4.getTime() - date3.getTime();

            // To calculate the no. of days between two dates
            const diffInDays = diffInTime / (1000 * 3600 * 24);
            // restrict negatif departure

            this.nights = diffInDays;
            if (this.nights > 0) {
                this.tempNights = this.nights;
            }
        },

        async resetDate() {
            this.vModel.arrival = this.getDateTimeArrival();
            this.vModel.departure = this.departureResv;
            this.nights = 1;
        },

        async onInputChange(query) {
            if (query.trim().length < 2) {
                return '';
            }
            const { data } = await guestProfileResource.guestProfile({ q: query });
            return data;
        },
        async onSearchItemSelected(item) {
            const params = item.id_log;
            const { data } = await guestProfileResource.detail({ q: params });
            this.vModel.title_code = data.title_code;
            this.vModel.full_name = data.full_name;
            this.vModel.street = data.street;
            this.vModel.country_code = data.country_code;
            this.vModel.state_code = data.state_code;
            this.vModel.city_code = data.city_code;
            this.vModel.city = data.city;
            this.vModel.nationality_code = data.nationality_code;
            this.vModel.postal_code = data.postal_code;
            this.vModel.phone1 = data.phone1;
            this.vModel.phone2 = data.phone2;
            this.vModel.fax = data.fax;
            this.vModel.email = data.email;
            this.vModel.website = data.website;
            this.vModel.company_code = data.company_code;
            this.vModel.guest_type_code = data.guest_type_code;
            this.vModel.id_card_code = data.id_card_code;
            this.vModel.id_card_number = data.id_card_number;
            this.vModel.is_male = data.is_male;
            this.vModel.birth_place = data.birth_place;
            this.vModel.birth_date = data.birth_date === '0000-00-00' ? null : data.birth_date;
            this.vModel.birth_date = data.birth_date;
            this.vModel.guest_profile_id = item.id_log;

            return data;
        },
        resetGuestInformationDetail() {
            this.vModel.title_code = null;
            this.vModel.full_name = null;
            this.vModel.street = null;
            this.vModel.country_code = null;
            this.vModel.state_code = null;
            this.vModel.city_code = null;
            this.vModel.city = null;
            this.vModel.nationality_code = null;
            this.vModel.postal_code = null;
            this.vModel.phone1 = null;
            this.vModel.phone2 = null;
            this.vModel.fax = null;
            this.vModel.email = null;
            this.vModel.website = null;
            this.vModel.company_code = null;
            this.vModel.guest_type_code = null;
            this.vModel.id_card_code = null;
            this.vModel.id_card_number = null;
            this.vModel.is_male = '-1';
            this.vModel.birth_place = null;
            this.vModel.birth_date = null;
            this.vModel.birth_date = null;
            this.vModel.guest_profile_id = null;
        },

        // ------------------end need setting manual for crud-----------------//

        // --------------------CREDENTIAL----------------------------------------//
        showCredential(val, isCorrection) {
            this.resetCredential();
            this.paramsData = val;
            this.isCorrection = isCorrection;
            this.activeCredentialPrompt = true;
            this.isCredential = true;
            this.isReason = true;
            this.idLog = val.id_log;
            this.reservationNumber = val.reservation_number;
            this.credentialTitle = isCorrection ? this.$t('credential.title.correction') + val.id_log : this.$t('credential.title.void') + val.id_log;
            this.specialAccessType = isCorrection ? this.global.accessSpecialOrder.correctDeposit : this.global.accessSpecialOrder.voidDeposit;
        },

        // SHOW CREDENTIAL ACCESS
        showCredential2(val, isCredential, isReason, specialAccessType, title) {
            this.resetCredential();
            this.paramsData = val;
            this.activeCredentialPrompt = true;
            this.isCredential = isCredential;
            this.credentialTitle = title || this.$t('credential.title.credential');
            this.specialAccessType = specialAccessType;
            this.isReason = isReason;
        },

        acceptReason() {
            if (this.specialAccessType === this.global.accessSpecialOrder.overrideRateDiscount) {
                if (this.isReservation) {
                    setTimeout(() => { this.handleSaveReservation3(); }, 100);
                } else {
                    setTimeout(() => { this.handleSaveGuestInHouse3(); }, 100);
                }
            } else if (this.specialAccessType === this.global.accessSpecialOrder.businessSource) {
                this.vModel.user_id = this.global.userInfo.code;
                if (this.isReservation) {
                    this.vModel.wait_list = false;
                    this.updateReservation(this.vModel);
                } else {
                    this.updateGuestInHouse(this.vModel);
                }
            } else if (this.specialAccessType === this.global.accessSpecialOrder.correctDeposit || this.specialAccessType === this.global.accessSpecialOrder.voidDeposit) {
                this.correctionVoid();
            } else if (this.specialAccessType == this.global.accessSpecialOrder.extraCharge) {
                this.insertExtraChargePackage();
            } else if (this.specialAccessType == this.global.accessSpecialOrder.scheduledRate) {
                if(this.modeScheduledRate == this.global.modeData.insert) {
                    this.insertScheduledRate()
                } else if(this.modeScheduledRate == this.global.modeData.delete) {
                    this.deleteScheduledRate()
                } else {
                    this.updateScheduledRate();
                }
            }
        },

        resetCredential() {
            this.credential = {
                user: '',
                pass: '',
                reason: '',
            };
        },

        //  access
        async getDepositAccess() {
            const { data } = await userSettingResource.getOtherAccess({ code: this.userID });
            if (data.otherAccess != undefined && data.otherAccess != null && data.otherAccess != '') {
                this.depositAccess.otherPayment = data.otherAccess[this.global.otherAccessOrder.insertDeposit] == 1;
                this.depositAccess.cash = data.otherAccess[this.global.otherAccessOrder.cashDeposit] == 1;
                this.depositAccess.card = data.otherAccess[this.global.otherAccessOrder.cardDeposit] == 1;
                this.depositAccess.cashRefund = data.otherAccess[this.global.otherAccessOrder.cashRefundDeposit] == 1;
                this.depositAccess.void = data.otherAccess[this.global.otherAccessOrder.voidDeposit] == 1;
                this.depositAccess.correction = data.otherAccess[this.global.otherAccessOrder.correctionDeposit] == 1;
                this.depositAccess.transfer = data.otherAccess[this.global.otherAccessOrder.transferDeposit] == 1;
                this.depositAccess.updateSubDepartment = data.otherAccess[this.global.otherAccessOrder.updateSubDepartmentDeposit] == 1;
                this.depositAccess.updateRemark = data.otherAccess[this.global.otherAccessOrder.updateRemarkDeposit] == 1;
                this.depositAccess.updateDocumentNumber = data.otherAccess[this.global.otherAccessOrder.updateDocumentNumberDeposit] == 1;
            }
        },

        closedCredential() {
            this.btnMainSaveDisabled = false;
            this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
        },
        back() {
            if (this.modalChild) {
                this.modalChild = false;
            } else if (this.modalScheduledRate) {
                this.modalScheduledRate = false;
            } else if (this.modalPaymentOption) {
                this.modalPaymentOption = false;
            } else {
                this.modalMain = false;
            }
        },

        async trackingData(idData) {
            const params = {
                id_log: this.isReservation ? idData.reservation_number : idData.folio_number,
                table: this.isReservation ? this.global.tableName.reservation : this.global.tableName.folio,
            };
            this.titlePopup = `Tracking Data - ID: ${params.id_log}`;
            this.$loadingIndicator(this);
            try {
                const { data } = await trackingDataResource.getData(params);
                this.dataTracking = data.modelGrid;
                this.modalMain = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
            this.$closeLoadingIndicator(this);
        },
    // --------------------CREDENTIAL----------------------------------------//
    },

    watch: {
        availableRoom(value) {
            if (document.getElementById('available')) {
                if (value <= 0) {
                    document.getElementById('available').style.color = '#ff0000';
                } else {
                    document.getElementById('available').style.color = '';
                    document.getElementById('available').classList.remove('apply-shake');
                }
            }
        },
        account() {
            if (this.account !== null) {
                this.vDeposit.account_code = this.account.code;
                this.vDeposit.charge_percent = this.account.charge_percent;
                this.getTotalAmount();
            }
        },
        modalPreventClose() {
            this.modalPreventClose = this.modalMain;
        },
        async modalMain() {
            this.modalPreventClose = this.modalMain;
            if (!this.modalMain && this.modeDataValue == this.global.modeData.edit && this.isReservation) {
                const data = await this.getReservationStatus();
                if ((data.reservation_status !== this.global.reservationStatus.new) && (data.reservation_status !== this.global.reservationStatus.waitList)) {
                    if (data.balance.balance < 0 || data.balance.balance > 0) {
                        this.modalMain = true;
                        this.$vs.dialog({
                            color: 'danger',
                            title: this.$t('message.informationTitle'),
                            text: this.$t('message.depositMustZeroBalance'),
                            acceptText: this.$t('button.ok'),
                            accept() {
                                document.getElementById('deposit').click();
                            },
                        });
                    }
                }
            }

            if (!this.modalMain) {
                this.refreshData(this.search);
            }
        },
    },
    computed: {
        departureResv() {
            const departure = new Date(formatDateTimeDatabase(`${this.auditDate} ${this.checkOutLimit}`));
            departure.setDate(departure.getDate() + 1);

            return formatDateTimeDatabase(departure);
        },
        departureResv2() {
            const arrival = formatDateDatabase(this.vModel.arrival);
            const departure = new Date(formatDateTimeDatabase(`${arrival} ${this.checkOutLimit}`));
            departure.setDate(departure.getDate() + 1);

            return formatDateTimeDatabase(departure);
        },
        auditDate() { return this.$store.state.auditLog.auditDate; },

        // INPUT FIELD REQUIRED
        isTitleRequired() { return this.$store.getters.isTitleRequired; },
        isTAVoucherRequired() { return this.$store.getters.isTAVoucherRequired; },
        isStateRequired() { return this.$store.getters.isStateRequired; },
        isRoomNumberRequired() { return this.$store.getters.isRoomNumberRequired; },
        isPhone1Required() { return this.$store.getters.isPhone1Required; },
        isNationalityRequired() { return this.$store.getters.isNationalityRequired; },
        isMarketRequired() { return this.$store.getters.isMarketRequired; },
        isHKNoteRequired() { return this.$store.getters.isHKNoteRequired; },
        isEmailRequired() { return this.$store.getters.isEmailRequired; },
        isCompanyRequired() { return this.$store.getters.isCompanyRequired; },
        isCityRequired() { return this.$store.getters.isCityRequired; },
        isBusinessSourceRequired() { return this.$store.getters.isBusinessSourceRequired; },

        // DEFAULT VARIABLE
        dvRoomType() { return this.$store.getters.dvRoomType; },
        dvRoomRate() { return this.$store.getters.dvRoomRate; },
        dvSubDepartment() { return this.$store.getters.dvSubDepartment; },
        dvPaymentType() { return this.$store.getters.dvPaymentType; },
        dvComplimentRate() { return this.$store.getters.dvComplimentRate; },
        dvHouseUseRate() { return this.$store.getters.dvHouseUseRate; },
        dvMarket() { return this.$store.getters.dvMarket; },
        dvIndividualMarket() { return this.$store.getters.dvIndividualMarket; },
        checkOutLimit() { return this.$store.getters.checkOutLimit; },
        // GLOBAL ACCOUNT
        ccAdmin() { return this.$store.getters.cCAdmin; },
        cash() { return this.$store.getters.cash; },
        sdFrontOffice() { return this.$store.getters.sdFrontOffice; },
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
        userID() { return this.$store.state.auth.accountCode; },
        scrollbarTag() { return this.$store.getters.scrollbarTag; },

    },
    created() {
        this.getDepositAccess();
        // Handle Back Button & forward on browser create hook
        const unregisterRouterGuard = this.$router.beforeEach((to, from, next) => {
            if (this.modalMain || this.modalChild) {
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
    },
};

</script>
<style lang="scss" scoped>
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

.apply-shake {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}

</style>
<style lang="scss">
@import '@sass/vuexy/pages/form_deposit_charge.scss';
.payment-option span.vs-button-text.vs-button--text{
    display: flex !important;
    justify-content: center;

    img{
        margin-right: 5px;
    }
}
.scheduled_rate.con-vs-dialog .vs-dialog .vs-dialog-text {
    font-size: 0.8rem !important;
}
</style>
