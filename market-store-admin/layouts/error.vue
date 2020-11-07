<template lang="pug">
v-container.fill-height.pa-0(fluid)
  .error-background(
    :style="{ backgroundImage: `url(${$getRandomElement(backgrounds)})` }"
  )
  v-row(justify="center")
    v-col(cols="10", md="6", lg="4")
      v-card.text-center.pa-4.pa-md-6(outlined)
        span.error-title Error {{ error.statusCode }}
        .error-subtitle {{ error.message }}
        div Volver al
          | &nbsp;
          nuxt-link(to="/") inicio
</template>

<style scoped>
.error-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  opacity: 0.125;
}
.error-title {
  font-size: 48px;
  line-height: normal;
}
.error-subtitle {
  font-size: 18px;
  line-height: normal;
  margin-bottom: 25px;
}
</style>

<script lang="ts" src="@/scripts/_error.ts" />
