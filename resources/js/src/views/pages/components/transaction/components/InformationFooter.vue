<template>
    <div class="transaction-footer mb-3">
        <vx-card class="box">
            <vs-row class="box-body" vs-type="flex" vs-align="center" vs-justify="space-between">
                <vs-col vs-xs="12" vs-sm="12" vs-md="4" vs-lg="4">
                    <vs-textarea disabled v-model="data.bill_instruction" :label="$t('transaction.footer.billInstruction')" height="100px"></vs-textarea>
                </vs-col>
                <vs-col vs-xs="12" vs-sm="12" vs-md="4" vs-lg="4">
                    <vs-textarea disabled v-model="data.notes" :label="$t('transaction.footer.notes')" height="100px"></vs-textarea>
                </vs-col>
                <vs-col class="balance" vs-xs="12" vs-sm="12" vs-md="4" vs-lg="3">
                    <vs-row vs-align="center" vs-type="flex" vs-justify="space-between" vs-w="12">
                        <label class="title-width">{{ $t('transaction.footer.totalCharge') }}</label>
                        <span> {{ data.debit | currency_format}}</span>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="space-between" vs-w="12">
                        <label class="title-width">{{ $t('transaction.footer.totalDeposit') }}</label>
                        <span> {{ data.credit | currency_format}}</span>
                        <vs-divider/>
                    </vs-row><vs-row vs-align="center" vs-type="flex" vs-justify="space-between" vs-w="12">
                        <label class="title-width">{{ $t('transaction.footer.balance') }}</label>
                        <span> {{ data.balance | currency_format }}</span>
                    </vs-row>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
export default {
    props: {
        data: Object,
    },
};
</script>
