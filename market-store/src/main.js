import Axios from 'axios'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

//import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false
Vue.prototype.$axios = Axios.create({
  baseURL: 'http://192.168.0.5:51302/api/'
})

/*Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDWNKHCv_oE2uIKKDHCv1sVBAqUihESM8E",
    libraries: "places"
  }
});*/

new Vue({
  el: "#app",
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
