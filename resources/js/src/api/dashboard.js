
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'dashboard';

class AuditDateResource extends Resource {
    constructor(){
        super(uri);
    }

    roomStatistic(id) {
        return request({
        url: '/'+uri+'/roomstatistic',
        method: 'post'
        });
    }

    roomStatistic2(id) {
        return request({
        url: '/'+uri+'/roomstatistic2',
        method: 'post'
        });
    }

    expectedArrivalDeparture(id) {
        return request({
        url: '/'+uri+'/expected-arrival-departure',
        method: 'post'
        });
    }

    roomStatus(id) {
        return request({
        url: '/'+uri+'/room-status',
        method: 'post'
        });
    }
    roomSold(id) {
        return request({
        url: '/'+uri+'/room-sold',
        method: 'post'
        });
    }
}

export { AuditDateResource as default };
