<template>
    <div class="dayend-closed">
        <vx-card class="mb-3">
            <vs-row vs-type="flex" vs-justify="space-between">
                <vs-col class="md:w-3/4 flex" vs-justify="flex-start">
                    <label class="w-48 font-bold" for="lastdayend">{{ $t('nightAudit.lastDayendClose') }}</label>
                    <span id="lastdayend" class="w-full"> {{"  "+ lastDayendClose | full_datetime }}</span>
                </vs-col>
                <vs-col class="md:w-1/4 flex" vs-justify="flex-end">
                    <label class="w-48 font-bold" for="auditdate">{{ $t('nightAudit.auditDate') }}</label>
                    <span id="auditdate" class="w-full">{{ auditDate | fulldate }}</span>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card vs-type="flex" vs-justify="center">
            <vs-row class="mb-5" vs-type="flex" vs-justify="center">
                <span>{{ $t('nightAudit.processDayendClose') }}</span>
            </vs-row>
            <vs-row class="mb-5" vs-type="flex" vs-justify="center">
                <vs-button :color="!isStart ? 'success' : 'danger'" @click="handleStart($event)"> {{ start }} </vs-button>
            </vs-row>
            <vs-row class="mb-6" vs-type="flex" vs-justify="center">
                <span>{{ $t('nightAudit.progress') +' '+ progress }}%</span>
                <vs-progress :height="8" :percent="progress" color="primary">primary</vs-progress>
            </vs-row>
            <vs-row class="mb-6" vs-type="flex" vs-justify="center">
                <div v-if="isStart" class="item-progress">
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.eaNotCheckIn') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="status.step >= 1 && this.status.status == 0 || status.step >= 2">OK</span>
                            <span class="error" v-if="status.step == 1 && this.status.status == 1">ERROR</span>
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.edNotCheckOut') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="status.step >= 2 && this.status.status == 0 || status.step >= 3">OK</span>
                            <span class="error" v-if="status.step == 2 && this.status.status == 1">ERROR</span>
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.captainOrderOpen') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="status.step >= 3 && this.status.status == 0 || status.step >= 4">OK</span>
                            <span class="error" v-if="status.step == 3 && this.status.status == 1">ERROR</span>
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.postingRoomCharge') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="status.step >= 4 && this.status.status == 0 || status.step >= 5">OK</span>
                            <span class="error" v-else-if="status.step == 4 && this.status.status == 1">ERROR</span>
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.folioReservationNotBalance') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="status.step >= 5 && this.status.status == 0 || status.step >= 6">OK</span>
                            <span class="error" v-else-if="status.step == 5 && this.status.status == 1">WARNING</span>
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.audit') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="status.step >= 5 && this.status.status == 0">OK</span>
                            <!-- <span v-if="status.step >= 1 && this.status.status == 1 || status.step >= 2">ERROR</span> -->
                        </vs-col>
                    </vs-row>
                    <!-- <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>Audit</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span v-if="status.step >= 6 && this.status.status == 0">OK</span>
                            <span v-if="status.step >= 1 && this.status.status == 1 || status.step >= 2">ERROR</span>
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>Print / Sending Audit Report</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span v-if="status.step >= 7 && this.status.status == 0">OK</span>
                            <span v-if="status.step >= 1 && this.status.status == 1 || status.step >= 2">ERROR</span>
                        </vs-col>
                    </vs-row> -->
                    <vs-row class="mt-5" vs-type="flex" vs-justify="center" style="font-weight:bolder">
                        <span>{{ result }}</span>
                    </vs-row>
                </div>
            </vs-row>

        </vx-card>
    <!-- POPUP -->
        <dialog-prompt
            button1
            :iconButton1="''"
            :textButton1="isWarningError ? $t('button.continue') : $t('button.abort')"
            @button1="handleClose()"
            :buttonCloseHidden="true"
            :title="popupTitle"
            :width="80"
            :active="showPopup">
            <template #body>
                <error-list ref="errorList" v-if="destroyComponent" :rowData="errorList" @precheck="precheck()" @closePopup="closePopup()"></error-list>
            </template>
        </dialog-prompt>
        <dialog-prompt
            :buttonCloseHidden="true"
            :title="'Audit'"
            :width="500"
            :active="showAudit">
            <template #body>
                <div class="audit-progress">
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.updateRoomStatus') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="auditStep >= 1">Done</span>
                            <span v-else-if="auditStep < 1">{{ $t('nightAudit.inProgress') }}</span>
                            <span v-else-if="roolBack & auditStep >= 1">{{ $t('nightAudit.rollBack') }}</span>
                            <span v-else>{{ $t('nightAudit.inProgress') }}</span>
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.generateReport') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="auditStep >= 2">Done</span>
                            <span v-else-if="auditStep < 2">{{ $t('nightAudit.inProgress') }}</span>
                            <span v-else-if="roolBack & auditStep >= 2">{{ $t('nightAudit.rollBack') }}</span>
                            <!-- <span class="error" v-if="status.step == 2 && this.status.status == 1">ERROR</span> -->
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.closeAllOpenShift') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="auditStep >= 3">Done</span>
                            <span v-else-if="auditStep < 3">{{ $t('nightAudit.inProgress') }}</span>
                            <span v-else-if="roolBack & auditStep >= 3">{{ $t('nightAudit.rollBack') }}</span>
                            <!-- <span class="error" v-if="status.step == 2 && this.status.status == 1">ERROR</span> -->
                        </vs-col>
                    </vs-row>
                    <vs-row class="item">
                        <vs-col vs-lg="8" vs-type="flex" vs-justify="flex-start">
                            <span>{{ $t('nightAudit.rollAuditDate') }}</span>
                        </vs-col>
                        <vs-col vs-lg="3" vs-type="flex" vs-justify="flex-end">
                            <span class="success" v-if="auditStep >= 4">Done</span>
                            <span v-else-if="auditStep < 4">{{ $t('nightAudit.inProgress') }}</span>
                            <span v-else-if="roolBack & auditStep >= 4">{{ $t('nightAudit.rollBack') }}</span>
                            <!-- <span class="error" v-if="status.step == 2 && this.status.status == 1">ERROR</span> -->
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-5" vs-type="flex" vs-justify="center" style="font-weight:bolder">
                        <vs-button v-if="result" type="border" icon="check">{{ result }}</vs-button>
                        <img v-else src="/images/gif/loading-drop.gif"/>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
    </div>
</template>
<script>
import $dialog from '@/utils/dialog';
import DayendCloseResource from '@/api/night-audit/dayendClose';
import ErrorList from './components/ErrorList.vue';

const dayendCloseResource = new DayendCloseResource();
export default {
    name: 'DayendClose',
    components: {
        ErrorList,
    },

    data() {
        return {
            status: {
                step: 0,
                status: 0,
                auditStep: 0,
            },
            auditStep: 0,
            start: 'START',
            lastDayendClose: '',
            isStart: false,
            result: '',
            progress: 0,
            showPopup: false,
            showAudit: false,
            popupTitle: '',
            isWarningError: false,
            destroyComponent: false,
            errorList: [],
            rollBack: false,
            dialogShow: false,
        };
    },
    methods: {
        async handleStart(event) {
            this.reset();
            if (this.start == this.$t('nightAudit.start')) {
                $dialog.confirmationW8Text(this.$t('message.processDayendClose'), this, 'begin');
            } else if (this.isStart == true) {
                this.reset();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        async begin() {
            this.$vs.loading( { container: '#layout--main', scale: this.global.scaleLoadingMainLayout } );
            this.isStart = true;
            await this.precheck();
        },

        handleClose() {
            if (this.isWarningError) {
                this.showPopup = false;
            } else {
                $dialog.confirmationW8Text(this.$t('message.abortProcessDayend'), this, 'closePopup');
            }
        },

        closePopup() {
            this.reset();
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        reset() {
            this.auditStep = 0;
            this.result = '';
            // this.$refs.errorList.showAutoPosting = false;
            this.showPopup = false;
            this.isStart = false;
            this.progress = 0;
            this.status = {
                status: 0,
                step: 0,
                auditStep: 0,
            };
        },

        async precheck() {
            const { data } = await dayendCloseResource.precheck();
            this.status = data;
            if (data.status == 3) {
                this.closePopup();
                $dialog.information(this.$t('message.cannotProcessDayendClose'));
            } else if (this.isStart && data.finalStep == 1 && data.step == 6) {
                this.showPopup = false;
                this.showAudit = true;
                this.processAudit();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } else if (this.isStart && data.status == 0 && data.step < 6) {
                this.progress = 20 * data.step;
                this.showPopup = false;
                this.precheck();
            } else if (this.isStart && data.status == 0 && data.step == 5) {
                this.progress = 100;
                this.isStart = false;
                this.showPopup = false;
                this.result = this.$t('nightAudit.done');
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } else if (this.isStart && data.status == 1) {
                this.isWarningError = data.step >= 5;
                this.errorList = data.data;
                this.showPopup = true;
                this.popupTitle = this.$t(`nightAudit.title.${data.step}`);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } else if (!this.isStart) {
                this.result = this.$t('nightAudit.aborted');
            }

            if (data.step == 5) {
                this.popupTitle = this.$t('nightAudit.title.7');
            }
        },

        async processAudit() {
            const params = { user_id: this.global.userInfo.code };
            try{
                const { data } = await dayendCloseResource.audit(params);
                this.auditStep = data.auditStep;
                console.log(this.auditStep);
                if (this.auditStep == 1) {
                    setTimeout(() => { this.processAudit(); }, 1000);
                } else if (this.auditStep == 2) {
                    setTimeout(() => { this.processAudit(); }, 1000);
                } else if (this.auditStep == 3) {
                    setTimeout(() => { this.processAudit(); }, 1000);
                } else if (this.auditStep == 4) {
                    setTimeout(() => { this.processAudit(); }, 1000);
                } else if (this.auditStep == 5) {
                    this.progress = 100;
                    this.isStart = false;
                    this.$store.dispatch('getAuditDate');
                    this.result = this.$t('nightAudit.finished');
                    setTimeout(() => {
                        this.showAudit = false;
                        setTimeout(() => { this.finishedDayendClose(); }, 100);
                    }, 2000);
                } else {
                    this.rollBack = true;
                    this.isStart = false;
                    this.auditStep = 0;
                    this.progress = 0;
                    this.status = {
                        status: 0,
                        step: 0,
                        auditStep: 0,
                    };
                    setTimeout(() => {
                        this.showAudit = false;
                    }, 2500);
                    $dialog.informationNoDetail('Oops, Error while parsing the data!');
                }
            } catch (error) {
                this.rollBack = true;
                this.isStart = false;
                this.auditStep = 0;
                this.progress = 0;
                this.status = {
                    status: 0,
                    step: 0,
                    auditStep: 0,
                };
                setTimeout(() => {
                    this.showAudit = false;
                }, 2500);
                $dialog.informationNoDetail('Oops, Error while parsing the data!');
            }
        },

        finishedDayendClose() {
            this.$store.dispatch('logout');
        },

        async getLastDayendClose() {
            this.$loadingIndicator(this)
            const { data } = await dayendCloseResource.lastDayendClose();
            this.lastDayendClose = data;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

    },
    computed: {
        userId() { return this.global.userInfo.code; },
        auditDate() { return this.$store.state.auditLog.auditDate; },
    },
    watch: {
        showPopup() {
            if (this.status.status == 1 && this.isStart && this.showPopup == false && this.isWarningError == false) {
                this.showPopup = true;
            } else if (this.showPopup == false && this.isWarningError == true) {
                this.showPopup = false;
                this.precheck();
            }
        },
        // showAudit() {
        //     if (this.showAudit == false && this.auditStep < 5) {
        //         this.showAudit = true;
        //     } else if() {
        //         this.showAudit = false;
        //     }
        // },
        isStart(val) {
            this.start = val ? this.$t('nightAudit.stop') : this.$t('nightAudit.start');
        },
    },
    created() {
        this.$store.dispatch('getAuditDate');
        // this.$vs.loading.close('#layout--main>.con-vs-loading');
    },
    mounted() {
        this.getLastDayendClose();
        this.destroyComponent = true;
    },
    beforeRouteLeave(to, from, next) {
        if (this.auditStep > 0 && this.showAudit) {
            $dialog.information(this.$t('nightAudit.dayendCloseOnProgress'));
            next(false);
        } else if (to.name !== 'transaction') {
            if (this.showAudit || this.showPopup) {
                this.handleClose();
                next(false);
            } else {
                this.destroyComponent = false; // fix sidebar error
                setTimeout(() => {
                    next();
                }, 10);
            }
        } else {
            this.closePopup();
            setTimeout(() => {
                next();
            }, 10);
        }
    },
};
</script>
<style lang="scss">
.item-progress{
    @media screen and (max-width:600px){
        font-size: 0.7rem;
    }
    @media screen and (min-width:600px){
        padding: 20px;
    }
    width: 500px;


}

.audit-progress{
    padding: 20px;
}
.item {
      .success{
          color: rgb(0, 218, 0)
      }
      .error{
          color: rgb(228, 0, 0)
      }

    div:last-child{
        font-weight: bolder;
    }
}
</style>
