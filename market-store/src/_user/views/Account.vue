<template>
  <v-sheet class="ml-10 mr-10">
    <v-row class="ml-10">
      <h1>Detalles de la cuenta</h1>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card height="400" width="256" class="mx-auto">
          <v-navigation-drawer permanent>
            <v-list dense nav>
              <v-list-item-group mandatory color="indigo">
                <v-list-item
                  v-for="item in items"
                  :class="{ 'item-active': true }"
                  :key="item.title"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" style="position: relative">
        <v-form>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nombres"
            outlined
          />
          <v-text-field
            v-model="lastname"
            :rules="lastnameRules"
            label="Apellidos"
            outlined
          />
          <!--:rules="usernameRules"-->
          <v-text-field v-model="username" label="Nombre de usuario" outlined />
          <h2>Cambiar Contraseña</h2>
          <v-text-field
            v-model="newpassword"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Nueva Contraseña"
            outlined
            @click:append="show = !show"
          />
          <v-text-field
            v-model="confirmpassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            label="Confirmar Contraseña"
            outlined
            @click:append="show2 = !show2"
          />

          <v-btn color="primary" to="/">Guardar cambios</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "DETALLES DE LA CUENTA", icon: "mdi-view-dashboard" },
        { title: "PEDIDOS", icon: "mdi-image" },
        { title: "MIS FAVORITOS", icon: "mdi-help-box" },
        { title: "DIRECCIONES", icon: "mdi-location" },
        { title: "CERRAR SESIÓN", icon: "mdi-help-box" },
      ],
      valid: true,
      show: false,
      show2: false,
      username: "admin",
      nameRules: [
        (v) => !!v || "El nombre de usuario es requerido",
        (v) =>
          (v && v.length <= 10) ||
          "El nombre de usuario debe contener menos de 10 caracteres",
      ],
      name: "Lizeth Milagros",
      lastname: "La Serna Felices",
      lastnameRules: [
        (v) => !!v || "El campo apellidos de usuario es requerido",
      ],
      email: "admin@gmail.com",
      emailRules: [
        (v) => !!v || "El correo es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo debe ser válido",
      ],
      newpassword: "",
      confirmpassword: "",
      right: null,
      checkbox: false,
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
.item-active {
  color: #4caf50 !important;
}
</style>