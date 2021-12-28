import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'budget-statistic';

class BudgetStatisticResource extends Resource {
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

export { BudgetStatisticResource as default };
