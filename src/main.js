import Vue from 'vue'
import App from './App.vue'

import YouTube from 'vue-youtube'

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter,YouTube);
import {routes} from './routes';


import store from './stores/store';

const router = new VueRouter({
  routes,
   mode:'history'
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
