import { createApp } from "vue";
import App from "./App.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import router from "./router";
// import "../public/tailwind.css";
import "../src/style.css";

// createApp(App).use(router).mount("#app");
const app = createApp(App);

// Register the LoadingSpinner component globally
app.component("loading-spinner", LoadingSpinner);

// Use the router plugin
app.use(router);

// Mount the app to the DOM element with the ID 'app'
app.mount("#app");
