
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'special-access';

class SpecialAccessResource extends Resource {
    constructor(){
        super(uri);
    }

    checkSpecialAccess(data){
        return request({
            url: '/'+uri+'/check',
            method: 'post',
            data: data
        });
    }
}
export { SpecialAccessResource as default };
