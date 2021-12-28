
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'housekeeping';

class HousekeepingResource extends Resource {
    constructor(){
        super(uri);
    }

    roomStatus(params) {
        return request({
        url: '/'+uri+'/roomstatus',
        method: 'post',
        data: params
        });
    }

    dataLookup(){
        return request({
            url: '/'+uri+'/form/datalookup',
            method: 'get'
            });
    }

    filterLookup() {
        return request({
            url: '/'+uri+'/form/filterlookup',
            method: 'get'
            });
    }

    roomBoy(){
        return request({
            url: '/roomboy/table/datagrid',
            method: 'get'
            });
    }

    trackingData(data){
        return request({
            url: '/tracking/datagrid',
            method: 'post',
            data: data
        });
    }
}

export { HousekeepingResource as default };
