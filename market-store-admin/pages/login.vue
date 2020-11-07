<template lang="pug">
v-container.fill-height.fill-width.primary(fluid)
  v-card.pa-6.text-center.mx-auto(min-width=400, max-width=500)
    v-img.mx-auto.mb-6(src="/v.png", width=100)
    v-form(ref="loginForm")
      v-text-field(
        v-model="loginData.usuario",
        :rules="requiredRule",
        label="Usuario",
        append-icon="mdi-account",
        filled
      )
      v-text-field.mb-6(
        v-model="loginData.clave",
        :rules="requiredRule",
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'",
        :type="showPassword ? 'text' : 'password'",
        @click:append="showPassword = !showPassword",
        filled,
        label="Contraseña"
      )
      v-btn(color="primary", :loading="isLogging", @click="login") Login
  v-snackbar(v-model="snackbar", light) {{ errorMessage }}
    template(v-slot:action="{ attrs }")
      v-btn(color="primary", text, v-bind="attrs", @click="snackbar = false") Cerrar
</template>

<script lang="ts" src="@/scripts/login.ts" />
