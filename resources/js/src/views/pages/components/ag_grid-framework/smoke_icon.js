import Vue from 'vue';

export default Vue.extend({
    template: `
    <div v-if="params.data" style="margin-top:3px">
        <vs-icon color="danger" icon="smoke_free" v-if="data === 'false'"/>
        <vs-icon color="warning" icon="smoking_rooms" v-else />
    </div>
         `,
    data() {
        return {
            data: null,
            true: true,
            false: false,
        };
    },
    mounted() {
        if(this.params.data) {
            this.data = `${this.params.data.is_smoking}`;
        }
    },
});
