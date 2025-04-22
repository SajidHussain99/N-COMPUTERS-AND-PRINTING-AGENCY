<template>
    <section id="testimonials">
      <h2>What Our Customers Say</h2>
  
      <div class="slider-container">
        <!-- Prev button -->
        <button class="nav-button left" @click="prevSlide">‹</button>
  
        <!-- Track -->
        <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * (100 / visible)}%)` }">
          <div class="testimonial-card" v-for="(t, i) in visibleTestimonials" :key="i">
            <p class="quote">"{{ t.message }}"</p>
            <h4 class="name">— {{ t.name }}</h4>
          </div>
        </div>
  
        <!-- Next button -->
        <button class="nav-button right" @click="nextSlide">›</button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  
  const testimonials = [
    { name: 'Ahsan Ali', message: 'Fast and professional printing services. Highly recommended!' },
    { name: 'Sana Khan', message: 'Excellent quality and very affordable rates.' },
    { name: 'Imran Qureshi', message: 'Great customer service and quick turnaround!' },
    { name: 'Fatima Zahra', message: 'Always reliable for my business printing needs.' },
    { name: 'Ali Raza', message: 'Loved the clarity of the prints and the customer care.' },
  ]
  
  const visible = ref(2)
  const currentIndex = ref(0)
  
  const updateVisible = () => {
    const width = window.innerWidth
    if (width <= 640) visible.value = 1
    else if (width <= 1024) visible.value = 2
    else visible.value = 3
  }
  
  onMounted(() => {
    updateVisible()
    window.addEventListener('resize', updateVisible)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateVisible)
  })
  
  const visibleTestimonials = computed(() => {
    const visibleItems = []
    for (let i = 0; i < visible.value; i++) {
      visibleItems.push(testimonials[(currentIndex.value + i) % testimonials.length])
    }
    return visibleItems
  })
  
  function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length
  }
  
  function prevSlide() {
    currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
  }
  </script>
  
  <style scoped>
  #testimonials {
    background: #f9f9f9;
    padding: 3rem 1.5rem;
    text-align: center;
  }
  
  #testimonials h2 {
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
  
  /* Testimonial card */
  .testimonial-card {
    flex: 0 0 calc(100% / 3.6);
    background-color: #ffffff;
    padding: 2rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 6px 20px rgba(0, 0, 0, 0.05);
    text-align: left;
  }

  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.25),
      0 8px 30px rgba(0, 0, 0, 0.15);
      border:2px solid rgb(220, 233, 100);
  }
  
  .quote {
    font-size: 1rem;
    font-style: italic;
    color: #374151;
    margin-bottom: 1rem;
  }
  
  .name {
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
  }
  
  /* Navigation buttons */
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
  
  /* Responsive tweaks */
  @media (max-width: 1024px) {
    .testimonial-card {
      flex: 0 0 calc(100% / 2);
    }
  }
  
  @media (max-width: 640px) {
    .testimonial-card {
      flex: 0 0 100%;
    }
  }
  </style>
  