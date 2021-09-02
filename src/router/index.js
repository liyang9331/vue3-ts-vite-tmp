import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'
const routes = [
  {
    path: store.state.routerPath,
    name: 'root',
    component: () => import('@/App.vue')
  },
  // 教职工登录
  {
    path: store.state.routerPath + 'login',
    name: 'pcLogin',
    component: () => import('@/views/login/login.vue'),
  },
  // 资源中心
  {
    path: store.state.routerPath + 'resources-center',
    name: 'resources-center',
    component: () => import('@/views/resources-center/root.vue'),
    children: [
      {
        path: 'index',
        name: 'resourcesIndex',
        component: () => import('@/views/resources-center/index.vue'),
      },
      {
        path: 'resources',
        name: 'resources',
        component: () => import('@/views/resources-center/resources.vue'),
      },
      {
        path: 'small-micro-class',
        name: 'smallMicroClass',
        component: () => import('@/views/resources-center/small-micro-class.vue'),
      },
      {
        path: 'micro-class',
        name: 'microClass',
        component: () => import('@/views/resources-center/micro-class.vue'),
      }
    ]
  },
  // 数据可视化
  {
    path: store.state.routerPath + 'data-center',
    name: 'data-center',
    component: () => import('@/views/data-center/root.vue'),
    children: [
      {
        path: 'region',
        name: 'region',
        component: () => import('@/views/data-center/region.vue'),
      },
      {
        path: 'school',
        name: 'school',
        component: () => import('@/views/data-center/school.vue'),
      },
      {
        path: 'grade',
        name: 'grade',
        component: () => import('@/views/data-center/grade.vue'),
      },
      {
        path: 'class',
        name: 'class',
        component: () => import('@/views/data-center/class.vue'),
      },
    ]
  },
  // 全国数据统计
  {
    path: store.state.routerPath + 'whole-country',
    name: 'wholeCountry',
    component: () => import('@/views/data-center/whole-country.vue'),
  },
  // 校本资源-学生版
  {
    path: store.state.routerPath + 'resources-school-student',
    name: 'resourcesSchoolStudent',
    component: () => import('@/views/resources-center/resources-school-student.vue'),
  },
  // 校本资源-教师版
  {
    path: store.state.routerPath + 'resources-school-teacher',
    name: 'resourcesSchoolTeacher',
    component: () => import('@/views/resources-center/resources-school-teacher.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
// 导航卫士
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 保存当前路由path
  store.commit('setCurrentRoute', to.path)
  if (to.path == store.state.routerPath + "resources-center/resources") {
    store.commit('increment', false)
  } else if (from.path == store.state.routerPath + "resources-center/resources") {
    store.commit('increment', true)
  }
  // 设置网页标题
  // 登录页
  if (to.name == 'pcLogin') {
    store.commit('setPageTitle', '智慧教学大数据管理中心-登录')
  }
  // 资源中心首页 resourcesIndex
  if (to.name == 'resourcesIndex') {
    store.commit('setPageTitle', store.state.user.province_name + store.state.user.city_name + store.state.user.area_name + '大数据资源中心-首页')
  }
  // 资源中心-区域资源页 resources
  if (to.name == 'resources') {
    store.commit('setPageTitle', store.state.user.province_name + store.state.user.city_name + store.state.user.area_name + '资源中心_高中|初中|小学 各学科教学资源精品汇总')
  }
  // 资源中心-小微课
  if (to.name == 'smallMicroClass') {
    store.commit('setPageTitle', store.state.user.province_name + store.state.user.city_name + store.state.user.area_name + '资源中心_小微课')
  }
  // 资源中心-微课
  if (to.name == 'microClass') {
    store.commit('setPageTitle', store.state.user.province_name + store.state.user.city_name + store.state.user.area_name + '资源中心_微课')
  }
  // 智慧教学大数据管理中心
  if (to.name == 'wholeCountry' || to.name == 'region' || to.name == 'school' || to.name == 'grade' || to.name == 'class') {
    store.commit('setPageTitle', '智慧教学大数据管理中心')
    document.title = store.state.pageTitle
  }
  // 解决资源中心 跳转到 数据中心 再返回资源中心：导航激活状态读取store,导致状态不正确
  if(to.name == 'region'){
    store.commit('setResourcesNavActive',1)
  }
  next()
})
export default router