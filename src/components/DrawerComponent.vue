<template>
  <v-navigation-drawer v-model="drawer" temporary fixed hide-overlay :style="`margin-top: ${$vuetify.application.top}px;`">
    <v-list>
      <v-list-item-group>
        <template v-for="(button, index, key) in buttons">
          <v-list-item class="d-flex justify-start" :key="key">
            <span>{{ button }}</span>
          </v-list-item>
          <v-divider v-if="index < buttons.length - 1" :key="`${index}-divider`" class="grey"/>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import DrawerModule from "@/store/DrawerModule"
import { Component, Vue } from "vue-property-decorator"
import { getModule } from "vuex-module-decorators"

@Component

export default class DrawerComponent extends Vue {

  drawerModule:DrawerModule = getModule(DrawerModule)
  get drawer() { return this.drawerModule.drawer }
  set drawer(value: boolean) { this.drawerModule.setDrawer(value) }

  buttons = [1, 2, 3, 4, 5]
}

</script>
