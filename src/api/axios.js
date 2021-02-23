// Axios 是一个基于 promise 的 HTTP 库,可以用在浏览器和 node.js 中
import axios from 'axios';//引入
// 增加了一些安全性的查询字符串解析和序列化字符串的库
import qs from 'qs';//引入

// axios 配置
axios.defaults.timeout = 8000;
//配置请求头
// axios.defaults.headers = {'Content-Type': 'application/json;charset=UTF-8'};
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'};
//axios.defaults.baseURL = LINKS.BASE;
// axios.defaults.baseURL = getBaseUrl(window.location.href);

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
    config => {
        // config.headers.Authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9';
        if (config.method  === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    error =>{
        return Promise.reject(error);
    }
);

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
    res =>{
        //对响应数据做些事
        if (!res.data.success) {
            return Promise.resolve(res);
        }
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);

// 默认导出 axios
export default axios;