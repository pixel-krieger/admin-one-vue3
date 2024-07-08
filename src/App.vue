<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<script>
import { defineComponent } from 'vue'
import menu from '@/menu.js'
import NavBar from '@/components/NavBar.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'AppComponent',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  data () {
    return {
      menu
    }
  },
  created () {
    const store = useMainStore();
    store.user({
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
    });
  }
})
</script>
<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <RouterView />
  <footer-bar />
</template>

<style scoped>
</style>
