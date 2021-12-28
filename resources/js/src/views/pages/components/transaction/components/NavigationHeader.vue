<template>
    <div class="content-header navigation-header">
        <vs-row vs-w="12" vs-type="flex" vs-justify="space-between" class="navigation mb-2">
            <div id="btn" class="navigation-back" vs-sm="12" vs-justify="flex-start">
                <vs-button class="w-full" @click="$emit('back')" color="black" icon="keyboard_backspace">{{ $t('button.back') }}</vs-button>
            </div>
            <div class="navigation-transaction">
            <!-- <div class="examplex" vs-lg="10" vs-sm="12" vs-type="flex" vs-justify="flex-end"> -->
                <vs-col id="btn" vs-sm="12">
                    <vs-dropdown class="w-full dropdown" :vs-trigger-click="true">
                        <vs-button class="w-full" vs-justify="flex-end" color="primary"><img border="0" width="16" height="16" src="/images/icons/print_icon24.png"/>{{ $t('button.print') }}</vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item :disabled="!access.printFolio" @click="$emit('printFolio')">
                                <img class="mr-1" border="0" width="16" height="16" src="/images/icons/print_icon24.png"/>
                                {{ $t('transaction.menu.printFolio') }}
                            </vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                </vs-col>
                <vs-col v-if="isFolioOpen" vs-type="flex" vs-align="center" id="btn" vs-sm="12">
                    <vs-button :disabled="!access.checkOut" class="w-full" vs-justify="flex-end" @click="$emit('checkOut')" color="danger" type="filled"><img border="0" width="16" height="16" src="/images/icons/check_out_icon24.png"/>{{ $t('button.checkOut') }}</vs-button>
                </vs-col>
                <vs-col  v-if="isFolioOpen" id="btn" vs-sm="12">
                    <vs-button class="w-full" :disabled="isFolioOpen == false || !access.transfer" vs-justify="flex-end" @click="$emit('transfer')" color="warning" type="filled"><img border="0" width="16" height="16" src="/images/icons/transfer_icon24.png"/>{{ $t('button.transfer') }}</vs-button>
                </vs-col>
                <vs-col id="btn" vs-type="flex" vs-sm="12">
                    <vs-button :disabled="!access.cash && !access.card && !access.directBill && !access.otherPayment" class="btn-left-drop" vs-justify="flex-end" @click="$emit('payment')" color="success" type="filled"><img border="0" width="16" height="16" src="/images/icons/other_payment_icon24.png"/>{{ $t('button.payment') }}</vs-button>
                    <vs-dropdown class="dropdown" :vs-trigger-click="true">
                        <vs-button :disabled="!access.cash && !access.card && !access.directBill && !access.otherPayment" class="btn-drop dropdown-toogle" data-toogle="con-vs-dropdown--menu" type="filled" color="success" icon="expand_more"></vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item :disabled="!access.cashRefund" @click="$emit('refund')">
                                <img class="mr-1" border="0" width="16" height="16" src="/images/icons/cash_refund_icon24.png"/>
                                {{ $t('button.cashRefund') }}
                            </vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                </vs-col>
                <vs-col id="btn-last" vs-type="flex" vs-sm="12">
                    <vs-button :disabled="!access.charge" class="btn-left-drop" vs-justify="flex-end" @click="$emit('charge')" color="success" type="filled"><img border="0" width="16" height="16" src="/images/icons/charge_icon24.png"/>{{ $t('button.charge') }}</vs-button>
                    <vs-dropdown :disabled="!access.charge" class="dropdown" :vs-trigger-click="true">
                        <vs-button :disabled="!access.charge" class="btn-drop dropdown-toogle" data-toogle="con-vs-dropdown--menu" type="filled" color="success" icon="expand_more"></vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item @click="$emit('package')">
                                <img class="mr-1" border="0" width="16" height="16" src="/images/icons/package_icon24.png"/>
                                {{ $t('button.package') }}
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="$emit('apTransaction')">
                                <img class="mr-1" border="0" width="16" height="16" src="/images/icons/ap_transaction_icon24.png"/>
                                {{ $t('button.apTransaction') }}
                            </vs-dropdown-item>
                            <vs-dropdown-item v-if="folioType == global.folioType.guestFolio" @click="$emit('roomCharge')">
                                <img class="mr-1" border="0" width="16" height="16" src="/images/icons/autopost_icon24.png"/>
                                {{ $t('button.autoPostingRoomCharge') }}
                            </vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                </vs-col>
            </div>
        </vs-row>
    </div>
</template>
<script>
export default {
    props: {
        folioType: String,
        isFolioOpen: Boolean,
        access: Object,
    },
};
</script>
<style scope lang="scss">
.navigation-header{
    @media only screen and (min-width: 900px) {
        .navigation-transaction{
            display: flex;
            justify-content: flex-end;
        }
        #btn{
            width: 135px !important;
            margin-right: 10px
        }
        #btn-last{
            width: 135px !important;
            margin-right: 0px
        }
        .navigation-transaction{
            width: 85%;
        }
        .navigation-back{
            width: 15%;
        }
    }
    @media only screen and (max-width: 899px) {
        #btn{
            margin-bottom: 5px;
        }
    }

    button.btn-left-drop{
        margin: 0px !important;
        border-radius: 5px 0px 0px 5px;
        width: calc(100% - 38px) !important;
    }
    button.btn-drop{
        border-radius: 0px 5px 5px 0px;
        border-left: 1px solid rgba(255, 255, 255,.2);
    }
    .examplex{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .dropdown{
        cursor: pointer;
    }

    span.vs-button-text.vs-button--text{
        display: flex !important;
        justify-content: center;

        img{
            margin-right: 5px;
        }
    }
}
</style>
