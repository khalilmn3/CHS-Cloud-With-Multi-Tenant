
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'nightaudit/dayend';

class DayendCloseResource extends Resource {
  constructor(){
    super(uri);
  }

    precheck(data){
        return request({
            url: '/'+uri+'/precheck/critical',
            method: 'post',
            data: data
        })
    }

    post(data){
        return request({
            url: '/'+uri+'/post',
            method: 'post',
            data: data
        })
    }

    audit(data){
        return request({
            url: '/'+uri+'/audit',
            method: 'post',
            data: data
        })
    }

    lastDayendClose(){
        return request({
            url: '/'+uri+'/lastdayend',
            method: 'get'
        })
    }

}

export { DayendCloseResource as default };
