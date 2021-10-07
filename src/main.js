import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Toast , Slider, Stepper, Popup} from "vant";

Vue.use(Button).use(Toast).use(Slider).use(Stepper).use(Popup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
