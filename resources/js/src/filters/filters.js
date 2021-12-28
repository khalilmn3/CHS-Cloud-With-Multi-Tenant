import Vue from 'vue';
import moment from 'moment'
import store from '@/store/store.js'
import { xcurrencyFormat } from '@/utils/format.js'

let formatDefault = 'DD-MM-YYYY';
const formatConfig = store.state.configurations.shortDateFormat;

let formatDateString = formatDefault;
// let formatDateString = formatConfig.toUpperCase() != undefined ? formatConfig.toUpperCase() : formatDefault;

Vue.filter('capitalize', function (value) {
	if (!value) return '';
	value = value.toString();
	let arr = value.split(' ');
	let capitalized_array = [];
	arr.forEach((word) => {
		let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
		capitalized_array.push(capitalized);
	});
	return capitalized_array.join(' ');
});

Vue.filter('capitalizeFirst', function (value) {
	if (!value) return '';
	value = value.toString().toLowerCase();
	let arr = value.split(' ');
	let capitalized_array = [];
	arr.forEach((word) => {
		let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
		capitalized_array.push(capitalized);
	});
	return capitalized_array.join(' ');
});

Vue.filter('toString', function (value) {
	if(!value) return '';
	value = value.toString();
	return value;
});

Vue.filter('truncate', function(value, limit) {
	return value.substring(0, limit);
});

Vue.filter('tailing', function(value, tail) {
	return value + tail;
});

Vue.filter('time', function(value, is24HrFormat = false) {
	if(value) {
		const date = new Date(Date.parse(value));
		let hours = date.getHours();
		const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
		if(!is24HrFormat) {
			const time = hours > 12 ? 'AM' : 'PM';
			hours = hours % 12 || 12;
			return hours + ':' + min + ' ' + time;
		}
		return hours + ':' + min;
	}
});

Vue.filter('date', function(value, fullDate = false) {
	value = String(value);
	const date = value.slice(8,10).trim();
	const month = value.slice(4,7).trim();
	const year = value.slice(11,15);

	if(!fullDate) return date;
	else return date + ' ' + month + ' ' + year;
});

Vue.filter('dateMonth', function(value, fullDate = false) {
	value = String(value);
	const date = value.slice(8,10).trim();
	const month = value.slice(4,7).trim();
	const year = value.slice(11,15);

	if(!fullDate) return date + ' ' + month;
	else return date + ' ' + month + ' ' + year;
});

Vue.filter('fulldate', function formatDate(value) {
	let val = moment(value).format(formatDateString);
	return value ? val : '';
});


Vue.filter('datetime', function formatDate(value) {
	let val = moment(value).format('DD-MM-YYYY HH:mm:ss');
	return value ? val : '';
});

Vue.filter('full_datetime', function formatDate(value) {
	let val = moment(value).format('dddd DD-MM-YYYY HH:mm:ss');
	return value ? val : '';
});

Vue.filter('month', function(val, showYear = true) {
	val = String(val);

	const regx = /\w+\s(\w+)\s\d+\s(\d+)./;
	if(!showYear) {
		return regx.exec(val)[1];
	}else {
		return regx.exec(val)[1] + ' ' + regx.exec(val)[2];
	}

});

Vue.filter('csv', function(value) {
	return value.join(', ');
});

Vue.filter('filter_tags', function(value) {
	return value.replace(/<\/?[^>]+(>|$)/g, '');
});

Vue.filter('k_formatter', function(num) {
	return num > 999 ? (num/1000).toFixed(1) + 'k' : num;
});

Vue.filter('rupiah', function(num) {
	return 'Rp. '+Number(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')+'.-';
});

Vue.filter('number', function(num) {
    if(!isNaN(num)){
        return Number(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
        return num;
    }

});
Vue.filter('currency_format', function(num) {
    if(!isNaN(num)){
        return Number(num).toFixed(xcurrencyFormat).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
        return num;
    }

});
