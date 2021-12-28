<template>
    <div class="configuration company-information">
        <vs-row vs-type="flex" vs-justify="flex-end">
            <vs-button class="mb-3 mr-3" color="success" @click="saveData()">Save</vs-button>
        </vs-row>
        <vx-card class="mb-3" title="Company Information" collapseAction>
            <vs-row>
               <vs-col vs-lg="6" vs-xs="12">
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col class="required" vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.code')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="3" vs-xs="12">
                            <vs-input disabled class="w-full" v-model="vModel.code" v-validate="'required'" name="code"></vs-input>
                            <span class="error-text text-danger" v-show="errors.has('code')">{{ errors.first('code') }}</span>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col class="required" vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.name')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input disabled  class="w-full" v-model="vModel.name" v-validate="'required'" name="name"></vs-input>
                            <span class="error-text text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.street')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input disabled  class="w-full" v-model="vModel.street"></vs-input>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.city')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input disabled class="w-full" v-model="vModel.city"></vs-input>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.country')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <v-select @input="getLookup() ; resetOptionChange=true" class="w-full" label="name" :reduce="value => value.code" :options="vLookup.country" v-model="vModel.country_code"></v-select>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.state')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <v-select class="w-full" :resetOnOptionsChange="resetOptionChange" label="name" :reduce="value => value.code" :options="vLookup.state" v-model="vModel.state_code"></v-select>
                       </vs-col>
                   </vs-row>
                </vs-col>
                <vs-col class="mb-2" vs-lg="6" vs-xs="12">
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.postCode')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input class="w-full" v-model="vModel.postal_code"></vs-input>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.phone')+'1'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input class="w-full" v-model="vModel.phone1"></vs-input>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.phone')+'2'}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input class="w-full" v-model="vModel.phone2"></vs-input>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.fax')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input class="w-full" v-model="vModel.fax"></vs-input>
                       </vs-col>
                   </vs-row>
                   <vs-row class="mb-2" vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.email')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input class="w-full" v-model="vModel.email"></vs-input>
                       </vs-col>
                   </vs-row>
                   <vs-row vs-type="flex" vs-align="center">
                       <vs-col vs-lg="3" vs-xs="12">
                           <vs-row><label>{{$t('configurations.companyInformation.website')}}</label></vs-row>
                       </vs-col>
                       <vs-col vs-lg="8" vs-xs="12">
                            <vs-input class="w-full" v-model="vModel.website"></vs-input>
                       </vs-col>
                   </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card v-show="false" class="mb-3" title="Logo" collapseAction>
            <vs-row>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
import '@sass/vuexy/pages/configurations/general.scss';
import InputNumber from '@/views/pages/components/Number';
import $dialog from '@/utils/dialog.js';
import $alert from '@/utils/alert.js';
import ConfigurationResource from '@/api/configurations';
const configurationResource = new ConfigurationResource;
export default {
    data(){
        return {
            vLookup:[],
            vModel:{},
            vTemp:{},
            resetOptionChange: false
        }
    },
    methods:{
        async getData(){
            // this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            let { data } = await configurationResource.getCompanyInformation();
            this.vModel = data.data;
            this.vTemp = data.data;
            this.vLookup = data.lookup
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        async saveData(){
            this.vModel.user_id = this.global.userInfo.code
            this.vTemp = this.vModel;
            this.$validator.validateAll().then(async (result)=>{
                if(result){
                    try{
                        this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
                        await configurationResource.updateCompanyInformation(this.vModel);
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
            let { data } = await configurationResource.getCompanyInformationLookup({country_code:this.vModel.country_code});
            this.vLookup = data;
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
