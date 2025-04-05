<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import ChanceService from '@/services/ChanceService.js'

const numbers = ref(null)

onMounted(() => {
  ChanceService.getNumbers()
    .then((response) => {
      numbers.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>Los mejores números de hoy</h1>
  <div class="numbers">
    <EventCard v-for="n in numbers" :number="n" />
  </div>
</template>

<style scoped>
.numbers {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
