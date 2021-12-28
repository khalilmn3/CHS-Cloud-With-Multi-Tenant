import Vue from 'vue';
export default Vue.extend({
    template: `
                <div v-if="params.data" class="flex action-button">
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <vs-button :color="global.iconActionColor.menuColor" type="flat"><vs-icon icon="menu" size="small"></vs-icon></vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item @click="handleProperties()"><img border="0" width="20" height="20" src="/images/icons/properties_icon24.png"/>{{ $t('transaction.menu.properties') }}</vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
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
        handleProperties() {
            if (this.params.data !== undefined) {
                this.params.context.componentParent.handleShowProperties3(this.params.data.id_log);
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
