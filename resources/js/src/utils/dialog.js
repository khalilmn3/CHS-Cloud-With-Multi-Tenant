import Vue from 'vue';
import i18n from '@/lang';

const vm = new Vue({
    i18n,
    methods: {
        completeField(message) {
            const text = message || this.$t('message.completeText');
            this.$vs.dialog({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        selectField(message) {
            const text = message || this.$t('message.selectData');
            this.$vs.dialog({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        noRoomAvailable(message) {
            const text = message || this.$t('message.roomNotAvailable');
            this.$vs.dialog({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        roomNumberNotAvailable(message) {
            const text = message || this.$t('message.roomNumberNotAvailable');
            this.$vs.dialog({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        existAccount(message) {
            const text = message || this.$t('message.existAccount');
            this.$vs.dialog({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        existData(message, procedure) {
            const text = message || this.$t('message.existAccount');
            this.$vs.dialog({
                color: 'danger',
                type: 'confirm',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.yes'),
                accept: () => {
                    if (procedure) procedure;
                },
            });
        },

        dialogInsertMasterSuccessfully(message, data) {
            const text = message || this.$t('message.insertMasterSuccessfully') + data;
            this.$vs.dialog({
                color: 'primary',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        roomNumberCannotExtend(message, data) {
            const text = message || this.$t('message.roomNumberCannotExtend') + data;
            this.$vs.dialog({
                color: 'primary',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        information(message, thisData, event, data1, data2) {
            const text = message || this.$t('message.informationTitle');
            this.$vs.dialog({
                color: 'primary',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
                accept: () => {
                    if (thisData) thisData[event](data1, data2);
                },
            });
        },

        informationError(message, thisData, event, data1, data2) {
            const text = message || this.$t('message.errorTitle');
            this.$vs.dialog({
                color: 'danger',
                title: this.$t('message.errorTitle'),
                text,
                acceptText: this.$t('button.ok'),
                accept: () => {
                    if (thisData) thisData[event](data1, data2);
                },
            });
        },

        confirmation(thisData, event, data1, data2) {
            this.$vs.dialog({
                type: 'confirm',
                color: 'primary',
                title: this.$t('message.confirmTitle'),
                text: this.$t('message.confirmation'),
                acceptText: this.$t('message.yes'),
                cancelText: this.$t('message.no'),
                accept: () => {
                    if (thisData) thisData[event](data1, data2);
                },
            });
        },

        confirmationW8Text(message, thisData, event, data1, data2, data3) {
            const text = message || this.$t('message.confirmTitle');
            this.$vs.dialog({
                type: 'confirm',
                color: 'primary',
                title: this.$t('message.confirmTitle'),
                text,
                acceptText: this.$t('message.yes'),
                cancelText: this.$t('message.no'),
                accept: () => {
                    if (thisData) thisData[event](data1, data2, data3);
                },
            });
        },

        confirmationDelete(thisData, event, data1, data2) {
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: this.$t('message.confirmTitle'),
                text: this.$t('message.deleteConfirm'),
                acceptText: this.$t('message.yes'),
                cancelText: this.$t('message.no'),
                accept: () => {
                    if (thisData) thisData[event](data1, data2);
                },
            });
        },

        informationNoDetail(message) {
            const text = message || this.$t('message.informationNoDetailData');
            this.$vs.dialog({
                color: 'warning',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        roomNotAvailable(message, data) {
            const text = message || this.$t('message.roomNotAvailable') + data;
            this.$vs.dialog({
                color: 'primary',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        statusCheckInReservation(message) {
            this.$vs.dialog({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text: message,
                acceptText: this.$t('button.ok'),
            });
        },

        reservationSaveSuccess(message, data, procedure) {
            this.$vs.dialog({
                color: 'primary',
                type: 'confirm',
                title: this.$t('message.informationTitle'),
                text: 'Reservation successfully saved, continue?',
                acceptText: this.$t('button.yes'),
                cancelText: this.$t('button.no'),
                cancel: () => {
                    procedure;
                },
            });
        },

        reportTemplateNotFound(message, data) {
            const text = message || this.$t('message.reportTemplateNotFound');
            this.$vs.dialog({
                color: 'warning',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        reportDataNotFound(message, data) {
            const text = message || this.$t('message.reportDataNotFound');
            this.$vs.dialog({
                color: 'warning',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: this.$t('button.ok'),
            });
        },

        unauthorized(message, data) {
            const text = message || this.$t('message.unauthorized') + data;
            this.$vs.dialog({
                color: 'warning',
                title: 'Unauthorized',
                text,
                acceptText: this.$t('button.ok'),
            });
        },
    },
});
export default vm;
