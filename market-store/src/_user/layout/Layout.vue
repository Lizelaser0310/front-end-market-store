<template>
  <v-app id="inspire">
    <!--App Bar-->
    <v-layout-app-bar />
    <v-main>
      <!--Navigation-->
      <v-layout-navigation />
      <router-view />
    </v-main>
    <!--Views-->

    <!--Footer-->
    <v-layout-footer />
  </v-app>
</template>
<script>
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
    return {};
  },
  computed: {
    isNotMobile: function () {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>
