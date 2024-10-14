<template>
  <section id="testimonial">
    <div class="testimonial-container">
      <!-- Quotes Swiper (Left side on larger screens) -->
      <swiper-container class="swiper-1" controller-control=".swiper-2" :modules="modules" :autoplay="{ delay: 5000 }"
        :loop="true">
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-slide">
            <h3>{{ testimonial.name }}</h3>
            <p>{{ testimonial.feedback }}</p>
          </div>
        </swiper-slide>
      </swiper-container>

      <!-- Images Swiper (Right side on larger screens) -->
      <swiper-container ref="swiper2" class="swiper-2" controller-control=".swiper-1" :effect="'fade'"
        :modules="modules" :autoplay="{ delay: 5000 }" :loop="true">
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-image">
            <img :src="testimonial.image" :alt="testimonial.name" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script>
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay, Controller } from 'swiper/modules';

export default {
  name: "TestimonialPage",
  components: {
    'swiper-container': Swiper,
    'swiper-slide': SwiperSlide,
  },
  data() {
    return {
      testimonials: [
        { name: "John Doe", feedback: "Great service!", image: "assets/images/image1.jpeg" },
        { name: "Jane Smith", feedback: "Excellent support.", image: "assets/images/image2.jpeg" },
        { name: "Robert Johnson", feedback: "Very satisfied.", image: "assets/images/image3.jpeg" }
      ],
      modules: [EffectFade, Autoplay, Controller],
    };
  },
  mounted() {
    this.swiper1 = this.$refs.swiper1;
    this.swiper2 = this.$refs.swiper2;
  },
};
</script>

<style scoped>
#testimonial {
  padding: 40px 0;
  background-color: #f9f9f9;
  text-align: center;
}

.testimonial-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
}

.swiper-1,
.swiper-2 {
  width: 100%;
}

.testimonial-slide {
  padding: 20px;
}

.testimonial-slide h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.testimonial-slide p {
  font-size: 1rem;
  color: #555;
}

.testimonial-image img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
}

.testimonial-image {
  padding: 20px;
}

@media (min-width: 768px) {
  .testimonial-container {
    max-width: 15rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .swiper-1 {
    order: 1;
    flex: 0 0 50%;
    /* Quotes take 50% of the width */
    padding-right: 20px;
  }

  .swiper-2 {
    order: 2;
    flex: 0 0 50%;
    /* Images take 50% of the width */
  }

  .testimonial-image img {
    width: 150px;
    /* Increase image size on larger screens */
    height: 150px;
  }
}
</style>
