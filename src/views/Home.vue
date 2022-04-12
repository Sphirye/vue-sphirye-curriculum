<template>
  <v-container class="my-3">
    <v-row>
      <v-col cols="6">
        <v-card class="d-flex justify-center align-center flex-column" dark height="500px">
          <v-card-text class="text-center">
            <span class="text-h4 my-5 text--white">Vue.js - Typescript template</span>
            <v-spacer/>
            <span class="text-body my-5 text--white">Uploaded by Sphirye</span>
            <v-icon color="white">fas fa-star</v-icon>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="d-flex justify-center align-center flex-column" dark height="500px">
          <v-card-text class="text-center">
            <span class="text-h4 my-5 text--white">This template contains:</span>
            <v-spacer/>
            <span class="text-body text--white">Vue and Vuex decorators, vue-axios, Vuetify </span>
            <v-spacer/>
            <span class="text-body my-5 text--white">And obviously, Typescript.</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-btn @click="openDialog()">
        OPEN DIALOG
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import DefaultComponent from "@/components/DefaultComponent.vue"
import { getModule } from "vuex-module-decorators"
import Dialog from "@/models/vue/Dialog"
import DialogModule from "@/store/DialogModule"

@Component({
  components: { DefaultComponent }
})

export default class Home extends Vue {
  openDialog() {
    getModule(DialogModule).showDialog(
      new Dialog("Aviso", "¿Desea continuar?", () =>
        alert("Usted ha continuado. :)")
      )
    )
  }
}

</script>
