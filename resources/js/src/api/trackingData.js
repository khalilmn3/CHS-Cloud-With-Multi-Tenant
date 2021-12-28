import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'tracking';

class TrackingDataResource extends Resource {
    constructor() {
        super(uri);
    }

    getData(data) {
        return request({
            url: `${uri}/datagrid`,
            method: 'post',
            data,
        });
    }
}

export { TrackingDataResource as default };
