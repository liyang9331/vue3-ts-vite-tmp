/*
    说明：这是Vue.js 3.0及以上版本的实际项目开发基础模板
    新版本全面支持TypeScript,组合式API,沿用之前的官方全家桶：vue-router vuex axios
*/
import { createApp } from 'vue'//创建vue实例
import App from './App.vue'//基础组件
import store from './store'//全局状态管理
import router from './router'//路由
import VueAxios from 'vue-axios'
import axios from '@/api/index'
// use将组件注入到vue根实例中
createApp(App).use(router).use(store).use(VueAxios,axios).mount('#app')
