<template>
    <section id="contact" class="contact-section">
      <h2>Contact Us</h2>
  
      <div class="form-wrapper">
        <form class="contact-form" @submit.prevent>
          <input v-model="user.name" type="text" placeholder="Your Name" required />
          <input v-model="user.phone" type="text" placeholder="Phone Number" required />
          <textarea v-model="user.message" placeholder="Your Message" required></textarea>
  
          <a
            :href="whatsappLink"
            target="_blank"
            class="block text-center mt-4"
          >
            <button type="button">Send via WhatsApp</button>
          </a>
        </form>
      </div>
    </section>

  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const user = ref({
    name: '',
    phone: '',
    message: ''
  })
  
  const whatsappLink = computed(() => {
    const name = encodeURIComponent(user.value.name || 'N/A')
    const phone = encodeURIComponent(user.value.phone || 'N/A')
    const message = encodeURIComponent(user.value.message || 'No message provided')
  
    return `https://wa.me/923257267805?text=Contact%20Request:%0AName:%20${name}%0APhone:%20${phone}%0AMessage:%20${message}`
  })
  </script>
  
  <style scoped>
  .contact-section {
    padding: 3rem 1.5rem;
    background-color: #f9f9f9;
    color: #111827;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .contact-section h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .form-wrapper {
    width: 100%;
    max-width: 40%;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
  }
  
  .contact-form {
    width: 100%;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #fff;
    color: #111827;
    margin-bottom: 1rem;
  }
  
  .contact-form textarea {
    resize: vertical;
    height: 6rem;
  }
  
  .contact-form button {
    background-color: #16a34a;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
  }
  
  .contact-form button:hover {
    background-color: #15803d;
  }
  
  @media (max-width: 768px) {
    .form-wrapper {
      max-width: 90%;
    }
  }
  </style>
  