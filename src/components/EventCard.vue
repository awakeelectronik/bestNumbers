<script setup>
defineProps({
  number: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <RouterLink :class="category" :to="{ name: 'number-details', params: { number: number } }">
    {{ number }}
  </RouterLink>
</template>

<style scoped>
  .important-number {
      background-color: white;
      border-radius: 12px;
      padding: 20px 5px;
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      color: #4CAF50;
      text-decoration: none;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      min-width: 120px;
  }

  .important-number:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  }

  .other-number {
      background-color: #fff;
      border-radius: 8px;
      padding: 12px;
      text-align: center;
      font-size: 16px;
      color: #666;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: all 0.2s ease;
  }

  .other-number:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }

</style>
