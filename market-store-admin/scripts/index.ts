import { Vue, Component } from "nuxt-property-decorator";

@Component({
  layout: "app",

  // Head configuration.
  head() {
    return { title: "AWA" };
  },
})
export default class LoginPage extends Vue {
  showPassword: boolean = false;

  login() {}
}
