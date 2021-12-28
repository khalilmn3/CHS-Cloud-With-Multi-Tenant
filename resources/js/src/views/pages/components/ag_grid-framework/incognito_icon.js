import Vue from 'vue';
export default Vue.extend({
	template: `
    <div v-if="params.data" style="margin-top:2.5px">
        <img v-if="data === true" src="/images/icons/inc.png" width="20" height="20">
    </div>
         `,
	data: function () {
		return {
			data: null,
		};
	},
	mounted() {
        if(this.params.data) {
		    this.data = this.params.data.is_incognito;
        }
	},
	methods: {

	}
});
