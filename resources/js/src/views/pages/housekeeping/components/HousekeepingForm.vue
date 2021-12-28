<template>
<div>
    <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
        :button2="btnDelete"
        :textButton2="$t('button.delete')"
        :iconButton2="'delete_forever'"
        :buttonsColor2="global.buttonColor.delete"
        @button2="deleteUnavailable"
        :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData.room_number : modalTitle)"
        :width="500"
        :active="mainPopUp"
        :idButton1="'button-save-main'"
        :buttonDisabled1="btnSaveDisabled"
        @button1="saveData()"
        @close="val=>mainPopUp = val">
        <template #body>
<!-- <vs-prompt buttons-hidden :type="global.dialog.typeDialog" class="width-500p" :active.sync="mainPopUp" :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData.room_number : modalTitle)"> -->
            <div v-if="modeDataValue == global.modeData.tracking">
                <tracking v-bind:idData="idData" :theData="dataTracking"></tracking>
            </div>
            <div v-else class="popup-body vs-con-loading__container">
                <div style="padding: 20px; padding-top:0px;" class="popup-container">
                    <div v-if="mode == global.hkMode.roomAvailable">
                        <vs-row vs-type="flex" vs-justify="center" class="mb-3" vs-w="12">
                            <vs-image style="max-height:100px" class="image-hk-status" :src="icon" />
                        </vs-row>
                    <div v-if="status ==  global.roomStatus.ready || status ==  global.roomStatus.clean">
                        <vs-row vs-type="flex" vs-justify="center" class="mb-3" vs-w="12">
                            <span>{{ $t('housekeeping.form.roomBoy')}}</span>
                        </vs-row>
                        <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                            <v-select id="form-select" appendToBody :clearable="false" label="name" class="room-boy w-full height100" :options="roomBoys" v-model="roomBoy" v-validate="'required'" name="room boy"></v-select>
                            <span class="error-text text-danger" v-show="errors.has('room boy')">{{ errors.first('room boy') }}</span>
                        </vs-row>
                    </div>
                        </div>
                    <div v-else>
                        <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                            <vs-col vs-lg="3" class="w-full">
                                <span>{{ $t('housekeeping.form.unavailableType') }}</span>
                            </vs-col>
                            <vs-col vs-lg="9" class="wrap-form-select w-full">
                                <v-select id="form-select" :clearable="false" :reduce="value => value.code" label="name" class="w-full height100" :options="options.types" v-model="unavailable.status_code" v-validate="'required'" name="type"></v-select>
                                <span class="error-text text-danger" v-show="errors.has('type')">{{ errors.first('type') }}</span>
                            </vs-col>
                        </vs-row>
                        <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                            <vs-col vs-lg="3" class="w-full">
                                <span>{{ $t('housekeeping.form.reason') }}</span>
                            </vs-col>
                            <vs-col vs-lg="9" class="wrap-form-select w-full">
                                <v-select :disabled="unavailable.status_code !== global.roomStatus.outOfOrder" :clearable="false" id="form-select" :reduce="value => value.code" label="description" class="w-full height100" :options="options.reasons" v-model="unavailable.reason_code" v-validate="unavailable.status_code == global.roomStatus.outOfOrder ? 'required' : ''" name="reason"></v-select>
                                <span class="error-text text-danger" v-show="errors.has('reason')">{{ errors.first('reason') }}</span>
                            </vs-col>
                        </vs-row>
                        <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                            <vs-col vs-lg="3">
                                <span>{{ $t('housekeeping.form.dateRange') }}</span>
                            </vs-col>
                            <vs-col vs-lg="9" class="wrap-form-select">
                                <vs-row>
                                <div class="w-full md:w-1/2">
                                    <date-picker
                                        :clearable="false"
                                        :disabled-date="dateTodayDisable"
                                        type="date"
                                        confirm
                                        confirm-text="ok"
                                        :lang="$t('lang')"
                                        value-type="YYYY-MM-DD"
                                        format="DD/MM/YYYY"
                                        label="name"
                                        class="w-full"
                                        v-model="unavailable.from_date" v-validate="'required'" name="from date">
                                    </date-picker>
                                    <span class="error-text text-danger" v-show="errors.has('from date')">{{ errors.first('from date')}}</span>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <date-picker
                                        :clearable="false"
                                        :disabled-date="dateTodayDisable"
                                        type="date"
                                        confirm
                                        confirm-text="ok"
                                        :lang="$t('lang')"
                                        value-type="YYYY-MM-DD"
                                        format="DD/MM/YYYY"
                                        label="name"
                                        class="w-full"
                                        v-model="unavailable.to_date" v-validate="'required'" name="to date">
                                    </date-picker>
                                    <span class="error-text text-danger" v-show="errors.has('to date')">{{ errors.first('to date')}}</span>
                                </div>
                                </vs-row>
                            </vs-col>
                        </vs-row>
                        <vs-row>
                            <vs-col vs-lg="3" class="w-full">
                                <span>{{ $t('housekeeping.form.note') }}</span>
                            </vs-col>
                            <vs-col vs-lg="9" class="wrap-form-select w-full">
                                <vs-textarea class="w-full" v-model="unavailable.note" />
                            </vs-col>
                        </vs-row>
                    </div>
                </div>
            </div>
            <!-- <footer class="footer">
                <vs-row>
                    <vs-col vs-justify="flex-end" class="w-full flex mt-2">
                        <vs-button id="button-save-main" class="vs-con-loading__container" @click="saveData()" icon="save" :color="global.buttonColor.save">{{ $t('button.save') }}</vs-button>
                        <vs-button v-if="btnDelete" id="button-save-main" class="vs-con-loading__container ml-2" @click="deleteUnavailable()" icon-pack="feather" icon="icon-trash-2" :color="global.buttonColor.delete">{{ $t('button.delete') }}</vs-button>
                        <vs-button @click="mainPopUp=false" class="ml-2" icon="close" :color="global.buttonColor.close">{{ $t('button.close') }}</vs-button>
                    </vs-col>
                </vs-row>
            </footer> -->
        </template>
    </dialog-prompt>
</div>
</template>
<script>
import request from '@/utils/request.js';
import Tracking from '@/views/pages/components/Tracking.vue';
import $dialog from '@/utils/dialog.js';
import $alert from '@/utils/alert.js';
import DatePicker from 'vue2-datepicker';
import '@sass/vuexy/components/datepicker.scss';
import HousekeepingResource from '@/api/housekeeping.js';

const housekeepingResource = new HousekeepingResource();
export default {
    components: {
        DatePicker,
        Tracking,
    },
    data() {
        return {
            mainPopUp: false,
            btnDelete: false,
            unavailable: {},
            modalTitle: '',
            // dateTodayDisable: null,
            modeDataValue: null,
            dataTracking: null,
            roomBoy: {},
            roomBoys: [],
            icon: '',
            status: '',
            statusBefore: '',
            selectedRoom: [],
            mode: '',
            options: {},
            idData: {},
            btnSaveDisabled: false,
        };
    },
    methods: {
        async refreshData() {
            this.$emit('refreshData');
        },

        async getDataLookUp() {
            if (this.mode === this.global.hkMode.roomAvailable) {
                const { data } = await housekeepingResource.roomBoy();
                this.roomBoys = data.modelGrid;
            } else if (this.mode === this.global.hkMode.roomUnavailable) {
                const { data } = await housekeepingResource.dataLookup();
                this.options = {
                    types: data.type,
                    reasons: data.reason,
                };
            }
        },
        async  updateStatus() {
            this.vModel = {
                mode: this.mode,
                status_code: this.status,
                status_before: this.statusBefore,
                number: this.selectedRoom,
                room_boy_code: this.roomBoy.code,
                room_boy_name: this.roomBoy.name,
                user_id: this.global.userInfo.code,
            };
            try {
                this.$loadingIndicator(this)
                await housekeepingResource.update(this.vModel);
                this.refreshData(this.search);
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                this.mainPopUp = false;
                this.btnSaveDisabled = false;
            } catch (error) {
                this.btnSaveDisabled = false;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                // this.mainPopUp = false;
            }
        },

        resetData() {
            this.vModel = {
                status_code: '',
                number: '',
                room_boy_code: '',
                room_boy_name: '',
                user_id: this.global.userInfo.code,
            };
            this.unavailable = {
                mode: '',
                status_code: '',
                room_number: '',
                from_date: this.auditDate,
                to_date: this.auditDate,
                user_id: this.global.userInfo.code,
            };
            this.dataTracking = null;
            this.idData = '';
            this.btnDelete = false;
            this.btnSaveDisabled = false;
            this.roomBoy = '';
            this.$validator.pause();
            this.$nextTick(() => {
                this.$validator.errors.clear();
                this.$validator.fields.items.forEach((field) => field.reset());
                this.$validator.fields.items.forEach((field) => this.errors.remove(field));
                this.$validator.resume();
            });
        },

        async showModal(idData, roomNumber, status, icon, mode, multiSelected) {
            this.resetData();
            this.idData = idData;
            this.selectedRoom = roomNumber.toString().split(', ');
            this.mode = mode;
            this.modeDataValue = status;
            this.$loadingIndicator(this)
            const statusRoom = await this.getRoomStatus(idData.room_number);
            if (!multiSelected) {
                if (status == this.global.roomStatus.ready && statusRoom.is_occupied == '-1' && status !== this.global.modeData.tracking) {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    return;
                }
                if ((status != statusRoom.status_room) && (statusRoom.is_unavailable == '0') && (status !== this.global.modeData.tracking)) {
                    this.statusBefore = idData.status2;
                    this.status = status;
                    this.unavailable.status_code = status;
                    this.icon = icon;
                    if (status == this.global.roomStatus.ready || status == this.global.roomStatus.clean || status == this.global.roomStatus.dirty) {
                        await this.getDataLookUp();
                        this.modalTitle = `${this.$t('housekeeping.title.updateRoomStatus')}${roomNumber}`;
                        this.mainPopUp = true;
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                    } else {
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                    }
                } else if (status == this.global.modeData.tracking) {
                    this.$loadingIndicator(this)
                    await this.trackingData(idData);
                    this.mainPopUp = true;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                } else {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }
            } else if (status !== this.global.modeData.tracking && multiSelected) {
                if (status == this.global.roomStatus.ready || status == this.global.roomStatus.clean || status == this.global.roomStatus.dirty) {
                    this.$loadingIndicator(this)
                    this.idData = idData;
                    this.statusBefore = idData.status2;
                    this.status = status;
                    this.unavailable.status_code = status;
                    this.icon = icon;
                    await this.getDataLookUp();
                    this.modalTitle = `${this.$t('housekeeping.title.updateRoomStatus')}${roomNumber}`;
                    this.mainPopUp = true;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }
            }
        },

        async showModalUnavailable(idData, status, icon, mode) {
            this.$loadingIndicator(this)
            this.resetData();
            const roomStatus = await this.getRoomStatus(idData.room_number);
            this.modeDataValue = status;
            this.mode = mode;
            if (roomStatus.is_occupied == '-1') {
                $dialog.informationError(this.$t('message.roomIsOccupied'));
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
            if (status == roomStatus.status_room && roomStatus.is_unavailable == '-1') {
                const { data } = await housekeepingResource.get(idData.room_number);
                this.modalTitle = `${this.$t('housekeeping.title.updateUnavailableRoom')}${idData.room_number}`;
                this.btnDelete = true;
                this.idData = data;
                this.unavailable = data;
                this.unavailable.room_unavailable_id = data.id_log;
                await this.getDataLookUp();
                this.mainPopUp = true;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } else if (roomStatus.status_room !== status && roomStatus.is_occupied == '0') {
                this.$loadingIndicator(this)
                this.modalTitle = `${this.$t('housekeeping.title.setUnavailableRoom')}${idData.room_number}`;
                this.idData = idData;
                this.statusBefore = idData.status2;
                this.status = status;
                this.unavailable.status_code = status;
                this.unavailable.room_unavailable_id = 0;
                this.icon = icon;
                await this.getDataLookUp();
                this.mainPopUp = true;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        async getRoomStatus(roomNumber) {
            const { data } = await housekeepingResource.roomStatus({ room_number: roomNumber });
            return data;
        },

        async updateData() {
            this.unavailable.room_number = this.idData;
            this.unavailable.audit_date = this.auditDate;
            try {
                this.$loadingIndicator(this)
			    await housekeepingResource.update(this.vModel);
                this.refreshData(this.search);
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.acceptAlertSucces();
                this.mainPopUp = false;
            } catch (error) {
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        async handleUpdateRoomBlock(idData, status, mode) {
            const roomStatus = await this.getRoomStatus(idData.room_number);
            if (status == null && roomStatus.is_blocked == '0') {
                //
            } else if (roomStatus.is_unavailable == '0' && roomStatus.is_occupied == '0') {
                $dialog.confirmationW8Text(status ? `${this.$t('message.roomBlock')} ${idData.room_number}?` : `${this.$t('message.roomUnblock')} ${idData.room_number}?`, this, 'updateRoomBlock',idData, status, mode);
            }
        },

        async updateRoomBlock(idData, status, mode) {
            const data = {
                mode,
                number: idData.room_number,
                status_code: status,
                user_id: this.global.userInfo.code,
            };
            try {
                this.$loadingIndicator(this)
                await housekeepingResource.update(data);
                this.refreshData(this.search);
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.acceptAlertSucces();
            } catch (error) {
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        async insertUnavailable() {
            this.unavailable.mode = this.mode;
            this.unavailable.room_number = this.idData.room_number;
            this.unavailable.audit_date = this.auditDate;
            this.unavailable.user_id = this.global.userInfo.code;

            try {
                const { data } = await housekeepingResource.store(this.unavailable);
                let textDialog = 'error';
                if (data >= 0 && data <= 4) {
                    if (data == 0) {
                        $alert.acceptAlertSucces();
                        this.refreshData(this.search);
                        this.mainPopUp = false;
                    } else if(data > 0) {
                        $dialog.information(this.$t(`responseStatus.housekeeping.${data}`));
                    }
                }
                this.btnSaveDisabled = false;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
            } catch (error) {
                this.btnSaveDisabled = false;
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.errorSaveDataAlert(message);
            }
        },

        saveData() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.btnSaveDisabled = true;
                    this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                    if (this.mode == this.global.hkMode.roomAvailable) {
                        this.updateStatus();
                    } else {
                        this.insertUnavailable();
                    }
                }
            });
        },

        async deleteUnavailable(idData) {
            const params = {
                id_log: idData == undefined ? this.unavailable.room_unavailable_id : idData.ID_log,
                user_id: this.global.userInfo.code,
            };
            try {
                this.$loadingIndicator(this)
                const { data } = await housekeepingResource.delete(params);
                if (data == 0) {
                    $alert.deleteAlertSuccess();
                } else {
                    $dialog.information(this.$t(`responseStatus.deleteRoomUnavailable.${data}`));
                }
                this.refreshData(this.search);
                this.mainPopUp = false;
            } catch (error) {
                const message = error;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorDeleteDataAlert(message);
            }
        },
        //  DATEPICKER CONFIGURATION //
        dateTodayDisable(date) {
            const audit = new Date(this.auditDate);
            audit.setDate(audit.getDate() - 1);
            return date < audit;
        },
        //  END DATEPICKER CONFIGURATION //

        // PRINT
        handlePrintCheckList(boolean) {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.roomCheckList}&selected=${boolean ? this.selectedRoom : ''}&template=${this.global.stimulsoftReportFileDirectory.roomCheckList}` });
            window.open(newTabReport.href, '_blank');
        },

        trackingData(idData) {
            const data = {
                id_log: idData.id_log,
                table: 'cfg_init_room',
            };
            request
                .post('tracking/datagrid', data)
                .then((result) => {
                    this.dataTracking = result.data.modelGrid;
                    setTimeout(() => {
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                    }, 100);
                }).catch(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },
    },
    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    },
};
</script>
<style>
.room-boy .vs__dropdown-menu{
    position: initial !important;
}
</style>
