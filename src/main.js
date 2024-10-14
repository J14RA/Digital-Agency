// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Make sure router is correctly imported// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const app = createApp(App);
app.use(router); // Make sure router is registered
app.mount("#app");
