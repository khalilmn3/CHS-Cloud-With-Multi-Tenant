import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'bank-transaction';

class BankTransactionResource extends Resource {
    constructor() {
        super(uri);
    }

    indexReconciliation(params) {
        return request({
            url: `${uri}/reconciliation`,
            method: 'get',
            params,
        })
    }

    reconciliationDetail(data) {
        return request({
            url: `${uri}/reconciliation/detail`,
            method: 'post',
            data,
        })
    }

    deleteReconciliation(data) {
        return request({
            url: `${uri}/reconciliation/delete`,
            method: 'post',
            data,
        })
    }

    lookupAccount(data) {
        return request({
            url: `${uri}/lookup/account`,
            method: 'post',
            data,
        });
    }

    lookupTransaction(data) {
        return request({
            url: `${uri}/lookup/transaction`,
            method: 'post',
            data,
        });
    }

}

export { BankTransactionResource as default };
