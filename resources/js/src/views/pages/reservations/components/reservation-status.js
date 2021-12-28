import Vue from 'vue';

export default Vue.extend({
    template: `
        <div v-if="params.data" style="margin-top:2.5px" class="reservation-status-grid">
            <vs-chip v-if="data == 'W'" color="#004481">
                Wait List
            </vs-chip>
            <vs-chip v-else-if="data == 'I'" color="#2494C6">
                Checked In
            </vs-chip>
            <vs-chip v-else-if="data == 'O'" color="#FF83A5">
                Checked Out
            </vs-chip>
            <vs-chip v-else-if="data == 'N'" color="#00C1B0">
                Reserved
            </vs-chip>
            <vs-chip v-else-if="data == 'C'" color="#FF002A">
                Canceled
            </vs-chip>
            <vs-chip v-else-if="data == 'S'" color="#FF8A00">
                No Show
            </vs-chip>
            <vs-chip v-else-if="data == 'V'" color="#C62583">
                Void
            </vs-chip>
        </div>
         `,
    data() {
        return {
            data: null,
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
            this.date = {
                arrival: this.params.data.DateArrival,
                departure: this.params.data.DateDeparture,
            };
        }
    },
    methods: {

    },
});
