import Vue from 'vue';

export default Vue.extend({
    template: `
    <div v-if="params.data" style="margin-top:3px">
        <vs-icon icon="lock" v-if="data == '-1'"></vs-icon>
        <vs-icon icon="lock_open" v-else-if="data == '0'"></vs-icon>
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
        this.data = this.params.value;
    },
    methods: {

    },
});
