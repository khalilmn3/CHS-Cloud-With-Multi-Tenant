
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'nightaudit/autopost';

class AutoPostTransactionResource extends Resource {
  constructor(){
    super(uri);
  }

    precheck(data){
        return request({
            url: '/'+uri+'/precheck',
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

}

export { AutoPostTransactionResource as default };
