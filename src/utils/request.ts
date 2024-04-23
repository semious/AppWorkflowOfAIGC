import axios from 'axios'
import store from '@/store'
import { API_BASE_URL } from '@/api/constants';

// create an axios instance
const axios_request = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_API_BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5 * 60 * 1000 // request timeout
  // timeout: 10000
})

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// request interceptor
axios_request.interceptors.request.use(
  config => {
    // do something before request is sent
    const env = window.sessionStorage.getItem('env');
    const token = window.sessionStorage.getItem('token');
    if (env) {
      config.headers['env'] = env;
    }
    // console.log("config :>>", config)
    if(config.url && (config.url.indexOf("clothes/demo/scale") >= 0 || config.url.indexOf("clothes/upload/psd") >= 0 ||
    config.url.indexOf("clothes/upload/cad") >= 0 || config.url.indexOf("clothes/style/save") >= 0)) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    // console.log('token :>> ', token);
    config.headers['token'] = token;
    // config.data && console.log('post :>> ', config.data);
    // config.params && console.log('query :>> ', config.params);
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

axios_request.interceptors.response.use(
  response => {
    // console.log('response :>> ', response);
    if (response.data.code === 401) {
      location.href = '/';
      return Promise.reject(response.data.message)
    }
    const res = response.data
    return res
  },
  error => {
    console.log('response error' + error)
    // location.href = '/';
    return Promise.reject(error)
  }
)

export function request(data: any) {
  return new Promise(resolve => {
    if (data.url && data.url.indexOf('http') === -1) {
      data.url = API_BASE_URL + data.url;
    }
    // console.log('data :>> ', data);
    resolve(axios_request.request(data));
  })
}
// export const request = axios_request
