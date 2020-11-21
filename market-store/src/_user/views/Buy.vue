<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-4" outlined>
          <div class="d-flex justify-space-between">
            <h3 class="d-inline">Dirección de envío</h3>
            <v-dialog v-model="isDialog" width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" v-bind="attrs" v-on="on" text>
                  Cambiar
                </v-btn>
              </template>
              <v-card>
                <v-tabs grow>
                  <v-tab>Crear</v-tab>
                  <v-tab-item class="py-4 px-8 text-center">
                    <h3 class="my-4">Registro de nueva dirección</h3>
                    <v-form class="mb-2" ref="directionForm">
                      <v-text-field
                        v-model="direction.direccion1"
                        label="Dirección"
                        :rules="requiredRules"
                        outlined
                      />
                      <v-text-field
                        v-model="direction.numero"
                        label="Número"
                        :rules="requiredRules"
                        outlined
                      />
                      <v-text-field
                        v-model="direction.telefono"
                        label="Teléfono"
                        :rules="requiredRules"
                        outlined
                      />
                      <v-text-field
                        v-model="direction.codigoPostal"
                        label="Código postal"
                        :rules="requiredRules"
                        outlined
                      />
                      <v-text-field
                        v-model="direction.referencia"
                        label="Referencia"
                        outlined
                        hide-details
                      />
                      <v-checkbox
                        v-model="direction.defecto"
                        label="Dirección por defecto?"
                      ></v-checkbox>
                    </v-form>
                    <v-btn class="mb-2" color="primary" @click="saveDirection"
                      >Guardar</v-btn
                    >
                  </v-tab-item>

                  <v-tab>Sleccionar</v-tab>
                  <v-tab-item class="py-4 px-8">
                    <v-item-group mandatory>
                      <v-item
                        v-for="d in directions"
                        :key="d.id"
                        v-slot="{ active, toggle }"
                      >
                        <v-card
                          class="pa-4 mb-2 d-flex justify-space-between"
                          outlined
                          @click="
                            toggle();
                            selectedDirection = d;
                          "
                        >
                          <div>
                            <div>{{ d.direccion1 }}</div>
                            <div>{{ d.numero }}</div>
                            <div>{{ d.telefono }}</div>
                            <div>{{ d.codigoPostal }}</div>
                            <div>
                              {{ d.referencia || "Sin referencia" }}
                            </div>
                            <div v-if="d.defecto" class="grey--text">
                              Dirección por defecto
                            </div>
                          </div>

                          <v-icon v-if="active" class="mr-2">mdi-check</v-icon>
                        </v-card>
                      </v-item>
                    </v-item-group>
                  </v-tab-item>
                </v-tabs>
              </v-card>
            </v-dialog>
          </div>

          <v-divider class="my-2" />

          <div v-if="selectedDirection">
            <div>{{ selectedDirection.direccion1 }}</div>
            <div>{{ selectedDirection.numero }}</div>
            <div>{{ selectedDirection.telefono }}</div>
            <div>{{ selectedDirection.codigoPostal }}</div>
            <div>{{ selectedDirection.referencia || "Sin referencia" }}</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="px-4 pt-4 pb-2" outlined>
          <div class="d-flex justify-space-between">
            <h3 class="d-inline">Productos</h3>
            <v-btn color="primary" to="/carrito" text>Cambiar</v-btn>
          </div>

          <v-divider class="my-2" />

          <v-row>
            <v-col cols="12" md="6" v-for="i in cart" :key="i.product.id">
              <v-card outlined elevation="1">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="i.product.imagen"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      i.product.nombre
                    }}</v-list-item-title>
                    <v-list-item-subtitle>
                      S/ {{ (i.product.precio * i.quantity).toFixed(2) }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-text>
                  {{ i.product.descripcion }} - {{ i.quantity }}
                  {{ i.product.medida }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-4" outlined>
          <div class="d-flex justify-space-between">
            <h3 class="d-inline">Resumen de compra</h3>
            <v-btn color="primary" to="/carrito" text>Cambiar</v-btn>
          </div>

          <v-divider class="my-2" />

          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Subtotal de compra</td>
                  <td class="text-right" style="width: 125px">
                    S/ {{ subtotal.toFixed(2) }}
                  </td>
                </tr>
                <tr>
                  <td>Gastos de envío</td>
                  <td class="text-right" style="width: 125px">
                    S/ {{ deliveryPrice.toFixed(2) }}
                  </td>
                </tr>
                <tr>
                  <td>Impuesto</td>
                  <td class="text-right" style="width: 125px">
                    S/ {{ (total - subtotal).toFixed(2) }}
                  </td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td class="text-right" style="width: 125px">
                    <b>S/ {{ (total + deliveryPrice).toFixed(2) }}</b>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <div class="text-center">
            <v-btn color="primary" @click="buyProducts">Pagar ahora</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    isDialog: false,
    direction: {
      direccion1: "",
      numero: "",
      telefono: "",
      codigoPostal: "",
      referencia: "",
      defecto: false,
    },

    directions: [],
    selectedDirection: null,

    requiredRules: [(value) => !!value || "Este campo es requerido"],
  }),
  methods: {
    async saveDirection() {
      if (this.$refs.directionForm.validate()) {
        const { status } = await this.$axios.post(
          "/direccion",
          this.direction,
          {
            headers: { Authorization: `Bearer ${this.$store.state.userJwt}` },
          }
        );
        if (status === 201) {
          this.$store.commit(
            "showSnackbar",
            "¡Dirección agregada correctamente!"
          );

          const { data } = await this.$axios.get("/direccion", {
            headers: { Authorization: `Bearer ${this.$store.state.userJwt}` },
          });
          this.directions = data;
        }
      }
    },

    async buyProducts() {
      if (this.cart.length > 0) {
        try {
          const { status } = await this.$axios.post(
            "/ordencompra",
            {
              productos: this.cart.map(function (c) {
                c.product.cantidad = 2;
                return c.product;
              }),
              direccionId: this.selectedDirection.id,
            },
            {
              headers: { Authorization: `Bearer ${this.$store.state.userJwt}` },
            }
          );
          if (status === 201) {
            this.$store.commit("showSnackbar", "¡Orden completada!");
            this.$store.commit("clearCart");
            this.$router.push("/");
          }
        } catch (error) {
          console.log(error);
          this.$store.commit("showSnackbar", error);
        }
      } else {
        this.$store.commit("showSnackbar", "Su carrito está vacío");
      }
    },
  },
  computed: {
    ...mapState(["cart", "deliveryPrice"]),
    ...mapGetters(["total", "subtotal"]),
  },
  async mounted() {
    const { data } = await this.$axios.get("/direccion", {
      headers: { Authorization: `Bearer ${this.$store.state.userJwt}` },
    });
    this.directions = data;
    this.selectedDirection = data.find((d) => d.defecto);
  },
};
</script>