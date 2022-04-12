import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import axios from "axios"
import vueAxios from "vue-axios"

Vue.config.productionTip = false

Vue.use(vueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
