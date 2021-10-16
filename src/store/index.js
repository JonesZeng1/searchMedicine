import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyWord: "",
    highPrice: "",
    lowPrice: "",
    medicinesRespones: "",
    selectedMedicine: [],
    cart:[],
    customerAddress: "",
    totalPrice: "",
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getMedicineInfo: (state) => {
      return {
        keyWord: state.keyWord,
        highPrice: state.highPrice,
        lowPrice: state.lowPrice,
      };
    },
    getMedicinesRespones: (state) => {
      return {
        medicinesRespones: state.medicinesRespones,
      };
    },
  },
});
