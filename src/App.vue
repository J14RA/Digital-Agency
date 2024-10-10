<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>


<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
/* Optional global styles */
body {
  font-family: 'Arial', sans-serif;
}
</style>
