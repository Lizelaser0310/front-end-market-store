<template lang="pug">
.mt-3
  v-data-table(:headers="cabeceras", :items="roles", :items-per-page="10")
    template(v-slot:top)
      v-toolbar(flat)
        v-toolbar-title Mantenimiento de Roles del sistema
        v-divider.mx-4(inset, vertical)
        v-spacer
        v-btn(color="primary", to="rol/nuevo", nuxt, outlined) 
          v-icon(left) mdi-plus
          | Crear

    template(v-slot:item.actions="{ item }")
      v-icon.mr-2(small) mdi-pencil
      v-icon(small) mdi-delete
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

interface Rol {
  denominacion: string;
}

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Roles" };
  },
})
export default class ProductoPage extends Vue {
  cabeceras: any = [
    { text: "ID", value: "id" },
    { text: "Rol", value: "denominacion" },
    { text: "Acciones", value: "actions", sortable: false },
  ];

  roles: Rol[] = [];

  async mounted() {
    const { data } = await this.$axios.get("/api/rol");
    this.roles = data;
  }
}
</script>
