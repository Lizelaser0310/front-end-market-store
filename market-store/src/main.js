import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
//import * as VueGoogleMaps from 'vue2-google-maps';
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

/*Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDWNKHCv_oE2uIKKDHCv1sVBAqUihESM8E",
    libraries: "places"
  }
});*/

new Vue({
  el: "#app",
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
