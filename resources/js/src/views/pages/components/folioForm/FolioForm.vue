<template>
    <div class="guest-in-house">
        <dialog-prompt button1
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData.number : (modeDataValue == global.modeData.insert ? 'Insert '+titleForm: (modeDataValue == global.modeData.edit ? 'Update '+titleForm+': '+idData.folio_number : (modeDataValue == global.modeData.duplicate ? 'Duplicate '+titleForm+': '+idData.folio_number : titleForm))))"
            :width="80"
            :active="modalMain"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="handleSaveForm()"
            @close="val=>modalMain = val">
            <template #body>
                <div v-if="modeDataValue == global.modeData.tracking">
                    <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking"></tracking>
                </div>
        <!-- <vs-popup button-close-hidden id="main-popup" class="width-80 " :active.sync="modalPreventClose" :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData.code:(modeDataValue == global.modeData.insert ? 'Insert '+titleForm: (modeDataValue == global.modeData.edit ? 'Update '+titleForm+': '+idData.folio_number : titleForm)))"> -->
                <div v-else ref="parentSidebar">
                    <div class="form-container">
                        <div ref="popupContainer" class="popup-container" vs-position="left">
                            <!---------------------------------TAB CONTENT 1 ------------------------------------------->
                                <vx-card icon="date_range" title="Booking Information" collapseAction>
                                    <vs-row class="md:w-1/2" vs-type="flex" vs-justify="space-between">
                                        <vs-col vs-lg="6" vs-xs="6"><span style="font-weight:bold">{{$t('folio.form.dateInformation')}}</span></vs-col>
                                        <vs-col vs-lg="4" vs-xs="6"><vs-input-number @input="handleChangeNight()" class="number-input mr-3" min="1" :label="$t('folio.form.days')+':'" v-model="nights" /></vs-col>
                                    </vs-row>
                                    <vs-row>
                                        <vs-col class="content-left lg:w-1/2">
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row><label><span class="required"> {{$t('folio.form.arrivalDate')}}</span></label></vs-row>
                                                    <vs-row>
                                                        <date-picker
                                                        :clearable="false"
                                                        disabled
                                                        :disabled-date="dateTodayDisable"
                                                        type="datetime"
                                                        confirm
                                                        confirm-text="ok"
                                                        :show-time-panel="showTimeRangePanel"
                                                        @close="showTimeRangePanel = false"
                                                        @input="getTotalDays"
                                                        :lang="$t('lang')"
                                                        value-type="YYYY-MM-DD HH:mm:ss"
                                                        format="DD/MM/YYYY HH:mm:ss"
                                                        label="name"
                                                        class="w-full"
                                                        v-model="vModel.arrival" v-validate="'required'" name="arrival" :data-vv-scope="scope1">
                                                            <template v-slot:footer>
                                                                <button class="mx-btn mx-btn-text" @click="resetDate">
                                                                    reset
                                                                </button>
                                                                <button class="mx-btn mx-btn-text" @click="toggleTimeRangePanel">
                                                                    {{ showTimeRangePanel ? 'select date' : 'select time' }}
                                                                </button>
                                                            </template>
                                                        </date-picker>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.arrival')">{{ errors.first(scope1+'.arrival')}}</span>
                                                    </vs-row>
                                                </div>
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row><label><span class="required"> {{$t('folio.form.departureDate')}}</span></label></vs-row>
                                                    <vs-row>
                                                        <date-picker
                                                        :clearable="false"
                                                        :disabled-date="dateArrivalDisable"
                                                        type="datetime"
                                                        confirm
                                                        confirm-text="ok"
                                                        :show-time-panel="showTimeRangePanel"
                                                        @close="showTimeRangePanel = false"
                                                        @input="getTotalDays"
                                                        :lang="$t('lang')"
                                                        value-type="YYYY-MM-DD HH:mm:ss"
                                                        format="DD/MM/YYYY HH:mm:ss"
                                                        label="name"
                                                        class="w-full"
                                                        v-model="vModel.departure" v-validate="'required'" name="departure" :data-vv-scope="scope1">
                                                            <template v-slot:footer>
                                                                <button class="mx-btn mx-btn-text" @click="resetDate">
                                                                    {{ $t('common.datepicker.reset') }}
                                                                </button>
                                                                <button class="mx-btn mx-btn-text" @click="toggleTimeRangePanel">
                                                                    {{ showTimeRangePanel ? $t('common.datepicker.selectDate') :  $t('common.datepicker.selectTime')  }}
                                                                </button>
                                                            </template>
                                                        </date-picker>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.arrival')">{{ errors.first(scope1+'.arrival')}}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-col vs-lg="6" vs-xs="6">
                                                    <span style="font-weight:bold">{{$t('folio.form.generalInformation')}}</span>
                                                </vs-col>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div :class="{'required' : isMarketRequired}" class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row><label>{{$t('folio.form.market')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full height200" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.market" v-model="vModel.market_code" v-validate="isMarketRequired ? 'required' : ''" name="market" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.market')">{{ errors.first(scope1+'.market') || dbErrors.market | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row>{{$t('folio.form.bookingSource')}}</vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full height200" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.booking_source" v-model="vModel.booking_source_code" ></v-select>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row>{{$t('folio.form.group')}}</vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full height200" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.group" v-model="vModel.group_code" ></v-select>
                                                    </vs-row>
                                                </div>
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row>{{$t('folio.form.marketing')}}</vs-row>
                                                    <vs-row>
                                                        <v-select id="form-select" class="w-full height200" label="name" :reduce="value => value.code" :options="dataLookup.marketing" v-model="vModel.marketing_code"></v-select>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                        </vs-col>
                                <!------------------ COLOM TWO ------------------------------>
                                        <vs-col class="content-right lg:w-1/2">
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('folio.form.doc')+' #'" class="w-full" v-model="vModel.document_number" :maxLength="50"/>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row class="wrap-form-select w-full">
                                                        <vs-checkbox class="w-full" style="padding:0px; margin: inherit;" v-model="vModel.show_notes">{{ $t('folio.form.showNotesAtCheckIn') }}</vs-checkbox>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row vs-type="flex" class="wrap-form-select mt-3" vs-justify="space-between">
                                                <vs-textarea style="margin-bottom:0px" class="w-full" :label="$t('folio.form.notes')" :placeholder="$t('placeholder.notes')" v-model="vModel.notes" />
                                            </vs-row>
                                        </vs-col>
                                    </vs-row>
                                </vx-card>
                            <!-------------------------------- TAB CONTENT 2 ------------------------------------------->
                                <vx-card class="mt-3" icon="date_range" :title="$t('folio.form.personalInformation')" collapseAction>
                                    <vs-row>
                                        <vs-col vs-lg="6" vs-xs="12" class="content-left">
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div :class="{'required' : isTitleRequired}" class="wrap-form-select sm:w-6/12 md:w-4/12">
                                                    <vs-row><label>{{$t('folio.form.title')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full height200" id="form-select" label="code" :reduce="value => value.code" :options="dataLookup.title" v-model="vModel.title_code" v-validate="isTitleRequired ? 'required' : ''" name="title" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.title')">{{ errors.first(scope1+'.title') || dbErrors.title | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <div class="md:w-8/12 w-full">
                                                    <vs-row class="wrap-form-select required"><label>{{$t('folio.form.fullname')}}</label></vs-row>
                                                    <vs-row>
                                                        <vs-input class="w-full" v-model="vModel.full_name" v-validate="'required'" name="fullname" :data-vv-scope="scope1"/>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.fullname')">{{ errors.first(scope1+'.fullname') || dbErrors.full_name | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row>{{$t('folio.form.member')}}</vs-row>
                                                    <vs-row>
                                                        <v-select id="form-select" class="height200 w-full" label="name" :reduce="value => value.code" :options="dataLookup.member" v-model="vModel.member_code"></v-select>
                                                    </vs-row>
                                                </div>
                                                <vs-input :label="$t('folio.form.street')" class="wrap-form-select w-full md:w-1/2" v-model="vModel.street" :maxLength="100"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row>{{$t('folio.form.country')}}</vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full height150" @input="getState(true); resetOnOptionsChangeState = true" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.country" v-model="vModel.country_code"></v-select>
                                                    </vs-row>
                                                </div>
                                                <div :class="{'required' : isStateRequired}" class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row><label>{{$t('folio.form.state')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select id="form-select" @input="getState(false); resetOnOptionsChangeCity = true" :resetOnOptionsChange="resetOnOptionsChangeState" class="height150 w-full" label="name" :reduce="value => value.code" :options="state" v-model="vModel.state_code" v-validate="isStateRequired ? 'required' : ''" name="state" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.state')">{{ errors.first(scope1+'.state') || dbErrors.state | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div :class="{'required' : isCityRequired}" class="wrap-form-select w-full md:w-1/2">
                                                <vs-row><label>{{$t('folio.form.city')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full height150" id="city" :resetOnOptionsChange="resetOnOptionsChangeCity" label="name" :reduce="value => value.code" :options="city" v-model="vModel.city_code" v-validate="isCityRequired ? 'required' : ''" name="city" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.city')">{{ errors.first(scope1+'.city') || dbErrors.city | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <vs-input :disabled="vModel.city_code !== 'OTH'" class="wrap-form-select w-full md:w-1/2" label="." v-model="vModel.city"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div :class="{'required' : isNationalityRequired}" class="wrap-form-select w-full md:w-1/2">
                                                <vs-row><label>{{$t('folio.form.nationality')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full height100" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.nationality" v-model="vModel.nationality_code" v-validate="isNationalityRequired ? 'required' : ''" name="nationality" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.nationality')">{{ errors.first(scope1+'.nationality') || dbErrors.nationality | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <vs-input class="wrap-form-select w-full md:w-1/2" :label="$t('folio.form.postCode')" v-model="vModel.postal_code" :maxLength="10"/>
                                            </vs-row>
                                        </vs-col>
                                <!-------------------------------- COLOM TWO ---------------------------------->
                                        <vs-col vs-lg="6" vs-xs="12" class="content-right">
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('folio.form.phone')+' 1'" :class="{'required' : isPhone1Required}" class="w-full md:w-1/2" placeholder="+62xxxxxxxxx" v-model="vModel.phone1" :maxLength="50" :description-text="errors.first(scope1+'.phone1') || dbErrors.phone1 | toString" v-validate="isPhone1Required ? 'required' : ''" name="phone1" :data-vv-scope="scope1"/>
                                                <vs-input :label="$t('folio.form.phone')+' 2'" class="w-full md:w-1/2" placeholder="+62xxxxxxxxx" v-model="vModel.phone2" :maxLength="50"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('folio.form.fax')" class="w-full md:w-1/2" v-model="vModel.fax" :maxLength="20"/>
                                                <vs-input :label="$t('folio.form.email')" :class="{'required' : isEmailRequired}" placeholder="anonym@somewhere.com" class="w-full md:w-1/2" v-model="vModel.email" :maxLength="50" :description-text="errors.first(scope1+'.email') || dbErrors.email | toString" v-validate="isEmailRequired ? 'required' : ''" name="email" :data-vv-scope="scope1"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('folio.form.website')" class="wrap-form-select w-full md:w-1/2" placeholder="www.something.com" v-model="vModel.website" :maxLength="50"/>
                                                <div :class="{'required' : isCompanyRequired}" class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row><label>{{$t('folio.form.company')}}</label></vs-row>
                                                    <vs-row>
                                                        <v-select id="form-select" class="height150 w-full" label="name" :reduce="value => value.code" :options="dataLookup.company" v-model="vModel.company_code" v-validate="isCompanyRequired ? 'required' : ''" name="company" :data-vv-scope="scope1"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has(scope1+'.company')">{{ errors.first(scope1+'.company') || dbErrors.company | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full">
                                                    <vs-row>{{$t('folio.form.guestType')}}</vs-row>
                                                    <vs-row>
                                                        <v-select id="form-select" class="height150 w-full" label="name" :reduce="value => value.code" :options="dataLookup.guest_type" v-model="vModel.guest_type_code"></v-select>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row>{{$t('folio.form.idCardType')}}</vs-row>
                                                    <vs-row>
                                                        <v-select id="form-select" class="height100 w-full" label="name" :reduce="value => value.code" :options="dataLookup.id_card" v-model="vModel.id_card_code"></v-select>
                                                    </vs-row>
                                                </div>
                                                <vs-input :label="$t('folio.form.idCardNumber')" class="wrap-form-select w-full md:w-1/2" v-model="vModel.id_card_number" :maxLength="25"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('folio.form.birthPlace')" class="wrap-form-select w-full md:w-1/2" v-model="vModel.birth_place" :maxLength="50"/>
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row>{{$t('folio.form.birthDate')}}</vs-row>
                                                    <vs-row>
                                                        <date-picker :lang="$t('lang')" value-type="YYYY-MM-DD" clearable format="DD/MM/YYYY" placeholder="DD/MM/YYYY" label="name" class="w-full" v-model="vModel.birth_date">
                                                        </date-picker>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                        </vs-col>
                                    </vs-row>
                                <!-- </tab-content> -->
                                </vx-card>
                        </div>
                    </div>
                </div>
            </template>
        </dialog-prompt>
        <!-- </vs-popup> -->
    <!----------- END POPUP MAIN ---------------->
    </div>
</template>

<script>
import $alert from '@/utils/alert.js';

import DatePicker from 'vue2-datepicker';
import '@sass/vuexy/components/datepicker.scss';
// <!------------------additional element---------------------->
import { formatDateDatabase, formatDateTimeDatabase } from '@/utils/format.js';
// API
import MasterFolioResource from '@/api/masterFolio';
import GuestInHouseResource from '@/api/guestinhouse/guestInHouse';
import DeskFolioResource from '@/api/deskFolio';
import TrackingDataResource from '@/api/trackingData';
import Tracking from '@/views/pages/components/Tracking.vue';

const masterFolioResource = new MasterFolioResource();
const deskFolioResource = new DeskFolioResource();
const guestInHouseResource = new GuestInHouseResource();
const trackingDataResource = new TrackingDataResource();
// <!------------------end additional element---------------------->
export default {
    name: 'FolioForm',
    props: {
        formType: String,
        titleForm: String,
        isDayendClosed: Boolean,
    },
    components: {
        DatePicker,
        Tracking
    },

    data() {
        return {
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            // data error handling from laravel validation//
            dbErrors: {},
            // Pop Up
            modalMain: false,
            modalPreventClose: false,
            // ------------------need setting manual-----------------//
            // for vModel Data
            vModel: {
                full_name: '',
            },
            nights: 1,
            tempNights: 1,
            discount: 0,
            folioNumber: '',
            city: [],
            state: [],
            weekday_rate_discount: 0,
            weekend_rate_discount: 0,
            sidebarOption: false,
            btnSaveDisabled: false,
            resetOnOptionsChangeState: false,
            resetOnOptionsChangeCity: false,
            // ------------------additional-------------------------//
            // Data Lookup//
            dataLookup: {},
            // validation scope//
            scope1: 'stayInformation',
            showTimeRangePanel: false,
            activeTab: 1,
            resetOnChange: false,
            // title popup//
            title: '',
            balance: 0,
            // ------------------end need setting manual-----------------//
        };
    },

    methods: {
        // ------------------need setting manual for crud-----------------//
    // MASTER FOLIO CRUD
        async editMasterFolio(id) {
            try {
                const { data } = await guestInHouseResource.get(id.folio_number);
                this.vModel = data.list;
                this.dataLookup.room_rate = data.room_rate;
                this.dataLookup.bed_type = data.bed_type;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.getTotalDays();
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async updateMasterFolio(data) {
            try {
                await masterFolioResource.update(data);
                this.modalMain = false;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                if (this.isDayendClosed) {
                    this.precheckDayendClosed();
                    return;
                }
                $alert.acceptAlertSucces();
            } catch (error) {
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        async insertMasterFolio(resource) {
            try {
                const { data } = await masterFolioResource.store(resource);
                this.modalMain = false;
                this.folioNumber = data;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.acceptAlertSucces();
            } catch (error) {
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        // DESK FOLIO CRUD
        async editDeskFolio(id) {
            try {
                const { data } = await guestInHouseResource.get(id.folio_number);
                this.vModel = data.list;
                this.dataLookup.room_rate = data.room_rate;
                this.dataLookup.bed_type = data.bed_type;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.modalMain = true;
                this.getTotalDays();
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async updateDeskFolio(data) {
            try {
                await masterFolioResource.update(data);
                this.modalMain = false;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                if (this.isDayendClosed) {
                    this.precheckDayendClosed();
                    return;
                }
                this.refreshData();
                $alert.acceptAlertSucces();
            } catch (error) {
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        async insertDeskFolio(resource) {
            try {
                const { data } = await deskFolioResource.store(resource);
                this.modalMain = false;
                this.resetData();
                this.refreshData();
                this.folioNumber = data;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.acceptAlertSucces();
            } catch (error) {
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        // FORM OPTION
        async showForm(idData, modeData) {
            this.resetData();
            this.idData = idData;
            this.modeDataValue = modeData;
            this.resetOnChange = false;
            this.$loadingIndicator(this)
            if (this.formType == this.global.formType.masterFolio) {
                if (modeData === this.global.modeData.edit || modeData === this.global.modeData.duplicate) {
                    this.folioNumber = idData.folio_number;
                    this.getDataLookUp();
                    await this.editMasterFolio(idData);
                    if(modeData == this.global.modeData.duplicate) {
                        this.vModel.folio_number = '';
                    }
                    this.getState(true);
                    this.modalMain = true;
                    this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;
                } else if (modeData === this.global.modeData.insert) {
                    this.activeTab = 1;
                    await this.getDataLookUp();
                    this.modalMain = true;
                } else if (modeData === this.global.modeData.tracking) {
                    await this.trackingData(idData);
                }
            } else if (this.formType == this.global.formType.deskFolio) {
                if (modeData === this.global.modeData.edit) {
                    this.folioNumber = idData.folio_number;
                    this.getDataLookUp();
                    await this.editDeskFolio(idData);
                    this.vModel.birth_date = this.vModel.birth_date == '0000-00-00' ? '' : this.vModel.birth_date;
                } else if (modeData === this.global.modeData.insert) {
                    this.activeTab = 1;
                    await this.getDataLookUp();
                    this.modalMain = true;
                } else if (modeData === this.global.modeData.tracking) {
                    await this.trackingData(idData);
                }
            }
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.folio_number,
                table: this.global.tableName.folio,
            };
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

        refreshData() {
            this.$emit('refreshData');
        },

        resetData() {
            this.vModel = {
                arrival: this.getDateTimeArrival(),
                departure: this.departureDate,
                adult: 1,
                child: 0,
                full_name: '',
                payment_type_code: this.cash,
                market_code: this.defaultMarket,
                audit_date: this.auditDate,
                folio_number: 0,
                balance: 0,
                user_id: this.global.userInfo.code,
            };
            this.nights = 1;
            this.resetOnOptionsChangeState = false;
            this.resetOnOptionsChangeCity = false;
            this.weekday_rate_discount = 0;
            this.weekend_rate_discount = 0;
            this.dbErrors = {};
            this.dataTracking = null;
            this.btnSaveDisabled = false;
            this.$validator.reset();
        },

        handleSaveForm() {
            const validate = this.scope1;
            this.$validator.validateAll(validate).then((result) => {
                if (result) {
                    this.btnSaveDisabled = true;
                    if (this.modeDataValue === this.global.modeData.insert || this.modeDataValue === this.global.modeData.duplicate) {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        if (this.formType == this.global.formType.masterFolio) {
                            this.insertMasterFolio(this.vModel);
                        } else if (this.formType == this.global.formType.deskFolio) {
                            this.insertDeskFolio(this.vModel);
                        }
                    } else if (this.modeDataValue === this.global.modeData.edit) {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        if (this.formType == this.global.formType.masterFolio) {
                            this.updateMasterFolio(this.vModel);
                        } else if (this.formType == this.global.formType.deskFolio) {
                            this.updateDeskFolio(this.vModel);
                        }
                    }
                } else {
                    $alert.inputRequiredAlert();
                }
            });
        },

        // ------------------POPULATE SELECT OPTIONS----------------------//

        async getDataLookUp() {
            try {
                const { data } = await guestInHouseResource.dataLookup();
                this.dataLookup = data;
                this.city = data.city;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.$vs.loading.close('.popup-body>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },
        async getState(state) {
            if (this.vModel.country_code) {
                const params = {
                    country: this.vModel.country_code,
                    state: this.vModel.state_code,
                };
                try {
                    const { data } = await guestInHouseResource.state(params);
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

        dateArrivalDisable(date) {
            const arrival = new Date(this.vModel.arrival);
            return date < arrival;
        },

        toggleTimeRangePanel() {
            this.showTimeRangePanel = !this.showTimeRangePanel;
        },
        getTotalDays() {
            const date1 = new Date(formatDateDatabase(this.vModel.arrival)).getTime();
            const date2 = new Date(formatDateDatabase(this.vModel.departure)).getTime();
            const auditDate = new Date(this.auditDate).getTime();
            if (date1 >= date2) {
                this.vModel.departure = this.departureDate2;
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
            if (this.nights > 0) {
                this.tempNights = this.nights;
            }
        },

        addZeroHour(i) {
            if (i < 10) {
                i = `0${i}`;
            }
            return i;
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

        getDateTimeArrival() {
            let time = new Date();
            let h = this.addZeroHour(time.getHours());
            let m = this.addZeroHour(time.getMinutes());
            let s = this.addZeroHour(time.getSeconds());
            let times = `${h}:${m}:${s}`;
            let arrResv = formatDateTimeDatabase(`${this.auditDate} ${times}`);
            return arrResv;
        },

        resetDate() {
            this.vModel.arrival = this.getDateTimeArrival();
            this.vModel.departure = this.departureDate;
            this.nights = 1;
        },
        //  END DATEPICKER CONFIGURATION //

        precheckDayendClosed() {
            this.$emit('precheck');
        },
        // ------------------end need setting manual for crud-----------------//
    },
    watch: {
        modalPreventClose() {
            this.modalPreventClose = this.modalMain;
        },
        modalMain() {
            this.modalPreventClose = this.modalMain;

            if (!this.modalMain) {
                this.refreshData();
            }
        },
    },
    computed: {
        departureDate() {
            const departure = new Date(formatDateTimeDatabase(`${this.auditDate} ${this.checkOutTime}`));
            departure.setDate(departure.getDate() + 1);

            return formatDateTimeDatabase(departure);
        },
        departureDate2() {
            const arrival = formatDateDatabase(this.vModel.arrival);
            const departure = new Date(formatDateTimeDatabase(`${arrival} ${this.checkOutTime}`));
            departure.setDate(departure.getDate() + 1);

            return formatDateTimeDatabase(departure);
        },
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

        auditDate() { return this.$store.state.auditLog.auditDate; },
        cash() { return this.$store.getters.cash; },
        checkOutTime() { return this.$store.getters.checkOutLimit; },
        defaultMarket() { return this.$store.getters.dvMarket; },
    },
};

</script>
