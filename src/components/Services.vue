<template>
    <section id="services">
      <h2>Your one‑stop for printing and more!</h2>
  
      <div class="slider-container">
        <!-- Prev button -->
        <button class="nav-button left" @click="prevSlide">
          ‹
        </button>
  
        <!-- Track -->
        <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * (100 / visible)}%)` }">
          <div class="service-card" v-for="(card, i) in visibleCards" :key="i">
            <img :src="card.image" :alt="card.alt" loading="lazy" />
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
            <router-link :to="`/service/${card.id}`" class="see-more-btn">See More</router-link>
          </div>
        </div>
  
        <!-- Next button -->
        <button class="nav-button right" @click="nextSlide">
          ›
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  
  import img1 from '../assets/print1.jpeg'
  import img2 from '../assets/print2.jpg'
  import img3 from '../assets/print3.jpg'
  import img4 from '../assets/print3.jpg'
  import img5 from '../assets/print2.jpg'


  const cards = [
  {
    id: 1,
    image: img1,
    alt: 'Document Printing',
    title: 'Document Printing',
    heading: 'Professional & Affordable Document Printing',
    description: 'Get crisp, clean, and affordable document printing for school, office, and personal use. We support color and black & white, on various paper sizes and types.'
  },
  {
    id: 2,
    image: img2,
    alt: 'Poster Printing',
    title: 'Poster Printing',
    heading: 'High-Impact Poster Printing',
    description: 'Make your message loud and clear with vibrant poster prints. Ideal for promotions, events, and signage in multiple sizes.'
  },
  {
    id: 3,
    image: img3,
    alt: 'Custom Labels',
    title: 'Custom Labels',
    heading: 'Tailored Branding with Custom Labels',
    description: 'Boost your brand identity with custom labels in various shapes, sizes, and finishes for jars, bottles, packaging, and more.'
  },
  {
    id: 4,
    image: img4,
    alt: 'Business Cards',
    title: 'Business Cards',
    heading: 'First Impressions Matter',
    description: 'Stand out with premium-quality business cards tailored to your professional identity. Choose from matte, gloss, or textured finishes.'
  },
  {
    id: 5,
    image: img5,
    alt: 'Flyers & Brochures',
    title: 'Flyers & Brochures',
    heading: 'Engaging Flyers & Brochures',
    description: 'Reach your audience with compelling and informative marketing materials. Full-color printing with folding options available.'
  }
]

  
  const visible = ref(3)  // Number of cards visible at once
  const currentIndex = ref(0)
  
  const updateVisible = () => {
    const width = window.innerWidth
    if (width <= 640) visible.value = 1
    else if (width <= 768) visible.value = 2
    else if (width <= 1024) visible.value = 3
    else visible.value = 5
  }
  
  onMounted(() => {
    updateVisible()
    window.addEventListener('resize', updateVisible)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVisible)
  })
  
  // Get the visible cards based on current index and wrapping logic
  const visibleCards = computed(() => {
    const cardsToShow = []
    for (let i = 0; i < visible.value; i++) {
      cardsToShow.push(cards[(currentIndex.value + i) % cards.length])
    }
    return cardsToShow
  })
  
  function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % cards.length
  }
  
  function prevSlide() {
    currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length
  }
  </script>
  
  <style scoped>
  #services {
    background: #f9f9f9;
    padding: 3rem 1.5rem;
    text-align: center;
  }
  
  #services h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #111827;
  }
  
  /* Slider wrapper */
  .slider-container {
    position: relative;
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
  }
  
  /* Track */
  .slider-track {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .service-card {
    flex: 0 0 calc(100% / 5);
    background-color: #ffffff;
    padding: 1.3rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.2),
      0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgb(136, 241, 133);
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.25),
      0 8px 30px rgba(0, 0, 0, 0.15);
      border:2px solid rgb(87, 218, 185);
  }
  
  .service-card img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .service-card h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color:black;
  }
  
  .service-card p {
    font-size: 0.875rem;
    color: #4b5563;
    margin-bottom: 1rem;
  }
  
  .see-more {
    margin-top: auto;
    padding: 0.5rem 1rem;
    background-color: #16a34a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .see-more:hover {
    background-color: #15803d;
  }
  
  /* Navigation buttons */
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(17,24,39,0.7);
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
  
  /* Tablet: show 2 cards */
  @media (max-width: 1024px) {
    .service-card {
      flex: 0 0 calc(100% / 3);
    }
  }
  
  /* Mobile: show 1 card */
  @media (max-width: 640px) {
    .service-card {
      flex: 0 0 100%;
    }
  }
  </style>
  