<template lang="pug">
v-form.text-center(ref="newUserForm")
  v-row
    v-col(cols=12, md=6, xl=4, offset-xl=2)
      v-select(
        v-model="usuario.rolId",
        :items="roles",
        :rules="requiredSelectNumberRule",
        label="Rol",
        item-text="denominacion",
        item-value="id",
        filled
      )
    v-col(cols=12, md=6, xl=4)
      v-text-field(
        v-model="usuario.nombre",
        :rules="nameRule",
        label="Nombre",
        filled
      )
    v-col(cols=12, md=6, xl=4)
      v-text-field(
        v-model="usuario.correo",
        :rules="emailRule",
        label="Correo",
        filled
      )
      v-text-field.mb-6(
        v-model="usuario.contrasena",
        :rules="requiredRule",
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'",
        :type="showPassword ? 'text' : 'password'",
        @click:append="showPassword = !showPassword",
        filled,
        label="Contraseña"
      )
      v-text-field.mb-6(
        v-model="verificarcontrasena",
        :rules="requiredRule",
        :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'",
        :type="showPassword2 ? 'text' : 'password'",
        @click:append="showPassword2 = !showPassword2",
        filled,
        label="Contraseña"
      )
  v-btn(color="primary", :loading="isLoading", @click="createUser") Guardar
</template>

<script lang="ts">
import { Vue, Component, Ref } from "nuxt-property-decorator";
import { commonStore } from "~/store";
import { Rol } from "~/types/rol";

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Usuarios" };
  },
})
export default class extends Vue {
  @Ref()
  readonly newUserForm!: HTMLFormElement;

  isLoading: boolean = false;
  showPassword: boolean = false;
  showPassword2: boolean = false;
  verificarcontrasena = "";

  usuario: any = {
    rolId: 0,
    nombre: "",
    correo: "",
    contrasena: "",
    estado: true,
  };

  nameRule: any[] = [
    (v: any) => !!v || "El nombre de usuario es requerido",
    (v: any) =>
      (v && v.length <= 10) ||
      "El nombre de usuario debe contener menos de 10 caracteres",
  ];

  lastNameRule: any[] = [
    (v: any) => !!v || "El campo apellidos de usuario es requerido",
  ];

  emailRule: any[] = [
    (v: any) => !!v || "El correo es requerido",
    (v: any) => /.+@.+\..+/.test(v) || "El correo debe ser válido",
  ];

  requiredRule: any[] = [(v: any) => !!v || "Este campo es requerido"];

  roles: Rol[] = [];

  async createUser() {
    if (this.newUserForm.validate()) {
      if (this.usuario.contrasena === this.verificarcontrasena) {
        try {
          this.isLoading = true;

          this.usuario.fechareg = new Date();

          const { status } = await this.$axios.post(
            "/api/usuario",
            this.usuario,
          );

          if (status === 201) {
            this.$router.back();
            commonStore.showSnackbar({
              message: "¡Usuario creado correctamente!",
            });
          }
        } catch (error) {
          commonStore.showSnackbar({
            message: error,
            color: "red",
          });
        } finally {
          this.isLoading = false;
        }
      }
    }
  }

  async mounted() {
    const { data } = await this.$axios.get("/api/rol");
    this.roles = data;
  }
}
</script>
