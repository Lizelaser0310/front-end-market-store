import { Vue, Component } from "nuxt-property-decorator";
import { Categoria } from "~/types/categoria";

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Categorías" };
  },
})
export default class ProductoPage extends Vue {
  cabeceras: any = [
    { text: "ID", value: "id" },
    { text: "Denominación", value: "denominacion" },
    { text: "Imagen", value: "imagen", sortable: false },
    { text: "Acciones", value: "actions", sortable: false },
  ];

  categorias: Categoria[] = [];

  async mounted() {
    const { data } = await this.$axios.get("/api/categoria");
    this.categorias = data;
  }
}
