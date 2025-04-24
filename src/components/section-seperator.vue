<template>
    <div class="section-separator" :style="{ background: bg }">
      <svg class="wave-separator" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,12 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#10102b"></path>
        <!-- f9fafb -->
      </svg>
    </div>
  </template>
  
  <script setup>
  defineProps({
    bg: {
      type: String,
      default: 'linear-gradient(to right, #000, rgb(12, 41, 58))'
    }
  })
  </script>
  
  <style scoped>
  .section-separator {
    height: 60px;
    margin: 2rem 0;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
  }
  .wave-separator {
    width: 100%;
    height: 100px;
    display: block;
  }
  </style>
  