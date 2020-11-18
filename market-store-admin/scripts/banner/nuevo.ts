import { Vue, Component, Ref } from "nuxt-property-decorator";
import { commonStore } from "~/store";
import { Banner } from "~/types/banner";

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Banners" };
  },
})
export default class ProductoDetallePage extends Vue {
  @Ref()
  readonly newBannerForm!: HTMLFormElement;

  isLoading: boolean = false;

  imagen: File | null = null;

  banner: Banner = {
    nombre: "",
    imagen: "",
    descripcion: "",
    link: "",
  };

  async createCategory() {
    if (this.newBannerForm.validate() && this.imagen !== null) {
      try {
        this.isLoading = true;

        const base64 = (await this.toBase64(this.imagen)) as string;
        this.banner.imagen = base64.split(";base64,")[1];
        this.banner.fechareg = new Date();

        const { status } = await this.$axios.post("/api/banner", this.banner);

        if (status === 201) {
          this.$router.back();
          commonStore.showSnackbar({
            message: "¡Banner creado correctamente!",
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
