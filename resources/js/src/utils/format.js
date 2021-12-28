import moment from 'moment';
import store from '@/store/store.js'


let formatDefault = 'DD-MM-YYYY';
const formatConfig = store.getters.shortDateFormat;

let xshortDateFormat = formatDefault;
// let formatDateString = formatConfig.toUpperCase() != undefined ? formatConfig.toUpperCase() : formatDefault;

// currencyFormat(value){
    let xcurrencyFormat = store.getters.currencyFormat || [];
    if(xcurrencyFormat.length > 0){
        xcurrencyFormat = xcurrencyFormat.toString().split(';')[0].split('.')[1].length;
    } else{
        xcurrencyFormat = 0
    }

function countDecimals(value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}

function formatTime(params) {
	let val = moment(params.value).format('HH:mm:ss');
	return params.value ? val : '';
}

function formatTimeValue(value) {
	let val = moment(value).format('HH:mm:ss');
	return value ? val : '';
}

function formatDate(params) {
	let val = moment(params.value).format(xshortDateFormat);
	return params.value ? val : '';
}

function formatDateTime(params) {
	let val = moment(params.value).format(xshortDateFormat+' HH:mm:ss');
	return params.value != undefined && val != 'Invalid date' ? val : '';
}

function formatDate2(params) {
    let format= moment(params.value).format(xshortDateFormat);
    return params.value != undefined ? format : '';
}

function formatDate3(value) {
    let format= moment(value).format(xshortDateFormat);
    return value != undefined ? format : '';
}
function formatDateDatabase(value) {
    let format= moment(value).format('YYYY-MM-DD');
    return value != undefined ? format : '';
}
function formatDateDatabaseAddWeek(value,week) {
    let date = new Date(value);
    date.setDate(date.getDate() + week * 7);
    let format= moment(date).format('YYYY-MM-DD');
    return value != undefined ? format : '';
}
function formatDateTimeDatabase(value) {
    let format= moment(value).format('YYYY-MM-DD HH:mm:ss');
    return value != undefined ? format : '';
}


function formatNumber(params) {
    let format = Number(params.value).toFixed(xcurrencyFormat).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return params.value != undefined ? format : '';
}

function formatNumberValue(value) {
    let format= Number(value).toFixed(xcurrencyFormat).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return value != undefined ? format : '';
}

function currencyFormat(params) {
	return '$' + params.value.toFixed(xcurrencyFormat).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function filterKey(e) {
	const key = e.key;

	// If is '.' key, stop it
	if (key === '.')
		return e.preventDefault();

	// OPTIONAL
	// If is 'e' key, stop it
	if (key === 'e')
		return e.preventDefault();
}

function toCurrency(value) {
	var formatter = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
	});
	return formatter.format(value)  ;
}

// This can also prevent copy + paste invalid character
function filterInput(e) {
	e.target.value = e.target.value.replace(/[^0-9]+/g, '');
}

function dataURItoBlob(dataURI) {
	// convert base64 to raw binary data held in a string
	// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
	var byteString = atob(dataURI.split(',')[1]);

	// separate out the mime component
	var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	// write the bytes of the string to an ArrayBuffer
	var ab = new ArrayBuffer(byteString.length);
	var ia = new Uint8Array(ab);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	//New Code
	return new Blob([ab], {
		type: mimeString
    });
}

function capitalize(value) {
    if (!value) return '';
    value = value.toString();
    let arr = value.split(' ');
    let capitalized_array = [];
    arr.forEach((word) => {
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        capitalized_array.push(capitalized);
    });
    return capitalized_array.join(' ');
}

export {
    capitalize,
    formatTime,
    formatTimeValue,
	formatDate,
	formatDate2,
	formatDate3,
	formatDateTime,
	formatDateDatabase,
	formatDateTimeDatabase,
    formatNumber,
    formatNumberValue,
    currencyFormat,
	toCurrency,
	filterKey,
	filterInput,
    dataURItoBlob,
    countDecimals,
    formatDateDatabaseAddWeek,
    xcurrencyFormat
};
