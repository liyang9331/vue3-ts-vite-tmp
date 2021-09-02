import { createStore } from 'vuex'

// 创建一个新的 store 实例
export default createStore({
    state() {
        if (sessionStorage.getItem('store')) {
            return JSON.parse(sessionStorage.getItem('store'))
        } else {
            return {
                resourcesIsShow: true,
                resourcesType: true,//true:同步教材资源 AND false:试卷资源
                currentRoute: '',//当前路由路径
                routerPath:process.env.BASE_URL,//路由前缀
                resourcesNavActive:1,//资源中心导航active激活标识
                user:'',
                pageTitle:''
            }
        }
    },
    mutations: {
        // 设置网页标题
        setPageTitle(state,val){
            state.pageTitle = val
        },
        increment(state, boolan) {
            state.resourcesIsShow = boolan
        },
        setResourcesType(state, boolan) {
            state.resourcesType = boolan
        },
        // 设置当前路由路径
        setCurrentRoute(state, path) {
            state.currentRoute = path
        },
        // 重置state
        resetStore(state, newState) {
            state = newState
        },
        // 更新资源中心导航active激活标识
        setResourcesNavActive(state,num){
            state.resourcesNavActive = num
        },
        setUserInfo(state,user){
            state.user = user
        },
        setbackup(state,obj){
            state.backupIsshow = obj
        },
        // 更新 移动端头部导航-显示状态
        setNavbarIsShow(state,obj){
            state.navbarIsShow = obj
        }
    }
})