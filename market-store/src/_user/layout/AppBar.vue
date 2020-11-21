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

      <v-btn v-if="isLoggedIn" @click="logout" color="white" text
        >Log out</v-btn
      >

      <!--login Dialog-->
      <v-dialog v-else v-model="loginDialog" max-width="800px">
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
                @click="loginDialog = !loginDialog"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <h1 class="mt-12 mb-8 text-center">Iniciar sesión</h1>
              <v-form ref="loginForm" class="text-center">
                <v-text-field
                  v-model="user"
                  append-icon="mdi-account"
                  name="usuario"
                  label="Usuario"
                  :rules="[requiredRule]"
                  outlined
                />
                <v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  :rules="[requiredRule]"
                  label="Contraseña"
                  outlined
                  @click:append="show = !show"
                />

                <v-btn color="primary" :loading="loginLoading" @click="login"
                  >Ingresar</v-btn
                >
              </v-form>
            </v-col>
          </v-row>
        </v-sheet>
      </v-dialog>
      <v-btn to="/deseados" icon style="margin-right: 10px">
        <v-badge content="2" color="green" overlap>
          <v-icon>mdi-cards-heart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn to="/carrito" icon style="margin-right: 10px">
        <v-badge
          v-if="cart.length > 0"
          :content="cart.length"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <v-icon v-else>mdi-cart</v-icon>
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
        <v-card-text>
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
        </v-card-text>
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
import { mapState, mapGetters } from "vuex";

export default {
  name: "LayoutAppBar",
  data: () => ({
    drawer: false,
    show: false,
    loginDialog: false,
    loginLoading: false,
    user: "",
    password: "",
    categorias: [],
    requiredRule: (value) => !!value || "Este campo es requerido",
  }),
  computed: {
    ...mapGetters(["isLoggedIn"]),
    ...mapState(["loginHelper", "cart"]),
  },
  watch: {
    loginHelper: function (helper) {
      this.loginDialog = helper.require;
    },
    loginDialog: function (model) {
      this.$store.commit("loginHelper", {
        require: model,
        next: this.loginHelper.next,
      });
    },
  },
  methods: {
    async login() {
      if (this.$refs.loginForm.validate()) {
        this.loginLoading = true;
        try {
          const { status, data } = await this.$axios.post(
            "/autenticacion/login",
            {
              usuario: this.user,
              clave: this.password,
            }
          );
          if (status === 200) {
            this.$store.commit("login", data);
            this.$router.push(this.loginHelper.next);
          }
        } catch (e) {
          console.log("Failed");
        } finally {
          this.loginLoading = false;
        }
      }
    },
    logout() {
      if (this.$route.matched.some((record) => record.meta.requiresAuth)) {
        this.$router.push("/");
      }
      this.$store.commit("logout");
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
    const { data } = await this.$axios.get("/categoria");
    this.categorias = data;
    console.log(this.categorias);
  },
};
</script>