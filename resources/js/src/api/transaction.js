import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'sub_folio';
const uri = 'transaction';

class TransactionResource extends Resource {
    constructor() {
        super(uri);
    }

    log(id) {
        return request({
            url: `/tracking/log/${tableName}/${id}`,
            method: 'get',
        });
    }

    lookup(params) {
        return request({
            url: `/${uri}/form/lookup`,
            method: 'get',
            params,
        });
    }

    account(params) {
        return request({
            url: `/${uri}/form/account`,
            method: 'get',
            params,
        });
    }

    folioType(params) {
        return request({
            url: `/${uri}/form/foliotype`,
            method: 'get',
            params,
        });
    }

    listRouting(params) {
        return request({
            url: `/${uri}/transfer/list/routing`,
            method: 'get',
            params,
        });
    }

    listFolio(params) {
        return request({
            url: `/${uri}/transfer/list/folio`,
            method: 'get',
            params,
        });
    }

    listReturnTransfer(params) {
        return request({
            url: `/${uri}/transfer/list/return`,
            method: 'get',
            params,
        });
    }

    transferTransaction(data) {
        return request({
            url: `/${uri}/transfer/transaction`,
            method: 'post',
            data,
        });
    }

    transferBalance(data) {
        return request({
            url: `/${uri}/transfer/balance`,
            method: 'post',
            data,
        });
    }

    routing(data) {
        return request({
            url: `/${uri}/transfer/routing`,
            method: 'post',
            data,
        });
    }

    removeRouting(data) {
        return request({
            url: `/${uri}/transfer/routing/remove`,
            method: 'post',
            data,
        });
    }

    returnTransfer(data) {
        return request({
            url: `/${uri}/transfer/return`,
            method: 'post',
            data,
        });
    }

    moveSubFolioGroup(data) {
        return request({
            url: `/${uri}/move`,
            method: 'post',
            data,
        });
    }

    exchangeRate(params) {
        return request({
            url: `/${uri}/form/exchrate`,
            method: 'get',
            params,
        });
    }

    charge(data) {
        return request({
            url: `/${uri}/charge`,
            method: 'post',
            data,
        });
    }

    payment(data) {
        return request({
            url: `/${uri}/payment`,
            method: 'post',
            data,
        });
    }

    amountBefore(data) {
        return request({
            url: `/${uri}/correction/amountbefore`,
            method: 'post',
            data,
        });
    }

    correction(data) {
        return request({
            url: `/${uri}/correction`,
            method: 'post',
            data,
        });
    }

    void(data) {
        return request({
            url: `/${uri}/void`,
            method: 'post',
            data,
        });
    }

    balance(params) {
        return request({
            url: `/${uri}/balance`,
            method: 'get',
            params,
        });
    }

    getFolioType(params) {
        return request({
            url: `/${uri}/foliotype`,
            method: 'get',
            params,
        });
    }

    editSubDepartment(id) {
        return request({
            url: `/${uri}/update/subdepartment/${id}`,
            method: 'get',
        });
    }

    editRemark(id) {
        return request({
            url: `/${uri}/update/remark/${id}`,
            method: 'get',
        });
    }

    editDocumentNumber(id) {
        return request({
            url: `/${uri}/update/documentnumber/${id}`,
            method: 'get',
        });
    }

    editDirectBill(id) {
        return request({
            url: `/${uri}/update/directbill/${id}`,
            method: 'get',
        });
    }

    getSubDepartment(id) {
        return request({
            url: `/${uri}/lookup/subdepartment/${id}`,
            method: 'get',
        });
    }

    getCompany(id) {
        return request({
            url: `/${uri}/lookup/company/${id}`,
            method: 'get',
        });
    }

    updateSubDepartment(data) {
        return request({
            url: `/${uri}/update/subdepartment`,
            method: 'post',
            data,
        });
    }

    updateRemark(data) {
        return request({
            url: `/${uri}/update/remark`,
            method: 'post',
            data,
        });
    }

    updateDocumentNumber(data) {
        return request({
            url: `/${uri}/update/documentnumber`,
            method: 'post',
            data,
        });
    }

    updateDirectBill(data) {
        return request({
            url: `/${uri}/update/directbill`,
            method: 'post',
            data,
        });
    }

    getProperties1(idLog) {
        return request({
            url: `/${uri}/properties/list1/${idLog}`,
            method: 'get',
        });
    }

    getProperties2(idLog) {
        return request({
            url: `/${uri}/properties/list2/${idLog}`,
            method: 'get',
        });
    }

    getProperties3(idLog) {
        return request({
            url: `/${uri}/properties/list3/${idLog}`,
            method: 'get',
        });
    }

    getPackageList() {
        return request({
            url: `/${uri}/package/list`,
            method: 'get',
        });
    }

    packageLookup(data) {
        return request({
            url: `/${uri}/package/package-lookup`,
            method: 'post',
            data
        });
    }

    insertPackage(data) {
        return request({
            url: `/${uri}/package/package`,
            method: 'post',
            data
        });
    }

    packageBreakdown(idLog) {
        return request({
            url: `/${uri}/package/package-breakdown/${idLog}`,
            method: 'get'
        });
    }

    getAdvancedCorrectionBreakdown(data) {
        return request({
            url: `/${uri}/advanced-correction/${data}`,
            method: 'get',
        });
    }

    updateAdvancedCorrection(data) {
        return request({
            url: `/${uri}/advanced-correction`,
            method: 'post',
            data
        });
    }
}

export { TransactionResource as default };
