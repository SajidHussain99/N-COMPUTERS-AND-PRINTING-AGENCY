<template>
  <section id="contact" class="contact-section">
    <h2>Contact Us</h2>

    <div class="contact-content">
      <!-- Left: Contact Form -->
      <div class="form-wrapper">
        <form class="contact-form" @submit.prevent>
          <input v-model="user.name" type="text" placeholder="Your Name" required />
          <input v-model="user.phone" type="text" placeholder="Phone Number" required />
          <textarea v-model="user.message" placeholder="Your Message" required></textarea>

          <a :href="whatsappLink" target="_blank" class="block text-center mt-4">
            <button type="button">Send via WhatsApp</button>
          </a>
        </form>
      </div>

      <!-- Right: Info and Hours -->
      <div class="info-wrapper">
        <h3>Get in touch</h3>
        <p class="info-line">
          📧 <a href="mailto:ncomputers19@gmail.com">ncomputers19@gmail.com</a>
        </p>

        <h3>Location</h3>
        <p class="info-line">
          📍 <a
            href="https://www.google.co.uk/maps/place/24%C2%B055'44.4%22N+67%C2%B005'49.5%22E/@24.9289433,67.0956527,17.64z/data=!4m4!3m3!8m2!3d24.928999!4d67.097092?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gulshan-e-Iqbal, Karachi, SD PK
          </a>
        </p>
        
      

        <h3>Hours</h3>
        <ul class="hours-list">
          <li><strong>Monday</strong><span>9:00am – 01:00am</span></li>
          <li><strong>Tuesday</strong><span>9:00am – 01:00am</span></li>
          <li><strong>Wednesday</strong><span>9:00am – 01:00am</span></li>
          <li><strong>Thursday</strong><span>9:00am – 01:00am</span></li>
          <li><strong>Friday</strong><span>9:00am – 01:00am</span></li>
          <li><strong>Saturday</strong><span>9:00am – 01:00am</span></li>
          <li><strong>Sunday</strong><span>9:00am – 01:00am</span></li>
        </ul>
        
      </div>
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

  return `https://wa.me/923142993599?text=Contact%20Request:%0AName:%20${name}%0APhone:%20${phone}%0AMessage:%20${message}`
})
</script>

<style scoped>
.contact-section {
  padding: 3rem 1.5rem;
  background-color: #f9f9f9;
  color: #111827;
}

.contact-section h2 {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Contact Form */
.form-wrapper {
  width: 100%;
  max-width: 40%;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
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
  background-color: #e6ecee;
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

/* Info Section */
.info-wrapper {
  max-width: 40%;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  font-size: 0.95rem;
}

.info-wrapper h3 {
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  font-size: 1.1rem;
}

.info-line {
  margin-bottom: 1rem;
  color: #4b5563;
}

.info-line a {
  color: #1f2937;
  text-decoration: underline;
}

.hours-list {
  list-style: none;
  padding: 0;
  color: #374151;
}

.hours-list li {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 0.95rem;
}

.hours-list li strong {
  font-weight: 600;
  color: #111827;
}

.hours-list li span {
  color: #4b5563;
}



/* Responsive */
@media (max-width: 768px) {
  .form-wrapper,
  .info-wrapper {
    max-width: 100%;
  }
}
</style>
