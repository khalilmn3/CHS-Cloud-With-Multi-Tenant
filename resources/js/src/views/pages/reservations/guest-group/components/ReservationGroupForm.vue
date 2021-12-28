<template>
    <div>
        <div class="popup-body vs-con-loading__container">
            <div class="form-container">
                <div ref="popupContainer" class="popup-container" vs-position="left">
                    <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                        <vs-collapse type="margin">
                            <!---------------------------------TAB CONTENT 1 ------------------------------------------->
                                <vs-collapse-item>
                                    <div slot="header">
                                        {{$t('registrationForm.bookingInformation.form.personalInformation')}}
                                    </div>
                                    <vs-row>
                                        <vs-col vs-lg="6" vs-xs="12" class="content-left">
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div :class="{'required' : isTitleRequired}" class="wrap-form-select w-full md:w-4/12">
                                                    <vs-row><label>{{$t('registrationForm.bookingInformation.form.title')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full" id="form-select" label="code" :reduce="value => value.code" :options="dataLookup.title" v-model="vModel.title_code" name="title" v-validate="isTitleRequired ? 'required' : ''" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.title')">{{ errors.first(scope1+'.title') || dbErrors.title_code | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full vs-input md:w-8/12">
                                                        <vs-row>
                                                        <vs-input :label="$t('registrationForm.bookingInformation.form.fullName')" class="w-full required" v-model="vModel.full_name" :maxLength="200"
                                                        :description-text="errors.first(scope1+'.full name') || dbErrors.full_name | toString" v-validate="'required'" name="full name" :data-vv-scope="scope1"/>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input id="resv_by" :label="$t('registrationForm.bookingInformation.form.resvBy')" class="w-full required" v-model="vModel.reservation_by" :maxLength="100"
                                                :description-text="errors.first(scope1+'.resv by') || dbErrors.reservation_by | toString" v-validate="'required'" name="resv by" :data-vv-scope="scope1"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row><label>{{$t('registrationForm.bookingInformation.form.member')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="dataLookup.member" v-model="vModel.member_code"></v-select>
                                                    </vs-row>
                                                </div>
                                                <vs-input :label="$t('registrationForm.bookingInformation.form.street')" class="w-full md:w-1/2" v-model="vModel.street" :maxLength="100"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
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
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div :class="{'required' : isCityRequired}" class="wrap-form-select w-full md:w-1/2">
                                                <vs-row><label>{{$t('registrationForm.bookingInformation.form.city')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full" id="city" :resetOnOptionsChange="resetOnOptionsChangeCity" label="name" :reduce="value => value.code" :options="city" v-model="vModel.city_code" v-validate=" isCityRequired ? 'required' : ''" name="city" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.city')">{{ errors.first(scope1+'.city') || dbErrors.city_code | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <vs-input :disabled="vModel.city_code !== 'OTH'" class="w-full md:w-1/2" label="." v-model="vModel.city"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div :class="{'required' : isNationalityRequired}" class="wrap-form-select w-full md:w-1/2">
                                                <vs-row><label>{{$t('registrationForm.bookingInformation.form.nationality')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.nationality" v-model="vModel.nationality_code" v-validate=" isNationalityRequired ? 'required' : ''" name="nationality" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.nationality')">{{ errors.first(scope1+'.nationality') || dbErrors.nationality_code | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <vs-input class="w-full md:w-1/2" :label="$t('registrationForm.bookingInformation.form.postCode')" v-model="vModel.postal_code" :maxLength="10"/>
                                            </vs-row>
                                        </vs-col>
                                <!-------------------------------- COLOM TWO ---------------------------------->
                                    <vs-col vs-lg="6" vs-xs="12" class="content-right">
                                        <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <vs-input :label="$t('registrationForm.bookingInformation.form.phone')+' 1'" :class="{'required' : isPhone1Required}" class="w-full md:w-1/2" :placeholder="$t('placeholder.phone')" v-model="vModel.phone1" :maxLength="50" :description-text="errors.first(scope1+'.phone1') || dbErrors.phone1 | toString" v-validate=" isPhone1Required ? 'required' : ''" name="phone1" :data-vv-scope="scope1"/>
                                            <vs-input :label="$t('registrationForm.bookingInformation.form.phone')+' 2'" class="w-full md:w-1/2" :placeholder="$t('placeholder.phone')" v-model="vModel.phone2" :maxLength="50"/>
                                        </vs-row>
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <vs-input :label="$t('registrationForm.bookingInformation.form.fax')" class="w-full md:w-1/2" v-model="vModel.fax" :maxLength="20"/>
                                            <vs-input :label="$t('registrationForm.bookingInformation.form.email')" :class="{'required' : isEmailRequired}" class="w-full md:w-1/2" :placeholder="$t('placeholder.email')" v-model="vModel.email" :maxLength="50" :description-text="errors.first(scope1+'.email') || dbErrors.email | toString" v-validate=" isEmailRequired ? 'required' : ''" name="email" :data-vv-scope="scope1"/>
                                        </vs-row>
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <vs-input :label="$t('registrationForm.bookingInformation.form.website')" class="w-full md:w-1/2" :placeholder="$t('placeholder.website')" v-model="vModel.website" :maxLength="50"/>
                                            <div :class="{'required' : isCompanyRequired}" class="wrap-form-select w-full md:w-1/2">
                                                <vs-row><label>{{$t('registrationForm.bookingInformation.form.company')}}</label></vs-row>
                                                <vs-row>
                                                    <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="dataLookup.company" v-model="vModel.company_code" v-validate=" isCompanyRequired ? 'required' : ''" name="company" :data-vv-scope="scope1"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has(scope1+'.company')">{{ errors.first(scope1+'.company') || dbErrors.company_code | toString  }}</span>
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
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
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{$t('registrationForm.bookingInformation.form.idCardType')}}</vs-row>
                                                <vs-row>
                                                    <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="dataLookup.id_card" v-model="vModel.id_card_code"></v-select>
                                                </vs-row>
                                            </div>
                                            <vs-input :label="$t('registrationForm.bookingInformation.form.idCardNumber')" class="w-full md:w-1/2" v-model="vModel.id_card_number" :maxLength="25"/>
                                        </vs-row>
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <vs-input :label="$t('registrationForm.bookingInformation.form.birthPlace')" class="w-full md:w-1/2" v-model="vModel.birth_place" :maxLength="50"/>
                                            <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{$t('registrationForm.bookingInformation.form.birthDate')}}</vs-row>
                                                <vs-row>
                                                    <date-picker :lang="$t('lang')" value-type="YYYY-MM-DD" clearable format="DD/MM/YYYY" placeholder="DD/MM/YYYY" label="name" class="w-full" v-model="vModel.birth_date">
                                                    </date-picker>
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                    </vs-col>
                                    </vs-row>
                                </vs-collapse-item>
                            <!-------------------------------- TAB CONTENT 2 ------------------------------------------->
                                <vx-card class="mb-3" icon="date_range" :title="$t('registrationForm.bookingInformation.form.stayInformation')" collapseAction>
                                    <vs-row>
                                        <vs-col class="content-left lg:w-1/2">
                                            <vs-row vs-type="flex" vs-justify="end">
                                                <vs-col vs-lg="4" vs-xs="6"><vs-input-number class="number-input" min="1" :label="$t('registrationForm.bookingInformation.form.night')+':'" v-model="nights" @input="handleChangeNight(); getRoomNumber('bed_type',vModel)"/></vs-col>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <vs-col class="wrap-form-select" vs-lg="6" vs-xs="12">
                                                <vs-row><label><span class="required"> {{$t('registrationForm.bookingInformation.form.arrivalDate')}}</span></label></vs-row>
                                                <vs-row>
                                                    <date-picker
                                                    :clearable="false"
                                                    :disabled-date="dateTodayDisable"
                                                    type="datetime"
                                                    :show-time-panel="showTimeRangePanel"
                                                    @close="showTimeRangePanel = false"
                                                    @input="getTotalDays(); getRoomNumber('',vModel)"
                                                    confirm
                                                    confirm-text="ok"
                                                    :lang="$t('lang')"
                                                    value-type="YYYY-MM-DD HH:mm:ss"
                                                    format="DD/MM/YYYY HH:mm:ss"
                                                    label="name"
                                                    class="w-full"
                                                    v-model="vModel.arrival" v-validate="'required'" name="arrival" :data-vv-scope="scope2">
                                                        <template v-slot:footer>
                                                            <button class="mx-btn mx-btn-text" @click="resetDate">
                                                                {{ $t('common.datepicker.reset') }}
                                                            </button>
                                                            <button class="mx-btn mx-btn-text" @click="toggleTimeRangePanel">
                                                                {{ showTimeRangePanel ? $t('common.datepicker.selectDate') : $t('common.datepicker.selectTime') }}
                                                            </button>
                                                        </template>
                                                    </date-picker>
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.arrival')">{{ errors.first(scope2+'.arrival')}}</span>
                                                </vs-row>
                                            </vs-col>
                                            <vs-col class="wrap-form-select" vs-lg="6" vs-xs="12">
                                                <vs-row><label><span class="required"> {{$t('registrationForm.bookingInformation.form.departureDate')}}</span></label></vs-row>
                                                <vs-row>
                                                    <date-picker
                                                    :clearable="false"
                                                    :disabled-date="dateTodayDisable"
                                                    type="datetime"
                                                    :show-time-panel="showTimeRangePanel"
                                                    @close="showTimeRangePanel = false"
                                                    @input="getTotalDays(); getRoomNumber('',vModel)"
                                                    confirm
                                                    confirm-text="ok"
                                                    :lang="$t('lang')"
                                                    value-type="YYYY-MM-DD HH:mm:ss"
                                                    format="DD/MM/YYYY HH:mm:ss"
                                                    label="name"
                                                    class="w-full"
                                                    v-model="vModel.departure" v-validate="'required'" name="departure" :data-vv-scope="scope2">
                                                        <template v-slot:footer>
                                                            <button class="mx-btn mx-btn-text" @click="resetDate">
                                                                {{ $t('common.datepicker.reset') }}
                                                            </button>
                                                            <button class="mx-btn mx-btn-text" @click="toggleTimeRangePanel">
                                                                {{ showTimeRangePanel ? $t('common.datepicker.selectDate') : $t('common.datepicker.selectTime') }}
                                                            </button>
                                                        </template>
                                                    </date-picker>
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.arrival')">{{ errors.first(scope2+'.arrival')}}</span>
                                                </vs-row>
                                            </vs-col>
                                        </vs-row>
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <div class="wrap-form-select w-full md:w-1/2 required">
                                            <vs-row><label>{{$t('registrationForm.bookingInformation.form.roomType')}}</label></vs-row>
                                                <vs-row>
                                                    <v-select :disabled="resvStatus==global.reservationStatus.checkIn" class="w-full" id="form-select" @input="getRoomNumber();resetOnChange = true" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.room_type" v-model="vModel.room_type_code" v-validate="'required'" name="room type" :data-vv-scope="scope2"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.room type')">{{ errors.first(scope2+'.room type') || dbErrors.room_type_code | toString  }}</span>
                                                </vs-row>
                                            </div>
                                            <div class="wrap-form-select w-full md:w-1/2 required">
                                                <vs-row><label>{{$t('registrationForm.bookingInformation.form.bedType')}}</label></vs-row>
                                                <vs-row>
                                                    <v-select :disabled="resvStatus==global.reservationStatus.checkIn" id="form-select" @input="getRoomNumber('bed_type')" :resetOnOptionsChange="resetOnChange" :clearable="false" class="w-full" label="name" :reduce="value => value.code" :options="bedTypes" v-model="vModel.bed_type_code" v-validate="'required'" name="bed type" :data-vv-scope="scope2"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.bed type')">{{ errors.first(scope2+'.bed type') || dbErrors.bed_type_code | toString  }}</span>
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                        <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <vs-row class="mb-3" vs-type="flex" vs-justify="space-around">
                                                <vs-col style="margin-right:15px;" vs-w="3" vs-xs="12">
                                                    <vs-input-number class="number-input" min="1" :label="$t('registrationForm.bookingInformation.form.rooms')+':'" v-model="vModel.rooms" v-validate="'required'" name="adult" :data-vv-scope="scope2" />
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.adult')">{{ errors.first(scope2+'.adult') || dbErrors.adult | toString  }}</span>
                                                </vs-col>
                                                <vs-col style="margin-right:15px;" vs-w="3" vs-xs="12">
                                                    <span id="available" v-if="vModel.room_type_code" style="margin-right:5px; margin-top: auto;">{{$t('registrationForm.bookingInformation.form.available')}} : {{ availableRoom }}</span>
                                                </vs-col>
                                            </vs-row>
                                            <vs-row  vs-type="flex" vs-justify="space-around">
                                                <vs-col style="margin-right:15px;" vs-w="3" vs-xs="12">
                                                    <vs-input-number class="number-input" min="1" :label="$t('registrationForm.bookingInformation.form.adult')+':'" v-model="vModel.adult" v-validate="'required'" name="adult" :data-vv-scope="scope2" />
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.adult')">{{ errors.first(scope2+'.adult') || dbErrors.adult | toString  }}</span>
                                                </vs-col>
                                                <vs-col style="margin-right:15px;" vs-w="3" vs-xs="12">
                                                    <vs-input-number class="number-input" :label="$t('registrationForm.bookingInformation.form.child')+':'" v-model="vModel.child" />
                                                </vs-col>
                                            </vs-row>
                                        </vs-row>
                                        <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <div :class="{'required' : isBusinessSourceRequired}" class="wrap-form-select w-full md:w-4/12">
                                                <vs-row><label>{{$t('registrationForm.bookingInformation.form.businessSource')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full height200" id="form-select" @input="getRoomRate(vModel)" label="name" :reduce="value => value.code" :options="dataLookup.business_source" v-model="vModel.business_source_code" v-validate="isBusinessSourceRequired ? 'required' : ''" name="business source" :data-vv-scope="scope2"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope2+'.business source')">{{ errors.first(scope2+'.business source') || dbErrors.business_source_code | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            <div class="wrap-form-select w-full md:w-4/12">
                                                <vs-row>{{$t('registrationForm.bookingInformation.form.commissionType')}}</vs-row>
                                                <vs-row>
                                                    <v-select id="form-select" class="w-full height200" label="name" :reduce="value => value.code" :options="dataLookup.commission_type" v-model="vModel.commission_type_code"></v-select>
                                                </vs-row>
                                            </div>
                                            <div class="wrap-form-select w-full md:w-4/12">
                                                <vs-row>{{$t('registrationForm.bookingInformation.form.commissionValue')}}</vs-row>
                                                <vs-row>
                                                    <input-number ref="quantity" class="w-full" v-model="vModel.commission_value" />
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <div :class="{'required' : isMarketRequired}" class="wrap-form-select w-full md:w-6/12">
                                            <vs-row><label>{{$t('registrationForm.bookingInformation.form.market')}}</label></vs-row>
                                                <vs-row>
                                                    <v-select class="w-full height150" :clearable="false" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.market" v-model="vModel.market_code" v-validate="'required'" name="market" :data-vv-scope="scope2"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.market')">{{ errors.first(scope2+'.market') || dbErrors.market_code | toString  }}</span>
                                                </vs-row>
                                            </div>
                                            <div class="wrap-form-select w-full md:w-6/12">
                                                <vs-row>{{$t('registrationForm.bookingInformation.form.bookingSource')}}</vs-row>
                                                <vs-row>
                                                    <v-select id="form-select" class="w-full height150" label="name" :reduce="value => value.code" :options="dataLookup.booking_source" v-model="vModel.booking_source_code"></v-select>
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                    </vs-col>
                                <!------------------ COLOM TWO ------------------------------>
                                    <vs-col class="content-right lg:w-1/2">
                                        <span style="font-weight:bold">{{$t('registrationForm.bookingInformation.form.rateInformation')}}</span>
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <div class="wrap-form-select w-full md:w-6/12 required">
                                                <vs-row><label>{{$t('registrationForm.bookingInformation.form.roomRate')}}</label></vs-row>
                                                <vs-row>
                                                    <v-select class="w-full" id="form-select" :clearable="false" @input="getDailyRate" :resetOnOptionsChange="resetOnChange" label="name" :reduce="value => value.code" :options="roomRates" v-model="vModel.room_rate_code" v-validate="'required'" name="room rate" :data-vv-scope="scope2"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.room rate')">{{ errors.first(scope2+'.room rate') || dbErrors.room_rate_code | toString  }}</span>
                                                </vs-row>
                                            </div>
                                            <div class="w-full md:w-1/2">
                                                <vs-row>
                                                    <span class="wrap-form-select" style="margin-right:5px;">{{$t('registrationForm.bookingInformation.form.discount')}}</span>
                                                    <vs-radio class="w-full wrap-form-select md:w-4/12" @input="setDiscountRate" v-model="vModel.discount_percent" vs-name="percent_amount" vs-value="0" >{{$t('registrationForm.bookingInformation.form.amount')}}</vs-radio>
                                                    <vs-radio class="w-full wrap-form-select md:w-3/12" @input="setDiscountRate" v-model="vModel.discount_percent" vs-name="percent_amount" vs-value="-1" >{{$t('registrationForm.bookingInformation.form.percent')}}</vs-radio>
                                                </vs-row>
                                                <vs-row>
                                                    <input-number class="w-full" @input="setDiscountRate" v-model="vModel.discount" />
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                        <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <input-number class="w-full md:w-1/2" @input="setDiscountRate" :label="$t('registrationForm.bookingInformation.form.weekday')" v-model="vModel.weekday_rate" />
                                            <input-number disabled class="w-full md:w-1/2"  label="." v-model="vModel.weekday_rate_discount" />
                                        </vs-row>
                                        <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <input-number class="w-full md:w-1/2" @input="setDiscountRate" :label="$t('registrationForm.bookingInformation.form.weekend')" v-model="vModel.weekend_rate" />
                                            <input-number disabled class="w-full md:w-1/2" label="." v-model="vModel.weekend_rate_discount" />
                                        </vs-row>
                                        <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                            <div class="wrap-form-select w-full md:w-6/12 required">
                                                <vs-row><label>{{$t('registrationForm.bookingInformation.form.paymentType')}}</label></vs-row>
                                                <vs-row>
                                                    <v-select class="w-full" id="form-select" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.payment_type" v-model="vModel.payment_type_code" v-validate="'required'" name="payment type" :data-vv-scope="scope2"></v-select>
                                                    <span class="error-text text-danger" v-show="errors.has(scope2+'.payment type')">{{ errors.first(scope2+'.payment type') || dbErrors.payment_type_code | toString  }}</span>
                                                </vs-row>
                                            </div>
                                        </vs-row>
                                        <vs-row vs-type="flex" class="wrap-form-select mt-3" vs-justify="space-between">
                                            <vs-textarea class="w-full" :label="$t('registrationForm.bookingInformation.form.billInstruction')" v-model="vModel.bill_instruction" />
                                        </vs-row>
                                    </vs-col>
                                    </vs-row>
                                <!-- </tab-content> -->
                                    <!-- </vs-collapse-item> -->
                                </vx-card>

                                <!-- <vx-card class="mb-3" icon="date_range" :title="$t('registrationForm.bookingInformation.form.personalInformation')" collapseAction> -->

                                <!-- </vx-card> -->
                                <vx-card id="main-container" class="vs-con-loading__container">
                                    <vs-button class="mb-3" icon="add" @click="handleInsertReservation" :color="global.buttonColor.insert">{{ $t('button.insert') }}</vs-button>
                                    <ag-grid-vue
                                    ref="mainContainer"
                                        :style="global.styleAgGridFrame0"
                                        :class="global.themeAgGrid"
                                        :suppressDragLeaveHidesColumns="true"
                                        :enableRangeSelection="true"
                                        :gridOptions="gridOptions"
                                        @grid-ready="onGridReady"
                                        :context="context"
                                        :columnDefs="columnDefs"
                                        :frameworkComponents="frameworkComponents"
                                        :enableCellChangeFlash="true"
                                        :rowSelection="rowSelection"
                                        :rowData="rowData"
                                        :defaultColDef="global.defColDef"
                                        :getContextMenuItems="getContextMenu"
                                        @cellContextMenu="handleRowRightClicked"
                                    ></ag-grid-vue>
                                </vx-card>
                        </vs-collapse>
                    </VuePerfectScrollbar>
                </div>
            </div>
        </div>
        <footer class="footer" >
            <vs-row>
                <vs-col vs-justify="flex-end" class="w-full flex mt-2">
                    <vs-button :disabled="btnSaveDisabled" :color="global.buttonColor.save" id="button-save-main" class="vs-con-loading__container mr-2" icon="save" style="float:right" @click="handleSaveData()">{{$t('button.save')}}</vs-button>
                    <vs-button :color="global.buttonColor.close" icon="close" style="float:right" @click="$emit('showForm',false);">{{$t('button.close')}}</vs-button>
                </vs-col>
            </vs-row>
        </footer>

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
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';

import DatePicker from 'vue2-datepicker';
import '@sass/vuexy/components/datepicker.scss';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { generateIconContextMenuAgGrid } from '@/utils/general.js';
// <!------------------additional element---------------------->
// inputnumber//
import InputNumber from '@/views/pages/components/Number';
import Credential from '@/views/pages/components/Credential';
// ------for format----- //
import { formatNumber, formatDateDatabase, formatDateTimeDatabase } from '@/utils/format.js';
// <!------------------end additional element---------------------->
import ReservationResource from '@/api/reservation/reservation';
import ActionGrid from './action_grid_resv';

const reservationResource = new ReservationResource();

export default {
    name: 'ReservationGroupForm',

    props: {
        titleForm: String,
        vModel: Object,
        showModal: Boolean,
    },

    components: {
        AgGridVue,
        VuePerfectScrollbar,
        InputNumber,
        DatePicker,
        Credential,
    },

    data() {
        return {
            // Ag-Grid
            columnDefs: null,
            rowData: [],
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            statusBar: null,
            rowSelection: null,
            // Parameter From Child
            idData: '',
            paramsDate: {},
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modePopUp: 0,
            modeDataValueTracking: 0,
            // data error handling from laravel validation//
            dbErrors: {},
            // ------------------need setting manual-----------------//
            account: null,
            nights: 1,
            tempNights: 1,
            discount: 0,
            availableRoom: 0,
            roomNumber: [],
            roomRate: [],
            city: [],
            state: [],
            readyRoom: false,
            // ------------------additional-------------------------//
            // Data Lookup//
            dataLookup: {},
            roomRates: [],
            rateB4: {},
            bedTypes: [],
            // Data table//
            // validation scope//
            scope1: 'personalInformation',
            scope2: 'stayInformation',
            // save disable button
            showTimeRangePanel: false,
            resetOnChange: false,
            resetOnOptionsChangeCity: false,
            resetOnOptionsChangeState: false,
            // title popup//
            title: '',
            resvStatus: '',
            btnSaveDisabled: false,
            // Credential
            activeCredentialPrompt: false,
            isCredential: false,
            isReason: false,
            credentialTitle: '',
            credential: {
                user: '',
                pass: '',
            },
            specialAccessType: 1000,
            // ------------------end need setting manual-----------------//

        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightReservation,
        };
        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            {headerName: this.$t('common.table.action'), field: 'index', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 80 },
            { headerName: this.$t('reservation.table.arrivalDate'), field: 'arrival', width: 150 },
            { headerName: this.$t('reservation.table.departureDate'), field: 'departure', width: 150 },
            { headerName: this.$t('reservation.table.adult'), field: 'adult', width: 80, cellStyle: { textAlign: 'right' } },
            { headerName: this.$t('reservation.table.child'), field: 'child', width: 80, cellStyle: { textAlign: 'right' } },
            { headerName: this.$t('reservation.table.roomType'), field: 'room_type_code', width: 110 },
            { headerName: this.$t('reservation.table.bedType'), field: 'bed_type_code', width: 110 },
            { headerName: this.$t('reservation.table.rooms'), field: 'rooms', width: 80, cellStyle: { textAlign: 'right' } },
            { headerName: this.$t('reservation.table.roomRate'), field: 'room_rate_code', width: 180 },
            { headerName: this.$t('reservation.table.weekdayRate'), field: 'weekday_rate', width: 130, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('reservation.table.weekendRate'), field: 'weekend_rate', width: 130, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('reservation.table.discount'), field: 'Discount', width: 110 },
            { headerName: this.$t('reservation.table.percent'), field: 'DiscountPercent', width: 110 },
            { headerName: this.$t('reservation.table.commission'), field: 'CommisssionValue', cellStyle: { textAlign: 'right' }, width: 110, valueFormatter: formatNumber },
            { headerName: this.$t('reservation.table.percent'), field: 'CommissionPercent', width: 110 },
            { headerName: this.$t('reservation.table.billInstruction'), field: 'BillInstruction', width: 250 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
        };
        this.rowGroupPanelShow = 'always';
        this.statusBar = {
            statusPanels: [
                { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
                { statusPanel: 'agTotalRowCountComponent', align: 'center' },
                { statusPanel: 'agFilteredRowCountComponent' },
                { statusPanel: 'agSelectedRowCountComponent' },
                { statusPanel: 'agAggregationComponent' },
            ],
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
    },

    methods: {
        onGridReady() {
        },

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.delete'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleDeleteData(this.paramsData),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            const vm = this;
            vm.gridApi.forEachNode((node) => {
                if (node.data.index == vm.paramsData.index) {
                    node.setSelected(true, true);
                }
            });
        },
        // ------------------need setting manual for crud-----------------//
        // ------------------ RESERVATION CRUD------------------//
        handleInsertReservation2() {
            if (this.availableRoom >= this.vModel.rooms) {
                if (this.rowData == null) {
                    this.rowData = [];
                } else {
                    this.rowData = this.getAllRows();
                }
                if (this.rowData.length >= 0) {
                    this.vModel.index = this.rowData.length;
                }
                this.getAvailableRoom();
                this.rowData.push(this.cloneObject(this.vModel));
            } else {
                $dialog.noRoomAvailable();
            }
        },

        handleInsertReservation() {
            this.$validator.validateAll(this.scope2).then((result) => {
                if (result) {
                    if ((this.vModel.weekday_rate < this.rateB4.weekday_rate) || (this.vModel.weekend_rate < this.rateB4.weekend_rate) || (this.vModel.discount > this.rateB4.discount)) {
                        this.showCredential('', true, false, this.global.accessSpecialOrder.overrideRateDiscount, this.$t('specialAccessList.overrideRateDiscount'));
                    } else {
                        this.handleInsertReservation2();
                    }
                } else {
                    $alert.inputRequiredAlert();
                }
            });

        },

        cloneObject(object) {
            const clone = {};
            for (const key in object) {
                if (object.hasOwnProperty(key)) // ensure not adding inherited props
                { clone[key] = object[key]; }
            }
            return clone;
        },

        async getAvailableRoom(type) {
            const params = {
                room_type_code: this.vModel.room_type_code,
                bed_type_code: this.vModel.bed_type_code,
                ready: this.readyRoom,
                arrival: this.vModel.arrival,
                departure: this.vModel.departure,
            };
            try {
                const { data } = await reservationResource.availableRoom(params);
                this.availableRoom = data - this.getTotalRoomReserved(this.vModel.room_type_code, this.vModel.bed_type_code);
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        handleDeleteData() {
            const selectedData = this.gridApi.getSelectedRows();
            this.gridApi.updateRowData({ remove: selectedData });
            this.getAvailableRoom();
        },

        getAllRows() {
            const rowData = [];
            this.gridApi.forEachNode((node) => rowData.push(node.data));
            return rowData;
        },

        getTotalRoomReserved(roomType, bedType) {
            const rowData = this.getAllRows();
            let count = 0;
            if (roomType && !bedType) {
                rowData.forEach((element) => {
                    if (roomType == element.room_type_code) {
                        count += element.rooms;
                    }
                });
            } else if (roomType && bedType) {
                rowData.forEach((element) => {
                    if (roomType == element.room_type_code && bedType == element.bed_type_code) {
                        count += element.rooms;
                    }
                });
            }
            return count;
        },

        handleSaveData() {
            this.$validator.validateAll(this.scope1).then((result) => {
                if (result) {
                    this.btnSaveDisabled = true;
                    this.insertReservationGroup();
                } else {
                    this.btnSaveDisabled = false;
                    $alert.inputRequiredAlert();
                }
            });
        },

        async insertReservationGroup() {
            const rowData = this.getAllRows();
            if (rowData.length > 0) {
                this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                try {
                    const { data } = await reservationResource.insertReservationGroup(rowData);
                    const countSuccess = await data.countSuccess;
                    const countFailed = await data.countFailed;
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    this.$emit('showForm', false);
                    $dialog.information(`Total room reserved: ${countFailed + countSuccess}  Successful: ${countSuccess}  Failed:  ${countFailed}`);
                } catch (error) {
                    this.btnSaveDisabled = false;
                    $alert.errorSaveDataAlert();
                }
            } else {
                this.btnSaveDisabled = false;
                $dialog.informationNoDetail();
            }
        },

        resetData() {
            this.rowData = null;
            this.btnSaveDisabled = false;
            this.resetOnOptionsChangeCity = false;
            this.resetOnOptionsChangeState = false;
            this.$validator.reset();
        },

        // ------------------POPULATE SELECT OPTIONS----------------------//

        async getDataLookUp() {
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
                room_type: true
            };
            try {
                const { data } = await reservationResource.dataLookup(params);
                this.dataLookup = data;
                this.city = data.city;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async getRoomNumber(type) {
            const params = {
                room_type_code: this.vModel.room_type_code,
                bed_type_code: this.vModel.bed_type_code,
                ready: this.readyRoom,
                arrival: this.vModel.arrival,
                departure: this.vModel.departure,
            };
            try {
                const { data } = await reservationResource.roomNumber(params);
                this.roomNumber = data.room;
                this.availableRoom = data.available_room - this.getTotalRoomReserved(this.vModel.room_type_code, this.vModel.bed_type_code);
                if (type !== 'bed_type') {
                    this.bedTypes = data.bed_type;
                    this.getRoomRate();
                }
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getRoomRate() {
            if (this.vModel.room_type_code) {
                const params = {
                    room_type: this.vModel.room_type_code,
                    arrival: this.vModel.arrival,
                    departure: this.vModel.departure,
                    business_source: this.vModel.business_source_code,
                };
                try {
                    const { data } = await reservationResource.roomRate(params);
                    this.roomRates = data;
                } catch (error) {
                    $alert.errorFetchDataAlert();
                }
            }
        },
        async getDailyRate() {
            const params = {
                adult: this.vModel.adult,
                room_rate: this.vModel.room_rate_code,
            };
            try {
                const { data } = await reservationResource.dailyRate(params);
                this.rateB4 = {
                    weekday_rate: parseFloat(data.weekday_rate),
                    weekend_rate: parseFloat(data.weekend_rate),
                    discount: 0,
                };
                this.vModel.weekday_rate = parseFloat(data.weekday_rate);
                this.vModel.weekend_rate = parseFloat(data.weekend_rate);
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
                    state: true
                };
                try {
                     const { data } = await reservationResource.dataLookup(params);
                    if (state == true) {
                        this.state = data.state;
                    } else {
                        this.city = data.city;
                    }
                } catch (error) {
                    $alert.errorFetchDataAlert();
                }
            }
        },
        // ------------------END POPULATE SELECT OPTIONS------------------//

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
            this.vModel.weekday_rate_discount = this.vModel.weekday_rate - discount1;
            this.vModel.weekend_rate_discount = this.vModel.weekend_rate - discount2;
        },

        getTotalDays() {
            const date1 = new Date(formatDateDatabase(this.vModel.arrival)).getTime();
            const date2 = new Date(formatDateDatabase(this.vModel.departure)).getTime();
            const auditDate = new Date(this.auditDate).getTime();
            if (date1 >= date2) {
                this.vModel.departure = this.departureResv2;
            }
            if (date1 < auditDate && this.modeDataValue === this.global.modeData.insert) {
                this.vModel.arrival = this.getDateTimeArrival();
            }
            const date3 = new Date(formatDateDatabase(this.vModel.arrival));
            const date4 = new Date(formatDateDatabase(this.vModel.departure));

            // To calculate the time difference of two dates
            const diffInTime = date4.getTime() - date3.getTime();

            // To calculate the no. of days between two dates
            const diffInDays = diffInTime / (1000 * 3600 * 24);
            // restrict negatif departure

            this.nights = diffInDays;
        },

        addZeroHour(i) {
            let a = i;
            if (a < 10) {
                a = `0${a}`;
            }
            return a;
        },

        getDateTimeArrival() {
            let time = new Date();
            let h = this.addZeroHour(time.getHours());
            let m = this.addZeroHour(time.getMinutes());
            let s = this.addZeroHour(time.getSeconds());
            let times = `${h}:${m}:${s}`;
            let arrResv = formatDateTimeDatabase(`${this.auditDate} ${times}`);
            return arrResv;
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

        resetDate() {
            this.vModel.arrival = this.getDateTimeArrival()
            this.vModel.departure = this.departureResv;
            this.nights = 1;
        },

        // credential
        showCredential(val, isCredential, isReason, specialAccessType, title) {
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
                setTimeout(() => { this.handleInsertReservation2(); }, 100);
            }
        },

        resetCredential() {
            this.credential = {
                user: '',
                pass: '',
                reason: '',
            };
        },

        closedCredential() {
            this.btnMainSaveDisabled = false;
            this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
        },
        // ------------------end need setting manual for crud-----------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
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
        userId() { return this.global.userInfo.code; },
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

    },
};

</script>
