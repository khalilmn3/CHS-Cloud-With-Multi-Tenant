<template>
    <div class="night-audit">
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
            ref="mainContainer"
                :style="global.styleAgGridFrame3"
                :class="global.themeAgGrid"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :columnDefs="columnDefs"
                :defaultColDef="global.defColDef"
                :rowSelection="rowSelection"
                :rowData="rowData"
                @cellDoubleClicked="onCellClicked"
            ></ag-grid-vue>
        </vx-card>
        <folio-form v-if="destroyComponent" ref="folioForm" :formType="folioFormType" :titleForm="folioTitleForm" :isDayendClosed="true" @precheck="precheck()"/>
        <registration-form v-if="destroyComponent" ref="registrationForm" :isDayendClose="true" :isGuestInHouse="isGuestInHouse" :isReservation="isReservation" @precheck="precheck()"></registration-form>
        <cancel-reservation ref="cancelReservation" :isDayendClose='true' @precheck="precheck()"/>
        <dialog-prompt
            :title="popupTitle"
            :width="80"
            :active="showAutoPosting"
            @close="v => showAutoPosting = v">
            <template #body>
                <auto-posting v-if="destroyComponent2"/>
            </template>
        </dialog-prompt>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import $dialog from '@/utils/dialog.js';
import AutoPosting from '@/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue';
import RegistrationForm from '@/views/pages/components/registrationForm/RegistrationForm.vue';
import FolioForm from '@/views/pages/components/folioForm/FolioForm.vue';
import CancelReservation from '@/views/pages/reservations/components/CancelReservation';
import ReservationResource from '@/api/reservation/reservation';
import GuestInHouseResource from '@/api/guestinhouse/guestInHouse';
import FolioResource from '@/api/folio';

const guestInHouseResource = new GuestInHouseResource();
const reservationResource = new ReservationResource();
const folioResource = new FolioResource();
export default {
    name: 'ErrorList',
    props: {
        rowData: Array,
    },

    components: {
        AgGridVue,
        RegistrationForm,
        AutoPosting,
        FolioForm,
        CancelReservation,
    },

    data() {
        return {
        // Ag-Grid
            columnDefs: null,
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
            dataTracking: null,
            //-----------------
            showAutoPosting: false,
            number: null,
            popupTitle: '',
            folioStatus: {},
            folioFormType: '',
            folioTitleForm: '',
            //-----------------
            // <!-- <FORM REGISTRATION> -->
            isReservation: false,
            // <!-- </FORM REGISTRATION> -->
            paramsData: '',
            isCheckOut: false,
            isGuestInHouse: false,
            destroyComponent: false,
            destroyComponent2: false,
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
            { headerName: '#', field: 'number', width: 80 },
            { headerName: this.$t('nightAudit.table.roomNumber'), field: 'room_number', width: 80 },
            { headerName: this.$t('nightAudit.table.guestName'), field: 'full_name', width: 180 },
            { headerName: this.$t('nightAudit.table.description'), field: 'description', width: 250 },
            { headerName: `${this.$t('nightAudit.table.solution')}1`, field: 'solution1', width: 110 },
            { headerName: `${this.$t('nightAudit.table.solution')}2`, field: 'solution2', width: 110 },
            { headerName: `${this.$t('nightAudit.table.solution')}3`, field: 'solution3', width: 110 },
            { headerName: `${this.$t('nightAudit.table.solution')}4`, field: 'solution4', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
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
            this.getValueCell();
        },
        // ========================================================
        async onCellClicked(event) {
            this.resetData();
            const solution = event.value;
            const { number } = event.data;
            this.number = number;
            if (solution == this.global.solutionCriticalErrorDayendClose.autoAssign) {
                await this.autoAssign(number);
            } else if (solution === this.global.solutionCriticalErrorDayendClose.checkIn) {
                this.checkIn();
            } else if (solution === this.global.solutionCriticalErrorDayendClose.cancel) {
                this.$loadingIndicator(this)
                this.$refs.cancelReservation.showCancelReservation(this.global.reservationStatus.cancel, number);
            } else if (solution === this.global.solutionCriticalErrorDayendClose.changeArrival) {
                this.changeArrival();
            } else if (solution === this.global.solutionCriticalErrorDayendClose.noShow) {
                this.$loadingIndicator(this)
                this.$refs.cancelReservation.showCancelReservation(this.global.reservationStatus.noShow, number);
            } else if (solution === this.global.solutionCriticalErrorDayendClose.checkOut) {
                this.checkOut();
            } else if (solution === this.global.solutionCriticalErrorDayendClose.extend) {
                this.extend();
            } else if (solution === this.global.solutionCriticalErrorDayendClose.autoPosting) {
                this.destroyComponent2 = true;
                this.showAutoPosting = true;
            } else if (solution === this.global.solutionCriticalErrorDayendClose.showFolio) {
                this.handleTransaction(this.global.formType.folioHistory);
            } else if (solution === this.global.solutionCriticalErrorDayendClose.showDeposit) {
                this.showDeposit();
            } else if (solution === this.global.solutionCriticalErrorDayendClose.unsetWaitList) {
                this.unsetWaitList(this.number);
            }
        },

        resetData() {
            this.number = null;
            this.isCheckOut = false;
            this.isReservation = false;
            this.isGuestInHouse = false;
        },

        closePopup() {
            this.$emit('closePopup');
        },

        precheck() {
            this.$emit('precheck');
            this.destroyComponent2 = false;
        },

        async handleTransaction(formType) {
            this.$loadingIndicator(this)
            this.closePopup();
            const { data } = await guestInHouseResource.get(this.number);
            this.$router.push({
                name: 'transaction',
                params: {
                    stayInformations: data.list, isDayendClose: true, isCheckOut: this.isCheckOut, form: formType,
                },
            });
        },

        async autoAssign(number) {
            this.$loadingIndicator(this)
            const { data } = await reservationResource.autoAssignRoom({ reservation_number: number, ready: 1, user_id: this.userId });
            if (data == 0) {
                this.precheck();
            } else if (data > 0) {
                $dialog.information(this.$t(`responseStatus.autoAssignRoom.${data}`));
            }
            this.$vs.loading.close('.layout--main>.con-vs-loading');
        },

        unsetWaitList(number) {
            this.destroyComponent = false;
            setTimeout(async () => {
                this.destroyComponent = true;
                setTimeout(async () => {
                    this.$loadingIndicator(this)
                    await this.$refs.registrationForm.unsetWaitList(number);
                }, 200);
            }, 200);
        },

        changeArrival() {
            const data = { reservation_number: this.number };
            this.isReservation = true;
            this.showRegistrationForm(data, this.global.modeData.edit, true);
        },
        checkIn() {
            const data = { reservation_number: this.number };
            this.isReservation = true;
            this.destroyComponent = false;
            setTimeout(() => {
                this.destroyComponent = true;
                setTimeout(() => {
                    this.$refs.registrationForm.handleCheckIn(data);
                }, 100);
            }, 100);
        },
        checkOut() {
            this.isCheckOut = true;
            this.handleTransaction(this.global.formType.guestInHouse);
        },
        async extend() {
            this.$loadingIndicator(this)
            const data = { folio_number: this.number };
            await this.cekFolioStatus(this.number);
            if (this.folioStatus.type_code === this.global.folioType.guestFolio) {
                this.isGuestInHouse = true;
                this.showRegistrationForm(data, this.global.modeData.edit, false);
            } else if (this.folioStatus.type_code === this.global.folioType.deskFolio || this.folioStatus.type_code === this.global.folioType.masterFolio) {
                this.folioFormType = this.folioStatus.type_code;
                this.folioTitleForm = this.folioStatus.type_code == this.global.folioType.deskFolio ? 'Desk Folio' : 'Master Folio';
                this.showFolioForm(data, this.global.modeData.edit);
            }
        },

        async cekFolioStatus(folioNumber) {
            const { data } = await folioResource.folioStatus(folioNumber);
            this.folioStatus = data;
        },

        async showDeposit() {
            const data = { reservation_number: this.number };
            this.isReservation = true;
            await this.showRegistrationForm(data, this.global.modeData.edit, true);
            setTimeout(() => { document.getElementById('deposit').click(); }, 500);
        },

        async showFolioForm(idData, modeData) {
            this.destroyComponent = false;
            setTimeout(async () => {
                this.destroyComponent = true;
                setTimeout(async () => {
                    await this.$refs.folioForm.showForm(idData, modeData);
                }, 200);
            }, 200);
        },

        async showRegistrationForm(idData, modeData, isReservation) {
            this.destroyComponent = false;
            setTimeout(async () => {
                this.destroyComponent = true;
                setTimeout(async () => {
                    await this.$refs.registrationForm.showForm(idData, modeData, isReservation);
                }, 100);
            }, 100);
        },
        // ========================================================
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
    },
    watch: {
        showAutoPosting() {
            if (this.showAutoPosting == false) {
                this.precheck();
            }
        },
    },
    computed: {
        userId() { return this.global.userInfo.code; },
    },
    beforeDestroy() {
        this.destroyComponent = false;
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
