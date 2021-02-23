<template>
    <div class="page">
        <h1>This is home page</h1>
        <!-- 子组件 -->
        <compontent_1 msg="This is component[子组件] "></compontent_1>
    </div>
</template>
<script>
// 组件用例
import compontent_1 from '../components/component'
export default {
    name:'home',
    components:{
        compontent_1
    },
    beforeCreate(){

    },
    created(){
    },
    mounted(){
        //调用mutation 函数，修改全局状态
        this.$store.commit('setPublic')
        // 输出修改后的全局状态
        console.log('修改后的全局状态量为:'+this.$store.state.publicVariable)
    }
}
</script>
<style scoped>
    .page{border: 1px solid green;}
</style>