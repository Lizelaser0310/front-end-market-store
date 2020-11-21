<template>
  <v-app id="inspire">
    <!--App Bar-->
    <v-layout-app-bar />
    <v-main>
      <!--Navigation-->
      <v-layout-navigation />
      <router-view />

      <v-snackbar v-model="isSnackbar">
        {{ snackbarMessage }}
        <template v-slot:action="{ attrs }">
          <v-btn icon color="primary" v-bind="attrs" @click="isSnackbar = false"
            ><v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
    <!--Views-->

    <!--Footer-->
    <v-layout-footer />
  </v-app>
</template>

<script>
import { mapState } from "vuex";

import LayoutAppBar from "./AppBar.vue";
import LayoutNavigation from "./Navigation.vue";
import LayoutFooter from "./Footer.vue";

export default {
  components: {
    "v-layout-app-bar": LayoutAppBar,
    "v-layout-navigation": LayoutNavigation,
    "v-layout-footer": LayoutFooter,
  },
  data() {
    return {
      isSnackbar: false,
    };
  },
  computed: {
    isNotMobile: function () {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    ...mapState(["snackbarMessage", "snackbarCount"]),
  },
  watch: {
    snackbarCount: function () {
      this.isSnackbar = true;
    },
  },
};
</script>
