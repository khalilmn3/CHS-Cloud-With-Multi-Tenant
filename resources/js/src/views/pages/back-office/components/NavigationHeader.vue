<template>
    <div class="content-header ">
        <vs-row vs-w="12" vs-type="flex" vs-justify="space-between" class="navigation mb-2">
            <vs-input-number v-model="vLimit" v-on:input="onRefreshData()" :step="100" icon-inc="expand_less" icon-dec="expand_more"/>
            <vs-col vs-lg="10" vs-md="10" vs-xs="12" vs-type="flex" vs-justify="flex-end" vs-align="flex-end">
                <vs-dropdown v-if="printButtonDropdown1" vs-trigger-click class="cursor-pointer">
                    <vs-button @click="$emit('handleButtonPrint1')" color="success" type="filled" icon="print"><slot>{{ $t('button.print') }}</slot></vs-button>
                    <vs-dropdown-menu>
                        <vs-dropdown-item v-if="dropdown1Button1" @click="$emit('handleDropdownButtonPrint1')"><slot>{{ $t('button.print') }}</slot></vs-dropdown-item>
                        <vs-dropdown-item v-if="dropdown1Button2" @click="$emit('handleDropdownButtonPrint2')"><slot>{{ $t('button.print') }}</slot></vs-dropdown-item>
                        <vs-dropdown-item v-if="dropdown1Button3" @click="$emit('handleDropdownButtonPrint3')"><slot>{{ $t('button.print') }}</slot></vs-dropdown-item>
                        <vs-dropdown-item v-if="dropdown1Button4" @click="$emit('handleDropdownButtonPrint4')"><slot>{{ $t('button.print') }}</slot></vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
                <vs-dropdown v-if="printButtonDropdown2" vs-trigger-click class="cursor-pointer">
                    <vs-button @click="$emit('handleButtonPrint2')" color="success" type="filled" icon="print"><slot>{{ $t('button.print') }}</slot></vs-button>
                    <vs-dropdown-menu>
                        <vs-dropdown-item v-if="dropdown2Button1" @click="$emit('handleDropdown2ButtonPrint1')"><slot>{{ $t('button.print') }}</slot></vs-dropdown-item>
                        <vs-dropdown-item v-if="dropdown2Button2" @click="$emit('handleDropdown2ButtonPrint2')"><slot>{{ $t('button.print') }}</slot></vs-dropdown-item>
                        <vs-dropdown-item v-if="dropdown2Button3" @click="$emit('handleDropdown2ButtonPrint3')"><slot>{{ $t('button.print') }}</slot></vs-dropdown-item>
                        <vs-dropdown-item v-if="dropdown2Button4" @click="$emit('handleDropdown2ButtonPrint4')"><slot>{{ $t('button.print') }}</slot></vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
                <!-- <vs-col v-if="reservationButton" vs-lg="10" vs-md="10" vs-xs="12" vs-type="flex" vs-justify="flex-end" vs-align="flex-end">
                    <vs-button v-if="!groupCheckInBoolean" vs-xs="12" vs-type="flex" class="btn-group-resv" @click="$emit('groupCheckIn')" vs-justify="flex-end" color="success" type="filled" icon="people_alt">{{ $t('button.groupCheckIn') }}</vs-button>
                    <vs-button v-else vs-xs="12" vs-type="flex" class="btn-group-resv" @click="$emit('groupCheckIn')"  vs-justify="flex-end" color="success" type="filled" icon="person">{{ $t('button.individualCheckIn') }}</vs-button>
                    <vs-button v-if="groupCheckInBoolean" vs-xs="12" vs-type="flex" class="btn-group-resv" @click="$emit('checkIn')"  vs-justify="flex-end" color="success" type="filled" icon="play_for_work">{{ $t('button.checkIn') }}</vs-button>
                    <vs-button vs-xs="12" vs-type="flex" vs-justify="flex-end" @click="showModal()" color="success" type="filled" icon="add">{{ $t('button.insertReservation') }}</vs-button>
                </vs-col> -->
            <!-- <vs-col v-if="groupReservationButton" vs-lg="10" vs-md="10" vs-xs="12" vs-type="flex" vs-justify="flex-end" vs-align="flex-end">
                <vs-button vs-xs="12" vs-type="flex" vs-justify="flex-end" class="btn-group-resv" @click="showModal()" color="success" type="filled" icon="add">{{ $t('button.group') }}</vs-button>
                <vs-button vs-xs="12" vs-type="flex" vs-justify="flex-end" @click="$emit('showReservation')" color="success" type="filled" icon="add">{{ $t('button.reservation') }}</vs-button>
            </vs-col> -->

                <vs-button v-if="insertButton" :disabled="insertButtonDisabled" vs-justify="flex-end" @click="$emit('showModal', '',0)" :color="global.buttonColor.insert" type="filled" icon="add">
                    <slot>{{ $t('button.insert') }}</slot>
                </vs-button>
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
export default {
    props: {
        insertButtonDisabled: Boolean,
        insertButton: Boolean,
        printButtonDropdown1: Boolean,
        dropdown1Button1: Boolean,
        dropdown1Button2: Boolean,
        dropdown1Button3: Boolean,
        dropdown1Button4: Boolean,
        printButtonDropdown2: Boolean,
        dropdown2Button1: Boolean,
        dropdown2Button2: Boolean,
        dropdown2Button3: Boolean,
        dropdown2Button4: Boolean,
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
    },

    mounted() {
        // Assign limit data with variable Global
        this.vLimit = this.global.limitDefaultPageSize;
    },
};
</script>
