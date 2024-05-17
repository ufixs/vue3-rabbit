import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/style/common.scss'
import { lazyPlugin } from './directives'
import { componentPlugin } from './components'

const app = createApp(App)
// pinia
const pinia = createPinia()
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// router
app.use(router)
// 自定义指令
app.use(lazyPlugin)
// 全局组件插件
app.use(componentPlugin)

app.mount('#app')
