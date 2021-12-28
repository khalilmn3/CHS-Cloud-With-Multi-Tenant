
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'reservation/availability';

class AvailabilityResource extends Resource {
    constructor(){
        super(uri);
    }

    availability(params){
        return request({
            url: '/'+uri,
            method: 'post',
            data: params
        })
    }

    roomAvailabilityForm(params){
        return request({
            url: '/reservation/roomavailability',
            method: 'post',
            data: params
        }) 
    } 

    roomAvailabilityFormLookUp(){
        return request({
            url: '/reservation/roomavailability/lookup',
            method: 'post'
        }) 
    } 

}

export { AvailabilityResource as default };
