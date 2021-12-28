<template>
    <div>
        <vs-popup button-close-hidden type="confirm" class="width-600p" :active.sync="modalPreventMain" :title="$t('cashierReport.title')">
            <div class="popup-body">
                <VuePerfectScrollbar class="scroll-area-popup-form pt-2 pl-3 pr-3" :settings="global.perfectScrollbarSettings">
                    <vx-card class="shift-information">
                        <vs-row vs-type="flex" vs-justify="space-between">
                            <div class="sm:w-6/12">
                                <vs-row vs-type="flex" vs-justify="flex-start">
                                    <div class="sm:w-4/12">
                                        <span>{{ $t('cashierReport.userId') }}</span>
                                    </div>
                                    <div class="sm:w-8/12">
                                        <span>: {{ shiftInfo.user_id }}</span>
                                    </div>
                                </vs-row>
                                <vs-row vs-type="flex" vs-justify="flex-start">
                                    <div class="sm:w-4/12">
                                        <span>{{ $t('cashierReport.shift') }}</span>
                                    </div>
                                    <div class="sm:w-8/12">
                                        <span>: {{ shiftInfo.shift }}</span>
                                    </div>
                                </vs-row>
                            </div>
                            <div class="sm:w-6/12">
                                <vs-row vs-type="flex" vs-justify="flex-start">
                                    <div class="sm:w-4/12">
                                        <span>{{ $t('cashierReport.timeIn') }}</span>
                                    </div>
                                    <div class="date sm:w-8/12">
                                        <span>: {{ shiftInfo.start_date | datetime}}</span>
                                    </div>
                                </vs-row>
                                <vs-row vs-type="flex" vs-justify="flex-start">
                                    <div class="sm:w-4/12">
                                        <span>{{ $t('cashierReport.timeOut') }}</span>
                                    </div>
                                    <div class="date sm:w-8/12">
                                        <span>: {{ dateNow | datetime}}</span>
                                    </div>
                                </vs-row>
                            </div>
                        </vs-row>
                    </vx-card>
                    <vx-card class="mt-2">
                        <div class="container w-full">
                            <vs-row>
                                <span class="font-bold">{{ $t('cashierReport.payment') }}</span>
                                <vs-row>
                                        <ul class="w-full">
                                            <div class="data-container">
                                                <li v-for="(tr, indextr) in paymentInHouse" :key="indextr">
                                                    <vs-row vs-type="flex" vs-justify="space-between">
                                                        <span>{{paymentInHouse[indextr].account | currency_format}}</span>
                                                        <span>{{paymentInHouse[indextr].amount | currency_format}}</span>
                                                    </vs-row>
                                                </li>
                                                <vs-divider/>
                                                <vs-row class="font-bold" vs-type="flex" vs-justify="space-between">
                                                    <span>{{ $t('cashierReport.total') }}</span>
                                                    <span>{{totalPayment | currency_format}}</span>
                                                </vs-row>
                                            </div>
                                        </ul>
                                </vs-row>
                            </vs-row>
                            <vs-row class="mt-2">
                                <span class="font-bold">{{ $t('cashierReport.depositReservation') }}</span>
                                <vs-row>
                                    <ul class="w-full">
                                        <div class="data-container">
                                            <li v-for="(tr, indextr) in depositReservation" :key="indextr">
                                                <vs-row vs-type="flex" vs-justify="space-between">
                                                    <span>{{depositReservation[indextr].account | currency_format}}</span>
                                                    <span>{{depositReservation[indextr].amount | currency_format}}</span>
                                                </vs-row>
                                            </li>
                                            <vs-divider/>
                                            <vs-row class="font-bold" vs-type="flex" vs-justify="space-between">
                                                <span>{{ $t('cashierReport.total') }}</span>
                                                <span>{{totalDeposit | currency_format}}</span>
                                            </vs-row>
                                        </div>
                                    </ul>
                                </vs-row>
                            </vs-row>
                            <vs-row class="mt-2">
                                <span class="font-bold">{{ $t('cashierReport.refund') }}</span>
                                <vs-row>
                                    <ul class="w-full">
                                        <div class="data-container">
                                            <li v-for="(tr, indextr) in totalCashOut" :key="indextr">
                                                <vs-row vs-type="flex" vs-justify="space-between">
                                                    <span>{{totalCashOut[indextr].account | currency_format}}</span>
                                                    <span>{{totalCashOut[indextr].amount | currency_format}}</span>
                                                </vs-row>
                                            </li>
                                            <vs-divider/>
                                            <vs-row class="font-bold" vs-type="flex" vs-justify="space-between">
                                                <span>{{ $t('cashierReport.total') }}</span>
                                                <span>{{totalRefund | currency_format}}</span>
                                            </vs-row>
                                        </div>
                                    </ul>
                                </vs-row>
                            </vs-row>
                            <vs-row class="mt-2">
                                <span class="font-bold">{{ $t('cashierReport.balance') }}</span>
                                <vs-row>
                                    <ul class="w-full">
                                        <div class="data-container">
                                            <li v-for="(tr, indextr) in balance" :key="indextr">
                                                <vs-row vs-type="flex" vs-justify="space-between">
                                                    <span>{{balance[indextr].account | currency_format}}</span>
                                                    <span>{{balance[indextr].amount | currency_format}}</span>
                                                </vs-row>
                                            </li>
                                            <vs-divider/>
                                            <vs-row class="font-bold" vs-type="flex" vs-justify="space-between">
                                                <span>{{ $t('cashierReport.total') }}</span>
                                                <span>{{totalBalance | currency_format}}</span>
                                            </vs-row>
                                        </div>
                                    </ul>
                                </vs-row>
                            </vs-row>
                        </div>
                    </vx-card>
                    <vx-card class="mt-2">
                    </vx-card>
                </VuePerfectScrollbar>
            </div>
            <footer class="footer">
                <vs-row class="mt-2" vs-type="flex" vs-justify="space-between">
                    <div class="w-full md:w-5/12 pr-1 pl-1 mt-1">
                        <vs-button class="w-full" @click="handlePrint()">{{ $t('cashierReport.printCashier') }}</vs-button>
                    </div>
                    <div class="w-full md:w-5/12 pr-1 pl-1 mt-1">
                        <vs-button :disabled="btnDisabled" color="danger" class="w-full" @click="handleCloseShift()">{{ $t('cashierReport.closeShift') }}</vs-button>
                    </div>
                    <div class="w-full md:w-2/12 pr-1 pl-1 mt-1">
                        <vs-button @click="handleClose()" class="w-full" color="grey">{{ $t('button.close') }}</vs-button>
                    </div>
                </vs-row>
            </footer>
        </vs-popup>
    </div>
</template>
<script>
import $dialog from '@/utils/dialog'
import CashierReportResource from '@/api/cashierReport'
const cashierReportResource = new CashierReportResource
export default {
    data() {
        return {
            modalPreventMain: false,
            modalMain: false,
            data : [],
            shiftInfo: {
                user_id: '',
                shift: '',
                start_date: '',
                end_date: ''
            },
            paymentInHouse: [],
            depositReservation: [],
            refundInHouse: [],
            refundReservation: [],
            balance: [],
            totalCashIn: [],
            totalCashOut: [],
            totalBalance: [],
            btnDisabled: false
        }
    },
    methods:{
        async getData(){
            this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            let {data} = await cashierReportResource.list({user_id:this.userID})
            this.paymentInHouse= data.paymentInHouse
            this.depositReservation= data.depositReservation
            this.refundInHouse= data.refundInHouse
            this.refundReservation= data.refundReservation
            this.balance= data.balance
            this.totalBalance= data.totalBalance
            this.totalCashIn= data.totalCashIn
            this.totalCashOut= data.totalCashOut
            if(data.shiftInfo == null || data.shiftInfo == undefined){
               await this.$store.dispatch('logout');
            }
            this.shiftInfo= data.shiftInfo
            this.modalMain= true;
            this.btnDisabled= false;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        handleCloseShift(){
            if(this.shiftInfo){
                $dialog.confirmation(this,'closeShift');
            }
        },

        async closeShift(){
            this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            this.btnDisabled= true
            try{
                await cashierReportResource.closeShift({id:this.shiftInfo.id})
                this.$store.dispatch('logout');
            }catch(error){
                this.btnDisabled= false
            }
        },

        handleClose(){
            this.modalMain= false
            setTimeout(()=>{ this.$router.push({name:'home'})},10)
        },

        handlePrint(){
            let newTabReport = this.$router.resolve({ path: '/report/preview?reportId='+this.global.reportID.cashierReport+'&userId='+this.userID+'&template='+this.global.stimulsoftReportFileDirectory.cashierReport});
            window.open(newTabReport.href, '_blank');
        },
    },
    mounted(){
        this.getData()
    },
    computed:{
        totalPayment(){
            let sum = 0;
            this.paymentInHouse.forEach(element => {
                sum += parseFloat(element.amount)
            });
            return sum;
        },
        totalDeposit(){
            let sum = 0;
            this.depositReservation.forEach(element => {
                sum += parseFloat(element.amount)
            });
            return sum;
        },
        totalRefund(){
            let sum = 0;
            this.totalCashOut.forEach(element => {
                sum += parseFloat(element.amount)
            });
            return sum;
        },
        userID(){
            return this.$store.state.auth.accountCode
        },
        dateNow(){
            return new Date();
        }
    },
    watch:{
        modalPreventMain(){
            this.modalPreventMain = this.modalMain
        },
        modalMain(){
            this.modalPreventMain = this.modalMain
        }
    },
    beforeRouteLeave (to, from, next) {
        if(this.modalMain){
            this.modalMain = false
            setTimeout(()=>{next()},10)
        }else{
            next()
        }
    }
}
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 763px) {
    .container{
        padding-left: 20px;
        padding-right: 20px;
        .data-container{
            padding-left: 30px;
            padding-right: 30px;
        }
    }
    .shift-information{
        .date{
            display: flex;
            justify-content: flex-end;
        }
    }
}
.container{
        .data-container{
            padding-left: 20px;
            padding-right: 20px;
        }
    .vs-divider {
        margin: 0 !important;
        background: rgba(var(--vs-primary),1);
    }
}
.con-vs-dialog .vs-dialog footer .vs-button:last-of-type {
    margin-left: 0 !important;
}
</style>
