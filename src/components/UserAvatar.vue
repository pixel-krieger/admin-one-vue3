<template>
  <div class="is-user-avatar">
    <img
      :src="newAvatar"
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useMainStore } from '@/stores/main'

export default defineComponent({
  name: 'UserAvatar',
  props: {
    avatar: {
      type: String,
      default: null
    }
  },
  computed: {
    newAvatar () {
      return this.avatar ? this.avatar : useMainStore().userAvatar
    }
  }
})
</script>
