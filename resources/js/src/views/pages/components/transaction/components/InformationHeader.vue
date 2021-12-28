<template>
    <div class="transaction-guest-information-bar mb-3">
        <vx-card class="box" title="Stay Information">
            <vs-row class="box-body" vs-type="flex" vs-justify="flex-start">
                <vs-col vs-xs="12" vs-sm="12" vs-md="2" vs-lg="2">
                    <vs-row class="folio-number" vs-align="bottom" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <span>F-{{ value.number }}</span>
                    </vs-row>
                    <vs-row class="room-number" vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <span v-if="value.room_number">R-{{ value.room_number }}</span>
                    </vs-row>
                </vs-col>
                <vs-col vs-xs="12" vs-sm="12" vs-md="4" vs-lg="4">
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <h6>{{ value.full_name }}</h6>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.address') }}</label>
                        <span>: {{ value.address }}</span>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.phone') }}</label>
                        <span>: {{ value.phone1 }}</span>
                    </vs-row><vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.group') }}</label>
                        <span>: {{ value.group }}</span>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.guestType') }}</label>
                        <span>: {{ value.guest_type_code }}</span>
                    </vs-row>
                </vs-col>
                <vs-col vs-xs="12" vs-sm="12" vs-md="4" vs-lg="3">
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <h5>{{ $t('transaction.header.stayInformation') }}</h5>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.arrivalDate') }}</label>
                        <span>: {{ value.arrival | fulldate }}</span>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.departureDate') }}</label>
                        <span>: {{ value.departure | fulldate }}</span>
                    </vs-row><vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.adultOrChild') }}</label>
                        <span>: {{ value.adult }} / {{ value.child }}</span>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.roomType') }}</label>
                        <span>: {{ value.room_type_code }}</span>
                    </vs-row>
                </vs-col>
                <vs-col vs-xs="12" vs-sm="12" vs-md="4" vs-lg="3">
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" vs-w="12">
                        <h5>{{ $t('transaction.header.rateInformation') }}</h5>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="space-between" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.rateCode') }}</label>
                        <span> {{ value.room_rate_code }}</span>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="space-between" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.rateAmount') }}</label>
                        <span> {{ value.room_rate_amount | number}}</span>
                    </vs-row><vs-row vs-align="center" vs-type="flex" vs-justify="space-between" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.discount') }}</label>
                        <span> {{ value.discount_amount | number }}</span>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="space-between" vs-w="12">
                        <label class="title-width">{{ $t('transaction.header.roomCharge') }}</label>
                        <span> {{ value.room_charge | number }}</span>
                    </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
export default {
    props: {
        stayInformations: Object,
    },
    data() {
        return {
            informations: {
                number: '',
                room_number: '',
                full_name: '',
                adress: '',
                phone1: '',
                group: '',
                guest_type_code: '',
                arrival: '',
                departure: '',
                adult: '',
                room_type_code: '',
                room_rate_amount: '',
                discount_amount: '',
                room_charge: '',
            },
        };
    },

    methods: {
    },

    beforeMount() {
        this.value = this.stayInformations === undefined ? this.informations : this.stayInformations;
    },
};
</script>
