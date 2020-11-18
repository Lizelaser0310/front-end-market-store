<template>
  <div class="pl-4 pr-4 row">
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text class tile outlined>
            <v-card-title class="subheading text-center"
              >Elija su variedad de bolsa *</v-card-title
            >
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-4 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-card-text class="text--primary text-center">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                      ></v-img>

                      <div class="text-center">
                        <v-radio-group v-model="radioGroup">
                          <v-radio label="Solo Verduras" value="1"></v-radio>
                        </v-radio-group>
                      </div>
                      <div>
                        Un favorito de los clientes rebosante de deliciosas
                        selecciones de productos.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-4 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-card-text class="text--primary text-center">
                      <v-img class="white--text align-end" height="200px">
                        <!--<v-card-title>Shoes </v-card-title>-->
                      </v-img>

                      <div class="text-center">
                        <v-radio-group v-model="radioGroup">
                          <v-radio label="Solo Frutas" value="2"></v-radio>
                        </v-radio-group>
                      </div>
                      <div>
                        Ideal para la cocina del dia a dia, con las mejores
                        verduras.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-4 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-card-text class="text--primary text-center">
                      <v-img class="white--text align-end" height="200px">
                        <!--<v-card-title>Shoes </v-card-title>-->
                      </v-img>

                      <div class="text-center">
                        <v-radio-group v-model="radioGroup">
                          <v-radio label="Mixto" value="3"></v-radio>
                        </v-radio-group>
                      </div>
                      <div>
                        Perfecto para bocadillos frescos y deliciosos en
                        cualquier momento del día.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
            </div>
            <v-card-title class="subheading center"
              >Elija el tamaño de bolsa *</v-card-title
            >
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-4 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-card :elevation="hover ? 16 : 2">
                      <v-card-text class="text--primary text-center">
                        <v-img
                          class="white--text align-end"
                          height="200px"
                          :src="
                            require('@/assets/img/ofertas/bolsa-grande.jpg')
                          "
                        ></v-img>

                        <div class="text-center">
                          <v-radio-group v-model="boxSize">
                            <v-radio label="Pequeña" value="1"></v-radio>
                          </v-radio-group>
                        </div>
                        <div>
                          Perfecto para alimentar a 1-2 personas durante una
                          semana, o para una oficina de 5-10 empleados.
                          ¡Entregado fresco a su puerta!
                        </div>
                      </v-card-text>
                      <v-card-subtitle>S/. 15.00</v-card-subtitle>
                    </v-card>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-4 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-card-text class="text--primary text-center">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require('@/assets/img/ofertas/bolsa-grande.jpg')"
                      >
                        <!--<v-card-title>Shoes </v-card-title>-->
                      </v-img>

                      <div class="text-center">
                        <v-radio-group v-model="boxSize">
                          <v-radio label="Media" value="2"></v-radio>
                        </v-radio-group>
                      </div>
                      <div>
                        Perfecto para alimentar a 3 a 4 personas durante una
                        semana, o una oficina de 10 a 15 empleados. ¡Entregado
                        fresco a su puerta!
                      </div>
                    </v-card-text>
                    <v-card-subtitle>S/. 25.00</v-card-subtitle>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-4 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-card-text class="text--primary text-center">
                      <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="require('@/assets/img/ofertas/bolsa-grande.jpg')"
                      >
                        <!--<v-card-title>Shoes </v-card-title>-->
                      </v-img>

                      <div class="text-center">
                        <v-radio-group v-model="boxSize">
                          <v-radio label="Grande" value="3"></v-radio>
                        </v-radio-group>
                      </div>
                      <div>
                        El mejor tamaño y valor para una familia que realmente
                        ama sus frutas, o una oficina de 15 a 20 empleados.
                        ¡Entregado fresco y fresco a su puerta!
                      </div>
                    </v-card-text>
                    <v-card-subtitle>S/. 35.00</v-card-subtitle>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radioGroup: 1,
      boxSize: 1,
    };
  },
};
</script>