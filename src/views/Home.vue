<template>
    <div>
      <Header />
      <Hero />

      <SectionSeperator bg="linear-gradient(to left, #fbe13b, #a6c23e)" />
      <About />
  
      <SectionSeperator bg="linear-gradient(to right, #fbc2eb, #a6c1ee)" />
      <Services />
  
      <SectionSeperator bg="linear-gradient(to right, #fda085, #f6d365)" />
      <Testimonials />
  
      <SectionSeperator bg="linear-gradient(to left, #84fab0, #8fd3f4)" />
      <Portfolio />
  
      <SectionSeperator bg="linear-gradient(to right, #c2001b, #a1ddfd)" />
      <Contact />

      
      <Footer />

    </div>
  </template>
  
  
  <script setup>
  import Header from '../components/Header.vue'
  import Hero from '../components/Hero.vue'
  import About from '../components/About.vue'
  import Services from '../components/Services.vue'
  import Testimonials from '../components/Testimonials.vue'
  import Portfolio from '../components/Portfolio.vue'
  import Contact from '../components/Contact.vue'
  import Footer from '../components/Footer.vue'
  import SectionSeperator from '../components/section-seperator.vue'

  </script>
  

  
  
  