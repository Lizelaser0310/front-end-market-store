<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>Categorias</v-card-title>
            <v-divider></v-divider>
            <v-list>
              <v-list-item-group
                v-model="currentCategory"
                @change="fetchPageByCategory"
                color="primary"
              >
                <v-list-item v-for="item in categorias" :key="item.id">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.denominacion"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-divider></v-divider>
            <v-card-title>Precio</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Puntuaciones</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                append-icon="mdi-star"
                label="4 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="3 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="2 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="1 & above"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>

          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Viendo 1-12 de 20 productos</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                class="pa-0"
                v-model="select"
                :items="options"
                style="margin-bottom: -20px"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <div class="row text-center">
            <div
              class="col-md-3 col-sm-6 col-xs-12"
              v-for="pro in paginator.listado"
              :key="pro.id"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
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
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination
              v-model="paginator.paginaActual"
              :length="paginator.totalPaginas"
              @input="fetchPage"
            ></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
<script>
export default {
  data: () => ({
    range: [0, 10000],
    select: "Precio: Menor a Mayor",
    options: ["Precio: Menor a Mayor", "Precio: Mayor a Menor"],
    currentCategory: 0,
    paginator: {
      registrosPorPagina: 0,
      totalRegistros: 0,
      totalPaginas: 0,
      paginaActual: 1,
      listado: [],
    },
    categorias: [],
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Tienda",
        disabled: false,
        href: "breadcrumbs_clothing",
      },
      {
        text: "Verduras",
        disabled: false,
        href: "breadcrumbs_shirts",
      },
    ],
    min: 0,
    max: 10000,
  }),
  methods: {
    fetchPage: async function (page) {
      const category = this.categorias[this.currentCategory].id;
      const { data } = await this.$axios.get(
        `producto/tabla?pagina=${page ?? 1}&categoria=${category}`
      );
      this.paginator = data;
    },
    fetchPageByCategory: async function (index) {
      const category = this.categorias[index].id;
      const { data } = await this.$axios.get(
        `producto/tabla?pagina=1&categoria=${category}`
      );
      this.paginator = data;
    },
  },
  async mounted() {
    const { data } = await this.$axios.get("categoria");
    this.categorias = data;

    const queryCategory = this.$route.query.categoria;
    if (queryCategory) {
      const queryIndex = this.categorias.findIndex(
        (c) => c.id == queryCategory
      );
      this.currentCategory = queryIndex ?? 0;
      console.log(this.$route.query.categoria);
    }

    /*const responseProductos = await this.$axios.get("producto");
    this.productos = responseProductos.data;*/
    this.fetchPage(1);
  },
};
</script>
