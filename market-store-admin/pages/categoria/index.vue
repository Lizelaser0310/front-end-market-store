<template lang="pug">
.mt-3
  v-data-table(:headers="cabeceras", :items="categorias", :items-per-page="10")
    template(v-slot:top)
      v-toolbar(flat)
        v-toolbar-title Categorías activas
        v-divider.mx-4(inset, vertical)
        v-spacer
        v-btn(color="primary", to="categoria/nuevo", nuxt, outlined) 
          v-icon(left) mdi-plus
          | Crear

    template(v-slot:item.actions="{ item }")
      v-icon.mr-2(small) mdi-pencil
      v-icon(small) mdi-delete
</template>

<script lang="ts" src="@/scripts/categoria/index.ts" />
