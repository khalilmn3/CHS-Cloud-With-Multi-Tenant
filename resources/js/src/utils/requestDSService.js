import axios from 'axios';
import store from '@/store/store.js'

// Create axios instance
const service = axios.create({
    baseURL: '/api/',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        // 'withCredentials': true
        // 'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
});
service.defaults.headers.common = {
    // 'X-Requested-With': 'XMLHttpRequest',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
};
// Request intercepter/
// response pre-processing
service.interceptors.request.use (
    function (config) {
      const isAuth = store.getters.isAuth;
      if (isAuth) config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      return config;
    },
    function (error) {
      return Promise.reject (error);
    }
  );
  service.interceptors.response.use(response => {
    return response;
   }, error => {
    if (error.response && error.response.data) {
        if(error.response.status == 401){
            store.dispatch('logout')
        }
    }
    return Promise.reject (error);
  });

export default service;
