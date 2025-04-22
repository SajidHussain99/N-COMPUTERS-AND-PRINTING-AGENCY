<template>
    <section class="partner-section">
      <div class="partner-header">
        <h3>Your Printing Partner</h3>
        <h2>Quality services for everyone</h2>
      </div>
  
      <div class="partner-content">
        <!-- Text Column -->
        <div class="partner-text">
          <p>
            N-Computer and Printing Agency in Karachi, PK, provides comprehensive document printing, copying, typing, and customized documentation services 
            tailored for schools, colleges, and offices. Our skilled team ensures top-notch quality and timely delivery, making your projects hassle-free. 
            Additionally, we offer on-site printer and machine repair services, along with a selection of new and second-hand equipment to meet your needs. 
            Experience reliability and excellence with us!
          </p>
        </div>
  
        <!-- Image Column -->
        <div class="partner-image">
          <img src="../assets/print1.jpeg" alt="Printing Services" />
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .partner-section {
    padding: 3rem 1.5rem;
    background-color: #f9f9f9;
    color: #333;
  }
  
  /* Header styling */
  .partner-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .partner-header h3 {
    color: #22c55e;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }
  
  .partner-header h2 {
    font-size: 1.875rem;
    font-weight: 600;
    margin: 1rem 0;
    color: #111827;
  }
  
  /* Content layout */
  .partner-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  
  .partner-text {
    flex: 1;
    text-align: center;
    font-size: 1rem;
    line-height: 1.6;
    color: #4b5563;
  }
  
  .partner-image {
    flex: 1;
    max-width: 500px;
  }
  
  .partner-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Responsive layout */
  @media (min-width: 768px) {
    .partner-content {
      flex-direction: row;
      align-items: center;
      text-align: left;
    }
  
    .partner-text {
      text-align: left;
    }
  }
  </style>
  