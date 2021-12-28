<template>
    <div class="configuration reservation-2">
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-button class="mb-3 mr-3" color="success" @click="saveData()">Save</vs-button>
            <vs-button class="mb-3" color="danger" @click="setDefaultValue()">Restore Default</vs-button>
        </vs-row>
        <vx-card class="mb-3" title="Mandatory Field & Other" collapseAction>
            <vs-row>
                <vs-divider>Mandatory Field</vs-divider>
                <vs-col vs-lg="4" vs-xs="12">
                    <vs-checkbox class="mb-1" v-model="vModel.is_room_number_required">{{$t('configurations.reservation2.roomNumberRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_business_source_required">{{$t('configurations.reservation2.businessSourceRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_market_required">{{$t('configurations.reservation2.marketRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_title_required">{{$t('configurations.reservation2.titleRequired')}}</vs-checkbox>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                    <vs-checkbox class="mb-1" v-model="vModel.is_state_required">{{$t('configurations.reservation2.stateRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_city_required">{{$t('configurations.reservation2.cityRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_nationality_required">{{$t('configurations.reservation2.nationalityRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_phone1_required">{{$t('configurations.reservation2.phone1Required')}}</vs-checkbox>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                    <vs-checkbox class="mb-1" v-model="vModel.is_email_required">{{$t('configurations.reservation2.emailRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_company_required">{{$t('configurations.reservation2.companyRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_hk_note_required">{{$t('configurations.reservation2.hkNoteRequired')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.is_ta_voucher_required">{{$t('configurations.reservation2.taVoucherRequired')}}</vs-checkbox>
                </vs-col>
            </vs-row>
            <vs-row>
                <vs-divider>Other</vs-divider>
                <vs-col vs-lg="4" vs-xs="12">
                    <vs-checkbox class="mb-1" v-model="vModel.filter_rate_by_market">{{$t('configurations.reservation2.filterRatebyMarket')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.filter_rate_by_company">{{$t('configurations.reservation2.filterRatebyCompany')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.always_show_publish_rate">{{$t('configurations.reservation2.alwaysShowPublishRate')}}</vs-checkbox>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                    <vs-row vs-type="flex" vs-align="center">
                        <vs-row><label>{{$t('configurations.reservation2.defaultMarket')}}</label></vs-row>
                        <v-select class="w-full wrap-form-select" label="name" :reduce="value => value.code" :options="vLookup.market" v-model="vModel.default_market"></v-select>
                    </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                        <vs-row><label>{{$t('configurations.reservation2.defaultIndividualMarket')}}</label></vs-row>
                        <v-select class="w-full wrap-form-select" label="name" :clearable="false" :reduce="value => value.code" :options="vLookup.market" v-model="vModel.default_individual_market" v-validate="'required'" name="default individual market"></v-select>
                        <span class="error-text text-danger" v-show="errors.has('default individual market')">{{ errors.first('default individual market') }}</span>
                    </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card class="mb-3" title="Reservation" collapseAction>
            <vs-row>
                <vs-col vs-lg="4" vs-xs="12">
                    <vs-checkbox class="mb-1" v-model="vModel.post_first_night_charge">{{$t('configurations.reservation2.postFirstNightCharge')}}</vs-checkbox>
                    <vs-checkbox class="mb-1" v-model="vModel.post_discount">{{$t('configurations.reservation2.postDiscount')}}</vs-checkbox>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                    <vs-row class="mb-1" vs-type="flex" vs-align="center">
                        <vs-col vs-lg="7"><label><span class="required"> {{$t('configurations.reservation2.keylockLimit')}}</span></label></vs-col>
                        <vs-col vs-lg="4">
                            <date-picker
                                :clearable="false"
                                type="time"
                                :open.sync="openKeylock"
                                :lang="$t('lang')"
                                value-type="HH:mm"
                                format="HH:mm"
                                label="name"
                                class="w-full"
                                @change="handleChangeTime"
                                v-model="vModel.keylock_limit">
                                <template v-slot:footer>
                                </template>
                            </date-picker>
                        </vs-col>
                    </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                        <vs-col vs-lg="7"><label><span class="required"> {{$t('configurations.reservation2.checkOutTime')}}</span></label></vs-col>
                        <vs-col vs-lg="4">
                            <date-picker
                                :clearable="false"
                                type="time"
                                :open.sync="openCheckOut"
                                :lang="$t('lang')"
                                value-type="HH:mm"
                                format="HH:mm"
                                label="name"
                                class="w-full"
                                @change="handleChangeTime"
                                v-model="vModel.check_out_time">
                                <template v-slot:footer>
                                </template>
                            </date-picker>
                        </vs-col>
                    </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card class="mb-3" title="Default Value" collapseAction>
            <vs-row>
               <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.roomType')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select" label="name" :reduce="value => value.code" :options="vLookup.room_type" v-model="vModel.default_room_type"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.roomRate')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select" label="name" :reduce="value => value.code" :options="vLookup.room_rate" v-model="vModel.default_room_rate"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.complimentRate')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select" label="name" :reduce="value => value.code" :options="vLookup.room_rate" v-model="vModel.default_compliment_rate"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.houseUseRate')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select" label="name" :reduce="value => value.code" :options="vLookup.room_rate" v-model="vModel.default_house_rate"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.subDepartment')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select" label="name" :reduce="value => value.code" :options="vLookup.sub_department" v-model="vModel.default_sub_department"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.paymentType')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select" label="name" :reduce="value => value.code" :options="vLookup.payment_type" v-model="vModel.default_payment_type"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card class="mb-3" title="Amount Preset" collapseAction>
            <vs-row>
               <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.preset')+'1'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <input-number class="w-full" v-model="vModel.ap_preset1" v-validate="'required|min_value:1'" name="preset1"></input-number>
                            <span class="error-text text-danger" v-show="errors.has('preset1')">{{ errors.first('preset1') }}</span>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.preset')+'2'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <input-number class="w-full" v-model="vModel.ap_preset2" v-validate="'required|min_value:1'" name="preset2"></input-number>
                            <span class="error-text text-danger" v-show="errors.has('preset2')">{{ errors.first('preset2') }}</span>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.preset')+'3'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <input-number class="w-full" v-model="vModel.ap_preset3" v-validate="'required|min_value:1'" name="preset3"></input-number>
                            <span class="error-text text-danger" v-show="errors.has('preset3')">{{ errors.first('preset3') }}</span>
                       </vs-col>
                   </vs-row>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.preset')+'4'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <input-number class="w-full" v-model="vModel.ap_preset4" v-validate="'required|min_value:1'" name="preset4"></input-number>
                            <span class="error-text text-danger" v-show="errors.has('preset4')">{{ errors.first('preset4') }}</span>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.preset')+'5'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <input-number class="w-full" v-model="vModel.ap_preset5" v-validate="'required|min_value:1'" name="preset5"></input-number>
                            <span class="error-text text-danger" v-show="errors.has('preset5')">{{ errors.first('preset5') }}</span>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.preset')+'6'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <input-number class="w-full" v-model="vModel.ap_preset6" v-validate="'required|min_value:1'" name="preset6"></input-number>
                            <span class="error-text text-danger" v-show="errors.has('preset6')">{{ errors.first('preset6') }}</span>
                       </vs-col>
                   </vs-row>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.preset')+'7'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <input-number class="w-full" v-model="vModel.ap_preset7" v-validate="'required|min_value:1'" name="preset7"></input-number>
                            <span class="error-text text-danger" v-show="errors.has('preset7')">{{ errors.first('preset7') }}</span>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.preset')+'8'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <input-number class="w-full" v-model="vModel.ap_preset8" v-validate="'required|min_value:1'" name="preset8"></input-number>
                            <span class="error-text text-danger" v-show="errors.has('preset8')">{{ errors.first('preset8') }}</span>
                       </vs-col>
                   </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card class="mb-3" title="Other" collapseAction>
            <vs-row>
               <vs-col vs-lg="6" vs-xs="12">
                    <vs-checkbox class="mb-1" v-model="vModel.auto_generate_company_code">{{$t('configurations.reservation2.autoGenerateCompanyCode')}}</vs-checkbox>
                    <vs-row vs-type="flex" vs-justify="flex-start" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.reservation2.companyCodeDigit')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="4" vs-xs="12">
                            <vs-input-number min="1" v-model="vModel.company_code_digit"/>
                       </vs-col>
                   </vs-row>
                </vs-col>
               <vs-col vs-lg="6" vs-xs="12">
                    <vs-checkbox class="mb-1" v-model="vModel.lock_folio_on_check_in">{{$t('configurations.reservation2.lockFolioOnCheckIn')}}</vs-checkbox>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
import '@sass/vuexy/pages/configurations/general.scss';
import DatePicker from 'vue2-datepicker';
import InputNumber from '@/views/pages/components/Number';
import $dialog from '@/utils/dialog.js';
import $alert from '@/utils/alert.js';
import ConfigurationResource from '@/api/configurations';
const configurationResource = new ConfigurationResource;
export default {
    components:{
        DatePicker,
        InputNumber
    },
    data(){
        return {
            vLookup:[],
            vModel:{},
            vTemp:{},
            market:[],

            openKeylock: false,
            openCheckOut: false
        }
    },
    methods:{
        handleChangeTime(value, type) {
            if (type === 'minute') {
                this.openKeylock = false;
                this.openCheckOut = false;
            }
        },
        async getData(){
            // this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            let { data } = await configurationResource.getReservation2();
            this.vModel = data.data.value;
            this.vTemp = data.data.value;
            this.vLookup = data.lookup;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        async saveData(){
            this.vModel.user_id = this.global.userInfo.code
            this.vTemp = this.vModel;
            this.$validator.validateAll().then(async (result)=>{
                if(result){
                    try{
                        this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
                        await configurationResource.updateReservation2(this.vModel);
                        $alert.acceptAlertSucces();
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                    }catch(error){
                        $alert.errorSaveDataAlert();
                    }
                }else{
                    $alert.inputRequiredAlert();
                }
            })
        },

        async getLookup(){
            let { data } = await configurationResource.getReservation2Lookup();
            this.vLookup = data;
        },

        async setDefaultValue(){
            this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            let { data } = await configurationResource.getReservation2();
            this.vModel = data.defaultValue;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        }
    },
    created(){
        this.getData();
    },
    mounted(){
        this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
    },
    beforeRouteLeave(to, from, next){
        if(JSON.stringify(this.vModel) === JSON.stringify(this.vTemp)){
            next()
        }else{
             this.$vs.dialog({
                    color: 'danger',
                    type: 'confirm',
                    title:  this.$t('message.informationTitle'),
                    text: 'Are you sure you want to exit without saving?',
                    acceptText: 'Yes',
                    cancelText: 'No',
                    accept:()=>{
                        next();
                    }
                });
            next(false);
        }

    }
}
</script>
