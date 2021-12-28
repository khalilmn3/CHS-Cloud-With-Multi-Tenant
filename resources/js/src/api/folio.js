
import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'folio';
const uri = 'folio';

class DeskFolioResource extends Resource {
    constructor(){
        super(uri);
    }

    log(id) {
        return request({
        url: '/tracking/log/'+tableName+'/'+id,
        method: 'get'
        });
    }

    folioStatus(id) {
        return request({
        url: '/'+uri+'/status/'+id,
        method: 'get'
        });
    }

}

export { DeskFolioResource as default };
