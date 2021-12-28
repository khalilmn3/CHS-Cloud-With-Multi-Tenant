import Vue from 'vue';
import { XSquareIcon, CheckSquareIcon } from 'vue-feather-icons';

export default Vue.extend({
    template: `
    <div style="margin-top:3px">
        <check-square-icon size="1.5x" class="custom-class" v-if="data == true"></check-square-icon>
        <x-square-icon size="1.5x" class="custom-class" v-else-if="data == false"></x-square-icon>
    </div>
         `,
    data() {
        return {
            data: null,
            true: true,
            false: false,
        };
    },
    computed: {},
    components: {
        XSquareIcon,
        CheckSquareIcon,
    },
    beforeMount() {},
    created() {},
    mounted() {
        this.data = this.params.value;
    },
    methods: {

    },
});
