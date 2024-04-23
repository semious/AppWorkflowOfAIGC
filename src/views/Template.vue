<template>
  <a-layout class="container">
    <a-layout-header>
      <h3>Template</h3>
    </a-layout-header>
    <a-layout-content>
      <a-space direction="vertical">
        <div>模板代码: views/Template.vue</div>
        <div>框架地址: <a target="_blank" href="https://arco.design/vue/docs/start">https://arco.design/vue</a></div>
      </a-space>

      <!-- <a-table :pagination="false" :columns="columns" :data="data" :stripe="true">
      </a-table>
      <a-pagination :pageSize="50" :current="curPage" :style='{ "justify-content": "flex-end" }' :total="total" /> -->
    </a-layout-content>
  </a-layout>
</template>
    
<script lang="ts">
import { ref, onMounted, computed, reactive, watch, onUpdated } from "vue";
import { Message } from '@arco-design/web-vue';
import { useRouter } from 'vue-router';
import { request } from '@/utils/request'

export default {
  name: "App",
  components: {
  },
  setup() {
    const router = useRouter();
    const route = router.currentRoute;

    watch(() => router.currentRoute.value, () => {
      // console.log('router.currentRoute.value.query', router.currentRoute.value.query);
    }, { immediate: true });

    const columns = [
      {
        title: 'test',
        dataIndex: 'test',
        width: 80,
      },
    ];
    const data = ref([]);

    onMounted(() => {

    });

    onUpdated(() => {
    });

    // const submit = (e: any) => {
    //   console.log('submit');
    //   e.stopPropagation();
    //   uploadRef.value.submit();
    // };

    // const onChange = (fileList: any) => {
    //   console.log('fileList :>> ', fileList);
    //   files.value = fileList;
    // };

    // function goToUsers() {
    //   window.sessionStorage.removeItem('currentUser');
    //   router.push({
    //     path: '/home',
    //   });
    // }

    function get(url: string, params: any) {
      request({
        url,
        method: 'GET',
        params,
      }).then((res: any) => {
        console.log('res', res);
      })
    }

    function post(url: string, data: any) {
      request({
        url,
        method: 'POST',
        data,
      }).then((res: any) => {
        console.log('res', res);
      })
    }

    return {
      columns,
      data,
    };
  },
};
</script>
    
<style scoped>
.container {
  margin: 16px;
}
</style>
