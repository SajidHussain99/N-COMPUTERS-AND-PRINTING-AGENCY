<template>
    <footer class="footer">
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
        <a
          href="https://www.google.co.uk/maps/place/24%C2%B055'44.4%22N+67%C2%B005'49.5%22E/@24.9289433,67.0956527,17.64z/data=!4m4!3m3!8m2!3d24.928999!4d67.097092?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer">
            <p><strong class="shop-address"> Shop No. 20, Gulistan-e-Erum, Near Disco Bakery, Block-3, Gulshan-e-Iqbal, Karachi</strong> </p>
        </a>
      </div>

      <div>
        <p>+9203142993599 | +9203109077441 </p>
      </div>


      <p class="footer-text"> <br>@2025 N-Computer and Printing Agency</p>
  
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
  .shop-address
  {
    color: white;
    font-weight: bold;
  }
  </style>
  