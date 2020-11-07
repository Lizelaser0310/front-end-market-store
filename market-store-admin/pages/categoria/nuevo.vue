<template lang="pug">
v-form.text-center(ref="newCategoryForm")
  v-row
    v-col(cols=12, md=6)
      v-text-field(
        v-model="categoria.denominacion",
        :rules="requiredRule",
        label="Denominación",
        filled
      )
    v-col(cols=12, md=6)
      v-file-input(
        v-model="imagen",
        :rules="fileRequiredRule",
        accept="image/*",
        label="Imagen",
        :prepend-icon="null",
        prepend-inner-icon="mdi-file",
        filled
      )
  v-btn(color="primary", :loading="isLoading", @click="createCategory") Guardar
</template>

<script lang="ts" src="@/scripts/categoria/nuevo.ts" />
