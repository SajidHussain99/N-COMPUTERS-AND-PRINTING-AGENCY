<template>
    <div class="font-sans">
        <Header />
  
      <div class="service-detail">
        <div v-if="service" class="content">
          <img :src="service.image" :alt="service.alt" class="image" />
          <div class="text">
            <h1 class="title">{{ service.title }}</h1>
            <p class="description">{{ service.description }}</p>
         
          </div>
        </div>
  
        <div v-else class="not-found">
          <h2>Service not found</h2>
        </div>

      </div>

    <div class="back-btn-container">
            <router-link to="/" class="back-btn">← Back to Services</router-link>
    </div>
      
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  
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

  
  const route = useRoute()
  const service = computed(() => {
    const id = parseInt(route.params.id)
    return cards.find(card => card.id === id)
  })
  </script>
  
  <style scoped>
  .back-btn-container
  {
    padding:3rem 1.5rem 1rem 1.5rem; 
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    
  
  }
  .service-detail {
    padding: 3rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    background: #f3f4f6;
  }
  
  .content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .image {
    flex: 1 1 300px;
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 400px;
  }
  
  .text {
    flex: 1 1 400px;
    padding: 2rem;
  }
  
  .title {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }
  
  .description {
    font-size: 1rem;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .back-btn {
    display: inline-block;
    background-color: #22c55e;
    color:#000;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: larger;
    text-decoration: none;
    transition: background 0.3s ease;
  }
  .back-btn:hover {
    background-color: #16a34a;
  }
  
  .not-found {
    text-align: center;
  }
  </style>
  