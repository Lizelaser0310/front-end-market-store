<template>
  <v-sheet class="ma-10">
    <h1>Preguntas Frecuentes</h1>
    <div class="mt-2">
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in preguntas" :key="i">
          <v-expansion-panel-header
            >{{ item.numero }}: {{ item.pregunta }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>{{
            item.respuesta
          }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-sheet>
</template>
<script>
export default {
  name: "PreguntasFrecuentes",
  data: () => ({
    preguntas: [
      {
        numero: 1,
        pregunta: "¿Qué productos puedo comprar?",
        respuesta:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        numero: 2,
        pregunta: "¿Por qué comprar en Market Store?",
        respuesta:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        numero: 3,
        pregunta: "Olvide mi clave ¿La puedo recuperar?",
        respuesta:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        numero: 4,
        pregunta: "¿Qué medios de pago puedo utilizar en Market Store?",
        respuesta:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        numero: 5,
        pregunta: "¿Hay gastos de envío?",
        respuesta:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        numero: 6,
        pregunta: "Garantía de satisfacción",
        respuesta:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  }),
};
</script>