<template>
    <div class="content-header ">
        <vs-row vs-w="12" vs-type="flex" vs-justify="space-between" class="navigation mb-2">
            <vs-input-number v-model="vLimit" v-on:input="onRefreshData()" :step="100" icon-inc="expand_less" icon-dec="expand_more"/>
            <vs-button v-if="insertButton" vs-justify="flex-end" @click="showModal()" :color="global.buttonColor.insert" type="filled" icon="add">
                <slot>{{ $t('button.insert') }}</slot>
            </vs-button>
            <vs-dropdown v-if="printHKButton" vs-trigger-click class="cursor-pointer">
                <vs-button @click="showModal()" color="success" type="filled" icon="print">{{ $t('button.print') }}</vs-button>
                <vs-dropdown-menu>
                    <vs-dropdown-item @click="handlePrintCheckList()">{{ $t('housekeeping.menu.printCheckList') }}</vs-dropdown-item>
                    <vs-dropdown-item @click="handlePrintCheckList(true)">{{ $t('housekeeping.menu.printCheckListSelected') }}</vs-dropdown-item>
                    <!-- <vs-dropdown-item> Room Status</vs-dropdown-item>
                    <vs-dropdown-item> Room Status Summary</vs-dropdown-item>
                    <vs-dropdown-item> Room Discrepancy</vs-dropdown-item>
                    <vs-dropdown-item> Room Attendant Control Sheet</vs-dropdown-item>
                    <vs-dropdown-item> Room Attendant Control Sheet(selected)</vs-dropdown-item> -->
                </vs-dropdown-menu>
            </vs-dropdown>
            <vs-col v-if="reservationButton" vs-lg="10" vs-md="10" vs-xs="12" vs-type="flex" vs-justify="flex-end" vs-align="flex-end">
                <vs-button v-if="!groupCheckInBoolean" vs-xs="12" vs-type="flex" class="btn-group-resv" @click="$emit('groupCheckIn')" vs-justify="flex-end" color="success" type="filled" icon="people_alt">{{ $t('button.groupCheckIn') }}</vs-button>
                <vs-button v-else vs-xs="12" vs-type="flex" class="btn-group-resv" @click="$emit('groupCheckIn')"  vs-justify="flex-end" color="success" type="filled" icon="person">{{ $t('button.individualCheckIn') }}</vs-button>
                <vs-button v-if="groupCheckInBoolean" vs-xs="12" vs-type="flex" class="btn-group-resv" @click="$emit('checkIn')"  vs-justify="flex-end" color="success" type="filled" icon="play_for_work">{{ $t('button.checkIn') }}</vs-button>
                <vs-button vs-xs="12" vs-type="flex" vs-justify="flex-end" @click="showModal()" color="success" type="filled" icon="add">{{ $t('button.insertReservation') }}</vs-button>
            </vs-col>
            <vs-col v-if="groupReservationButton" vs-lg="10" vs-md="10" vs-xs="12" vs-type="flex" vs-justify="flex-end" vs-align="flex-end">
                <vs-button vs-xs="12" vs-type="flex" vs-justify="flex-end" class="btn-group-resv" @click="showModal()" color="success" type="filled" icon="add">{{ $t('button.group') }}</vs-button>
                <vs-button vs-xs="12" vs-type="flex" vs-justify="flex-end" @click="$emit('showReservation')" color="success" type="filled" icon="add">{{ $t('button.reservation') }}</vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
export default {
    props: {
        insertButton: Boolean,
        walkinButton: Boolean,
        printHKButton: Boolean,
        reservationButton: Boolean,
        groupCheckInBoolean: Boolean,
        groupReservationButton: Boolean,
    },

    data() {
        return {
            vLimit: 0,
        };
    },

    methods: {
        onRefreshData() {
            this.vLimit = (this.vLimit == '' ? 0 : this.vLimit);
            this.$emit('refreshData', this.vLimit);
        },
        onEnter() {
            this.onRefreshData();
        },

        handlePrintCheckList(boolean) {
            this.$emit('printCheckList', boolean);
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
        this.vLimit = this.global.limitDefaultPageSize;
    },
};
</script>
