import { Vue, Component, Watch } from "nuxt-property-decorator";
import { commonStore } from "~/store";
import { AlertMutation, AlertType, Align, SnackbarMutation } from "~/types";

@Component
export default class AppLayout extends Vue {
  miniVariant: boolean = true;
  expandHover: boolean = true;

  navItems = [
    {
      icon: "mdi-apps",
      title: "Panel",
      to: "/",
    },
    {
      icon: "mdi-account-arrow-left-outline",
      title: "Usuarios",
      to: "/usuario",
    },
    {
      icon: "mdi-note-text",
      title: "Rol",
      to: "/rol",
    },
    {
      icon: "mdi-store",
      title: "Productos",
      to: "/producto",
    },
    {
      icon: "mdi-widgets",
      title: "Categorías",
      to: "/categoria",
    },
    {
      icon: "mdi-view-carousel",
      title: "Banners",
      to: "/banner",
    },
    {
      icon: "mdi-shopping",
      title: "Canastas",
      to: "/canasta",
    },
  ];

  get breadcrumbItems(): any[] {
    const routes = this.$route.fullPath.substring(1).split("/");
    const items = routes.map((obj) => {
      return {
        text: obj,
        to: obj,
        disabled: false,
        nuxt: true,
      };
    });
    return [
      {
        text: "Home",
        disabled: false,
        nuxt: true,
        to: "/",
      },
      ...items,
    ];
  }

  get title(): string {
    const name = this.$route.name?.replace("-", " ");
    return name !== null && name !== undefined
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : "Market Store";
  }

  maximize() {
    this.miniVariant = !this.miniVariant;
    this.expandHover = !this.expandHover;
  }

  logout() {
    this.$auth.logout();
    if (this.$route.name === "index") {
      location.reload();
    }
  }

  // Global snackbar handler.
  isSnackbar: boolean = false;
  // Snackbar payload default values.
  sPayload: SnackbarMutation = {
    message: "¡Información útil!",
    color: "primary",
    timeout: 3000,
    align: Align.Bottom,
  };

  // Global alert handler.
  isAlert: boolean = false;
  // Alert payload default values.
  aPayload: AlertMutation = {
    message: "¡Información útil!",
    type: AlertType.Success,
  };

  alertTimeout: any;

  get alertProxy() {
    return commonStore.alert;
  }

  get snackbarProxy() {
    return commonStore.snackbar;
  }

  @Watch("snackbarProxy")
  onSnackbarCalled() {
    this.sPayload = commonStore.snackbarPayload;
    this.isSnackbar = true;
  }

  @Watch("alertProxy")
  onAlertCalled() {
    if (this.isAlert) clearTimeout(this.alertTimeout);
    this.aPayload = commonStore.alertPayload;
    this.alertTimeout = setTimeout(() => {
      this.isAlert = false;
    }, 3000);
    this.isAlert = true;
  }
}
