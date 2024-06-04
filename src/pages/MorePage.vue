<template>
  <v-container>
    <h1>Error 404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error-404',
  created() {
    throw new Error('Page not found')
  }
})
</script>
