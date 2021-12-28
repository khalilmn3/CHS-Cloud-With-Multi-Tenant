import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'ap-commission';

class APRefundDepositResource extends Resource {
    constructor() {
        super(uri);
    }

    getPaymentList(data) {
        return request({
            url: `${uri}/payment/index`,
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

    lookupTransaction(data) {
        return request({
            url: `${uri}/lookup/transaction`,
            method: 'post',
            data,
        });
    }

    dataLookup(data) {
        return request({
            url: `${uri}/datalookup`,
            method: 'post',
            data,
        });
    }

}

export { APRefundDepositResource as default };
