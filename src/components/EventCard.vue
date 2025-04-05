<script setup>
defineProps({
  number: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    class="number-link"
    :to="{ name: 'number-details', params: { number: number } }"
  >
    <div class="number-card">
      <h2>{{ number }}</h2>
      <!-- <span>@{{ number.time }} on {{ number.date }}</span> -->
    </div>
  </RouterLink>
</template>

<style scoped>
  .number-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  .number-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .number-link {
    color: #2c3e50;
    text-decoration: none;
  }
</style>
