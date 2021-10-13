import Vue from "vue";
import VueRouter from "vue-router";
import SearchMedicine from "../views/SearchMedicine.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search Medicine",
    component: SearchMedicine,
  },
  {
    path: "/searchMedicineDetail",
    name: "Search Medicine Detail",
    component: () =>
      import(
        /* webpackChunkName: "searchMedicineDetail" */ "../components/searchMedicine/searchMedicineDetail"
      ),
  },
  {
    path: "/medicinesResultCat",
    name: "Medicines Result Cat",
    component: () =>
      import(
        /* webpackChunkName: "medicinesResultCat" */ "../components/searchMedicine/medicinesResultCat"
      ),
  },
  // {
  //   path: "/medicinesResult",
  //   name: "Medicines Result",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "medicnesResult" */ "../components/searchMedicine/medicinesResult"
  //     ),
  // },
  {
    path: "/medicinesDetail",
    name: "medicinesDetail",
    component: () =>
      import(
        /* webpackChunkName: "medicinesDetail" */ "../components/searchMedicine/medicinesDetail"
      ),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
