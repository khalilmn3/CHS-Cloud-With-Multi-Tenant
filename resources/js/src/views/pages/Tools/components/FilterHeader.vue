<template>
    <div class="guestinhouse-search-bar mb-3">
        <vx-card class="box">
            <vs-row class="box-body">
                <vs-col class="lg:w-1/2 search-part">
                    <vs-row vs-align="start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                        <vs-col vs-lg="5" vs-md="5" vs-xs="12">
                            <v-select :clearable="false" :reduce="searchOption => searchOption.value" v-model="vModelSearchData" label="text" :options="searchOption"></v-select>
                        </vs-col>
                        <vs-col vs-lg="7" vs-md="7" vs-xs="12">
                            <vx-input-group>
                                <vs-input v-model="vModelTextSearchData" placeholder="Search" id="filter-text-box" v-on:keyup.enter="onEnter()"/>
                                <template slot="append">
                                    <div class="append-text btn-addon">
                                    <vs-button icon="search" @click="onRefreshData" color="primary"></vs-button>
                                    </div>
                                </template>
                            </vx-input-group>
                        </vs-col>
                    </vs-row>
                </vs-col>
                <vs-col class="lg:w-1/2 filter-part">

                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
export default {
	props: {
		searchOption: Array,
        searchDefault: String,
        limitPageSize: [Number,String]
	},
	data(){
		return{
			vModelSelectLimitData: 0,
			vModelSearchData: '',
			vModelTextSearchData: '',
		};
	},

	methods: {
		onRefreshData(limit){
			this.vModelSelectLimitData = (this.vModelSelectLimitData == '' ? 0 : this.vModelSelectLimitData);
			let search={
				searchBy: this.vModelSearchData,
				keyword: this.vModelTextSearchData,
				limit: limit >= 0 ? limit : this.limitPageSize,

			};
			setTimeout(()=>{
				this.$emit('search', search);
			},200);
		},
		selectAll(){
			this.onRefreshData();
		},
		onEnter(){
			this.onRefreshData();
		},

	},

    beforeMount(){
        //Assign limit data with variable Global
		this.vModelSearchData = this.searchDefault;
		this.vModelSelectLimitData = this.global.limitDefaultPageSize;
        this.onRefreshData();
    }
};
</script>
