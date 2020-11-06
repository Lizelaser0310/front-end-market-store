import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
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
