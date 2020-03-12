import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store";
import "./assets/styles/main.css";
import "bootstrap";
import "./assets/styles/theme.css";

//importing vue components
Vue.config.productionTip = false;

//server-bus
export const serverBus = new Vue();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
