import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'roomrate/lastdeal';

class LastDealResource extends Resource {
    constructor() {
        super(uri);
    }

}

export { LastDealResource as default };
