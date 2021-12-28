import Vue from 'vue';

export default Vue.extend({
    components: {
    },
    template: `
    <div v-if="params.data">
        <div id="col" :style="style"></div>
    </div>
         `,
    data() {
        return {
            data: null,
            style: {
                height: '27px',
                width: '65px',
                backgroundColor: '',
            },
        };
    },
    computed: {},
    beforeMount() {},
    created() {
        // this.setColor()
    },
    mounted() {
        if(this.params.data) {
            this.data = this.params.data.color;
            this.style.backgroundColor = this.data;
        }
    },
    methods: {
        setColor() {
            const div = document.getElementById('col');
            if (div !== null) {
                div.style.backgroundColor = 'red';
            }
        },

    },
});
