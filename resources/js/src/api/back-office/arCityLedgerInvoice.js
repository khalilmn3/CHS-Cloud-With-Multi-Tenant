import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'ar-city-ledger-invoice';

class ARCityLedgerInvoiceResource extends Resource {
    constructor() {
        super(uri);
    }

    updateActive(data) {
        return request({
            url: `${uri}/active`,
            method: 'post',
            data,
        });
    }
}

export { ARCityLedgerInvoiceResource as default };
