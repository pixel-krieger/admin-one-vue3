<template>
  <section class="section hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <div class="logo" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'FullPageView',
  created () {
    useMainStore().toggleFullPage(true)
  },
  beforeDestroy () {
    useMainStore().toggleFullPage(false)
  }
})
</script>
