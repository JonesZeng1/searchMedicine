<template>
  <div>
    <MedicineTitle titleText="Find Pills"></MedicineTitle>

    <div class="search_box">
        <i class="fas fa-search"></i>
        <input type="text" name="search_medicines">
    </div>

    <section class="medicines_result">

        <div class="symtoms_name">
            <h3>Cold</h3>
            <van-icon @click="showPopup" class="cart" name="cart-o" color="#1989fa" size="35" :badge= "cartNumber.length" />
                <van-popup class="popup" v-model="show" get-container="getContainer" round position="bottom" :style="{ height: '80%' }">
                    <h2>Shopping Cart</h2>

                    <div class="items">
                        <van-swipe-cell v-for="(result, index) in cartNumber" :key="index">

                        <van-card 
                            :num="result.quantity"
                            :price="result.price"
                            :desc="result.medicineDescription"
                            :title="result.medicineName"
                            class="goods-card"
                            :thumb="result.imgUrl"
                        />

                        <template #right>
                            <van-button square text="Delete" type="danger" class="delete-button" @click="deleteItem(index)" />
                        </template>
                    </van-swipe-cell>
                    </div>

                    <div class="confirm-buttom">
                        <div @click="submitMedicineOrder" class="confirm">
                        Confirm
                        </div>
                    </div>

                </van-popup>
        </div>
        
        <div class="medicines">
            <article @click="selectedMedicine" class="medicine_card" v-for="(result, index) in medicinesResults" :key="index">
                <router-link
                :to="{
                    name: 'medicinesDetail',
                    query: {
                    medicineId: result.medicineId,
                    },
                }"
                >
                <img :src="result.imgUrl">
                <div class="medicine">
                    <p>{{result.medicineName}}</p>
                    <p>Price ${{result.price}}</p>
                </div>
                </router-link>
            </article>
        </div>


        <div class="related_medicine">
            <div class="related_medicine_segement">
                <h3 id="related_header">Related</h3>
                <div class="horizontal_line">
                    <p></p>
                </div>
            </div>

            <div class="related_medicines_title">
                <p>General</p>
                <a>More</a>
            </div>

            <div class="medicines">
            <article @click="selectedRandomMedicine()" class="medicine_card" v-for="(result, index) in randomMedicineResult" :key="index">
                <!-- <router-link
                :to="{
                    name: 'medicinesDetail',
                    query: {
                    medicineId: result.medicineId,
                    },
                }"
                > -->
                <img :src="result.imgUrl">
                <div class="medicine">
                    <p>{{result.medicineName}}</p>
                    <p>Price ${{result.price}}</p>
                </div>
                <!-- </router-link> -->
            </article>
        </div>
        </div>
    </section>
  </div>
</template>

<script scoped>
import MedicineTitle from "@/components/MedicineTitle";
import axios from "axios";
import qs from "qs";

export default {
  name: "medicinesResultCat",
  components: {
    MedicineTitle,
  },

  data() {
      return {
          medicinesResults:[],
          randomMedicineResult:[],
          cartNumber: [],
          show: false,
      };
  },

  created: function () {
        this.medicinesResults = this.$store.getters.getMedicinesRespones.medicinesRespones.data;
        this.randomMedicineResult = this.$store.state.randomMedicine.data;
        this.cartNumber = this.$store.state.cart;
        this.$store.state.selectedRandom = this.$store.state.randomMedicine.data;
        this.$store.state.selectedMedicine = this.$store.getters.getMedicinesRespones.medicinesRespones.data;
  },

  methods: {
      selectedMedicine() {
        this.$store.state.selected = 0;
      },

      selectedRandomMedicine() {
        this.$store.state.selected = 1;
      },

      showPopup() {
        this.show = true;

      },
      deleteItem(index) {
        this.$delete(this.cartNumber, index);
      },
      submitMedicineOrder() {

        axios({
        method: "post",
        url: "http://deco.logfox.xyz/servlet_project/searchAddressServlet",

        data: qs.stringify(1),
      }).then((e) => {
          this.$store.state.customerAddress = e;
          this.$store.state.cart = this.cartNumber;

          var total = this.cartNumber;
          var arrayLength = total.length;
          var templist = [];
          var finalPrice = 0;
          var temp = "";

            for (var i = 0; i < arrayLength; i++) {
                temp = total[i].price*total[i].quantity;
                templist.push(temp);
        }
            for (var j = 0; j < templist.length; j++) {
                finalPrice += templist[j];
        }

        this.$store.state.totalPrice = finalPrice*100;

        this.$router.push({ path: "/checkoutMedicine" });
      });
    },
  },
}
</script>

<style scoped>

body {
    margin: 0;
    padding: 0;
    background-color: #F5F5F5;
}

.medicines_result {
    height: 75vh;
    background-color: #FFFFFF;
    width: 100vw;
    margin-top: 1em;
    border-radius: 5% 5% 0% 0%;

}

.search_box {
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
	height: 1.5em;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 1em;
    border: 1px solid #0000001A;
    padding: 10px;
    box-shadow: 5px 10px 18px #0000001A;
    background-color: white;
}

.search_box > i {
	font-size: 1em;
	color: #777;
}

.search_box > input{
	flex: 1;
	height: 1em;
    width: 100%;
	border: none;
	outline: none;
	font-size: 1em;
	padding-left: 10px;
}

.symtoms_name {
    padding: 2em;
    display: flex;
    text-align: left;
}

.symtoms_name h3 {
    width: 80%;
}

.symtoms_name .cart {
    margin: auto;
    width: 20%;

}

.medicines {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 8em;
}

.medicine_card {
    display: inline-block;
}

.medicines article {
    width: 6em;
    height: 4em;
    padding: 2em;
    margin-left: 1em;
    margin-right: auto;
    border-radius: 10%;
    box-shadow: 5px 10px 18px #0000001A;
    text-align: center;
}

.medicines article img{
    width: 100%;
    height:70%;
}

.medicine {
    margin-top: 0;
    width: 100%;
    text-overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
}

.medicines p {
    margin-top: auto;
    font-size: 0.5em;
    color: #2D906C;
}

.related_medicine {
    margin-top: 3em;
}

#related_header {
    padding-left: 1.5em;
}

.related_medicine_segement {
    text-align: left;
}

.related_medicines_title {
    padding: 1.5em;
    height: 2em;
    display: flex;
    text-align: left;
}

.related_medicines_title p {
    width: 80%;
    margin: auto;
    font-weight: bold;
    font-size: 1em;
    margin-left: 10px;
}

.related_medicines_title a {
    margin: auto;
    width: 20%;
}

.horizontal_line p {
    padding-top: 0;
    width: 80%; 
    text-align: center; 
    border-bottom: 1px solid #e6e1e1; 
    line-height: 0.1em;
    color: #bebcbc;
    margin-left: 2em;

}

/* popup windows */

.popup h2 {
    padding: 1em;
}

.goods-card {
    margin: 0;
    background-color: white;
  }

.delete-button {
    height: 100%;
}

.items {
    overflow: scroll;
    height: 23em;
}

.confirm-buttom {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.confirm {
    border: none;
    border-radius: 15px;
    width: 85vw;
    padding: 1.2em;
    color: white;
    font-size: 1em;
    background-color: #396cf0;
    text-decoration: none;
    text-align: center;
}

.confirm p {
    color: #898A8F;
    font-size: 15px;
    margin-bottom: 10px;
}
</style>