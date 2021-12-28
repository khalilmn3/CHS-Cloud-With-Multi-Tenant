import Vue from 'vue';
import IconClean from '@/components/icon/IconClean';
import IconReady from '@/components/icon/IconReady';
import IconDirty from '@/components/icon/IconDirty';
import {
    CheckIcon,
} from 'vue-feather-icons';

export default Vue.extend({
    components: {
        CheckIcon,
        IconClean,
        IconReady,
        IconDirty,
    },
    template: `
    <div v-if="params.data" style="margin-top:2px">
        <icon-clean v-if="data === 'Clean'"></icon-clean>
        <icon-ready v-else-if="data === 'Ready'"></icon-ready>
        <icon-dirty v-else></icon-dirty>
    </div>
         `,
    data() {
        return {
            data: null,
        };
    },
    computed: {},
    beforeMount() {},
    created() {},
    mounted() {
        if(this.params.data) {
            this.data = `${this.params.data.status}`;
        }
    },
    methods: {

    },
});
