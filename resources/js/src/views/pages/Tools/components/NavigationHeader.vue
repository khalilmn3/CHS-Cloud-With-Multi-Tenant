<template>
    <div class="content-header ">
        <vs-row vs-w="12" vs-type="flex" vs-justify="space-between" class="navigation mb-2">
            <vs-input-number v-model="vModelSelectLimitData" v-on:input="onRefreshData()" :step="100" icon-inc="expand_less" icon-dec="expand_more"/>
            <vs-button vs-justify="flex-end" @click="showModal()" color="success" type="filled" icon="add">{{ $t('button.insert') }}</vs-button>
        </vs-row>
    </div>
</template>
<script>
export default {
	data(){
		return{
			vModelSelectLimitData: 0,
			vModelSearchData: '',
			vModelTextSearchData: '',
		};
	},

	methods: {
		onRefreshData(){
			this.vModelSelectLimitData = (this.vModelSelectLimitData == '' ? 0 : this.vModelSelectLimitData);
			this.$emit('refreshData', this.vModelSelectLimitData);
		},
		onEnter(){
			this.onRefreshData();
		},

		showModal(){
			this.$emit('showModal', '', this.global.modeData.insert);
		},
		showSidebar(){
			this.$emit('sidebar', this.global.modeData.option);
		}
	},

	mounted(){
		//Assign limit data with variable Global
		this.vModelSelectLimitData = this.global.limitDefaultPageSize;
	}
};
</script>
