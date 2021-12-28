<template>
    <div class="night-audit">
        <vs-row vs-w="12" vs-type="flex" class="navigation mb-2">
            <vs-button vs-xs="12" vs-type="flex" @click="handlePrecheckAutoPostTransaction" color="success" type="filled" icon="people_alt">{{ this.$t('button.precheckAutoPost') }}</vs-button>
            <vs-button vs-xs="12" vs-type="flex" class="ml-2" @click="handleAutoPostTransaction" color="success" type="filled" icon="person">{{ this.$t('button.post') }}</vs-button>
            <vs-checkbox class="ml-2" v-model="post.allow_zero_amount">{{$t('nightAudit.allowZeroAmount')}}</vs-checkbox>
            <vs-checkbox v-model="post.reposting">{{$t('nightAudit.reposting')}}</vs-checkbox>
        </vs-row>
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
            ref="mainContainer"
                :style="global.styleAgGridFrame3"
                :class="global.themeAgGrid"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :context="context"
                :columnDefs="columnDefs"
                :frameworkComponents="frameworkComponents"
                :rowSelection="rowSelection"
                :rowData="rowData"
                :defaultColDef="global.defColDef"
                @rowDoubleClicked="handleRowDobleClicked"
            ></ag-grid-vue>
        </vx-card>
<!--------- END PROMPT POST----------->
<!--------- START PROMPT CREDENTIAL----------->
        <credential :value="credential"
            :specialAccessType="specialAccessType"
            :activeCredential="activeCredentialPrompt"
            :isCredential="true"
            :isReason="false"
            :title="credentialTitle"
            @update:active-credential="val=>activeCredentialPrompt = val"
            @acceptCredential="acceptCredential"
            @input="(newValue)=>{ credential = newValue }"/>
<!--------- END PROMPT CREDENTIAL----------->
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import $alert from '@/utils/alert';
import $dialog from '@/utils/dialog';
import Credential from '@/views/pages/components/Credential';

// <!------------------additional element---------------------->
import { formatNumber } from '@/utils/format';
// API
import AutoPostTransactionResource from '@/api/night-audit/autoPostTransaction';
import GuestInHouseResource from '@/api/guestinhouse/guestInHouse.js';

const guestInHouseResource = new GuestInHouseResource();
const autoPostTransactionResource = new AutoPostTransactionResource();
// <!------------------end additional element---------------------->
export default {
    name: 'AutoPostTransaction',

    components: {
        AgGridVue,
        Credential,
    },

    data() {
        return {
            // Ag-Grid
            columnDefs: null,
            rowData: [],
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            paginationPageSize: null,
            rowSelection: null,
            //-----------------
            showPrePost: false,
            post: {
                allow_zero_amount: false,
                reposting: false,
            },
            // ------CREDENTIAL-------//
            activeCredentialPrompt: false,
            credentialTitle: '',
            specialAccessType: 1000,
            credential: {
                user: '',
                pass: '',
            },
            paramsData: '',
            idLog: '',
            // ------------------end need setting manual-----------------//

        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightReservation,
        };
        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('nightAudit.table.type'), field: 'type', width: 100 },
            { headerName: this.$t('nightAudit.table.folioNumber'), field: 'folio_number', width: 80 },
            { headerName: this.$t('nightAudit.table.roomNumber'), field: 'room_number', width: 80 },
            { headerName: this.$t('nightAudit.table.guestName'), field: 'full_name', width: 180 },
            { headerName: this.$t('nightAudit.table.roomRateCode'), field: 'room_rate_code', width: 130 },
            { headerName: this.$t('nightAudit.table.amount'), field: 'amount', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('nightAudit.table.amountWillPost'), field: 'amount_post', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('nightAudit.table.amountPosted'), field: 'amount_posted', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('nightAudit.table.result'), field: 'result', width: 200 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
        };
        this.rowGroupPanelShow = 'always';
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
    },

    methods: {
        onGridReady() {
        },

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },

        async handleRowDobleClicked(params) {
            this.paramsData = await params.data;
            let formType = '';
            if (this.paramsData.type == 'Room Charge' || this.paramsData.type == 'Extra Charge') {
                formType = this.global.formType.guestInHouse;
            } else if (this.paramsData.type == 'Desk Folio') {
                formType = this.global.formType.deskFolio;
            } else if (this.paramsData.type == 'Master Folio') {
                formType = this.global.formType.masterFolio;
            }
            this.handleTransaction(formType);
        },

        // ------------------need setting manual for crud-----------------//

        async handlePrecheckAutoPostTransaction() {
            this.$loadingIndicator(this)
            try {
                const { data } = await autoPostTransactionResource.precheck(this.post);
                this.rowData = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async handleTransaction(formType) {
            this.$loadingIndicator(this)
            const { data } = await guestInHouseResource.get(this.paramsData.folio_number);
            this.$router.push({ name: 'transaction', params: { form: formType, stayInformations: data ? data.list : this.stayInformations } });
        },

        handleAutoPostTransaction() {
            if (this.post.reposting) {
                this.showCredential('', this.$t('credential.title.voidSubFolio'), this.global.accessSpecialOrder.voidSubFolio);
            } else {
                $dialog.confirmation(this, 'postTransaction');
            }
        },

        async postTransaction() {
            this.$loadingIndicator(this)
            try {
                const { data } = await autoPostTransactionResource.post(this.post);
                this.rowData = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        resetPost() {
            this.post = {
                allow_zero_amount: this.allowZeroAmount,
                reposting: false,
                user_id: this.global.userInfo.code,
            };
        },

        // --------------------CREDENTIAL----------------------------------------//
        showCredential(val, title, accessType) {
            this.resetCredential();
            this.specialAccessType = accessType;
            this.activeCredentialPrompt = true;
            this.idLog = val.id_log;
            this.credentialTitle = title;
        },

        acceptCredential() {
            this.postTransaction();
        },
        resetCredential() {
            this.credential = {
                user: '',
                pass: '',
            };
        },
    // --------------------CREDENTIAL----------------------------------------//
    },
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.$vs.loading.close('#layout--main>.con-vs-loading');
        setTimeout(() => { this.resetPost(); }, 1000);
    },
    computed: {
        allowZeroAmount() { return this.$store.getters.allowZeroAmount; },
    },
    beforeRouteLeave(to, from, next) {
        if (this.showPrePost || this.activeCredentialPrompt) {
            this.showPrePost = false;
            this.activeCredentialPrompt = false;
            next(false);
        } else {
            next();
        }
    },
};

</script>
<style>
.night-audit .ag-theme-balham .ag-header {
    font-size: 11px;
}
.night-audit .ag-theme-balham {
    font-size: 11px;
}
</style>
