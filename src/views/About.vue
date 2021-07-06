<template>
  <div class="about">
    <TestTwo msg="测试" />
  </div>
</template>
<script>
import TestTwo from '@/components/test-two.vue'
export default {
  name: 'Home',
  components: {
    TestTwo
  }
}
</script>
