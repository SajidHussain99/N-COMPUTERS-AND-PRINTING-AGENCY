<template>
    <section id="home" class="relative bg-cover bg-center h-96 flex items-center justify-center text-white" :style="{ backgroundImage:`url(${heroImage})`}"
    >
        <div class="text-center bg-black bg-opacity-50 p-6 rounded">
  
          <h2 class="text-3xl font-bold">Your printing partner</h2>
          <p class="mt-2">Reliable services for all needs</p>
          <a href="#services" class="mt-4 inline-block bg-green-600 px-4 py-2 text-white rounded">View Services</a>
        </div>
      </section>
  </template>

  <script setup>
    import heroImage from '../assets/heroSection.jpeg'
  </script>

  
  <style scoped>
section {
  position: relative;
  height: 24rem; /* h-96 */
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); /* black overlay */
  z-index: 0;
}

.text-center {
  position: relative;
  z-index: 10;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 50%;
}

.text-center h2 {
  font-size: 1.875rem; /* text-3xl */
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.text-center p {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #f3f4f6;
}

.text-center a {
  margin-top: 1rem;
  display: inline-block;
  background-color: #16a34a; /* Tailwind green-600 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
}

.text-center a:hover {
  background-color: #15803d;
}
</style>
