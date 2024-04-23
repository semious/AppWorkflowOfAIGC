<template>
  <Layout>
    <template #content>
      <h2>欢迎</h2>
    </template>
  </Layout>
</template>

<script>
import { onMounted } from "vue";
import {
  IconMenuFold,
  IconMenuUnfold,
  IconApps,
  IconBug,
  IconBulb,
} from "@arco-design/web-vue/es/icon";

import Layout from "@/components/Layout.vue";

export default {
  components: {
    IconMenuFold,
    IconMenuUnfold,
    IconApps,
    IconBug,
    IconBulb,
    Layout,
  },
  setup() {
    onMounted(() => {
    });

    const users = window.sessionStorage.getItem('usernames')
    return {
      users
    };
  },
  methods: {
    navigateToPage(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>
<style>
</style>
