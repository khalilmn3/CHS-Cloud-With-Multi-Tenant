import Vue from 'vue';

export default Vue.extend({
    template: `
            <div class="ag-name-value">
                <span class="ag-name-value-value"></span>
            </div>
    `,
    data() {
        return {
            count: null,
        };
    },
    beforeMount() {
    },
    mounted() {
        this.onGridReady();
    },
    methods: {
        onGridReady() {
            this.count = this.params.data;
        },
    },
});
