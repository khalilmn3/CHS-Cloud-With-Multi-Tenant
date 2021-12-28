
import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'Folio'
const uri = 'guestinhouse';

class GuestInHouseResource extends Resource {
  constructor(){
    super('guestinhouse');
  }

  checkOut(data){
    return request({
        url: '/'+uri+'/checkout',
        method: 'post',
        data: data
    })
}

    complimentHu(data){
        return request({
            url: '/'+uri+'/compliment',
            method: 'post',
            data: data
        })
    }

    autoRoomCharge(data){
        return request({
            url: '/'+uri+'/posting/autoroomcharge',
            method: 'post',
            data: data
        })
    }

    moveRoom(data){
        return request({
            url: '/'+uri+'/other/moveroom',
            method: 'post',
            data: data
        })
    }

    switchRoom(data){
        return request({
            url: '/'+uri+'/other/switchroom',
            method: 'post',
            data: data
        })
    }

    listSwitchRoom(data){
        return request({
            url: '/'+uri+'/other/list/switchroom',
            method: 'post',
            data: data
        })
    }

    lock(data){
        return request({
            url: '/'+uri+'/other/lock',
            method: 'post',
            data: data
        })
    }

    incognito(data){
        return request({
            url: '/'+uri+'/other/incognito',
            method: 'post',
            data: data
        })
    }

    cancelCheckIn(data){
        return request({
            url: '/'+uri+'/other/cancel',
            method: 'post',
            data: data
        })
    }

    message(data){
        return request({
            url: '/'+uri+'/other/message',
            method: 'post',
            data: data
        })
    }

    toDo(data){
        return request({
            url: '/'+uri+'/other/todo',
            method: 'post',
            data: data
        })
    }

  log(id) {
    return request({
      url: '/tracking/log/'+tableName+'/'+id,
      method: 'get'
    });
  }

  dataLookup(){
      return request({
          url: '/reservation/form/datalookup',
          method: 'get'
      })
  }

    roomNumber(params){
        return request({
            url: '/reservation/form/roomnumber/false',
            method: 'get',
            params : params
        })
    }

    roomRate(params){
        return request({
            url: '/reservation/form/roomrate',
            method: 'get',
            params : params
        })
    }

    dailyRate(params){
        return request({
            url: '/reservation/form/dailyrate',
            method: 'get',
            params : params
        })
    }

    state(params){
        return request({
            url: '/reservation/form/citystate',
            method: 'get',
            params : params
        })
    }

    guestProfile(){
        return request({
            url: '/reservation/form/guestprofile',
            method: 'get'
        })
    }


}

export { GuestInHouseResource as default };
