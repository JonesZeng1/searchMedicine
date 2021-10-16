import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import enUS from 'vant/es/locale/lang/en-US';

import { Button, Toast, Slider, Stepper, Popup, Search, Icon, SwipeCell, Card, ContactCard, Locale, SubmitBar, AddressList} from "vant";

Vue.use(Button).use(Toast).use(Slider).use(Stepper).use(Popup).use(Search).use(Icon).use(SwipeCell).use(Card).use(ContactCard).use(SubmitBar).use(AddressList);
Locale.use('en-US', enUS)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
