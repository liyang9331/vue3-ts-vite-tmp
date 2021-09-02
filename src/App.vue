<template>
  <router-view v-cloak />
</template>
<style scoped>
#app {
  width: 100%;
  height: 100%;
}
[v-cloak] {
  display: none;
}
</style>
<script>
export default {
  name: 'root',
  created() {
  },
  mounted() {
    // const time = (new Date).getTime() * 1000
    // 检测本地缓存中是否存储了用户信息
    if (localStorage.getItem("user")) {
    }
    const that = this
    // 用户刷新页面,会触发 window 对象上的 onBeforeUnload 事件
    window.onbeforeunload = (event) => {
      // store 保存到 sessionStorage
      window.sessionStorage.setItem('store', JSON.stringify(that.$store.state))
    };
  }
}
</script>