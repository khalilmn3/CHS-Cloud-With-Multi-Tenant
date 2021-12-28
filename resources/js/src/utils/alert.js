
import i18n from '@/lang';
import store from '@/store/store.js'
import $dialog from '@/utils/dialog.js'
let vm = new Vue({
    i18n,
    methods: {
    acceptAlertSucces() {

        setTimeout(() =>
            this.$vs.notify({
                color: 'success',
                title: this.$t('message.saveTitleSuccess'),
                text: this.$t('message.saveSuccess'),
                position: this.global.notifPosition
        }),1000);
    },

    acceptAlertSuccesCancelCheckIn() {
        setTimeout(() =>
            this.$vs.notify({
                color: 'success',
                title: this.$t('message.saveTitleSuccess'),
                text: this.$t('message.saveSuccessCancelCheckIn'),
                position: this.global.notifPosition
        }),1000);
    },

    acceptAlertSuccesWithText(text) {
        setTimeout(() =>
            this.$vs.notify({
                color: 'success',
                title: this.$t('message.saveTitleSuccess'),
                text: text,
                position: this.global.notifPosition
        }),1000);
    },

    inputRequiredAlert() {
            this.$vs.notify({
                color: 'warning',
                title: this.$t('message.informationTitle'),
                text: this.$t('message.inputRequired'),
                position: this.global.notifPosition
        });
    },

    deleteAlertSuccess(){
        setTimeout(() =>
            this.$vs.notify({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text: this.$t('message.deleteSuccess'),
                position: this.global.notifPosition
        }),1000);
    },

    errorFetchDataAlert(error){
        this.$vs.notify({
            color: 'danger',
            title: this.$t('message.errorTitle'),
            text: error,// || this.$t('message.errorFetchData'),
            position: this.global.notifPosition
        });
    },
    errorSaveDataAlert(message){
        this.$vs.notify({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text: message || this.$t('message.errorSaveData') ,
                position: this.global.notifPosition
        });
    },

    errorSaveExistAccountData(message){
        this.$vs.notify({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text: message ? message : this.$t('message.errorSaveExistAccountData') ,
                position: this.global.notifPosition
        });
    },
    errorDeleteDataAlert(message){
        this.$vs.notify({
                color: 'danger',
                title: this.$t('message.errorTitle'),
                text: message ? message : this.$t('message.errorDeleteData') ,
                position: this.global.notifPosition
        });
    },
    errorModifyingDataAlert(message){
        this.$vs.notify({
                color: 'danger',
                title: this.$t('message.errorTitle'),
                text: message ? message : this.$t('message.errorModifyingData') ,
                position: this.global.notifPosition
        });
    },
    errorCashRefundAlert(message){
        this.$vs.notify({
                color: 'danger',
                title: this.$t('message.errorTitle'),
                text: message ? message : this.$t('message.errorModifyingData') ,
                position: this.global.notifPosition
        });
    },
}
})
export default vm
