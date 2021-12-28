<template>
    <div class="configuration global-paramater">
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-button class="mb-3 mr-3" color="success" @click="saveData()">Save</vs-button>
            <vs-button class="mb-3" color="danger" @click="setDefaultValue()">Restore Default</vs-button>
        </vs-row>
        <vx-card class="mb-3" title="Global Account" collapseAction>
            <vs-row>
               <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.roomCharge')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_room_charge"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.extraBed')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_extra_bed"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.cancellationFee')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_cancellation_fee"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.noShow')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_no_show"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.breakfast')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_breakfast"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.apRefundDeposit')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_ap_refund_deposit"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.apCommission')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_ap_commission"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.ccAdmin')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_cc_admin"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.cash')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_cash"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.cityLedger')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_city_ledger"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.tax')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_tax"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.service')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_service"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.transferDepositReservation')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_transfer_deposit_reservation"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.transferDepositToFolio')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_transfer_deposit_reservation_to_folio"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.transferCharge')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_transfer_charge"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.transferPaymentDeposit')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_transfer_payment"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row v-show="false" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.voucher')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_voucher"></v-select>
                       </vs-col>
                   </vs-row>
                    <vs-row v-show="false" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.voucherCompliment')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.account" v-model="vModel.account_voucher_compliment"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card class="mb-3" title="Global Department" collapseAction>
            <vs-row>
               <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.foodBeverage')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.department" v-model="vModel.food_and_beverage"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card class="mb-3" title="Global Sub Department" collapseAction>
            <vs-row>
               <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.frontOffice')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.sub_department" v-model="vModel.front_office"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.housekeeping')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.sub_department" v-model="vModel.housekeeping"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
               <vs-col vs-lg="4" vs-xs="12">
                   <vs-row v-show="false" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.banquet')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.sub_department" v-model="vModel.banquet"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row v-show="false" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.accounting')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.sub_department" v-model="vModel.accounting"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card class="mb-3" title="Other Global Parameter" collapseAction>
            <vs-row>
               <vs-col vs-lg="4" vs-xs="12">
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.paymentType')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.payment_type" v-model="vModel.payment_type"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.travelAgentType')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.travel_agent_type" v-model="vModel.travel_agent_type"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
                <vs-col vs-lg="4" vs-xs="12"> 
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="5" vs-xs="12">
                           <vs-row><label>{{$t('configurations.globalParameter.iconsColor')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="6" vs-xs="12">
                            <v-select class="w-full wrap-form-select height200" :clearable="false" label="name" :reduce="value => value.code" :options="vLookup.icon_color" v-model="vModel.icon_color"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
import '@sass/vuexy/pages/configurations/general.scss';
import $alert from '@/utils/alert.js';
import ConfigurationResource from '@/api/configurations';
const configurationResource = new ConfigurationResource;
export default {
    data(){
        return {
            vLookup:[],
            vModel:{},
            vTemp:{},

        }
    },
    methods:{
        async getData(){
            let { data } = await configurationResource.getGlobalParameter();
            this.vModel = data.data.value;
            this.vTemp = data.data.value;
            this.vLookup = data.lookup;
            this.vLookup.icon_color = [
                {code: 'color_', name: 'Color'},
                {code: '', name: 'Grayscale'}
            ];
            this.vModel.icon_color = this.$store.getters.iconPrefix;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        async saveData(){
            this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            this.vModel.user_id = this.global.userInfo.code
            this.vTemp = this.vModel;
            await configurationResource.updateGlobalParameter(this.vModel);
            this.$store.commit('SET_ICON_PREFIX', this.vModel.icon_color); 
            $alert.acceptAlertSucces();
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        async getLookup(){
            let { data } = await configurationResource.getGlobalParameterLookup();
            this.vLookup = data;
        },

        async setDefaultValue(){
            this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            let { data } = await configurationResource.getGlobalParameter();
            this.vModel = data.defaultValue;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },
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
