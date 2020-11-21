<template>
  <v-slide-group
    v-if="$vuetify.breakpoint.mdAndUp"
    color="primary"
    :show-arrows="$vuetify.breakpoint.smAndDown"
    :center-active="true"
  >
    <v-slide-item v-slot:default="{ active, toggle }">
      <v-menu open-on-hover offset-y tile>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            height="57"
            :input-value="active"
            @click="toggle"
            text
            tile
          >
            <v-icon left>mdi-menu</v-icon>CATEGORIAS
          </v-btn>
        </template>
        <v-list tile min-width="250">
          <v-list-item
            v-for="(item, index) in categorias"
            :key="index"
            :href="`/tienda?categoria=${item.id}`"
            link
            tile
          >
            <v-list-item-title>{{ item.denominacion }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-slide-item>

    <v-slide-item>
      <v-btn
        height="57"
        :input-value="$route.fullPath === '/'"
        active-class="primary--text"
        to="/"
        text
        tile
        >INICIO</v-btn
      >
    </v-slide-item>
    <v-slide-item>
      <v-menu open-on-hover offset-y tile>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            :input-value="$route.fullPath.startsWith('/pagina/')"
            height="57"
            text
            tile
            >TIENDA</v-btn
          >
        </template>
        <v-list tile min-width="250">
          <v-list-item v-for="(item, index) in items" :key="index" link tile>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-slide-item>

    <v-slide-item>
      <v-btn :input-value="$route.fullPath === '/contacto'" height="57" to="/contacto" active-class="primary--text" text
        >CONTACTO</v-btn
      >
    </v-slide-item>
  </v-slide-group>
</template>
<script>
export default {
  name: "LayoutNavigation",
  data() {
    return {
      categorias: [],
      items: [
        { title: "Preguntas Frecuentes" },
        { title: "Libro de reclamaciones" },
        { title: "Términos y condiciones" },
      ],
      activeBtn: 1,
    };
  },
  methods: {
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
  },
};
</script>

<style>
.slide-group {
  height: 100px !important;
}
.v-slide-group__content {
  justify-content: center !important;
}
</style>