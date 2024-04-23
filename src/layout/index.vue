<template>
  <a-layout class="layout">
    <a-layout> xxx
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Message } from "@arco-design/web-vue";

const router = useRouter();
const route = useRoute();

watch(
  () => route.name,
  (val, oval) => {
   
  }
);

</script>
<style lang="less" scoped>
@nav-size-height: 75px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

</style>
