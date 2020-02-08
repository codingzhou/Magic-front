import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './public-path'
import '@/style/index.scss'
import routes from './router'
import store from './store'
import './utils/captureDOM'
import '@/components/index'
import limitRoute from './auth/permission'
import filter from './filter/index'
Vue.config.productionTip = false

Vue.use(filter)
export let router = null
let instance = null

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/apps' : '/',
    mode: 'history',
    routes
  })
  limitRoute(router)

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('vue app bootstraped')
}

export async function mount(props) {
  console.log('props from main framework', props)
  render()
}

export async function unmount() {
  instance.$destroy()
  instance = null
  router = null
}