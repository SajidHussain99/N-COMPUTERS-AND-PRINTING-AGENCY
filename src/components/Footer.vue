<template>
    <footer class="footer">
      <p class="footer-text">© 2025 N-Computer and Printing Agency</p>
  
      <!-- Social Media Links -->
      <div class="social-icons">
        <a href="https://facebook.com/109717267194085" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div>
        <p>Shop No. 20, Gulistan-e-Erum, Near Disco Bakery, Block-3, Gulshan-e-Iqbal, Karachi</p>
      </div>
      <div>
        <p>+9203142993599</p>
      </div>
  
      <!-- Go to Top Arrow -->
      <div class="go-top">
        <a href="#home" aria-label="Back to Top">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #111827; /* Tailwind's gray-900 */
    color: #ffffff;
    text-align: center;
    padding: 2rem 1rem;
    margin-top: 3rem;
    position: relative;
  }
  
  .footer-text {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .social-icons a {
    font-size: 1.3rem;
    color: #ffffff;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #38bdf8; /* Tailwind's sky-400 */
  }
  
  .go-top a {
    display: inline-block;
    color: #ffffff;
    font-size: 1.5rem;
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  .go-top a:hover {
    transform: translateY(-4px);
    color: #22d3ee; /* Tailwind's cyan-400 */
  }
  </style>
  