import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Toast, Slider, Stepper, Popup, Search, Icon} from "vant";

Vue.use(Button).use(Toast).use(Slider).use(Stepper).use(Popup).use(Search).use(Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
