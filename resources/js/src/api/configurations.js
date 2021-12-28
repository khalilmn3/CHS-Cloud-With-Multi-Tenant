
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = 'configuration';

class ConfigurationsResource extends Resource {
    constructor(){
        super(uri);
    }

    loadAllConfigurationList(){
        return request({
            url: '/'+uri+'/load-all-configuration',
            method: 'get'
        });
    }

    getReservation2(){
        return request({
            url: '/'+uri+'/reservation2',
            method: 'get'
        });
    }

    getReservation2Lookup(){
        return request({
            url: '/'+uri+'/reservation2/lookup',
            method: 'get'
        });
    }

    updateReservation2(data){
        return request({
            url: '/'+uri+'/reservation2/update',
            method: 'post',
            data: data
        });
    }

    getGlobalParameter(){
        return request({
            url: '/'+uri+'/global-parameter',
            method: 'get'
        });
    }

    getGlobalParameterLookup(){
        return request({
            url: '/'+uri+'/global-parameter/lookup',
            method: 'get'
        });
    }

    updateGlobalParameter(data){
        return request({
            url: '/'+uri+'/global-parameter/update',
            method: 'post',
            data: data
        });
    }

    getCompanyInformation(){
        return request({
            url: '/'+uri+'/company-information',
            method: 'get'
        });
    }

    getCompanyInformationLookup(params){
        return request({
            url: '/'+uri+'/company-information/lookup',
            method: 'get',
            params: params
        });
    }

    updateCompanyInformation(data){
        return request({
            url: '/'+uri+'/company-information/update',
            method: 'post',
            data: data
        });
    }
}

export { ConfigurationsResource as default };
