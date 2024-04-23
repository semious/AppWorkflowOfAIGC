import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ImageDemo from '../views/image-demo/index.vue'
import Template from '@/views/Template.vue'

const DEFAULT_LAYOUT = () => import('@/layout/index.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    name: 'DEMO',
    component: ImageDemo,
  },
  {
    path: '/',
    name: 'Template',
    component: Template,
    meta: {
      requiresAuth: false,
      name: "demo"
    },
  },
  // {
  //   path: '/',
  //   name: "",
  //   meta: {
  //     requiresAuth: false,
  //   },
  //   component: DEFAULT_LAYOUT,
  //   children: [
  //     {
  //       path: 'demo',
  //       name: 'demo',
  //       component: ImageDemo,
  //       meta: {
  //         requiresAuth: false,
  //         name: "demo"
  //       },
  //     },
  //   ],
  // },
]

const router = createRouter({ history: createWebHashHistory(), routes })

router.beforeEach((to, from, next) => {
  // window.document.title = to.meta.title === undefined ? '后台' : to.meta.title as string
  // if (to.meta.requiresAuth && !isAuthenticated()) { // 如果需要验证登录，并且没有登录，则跳转到登录页
  //   next("/login");
  // } else {
  //   next();
  // }
});

// 判断用户是否已经登录
function isAuthenticated() {
  // setTimeout(() => {window.sessionStorage.getItem('userInfo')}, 3 * 60 * 1000)
  const userInfo = window.sessionStorage.getItem('userInfo')
  // console.log(userInfo);
  if (userInfo === 'True') {
    // 用户信息存在，直接跳转到目标路由
    return true;
  }
  // // 在这里添加您的验证逻辑，例如检查是否有登录凭据等
  return false; // 这里返回false，表示用户没有登录
}

export default router
