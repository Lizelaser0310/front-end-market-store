<template lang="pug">
.mt-3
  v-data-table(:headers="cabeceras", :items="usuarios", :items-per-page="10")
    template(v-slot:top)
      v-toolbar(flat)
        v-toolbar-title Usuarios activos
        v-divider.mx-4(inset, vertical)
        v-spacer
        v-btn(color="primary", to="usuario/nuevo", nuxt, outlined) 
          v-icon(left) mdi-plus
          | Crear

    template(v-slot:item.actions="{ item }")
      v-icon.mr-2(small) mdi-pencil
      v-icon(small) mdi-delete
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

interface Usuario {
  nombre: string;
  correo: string;
  contrasena: string;
  fechaReg: Date;
}

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Usuarios" };
  },
})
export default class UsuarioPage extends Vue {
  cabeceras: any = [
    { text: "ID", value: "id" },
    { text: "Rol", value: "rol.denominacion", sortable: false },
    { text: "Nombre", value: "nombre" },
    { text: "Correo", value: "correo", sortable: false },
    { text: "FechaReg", value: "fechaReg", sortable: false },
    { text: "Acciones", value: "actions", sortable: false },
  ];

  usuarios: Usuario[] = [];

  async mounted() {
    const { data } = await this.$axios.get("/api/usuario");
    this.usuarios = data;
  }
}
</script>
