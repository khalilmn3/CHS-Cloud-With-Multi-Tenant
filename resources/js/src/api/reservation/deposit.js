
import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'guest_deposit';
const uri = 'reservation/guestdeposit';

class DepositResource extends Resource {
    constructor(){
        super(uri);
    }

    log(id) {
        return request({
        url: '/tracking/log/'+tableName+'/'+id,
        method: 'get'
        });
    }

    lookup(params){
        return request({
            url: '/'+uri+'/form/lookup',
            method: 'get',
            params: params
        })
    }

  lookupTransfer(reservationNumber){
    return request({
        url: '/'+uri+'/form/lookup/transfer/'+reservationNumber,
        method: 'get'
    })
  }

    transferDeposit(data){
        return request({
            url: '/'+uri+'/transfer',
            method: 'post',
            data: data
        })
    }

    editSubDepartment(id) {
        return request({
            url: '/'+uri+'/update/subdepartment/'+id,
            method: 'get',
        })
    }

    editRemark(id) {
        return request({
            url: '/'+uri+'/update/remark/'+id,
            method: 'get',
        })
    }

    editDocumentNumber(id) {
        return request({
            url: '/'+uri+'/update/documentnumber/'+id,
            method: 'get',
        })
    }

    getSubDepartment(id) {
        return request({
            url: '/'+uri+'/lookup/subdepartment/'+id,
            method: 'get',
        })
    }

    updateSubDepartment(data){
        return request({
            url: '/'+uri+'/update/subdepartment',
            method: 'post',
            data: data
        })
    }

    updateRemark(data){
        return request({
            url: '/'+uri+'/update/remark',
            method: 'post',
            data: data
        })
    }

    updateDocumentNumber(data){
        return request({
            url: '/'+uri+'/update/documentnumber',
            method: 'post',
            data: data
        })
    }

    account(params){
        return request({
            url: '/'+uri+'/form/account',
            method: 'get',
            params: params
        })
    }

    exchangeRate(params){
        return request({
            url: '/'+uri+'/form/exchrate',
            method: 'get',
            params: params
        })
    }

    correction(data){
        return request({
            url: '/'+uri+'/correction',
            method: 'post',
            data: data
        })
    }

    void(data){
        return request({
            url: '/'+uri+'/void',
            method: 'post',
            data: data
        })
    }

    amountBefore(data){
        return request({
            url: '/'+uri+'/correction/amountbefore',
            method: 'post',
            data: data
        })
    }


    balance(params){
        return request({
            url: '/'+uri+'/balance',
            method: 'get',
            params: params
        })
    }
}

export { DepositResource as default };
