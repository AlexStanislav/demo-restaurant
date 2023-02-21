import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EventBus from '@/assets/modules/EventBus'
window.EventBus = new EventBus()

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
