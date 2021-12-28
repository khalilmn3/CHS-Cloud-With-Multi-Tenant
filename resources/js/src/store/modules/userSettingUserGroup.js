import store from '@/store/store.js'
import userSettingResource from '@/api/tools/user-setting/userSetting.js';
const userSettingresource = new userSettingResource;

let userAccessIDLogin = ''

const state={
    menuAcesssUserData : [],
}

const mutations = {
    SET_MENU_ACCESS(state, value) {
        state.menuAcesssUserData = value
      },
}

const actions = {
    async setAccessMenuUser({ commit }, params) {
        let { data } = await userSettingresource.menuAccessUser({paramLogin: params})
        commit('SET_MENU_ACCESS', data)
    },
}

export default {
    state,
    actions,
    mutations,
}
