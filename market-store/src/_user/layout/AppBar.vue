<template>
  <div>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#86C840"
      dark
    >
      <!--<v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown"/>-->

      <v-btn
        icon
        color="#1c1836"
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      >
        <v-app-bar-nav-icon />
      </v-btn>

      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none"
          >Market Store</a
        >
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="¿Qué estás buscando?"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />

      <!--login Dialog-->
      <v-dialog v-model="dialog" max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="white" dark v-on="on" v-bind="attrs" text>Log in</v-btn>
        </template>
        <v-sheet class="px-4 py-2">
          <v-row align="stretch">
            <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img :src="require('@/assets/img/home/login.jpg')" />
            </v-col>
            <v-col cols="12" md="6" style="position: relative">
              <v-btn
                icon
                style="position: absolute; right: 6px"
                @click="dialog = !dialog"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <h1 class="mt-12 mb-8 text-center">Iniciar sesión</h1>
              <v-form class="text-center">
                <v-text-field
                  v-model="user"
                  append-icon="mdi-account"
                  name="usuario"
                  label="Usuario"
                  outlined
                />
                <v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Contraseña"
                  outlined
                  @click:append="show = !show"
                />

                <v-btn color="primary" to="/cuenta" @click="dialog = !dialog"
                  >Ingresar</v-btn
                >
              </v-form>
            </v-col>
          </v-row>
        </v-sheet>
      </v-dialog>
      <v-btn to="/deseados" icon style="margin-right: 10px">
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-cards-heart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn to="/carrito" icon style="margin-right: 10px">
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute app temporary>
      <v-card class="mx-auto" max-width="344">
        <v-card-title>
          <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Buscar producto"
          />
        </v-card-title>

        <v-card-actions>
          <v-btn color="purple" text>
            <span>INICIO</span>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>Contenido</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "LayoutAppBar",
  data: () => ({
    drawer: false,
    show: false,
    dialog: false,
    user: "admin@gmail.com",
    password: "123456",
    categorias: [
      { id: 1, name: "INICIO" },
      { id: 2, name: "TIENDA" },
      { id: 3, name: "PÁGINAS" },
    ],
  }),
  methods: {
    async login() {
      const response = await this.$axios.post(
        "http://localhost:51301/api/autenticacion/login",
        {
          usuario: this.user,
          clave: this.password,
        }
      );
      if (response.status === 200) {
        //store.commit("login", response.data)
      }
    },
  },
};
</script>