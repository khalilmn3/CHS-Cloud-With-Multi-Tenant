<template>
    <div class="transaction">
        <navigation-header :access="userAccess" @charge="showForm(null,global.groupAccount.charge, $t('transaction.title.charge'))"
            @roomCharge="handlePostingRoomCharge()"
            @package="handleShowPackage()"
            @apTransaction="showForm([global.subGroupAccount.accountPayable],global.groupAccount.charge, $t('transaction.title.charge'))"
            @payment="btnPaymentOptionDisabled= false; showPaymentOption=true"
            @refund="showForm([global.subGroupAccount.cashPayment], global.groupAccount.payment, $t('transaction.title.cashRefund'),true)"
            @transfer="handleTransfer()"
            @checkOut="handleCheckOut()"
            @back="handleBackButton()"
            @printFolio="handlePrintFolio()"
            :folioType="nFolioType"
            :isFolioOpen="isFolioOpen"/>
        <information-header :stayInformations="stayInformations"></information-header>
        <filter-header ref="filterHeader" @search="searchData" :searchOption="searchOption" :searchDefault="searchDefault"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container mb-1">
            <ag-grid-vue
            ref="mainContainer"
                :style="global.styleAgGridFrame2"
                :class="global.themeAgGrid"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :rowGroupPanelShow="rowGroupPanelShow"
                :enableRangeSelection="false"
                :statusBar="statusBar"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                @cellContextMenu="handleRowRightClicked"
                :context="context"
                :columnDefs="columnDefs"
                :frameworkComponents="frameworkComponents"
                :enableCellChangeFlash="true"
                :rowSelection="rowSelection"
                :rowData="listTransaction"
                :defaultColDef="global.defColDef"
                :getContextMenuItems="getContextMenu"
                :rowClassRules="rowClassRules"
            ></ag-grid-vue>
        </vx-card>
        <information-footer :data="balanceData"></information-footer>
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            paymentForm
            :title="titleInputForm"
            :width="500"
            :active="showInputForm"
            :idButton1="'button-save-form1'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="handleSaveForm1()"
            @close="val=>showInputForm = val">
            <template #body>
        <!--------- START POPUP DEPOSIT----------->
                <div v-if="modeDataValue == global.modeData.tracking">
                    <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking"></tracking>
                </div>
                <div v-else class="popup-body">
                    <div>
                        <vs-row>
                        <!--------- COLUMN ONE ----------->
                            <div class="form-content" :class="{'content-left vs-lg-6 vs-xs-12' : subGroupAccount == global.subGroupAccount.creditOrDebitCard}">
                                <vs-row class="sub-folio" vs-type="flex" vs-justify="space-between">
                                    <div class="form-check-inline">
                                        <label class="form-check-label" for="radio1">
                                            <input type="radio" class="form-check-input" id="radio1" name="optradio" v-model="vTransaction.sub_folio" value="A">{{ $t('transaction.subFolio')+' A' }}
                                        </label>
                                        </div>
                                        <div class="form-check-inline">
                                        <label class="form-check-label" for="radio2">
                                            <input type="radio" class="form-check-input" id="radio2" name="optradio" v-model="vTransaction.sub_folio" value="B">{{ $t('transaction.subFolio')+' B' }}
                                        </label>
                                        </div>
                                        <div class="form-check-inline">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" id="radio3" name="optradio" v-model="vTransaction.sub_folio" value="C">{{ $t('transaction.subFolio')+' C' }}
                                        </label>
                                        </div>
                                        <div class="form-check-inline">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" id="radio4" name="optradio" v-model="vTransaction.sub_folio" value="D">{{ $t('transaction.subFolio')+' D' }}
                                        </label>
                                        </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('transaction.currency')}}</vs-row>
                                        <vs-row>
                                            <v-select class="w-full height150" @input="getExchangeRate(); getAccount()" id="form-select" :clearable="false" label="code" :reduce="value => value.code" :options="dataLookup.currency" v-model="vTransaction.currency_code" v-validate="'required'" name="currency" :data-vv-scope="form1"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has('deposit.currency')">{{ errors.first('deposit.currency') }}</span>
                                        </vs-row>
                                    </div>
                                    <input-number disabled class="w-full md:w-1/2" :label="$t('transaction.excRate')" v-model="vTransaction.exchange_rate" :description="errors.first(form1+'.exc.rate') || dbErrors.exchange_rate | toString" v-validate="'required'" name="exc.rate" :data-vv-scope="form1" />
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('transaction.subDepartment')}}</vs-row>
                                        <vs-row>
                                            <v-select class="w-full height150" id="form-select" @input="getAccount();resetOptionsChange = true" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.sub_department" v-model="vTransaction.sub_department_code" v-validate="'required'" name="sub department" :data-vv-scope="form1"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has(form1+'.sub department')">{{ errors.first(form1+'.sub department') }}</span>
                                        </vs-row>
                                    </div>
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('transaction.account')}}</vs-row>
                                        <vs-row>
                                            <v-select id="form-select" class="w-full height150" :resetOnOptionsChange="resetOptionsChange" :clearable="false" label="name" :options="accounts" v-model="account" v-validate="'required'" name="account" :data-vv-scope="form1">
                                            </v-select>
                                            <span class="error-text text-danger" v-show="errors.has(form1+'.account')">{{ errors.first(form1+'.account') }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <input-number class="w-full md:w-1/2" @input="getTotalAmount()" :label="$t('transaction.amount') +' '+ vTransaction.currency_code" v-model="vTransaction.amount_foreign" :description="errors.first(form1+'.amount') || dbErrors.quantity | toString" v-validate="'required|min_value:0.001'" name="amount" :data-vv-scope="form1" />
                                    <input-number disabled class="w-full md:w-1/2" :label="$t('transaction.amount')+' '+defaultCurrency" v-model="vTransaction.amount" />
                                </vs-row>
                                <vs-row v-if="subGroupAccount == global.subGroupAccount.accountReceiveable || subGroupAccount == global.subGroupAccount.accountPayable" class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full">
                                        <vs-row v-if="subGroupAccount == global.subGroupAccount.accountReceiveable">{{$t('transaction.directBill')}}</vs-row>
                                        <vs-row v-else>{{$t('transaction.company')}}</vs-row>
                                        <vs-row>
                                            <v-select class="w-full height100" id="form-select" @input="vArLimit = vDirectBill.ar_limit ; vTransaction.direct_bill_code = vDirectBill.code" :clearable="false" label="name" :options="dataLookup.direct_bill" v-model="vDirectBill" v-validate="reqDirectBill" name="company" :data-vv-scope="form1"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has(form1+'.company')">{{ errors.first(form1+'.company') }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row v-if="subGroupAccount == global.subGroupAccount.accountReceiveable" class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <input-number disabled class="w-full md:w-1/2" :label="$t('transaction.outstanding')" v-model="vOutstanding"/>
                                    <input-number disabled class="w-full md:w-1/2" :label="$t('transaction.arLimit')" v-model="vArLimit"/>
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-input :label="$t('transaction.remark')" class="w-full" v-model="vTransaction.remark" :maxLength="50"/>
                                </vs-row>
                                <vs-row v-if="subGroupAccount != global.subGroupAccount.accountReceiveable && subGroupAccount != global.subGroupAccount.accountPayable" class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-input :label="$t('transaction.docNumber')" class="w-full" v-model="vTransaction.document_number" :maxLength="50" :description="errors.first(form1+'.doc number')" v-validate="reqDocNumber" name="doc number" :data-vv-scope="form1" />
                                    <span class="error-text text-danger" v-show="errors.has(form1+'.doc number')">{{ errors.first(form1+'.doc number') }}</span>
                                </vs-row>
                            </div>
                        <!--------- COLUMN TWO ----------->
                            <vs-col v-if="subGroupAccount == global.subGroupAccount.creditOrDebitCard" vs-lg="6" vs-xs="12" class="content-right">
                                <h4 style="margin-bottom:5px">Card Information</h4>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('transaction.cardType')}}</vs-row>
                                        <vs-row>
                                            <v-select class="w-full height250" id="form-select" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.card_bank" v-model="vTransaction.card_bank_code" v-validate="reqCard" name="card bank" :data-vv-scope="form1"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has(form1+'.card bank')">{{ errors.first(form1+'.card bank') }}</span>
                                        </vs-row>
                                    </div>
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>.</vs-row>
                                        <vs-row>
                                            <v-select id="form-select" :clearable="false" :reduce="value => value.code" label="name" class="w-full" :options="dataLookup.card_type" v-model="vTransaction.card_type_code" v-validate="reqCard" name="card type" :data-vv-scope="form1">
                                            </v-select>
                                            <span class="error-text text-danger" v-show="errors.has(form1+'.card type')">{{ errors.first(form1+'.card type') }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-input :label="$t('transaction.cardNumber')" class="w-full" v-model="vTransaction.card_number" :maxLength="50"/>

                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-input :label="$t('transaction.cardHolder')" class="w-full md:w-1/2" v-model="vTransaction.holder" :maxLength="50"/>

                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{ $t('transaction.expirationDate') }}</vs-row>
                                        <vs-row>
                                            <vs-col vs-lg="6">
                                                <v-select id="expDate" placeholder="MM" :clearable="false" class="w-full height200" :options="global.mt" v-model="vTransaction.exp_month"></v-select>
                                            </vs-col>
                                            <vs-col vs-lg="6">
                                                <v-select id="expDate" placeholder="YY" :clearable="false" class="w-full height200" :options="global.yr" v-model="vTransaction.exp_year"></v-select>
                                            </vs-col>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <input-number class="w-full md:w-1/2" @input="getTotalAmount" :label="$t('transaction.charge') +' (%)'" v-model="vTransaction.charge_percent" :description="errors.first(form1+'.amount') || dbErrors.quantity | toString" v-validate="'required'" name="amount" :data-vv-scope="form1" />
                                    <input-number disabled class="w-full md:w-1/2" label="." v-model="vTransaction.charge_amount" :description="errors.first(form1+'.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" :data-vv-scope="form1" />
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <input-number disabled class="w-full" :label="$t('transaction.totalAmount')" v-model="vTransaction.total_amount" :description="errors.first(form1+'.amount') || dbErrors.quantity | toString" v-validate="'required'" name="amount" :data-vv-scope="form1" />
                                </vs-row>
                            </vs-col>
                        </vs-row>
                    </div>
                </div>
            </template>
        </dialog-prompt>
            <!--------- END POPUP DEPOSIT----------->
        <vs-prompt buttons-hidden class="payment-option" :active.sync="showPaymentOption" :title="$t('transaction.title.paymentOption')">
            <div class="box">
                <vs-row id="row1" vs-type="flex" vs-justify="flex-start">
                    <vs-col class="button1" id="cash" vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                        <vs-button :disabled="btnPaymentOptionDisabled || !userAccess.cash" class="w-full" type="border" color="success" @click="showForm([global.subGroupAccount.cashPayment], global.groupAccount.payment, $t('transaction.title.cashPayment'))"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/cash_icon24.png"/>{{$t('button.cash')}}</vs-button>
                    </vs-col>
                    <vs-col class="button2" id="card" vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                        <vs-button :disabled="btnPaymentOptionDisabled || !userAccess.card" class="w-full" type="border" @click="showForm([global.subGroupAccount.creditOrDebitCard], global.groupAccount.payment, $t('transaction.title.creditOrDebitCardPayment'))"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/card_icon24.png"/>{{$t('button.card')}}</vs-button>
                    </vs-col>
                </vs-row>
                <vs-row id="row2" vs-type="flex" vs-justify="flex-start">
                    <vs-col class="button3" id="direct-bill" vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                        <vs-button :disabled="btnPaymentOptionDisabled || !userAccess.directBill" class="w-full" type="border" @click="showForm([global.subGroupAccount.accountReceiveable], global.groupAccount.payment, $t('transaction.title.directBillPayment'))"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/direct_bill_icon24.png"/>{{$t('button.directBill')}}</vs-button>
                    </vs-col>
                    <vs-col class="button4" id="other-payment" vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                        <vs-button :disabled="btnPaymentOptionDisabled || !userAccess.otherPayment" class="w-full" type="border" @click="showForm([global.subGroupAccount.otherPayment,global.subGroupAccount.bankTransfer,], global.groupAccount.payment, $t('transaction.title.otherPayment'))"><img class="mr-1" border="0" width="16" height="16" src="/images/icons/other_payment_icon24.png"/>{{$t('button.otherPayment')}}</vs-button>
                    </vs-col>
                </vs-row>
            </div>
        </vs-prompt>
        <!-- START TRANSFER FORM -->
        <dialog-prompt button1
            :button2="activeTab == 2"
            scrollOff
            :title="$t('transaction.title.transferTransaction')"
            :width="800"
            :active="showTransferForm"
            :idButton1="'btn-transfer'"
            :idButton2="'btn-return'"
            :iconButton1="activeTab == 2 ? 'delete' : 'save'"
            :iconButton2="activeTab == 2 ? 'delete' : 'save'"
            :buttonDisabled1="btnSaveTransfer1"
            :buttonDisabled2="btnSaveTransfer2"
            :textButton1="activeTab == 3 ? $t('button.processReturn') : (activeTab == 1 ? $t('button.processTransfer') : $t('button.removeSelectedRouting'))"
            :textButton2="$t('button.removeRouting')"
            @button1="activeTab == 3 ? handleReturnTransfer() : (activeTab == 1 ? handleProcessTransfer() : handleRemoveRouting(2))"
            @button2="handleRemoveRouting(1)"
            @close="val=>showTransferForm = val">
            <template #body>
                <div>
                    <vs-tabs class="form-content">
                        <vs-tab id="transfer" @click="activeTab = 1" :label="$t('transaction.transfer')">
                            <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                <vs-radio v-model="tfType" vs-value="account">
                                    {{ $t('transaction.transferAccount') }}
                                </vs-radio>
                                <vs-radio v-model="tfType" vs-value="balance">
                                    {{ $t('transaction.transferBalance') }}
                                </vs-radio>
                                <vx-card>
                                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                                        <vs-col class="wrap-form-select" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-xs="12">
                                            <label>{{ $t('transaction.transferTo')+':' }}</label>
                                        </vs-col>
                                        <vs-col class="wrap-form-select" vs-lg="3" vs-xs="12">
                                            <label>{{ $t('transaction.folioType') }}</label>
                                            <vs-row>
                                                <v-select :disabled="vTransfer.option == global.transfer.combineAll && tfType == 'account'" @input="getFolioList()" :clearable="false" :reduce="value => value.code" label="name" class="w-full height200" :options="folioType" v-model="tfFolioType" v-validate="(vTransfer.option > 1 && tfType == 'account') || tfType == 'balance' ? 'required' : ''" name="folio type" data-vv-scope="transfer"/>
                                                <span class="error-text text-danger" v-show="errors.has('transfer.folio type')">{{ errors.first('transfer.folio type') }}</span>
                                            </vs-row>
                                        </vs-col>
                                        <vs-col class="wrap-form-select" vs-lg="5" vs-xs="12">
                                            <label>{{ $t('transaction.folio') }}</label>
                                            <vs-row>
                                                <v-select :disabled="vTransfer.option == global.transfer.combineAll && tfType == 'account'" :clearable="false" :resetOnOptionsChange="true" :reduce="value => value.number" label="folio" class="w-full height200" :options="listFolio" v-model="vTransfer.folio_number_to" v-validate="(vTransfer.option > 1 && tfType == 'account') || tfType == 'balance' ? 'required' : ''" name="folio" data-vv-scope="transfer"/>
                                                <span class="error-text text-danger" v-show="errors.has('transfer.folio')">{{ errors.first('transfer.folio') }}</span>
                                            </vs-row>
                                        </vs-col>
                                        <vs-col class="wrap-form-select" vs-lg="2" vs-xs="12">
                                            <label>{{ $t('transaction.subFolio') }}</label>
                                            <vs-row>
                                                <v-select :clearable="false" class="sub-folio w-full" :options="global.subFolioGroup" v-model="vTransfer.group_code" v-validate="'required'" name="sub folio" data-vv-scope="transfer"/>
                                                <span class="error-text text-danger" v-show="errors.has('transfer.sub folio')">{{ errors.first('transfer.sub folio') }}</span>
                                            </vs-row>
                                        </vs-col>
                                    </vs-row>
                                    <vs-divider>{{ $t('transaction.transaction') }}</vs-divider>
                                    <div v-if="tfType == 'account'">
                                        <vs-row>
                                            <vs-radio @input="$refs.tableAccount.deselectAll();$validator.reset(); disabledFolioList = true" v-model="vTransfer.option" :vs-value="global.transfer.combineAll">
                                                {{ $t('transaction.combineAllSubFolio') }}
                                            </vs-radio>
                                        </vs-row>
                                        <vs-row>
                                            <vs-radio @input="$refs.tableAccount.selectAll();$validator.reset()" v-model="vTransfer.option" :vs-value="global.transfer.transferAll">
                                            {{ $t('transaction.moveAllTransaction') }}
                                            </vs-radio>
                                        </vs-row>
                                        <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                                            <vs-radio @input="$refs.tableAccount.deselectAll();$validator.reset()" v-model="vTransfer.option" :vs-value="global.transfer.transferSelected">
                                                {{ $t('transaction.moveSelectedTransaction') }}
                                            </vs-radio>
                                        </vs-row>
                                        <transfer-account ref="tableAccount" :data="listTransferTransaction" @selected="result => selectedAccount = result"></transfer-account>
                                    </div>
                                    <div v-else>
                                        <vs-row>
                                            <vs-radio :disabled="!(balanceData.debit > 0)" @change="handleChangeRadioChargeDeposit" v-model="tfBalance" vs-value="charge"> {{ $t('transaction.charge')}} </vs-radio>
                                        </vs-row>
                                        <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                                            <vs-radio :disabled="!(balanceData.credit > 0)" @change="handleChangeRadioChargeDeposit" v-model="tfBalance" vs-value="deposit"> {{ $t('transaction.deposit')}} </vs-radio>
                                        </vs-row>
                                        <vs-row>
                                            <input-number :disabled="!(balanceData.credit > 0) && !(balanceData.debit > 0)" class="w-full md:w-1/2" :label="$t('transaction.amountOfBalance')" v-model="vTransfer.amount"/>
                                        </vs-row>
                                    </div>
                                </vx-card>
                            </VuePerfectScrollbar>
                        </vs-tab>
                        <vs-tab @click="activeTab = 2" :label="$t('transaction.automaticRouting')">
                            <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                <vx-card>
                                    <vs-row>
                                        <vs-col class="wrap-form-select" vs-lg="5" vs-xs="12">
                                            <label>{{ $t('transaction.account') }}</label>
                                            <vs-row>
                                                <v-select :clearable="false" :reduce="value => value.code" label="name" class="w-full height200" :options="accounts" v-model="vRouting.account_code" v-validate="'required'" name="account" data-vv-scope="routing"/>
                                                <span class="error-text text-danger" v-show="errors.has('routing.account')">{{ errors.first('routing.account') }}</span>
                                            </vs-row>
                                        </vs-col>
                                    </vs-row>
                                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                                        <vs-col class="wrap-form-select" vs-lg="3" vs-xs="12">
                                            <label>{{ $t('transaction.folioType') }}</label>
                                            <vs-row>
                                                <v-select @input="getFolioList()" :clearable="false" :reduce="value => value.code" label="name" class="w-full height200" :options="folioType" v-model="tfFolioType" v-validate="'required'" name="folio type" data-vv-scope="routing"/>
                                                <span class="error-text text-danger" v-show="errors.has('routing.folio type')">{{ errors.first('routing.folio type') }}</span>
                                            </vs-row>
                                        </vs-col>
                                        <vs-col class="wrap-form-select" vs-lg="6" vs-xs="12">
                                            <label>{{ $t('transaction.folio') }}</label>
                                            <vs-row>
                                                <v-select :clearable="false" :resetOnOptionsChange="true" :reduce="value => value.number" label="folio" class="w-full height200" :options="listFolio" v-model="vRouting.folio_transfer" v-validate="'required'" name="folio" data-vv-scope="routing"/>
                                                <span class="error-text text-danger" v-show="errors.has('routing.folio')">{{ errors.first('routing.folio') }}</span>
                                            </vs-row>
                                        </vs-col>
                                        <vs-col class="wrap-form-select" vs-lg="2" vs-xs="12">
                                            <label>{{ $t('transaction.subFolio') }}</label>
                                            <vs-row>
                                                <v-select :clearable="false" class="sub-folio w-full" :options="global.subFolioGroup" v-model="vRouting.sub_folio" v-validate="'required'" name="sub folio" data-vv-scope="routing"/>
                                                <span class="error-text text-danger" v-show="errors.has('routing.sub folio')">{{ errors.first('routing.sub folio') }}</span>
                                            </vs-row>
                                        </vs-col>
                                        <vs-col class="wrap-form-select" vs-lg="1" vs-xs="12">
                                            <vs-button id="btn-add-routing" class="w-full btn-bottom vs-con-loading__container" icon="add" color="success" @click="handleInsertRouting()"></vs-button>
                                        </vs-col>
                                    </vs-row>
                                    <automatic-routing :data="listRouting" @selected="value=>vRouting.selected = value"></automatic-routing>
                                </vx-card>
                            </VuePerfectScrollbar>
                        </vs-tab>
                        <vs-tab  @click="activeTab = 3" :label="$t('transaction.returnTransfer')">
                            <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                <vx-card>
                                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                                        <vs-col class="wrap-form-select" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-xs="12">
                                            <label>{{ $t('transaction.returnTo')+':' }}</label>
                                        </vs-col>
                                        <vs-col class="wrap-form-select" vs-lg="2" vs-xs="12">
                                            <label>{{ $t('transaction.subFolio') }}</label>
                                            <vs-row>
                                                <v-select :clearable="false" class="sub-folio w-full" :options="global.subFolioGroup" v-model="vReturn.sub_folio" v-validate="'required'" name="sub folio" data-vv-scope="return"/>
                                                <span class="error-text text-danger" v-show="errors.has('return.sub folio')">{{ errors.first('return.sub folio') }}</span>
                                            </vs-row>
                                        </vs-col>
                                    </vs-row>
                                        <return-transfer :data="listReturnTransfer" @selected="value=>vReturn.selected = value"></return-transfer>
                                        <vs-divider>{{ $t('transaction.option') }}</vs-divider>
                                        <vs-row>
                                            <vs-radio v-model="vReturn.type" vs-value="1">
                                                {{ $t('transaction.returnTransaction') }}
                                            </vs-radio>
                                        </vs-row>
                                        <vs-row>
                                            <vs-radio v-model="vReturn.type" vs-value="2">
                                                {{ $t('transaction.removeAutoRouting') }}
                                            </vs-radio>
                                        </vs-row>
                                        <vs-row>
                                            <vs-radio v-model="vReturn.type" vs-value="3">
                                                {{ $t('transaction.removeTransactionAndAutoRouting') }}
                                            </vs-radio>
                                        </vs-row>
                                </vx-card>
                            </VuePerfectScrollbar>
                        </vs-tab>
                    </vs-tabs>
                </div>
            </template>
        </dialog-prompt>
        <!-- PACKAGE -->
         <dialog-prompt
            button1
            :title="''"
            :width="600"
            :active="modalPackage"
            :idButton1="'button-save-package-form'"
            :buttonDisabled1="btnPakcageDisabled"
            @button1="handleSavePackage"
            @close="val=>modalPackage = val">
            <template #body>
                <div ref="form">
                    <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                        <div class="wrap-form-select w-full required">
                            <vs-row><label>{{$t('transaction.businessSource')}}</label></vs-row>
                            <vs-row>
                                <v-select class="w-full" id="form-select" label="name" @input="getPackageLookup()" :reduce="val => val.code" :options="dlPackage.business_source" v-model="vPackage.business_source_code"/>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                        <div class="wrap-form-select w-full md:w-1/2 required">
                            <vs-row><label>{{$t('transaction.commissionType')}}</label></vs-row>
                            <vs-row>
                                <v-select class="w-full" id="form-select" label="name" :reduce="val => val.code" :options="dlPackage.commission_type" v-model="vPackage.commission_type_code"/>
                            </vs-row>
                        </div>
                        <div class="wrap-form-select w-full md:w-1/2 required">
                            <vs-row>
                                <input-number class="w-full" :label="$t('transaction.commissionValue')" v-model="vPackage.commission_value" />
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                        <div class="wrap-form-select w-full md:w-1/2 required">
                            <vs-row><label>{{$t('transaction.account')}}</label></vs-row>
                            <vs-row>
                                <vs-input disabled class="w-full" id="form-select" v-model="vPackage.account"/>
                            </vs-row>
                        </div>
                        <div class="wrap-form-select w-full md:w-1/2 required">
                            <vs-row><label>{{$t('transaction.package')}}</label></vs-row>
                            <vs-row>
                                <v-select class="w-full" id="form-select" label="name" @input="handleChangePackage" :resetOnOptionsChange="true" :options="dlPackage.package" v-model="vPackage.package" v-validate="'required'" name="package" data-vv-scope="package"/>
                                <span class="error-text text-danger" v-show="errors.has('package.package')">{{ errors.first('package.package') }}</span>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row vs-type="flex" :class="global.formConfig.rowMarginBottom" vs-justify="space-around">
                        <vs-input-number class="number-input md:w-4/12" :label="$t('transaction.adult')" v-model="vPackage.adult" min="1" v-validate="'required'" name="adult" data-vv-scope="package"/>
                        <span class="error-text text-danger" v-show="errors.has('package.adult')">{{ errors.first('package.adult') }}</span>
                        <vs-input-number class="number-input md:w-4/12" :label="$t('transaction.child')" v-model="vPackage.child" min="1" />
                    </vs-row>
                    <vs-row vs-type="flex" :class="global.formConfig.rowMarginBottom" vs-justify="space-around">
                        <input-number disabled class="w-full md:w-4/12" :label="$t('transaction.quantity')" v-model="vPackage.quantity" />
                        <input-number disabled class="w-full md:w-4/12" :label="$t('transaction.amount')" v-model="vPackage.amount" />
                    </vs-row>
                    <vs-divider>{{$t('transaction.breakdown')}}</vs-divider>
                    <package-breakdown :data="packageBreakdownData"/>
                </div>
            </template>
        </dialog-prompt>

        <!-- END TRANSFER FORM -->
        <!-- UPDATE REMARK/SUBDEPARTMENT/DOC NUMBER -->
            <update-transaction ref="updateType" :formType="global.formType.transaction" :isShowCorrectionOrProperties="isShowProperties" @refreshData="getTransactionList"/>
        <!-- PROPERTIES -->
            <properties ref="properties"/>

    <!-----------start need setting manual---------------->
        <!-- CORRECTION -->
        <vs-prompt
            @cancel="newCorrectionValue=0"
            @accept="correctionData"
            :title="$t('transaction.correction')"
            :active.sync="correctionPrompt">
            <div class="con-exemple-prompt">
                <input-number disabled :label="$t('transaction.correctionAmountBefore')" class="w-full" v-model="oldCorrectionValue"/>
                <input-number :label="$t('transaction.correctionAmountAfter')" class="w-full" v-model="newCorrectionValue"/>
            </div>
        </vs-prompt>
        <!-- ADVANCED CORRECTION -->
        <advanced-correction ref="advancedCorrection" @refreshData="getTransactionList"/>

    <!--------- START PROMPT CREDENTIAL----------->
         <credential :value="credential"
            :specialAccessType="specialAccessType"
            :activeCredential="activeCredentialPrompt"
            :isCredential="isCredential"
            :isReason="true"
            :title="credentialTitle"
            @update:active-credential="val=>activeCredentialPrompt = val"
            @acceptReason="acceptReason"
            @input="(newValue)=>{ credential = newValue }"/>
    <!--------- END PROMPT CREDENTIAL----------->
<!-----------end need setting manual---------------->
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_transaction';
import Tracking from '@/views/pages/components/Tracking.vue';
import Credential from '@/views/pages/components/Credential';
import InputNumber from '@/views/pages/components/Number';
import UpdateTransaction from '@/views/pages/components/transaction/components/UpdateDialog'
import Properties from '@/views/pages/components/transaction/components/Properties'
import CheckListRenderer from '@/views/pages/components/ag_grid-framework/checklist'
import StatusbarTotalRenderer from '@/views/pages/components/ag_grid-framework/statusbar_total'
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import GuestInHouseResource from '@/api/guestinhouse/guestInHouse';
import TransactionResource from '@/api/transaction';
import UserSettingResource from '@/api/tools/user-setting/userSetting.js';
import TrackingDataResource from '@/api/trackingData';
import { generateIconContextMenuAgGrid, rowSelectedAfterRefresh } from '@/utils/general.js';

import VuePerfectScrollbar from 'vue-perfect-scrollbar';

// ------for format----- //
import { formatNumber, formatNumberValue, formatDate, formatDateTime } from '@/utils/format.js';
import TransferAccount from './transfer/account/TransferAccount';
import ReturnTransfer from './transfer/return/ReturnTransfer';
import AutomaticRouting from './transfer/routing/AutomaticRouting';
import InformationHeader from './components/InformationHeader';
import InformationFooter from './components/InformationFooter';
import NavigationHeader from './components/NavigationHeader';
import FilterHeader from './components/FilterHeader';
import PackageBreakdown from './components/PackageBreakdown';
import AdvancedCorrection from './components/AdvancedCorrection'

const guestInHouseResource = new GuestInHouseResource();
const transactionResource = new TransactionResource();
const userSettingResource = new UserSettingResource();
const trackingDataResource = new TrackingDataResource();
// <!------------------end additional element---------------------->
export default {
    name: 'Transaction',

    props: {
        titleForm: String,
        routeApi: String,
        mainTableName: String,
        stayInformations: Object,
        folioNumber: String,
        isDayendClose: Boolean,
        isCheckOut: Boolean,
        form: String,
    },

    components: {
        AgGridVue,
        InformationHeader,
        InformationFooter,
        NavigationHeader,
        FilterHeader,
        Credential,
        VuePerfectScrollbar,
        Tracking,
        InputNumber,
        TransferAccount,
        ReturnTransfer,
        AutomaticRouting,
        UpdateTransaction,
        Properties,
        PackageBreakdown,
        AdvancedCorrection
    },

    data() {
        return {
            // Ag-Grid
            columnDefs: null,
            rowData: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            statusBar: null,
            sideBar: null,
            paginationPageSize: null,
            rowSelection: null,
            rowClassRules: null,
            dataTracking: null,
            // Parameter From Child
            idData: '',
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataValueTracking: 0,
            modeChildValue: '',
            // data error handling from laravel validation//
            dbErrors: {},
            // ------------------need setting manual-----------------//
            searchOption: [
                { code: 'sub_folio.id_log', name: this.$t('common.filter.id') },
                { code: 'guest_detail.room_number', name: this.$t('common.filter.roomNumber') },
                { code: 'cfg_init_account.name', name: this.$t('common.filter.account') },
                { code: 'company.name', name: this.$t('common.filter.company') },
                { code: 'sub_folio.remark', name: this.$t('common.filter.remark') },
                { code: 'sub_folio.document_number', name: this.$t('common.filter.docNumber') },
                { code: 'sub_folio.voucher_number', name: this.$t('common.filter.voucherNumber') },
                { code: 'cfg_init_sub_department.name', name: this.$t('common.filter.subDepartment') },
                { code: 'sub_folio.ref_number', name: this.$t('common.filter.refNumber') },
                { code: 'sub_folio.insert_by', name: this.$t('common.filter.insertBy') },
                { code: 'sub_folio.void_by', name: this.$t('common.filter.voidBy') },
                { code: 'sub_folio.void_reason', name: this.$t('common.filter.voidReason') },
                { code: 'sub_folio.user_id', name: this.$t('common.filter.lastUpdate') },
            ],
            searchDefault: 'sub_folio.id_log',
            // ------CREDENTIAL-------//
            specialAccessType: 1000,
            userValidation: false,
            activeCredentialPrompt: false,
            activeCredentialReasonPrompt: false,
            credentialTitle: '',
            isCredential: true,
            credential: {
                user: '',
                pass: '',
                reason: '',
            },
            reasonTypeValue: '',
            resvStatus: '',
            paramsData: '',
            idLog: '',
            reqDocNumber: '',
            reqDirectBill: '',
            reqCard: '',
            reqTransfer: '',
            search: {
                searchBy: 'sub_folio.id_log',
                keyword: '',
                limit: 1000,
                subFolio: 'All',
                possession: '',
                transfered: '',
                void: '',
                correction: '',
            },
            vTransaction: {},
            vDirectBill: null,
            vOutstanding: 0,
            vArLimit: 0,
            listTransferTransaction: [],
            listTransaction: [],
            listFolio: [],
            listReturnTransfer: [],
            balanceData: {
                debit: 0,
                credit: 0,
                balance: 0,
            },
            balanceAmount: {},
            showInputForm: false,
            showPaymentOption: false,
            showTransferForm: false,
            showAdvancedCorrection: false,
            isRefund: false,
            resetOptionsChange: false,
            titleInputForm: '',
            form1: 'form1',

            accounts: [],
            dataLookup: {},
            account: {
                code: '',
            },
            folioType: [],
            subGroupAccount: '',
            groupAccount: '',

            activeTab: 1,
            tfType: null,
            tfBalance: '',
            tfAccount: 'subFolio',
            tfFolioType: '',
            vReturn: {},
            vTransfer: {
                option: 1,
            },
            vRouting: {},
            disabledFolioList: false,
            selectedAccount: null,
            listRouting: [],
            nFolioType: '', // folio type of folio number
            isFolioOpen: false,
            oldCorrectionValue: 0,
            newCorrectionValue: 0,
            correctionPrompt: false,
            sidebarOption: false,
            btnPaymentOptionDisabled: false,
            btnSaveDisabled: false,
            btnSaveTransfer1: false,
            btnSaveTransfer2: false,

            isShowProperties: false,
            isAdvancedCorrection: false,

            userAccess: {
                charge: false,
                cash: false,
                card: false,
                directBill: false,
                updateDirectBill: false,
                cashRefund: false,
                otherPayment: false,
                void: false,
                correction: false,
                transfer: false,
                updateSubDepartment: false,
                updateRemark: false,
                updateDocumentNumber: false,
                checkOut: false,
                printFolio: false,
            },

            // Package
            dlPackage: [],
            packageBreakdownData: [],
            vPackage: {
                package:{},
            },
            modalPackage: false,
            btnPakcageDisabled: false,
            // ------------------end need setting manual-----------------//

        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightReservation,
        };
        this.rowClassRules = {
            correction: ' data && data.is_correction === "-1"',
            void: 'data && data.void === "-1"',
        };

        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, suppressMenu: true, resizable: false, filter: false, sortable: false, rowGroup: false, cellRenderer: 'actionGrid', colId: 'params', width: 100 },
            { headerName: this.$t('transaction.table.id'), field: 'id_log', width: 70 },
            { headerName: this.$t('transaction.table.auditDate'), field: 'audit_date', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('transaction.table.transferStatus'), field: 'transfer_status', width: 150 },
            { headerName: this.$t('transaction.table.roomNumber'), field: 'room_number', width: 90 },
            { headerName: this.$t('transaction.table.account'), field: 'account', width: 200 },
            { headerName: this.$t('transaction.table.debit'), field: 'debit', width: 160, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.credit'), field: 'credit', width: 160, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.currency'), field: 'currency_code', width: 100 },
            { headerName: this.$t('transaction.table.exchangeRate'), field: 'exchange_rate', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.debitForeign'), field: 'debitForeign', width: 160, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.creditForeign'), field: 'creditForeign', width: 160, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.remark'), field: 'remark', width: 300 },
            { headerName: this.$t('transaction.table.company'), field: 'company', width: 150 },
            { headerName: this.$t('transaction.table.docNumber'), field: 'document_number', width: 140 },{ headerName: this.$t('transaction.table.type'), field: 'type', width: 90 },
            { headerName: this.$t('transaction.table.remark'), field: 'remark', width: 150 },
            { headerName: this.$t('transaction.table.documentNumber'), field: 'document_number', width: 150 },
            { headerName: this.$t('transaction.table.subDepartment'), field: 'sub_department', width: 200 },
            { headerName: this.$t('transaction.table.void'), field: 'void', width: 90, cellStyle: { textAlign: 'center' }, cellRenderer: 'checkListRenderer', pinnedRowCellRenderer: 'statusBarTotal', pinnedRowCellRendererParams: { style: { display: 'none' }} },
            { headerName: this.$t('transaction.table.correction'), field: 'is_correction', width: 90, cellStyle: { textAlign: 'center' }, cellRenderer: 'checkListRenderer', pinnedRowCellRenderer: 'statusBarTotal', pinnedRowCellRendererParams: { style: { display: 'none' } } },
            { headerName: this.$t('transaction.table.refNumber'), field: 'ref_number', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.insertBy'), field: 'insert_by', width: 150 },
            { headerName: this.$t('transaction.table.voidDate'), field: 'void_date', width: 150, valueFormatter: formatDateTime, pinnedRowCellRenderer: 'statusBarTotal', },
            { headerName: this.$t('transaction.table.voidBy'), field: 'void_by', width: 150 },
            { headerName: this.$t('transaction.table.voidReason'), field: 'void_reason', width: 200 },
            { headerName: this.$t('transaction.table.insertBy'), field: 'insert_by', width: 110 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            checkListRenderer: CheckListRenderer,
            statusBarTotal: StatusbarTotalRenderer
        };
        this.rowGroupPanelShow = 'always';
        this.statusBar = {
            statusPanels: [
                { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
                { statusPanel: 'agTotalRowCountComponent', align: 'center' },
                { statusPanel: 'agFilteredRowCountComponent' },
                { statusPanel: 'agSelectedRowCountComponent' },
                { statusPanel: 'agAggregationComponent' },
            ],
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
        this.checkFolioNumber();
    },
    methods: {
        onGridReady() {
        },

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        // ------------------------additional for context menu ag-Grid-----------//
        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.charge'),
                    icon: generateIconContextMenuAgGrid('charge_icon24'),
                    disabled: !this.userAccess.charge,
                    action: () => this.showForm(null, this.global.groupAccount.charge, this.$t('transaction.title.charge')),
                },
                {
                    name: this.$t('common.contextMenu.package'),
                    icon: generateIconContextMenuAgGrid('package_icon24'),
                    disabled: !this.userAccess.charge,
                    action: () => this.handleShowPackage(),
                },
                {
                    name: this.$t('common.contextMenu.apTransaction'),
                    icon: generateIconContextMenuAgGrid('ap_transaction_icon24'),
                    disabled: !this.userAccess.charge,
                    action: () => this.showForm([this.global.subGroupAccount.accountPayable], this.global.groupAccount.charge, this.$t('transaction.title.apTransaction')),
                },
                {
                    name: this.$t('common.contextMenu.autoPostRoomCharge'),
                    icon: generateIconContextMenuAgGrid('autopost_icon24'),
                    disabled: !this.userAccess.charge,
                    action: () => this.handlePostingRoomCharge(),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.cashPayment'),
                    icon: generateIconContextMenuAgGrid('cash_icon24'),
                    disabled: !this.userAccess.cash,
                    action: () => this.showForm([this.global.subGroupAccount.cashPayment], this.global.groupAccount.payment, this.$t('transaction.title.cashPayment')),
                },
                {
                    name: this.$t('common.contextMenu.cashRefund'),
                    icon: generateIconContextMenuAgGrid('cash_refund_icon24'),
                    disabled: !this.userAccess.cashRefund,
                    action: () => this.showForm([this.global.subGroupAccount.cashPayment], this.global.groupAccount.payment, this.$t('transaction.title.cashRefund'), true),
                },
                {
                    name: this.$t('common.contextMenu.creditOrDebitCardPayment'),
                    icon: generateIconContextMenuAgGrid('card_icon24'),
                    disabled: !this.userAccess.card,
                    action: () => this.showForm([this.global.subGroupAccount.creditOrDebitCard], this.global.groupAccount.payment, this.$t('transaction.title.creditOrDebitCardPayment')),
                },
                {
                    name: this.$t('common.contextMenu.directBillPayment'),
                    icon: generateIconContextMenuAgGrid('direct_bill_icon24'),
                    disabled: !this.userAccess.directBill,
                    action: () => this.showForm([this.global.subGroupAccount.accountReceiveable], this.global.groupAccount.payment, this.$t('transaction.title.directBillPayment')),
                },
                {
                    name: this.$t('common.contextMenu.otherPayment'),
                    icon: generateIconContextMenuAgGrid('other_payment_icon24'),
                    disabled: !this.userAccess.otherPayment,
                    action: () => this.showForm([this.global.subGroupAccount.otherPayment, this.global.subGroupAccount.bankTransfer], this.global.groupAccount.payment, this.$t('transaction.title.otherPayment')),
                },
                {
                    name: this.$t('common.contextMenu.printReceipt'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintReceipt(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.move'),
                    disabled: !this.paramsData,
                    subMenu: [
                        {
                            name: `${this.$t('common.contextMenu.subFolio')} A`,
                            action: () => this.handleMoveSubFolioGroup('A'),
                        },
                        {
                            name: `${this.$t('common.contextMenu.subFolio')} B`,
                            action: () => this.handleMoveSubFolioGroup('B'),
                        },
                        {
                            name: `${this.$t('common.contextMenu.subFolio')} C`,
                            action: () => this.handleMoveSubFolioGroup('C'),
                        },
                        {
                            name: `${this.$t('common.contextMenu.subFolio')} D`,
                            action: () => this.handleMoveSubFolioGroup('D'),
                        },
                    ],
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.void'),
                    disabled: !this.paramsData || !this.userAccess.void,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleCorrectionVoid(this.paramsData, false, false),
                },
                {
                    name: this.$t('common.contextMenu.correction'),
                    disabled: !this.paramsData || !this.userAccess.correction,
                    icon: generateIconContextMenuAgGrid('correction_icon24'),
                    action: () => this.handleCorrectionVoid(this.paramsData, true, false),
                },
                {
                    name: this.$t('common.contextMenu.advancedCorrection'),
                    disabled: !this.paramsData || !this.userAccess.correction,
                    icon: generateIconContextMenuAgGrid('correction_icon24'),
                    action: () => this.handleCorrectionVoid(this.paramsData, true, true),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.properties'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('properties_icon24'),
                    action: () => this.handleShowProperties(this.paramsData.id_log),
                },
                {
                    name: this.$t('common.contextMenu.updateDirectBillOrCompany'),
                    disabled: (!this.paramsData || this.paramsData.sub_group_code !== this.global.subGroupAccount.accountReceiveable) || !this.userAccess.updateDirectBill,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.handleUpdateType(this.paramsData, 4),
                },
                {
                    name: this.$t('common.contextMenu.updateSubDepartment'),
                    disabled: !this.paramsData || !this.userAccess.updateSubDepartment,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.handleUpdateType(this.paramsData, 1),
                },
                {
                    name: this.$t('common.contextMenu.updateRemark'),
                    disabled: !this.paramsData || !this.userAccess.updateRemark,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.handleUpdateType(this.paramsData, 2),
                },
                {
                    name: this.$t('common.contextMenu.updateDocumentNumber'),
                    disabled: !this.paramsData || !this.userAccess.updateDocumentNumber,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.handleUpdateType(this.paramsData, 3),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.transfer'),
                    disabled: !this.userAccess.transfer,
                    icon: generateIconContextMenuAgGrid('transfer_icon24'),
                    action: () => this.handleTransfer(),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.checkOut'),
                    disabled: !this.userAccess.checkOut,
                    icon: generateIconContextMenuAgGrid('check_out_icon24'),
                    action: () => this.handleCheckOut(),
                },
                {
                    name: this.$t('common.contextMenu.printFolio'),
                    disabled: !this.userAccess.printFolio,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintFolio(),
                },
                {
                    name: this.$t('common.contextMenu.trackingData'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('tracking_icon24'),
                    action: () => this.showForm('', '', 'Tracking Data ID: ', '', this.global.modeData.tracking)
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            if (this.paramsData) {
                const vm = this;
                vm.gridApi.forEachNode((node) => {
                    if (node.data) {
                        if (node.data.id_log == vm.paramsData.id_log) {
                            node.setSelected(true, true);
                        }
                    }
                });
            }
        },

        checkFolioNumber() {
            if (this.stayInformations == undefined) {
                this.$router.go(-1);
            } else {
                this.getTransactionList();
                this.getFolioTypeStatusByNumber();
            }
        },
        // ------------------need setting manual for crud-----------------//
        async getFolioTypeStatusByNumber() {
            const params = { folio_number: this.stayInformations.number };
            const { data } = await transactionResource.getFolioType(params);
            this.nFolioType = data.type;
            this.isFolioOpen = data.status;
        },

        async getTransactionList() {
            this.search.folio_number = this.stayInformations.number;
            try {
                let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                const { data } = await transactionResource.list(this.search);
                this.listTransaction = data.data;
                this.balanceData = data.footer;
                this.$nextTick(() => {
                    rowSelectedAfterRefresh(this, selectedNodes, 'id_log');
                });
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async getBalance() {
            try {
                this.$loadingIndicator(this)
                const { data } = await transactionResource.balance({ q: this.stayInformations.number });
                this.balanceAmount = data.balance;
                this.balanceData = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async showForm(subGroupAccount, groupAccount, title, refund, modeData) {
            this.modeDataValue = modeData;
            if((subGroupAccount == this.global.subGroupAccount.cashPayment && this.userAccess.cash)
                || (subGroupAccount == this.global.subGroupAccount.creditOrDebitCard && this.userAccess.card)
                || (subGroupAccount == this.global.subGroupAccount.accountReceiveable && this.userAccess.directBill)
                || (subGroupAccount == this.global.subGroupAccount.otherPayment && this.userAccess.otherPayment)
                || (subGroupAccount == null && this.userAccess.charge)
                || (subGroupAccount == this.global.subGroupAccount.accountPayable && this.userAccess.charge)) {

                this.$loadingIndicator(this);
                this.btnPaymentOptionDisabled = true;
                this.resetTransaction(subGroupAccount);
                this.reqDocNumber = groupAccount == this.global.groupAccount.payment ? subGroupAccount == this.global.subGroupAccount.accountReceiveable || subGroupAccount == this.global.subGroupAccount.accountPayable ? '' : 'required' : '';
                this.reqDirectBill = subGroupAccount == this.global.subGroupAccount.accountReceiveable || subGroupAccount == this.global.subGroupAccount.accountPayable ? 'required' : '';
                this.reqCard = subGroupAccount == this.global.subGroupAccount.creditOrDebitCard ? 'required' : '';
                this.titleInputForm = title;
                this.isRefund = refund;
                this.groupAccount = groupAccount;
                this.subGroupAccount = subGroupAccount;
                this.getAccount(subGroupAccount, groupAccount);
                this.getExchangeRate();
                await this.getLookup();
                this.showPaymentOption = false;
                if (groupAccount === this.global.groupAccount.payment) {
                    await this.getBalance();
                    if (refund === true) {
                        this.vTransaction.remark = 'Refund';
                        this.vTransaction.isRefund = refund;
                        if (this.balanceAmount < 0) {
                            this.vTransaction.amount_foreign = -this.balanceAmount;
                        }
                    } else if (this.balanceAmount > 0) {
                        this.vTransaction.amount_foreign = this.balanceAmount;
                    }
                    this.getTotalAmount();
                }

                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.showInputForm = true;
            } else if(modeData == this.global.modeData.tracking) {
                this.titleInputForm = title + this.paramsData.id_log;
                this.trackingData(this.paramsData);
            }
        },

        searchData(params) {
            this.search = params;
            this.$loadingIndicator(this)
            this.getTransactionList();
        },

        handleCorrectionVoid(paramsData, isCorrection, isAdvancedCorrection) {
            this.isAdvancedCorrection = false;
            if((isCorrection && this.userAccess.correction) || (!isCorrection && this.userAccess.void)) {
                const transactionDate = paramsData.audit_date;
                if (isCorrection && transactionDate != this.auditDate) {
                    this.isAdvancedCorrection = isAdvancedCorrection;
                    if (paramsData.account_code == this.transferDepositReservationToFolio) {
                        $dialog.information(this.$t('message.cannotProcessTypeTransactionFromFolio'));
                        return;

                    }
                    this.showCredential(paramsData, isCorrection);
                } else if (!isCorrection && transactionDate == this.auditDate) {
                    if (paramsData.account_code == this.transferDepositReservationToFolio) {
                        $dialog.information(this.$t('message.cannotProcessTypeTransactionFromFolio'));
                        return;
                    }
                    this.showCredential(paramsData, isCorrection);
                } else {
                    this.cannotCorrectionVoidDialog(isCorrection);
                }
            }
        },

        cannotCorrectionVoidDialog(isCorrection) {
            const message = isCorrection ? this.$t('transaction.popup.cannotCorrection') : this.$t('transaction.popup.cannotVoid');
            this.$vs.dialog({
                color: 'warning',
                title: this.$t('message.informationTitle'),
                text: message,
                acceptText: this.$t('button.close'),
            });
        },

        async correctionVoid() {
            if(this.isAdvancedCorrection) {
                this.handleShowAdvancedCorrection();
            } else {
                const data = {
                    folioNumber: this.stayInformations.number,
                    isShowCorrection: this.$refs.filterHeader.vCorrection,
                    userId: this.global.userInfo.code,
                    userBy: this.credential.user,
                    reason: this.credential.reason,
                    idLog: this.idLog,
                };
                if (this.isCorrection) {
                    let amount = await this.getAmountBefore(this.idLog);
                    if (amount < 0) {
                        amount = -amount;
                    }
                    this.oldCorrectionValue = amount;
                    this.newCorrectionValue = amount;
                    this.correctionPrompt = true;
                } else {
                    await transactionResource.void(data);
                    this.getTransactionList();
                }
            }
        },

        // Advanced Correction
        handleShowAdvancedCorrection() {
            this.$refs.advancedCorrection.handleShowAdvancedCorrection(this.paramsData.id_log);
        },

        async getAmountBefore(id) {
            const { data } = await transactionResource.amountBefore({ idLog: id });
            return data;
        },

        async correctionData() {
            const data = {
                userId: this.global.userInfo.code,
                userBy: this.credential.user,
                reason: this.credential.reason,
                amount: this.newCorrectionValue,
                idLog: this.paramsData.id_log,
            };
            await transactionResource.correction(data);
            this.getTransactionList();
        },

        handleBackButton() {
            this.$loadingIndicator(this)
            this.$router.go(-1);
        },

        // -------------- CRUD TRANSFER-----------------//
        async handleTransfer() {
            if(this.userAccess.transfer) {
                this.$loadingIndicator(this);
                this.resetTransfer();

                await this.getTransferTransactionList();
                this.showTransferForm = true;
                this.getRoutingList();
                this.getFolioList();
                this.getReturnTransferList();
                this.getFolioType();
                this.groupAccount = this.global.groupAccount.charge;
                this.getAccount();

                this.tfType = '';
                this.tfAccount = '';
                this.tfFolioType = '';
                this.tfBalance = '';

                this.activeTab = 1;
                this.$nextTick(() => {
                    const eleTransfer = document.getElementById('transfer');
                    if (eleTransfer) eleTransfer.click();
                });
                this.tfType = 'account';
                this.tfAccount = 'subFolio';
                this.tfFolioType = '';
                this.tfBalance = !(this.balanceData.debit > 0) ? 'deposit' : 'charge';
                this.handleChangeRadioChargeDeposit();
            }
        },

        async getTransferTransactionList() {
            try {
                const { data } = await transactionResource.list({ folio_number: this.stayInformations.number });
                this.listTransferTransaction = data.data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        resetTransfer() {
            this.vTransfer = {
                folio_number_from: this.stayInformations.number,
                option: 1,
                room_number: this.stayInformations.room_number,
                folio_number_to: null,
                amount: 0,
                user_id: this.global.userInfo.code,
            };
            this.vRouting = {
                folio_number: this.stayInformations.number,
                folio_transfer: null,
                sub_folio: 'A',
                selected: [],
                user_id: this.global.userInfo.code,
            };
            this.vReturn = {
                folio_number: this.stayInformations.number,
                sub_folio: 'A',
                type: '1',
                selected: [],
                user_id: this.global.userInfo.code,
            };

            this.selectedAccount = null;
            this.search.subFolio = 'All';
            this.reqTransfer = 'required';
            this.$validator.pause();
            this.$nextTick(() => {
                this.$validator.errors.clear();
                this.$validator.fields.items.forEach((field) => field.reset());
                this.$validator.fields.items.forEach((field) => this.errors.remove(field));
                this.$validator.resume();
            });
        },

        handleChangeRadioChargeDeposit() {
            if (this.tfBalance == 'charge') {
                const bal = this.balanceData.debit - this.balanceData.credit;
                this.vTransfer.amount = bal > 0 ? this.balanceData.balance : 0;
            } else {
                const bal = this.balanceData.credit - this.balanceData.debit;
                this.vTransfer.amount = bal > 0 ? -this.balanceData.balance : 0;
            }
        },

        handleProcessTransfer() {
            this.$validator.validateAll('transfer').then((result) => {
                if (result) {
                    if (this.vTransfer.option == this.global.transfer.transferSelected && this.selectedAccount == 0 && this.tfType == 'account') {
                        $dialog.information(this.$t('message.selectTransaction'));
                    } else if (this.tfType == 'account') {
                        this.transferTransaction();
                    } else if (this.tfType == 'balance') {
                        this.transferBalance();
                    }
                }
            });
        },

        handleInsertRouting() {
            this.$validator.validateAll('routing').then((result) => {
                if (result) {
                    this.$vs.loading({ container: '#btn-add-routing', scale: this.global.scaleLoadingButton });
                    this.insertRouting();
                }
            });
        },

        handleRemoveRouting(status) {
            this.vRouting.remove = status;
            if (status == 2 && this.vRouting.selected <= 0) {
                $dialog.information(this.$t('message.selectAccount'));
            } else {
                this.removeRouting();
            }
        },

        handleReturnTransfer() {
            this.$validator.validateAll('return').then((result) => {
                if (result) {
                    if (this.vReturn.selected <= 0) {
                        $dialog.information(this.$t('message.selectFolio'));
                    } else {
                        this.$vs.loading({ container: '#btn-return', scale: this.global.scaleLoadingButton });
                        this.returnTransfer();
                    }
                }
            });
        },

        async getRoutingList() {
            const { data } = await transactionResource.listRouting({ folio_number: this.stayInformations.number });
            this.listRouting = data;
        },

        async getReturnTransferList() {
            const { data } = await transactionResource.listReturnTransfer({ q: this.stayInformations.number });
            this.listReturnTransfer = data;
        },

        async getFolioType() {
            const { data } = await transactionResource.folioType();
            this.folioType = data;
        },

        async getFolioList() {
            const params = { type: this.tfFolioType };
            const { data } = await transactionResource.listFolio(params);
            this.listFolio = data;
        },

        async transferTransaction() {
            this.vTransfer.selected_account = this.selectedAccount;
            this.$vs.loading({ container: '#btn-transfer', scale: this.global.scaleLoadingButton });
            try {
                await transactionResource.transferTransaction(this.vTransfer);
                this.$vs.loading.close('#btn-transfer>.con-vs-loading');
                this.showTransferForm = false;
                $alert.acceptAlertSucces();
            } catch (error) {
                $alert.errorSaveDataAlert();
                this.$vs.loading.close('#btn-transfer>.con-vs-loading');
            }
        },

        async transferBalance() {
            this.vTransfer.selected_account = this.selectedAccount;
            this.vTransfer.balance_type = this.tfBalance;
            this.$vs.loading({ container: '#btn-transfer', scale: this.global.scaleLoadingButton });
            try {
                this.btnSaveTransfer1 = true;
                const { data } = await transactionResource.transferBalance(this.vTransfer);
                if (data == 0) {
                    this.$vs.loading.close('#btn-transfer>.con-vs-loading');
                    this.showTransferForm = false;
                    this.btnSaveTransfer1 = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    this.btnSaveTransfer1 = false;
                    this.$vs.loading.close('#btn-transfer>.con-vs-loading');
                    $dialog.information(this.$t(`responseStatus.transferBalance.${data}`));
                }
            } catch (error) {
                $alert.errorSaveDataAlert();
                this.$vs.loading.close('#btn-transfer>.con-vs-loading');
            }
        },

        async insertRouting() {
            try {
                const { data } = await transactionResource.routing(this.vRouting);
                if (data.status == 'success') {
                    this.getRoutingList();
                    $alert.acceptAlertSucces();
                } else {
                    $alert.errorSaveDataAlert(data.status);
                }
                this.$vs.loading.close('#btn-add-routing>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#btn-add-routing>.con-vs-loading');
                $alert.errorSaveDataAlert();
            }
        },

        async removeRouting() {
            try {
                this.btnSaveTransfer1 = true;
                this.btnSaveTransfer2 = true;
                await transactionResource.removeRouting(this.vRouting);
                this.getRoutingList();
                this.btnSaveTransfer1 = false;
                this.btnSaveTransfer2 = false;
                this.showTransferForm = false;
                $alert.deleteAlertSuccess();
                this.$vs.loading.close('#btn-add-routing>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#btn-add-routing>.con-vs-loading');
                $alert.errorDeleteDataAlert();
            }
        },

        async returnTransfer() {
            try {
                this.btnSaveTransfer1 = true;
                await transactionResource.returnTransfer(this.vReturn);
                this.showTransferForm = false;
                this.btnSaveTransfer1 = false;
                $alert.acceptAlertSucces();
                this.$vs.loading.close('#btn-return>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#btn-return>.con-vs-loading');
                $alert.errorDeleteDataAlert();
            }
        },

        // -------------------- CRUD FOR DEPOSIT/CHARGE---------------------------//
        async getAccount(subGroupAccount, groupAccount) {
            const params = {
                group: this.groupAccount,
                sub_group: this.subGroupAccount,
                sub_department_code: this.vTransaction.sub_department_code,
                currency_code: this.vTransaction.currency_code,
            };
            try {
                const { data } = await transactionResource.account(params);
                this.accounts = data;
                setTimeout(() => { this.account = subGroupAccount === this.global.subGroupAccount.cashPayment ? this.accounts[0] : this.account; }, 100);
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getExchangeRate() {
            const params = {
                code: this.vTransaction.currency_code,
            };
            try {
                const { data } = await transactionResource.exchangeRate(params);
                this.resetOptionsChange = true;
                this.vTransaction.exchange_rate = data;
                this.vTransaction.amount = (this.vTransaction.amount_foreign * this.vTransaction.exchange_rate);
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getLookup() {
            try {
                const { data } = await transactionResource.lookup();
                this.dataLookup = data;
                this.$vs.loading.close('.popup-body>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        async trackingDeposit(val) {
            try {
                const { data } = await transactionResource.list(val.id_log);
                this.dataTracking = data.modelGrid;
                this.showInputForm = true;
                this.$vs.loading.close('.popup-body>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async insertPayment() {
            this.vTransaction.form = this.form;
            try {
                const { data } = await transactionResource.payment(this.vTransaction);
                if (data == 0) {
                    $alert.acceptAlertSucces();
                } else if (data > 0 && this.form == this.global.formType.guestInHouse) {
                    this.statusDialog(this.$t(`responseStatus.insertGuestInHouseTransaction.${data}`));
                } else if (data > 0 && this.form == this.global.formType.folioHistory) {
                    this.statusDialog(this.$t(`responseStatus.insertFolioHistoryTransaction.${data}`));
                }
                this.btnSaveDisabled = false
                this.showInputForm = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        async insertCharge() {
            try {
                this.vTransaction.form = this.form;
                const { data } = await transactionResource.charge(this.vTransaction);
                if (data == 0) {
                    $alert.acceptAlertSucces();
                } else if (data > 0 && this.form == this.global.formType.guestInHouse) {
                    this.statusDialog(this.$t(`responseStatus.insertGuestInHouseTransaction.${data}`));
                } else if (data > 0 && this.form == this.global.formType.folioHistory) {
                    this.statusDialog(this.$t(`responseStatus.insertFolioHistoryTransaction.${data}`));
                }
                this.btnSaveDisabled = false
                this.showInputForm = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorSaveDataAlert();
            }
        },

        statusDialog(text) {
            this.$vs.dialog({
                color: 'danger',
                title: this.$t('message.informationTitle'),
                text,
                acceptText: 'OK',
                accept: () => this.$router.go(-1),
            });
        },

        resetTransaction(subGroupAccount) {
            this.vTransaction = {
                folio_number: this.stayInformations.number,
                room_number: this.stayInformations.room_number,
                currency_code: this.defaultCurrency,
                default_currency_code: this.defaultCurrency,
                exchange_rate: 1,
                sub_department_code: this.sdFrontOffice,
                amount_foreign: 0,
                amount: 0,
                charge_percent: 0,
                charge_amount: 0,
                total_amount: 0,
                sub_folio: 'A',
                audit_date: this.auditDate,
                user_id: this.global.userInfo.code,
            };
            this.btnSaveDisabled = false;
            this.resetOptionsChange = false;
            this.account = subGroupAccount == this.global.subGroupAccount.cashPayment ? { code: '200', charge_percent: null, name: '200 - Cash' } : '';
            this.vDirectBill = null;
            this.isRefund = false;
            this.$validator.pause();
            this.$nextTick(() => {
                this.$validator.errors.clear();
                this.$validator.fields.items.forEach((field) => field.reset());
                this.$validator.fields.items.forEach((field) => this.errors.remove(field));
                this.$validator.resume();
            });
            this.dbErrors = {};
        },

        getTotalAmount() {
            const chargePercent = this.vTransaction.charge_percent >= 0 ? this.vTransaction.charge_percent : 0;
            this.vTransaction.amount = (this.vTransaction.amount_foreign * this.vTransaction.exchange_rate);
            this.vTransaction.charge_amount = (this.vTransaction.amount_foreign * chargePercent) / 100;
            this.vTransaction.total_amount = this.vTransaction.charge_amount + this.vTransaction.amount_foreign;
        },

        async handleSaveForm1() {
            this.$validator.validateAll(this.form1).then((result) => {
                if (result) {
                    if (this.isRefund === true && this.vTransaction.amount_foreign > this.balance) {
                        this.$vs.dialog({
                            color: 'danger',
                            title: this.$t('message.errorTitle'),
                            text: `${this.$t('message.maxRefund')} ${formatNumberValue(this.balance)}`,
                            accept: (() => {
                                this.vTransaction.amount_foreign = this.balance;
                                this.getTotalAmount();
                            }),
                        });
                        return;
                    }
                    this.btnSaveDisabled = true;
                    this.$loadingIndicator(this)
                    if (this.groupAccount === this.global.groupAccount.payment) {
                        this.insertPayment();
                    } else if (this.groupAccount === this.global.groupAccount.charge) {
                        this.insertCharge();
                    }
                } else {
                    this.showInputForm = true;
                }
            });
        },

        handlePostingRoomCharge() {
            if(this.userAccess.charge){
                $dialog.confirmation(this, 'autoPostingRoomCharge');
            }
        },

        async autoPostingRoomCharge() {
            const params = {
                folio_number: this.stayInformations.number,
                user_id: this.global.userInfo.code,
            };
            try {
                this.$loadingIndicator(this)
                const { data } = await guestInHouseResource.autoRoomCharge(params);
                if (data >= 0) {
                    $dialog.information(this.$t(`responseStatus.postingRoomCharge.${data}`));
                }
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.getTransactionList();
            } catch (error) {
                $alert.errorSaveDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },
        // ---------------------END CRUD DEPOSIT/CHARGE---------------------------//

        handleUpdateType(params, type) {
            if((type == 1 && this.userAccess.updateSubDepartment) || (type == 2 && this.userAccess.updateRemark) || (type == 3 && this.userAccess.updateDocumentNumber) || (type == 4 && this.userAccess.updateDirectBill)) {
                this.isShowProperties = false;
                this.$refs.updateType.handleUpdateType(params, type);
            }
        },

        handleShowProperties(idLog) {
            this.$refs.properties.handleShowProperties(idLog);
        },

        handleSidebarOption(data) {
            this.idLog = data.id_log;
            this.paramsData = data;
            this.sidebarOption = true;
        },

        async handleCheckOut() {
            if(this.userAccess.checkOut) {
                await this.getBalance();
                const balance = this.balanceAmount;
                if (balance == 'null' || balance == null) {
                    $dialog.confirmationW8Text(this.$t('message.checkOutWithoutTransaction'), this, 'checkOut');
                } else if (balance < 0 || balance > 0) {
                    $dialog.information(this.$t('message.cannotCheckFolioUnbalance'));
                } else if (balance == 0) {
                    $dialog.confirmation(this, 'checkOut');
                }
            }
        },

        async checkOut() {
            const params = {
                number: this.stayInformations.number,
                user_id: this.global.userInfo.code,
            };

            this.$loadingIndicator(this)
            const { data } = await guestInHouseResource.checkOut(params);
            if (data.value === 0) {
                $alert.acceptAlertSuccesWithText(this.$t('responseStatus.checkOut.0'));
                this.$router.go(-1);
            } else if (data.value > 0) {
                $dialog.information(`${this.$t(`responseStatus.checkOut.${data.value}`)}\n${data.message}`);
            }
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        async handleMoveSubFolioGroup(groupCode) {
            const params = {
                folio_number: this.stayInformations.number,
                correction_breakdown: this.paramsData.correction_breakdown,
                group_code: groupCode,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            const { data } = await transactionResource.moveSubFolioGroup(params);
            this.searchData(this.search);
        },

        // PRINT
        handlePrintFolio() {
            if(this.userAccess.printFolio) {
                const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.folio}&folioNumber=${this.stayInformations.number}&template=${this.global.stimulsoftReportFileDirectory.folio}` });
                window.open(newTabReport.href, '_blank');
            }
        },

        handlePrint(id, reportDirectory) {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.receiptFolio}&subFolioId=${id}&template=${reportDirectory}` });
            window.open(newTabReport.href, '_blank');
        },

        handlePrintReceipt(paramsData) {
            if (paramsData !== undefined) {
                if (paramsData.isPayment == '-1') {
                    this.handlePrint(paramsData.id_log, this.global.stimulsoftReportFileDirectory.receiptFolio);
                } else if (paramsData.isPayment == '0') {
                    this.handlePrint(paramsData.id_log, this.global.stimulsoftReportFileDirectory.receiptFolioRefund);
                }
            }
        },
        // Package
        async handleShowPackage() {
            this.resetPackage();
            await this.getPackageLookup();
            this.modalPackage = true;
        },

        handleSavePackage() {
            this.$validator.validateAll('package').then((result)=> {
                if(result) {
                    this.insertPackage();
                }
            });
        },

        async insertPackage() {
            const params = {
                room_number: this.stayInformations.room_number,
                package_code: this.vPackage.package.code,
                folio_number: this.stayInformations.number,
                commission_value: this.vPackage.commission_value,
                commission_type_code: this.vPackage.commission_type_code,
                business_source_code: this.vPackage.business_source_code,
                adult: this.vPackage.adult,
                child: this.vPackage.child,
                sub_folio: (this.$refs.filterHeader.vSubFolio == 'All' ? 'A' : this.$refs.filterHeader.vSubFolio) || 'A',
                user_id: this.global.userInfo.code,
            };
            try {
                this.$loadingIndicator(this);
                const { data } = await transactionResource.insertPackage(params);
                await this.searchData(this.search);
                this.$closeLoadingIndicator(this);
                this.modalPackage = false;
                if(data == 0) {
                    $alert.acceptAlertSucces();
                } else if( data > 0) {
                    $dialog.information(this.$t(`responseStatus.insertPackage.${data}`));
                }
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }

        },

        handleChangePackage() {
            if(this.vPackage.package) {
                this.getPackageBreakdown();
                if(this.vPackage.business_source_code) {
                    this.vPackage.commission_type_code = this.vPackage.package.commission_type_code;
                    this.vPackage.commission_value = this.vPackage.package.commission_value;
                    this.vPackage.account = this.vPackage.package.account;
                }
                this.vPackage.quantity = this.vPackage.package.quantity;
                this.vPackage.amount = this.vPackage.package.amount;
            } else {
                this.packageBreakdownData = [];
                this.vPackage.quantity = 0;
                this.vPackage.amount = '';
                this.vPackage.commission_type_code = '';
                this.vPackage.commission_value = '';
                this.vPackage.account = '';
            }
        },

        resetPackage() {
            this.vPackage = {
                business_source_code: '',
                commission_type_code: '',
                commission_value: 0,
                account_code: '',
                quantity: 0,
                package: '',
                adult: 1,
                child: 0,
                amount: 0,
                user_id: this.global.userInfo.code,
            };
        },

        async getPackageBreakdown() {
            const { data } = await transactionResource.packageBreakdown(this.vPackage.package.code);
            this.packageBreakdownData = data;
        },

        async getPackageLookup() {
            const params = {
                business_source_code: this.vPackage.business_source_code || '',
            };
            const { data } = await transactionResource.packageLookup(params);
            this.dlPackage = data;
        },

        // ------------------end need setting manual for crud-----------------//
        // --------------------CREDENTIAL----------------------------------------//
        showCredential(val, isCorrection) {
            this.resetCredential();
            this.paramsData = val;
            this.isCorrection = isCorrection;
            this.activeCredentialPrompt = true;
            this.isCredential = true;
            this.idLog = val.id_log;
            this.credentialTitle = isCorrection ? this.$t('transaction.title.correction') : this.$t('transaction.title.void');
            this.specialAccessType = isCorrection ? this.global.accessSpecialOrder.correctSubFolio : this.global.accessSpecialOrder.voidSubFolio;
        },

        acceptReason() {
            this.correctionVoid();
        },

        resetCredential() {
            this.credential = {
                user: '',
                pass: '',
                reason: '',
            };
        },

        async getFolioAccess() {
            const { data } = await userSettingResource.getOtherAccess({ code: this.global.userInfo.code });
            if (data.otherAccess != undefined && data.otherAccess != null && data.otherAccess != '') {
                this.userAccess.charge = data.otherAccess[this.global.otherAccessOrder.chargeTransaction] == 1;
                this.userAccess.cash = data.otherAccess[this.global.otherAccessOrder.cashTransaction] == 1;
                this.userAccess.card = data.otherAccess[this.global.otherAccessOrder.cardTransaction] == 1;
                this.userAccess.directBill = data.otherAccess[this.global.otherAccessOrder.directBillTransaction] == 1;
                this.userAccess.updateDirectBill = data.otherAccess[this.global.otherAccessOrder.updateDirectBillTransaction] == 1;
                this.userAccess.cashRefund = data.otherAccess[this.global.otherAccessOrder.cashRefundTransaction] == 1;
                this.userAccess.otherPayment = data.otherAccess[this.global.otherAccessOrder.otherPaymentTransaction] == 1;
                this.userAccess.void = data.otherAccess[this.global.otherAccessOrder.voidTransaction] == 1;
                this.userAccess.correction = data.otherAccess[this.global.otherAccessOrder.correctionTransaction] == 1;
                this.userAccess.transfer = data.otherAccess[this.global.otherAccessOrder.transferTransaction] == 1;
                this.userAccess.updateSubDepartment = data.otherAccess[this.global.otherAccessOrder.updateSubDepartmentTransaction] == 1;
                this.userAccess.updateRemark = data.otherAccess[this.global.otherAccessOrder.updateRemarkTransaction] == 1;
                this.userAccess.updateDocumentNumber = data.otherAccess[this.global.otherAccessOrder.updateDocumentNumberTransaction] == 1;
                this.userAccess.checkOut = data.otherAccess[this.global.otherAccessOrder.checkOut] == 1;
                this.userAccess.printFolio = data.otherAccess[this.global.otherAccessOrder.printFolio] == 1;
            }
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.id_log,
                table: this.global.tableName.subFolio,
            };
            this.titlePopup = `Tracking Data - ID: ${params.id_log}`;
            this.$loadingIndicator(this);
            try {
                const { data } = await trackingDataResource.getData(params);
                this.dataTracking = data.modelGrid;
                this.showInputForm = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
            this.$closeLoadingIndicator(this);
        },
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
        this.getFolioAccess();
        if (this.isDayendClose) {
            if (this.isCheckOut) {
                this.handleCheckOut();
            }
        }
    },
    watch: {
        showTransferForm() {
            if (this.showTransferForm == false) {
                this.searchData(this.search);
            }
        },
        showInputForm() {
            if (this.showInputForm == false) {
                setTimeout(() => { this.searchData(this.search); }, 500);
            }
        },
        account() {
            if (this.account !== null) {
                this.vTransaction.account_code = this.account.code;
                this.vTransaction.charge_percent = this.account.charge_percent;
                this.getTotalAmount();
            }
        },
        selectedAccount() {
            if (this.selectedAccount != null) {
                // this.vTransfer.option = this.global.transfer.transferSelected;
            }
        },
    },
    computed: {
        balance() {
            if (this.balanceData.balance < 0) {
                return -this.balanceData.balance;
            }
            return 0;
        },
        sdFrontOffice() { return this.$store.getters.sdFrontOffice; },
        subFolioGroup() { return this.$store.state.subFolioGroup; },
        auditDate() { return this.$store.state.auditLog.auditDate; },
        ccAdm() { return this.$store.getters.cCAdmin; },
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
        transferDepositReservationToFolio() { return this.$store.getters.transferDepositReservationToFolio; },

    },
    async beforeRouteLeave(to, from, next) {
        if (this.showInputForm || this.showPaymentOption || this.showTransferForm) {
            this.showInputForm = false;
            this.showPaymentOption = false;
            this.showTransferForm = false;
            next(false);
        } else if (this.form == this.global.formType.folioHistory) {
            await this.getBalance();
            if (this.balanceAmount > 0 || this.balanceAmount < 0) {
                $dialog.information(this.$t('message.cannotCloseFolioUnbalance'));
                next(false);
            } else {
                next();
            }
        } else {
            next();
        }
    },
};

</script>
<style lang="scss">
@import '@sass/vuexy/pages/form_deposit_charge.scss';
@import '@sass/vuexy/pages/form/transfer.scss';
</style>
<style lang="scss">
.ag-theme-balham .correction{
    background-color: yellow;
}
.ag-theme-balham .void{
    background-color: rgb(255, 104, 104);
}
</style>
<style lang="scss">
.btn-bottom{
    bottom: 0;
    margin-top: 11px;
}

.payment-option span.vs-button-text.vs-button--text{
    display: flex !important;
    justify-content: center;

    img{
        margin-right: 5px;
    }
}

</style>
