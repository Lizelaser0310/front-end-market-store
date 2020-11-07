import { Vue, Component, Ref } from "nuxt-property-decorator";
import { commonStore } from "~/store";
import { Categoria } from "~/types/categoria";
import { Producto } from "~/types/producto";

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Productos" };
  },
})
export default class ProductoDetallePage extends Vue {
  @Ref()
  readonly newProductForm!: HTMLFormElement;

  isLoading: boolean = false;

  imagen: File | null = null;

  producto: Producto = {
    categoriaId: 0,
    nombre: "",
    precio: "",
    stock: "",
    medida: "",
    imagen: null,
    resumen: "",
    descripcion: "",
    estado: true,
  };

  categorias: Categoria[] = [];

  async createProduct() {
    if (this.newProductForm.validate() && this.imagen !== null) {
      try {
        this.isLoading = true;

        const base64 = (await this.toBase64(this.imagen)) as string;
        this.producto.imagen = base64.split(";base64,")[1];

        const a = Object.assign({}, this.producto);

        a.stock = Number(this.producto.stock);
        a.precio = Number(this.producto.precio);

        const { status } = await this.$axios.post("/api/producto", a);

        if (status === 201) {
          this.$router.back();
          commonStore.showSnackbar({
            message: "¡Producto creado correctamente!",
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

  async mounted() {
    const { data } = await this.$axios.get("/api/categoria");
    this.categorias = data;
  }
}
