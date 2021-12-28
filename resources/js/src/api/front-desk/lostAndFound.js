import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'lost-and-found';

class LostAndFoundResource extends Resource {
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

export { LostAndFoundResource as default };
