import { createStore } from 'vuex'

export default createStore({
  state: {
    publicVariable:true//定义全局状态
  },
  mutations: {
    // 修改全局状态
    setPublic(state){
      state.publicVariable = false
    }
  },
  actions: {
  },
  modules: {
  }
})
