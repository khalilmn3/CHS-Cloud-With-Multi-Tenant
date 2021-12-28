import request from '@/utils/request';

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
      url: '/' + this.uri + '/' + id + '/edit',
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
  update(resource) {
    return request({
      url: '/' + this.uri + '/update',
      method: 'put',
      data: resource,
    });
  }
  delete(params) {
    return request({
      url: '/' + this.uri + '/delete',
      method: 'post',
      data: params
    });
  }

  destroy(id) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'delete',
    });
  }

}

export { Resource as default };
