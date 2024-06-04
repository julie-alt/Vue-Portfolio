<template>
  <div v-if="hasError" class="error-page">
    <h1>404 Error</h1>
    <h2>Something went wrong.</h2>
    <p>Please try refreshing the page or go back <a href="/">Home</a></p>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ErrorBoundary',
  setup(_, { slots }) {
    const hasError = ref(false)

    const errorCaptured = (err: unknown, vm: any, info: string) => {
      console.error('Error caught by error boundary:', err, info)
      hasError.value = true
      return false
    }

    return {
      hasError,
      slots,
      errorCaptured
    }
  }
})
</script>
