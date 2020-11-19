import { Vue, Component, Ref } from "nuxt-property-decorator";

interface LoginRequest {
  usuario: string;
  clave: string;
}

@Component({
  auth: "guest",
  // Head configuration.
  head() {
    return { title: "Iniciar sesión" };
  },
})
export default class LoginPage extends Vue {
  @Ref()
  readonly loginForm!: HTMLFormElement;

  showPassword: boolean = false;

  isLogging: boolean = false;
  loginData: LoginRequest = {
    usuario: "",
    clave: "",
  };

  snackbar: boolean = false;
  errorMessage: string = "Error al iniciar sesión";

  async login() {
    this.isLogging = true;
    try {
      if (this.loginForm.validate()) {
        await this.$auth.loginWith("local", {
          data: this.loginData,
        });
      }
    } catch (error) {
      this.snackbar = true;
      this.errorMessage = error;
    } finally {
      this.isLogging = false;
    }
  }
}
