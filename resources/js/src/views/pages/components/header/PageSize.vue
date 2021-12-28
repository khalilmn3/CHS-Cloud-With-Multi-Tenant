<template>
    <div class="mb-3">
        <!-- <vs-row>
            <vs-col vs-w="12"  vs-type="flex" vs-justify="center" vs-align="center"><h2>{{titleForm}}</h2></vs-col>
        </vs-row> -->
        <vs-row vs-w="12" class="mb-2">
            <vs-col vs-w="10" class="flex">
                <vs-button @click="showModal()" color="success" type="filled" icon="add">{{ $t('placeholder.insert') }}</vs-button>
            </vs-col>
            <vs-col vs-w="2" class="flex" vs-justify="flex-end" vs-align="flex-end">
                <vs-input-number v-model="vModelSelectLimitData" v-on:input="onRefreshData()" :step="100" icon-inc="expand_less" icon-dec="expand_more"/>
            </vs-col>
        </vs-row>
        <vs-row vs-w="12" class="flex">
            <vs-col vs-lg="12" class="flex w-full">
                <v-select :clearable="false" :reduce="searchFilterData => searchFilterData.value" v-model="vModelSearchData" label="text" :options="searchFilterData" style="width:185px;min-width:185px;font-size=4px"></v-select>
                <vs-input v-model="vModelTextSearchData" id="filter-text-box" class="inline-flex" icon="search" v-on:keyup.enter="onEnter()" style="width:180px;min-width:60px"/>
                <vs-button class="" color="success" type="filled" icon="refresh" @click="onRefreshData()"></vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
export default {
    props: ['titleForm', 'searchFilterData', 'vModelDefaultSearchData'],
    data() {
        return {
            vModelSelectLimitData: 0,
            vModelSearchData: '',
            vModelTextSearchData: '',
        };
    },

    methods: {
        onRefreshData() {
            const search = {
                searchBy: this.vModelSearchData,
                keyword: this.vModelTextSearchData,
                limit: this.vModelSelectLimitData,
            };
            this.vModelSelectLimitData = (this.vModelSelectLimitData == '' ? 0 : this.vModelSelectLimitData);
            this.$emit('refreshData', search);
        },
        onEnter() {
            this.onRefreshData();
        },

        showModal() {
            this.$emit('showModal', '', this.global.modeData.insert);
        },
        showSidebar() {
            this.$emit('sidebar', this.global.modeData.option);
        },
    },

    mounted() {
        // Assign limit data with variable Global
        this.vModelSearchData = this.vModelDefaultSearchData;
        this.vModelSelectLimitData = this.global.limitDefaultPageSize;
        this.onRefreshData();
    },
};
</script>
