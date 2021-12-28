import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'phonebook';

class PhoneBookResource extends Resource {
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

export { PhoneBookResource as default };
