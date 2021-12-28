import Vue from 'vue';

export default Vue.extend({
    template: `
                <div v-if="params.data" class="flex action-button">
                    <vx-tooltip class="flex" style="height:30px" text="Edit data selected">
                        <vs-button @click="showPopUp(global.modeData.edit)" :color="global.iconActionColor.editColor" type="flat">
                            <img border="0" width="20" height="20" src="/images/icons/edit_icon24.png"/>
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

    },
});
