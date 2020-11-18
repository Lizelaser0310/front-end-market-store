import { Vue, Component } from "nuxt-property-decorator";
import { Banner } from "~/types/banner";

@Component({
  layout: "app",
  // Head configuration.
  head() {
    return { title: "Banners" };
  },
})
export default class ProductoPage extends Vue {
  cabeceras: any = [
    { text: "ID", value: "id" },
    { text: "Nombre", value: "nombre" },
    { text: "Imagen", value: "imagen", sortable: false },
    { text: "Descripción", value: "descripcion", sortable: false },
    { text: "Enlace", value: "link", sortable: false },
    { text: "Acciones", value: "actions", sortable: false },
  ];

  banners: Banner[] = [];

  async mounted() {
    const { data } = await this.$axios.get("/api/banner");
    this.banners = data;
  }
}
