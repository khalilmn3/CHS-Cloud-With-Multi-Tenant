
import Resource from '@/api/resource';
import request from '@/utils/request';

const tableName = 'folio';
const uri = 'foliohistory';

class TransactionResource extends Resource {
    constructor(){
        super(uri);
    }

    log(id) {
        return request({
        url: '/tracking/log/'+tableName+'/'+id,
        method: 'get'
        });
    }

    cancelCheckOut(data){
        return request({
            url: '/'+uri+'/cancelcheckout',
            method: 'post',
            data: data
        })
    }

    lookup(params){
        return request({
            url: '/'+uri+'/form/lookup',
            method: 'get',
            params: params
        })
    }

    account(params){
        return request({
            url: '/'+uri+'/form/account',
            method: 'get',
            params: params
        })
    }

    folioType(params){
        return request({
            url: '/'+uri+'/form/foliotype',
            method: 'get',
            params: params
        })
    }

    listRouting(){
        return request({
            url: '/'+uri+'/transfer/list/routing',
            method: 'get',
        })
    }

    listFolio(params){
        return request({
            url: '/'+uri+'/transfer/list/folio',
            method: 'get',
            params: params
        })
    }

    transfer(data){
        return request({
            url: '/'+uri+'/transfer/transaction',
            method: 'post',
            data: data
        })
    }

    exchangeRate(params){
        return request({
            url: '/'+uri+'/form/exchrate',
            method: 'get',
            params: params
        })
    }

    charge(data){
        return request({
            url: '/'+uri+'/charge',
            method: 'post',
            data: data
        })
    }

    payment(data){
        return request({
            url: '/'+uri+'/payment',
            method: 'post',
            data: data
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
}

export { TransactionResource as default };
