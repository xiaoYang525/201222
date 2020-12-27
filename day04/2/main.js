import Vue from 'vue'
import App from './App.vue'
import router  from '@/router'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
// import 'swiper/css/swiper.css'
import plugins from '@/plugins'
import '@/mock/mockServer'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
