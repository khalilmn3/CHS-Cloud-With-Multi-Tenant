import Vue from 'vue';

export default Vue.extend({
    template: `
            <div>
                <div v-if="params.data && (params.data.folio_number > 0 || params.data.reservation_number > 0)" class="flex action-button">
                    <vx-tooltip class="flex" style="height:30px" :text="$t('tooltip.menu')">
                        <vs-button @click="showSidebar" :color="global.iconActionColor.menuColor" type="flat">
                            <vs-icon icon="menu" size="small"></vs-icon>
                        </vs-button>
                    </vx-tooltip>
                    <vx-tooltip v-if="params.data.folio_status != 'Closed' && params.data.folio_status != 'Cancel Check In'" class="flex" style="height:30px" :text="$t('tooltip.edit')">
                        <vs-button @click="showPopUp(global.modeData.edit)" :color="global.iconActionColor.editColor" type="flat">
                            <img border="0" width="20" height="20" src="/images/icons/edit_icon24.png"/>
                        </vs-button>
                    </vx-tooltip>
                    <vx-tooltip v-if="params.data.folio_status != 'Closed' && params.data.folio_status != 'Cancel Check In' && params.data.folio_status != 'Open'" class="flex" style="height:30px" :text="$t('tooltip.duplicate')">
                        <vs-button @click="showPopUp(global.modeData.duplicate)" :color="global.iconActionColor.editColor" type="flat">
                            <img border="0" width="20" height="20" src="/images/icons/duplicate_icon24.png"/>
                        </vs-button>
                    </vx-tooltip>
                </div>
            </div>
            `,
    data() {
        return {};
    },
    beforeMount() {},
    mounted() {},
    methods: {
        showPopUp(modeData) {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.showForm(this.params.data, modeData);
            } else {
                this.openUndefinedAlert();
            }
        },

        duplicate() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleDuplicate(this.params.data);
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

        showSidebar() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleSidebarOption(this.params.data);
            } else {
                this.openUndefinedAlert();
            }
        },

        openUndefinedAlert() {
            this.$vs.dialog({
                color: 'primary',
                title: this.$t('message.informationTitle'),
                text: this.$t('message.undefinedText'),
                acceptText: this.$t('placeholder.close'),
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
                accept: this.acceptAlert,
            });
        },

        acceptAlert() {
            this.$vs.notify({
                color: 'danger',
                title: this.$t('message.deleteTitleSuccess'),
                text: this.$t('message.deleteSuccess'),
                accept: this.params.context.componentParent.deleteData(this.params.data),
            });
        },
    },
});
