import Vue from 'vue';

export default Vue.extend({
    template: `
                <div v-if="params.data" class="flex action-button">
                    <vx-tooltip class="flex" style="height:30px" text="Edit data selected">
                        <vs-button @click="handleUpdate()" :color="global.iconActionColor.editColor" type="flat">
                            <img border="0" width="20" height="20" src="/images/icons/edit_icon24.png"/>
                        </vs-button>
                    </vx-tooltip>
                    <vx-tooltip class="flex" style="height:30px" text="Delete data selected">
                        <vs-button @click="handleDelete()" :color="global.iconActionColor.deleteColor" type="flat">
                            <img border="0" width="20" height="20" src="/images/icons/delete_icon24.png"/>
                        </vs-button>
                    </vx-tooltip>
               </div>
            `,
    methods: {
        handleUpdate() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleUpdateEditor(this.params.data);
            } else {
                this.openUndefinedAlert();
            }
        },

        handleDelete() {
            if (this.params.data !== undefined) {
                this.params.node.setSelected(true, true);
                this.params.context.componentParent.handleDeleteEditor(this.params.data);
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

    },
});
