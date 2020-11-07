<template lang="pug">
v-form.text-center(ref="newProductForm")
  v-row
    v-col(cols=12, md=6, xl=4)
      v-text-field(
        v-model="producto.nombre",
        :rules="requiredRule",
        label="Nombre",
        filled
      )
    v-col(cols=12, md=6, xl=4)
      v-text-field(
        v-model="producto.resumen",
        :rules="requiredRule",
        label="Resumen",
        filled
      )
    v-col(cols=12, md=6, xl=4)
      v-text-field(
        v-model="producto.descripcion",
        :rules="requiredRule",
        label="Descripción",
        filled
      )
    v-col(cols=12, md=6, xl=4)
      v-text-field(
        v-model="producto.medida",
        :rules="requiredRule",
        label="Medida",
        filled
      )
    v-col(cols=12, md=6, xl=4)
      v-text-field(
        v-model="producto.stock",
        :rules="requiredNumberRule",
        label="Stock",
        filled
      )
    v-col(cols=12, md=6, xl=4)
      v-text-field(
        v-model="producto.precio",
        :rules="requiredNumberRule",
        label="Precio",
        filled
      )
    v-col(cols=12, md=6, xl=4, offset-xl=2)
      v-select(
        v-model="producto.categoriaId",
        :items="categorias",
        :rules="requiredSelectNumberRule",
        label="Categoría",
        item-text="denominacion",
        item-value="id",
        filled
      )
    v-col(cols=12, md=6, xl=4)
      v-file-input(
        v-model="imagen",
        :rules="fileRequiredRule",
        accept="image/*",
        label="Imagen",
        :prepend-icon="null",
        prepend-inner-icon="mdi-file",
        filled
      )
  v-btn(color="primary", :loading="isLoading", @click="createProduct") Guardar
</template>

<script lang="ts" src="@/scripts/producto/nuevo.ts" />
