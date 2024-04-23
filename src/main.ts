import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/normalize.css'
import '@/assets/css/global.less'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { Message } from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css'
import '@/assets/style/global.less';

const app = createApp(App)
Message._context = app._context;
app.use(store)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)

app.mount('#app')

