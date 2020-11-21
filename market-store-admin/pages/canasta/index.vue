<template lang="pug">
.mt-3
  v-data-table(:headers="cabeceras", :items="canastas", :items-per-page="10")
    template(v-slot:top)
      v-toolbar(flat)
        v-toolbar-title Mantenimieno de canastas
        v-divider.mx-4(inset, vertical)
        v-spacer
        v-btn(color="primary", to="canasta/nuevo", nuxt, outlined) 
          v-icon(left) mdi-plus
          | Crear

    template(v-slot:item.actions="{ item }")
      v-icon.mr-2(small) mdi-pencil
      v-icon(small) mdi-delete
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

interface Canasta {
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
    { text: "Nombre", value: "nombre", sortable: false },
    { text: "Imagen", value: "imagen" },
    { text: "Descripcion", value: "descripcion", sortable: false },
    { text: "FechaReg", value: "fechaReg", sortable: false },
    { text: "Acciones", value: "actions", sortable: false },
  ];

  canastas: Canasta[] = [];

  async mounted() {
    const { data } = await this.$axios.get("/api/canasta");
    this.canastas = data;
  }
}
</script>
