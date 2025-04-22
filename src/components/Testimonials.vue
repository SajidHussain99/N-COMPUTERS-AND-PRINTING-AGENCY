<template>
    <section id="testimonials">
      <h2>What Our Customers Say</h2>
  
      <div class="testimonial-wrapper">
        <div
          class="testimonial-card"
          v-for="(t, i) in visibleTestimonials"
          :key="i"
        >
          <p class="quote">"{{ t.message }}"</p>
          <h4 class="name">— {{ t.name }}</h4>
        </div>
      </div>
  
      <div class="testimonial-buttons" v-if="testimonials.length > 3">
        <button v-if="visibleCount < testimonials.length" @click="showMore">See More</button>
        <button v-else @click="showLess">See Less</button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const testimonials = [
    { name: 'Ahsan Ali', message: 'Fast and professional printing services. Highly recommended!' },
    { name: 'Sana Khan', message: 'Excellent quality and very affordable rates.' },
    { name: 'Imran Qureshi', message: 'Great customer service and quick turnaround!' },
    { name: 'Fatima Zahra', message: 'Always reliable for my business printing needs.' },
    { name: 'Ali Raza', message: 'Loved the clarity of the prints and the customer care.' },
  ]
  
  const visibleCount = ref(3)
  
  const visibleTestimonials = computed(() => testimonials.slice(0, visibleCount.value))
  
  function showMore() {
    visibleCount.value = testimonials.length
  }
  
  function showLess() {
    visibleCount.value = 3
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
  
  .testimonial-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
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
    transition: all 0.3s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.25),
      0 8px 30px rgba(0, 0, 0, 0.15);
    border: 2px solid rgb(220, 233, 100);
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
  
  .testimonial-buttons {
    margin-top: 1.5rem;
  }
  
  .testimonial-buttons button {
    background-color: #1f2937;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    border-radius: 0.375rem;
    cursor: pointer;
  }
  
  .testimonial-buttons button:hover {
    background-color: #15803d;
  }
  
  @media (max-width: 1024px) {
    .testimonial-card {
      flex: 0 0 calc(100% / 2);
    }
  }
  
  @media (max-width: 640px) {
    .testimonial-wrapper {
      flex-direction: column;
      align-items: center;
    }
  
    .testimonial-card {
      width: 100%;
      max-width: 90%;
      flex: none;
      padding: 1rem;
    }
  
    .quote {
      font-size: 0.875rem;
    }
  
    .name {
      font-size: 0.75rem;
    }
  
    .testimonial-buttons button {
      font-size: 0.75rem;
      padding: 0.4rem 1rem;
    }
  }
  </style>
  