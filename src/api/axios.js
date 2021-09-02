import axios from 'axios'
import qs from 'qs'
import store from '@/router/index.js'
// 超时时间
axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
// axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.headers.common['Authorization'] = '';// 设置请求头为 Authorization
axios.defaults.baseURL = process.env.VUE_APP_URL;// 配置axios请求的地址
// 请求拦截
axios.interceptors.request.use(
    config => {
        // 请求头添加token字段
        if (JSON.parse(localStorage.getItem("deareduUser"))) {
            if (config.method == "post") {
                config.data.token = JSON.parse(localStorage.getItem("deareduUser")).token
                config.data.expireTime = JSON.parse(localStorage.getItem("deareduUser")).expireTime
            } else if (config.method == "get") {
                config.params.token = JSON.parse(localStorage.getItem("deareduUser")).token
                config.params.expireTime = JSON.parse(localStorage.getItem("deareduUser")).expireTime
            }

        }
        if (JSON.parse(localStorage.getItem("student"))) {
            if (config.method == "post") {
                config.data.token = JSON.parse(localStorage.getItem("student")).token
                config.data.expireTime = JSON.parse(localStorage.getItem("student")).expireTime
            } else if (config.method == "get") {
                config.params.token = JSON.parse(localStorage.getItem("student")).token
                config.params.expireTime = JSON.parse(localStorage.getItem("student")).expireTime
            }
        }
        if (config.method == "post") {
            config.data = qs.stringify(config.data)
        }
        // 1. 这个位置就请求前最后的配置
        // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
axios.interceptors.response.use(
    response => {
        const isMoble = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        // token 已过期，重定向到登录页面
        if (response.data.code && response.data.code == 4) {
            window.loaclStorage.clear()
            if (isMoble != null) {
                //  重定向到登录页
                this.$router.push(store.state.routerPath + 'pc/login')
            } else {
                this.$router.push(store.state.routerPath + 'moble/login')
            }
        }
        return response.data;
    },
    error => {
        // 请求失败
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    // 对400错误您的处理
                    console.log("错误请求");
                    break;
                case 403:
                    // 对 403 错误进行处理
                    console.log("拒绝访问");
                    break;
                case 404:
                    // 对 404 错误进行处理
                    console.log("请求错误,未找到该资源");
                    break;
                case 500:
                    // 对 500 错误进行处理
                    console.log("服务器端出错");
                    break;
                case 502:
                    // 对 502 错误进行处理
                    console.log("网络错误");
                    break;
                case 503:
                    // 对 503 错误进行处理
                    console.log("服务不可用");
                    break;
                case 504:
                    // 对 504 错误进行处理
                    console.log("网络超时");
                    break;
                default:
                    // 如果以上都不是的处理
                    return Promise.reject(error);
            }
        } else {
            console.log("连接到服务器失败");
        }
    }
)
export default axios