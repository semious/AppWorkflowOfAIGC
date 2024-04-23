<template>
  <a-layout class="layout">
    <div class="layout-navbar">
      <NavBar />
    </div>
    <a-layout>
      <a-layout>
        <a-layout> </a-layout>

        <a-layout class="layout-content" :style="paddingStyle">
          <a-layout-content style="height: 100%; overflow-y: auto">
            <PageLayout />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Message } from "@arco-design/web-vue";
import PageLayout from "./page-layout.vue";
import NavBar from "@/components/navbar/index.vue";

const router = useRouter();
const route = useRoute();
const menuList = ref([]);
menuList.value = [
  // {
  //   key: 0,
  //   name: "示例",
  //   pathName: "Clothing",
  //   pathIcon: new URL("@/assets/images/pathIcon/ai_create.png", import.meta.url)
  //     .href,
  //   pathIconSelect: new URL(
  //     "@/assets/images/pathIcon/ai_create_select.png",
  //     import.meta.url
  //   ).href,
  // },
];
const navbarHeight = `75px`;
const collapsed = ref(false);
const currentIdx = ref(0);

currentIdx.value = menuList.value.findIndex((item: any) => {
  return item.pathName == route.name;
});
watch(
  () => route.name,
  (val, oval) => {
    currentIdx.value = menuList.value.findIndex((item: any) => {
      return item.pathName == route.name;
    });
  }
);

const menuWidth = computed(() => {
  return collapsed.value ? 48 : 144;
});
const paddingStyle = computed(() => {
  const paddingLeft = { paddingLeft: `${menuWidth.value}px` };
  const paddingTop = { paddingTop: navbarHeight };
  return { ...paddingLeft, ...paddingTop };
});
</script>
<style lang="less" scoped>
@nav-size-height: 75px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
}

.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  box-shadow: none;

  .app-info {
    // padding: 24px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 144px;
    height: 75px;
    background: #3357df;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;

    span {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      margin-left: 2px;
    }
  }

  :deep(.arco-menu) {
    flex: 1;

    .arco-menu-inner {
      padding-top: 45px;

      .arco-menu-icon {
        img {
          width: 14px;
        }
      }
    }

    .arco-menu-selected {
      background: transparent;
      color: inherit;
    }
  }

  > :deep(.arco-layout-sider-children) {
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
  }

  .menu-selected {
    background: transparent;

    :deep(.arco-menu-title) {
      font-size: 14px;
      font-weight: bolder;
      color: #165dff;
    }
  }
}

.arco-layout {
  flex: auto;
}

.layout-content {
  // min-height: 100vh;
  overflow-y: hidden;
  background-color: #f7f8fa;
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
