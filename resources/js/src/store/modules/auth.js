import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/utils/request.js'
import router from '@/router'

Vue.use(Vuex)

  let state= {
    token: localStorage.getItem('token') || null,
    accountCode: localStorage.getItem('account_code'),
    accountName: localStorage.getItem('account_name'),
    accountGroup: localStorage.getItem('account_group'),
    accountEmail: localStorage.getItem('account_email'),
    isChangedPassword: localStorage.getItem('is_changed_password') || null,
    group: [],
    errors: []
  }
  let mutations= {
    setToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = ''
    },
    setAccount(state,payload) {
        state.accountCode = payload.account_code
        state.accountName = payload.account_name
        state.accountGroup = payload.account_group
        state.accountEmail = payload.account_email
        state.isChangedPassword = payload.is_changed_password
      },
    destroyAccount(state,payload) {
      state.user = ''
      state.accountCode = ''
      state.accountName = ''
      state.accountGroup = ''
      state.accountEmail = ''
      state.isChangedPassword = ''
    },
    SET_ACCOUNT(state, payload) {
        state.account = payload
    },
    SET_GROUP(state, payload){
        state.group = payload
    },
    SET_ERRORS(state, payload) {
        state.errors = payload
    },
    CLEAR_ERRORS(state) {
        state.errors = []
    }
  }
  const actions= {
    register(context, data) {
      return new Promise((resolve, reject) => {
        request.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password,
          c_password: data.c_password,
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    login(context, payload) {
        context.commit('CLEAR_ERRORS');
        return new Promise((resolve, reject) => {
            request.post('/login', {
              user_id: payload.user_id,
              password: payload.password,
              shift: payload.shift
            })
              .then(response => {
                context.commit('CLEAR_ERRORS');
                if (response.data.success) {
                    const data = response.data.success
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('account_code', data.account_code)
                    localStorage.setItem('account_name', data.account_name)
                    localStorage.setItem('account_email', data.account_email)
                    localStorage.setItem('account_group', data.account_group)
                    localStorage.setItem('is_changed_password', data.is_changed_password)
                    document.title = 'Cakrasoft Cloud System';
                    context.commit('setToken', data.token)
                    context.commit('setAccount', data)
                    resolve(response)
                } else {
                    resolve(response)
                }
              })
              .catch(error => {
                context.commit('SET_ERRORS', { invalid: 'User ID/Password Invalid' })
                reject(error)
              })
            })
    },
    logout(context,isChangePassword) {
        if (context.getters.isAuth) {
            if (!isChangePassword) {
                // $nextTick(()=>{ this._vm.$vs.loading({container:'#layout--main',scale:1}) });
            }
        window.stop();
        return new Promise((resolve, reject) => {
            request.post('/logout')
            .then(response => {
                localStorage.removeItem("token");
                localStorage.removeItem("account_code");
                localStorage.removeItem("account_name");
                localStorage.removeItem("account_email");
                localStorage.removeItem("account_group");
                localStorage.removeItem("is_changed_password");
                context.commit("destroyToken");
                context.commit("destroyAccount");
                window.open("/","_self")
                resolve(response)
            })
            .catch(error => {
                localStorage.removeItem("token");
                localStorage.removeItem("account_code");
                localStorage.removeItem("account_name");
                localStorage.removeItem("account_email");
                localStorage.removeItem("account_group");
                localStorage.removeItem("is_changed_password");
                context.commit("destroyToken");
                context.commit("destroyAccount");
                window.stop();
                window.open("/","_self")
                reject(error)
            })
        })
      }else{
        window.stop();
        window.open("/","_self")
      }
    },
    unauthorized(context){
        context.commit('destroyToken');
        context.commit('destroyAccount')
        localStorage.removeItem('token')
        localStorage.removeItem('account')
        window.open("/","_self")
    },
  }
  const getters= {
    isAuth: state => {
        return state.token != "null" && state.token != null
    },
    isChangedPassword: state => {
        return state.isChangedPassword != "null" && state.isChangedPassword != null &&  state.isChangedPassword;
    }
  }

  export default {
    state,
    actions,
    mutations,
    getters
}
