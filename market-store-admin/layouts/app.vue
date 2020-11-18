<template lang="pug">
v-app
  v-alert.app-alert.mx-3.mx-sm-6.mx-md-8(
    v-model="isAlert",
    :type="aPayload.type",
    :icon="aPayload.icon",
    min-width="300",
    transition="scale-transition",
    origin="center center",
    dismissible
  ) {{ aPayload.message }}
  v-snackbar.app-snackbar(
    v-model="isSnackbar",
    :color="sPayload.color",
    :timeout="sPayload.timeout",
    :top="sPayload.align === 'top'",
    :right="sPayload.align === 'right'",
    :bottom="sPayload.align === 'bottom'",
    :left="sPayload.align === 'left'"
  ) {{ sPayload.message }}
    template(v-slot:action="{ attrs }")
      v-btn(icon, v-bind="attrs", @click="isSnackbar = false")
        v-icon mdi-close

  v-navigation-drawer(
    :mini-variant="miniVariant",
    :expand-on-hover="expandHover",
    permanent,
    fixed,
    app
  )
    v-list
      v-list-item(
        v-for="(item, i) in navItems",
        :key="i",
        :to="item.to",
        router,
        exact
      )
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text="item.title")
  v-app-bar(color="primary", dark, fixed, app)
    v-btn(icon, @click.stop="maximize")
      v-icon mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
    v-toolbar-title(v-text="title")
    v-spacer
    v-btn(icon, @click.stop="logout")
      v-icon mdi-exit-to-app
  v-main
    v-container
      v-breadcrumbs.px-0(:items="breadcrumbItems")
      v-row(justify="center")
        v-col(cols=12, lg=10)
          nuxt
  v-footer(app)
    span &copy; {{ new Date().getFullYear() }}
</template>

<script lang="ts" src="@/scripts/_app.ts" />
