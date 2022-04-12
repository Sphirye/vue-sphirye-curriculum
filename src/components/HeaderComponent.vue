<template>
  <v-app-bar height="70px" flat dark dense app clipped-left color="indigo">

    <v-app-bar-nav-icon class="mx-3">
      <v-btn icon @click="toggleDrawer">
        <v-icon large>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar-nav-icon>

  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import DrawerModule from "@/store/DrawerModule"
import { getModule } from "vuex-module-decorators"

@Component

export default class HeaderComponent extends Vue {

  drawerModule: DrawerModule = getModule(DrawerModule)
  toggleDrawer(){ this.drawerModule.toggle() }

}

</script>