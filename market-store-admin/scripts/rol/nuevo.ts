import { Vue, Component, Ref } from "nuxt-property-decorator";
import { commonStore } from "~/store";

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Rol" };
  },
})
export default class extends Vue {
  @Ref()
  readonly newRolForm!: HTMLFormElement;

  isLoading: boolean = false;

  rol: any = {
    denominacion: "",
  };

  async createRol() {
    if (this.newRolForm.validate()) {
      try {
        this.isLoading = true;

        const { status } = await this.$axios.post("/api/rol", this.rol);

        if (status === 201) {
          this.$router.back();
          commonStore.showSnackbar({
            message: "¡Rol creado correctamente!",
          });
        }
      } catch (error) {
        commonStore.showSnackbar({
          message: error,
          color: "red",
        });
      } finally {
        this.isLoading = false;
      }
    }
  }
}
