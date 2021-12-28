
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'reservation';

class GuestProfileResource extends Resource {
    constructor(){
        super(uri);
    }

    guestProfile(params){
        return request({
            url: '/'+uri+'/form/guestprofile',
            method: 'get',
            params: params
        })
    }

    detail(params){
        return request({
            url: '/'+uri+'/form/guestprofiledetail',
            method: 'get',
            params: params
        })
    }
}

export { GuestProfileResource as default };
