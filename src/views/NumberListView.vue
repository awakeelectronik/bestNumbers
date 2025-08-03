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
  <div class="container">
  
  <h1>Los mejores números de hoy</h1>
        
    <div class="important-section">
      <div class="important-title">Los importantes</div>
      <div class="important-numbers" id="importantNumbers">
        <EventCard v-for="n in numbers" :number="n" class="important-number"/>
      </div>
    </div>

    <div class="section-title">Otros números</div>
    <div class="other-numbers" id="otherNumbers">
      <EventCard v-for="n in numbers" :number="n" class="other-number"/>
    </div>

  </div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f0f2f5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
.important-section {
    background: linear-gradient(135deg, #4CAF50, #45a049);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 40px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.important-title {
    text-align: center;
    color: white;
    margin-bottom: 20px;
    font-size: 1.5em;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.important-numbers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    justify-items: center;
}

.other-numbers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.section-title {
    text-align: center;
    margin: 20px 0;
    color: #333;
    font-size: 1.2em;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.legend {
    text-align: center;
    margin-top: 30px;
    padding: 15px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.legend-item {
    display: inline-block;
    margin: 0 20px;
    font-size: 1.1em;
}

.legend-color {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin-right: 8px;
    vertical-align: middle;
}
</style>
