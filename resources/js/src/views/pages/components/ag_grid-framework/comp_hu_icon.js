import Vue from 'vue';

export default Vue.extend({
    template: `
    <div v-if="params.data" style="margin-top:2.5px">
        <img v-if="data == 'P'" src="/images/icons/comp.png" width="18" height="20">
        <img v-else-if="data == 'H'" src="/images/icons/hu.png" width="20" height="20">
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
            this.data = this.params.data.compliment_hu;
        }

    },
    methods: {

    },
});
