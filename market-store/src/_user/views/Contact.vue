<template>
  <div>
    <v-container>
      <v-row no-gutters>

        <v-col cols="12">
          <v-card-text class tile outlined>
            <v-card-title class="subheading">Trabajadores a tu servicio</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div
                class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                v-for="(item, idx) in trabajadores"
                :key="idx"
              >
                <v-card outlined width="400" elevation="2">
                  <v-img height="275" :src="require(`@/assets/img/employees/avatar-${idx + 1}.png`)" />

                  <v-card-text class="text--primary text-center">
                    {{ item.nombre }}
                  </v-card-text>
                  <v-card-text>
                    {{item.celular}}
                  </v-card-text>

                  <div class="text-center">
                    <v-btn :href="`https://api.whatsapp.com/send?phone=${item.celular}&text=Me%20gustaría%20que%20se%20me%20otorgue%20mas%20información`" class="ma-2" outlined color="info">
                      <v-icon>fab fa-whatsapp</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canastas: [],
      banners: [],
      trabajadores: [
        {nombre: 'Pedro', celular: '51902729770', foto: '././employees/avatar-1.png'},
        {nombre: 'Andy', celular: '51933624871', foto: '././employees/avatar-2.png'},
        {nombre: 'Marco', celular: '51933624871', foto: '././employees/avatar-3.png'},
        {nombre: 'Cristian', celular: '51933624871', foto: '././employees/avatar-4.png'},
        {nombre: 'Ana', celular: '51933624871', foto: '././employees/avatar-5.png'},
        {nombre: 'Juan', celular: '51933624871', foto: '././employees/avatar-6.png'},
        {nombre: 'Gedy', celular: '51933624871', foto: '././employees/avatar-7.png'},
        {nombre: 'Jeremias', celular: '51933624871', foto: '././employees/avatar-8.png'},
        {nombre: 'Liliana', celular: '51933624871', foto: '././employees/avatar-9.png'},
        {nombre: 'Pepe', celular: '51933624871', foto: '././employees/avatar-2.png'},
        {nombre: 'Richard', celular: '51933624871', foto: '././employees/avatar-3.png'},
        {nombre: 'Manuel', celular: '51933624871', foto: '././employees/avatar-4.png'},
        {nombre: 'Antonio', celular: '51933624871', foto: '././employees/avatar-5.png'},
        {nombre: 'Maria', celular: '51933624871', foto: '././employees/avatar-6.png'},
        {nombre: 'Olivia', celular: '51933624871', foto: '././employees/avatar-7.png'},
      ],
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
      ],
      activeBtn: 1,
    };
  },
  computed: {
    carouselHeight: function () {
      return this.$vuetify.breakpoint.mdAndUp ? 500 : 250;
    },
  },
  async mounted() {

  },
};
</script>