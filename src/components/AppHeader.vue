<template>
  <header class="main-header">
    <nav class="main-nav">
      <div class="main-nav__logo">
        <img src="/assets/logo.png" alt="Logo">
      </div>
      <ul class="main-nav__items">
        <li class="main-nav__item"><router-link to="/">Home</router-link></li>
        <li class="main-nav__item"><router-link to="/portfolio">Portfolio</router-link></li>
        <li class="main-nav__item"><router-link to="/testimonial">Testimonial</router-link></li>
      </ul>
      <div>
        <a href="#" class="main-nav__item--cta">Contact Sales</a>
      </div>
    </nav>
  </header>

  <div class="mobile-header">
    <nav class="mobile-nav">
      <div class="mobile-nav__logo">
        <img src="/assets/logo.png" alt="Mobile Logo">
      </div>
      <button class="mobile-nav__toggle" aria-label="Toggle navigation" @click="toggleMenu">
        ☰
      </button>
      <!-- Mobile menu items -->
      <ul class="mobile-nav__items" :class="{ 'mobile-nav--active': isMenuActive }">
        <li class="mobile-nav__item"><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li class="mobile-nav__item"><router-link to="/portfolio" @click="closeMenu">Portfolio</router-link></li>
        <li class="mobile-nav__item"><router-link to="/testimonial" @click="closeMenu">Testimonial</router-link></li>
        <li class="mobile-nav__item"><a href="#" class="mobile-nav__item--cta" @click="closeMenu">Contact Sales</a></li>
      </ul>
    </nav>
    <!-- Overlay, dynamically add 'active' class when menu is open -->
    <div class="mobile-nav-overlay" :class="{ 'active': isMenuActive }" @click="closeMenu"></div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuActive: false, // Track whether the mobile menu is active
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive; // Toggle the menu visibility
    },
    closeMenu() {
      this.isMenuActive = false; // Close the menu
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/shared.scss";
</style>
