/*=========================================================================================
  File Name: themeConfig.js
  Description: Theme configuration
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

// MAIN COLORS - VUESAX THEME COLORS
let colors = {
	primary : '#7367F0',
	success : '#28C76F',
	danger  : '#EA5455',
	warning : '#FF9F43',
	dark    : '#1E1E1E',
};

import Vue from 'vue';
import Vuesax from 'vuesax';
Vue.use(Vuesax, { theme:{ colors } });


// CONFIGS
const formConfig = {
    labelColor          : '',
    labelFont           : '',
    labelFontSize       : '',
    inputFont           : '',
    inputFontSize       : '',
    inputColor          : '',
    inputMarginBottom   : 'mb-3',
    inputMarginRight    : '',
    inputMarginLeft     : '',
    inputMarginTop      : '',
    rowMarginBottom   : 'mb-1',
    rowMarginRight    : '',
    rowMarginLeft     : '',
    rowMarginTop      : '',
};

const sidebarConfig = {
    iconWidth: '16',
    iconHeight: '16',
    iconBorder: '0',
    iconMarginRight: 'mr-2',
    iconMarginLeft: '',
};

export { formConfig, sidebarConfig };
