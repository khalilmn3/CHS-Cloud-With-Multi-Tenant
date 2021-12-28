import Vue from 'vue';

export default Vue.extend({
    template: `
    <div v-if="params.data" style="margin-top:2.5px" class="reservation-status-grid">
        <vs-chip v-if="(date.arrival == $store.state.auditLog.auditDate) && (status == global.reservationStatus.new ||  status == global.reservationStatus.waitList)" color="#FF002A">
            {{data | fulldate}}
        </vs-chip>
        <span v-else>{{data | fulldate}}</span>
    </div>
         `,
    data() {
        return {
            data: null,
            status: null,
            date: {
                arrival: null,
                departure: null,
            },
            true: true,
            false: false,
        };
    },
    mounted() {
        this.data = this.params.value;
        if(this.params.data) {
            this.status = this.params.data.status_code;
            this.date = {
                arrival: this.params.data.DateArrival,
                departure: this.params.data.DateDeparture,
            };
        }
    },
    methods: {

    },
});
