
import Resource from '@/api/resource';
import request from '@/utils/request';

const uri = '/usersetting/';

class UserSetting extends Resource {
    constructor(){
        super(uri);
    }

    menuAccessUser (params){
        return request({
            url: uri+'getmenuaccessusergroup',
            method: 'get',
            params: params
        });
    }

    userList (params){
        return request({
            url: uri+'user',
            params: params
        });
    }

    reportListData(params) {
        return request({
            url: '/usersetting/usergroup/getreportlist',
            method: 'get',
            params: params
        });
    }

    specialAccessList(params) {
        return request({
            url: '/usersetting/usergroup/specialaccess',
            method: 'get',
            params: params
        });
    }

    userGroup (params){
        return request({
            url: uri+'lookup/usergroup',
            method: 'get',
            params: params
        });
    }

    addUser(params){
        return request({
            url: uri+'user',
            method: 'post',
            data: params
        });
    }

    editUser(id){
        return request({
            url: uri+'user/'+id+'/edit',
            method: 'get'
        });
    }

    updateUser(params){
        return request({
            url: uri+'user',
            method: 'put',
            data: params
        });
    }

    deleteUser(params){
        return request({
            url: uri+'user/delete',
            method: 'post',
            data: params
        });
    }

    changePassword(params){
        return request({
            url: uri+'user/change-password',
            method: 'post',
            data: params
        });
    }

    getOtherAccess(data) {
        return request({
            url: 'usersetting/get-other-access',
            method: 'post',
            data,
        });
    }

}
export { UserSetting as default };
