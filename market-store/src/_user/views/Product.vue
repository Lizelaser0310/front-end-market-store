<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-carousel>
          <v-carousel-item :src="product.imagen"> </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" sm="6">
        <!--<v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>-->
        <div class="pl-6 mb-6">
          <p class="display-1 mb-0">{{ product.nombre }}</p>
          <v-card-actions class="pa-0">
            <p
              class="headline font-weight-light pt-3"
              v-if="product.descuento > 0"
            >
              S/. {{ product.precio }}
              <del style="" class="subtitle-1 font-weight-thin">
                S/. {{ product.descuento }}</del
              >
            </p>
            <p class="headline font-weight-light pt-3" v-else>
              S/. {{ product.precio }}
            </p>
            <v-spacer></v-spacer>
            <v-rating
              v-model="rating"
              class=""
              background-color="warning lighten-3"
              color="warning"
              dense
            ></v-rating>
            <span class="body-2 font-weight-thin"> 25 COMENTARIOS</span>
          </v-card-actions>
          <p class="subtitle-1 font-weight-thin">
            {{ product.categoria }}
            {{ product.descripcion }}
          </p>
          <p class="title">CANTIDAD</p>
          <v-text-field
            v-model="cantidad"
            class="mb-8"
            outlined
            style="width: 120px"
            :value="1"
            :suffix="product.medida"
            dense
            type="number"
            hide-details
          >
          </v-text-field>
          <v-btn
            @click="addToCart"
            class="primary white--text"
            outlined
            tile
            dense
            ><v-icon>mdi-cart</v-icon> AGREGAR AL CARRITO</v-btn
          >
          <v-btn class="ml-4" outlined tile>AÑADIR A LA LISTA DE DESEOS</v-btn>
        </div>

        <v-tabs>
          <v-tab>DESCRIPCIÓN</v-tab>
          <v-tab-item>
            <p class="pt-4 subtitle-1 font-weight-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </v-tab-item>
          <v-tab>MAS INFORMACIÓN</v-tab>
          <v-tab-item>
            <p class="pt-4 subtitle-1 font-weight-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>

    <p class="subtitle-1 font-weight-light my-6 text-center">
      OTROS PRODUCTOS RELACIONADOS
    </p>

    <v-slide-group class="my-4" show-arrows>
      <v-slide-item v-for="pro in related" :key="pro.id">
        <v-hover v-slot:default="{ hover }">
          <v-card
            outlined
            class="mx-2 my-4"
            elevation="2"
            min-width="200"
            max-width="600"
          >
            <v-img
              class="white--text align-end"
              :aspect-ratio="16 / 9"
              height="200px"
              :src="pro.imagen"
            >
              <!--<v-card-title>{{pro.type}} </v-card-title>-->
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn
                    v-if="hover"
                    :href="'/producto/' + pro.id"
                    class
                    outlined
                    >VIEW</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="text--primary">
              <div>
                <a
                  :href="'/producto/' + pro.id"
                  style="text-decoration: none"
                  >{{ pro.nombre }}</a
                >
              </div>
              <div>${{ pro.precio }}</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group>

    <v-card>
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
              <v-icon class="display-2">mdi-cash-usd</v-icon>
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
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    rating: 4.5,
    item: 5,
    cantidad: "1",
    related: [],
    product: {
      id: 0,
      category: 0,
      name: "",
      price: 0,
      stock: 0,
      meausure: "",
      image: "",
      description: "",
    },
  }),
  methods: {
    getProduct: async function () {
      const { data } = await this.$axios.get(
        `producto/${this.$route.params.id}`
      );
      this.product = data;
      this.relatedProducts();
    },
    relatedProducts: async function () {
      const { data } = await this.$axios.get(
        `producto/tabla?categoria=${this.product.categoriaId}`
      );
      this.related = data.listado.filter((item) => item.id !== this.product.id);
    },
    addToCart: function () {
      this.$store.commit("addToCart", {
        product: this.product,
        quantity: parseInt(this.quantity),
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
