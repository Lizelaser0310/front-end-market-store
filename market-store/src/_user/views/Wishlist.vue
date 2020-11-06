<template>
  <v-sheet style="border-top: green">
    <p class="display-3 font-weight-light text-center pa-4">
      MI LISTA DE DESEOS
    </p>
    <v-row class>
      <v-col cols="12" md="2" sm="12"></v-col>
      <v-col cols="12" md="8" sm="12">
        <div
          style="
            background-color: #f7f6f7;
            height: 100px;
            border-top: green solid 4px;
          "
          class="mb-10"
        >
          <p style="margin-top: 30px">
            <v-icon style="pt-8">
              mdi-calendar-today
              <span></span> </v-icon
            >Su lista de deseos está actualmente vacía
          </p>
        </div>
        <template>
          <div>
            <v-btn rounded color="primary" href="/shop" dark
              >Continuar comprando</v-btn
            >
          </div>
        </template>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({}),
};
</script>

