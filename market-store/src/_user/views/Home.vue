<template>
  <div>
    <v-carousel
      :height="carouselHeight"
      :hide-delimiters="$vuetify.breakpoint.smAndDown"
    >
      <v-carousel-item
        v-for="item in banners"
        :key="item.id"
        :src="item.imagen"
      >
      </v-carousel-item>
    </v-carousel>

    <v-card>
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">ENVÍO GRATUITO</h3>
                <p class="font-weight-thin">ENVÍO DIRECTO</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">PAGO SEGURO</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12 col-xs-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-emoticon-happy</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">
                  GARANTÍA DE SATISFACCIÓN DEL 100%
                </h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <h3>Bolsas de la semana</h3>
          <div class="pl-4 pr-4 row">
            <div
              class="col-md-4 col-sm-4 col-xs-12"
              v-for="canasta in canastas"
              :key="canasta.id"
            >
              <v-card>
                <v-img
                  :src="canasta.imagen"
                  class="white--text align-center"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400px"
                >
                  <div class="text-center">
                    <v-btn href="/suscripcion" class="white--text" outlined
                      >SUSCRIBIRSE</v-btn
                    >
                  </div>
                </v-img>
              </v-card>
            </div>
          </div>
        </v-col>

        <v-col cols="12">
          <v-card-text class tile outlined>
            <v-card-title class="subheading">Productos</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div
                class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
                v-for="item in productos"
                :key="item.id"
              >
                <v-card outlined width="400" elevation="2">
                  <v-img height="275" :src="item.imagen" />

                  <v-card-text class="text--primary text-center">
                    {{ item.nombre }}
                  </v-card-text>

                  <div class="text-center">
                    <v-btn
                      @click="
                        $store.commit('addToCart', {
                          product: item,
                          quantity: 1,
                        })
                      "
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    <v-btn href="/tienda" class="ma-2" outlined color="info">
                      <v-icon>mdi-cards-heart</v-icon>
                    </v-btn>
                    <v-btn
                      :href="`/producto/${item.id}`"
                      class="ma-2"
                      outlined
                      color="info"
                    >
                      <v-icon>mdi-eye</v-icon>
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
      productos: [],
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
      ],
      activeBtn: 1,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  computed: {
    carouselHeight: function () {
      return this.$vuetify.breakpoint.mdAndUp ? 500 : 250;
    },
  },
  async mounted() {
    const { data } = await this.$axios.get("canasta");
    this.canastas = data;

    const bannerResponse = await this.$axios.get("banner");
    this.banners = bannerResponse.data;

    const productoResponse = await this.$axios.get("producto");
    this.productos = productoResponse.data;
  },
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

