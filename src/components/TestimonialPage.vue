<template>
  <section id="testimonial">
    <div class="testimonial">
      <!-- Container for Quotes Swiper -->
      <div class="testimonial-container">
        <swiper-container class="swiper-1" controller-control=".swiper-2" :modules="modules" :loop="true">
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-card">
              <p class="testimonial-text">{{ testimonial.feedback }}</p>
              <div class="testimonial-author">
                <img :src="testimonial.profile" :alt="testimonial.name" class="author-image" />
                <div class="author-details">
                  <h4>{{ testimonial.name }}</h4>
                  <p>{{ testimonial.job }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>

      <!-- Container for Images Swiper -->
      <div class="testimonial-container">
        <swiper-container ref="swiper2" class="swiper-2" controller-control=".swiper-1" :effect="'fade'"
          :modules="modules" :loop="true">
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-image">
              <img :src="testimonial.image" :alt="testimonial.name" />
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay, Controller } from 'swiper/modules';
import testimonials from '@/assets/data/testimonials.json';

export default {
  name: 'TestimonialPage',
  components: {
    SwiperContainer: Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonials,
      modules: [EffectFade, Autoplay, Controller],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/testimonial.scss";
</style>
