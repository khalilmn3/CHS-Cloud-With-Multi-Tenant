import Vue from 'vue';
import IconClean from '@/components/icon/IconClean';
import IconReady from '@/components/icon/IconReady';
import IconDirty from '@/components/icon/IconDirty';
import IconOC from '@/components/icon/IconOC';
import IconOD from '@/components/icon/IconOD';
import IconOO from '@/components/icon/IconOO';
import IconUC from '@/components/icon/IconUC';
import IconPC from '@/components/icon/IconPC';
import IconOF from '@/components/icon/IconOF';
import IconHU from '@/components/icon/IconHU';
import IconGC from '@/components/icon/IconGC';
import IconSR from '@/components/icon/IconSR';
import IconComp from '@/components/icon/IconComp';
import IconOccupied from '@/components/icon/IconOccupied';

import {
    CheckIcon,
} from 'vue-feather-icons';

export default Vue.extend({
    components: {
        CheckIcon,
        IconClean,
        IconReady,
        IconDirty,
        IconHU,
        IconComp,
        'icon-hu': IconHU,
        'icon-comp': IconComp,
        'icon-oc': IconOC,
        'icon-od': IconOD,
        'icon-oo': IconOO,
        'icon-uc': IconUC,
        'icon-pc': IconPC,
        'icon-of': IconOF,
        'icon-gc': IconGC,
        'icon-sr': IconSR,
        'icon-occupied': IconOccupied,
    },
    template: `
    <div v-if="params.data" style="margin-top:2px">
        <icon-clean v-if="data === 'VC'"></icon-clean>
        <icon-ready v-else-if="data === 'VR'"></icon-ready>
        <icon-dirty v-else-if="data === 'VD'"></icon-dirty>
        <icon-oc v-else-if="data === 'OC'"></icon-oc>
        <icon-od v-else-if="data === 'OD'"></icon-od>
        <icon-oo v-else-if="data === 'OO'"></icon-oo>
        <icon-uc v-else-if="data === 'UC'"></icon-uc>
        <icon-pc v-else-if="data === 'PC'"></icon-pc>
        <icon-of v-else-if="data === 'OF'"></icon-of>
        <icon-hu v-else-if="data === 'P'"></icon-hu>
        <icon-comp v-else-if="data === 'H'"></icon-comp>
        <icon-gc v-else-if="data === 'G'"></icon-gc>
        <icon-sr v-else-if="data === 'S'"></icon-sr>
        <icon-occupied v-else-if="data === 'O'"></icon-occupied>
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
        this.data = `${this.params.value}`;
    },
    methods: {

    },
});
