import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'receipt';

class ReceiptResource extends Resource {
    constructor() {
        super(uri);
    }

    dataLookup(data) {
        return request({
            url: `${uri}/datalookup`,
            method: 'post',
            data,
        });
    }
    
    getReceiptNumber(data) {
        return request({
            url: `${uri}/number`,
            method: 'get',
        });
    }

}

export { ReceiptResource as default };
