<template>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
// @ts-ignore
import { pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'

@Component
export default class LoadingComponent extends Vue {

  @Prop() readonly isLoading!: boolean
  pleaseWaitInstance: pleaseWait | null = null

  mounted() {
    this.onLoadingChanged()
  }

  @Watch('isLoading')
  onLoadingChanged() {
    if (this.isLoading) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    if (!this.pleaseWaitInstance) {
      this.pleaseWaitInstance = pleaseWait({
        logo: 'https://static.wikia.nocookie.net/cookierun/images/9/9f/Alchemist_Cookie.png',
        backgroundColor: '#E6E8E7',
        loadingHtml: '<h1>Loading, please wait...</h1>'
      })
    }
  }
  
  close() {
    if (this.pleaseWaitInstance) {
      this.pleaseWaitInstance.finish()
      this.pleaseWaitInstance = null
    }
  }
}
</script>

<style>
.loading-text {
  font-family: 'Jellyka Bees';
  font-style: italic;
  font-weight: 100;
  font-size: 44px;
}
</style>