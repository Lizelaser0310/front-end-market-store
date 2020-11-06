<template>
  <div>
    <v-carousel
      :height="carouselHeight"
      :hide-delimiters="$vuetify.breakpoint.smAndDown"
    >
      <v-carousel-item :src="require('@/assets/img/home/banner4.jpg')">
        <!-- <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>-->
      </v-carousel-item>
      <v-carousel-item :src="require('@/assets/img/home/banner2.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Hasta 20% de descuento en todos los productos</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('@/assets/img/home/banner3.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Hasta 20% de descuento en todos los productos</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('@/assets/img/home/banner1.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only">
            <strong>Hasta 20% de descuento en todos los productos</strong>
          </div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <!---->
    <v-divider></v-divider>
    <v-card>
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
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
          <v-col class="col-12 col-md-4 col-sm-12">
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
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-busket</v-icon>
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
    <h3>BOLSAS DE LA SEMANA</h3>
    <v-divider></v-divider>
    <div class="pl-4 pr-4 row">
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card>
          <v-img
            :src="require('@/assets/img/ofertas/oferta8.jpg')"
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
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card>
          <v-img
            :src="require('@/assets/img/ofertas/oferta6.jpg')"
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
      <div class="col-md-4 col-sm-4 col-xs-12">
        <v-card>
          <v-img
            :src="require('@/assets/img/ofertas/oferta3.jpg')"
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

    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text class tile outlined>
            <v-card-title class="subheading">PRODUCTOS</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('@/assets/img/products/product9.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Fresas</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cards-heart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('@/assets/img/products/product16.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Pollo</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cards-heart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('@/assets/img/products/product11.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Palta</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cards-heart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('@/assets/img/products/product15.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Coliflor</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cards-heart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('@/assets/img/home/product1.jpg')"
                    ></v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Choclo fresco</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cards-heart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('@/assets/img/home/product2.jpg')"
                    ></v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Uva fresca</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cards-heart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('@/assets/img/home/product3.jpg')"
                    ></v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Tomates frescos</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cards-heart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="require('@/assets/img/home/product4.jpg')"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Papaya fresca</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-cards-heart</v-icon>
                      </v-btn>
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
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

