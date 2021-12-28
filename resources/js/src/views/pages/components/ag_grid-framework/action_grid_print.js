import Vue from 'vue';

export default Vue.extend({
    template: `
                <div v-if="params.data" class="flex action-button">
                    <vx-tooltip class="flex" style="height:30px" text="Print receipt">
                        <vs-button @click="printInvoiceReceiptPayment()" type="flat">
                            <img border="0" width="20" height="20" src="/images/icons/print_icon24.png"/>
                        </vs-button>
                    </vx-tooltip>
               </div>
            `,
    methods: {
        printInvoiceReceiptPayment() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handlePrintReceipt(this.params.data);
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
        beforeMount() {
            this.formType = this.params.context.componentParent.formType;
        },

    },
});
