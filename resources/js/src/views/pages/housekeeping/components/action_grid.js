import Vue from 'vue';
import IconClean from '@/components/icon/IconClean'
import IconReady from '@/components/icon/IconReady'
import IconDirty from '@/components/icon/IconDirty'
import IconOC from '@/components/icon/IconOC'
import IconOD from '@/components/icon/IconOD'
import IconOO from '@/components/icon/IconOO'
import IconUC from '@/components/icon/IconUC'
import IconPC from '@/components/icon/IconPC'
import IconOF from '@/components/icon/IconOF'
import IconHU from '@/components/icon/IconHU'
import IconGC from '@/components/icon/IconGC'
import IconSR from '@/components/icon/IconSR'
import IconUN from '@/components/icon/IconUN'
import IconJN from '@/components/icon/IconJN'
import IconComp from '@/components/icon/IconComp'
import IconOccupied from '@/components/icon/IconOccupied'
export default Vue.extend({
     components: {
        IconClean,
        IconReady,
        IconDirty,
        IconHU,
        IconComp,
        'icon-hu' : IconHU,
        'icon-comp' : IconComp,
        'icon-oc' : IconOC,
        'icon-od' : IconOD,
        'icon-oo' :IconOO,
        'icon-uc' :IconUC,
        'icon-pc' :IconPC,
        'icon-of' :IconOF,
        'icon-gc' :IconGC,
        'icon-sr' :IconSR,
        'icon-un' :IconUN,
        'icon-jn' :IconJN,
        'icon-occupied' :IconOccupied,
    },
	template: `
                <div v-if="params.data" class="flex action-button">
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <vs-button :color="global.iconActionColor.menuColor" type="flat"><vs-icon icon="menu" size="small"></vs-icon></vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item @click="showPopUp(global.modeData.tracking)"><vs-icon icon="search" size="small"></vs-icon>Tracking Data</vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <vs-button :color="global.iconActionColor.menuColor" type="flat"><icon-jn/></vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item @click="showPopUp(global.roomStatus.ready, '/images/hk-ready.png', global.hkMode.roomAvailable )"><icon-ready size="small"></icon-ready> Ready</vs-dropdown-item>
                            <vs-dropdown-item @click="showPopUp(global.roomStatus.clean, '/images/hk-clean.png', global.hkMode.roomAvailable)"><icon-clean size="small"></icon-clean></vs-icon> Clean</vs-dropdown-item>
                            <vs-dropdown-item @click="showPopUp(global.roomStatus.dirty, '/images/hk-dirty.png', global.hkMode.roomAvailable)"><icon-dirty size="small"></icon-dirty></vs-icon> Dirty</vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-trigger-click class="cursor-pointer">
                        <vs-button :color="global.iconActionColor.menuColor" type="flat"><icon-un/></vs-button>
                        <vs-dropdown-menu>
                            <vs-dropdown-item :disabled="disabledOO" @click="showUnavailable(global.roomStatus.outOfOrder,'', global.hkMode.roomUnavailable)"><icon-oo size="small"></icon-oo> Out of Order</vs-dropdown-item>
                            <vs-dropdown-item :disabled="disabledOF" @click="showUnavailable(global.roomStatus.officeUse,'', global.hkMode.roomUnavailable)"><icon-of size="small"></icon-of> Office Use</vs-dropdown-item>
                            <vs-dropdown-item :disabled="disabledUC" @click="showUnavailable(global.roomStatus.underConstruction,'', global.hkMode.roomUnavailable)"><icon-uc size="small"></icon-uc> Under Construction</vs-dropdown-item>
                            <vs-dropdown-item @click="openAlert">Available Today</vs-dropdown-item>
                            <vs-dropdown-item :disabled="disabledGC" divider @click="roomBlockAlert(global.roomBlockStatus.generalCleaning, global.hkMode.roomBlock)"><icon-gc size="small"></icon-gc> General Cleaning</vs-dropdown-item>
                            <vs-dropdown-item :disabled="disabledSR" @click="roomBlockAlert(global.roomBlockStatus.showingRoom,  global.hkMode.roomBlock)"><icon-sr size="small"></icon-sr> Showing Room</vs-dropdown-item>
                            <vs-dropdown-item :disabled="disabledUR" @click="roomBlockAlert(null,  global.hkMode.roomBlock)">Unblock Room</vs-dropdown-item>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                </div>
            `,
	data: function () {
		return {
            disabledOO: false,
            disabledOF: false,
            disabledUC: false,
            disabledGC: false,
            disabledSR: false,
            disabledUR: false,
        };
	},
    beforeMount() {},
	mounted() {},
	methods: {
		showPopUp(status, icon,mode) {
			if (this.params.data !== undefined) {
                this.params.context.componentParent.showModal(this.params.data, status, icon, mode);
			} else {
				this.openUndefinedAlert();
			}
        },
        showUnavailable(status, icon, mode) {
			if (this.params.data !== undefined) {
                this.params.context.componentParent.showModalUnavailable(this.params.data, status, icon, mode);
			} else {
				this.openUndefinedAlert();
			}
        },
        availableToday(){
            if (this.params.data !== undefined) {
                this.params.context.componentParent.deleteUnavailable(this.params.data);
			} else {
				this.openUndefinedAlert();
			}
        },

		openAlert() {
			if (this.params.data !== undefined && this.params.data.is_unavailable == '-1' ) {
				this.openConfirm();
			} else {
				this.availableAlert();
			}
        },

        roomBlockAlert(status, mode) {
			if (this.params.data !== undefined ) {
                this.params.context.componentParent.handleUpdateRoomBlock(this.params.data, status, mode);
			} else {
                //
			}
        },

		openUndefinedAlert() {
			this.$vs.dialog({
				color: 'primary',
				title: this.$t('message.informationTitle'),
				text: this.$t('message.undefinedText'),
				acceptText: this.$t('button.close'),
			});
        },
        availableAlert() {
			this.$vs.dialog({
				color: 'primary',
				title: this.$t('message.informationTitle'),
				text: this.$t('message.availableRoom'),
				acceptText: this.$t('button.close'),
			});
		},

		openConfirm() {
			this.$vs.dialog({
				type: 'confirm',
				color: 'danger',
				title: this.$t('message.deleteTitleConfirm'),
				text: this.$t('message.availableToday'),
				acceptText: this.$t('message.yes'),
				cancelText: this.$t('message.no'),
				accept: () => this.params.context.componentParent.deleteUnavailable(this.params.data)
			});
        },

        setDisabledDropDownMenuUnavailableRoom(params){
            if(params.ID_log !== null && params.ID_log !== undefined && params.ID_log > 0){
                if(params.status1 === this.global.roomStatus.outOfOrder){
                    this.disabledOF = true;
                    this.disabledUC = true;
                    this.disabledGC = true;
                    this.disabledSR = true;
                    this.disabledUR = true;
                } else if(params.status1 === this.global.roomStatus.officeUse){
                    this.disabledOO = true;
                    this.disabledUC = true;
                    this.disabledGC = true;
                    this.disabledSR = true;
                    this.disabledUR = true;
                } else if(params.status1 === this.global.roomStatus.underConstruction){
                    this.disabledOO = true;
                    this.disabledOF = true;
                    this.disabledGC = true;
                    this.disabledSR = true;
                    this.disabledUR = true;
                }
            }
        }
	},
    created() {
        this.setDisabledDropDownMenuUnavailableRoom(this.params.data);
    }
});
