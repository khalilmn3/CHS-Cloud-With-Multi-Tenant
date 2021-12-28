import Vue from 'vue';

export default Vue.extend({
    template: `
                <div v-if="params.data" class="flex action-button">
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <vs-button :color="global.iconActionColor.menuColor" type="flat">
                            <vs-icon icon="menu" size="small"></vs-icon>
                        </vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item v-if="params.data.is_active === true || params.data.is_active === false" @click="activeDeactive()">{{ params.data.is_active == true ? $t('common.menu.deactive') : $t('common.menu.active') }}</vs-dropdown-item>
                            <vs-dropdown-item v-if="params.context.componentParent.formType == global.formType.arCityLedgerInvoice" @click="insertPayment()"><img border="0" width="20" height="20" src="/images/icons/add_icon24.png"/>{{ $t('common.menu.insertPayment') }}</vs-dropdown-item>
                            <vs-dropdown-item v-if="params.context.componentParent.formType == global.formType.arCityLedgerInvoice" @click="deletePayment()"><img border="0" width="20" height="20" src="/images/icons/delete_icon24.png"/>{{ $t('common.menu.deletePayment') }}</vs-dropdown-item>
                            <vs-dropdown-item v-if="params.context.componentParent.formType == global.formType.arCityLedgerInvoice" @click="printInvoice()"><img border="0" width="20" height="20" src="/images/icons/print_icon24.png"/>{{ $t('common.menu.printInvoice') }}</vs-dropdown-item>
                            <vs-dropdown-item v-if="params.context.componentParent.formType == global.formType.arCityLedgerInvoice" @click="printARStatement()"><img border="0" width="20" height="20" src="/images/icons/print_icon24.png"/>{{ $t('common.menu.printARStatement') }}</vs-dropdown-item>
                            <vs-dropdown-item @click="showPopUp(global.modeData.tracking)"><img border="0" width="20" height="20" src="/images/icons/tracking_icon24.png"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vx-tooltip class="flex" style="height:30px" text="Edit data selected">
                        <vs-button @click="showPopUp(global.modeData.edit)" :color="global.iconActionColor.editColor" type="flat">
                            <img border="0" width="20" height="20" src="/images/icons/edit_icon24.png"/>
                        </vs-button>
                    </vx-tooltip>
                    <vx-tooltip class="flex" style="height:30px" text="Delete data selected">
                        <vs-button @click="openAlert()" :color="global.iconActionColor.deleteColor" type="flat">
                            <img border="0" width="20" height="20" src="/images/icons/delete_icon24.png"/>
                        </vs-button>
                    </vx-tooltip>
               </div>
            `,
    methods: {
        showPopUp(modeData) {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.showModal(this.params.data, modeData);
            } else {
                this.openUndefinedAlert();
            }
        },

        activeDeactive() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleActiveDeactive(this.params.data);
            } else {
                this.openUndefinedAlert();
            }
        },

        // AR City ledger invoice
        insertPayment() {
            if (this.params.data !== undefined) {

                console.log(this.params.context.componentParent.formType)
                this.params.context.componentParent.handleInsertPayment(this.params.data);
            } else {
                this.openUndefinedAlert();
            }
        },
        deletePayment() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleDeletePayment(this.params.data);
            } else {
                this.openUndefinedAlert();
            }
        },
        printInvoice() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handlePrintInvoice(this.params.data, false);
            } else {
                this.openUndefinedAlert();
            }
        },

        printARStatement() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handlePrintInvoice(this.params.data, true);
            } else {
                this.openUndefinedAlert();
            }
        },

        openAlert() {
            if (this.params.data !== undefined) {
                this.openConfirm();
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

        openConfirm() {
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: this.$t('message.deleteTitleConfirm'),
                text: this.$t('message.deleteConfirm'),
                acceptText: this.$t('message.yes'),
                cancelText: this.$t('message.no'),
                accept: () => this.params.context.componentParent.deleteData(this.params.data),
            });
        },
        mounted() {
            console.log(this.params.context.componentParent.formType)
            // this.formType = this.params.context.componentParent.formType;
        },

    },
});
