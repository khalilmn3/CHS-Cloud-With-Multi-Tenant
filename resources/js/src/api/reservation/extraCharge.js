import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'reservation_extra_charge';
const uri = 'reservation/extracharge';

class ExtraChargeResource extends Resource {
    constructor() {
        super(uri);
    }

    log(id) {
        return request({
            url: `/tracking/log/${tableName}/${id}`,
            method: 'get',
        });
    }

    lookup(params) {
        return request({
            url: `/${uri}/lookup`,
            method: 'get',
            params,
        });
    }

    breakdownList(id){
        return request({
            url: '/'+uri+'/breakdown/list/'+id,
            method: 'get',
        })
    }

    insertBreakdown(data){
        return request({
            url: '/'+uri+'/breakdown/insert',
            method: 'post',
            data
        })
    }

    updateBreakdown(data){
        return request({
            url: '/'+uri+'/breakdown/update',
            method: 'post',
            data
        })
    }

    deleteBreakdown(data){
        return request({
            url: '/'+uri+'/breakdown/delete',
            method: 'post',
            data
        })
    }

    editBreakdown(id){
        return request({
            url: '/'+uri+'/breakdown/edit/'+id,
            method: 'get',
        })
    }

    insertPackage(data) {
        return request({
            url: '/'+uri+'/package',
            method: 'post',
            data
        })
    }

    getSubGroupAccount(data) {
        return request({
            url: '/'+uri+'/breakdown/sub-group-account',
            method: 'post',
            data
        })
    }
}

export { ExtraChargeResource as default };
