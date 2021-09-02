import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import './assets/css/init.css';
import router from './router';
import store from './store/index';
const app = createApp(App)
app.use(router).use(store).use(ElementPlus).mount('#app')
