<template>
  <router-view />
</template>

<script lang="ts">
import { onMounted, onBeforeUnmount, nextTick } from "vue";
export default {
  name: "App",
  setup() {
    onMounted(() => {});
    onBeforeUnmount(() => {});
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
