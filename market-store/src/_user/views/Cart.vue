<template>
  <div>
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">
        CARRITO DE COMPRA
      </p>
      <v-row>
        <v-col :cols="12" md="9" sm="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">PRODUCTO</th>
                  <th class="text-center">PRECIO</th>
                  <th class="text-center">CANTIDAD</th>
                  <th class="text-center">SUBTOTAL</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody class="">
                <tr v-for="(item, idx) in cart" :key="item.product.id">
                  <td class="text-center">
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img
                          class="imageProduct"
                          :src="item.product.imagen"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{
                          item.product.nombre
                        }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          item.product.descripcion
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td class="text-center">
                    {{ `S/ ${item.product.precio.toFixed(2)}` }}
                  </td>
                  <td class="text-center">
                    <v-text-field
                      v-model="item.quantity"
                      type="number"
                      class="py-4 mx-auto"
                      label="Outlined"
                      style="width: 100px"
                      single-line
                      outlined
                      hide-details
                      :suffix="item.product.medida"
                    >
                    </v-text-field>
                  </td>
                  <td class="text-center">
                    {{
                      `S/ ${(item.product.precio * item.quantity).toFixed(2)}`
                    }}
                  </td>
                  <td class="text-center deleteProduct">
                    <v-btn icon @click="$store.commit('removeToCart', idx)"
                      ><v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
                <!--<tr>
                  <td>
                    <v-list-item key="1">
                      <v-list-item-avatar>
                        <v-img
                          class="imageProduct"
                          :src="require('@/assets/img/products/product5.jpg')"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title class="nameProduct"
                          >Papa blanca</v-list-item-title
                        >
                        <v-list-item-subtitle class="descriptionProduct"
                          >Lorem Ipsum</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td class="priceProduct">$40.00</td>
                  <td>
                    <v-text-field
                      class="quantityProduct pt-10"
                      label="Outlined"
                      style="width: 80px"
                      single-line
                      outlined
                      value="2"
                      type="number"
                    ></v-text-field>
                  </td>
                  <td>$80.00</td>
                  <td class="deleteProduct">
                    <a>X</a>
                  </td>
                </tr>-->
                <!--<tr>
                  <td>
                    <v-list-item key="1">
                      <v-list-item-avatar>
                        <v-img
                          :src="require('@/assets/img/products/product9.jpg')"
                        ></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>Fresa</v-list-item-title>
                        <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </td>
                  <td>$40.00</td>
                  <td>
                    <v-text-field
                      class="pt-10"
                      label="Outlined"
                      style="width: 80px"
                      single-line
                      outlined
                      value="2"
                      type="number"
                    ></v-text-field>
                  </td>
                  <td>$80.00</td>
                  <td>
                    <a>X</a>
                  </td>
                </tr>-->
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="12" md="3" style="border: 2px solid #429f14">
          <p class="headline">Resumen de compra</p>
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
            <v-btn class="primary white--text mt-5" outlined
              >COMPRAR AHORA</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-card class>
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">ENVÍO GRATUITO</h3>
                <p class="font-weight-thin">ENVÍO DIRECTO</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">PAGO SEGURO</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">
                  GARANTÍA DE SATISFACCIÓN DEL 100%
                </h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    rating: 4.5,
    deliveryPrice: 5,
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home",
      },
      {
        text: "Clothing",
        disabled: false,
        href: "breadcrumbs_clothing",
      },
      {
        text: "T-Shirts",
        disabled: true,
        href: "breadcrumbs_shirts",
      },
    ],
  }),
  computed: {
    subtotal: function () {
      return this.total / 1.18;
    },
    total: function () {
      if (this.cart.length > 0) {
        return this.cart.reduce(
          (a, c) => a + c.product.precio * c.quantity,
          this.cart[0].product.precio
        );
      }
      return 0;
    },
    ...mapState(["cart"]),
  },
};
</script>

