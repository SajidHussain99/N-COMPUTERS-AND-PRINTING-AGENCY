<template>
    <section id="portfolio">
      <h2>Our Work Portfolio</h2>
  
      <!-- Mobile layout -->
      <div class="portfolio-mobile" v-if="isMobile">
        <div class="portfolio-card" v-for="(item, i) in items.slice(0, mobileVisible)" :key="i">
          <img :src="item.image" :alt="item.alt" loading="lazy" />
          <h3>{{ item.title }}</h3>
        </div>
  
        <div v-if="items.length > 3" class="load-buttons">
          <button v-if="mobileVisible < items.length" @click="mobileVisible += 2">Load More</button>
          <button v-else-if="mobileVisible > 3" @click="mobileVisible = 3">See Less</button>
        </div>
      </div>
  
      <!-- Desktop slider -->
      <div class="slider-container" v-else>
        <button class="nav-button left" @click="prevSlide">‹</button>
  
        <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * (100 / visible)}%)` }">
          <div class="portfolio-card" v-for="(item, i) in visibleItems" :key="i">
            <img :src="item.image" :alt="item.alt" loading="lazy" />
            <h3>{{ item.title }}</h3>
          </div>
        </div>
  
        <button class="nav-button right" @click="nextSlide">›</button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  
  import sample1 from '../assets/p1.png'
  import sample2 from '../assets/p2.png'
  import sample3 from '../assets/p3.png'
  import sample4 from '../assets/p4.png'
  import sample5 from '../assets/p2.png'
  
  const items = [
    { image: sample1, alt: 'Brochure design', title: 'Event Brochure' },
    { image: sample2, alt: 'Business card', title: 'Business Cards' },
    { image: sample3, alt: 'Flyer design', title: 'Promotional Flyer' },
    { image: sample4, alt: 'Menu print', title: 'Cafe Menu Print' },
    { image: sample5, alt: 'Poster artwork', title: 'Campaign Poster' },
  ]
  
  const visible = ref(3)
  const currentIndex = ref(0)
  const mobileVisible = ref(3)
  const isMobile = ref(window.innerWidth <= 640)
  
  const updateLayout = () => {
    const width = window.innerWidth
    isMobile.value = width <= 640
    if (width <= 640) {
      visible.value = 1
    } else if (width <= 768) {
      visible.value = 2
    } else if (width <= 1024) {
      visible.value = 3
    } else {
      visible.value = 5
    }
  }
  
  onMounted(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateLayout)
  })
  
  const visibleItems = computed(() => {
    const shown = []
    for (let i = 0; i < visible.value; i++) {
      shown.push(items[(currentIndex.value + i) % items.length])
    }
    return shown
  })
  
  function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % items.length
  }
  function prevSlide() {
    currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
  }
  </script>
  
  <style scoped>
  #portfolio {
    background: #ffffff;
    padding: 3rem 1.5rem;
    text-align: center;
  }
  
  #portfolio h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #111827;
  }
  
  .slider-container {
    position: relative;
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .slider-track {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .portfolio-card {
    flex: 0 0 calc(100% / 5);
    background-color: #f3f4f6;
    padding: 1.25rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .portfolio-card img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    transition: transform 0.4s ease;
  }
  .portfolio-card img:hover {
    transform: scale(1.1);
  }
  .portfolio-card h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #1f2937;
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(17, 24, 39, 0.7);
    border: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.375rem;
    z-index: 10;
  }
  
  .nav-button.left {
    left: 0.5rem;
  }
  .nav-button.right {
    right: 0.5rem;
  }
  
  /* Mobile layout */
  .portfolio-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .load-buttons {
    margin-top: 1rem;
  }
  .load-buttons button {
    background-color: #1f2937;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    border-radius: 0.375rem;
    cursor: pointer;
  }
  
  /* Responsive card sizing */
  @media (max-width: 1024px) {
    .portfolio-card {
      flex: 0 0 calc(100% / 3);
    }
  }
  @media (max-width: 640px) {
    .slider-container {
      display: none;
    }
  
    .portfolio-card {
      width: 90%;
      margin: 0.5rem auto;
    }
  }
  </style>
  