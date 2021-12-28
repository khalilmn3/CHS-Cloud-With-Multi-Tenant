import Vue from 'vue';
export default Vue.extend({
    template: `
                <div v-if="params.data" class="flex action-button">
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <vs-button :color="global.iconActionColor.menuColor" type="flat"><vs-icon icon="menu" size="small"></vs-icon></vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item v-if="params.data.folio_number" @click="handleProperties()"><img border="0" width="20" height="20" src="/images/icons/properties_icon24.png"/>{{ $t('transaction.menu.properties') }}</vs-dropdown-item>
                            <vs-dropdown-item :disabled="!paramsParent.userAccess.updateSubDepartment" @click="handleUpdateType(1)"><img border="0" width="20" height="20" src="/images/icons/edit_icon24.png"/>{{ $t('transaction.menu.updateSubDepartment') }}</vs-dropdown-item>
                            <vs-dropdown-item :disabled="!paramsParent.userAccess.updateRemark" @click="handleUpdateType(2)"><img border="0" width="20" height="20" src="/images/icons/edit_icon24.png"/>{{ $t('transaction.menu.updateRemark') }}</vs-dropdown-item>
                            <vs-dropdown-item :disabled="!paramsParent.userAccess.updateDocumentNumber" @click="handleUpdateType(3)"><img border="0" width="20" height="20" src="/images/icons/edit_icon24.png"/>{{ $t('transaction.menu.updateDocumentNumber') }}</vs-dropdown-item>
                            <vs-dropdown-item v-if="params.data.folio_number && params.data.sub_group_code === global.subGroupAccount.accountReceiveable" @click="handleUpdateType(4)"><img border="0" width="20" height="20" src="/images/icons/edit_icon24.png"/>{{ $t('transaction.menu.updateDirectBillOrCompany') }}</vs-dropdown-item>
                            <vs-dropdown-item @click="handlePrint()"><img border="0" width="20" height="20" src="/images/icons/print_icon24.png"/>{{ $t('transaction.menu.printReceipt') }}</vs-dropdown-item>
                            <vs-dropdown-item @click="showPopUp(global.modeData.tracking)"><img border="0" width="20" height="20" src="/images/icons/tracking_icon24.png"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vx-tooltip class="flex" style="height:30px" text="Correction data selected"><vs-button :disabled="!paramsParent.userAccess.correction" @click="handleCorrectionVoid(true)" :color="global.iconActionColor.editColor" type="flat"><img border="0" width="20" height="20" src="/images/icons/correction_icon24.png"/></vs-button></vx-tooltip>
                    <vx-tooltip class="flex" style="height:30px" text="Void data selected"><vs-button :disabled="!paramsParent.userAccess.void" @click="handleCorrectionVoid(false)" :color="global.iconActionColor.deleteColor" type="flat"><img border="0" width="20" height="20" src="/images/icons/delete_icon24.png"/></vs-button></vx-tooltip>
                </div>
            `,
    data() {
        return {
            data: '',
        };
    },
    beforeMount() {},
    mounted() {},
    methods: {
        showPopUp(modeData) {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.showModal(this.params.data, modeData);
            } else {
                this.openUndefinedAlert();
            }
        },

        handlePrint() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handlePrintReceipt(this.params.data);
            } else {
                this.openUndefinedAlert();
            }
        },

        handleUpdateType(type) {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleUpdateType(this.params.data, type);
            } else {
                this.openUndefinedAlert();
            }
        },

        handleProperties() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleShowProperties(this.params.data.id_log);
            } else {
                this.openUndefinedAlert();
            }
        },

        openUndefinedAlert() {
            this.$vs.dialog({
                color: 'primary',
                title: this.$t('message.informationTitle'),
                text: this.$t('message.undefinedText'),
                acceptText: this.$t('button.close'),
            });
        },

        handleCorrectionVoid(isCorrection) {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleCorrectionVoid(this.params.data,isCorrection)
            } else {
                this.openUndefinedAlert();
            }
        },
    },
    computed: {
        paramsParent() {
            return this.params.context.componentParent;
        }
    },

});
