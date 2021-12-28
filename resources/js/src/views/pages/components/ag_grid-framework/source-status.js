import Vue from 'vue';
export default Vue.extend({
	template: `
    <div v-if="params.data" style="margin-top:2.5px" class="reservation-status-grid">

        <vs-chip v-if="date.departure == auditDate && data > 0" color="#FF002A">
            Checked In
        </vs-chip>

        <vs-chip v-else-if="date.departure != auditDate && data > 0" color="#2494C6">
            Checked In
        </vs-chip>
        <span v-else-if="date.departure == null && data == null" >

        </span>
        <vs-chip v-else-if="date.departure == auditDate && data == 0" color="#FF002A">
            Walked In
        </vs-chip>

        <vs-chip v-else-if="date.departure != auditDate && data == 0" color="#C62583">
            Walked In
        </vs-chip>


    </div>
         `,
	data: function () {
		return {
			data: null,
			date: {
				arrival: null,
				departure: null
			},
			true: true,
			false: false
		};
	},
	mounted() {
        if(this.params.data) {
            this.data = this.params.data.reservation_number;
            this.date = {
                arrival:  this.params.data.date_arrival,
                departure: this.params.data.date_departure
            };
        }
    },
    computed:{
        auditDate:{ get(){return this.$store.state.auditLog.auditDate}}
    },
	methods: {

	}
});
