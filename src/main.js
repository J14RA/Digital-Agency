// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Make sure router is correctly imported

const app = createApp(App);
app.use(router); // Make sure router is registered
app.mount("#app");
