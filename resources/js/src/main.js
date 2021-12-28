/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue';
import App from './App.vue';

// Vuesax Component Framework
import Vuesax from 'vuesax';

// i18n dictionary
import i18n from './lang';

import { loadingLayoutIndicator, closeLoadingLayoutIndicator } from '@/utils/general';

Vue.use(Vuesax);
//Language Translation
Vue.use(Vuesax, {
	// set element-ui default size
	i18n: (key, value) => i18n.t(key, value),
});
// Theme Configurations
import '../themeConfig.js';

// Globally Registered Components
import './globalComponents.js';

// Vue Router
import router from './router';

// Vuex Store
import store from './store/store';

// Vuesax Admin Filters
import './filters/filters';
// Vee Validate for Validation Form

window.Vue = require('vue');
window.VeeValidate = require('vee-validate');
window.Vue.use(window.VeeValidate);

// Vue Laravel Passport
Vue.component(
    'passport-clients',
    require('../components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('../components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('../components/passport/PersonalAccessTokens.vue').default
);

Vue.component(
    'VuePerfectScrollbar',
    require('vue-perfect-scrollbar').default
);
// End Vue Laravel Passport

// Vuejs - Vue wrapper for hammerjs
import {
	VueHammer
} from 'vue2-hammer';
Vue.use(VueHammer);

// PrismJS
import 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css'

//aG Grid
import 'ag-grid-enterprise';
import {
	LicenseManager
} from 'ag-grid-enterprise';
LicenseManager.setLicenseKey('For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-13_September_2020_[v2]_MTU5OTk1MTYwMDAwMA==931880529fd1f843daf745e6af1c1637');

Vue.config.productionTip = false;

Vue.prototype.$loadingIndicator = function (x) {
    loadingLayoutIndicator(x);
};

Vue.prototype.$closeLoadingIndicator = function (x) {
    closeLoadingLayoutIndicator(x);
  };

new Vue({
	router,
	store,
    i18n,
	render: h => h(App)
}).$mount('#app');
