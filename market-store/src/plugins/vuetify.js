import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: '#28a745',
        secondary: '#2D3753',
        accent: '#3AE3D6',
        error: '#f44336',
        info: '#2d3753',
        success: '#7a904a',
        warning: '#f78012',
      }
    },
  },
});
