<template>
  <v-row justify="center">
    <v-col cols="12" md="10">
      <h2 class="mb-4">NUEVO CLIENTE</h2>
      <v-form ref="registerForm">
        <v-text-field
          v-model="name"
          :rules="nameRule"
          label="Nombres"
          outlined
        />
        <v-text-field
          v-model="lastname"
          :rules="lastNameRule"
          label="Apellidos"
          outlined
        />
        <v-text-field
          v-model="username"
          :rules="requiredRule"
          label="Nombre de usuario"
          outlined
        />
        <v-text-field
          v-model="email"
          :rules="emailRule"
          label="Correo"
          outlined
        />
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          :rules="requiredRule"
          label="Contraseña"
          outlined
          @click:append="show = !show"
        />
        <v-text-field
          v-model="confirmPassword"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show2 ? 'text' : 'password'"
          :rules="requiredRule"
          label="Confirmar Contraseña"
          outlined
          @click:append="show2 = !show2"
        />
        <h3 class="mb-4">Datos de contacto</h3>
        <v-text-field
          v-model="phone"
          :rules="requiredRule"
          label="Teféfono"
          outlined
        />

        <div class="text-center fill-width mb-12">
          <v-btn color="primary" @click="register">Registrar</v-btn>
        </div>
      </v-form>
    </v-col>
  </v-row>
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
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      valid: true,
      show: false,
      show2: false,
      username: "",
      name: "",
      //nameRules: [(v) => !!v || "El campo nombre es requerido"],
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      right: null,
      checkbox: false,

      nameRule: [
        (v) => !!v || "El nombre de usuario es requerido",
        (v) =>
          (v && v.length <= 10) ||
          "El nombre de usuario debe contener menos de 10 caracteres",
      ],
      lastNameRule: [
        (v) => !!v || "El campo apellidos de usuario es requerido",
      ],
      emailRule: [
        (v) => !!v || "El correo es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo debe ser válido",
      ],
      requiredRule: [(value) => !!value || "Este campo es requerido"],
    };
  },
  mounted() {
    this.geolocate();
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
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    async register() {
      if (this.$refs.registerForm.validate()) {
        if (this.password === this.confirmPassword) {
          try {
            const { status } = await this.$axios.post(
              "/autenticacion/registrar",
              {
                usuarioNombre: this.username,
                contrasena: this.password,
                correo: this.email,
                nombres: this.name,
                apellidos: this.lastname,
                telefono: this.phone,
              }
            );
            if (status === 201) {
              this.$router.push("/");
            }
          } catch (e) {
            console.log("Failed");
          } finally {
            this.loginLoading = false;
          }
        }
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
<style scoped>
.item-active {
  color: #4caf50 !important;
}
</style>