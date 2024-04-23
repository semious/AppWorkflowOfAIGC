<template>
  <div>
    <div>
      hello world
    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default {
  setup() {
    const dataList = ref([])

    return {
      dataList,
    }
  },
  mounted() {
  },
}

</script>

<style lang="less" scoped>

</style>
