import { Vue, Component, Ref } from "nuxt-property-decorator";
import { commonStore } from "~/store";
import { Categoria } from "~/types/categoria";

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Categorías" };
  },
})
export default class ProductoDetallePage extends Vue {
  @Ref()
  readonly newCategoryForm!: HTMLFormElement;

  isLoading: boolean = false;

  imagen: File | null = null;

  categoria: Categoria = {
    denominacion: "",
    imagen: null,
  };

  async createCategory() {
    if (this.newCategoryForm.validate() && this.imagen !== null) {
      try {
        this.isLoading = true;

        const base64 = (await this.toBase64(this.imagen)) as string;
        this.categoria.imagen = base64.split(";base64,")[1];

        const { status } = await this.$axios.post(
          "/api/categoria",
          this.categoria,
        );

        if (status === 201) {
          this.$router.back();
          commonStore.showSnackbar({
            message: "¡Categoría creada correctamente!",
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

  toBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (success) => resolve(success.target?.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
