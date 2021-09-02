<template>
    <div ref='demo'></div>
</template>
<script>
import {onMounted,ref,watch} from 'vue'
export default {
    name:'demo',
    props:{
        demo:{
            type:String,
            default:''
        }
    },
    setup(props) {
        // 在组件创建之前执行，一旦 props 被解析，就将作为组合式 API 的入口
        // 注册生命周期钩子
        onMounted()
        watch()
    }
}
</script>