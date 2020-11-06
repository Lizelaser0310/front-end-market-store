<template>
  <v-footer padless class="footer-style white--text text-center">
    <div class="my-4">
      <v-btn class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-home</v-icon>
      </v-btn>
      <v-btn class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-email</v-icon>
      </v-btn>
      <v-btn class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-calendar</v-icon>
      </v-btn>
      <v-btn class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-delete</v-icon>
      </v-btn>
    </div>

    <v-row>
      <v-col cols="12" md="4">
        <div class="h-color">Nuestra empresa</div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="h-color">Nuestra empresa</div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="h-color">Nuestra empresa</div>
      </v-col>
    </v-row>

    <v-img
      class="mx-auto my-4"
      max-width="300"
      :src="require('@/assets/icons/payment.jpg')"
    />

    <v-divider color="white " />

    <div class="white--text my-4">
      {{ new Date().getFullYear() }} —
      <strong>© Todos los derechos reservados</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "LayoutFooter",

  data: () => ({
    links: [],
  }),
};
</script>

<style scoped>
.footer-style {
  background-color: #25262d !important;
  display: block !important;
}
.h-color {
  color: #28a745 !important;
}
</style>
