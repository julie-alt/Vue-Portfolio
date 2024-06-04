<template>
  <div>
    <h1>Error 404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'

export default {
  name: 'Error-404',
  setup() {
    onMounted(() => {
      console.error('Page not found')
    })
  }
}
</script>
