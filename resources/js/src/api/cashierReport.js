
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'cashier-report';

class CashierReportResource extends Resource {
    constructor(){
        super(uri);
    }

    closeShift(data){
        return request({
            url: '/'+uri+'/close-shift',
            method: 'post',
            data: data
        });
    }
}

export { CashierReportResource as default };
