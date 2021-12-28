<template>
    <div>
        <vs-popup class="width-400p" :active.sync="modalCancelReservation" :title="reservationStatusX == global.reservationStatus.noShow ? $t('reservation.popup.cancelReservation.title.noShowReservation') : $t('reservation.popup.cancelReservation.title.cancelReservation')">
            <div class="popup-body">
                <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                    <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                        <vs-input disabled :label="$t('reservation.popup.cancelReservation.fullName')" class="w-full" v-model="vCancel.full_name" :maxLength="50"/>
                    </vs-row>
                    <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                        <vs-input disabled :label="$t('reservation.popup.cancelReservation.room')" class="w-full md:w-4/12" v-model="vCancel.room_number" :maxLength="50"/>
                    </vs-row>
                    <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                        <input-number disabled class="w-full" :label="$t('reservation.popup.cancelReservation.totalDeposit')" v-model="vCancel.total_deposit"/>
                    </vs-row>
                    <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                        <input-number class="w-full" @input="vCancel.refund = vCancel.total_deposit-vCancel.cancel_fee" :label="$t('reservation.popup.cancelReservation.cancellationFee')" v-model="vCancel.cancel_fee" />
                    </vs-row>
                    <vs-row v-if='reservationStatusX == global.reservationStatus.cancel'>
                        <vs-radio class="w-full wrap-form-select md:w-6/12" v-model="vCancel.is_ap_refund" vs-name="is_ap_refund" vs-value="0" >{{$t('reservation.popup.cancelReservation.refund')}}</vs-radio>
                        <vs-radio class="w-full wrap-form-select md:w-6/12" v-model="vCancel.is_ap_refund" vs-name="is_ap_refund" vs-value="-1" >{{$t('reservation.popup.cancelReservation.apRefundDeposit')}}</vs-radio>
                    </vs-row>
                    <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                        <input-number disabled class="w-full" :label="(vCancel.is_ap_refund == '-1') || (reservationStatusX == global.reservationStatus.noShow) ? $t('reservation.popup.cancelReservation.apRefundDeposit') : $t('reservation.popup.cancelReservation.refund')" v-model="vCancel.refund" />
                    </vs-row>
                    <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between" v-if='reservationStatusX== global.reservationStatus.cancel'>
                        <vs-input :label="$t('reservation.popup.cancelReservation.docNumber')" class="w-full" v-model="vCancel.document_number" :maxLength="50"/>
                    </vs-row>
                    <vs-row class="mt-3 wrap-form-select w-full">
                        <vs-checkbox class="w-full" style="padding:0px; margin: inherit;" v-model="vCancel.is_close_desk_folio">{{ $t('reservation.popup.cancelReservation.closeCreatedFolio') }}</vs-checkbox>
                    </vs-row>
                </VuePerfectScrollbar>
                <vs-divider/>
            </div>
            <footer class="footer">
                <vs-row vs-justify="flex-end" class="w-full flex">
                    <vs-button :disabled="btnSaveDisabled" @click="handleSaveCancelReservation" icon="save" :color="global.buttonColor.save">{{ $t('button.save') }}</vs-button>
                    <vs-button class="ml-2" @click="modalCancelReservation = !modalCancelReservation" icon="close" :color="global.buttonColor.close">{{ $t('button.close') }}</vs-button>
                </vs-row>
            </footer>
        </vs-popup>
        <credential :value="credential"
            :specialAccessType="specialAccessType"
            :activeCredential="activeCredentialPrompt"
            :isCredential="isCredential"
            :isReason="true"
            :title="credentialTitle"
            @update:active-credential="val=>activeCredentialPrompt = val"
            @closeCredential="closeCredential"
            @acceptReason="updateCancelReservation"
            @input="(newValue)=>{ credential = newValue }"/>
    </div>
</template>
<script>
import Credential from '@/views/pages/components/Credential';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import InputNumber from '@/views/pages/components/Number';
import DepositResource from '@/api/reservation/deposit';
import ReservationResource from '@/api/reservation/reservation';

const depositResource = new DepositResource();
const reservationResource = new ReservationResource();
export default {
    props: {
        isDayendClose: Boolean,
    },
    components: {
        Credential,
        InputNumber,
    },
    data() {
        return {
            vCancel: {},
            modalCancelReservation: false,
            activeCredentialPrompt: false,
            isCredential: false,
            credentialTitle: '',
            specialAccessType: 1000,
            reservationStatusX: '',
            reservationNumber: null,
            credential: {
                user: '',
                pass: '',
                reason: '',
            },
            totalDeposit: 0,
            btnSaveDisabled: false,
        };
    },
    methods: {
        // ------------------START DEPOSIT CANCEL RESERVATION CRUD-------------//
        showCancelReservation(status, reservationNumber) {
            this.btnSaveDisabled = false;
            this.credential = {};
            this.credentialTitle = status == this.global.reservationStatus.noShow ? this.$t('credential.title.noShowReservation') : (status == this.global.reservationStatus.void ? this.$t('credential.title.voidReservation') : this.$t('credential.title.cancelReservation'));
            this.reservationStatusX = status;
            this.reservationNumber = reservationNumber;
            this.getDepositListDetail(reservationNumber, status);
        },

        async getLookupDeposit() {
            try {
                const { data } = await depositResource.lookup();
                this.dataLookupDeposit = data;
                this.getExchangeRate();
                this.$vs.loading.close('.layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getDepositListDetail(reservationNumber, status) {
            this.$loadingIndicator(this)
            const { data } = await reservationResource.reservationStatus(reservationNumber);
            this.$vs.loading.close('.layout--main>.con-vs-loading');
            const balance = data.balance;
            this.vCancel = {
                full_name: data.full_name,
                room_number: data.room_number,
                total_deposit: balance,
                cancel_fee: 0,
                cancel_by: this.global.userInfo.code,
                is_ap_refund: '0',
                refund: balance,
                document_number: '',
                is_close_desk_folio: true,
                reason: '',
                reservation_number: reservationNumber,
                status_code: status,
                user_id: this.global.userInfo.code,
            };
            this.totalDeposit = balance;
            if (data.reservation_status == this.global.reservationStatus.new || data.reservation_status == this.global.reservationStatus.waitList) {
                if (status == this.global.reservationStatus.void) {
                    if (balance > 0) {
                        $dialog.information(this.$t('message.cannotVoidReservation'));
                    } else {
                        this.activeCredentialPrompt = true;
                        this.isCredential = true;
                        this.specialAccessType = this.global.accessSpecialOrder.voidReservation;
                    }
                } else if ((status === this.global.reservationStatus.cancel) || (status === this.global.reservationStatus.noShow)) {
                    if (balance > 0) {
                        this.modalCancelReservation = true;
                    } else {
                        this.activeCredentialPrompt = true;
                        this.isCredential = false;
                    }
                }
            } else if (this.isDayendClose) {
                this.precheck();
                return;
            }
        },

        async handleSaveCancelReservation() {
            this.btnSaveDisabled = true;
            const { data } = await reservationResource.reservationStatus(this.reservationNumber);
            this.totalDeposit = -data.balance.balance;
            if (this.vCancel.cancel_fee > this.totalDeposit) {
                this.$vs.dialog({
                    color: 'danger',
                    title: 'Warning',
                    text: this.$t('reservation.popup.cancelReservation.cancellationFeeCannotGreater'),
                    acceptText: this.$t('button.ok'),
                    accept: (() => {
                        this.vCancel.cancel_fee = 0 ;
                        this.vCancel.refund = this.totalDeposit;
                    }),
                });
                this.btnSaveDisabled = false;
            } else {
                this.modalCancelReservation = false;
                this.activeCredentialPrompt = true;
                this.isCredential = false;
            }
        },

        async updateCancelReservation() {
            this.vCancel.reason = this.credential.reason;
            if ((this.reservationStatusX === this.global.reservationStatus.void)) {
                this.vCancel.cancel_by = this.credential.user;
            }
            await reservationResource.cancelReservation(this.vCancel);
            if (this.isDayendClose) {
                this.precheck();
                return;
            }
            this.$emit('refreshData');

        },

        precheck() {
            this.$emit('precheck');
        },

        closeCredential() {
            this.$vs.loading.close('.layout--main>.con-vs-loading');
        },
    // ------------------END DEPOSIT CANCEL RESERVATION CRUD-------------//
    },

};
</script>
