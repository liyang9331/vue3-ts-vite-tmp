// vue实例化，代替 new vue
import { createApp } from 'vue'
// 根组件
import App from './App.vue'
// 状态管理
import store from './store'
// 路由
import router from './router'
// element-ui
import installElementPlus from './plugins/element'
// 浏览器差异初始化
import './assets/css/init.min.css'

const app = createApp(App)
installElementPlus(app)
app.use(router).use(store).mount('#app')