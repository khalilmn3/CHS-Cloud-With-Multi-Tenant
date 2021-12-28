/*=========================================================================================
  File Name: globalComponents.js
  Description: Here you can register components globally
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue';
import VxTooltip from './layouts/components/vx-tooltip/VxTooltip.vue';
import VxCard from './components/vx-card/VxCard.vue';
import VxList from './components/vx-list/VxList.vue';
import VxBreadcrumb from './layouts/components/VxBreadcrumb.vue';
import FeatherIcon from './components/FeatherIcon.vue';
import VxInputGroup from './components/vx-input-group/VxInputGroup.vue';
import GlobalVariable from './utils/globalVariable';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import DialogPrompt from '@/views/pages/components/DialogPrompt.vue';
import InputNumber from '@/views/pages/components/Number';

Vue.component(VxTooltip.name, VxTooltip);
Vue.component(VxCard.name, VxCard);
Vue.component(VxList.name, VxList);
Vue.component(VxBreadcrumb.name, VxBreadcrumb);
Vue.component(FeatherIcon.name, FeatherIcon);
Vue.component(VxInputGroup.name, VxInputGroup);

// v-select component
import vSelect from 'vue-select';

// data table component
import { AgGridVue } from 'ag-grid-vue';

// Set the components prop default to return our fresh components
vSelect.props.components.default = () => ({
	Deselect: {
		render: createElement => createElement('feather-icon', {
			props: {
				icon: 'XIcon',
				svgClasses: 'w-4 h-4 mt-1'
			}
		}),
	},
	OpenIndicator: {
		render: createElement => createElement('feather-icon', {
			props: {
				icon: 'ChevronDownIcon',
				svgClasses: 'w-5 h-5'
			}
		}),
	},
});

Vue.component('v-select',vSelect);
Vue.component('vue-perfect-scrollbar', VuePerfectScrollbar);
Vue.component('dialog-prompt', DialogPrompt);
Vue.component('ag-grid-vue', AgGridVue);
Vue.component('input-number', InputNumber);

//Set Global Variable
Vue.mixin({
	data: function () {
		return {
			...GlobalVariable
		};
	}
});
