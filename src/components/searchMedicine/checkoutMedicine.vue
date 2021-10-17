<template>
    <div class="page-container">
        <MedicineTitle titleText="Checkout"></MedicineTitle>

        <div>
            <div class="shipping-address">
                <div class="location">
                    <i class="fas fa-map-marker-alt" id="location-icon"></i>
                </div>
                <div class="address-detail">
                    <h3>Shipping Address:</h3>
                    {{ address.shippingAddress }}
                </div>
            </div>

            <div class="order-detail">
                <van-card v-for="(result, index) in cart" :key="index"
                :num="result.quantity"
                :price="result.price"
                :desc="result.medicineDescription"
                :title="result.medicineName"
                :thumb="result.imgUrl"
                />   
            </div>
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

        let submitOrderForm = JSON.stringify({subtotal: this.price/100, shippingAddress: this.address.shippingAddress, medicines:templist});

        axios({
        method: "post",
        url: "http://deco.logfox.xyz/servlet_project/createMedicineOrderServlet",

        data: qs.stringify(submitOrderForm),
      })
        console.log(submitOrderForm);
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

body {
    margin: 0;
    padding: 0;
}

.page-container {
    width: 100vw;
    height: 100vh;
}

.shipping-address {
    padding: 1em;
    border-radius: 12%;
    display: flex;
}

.location {
    width: 20%;
}

#location-icon {
    font-size: 2em;
    margin-top: 15px;
}

.address-detail {
    width: 80%;
    text-align: left;
}

.order-detail {
    overflow: scroll;
}

.trigger {
    display: none;
}
</style>