import request from '@/utils/request.js';

/**
 * Simple RESTful resource class
 */
class Resource {
    constructor(uri) {
        this.uri = uri;
    }
    list(query) {
        return request({
            url: '/' + this.uri,
            method: 'get',
            params: query,
        });
    }
    get(id) {
        return request({
            url: '/' + this.uri + '/' + id,
            method: 'get',
        });
    }
    store(resource) {
        return request({
            url: '/' + this.uri,
            method: 'post',
            data: resource,
        });
    }
    update(id, resource) {
        return request({
            url: '/' + this.uri + '/' + id,
            method: 'post',
            data: resource,
        });
    }

    delete(resource) {
        return request({
            url: '/' + this.uri,
            method: 'put',
            data: resource,
        });
    }
    trackingData(id) {
        return request({
            url: '/' + this.uri + '/log/' + id,
            method: 'get',
        });
    }
}

export {
    Resource as
    default
};
