import Vue from 'vue';

export default Vue.extend({
    template: `
                <div v-if="params.data" class="flex action-button">
                    <vs-button @click="deleteData()" style="height:30px" :color="global.iconActionColor.deleteColor" type="flat">
                        <img border="0" width="20" height="20" src="/images/icons/delete_icon24.png"/>
                    </vs-button>
                </div>
            `,
    data() {
        return {};
    },
    beforeMount() {},
    mounted() {},
    methods: {

        deleteData() {
            this.params.node.setSelected(true, true);
            setTimeout(() => this.params.context.componentParent.handleDeleteData(), 100);
        },
    },
});
