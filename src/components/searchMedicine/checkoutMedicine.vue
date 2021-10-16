<template>
    <div>
        <MedicineTitle titleText="Checkout"></MedicineTitle>

        <div v-for="(result, index) in address" :key="index">
            <h6>Shipping Address</h6>
            <p>{{ result.shippingAddress }}</p>
        </div>

        <div class="order-detail">
            <van-card v-for="(result, index) in cart" :key="index"
            :num="result.quantity"
            :price="result.price"
            :desc="result.medicineDescription"
            :title="result.medicineName"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            />   
        </div>

        <van-submit-bar :price="this.price" button-text="Submit Order" currency=$ @submit="submit" />
        <button class="trigger" type="submit" @click="submitForm"></button>
    </div>
</template>

<script>
import MedicineTitle from "@/components/MedicineTitle";
import axios from "axios";
import qs from "qs";

export default {
    name: "checkoutMedicine",
    components: {
    MedicineTitle,
  },
  data() {
    return {
        cart:{},
        price: "",
        address: {},
        productSubmit: [],
    };
  },
  methods: {
    submit() {
          this.submitForm();
    },
    submitForm() {
        this.submitMedicineOrder();
        
    },
    submitMedicineOrder() {

        var list = this.cart;
        var tempStore = {};
        var templist = [];
        for (var i = 0; i < list.length; i++) {
            tempStore.medicineName = list[i].medicineName;
            tempStore.quantity = list[i].quantity;
            templist.push(tempStore);
            tempStore = {};
        }

        let submitOrderForm = JSON.stringify({subtotal: this.price/100, shippingAddress: this.address[0].shippingAddress, medicines:templist});

        axios({
        method: "post",
        url: "http://deco.logfox.xyz/servlet_project/createMedicineOrderServlet",

        data: qs.stringify(submitOrderForm),
      })
        this.$router.push({ path: "/checkoutCompleted" });
    },
  },
  created: function() {
          this.cart = this.$store.state.cart;
          this.price = this.$store.state.totalPrice;

          this.address = this.$store.state.customerAddress.data.find((item) => {
              return item.defaultAddress === true;
          });
  },
}
</script>

<style scoped>

.order-detail {
    overflow: scroll;
}

.trigger {
    display: none;
}
</style>