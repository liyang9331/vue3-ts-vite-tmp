<template>
  <div class="home">
    <TestOne msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TestOne from '@/components/test-one.vue'
export default {
  name: 'Home',
  components: {
    TestOne
  }
}
</script>
