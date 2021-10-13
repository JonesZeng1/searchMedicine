<template>
  <div id="app">
    <keep-alive :exclude="['medicinesDetail', 'medicinesResultCat']">
      <router-view class="router-view-class" v-transition />
    </keep-alive>
  </div>
</template>

<script>
import Vue from "vue";
import vueg from "vueg";
import router from "./router";
const options = {
  duration: "0.3", //转场动画时长，默认为0.3，单位秒
  firstEntryDisable: false, //值为true时禁用首次进入应用时的渐现动画，默认为false
  firstEntryDuration: ".6", //首次进入应用时的渐现动画时长，默认为.6
  forwardAnim: "fadeInRight", //前进动画，默认为fadeInRight
  backAnim: "slideOutLeft", //后退动画，默认为fedeInLeft
  sameDepthDisable: false, //url深度相同时禁用动画，默认为false
};

// import "vueg/css/transition-min.css";
Vue.use(vueg, router, options);

export default {
  methods: {
    toSignUp() {
      this.$router.push({ path: "/searchMedicine" });
    },
  },
};
</script>

<style lang="less" scoped>
.router-view-class {
  background-color: white;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
