import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'common/styles/index.scss'
import '@/datav/index.js'
import Directives from '@/directives'
import VScaleScreen from 'v-scale-screen'
import '@/filters'
import loadStatic from './loadStatic'
import '@/assets/svg'

Vue.config.productionTip = false
Vue.use(Directives)
Vue.use(VScaleScreen)

loadStatic().then(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})
