
import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'reservation'
const uri = 'reservation'

class ReservationResource extends Resource {
  constructor(){
    super(uri);
  }

  log(id) {
    return request({
      url: '/tracking/log/'+tableName+'/'+id,
      method: 'get'
    });
  }

  dataLookup(params){
      return request({
          url: '/'+uri+'/form/datalookup',
          method: 'get',
          params: params
      })
  }

    insertReservationGroup(data){
        return request({
            url: '/'+uri+'/guestgroup/reservation',
            method: 'post',
            data : data
        })
    }

    autoAssignRoom(data){
        return request({
            url: '/'+uri+'/autoassign',
            method: 'put',
            data : data
        })
    }

    cancelReservation(data){
        return request({
            url: '/'+uri+'/cancel',
            method: 'post',
            data : data
        })
    }

    lockReservation(data){
        return request({
            url: '/'+uri+'/lock',
            method: 'put',
            data : data
        })
    }

    reservationGroupList(params){
        return request({
            url: '/'+uri+'/form/reservationgroup',
            method: 'post',
            data : params
        })
    }

    checkIn(data){
        return request({
            url: '/'+uri+'/checkin',
            method: 'put',
            data: data
        })
    }

    setWaitList(data){
        return request({
            url: '/'+uri+'/waitlist/set',
            method: 'post',
            data: data
        })
    }

    unsetWaitList(data){
        return request({
            url: '/'+uri+'/waitlist/unset',
            method: 'post',
            data: data
        })
    }

    roomNumber(params){
        return request({
            url: '/reservation/form/roomnumber',
            method: 'post',
            data : params
        })
    }

    availableRoom(params){
        return request({
            url: '/reservation/form/availableroom',
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

    reservationStatus(params){
        return request({
            url: '/'+uri+'/status/'+params,
            method: 'get',
        })
    }

    print(params){
        return request({
            url: '/'+uri+'/print/registrationform',
            method: 'get',
        })
    }

    logUserUpdateReservation(params){
        return request({
            url: '/reservation/loguserupdatereservation',
            method: 'post',
            data : params
        })
    }
}


export { ReservationResource as default };
