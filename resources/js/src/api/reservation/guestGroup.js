
import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'guest_group'
const uri = 'reservation/guestgroup'

class GuestGroupResource extends Resource {
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

export { GuestGroupResource as default };
