
import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'reservation';
const uri = 'reservation/scheduledrate';

class ScheduledRateResource extends Resource {
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

export { ScheduledRateResource as default };
