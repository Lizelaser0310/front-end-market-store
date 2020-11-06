<template>
  <v-sheet class="ml-10 mr-10">
    <v-row class="ml-10">
      <h1>Registro</h1>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <gmap-map
          :center="center"
          :zoom="12"
          style="width: 100%; height: 600px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center = m.position"
          ></gmap-marker>
        </gmap-map>
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
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Nombre de usuario"
            outlined
          />
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
          <h2>Datos de contacto</h2>
          <v-text-field label="Teféfono" outlined />
          <v-text-field label="Dirección" outlined />

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
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
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
      //nameRules: [(v) => !!v || "El campo nombre es requerido"],
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