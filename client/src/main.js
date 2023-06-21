import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import VueScrollTo from "vue-scrollto";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

app.use(router);
app.use(pinia);
app.use(VueScrollTo);

app.mount("#app");
