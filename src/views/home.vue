<template>
    <div class="page">
        <h1>This is home page</h1>
        <compontent_1 msg="This is component "></compontent_1>
    </div>
</template>
<script>
// 组件用例
import compontent_1 from '../components/component'
export default {
    name:'home',
    components:{
        compontent_1
    }
}
</script>
<style scoped>
    .page{border: 1px solid green;}
</style>