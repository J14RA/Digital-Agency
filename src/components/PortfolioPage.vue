<template>
  <div class="portfolio">
    <div class="portfolio-title">
      <h2>Featured Projects</h2>
      <img src="/assets/chicken-svgrepo-com.svg" alt="">
      <p>Drag through our latest and greatest cases below. Want to watch even more
        oxentree stuff? Visit our full portfolio.</p>
    </div>
    <section class="portfolio-items">
      <div class="portfolio-item div1">
        <img src="https://placehold.co/600x400/png" alt="Real Estate Website">
        <h3>Real Estate Website</h3>
        <p>Website Design</p>
      </div>
      <div class="portfolio-item div2">
        <img src="https://placehold.co/600x400/png" alt="Task Management Dashboard">
        <h3>Task Management Dashboard</h3>
        <p>Dashboard Design</p>
      </div>
      <div class="portfolio-item div3">
        <img src="https://placehold.co/600x400/png" alt="Plant Shop UI Kit Mobile">
        <h3>Plant Shop UI Kit Mobile</h3>
        <p>Apps Design</p>
      </div>
      <div class="portfolio-item div4">
        <img src="https://placehold.co/600x400/png" alt="Digital Agency Website">
        <h3>Digital Agency Website</h3>
        <p>Website Design</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/portfolio.scss";
</style>
