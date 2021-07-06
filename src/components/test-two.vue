<template>
  <div class="hello">
    {{data}}
  </div>
</template>

<script>
// vue 3 组合式API语法实例
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,//表示参数必须传入
      default: '默认参数',//参数未传入时的默认参数
    }
  },
  setup(props) {
    const data = '组合式API测试2：' + props.msg;
    //setup 返回的所有内容都暴露给组件的其余部分 (计算属性、方法、生命周期钩子等等) 以及组件的模板。
    return {
      data
    }
  }
  // 组件的“其余部分”
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
