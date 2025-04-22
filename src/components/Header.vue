<template>
  <header id="header">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo">
        <h1 class="web-name">N-COMPUTER AND PRINTING AGENCY</h1>
      </div>

      <!-- Hamburger Icon (Mobile Only) -->
      <button class="menu-toggle" @click="toggleMenu">
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <!-- Navigation Links -->
      <nav :class="['nav-links', { open: menuOpen }]">
        <RouterLink
          :to="{ path: '/', hash: '#home' }"
          :class="{ active: activeSection === 'home' }"
          @click="handleNavClick"
        >
          Home
        </RouterLink>
        <RouterLink
          :to="{ path: '/', hash: '#services' }"
          :class="{ active: activeSection === 'services' }"
          @click="handleNavClick"
        >
          Services
        </RouterLink>
        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          :class="{ active: activeSection === 'contact' }"
          @click="handleNavClick"
        >
          Contact
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      menuOpen: false,
      activeSection: 'home',
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll(); // Initial highlight
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleNavClick() {
      this.menuOpen = false;
    },
    onScroll() {
      const sections = ['home', 'services', 'contact'];
      let found = false;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (!found) {
              this.activeSection = id;
              found = true;
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped>
/* Header */
header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 1rem 0;
  overflow-x: hidden;
}

/* Container */
.header-container {
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  flex-shrink: 0;
}
.web-name {
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin: 0;
}

/* Hamburger */
.menu-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #111827;
  cursor: pointer;
  display: block;
}

/* Nav links */
.nav-links {
  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
}

.nav-links a {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
}

.nav-links a:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.nav-links.open {
  display: flex;
}

/* Active link */
.nav-links a.active {
  background-color: #111827;
  color: white;
}

/* Desktop styles */
@media screen and (min-width: 1024px) {
  .menu-toggle {
    display: none;
  }

  .nav-links {
    display: flex !important;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: auto;
    margin-top: 0;
    gap: 1.5rem;
  }
}

/* Responsive logo */
@media screen and (max-width: 768px) {
  .web-name {
    font-size: 1rem;
    white-space: normal;
    line-height: 1.2;
    max-width: 12rem;
  }

  .nav-links a {
    color: #000;
  }
}
</style>
