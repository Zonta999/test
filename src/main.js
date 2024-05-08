import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import TabBar from './components/TabBar';  
  
Vue.component('TabBar', TabBar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
