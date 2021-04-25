<template>
  <div class="hello">
    <!-- 测试图片 -->
    <img src="../assets/test_1.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    console.log(911)
    // test axios
    this.axios.get('localost','911')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
