
import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'cfg_init_sub_department';
const uri = 'cfg_init_sub_department';

class SubDepartmentResource extends Resource {
    constructor(){
        super(uri);
    }

    log(id) {
        return request({
        url: '/tracking/log/'+tableName+'/'+id,
        method: 'get'
        });
    }

}

export { SubDepartmentResource as default };
