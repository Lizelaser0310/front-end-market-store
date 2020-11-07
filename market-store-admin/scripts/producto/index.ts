import { Vue, Component } from "nuxt-property-decorator";
import { Producto } from "~/types/producto";

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Productos" };
  },
})
export default class ProductoPage extends Vue {
  cabeceras: any = [
    { text: "Nombre", value: "nombre" },
    { text: "Descripción", value: "descripcion", sortable: false },
    { text: "Resumen", value: "resumen", sortable: false },
    { text: "Precio", value: "precio", sortable: false },
    { text: "Stock", value: "stock", sortable: false },
    { text: "Medida", value: "medida", sortable: false },
    { text: "Acciones", value: "actions", sortable: false },
  ];

  productos: Producto[] = [];

  async mounted() {
    const { data } = await this.$axios.get("/api/producto");
    this.productos = data;
  }
}
