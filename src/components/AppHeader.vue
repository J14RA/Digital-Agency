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
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss">
@import "@/assets/styles/shared.scss";
</style>
