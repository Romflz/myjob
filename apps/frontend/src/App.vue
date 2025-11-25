<script setup lang="ts">
import { onMounted, ref } from 'vue'
const apiResponse = ref<string>('')

onMounted(async () => {
  try {
    const response = await fetch('/api/health')
    const data = await response.json()
    apiResponse.value = data.status
  } catch (error) {
    console.error('Error fetching from backend:', error)
  }
})
</script>

<template>
  <h1 class="text-red-500">{{ apiResponse }}</h1>
</template>
