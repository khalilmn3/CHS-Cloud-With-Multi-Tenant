/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import navbarSearchAndPinList from '@/layouts/components/navbar/navbarSearchAndPinList';
import themeConfig from '@/../themeConfig.js';
import colors from '@/../themeConfig.js';


// /////////////////////////////////////////////
// Variables
// /////////////////////////////////////////////

const userDefaults = {
	id          : localStorage.getItem('account_code'),          // From Auth
	displayName : 'John Doe', // From Auth
	about       : 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
	photoURL    : require('@assets/images/portrait/small/avatar-s-11.png'), // From Auth
	status      : 'online',
	userRole    : 'admin'
};

const globalAccount = {
    ccAdm           : '191',
    roomCharge      : '100',
    extraBed        : '101',
    cancelationFee  : '105',
};

// Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components
const is_touch_device = () => {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}
const addZeroHour = (i) => {
    let a = i;
    if (a < 10) {
        a = `0${a}`;
    }
    return a;
}

const checkInTime = () => {
    const time = new Date();
    const h = addZeroHour(time.getHours());
    const m = addZeroHour(time.getMinutes());
    const s = addZeroHour(time.getSeconds());
    const times = `${h}:${m}:${s}`;

    return times;
}

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
	AppActiveUser           : userDefaults,
	bodyOverlay             : false,
	isVerticalNavMenuActive : true,
    is_touch_device         : is_touch_device(),
    mainLayoutType          : themeConfig.mainLayoutType || 'vertical',
	navbarSearchAndPinList  : navbarSearchAndPinList,
	reduceButton            : themeConfig.sidebarCollapsed,
	verticalNavMenuWidth    : 'default',
	verticalNavMenuItemsMin : false,
	scrollY                 : 0,
	starredPages            : navbarSearchAndPinList.data.filter((page) => page.highlightAction),
	theme                   : themeConfig.theme || 'dark',
	themePrimaryColor       : colors.primary,
	checkOutTime            : '12:00:00',
	checkInTime             : checkInTime(),
	defaultMarket           : '006',
	defaultCurrency         : 'IDR',
	globalParameter         : globalAccount,

	// Can be used to get current window with
	// Note: Above breakpoint state is for internal use of sidebar & navbar component
	windowWidth: null,
};

export default state;
