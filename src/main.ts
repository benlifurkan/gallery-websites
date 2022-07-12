import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import App from "./App.vue";
import "./assets/tailwind.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).mount("#app");
