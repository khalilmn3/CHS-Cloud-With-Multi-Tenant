import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'ar-city-ledger';

class ARCityLedgerResource extends Resource {
    constructor() {
        super(uri);
    }

    getInvoiceList(params) {
        return request({
            url: `${uri}/invoice`,
            method: 'get',
            params,
        });
    }


    dataLookup(data) {
        return request({
            url: `${uri}/datalookup`,
            method: 'post',
            data,
        });
    }

    getCompanyType(data) {
        return request({
            url: `${uri}/filter/company-type`,
            method: 'post',
            data,
        });
    }

    getFolio(data) {
        return request({
            url: `${uri}/folio`,
            method: 'post',
            data,
        });
    }

    editDirectBill(data) {
        return request({
            url: `${uri}/direct-bill/edit`,
            method: 'post',
            data,
        });
    }

    updateDirectBill(data) {
        return request({
            url: `${uri}/direct-bill/update`,
            method: 'post',
            data,
        });
    }

    // payment
    getPayment(params) {
        return request({
            url: `${uri}/payment/index`,
            method: 'get',
            params,
        });
    }

    dataLookupPayment(params) {
        return request({
            url: `${uri}/payment/datalookup`,
            method: 'get',
            params,
        });
    }

    insertPayment(data) {
        return request({
            url: `${uri}/payment`,
            method: 'post',
            data,
        });
    }
    
    getInvoiceDetail(data) {
        return request({
            url: `${uri}/invoice/detail`,
            method: 'post',
            data,
        });
    }

    deletePayment(data) {
        return request({
            url: `${uri}/payment/delete`,
            method: 'post',
            data,
        });
    }
}

export { ARCityLedgerResource as default };
