import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'income-budget';

class IncomeBudgetResource extends Resource {
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

}

export { IncomeBudgetResource as default };
