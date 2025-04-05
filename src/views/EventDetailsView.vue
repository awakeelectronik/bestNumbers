<script setup>
import { ref, onMounted } from 'vue'
import ChanceService from '@/services/ChanceService.js'

const props = defineProps({
  number: {
    required: true,
  },
})

const number = ref(null)

onMounted(() => {
  number.value = props.number
})
</script>

<template>
  <div v-if="number">
    <h1>{{ number }}</h1>
  </div>
</template>
