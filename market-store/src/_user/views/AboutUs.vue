<template>
  <v-sheet style="border-top: green;">
    <p class="display-3 font-weight-light text-center pa-4">Quienes Somos</p>
    <v-row class>
      <div style="border: black solid 1px; border-radius:5px;" class="ma-10 mt-2 pa-4">
        <p>Somos personas como tú. Personas que trabajamos pensando en darle lo mejor a nuestra familia, porque sabemos el valor que eso tiene para ti, es que asumimos un compromiso inalterable con la calidad. Somos un equipo de profesionales jóvenes motivados a hacer las cosas bien. Creemos firmemente en nuestra gente y en su capacidad, en la promoción del talento interno en base a méritos. Somos innovadores, intrépidos y modernos, buscamos excelencia en todos nuestros procesos para poder trasladarles los beneficios de nuestro sistema a los clientes.</p>
        <p>Nuestra obsesión es darte una mejor experiencia de compra, con los mejores productos a los mejores precios, con el mejor servicio. Por eso nuestro compromiso con cada una de las familias peruanas, para poner a su alcance todo lo que pueda mejorar su calidad de vida, respondiendo a las necesidades diarias.</p>
        <p>Todos queremos pagar menos y vivir mejor. Y trabajamos para que tú lo puedas hacer todos los días.</p>
        <ul>
            <li>Visión: Somos líderes en cada mercado donde competimos por ofrecer el lugar preferido para comprar y trabajar.</li>
            <li>Misión: Ahorrarles dinero a las familias para que vivan mejor.</li>
        </ul>
        <h3>Valores</h3>
        <p>
            <ul>
                <li>Integridad: Actuar con respeto, honestidad y compromiso. Ser íntegro es: Ser coherente entre lo que digo y lo que hago. Hacer lo correcto Decir la verdad Respetar las ideas de los demás Cumplir lo que prometo.</li>
                <li>Innovación: Buscar nuevas formas de sorprender a nuestros clientes. Ser innovador es: Ir más allá de las expectativas de mi cliente. Ser creativo en la búsqueda de soluciones Preguntarme cómo podría hacer las cosas, diferente. Compartir mis ideas con mi equipo. Tomar la iniciativa.</li>
                <li>Excelencia Pasión por ser los mejores en lo que hacemos. Ser excelente es: Tener pasión por productos ganadores. Ser un ¡campeón en el servicio!. Trabajar como un gran equipo. Hacer que las cosas mejoren. Tener actitud positiva.</li>
            </ul>
        </p>
        <p>
          <ul v-for="(item,idx) in values" :key="idx">
            <li>
              {{item}}
            </li>
          </ul>
        </p>
      </div>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    values: [],
  }),
  created: async function () {
    // Send request to the ASP.NET Core application.
    // No need to specify the host:port since it all runs from the same location
    try {
      const request = await this.$axios.get(
        "http://localhost:58836/api/usuario"
      );
      //this.values = await a.json();
      this.values = request.data;
      console.log(this.values);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
