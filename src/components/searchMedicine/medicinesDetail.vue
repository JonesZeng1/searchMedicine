<template>
      <section class="drugs_detail">
        <div class="drugs_header">
            <h2>Drugs detail</h2>
        </div>
        <div class="drugs_detail_img">
            <img 
            src= "@/assets/nurifenForChild.jpg"
            alt="Image of the medicine."
            >
        </div>
        <article class="drugs_shopping_detail">
            <div class="add_to_cart">
                <!-- <button>Add to cart</button> -->
            </div>
            <div class="drugs_descriptions">
                <p id="drugs_name">{{ medicinesDetail.medicineName }}</p>
                <p id="drugs_price">$Price {{ medicinesDetail.price }}</p>
            </div>
            <div id="app" class="drug_number">
                <van-stepper v-model="value" min="0" max="5" />
            </div>
        </article>

        <article class="drug_usage">
            <div>
                <h3>Dosage</h3>
                <p>2-3 Tablet per time</p>
            </div>
            <div>
                <h3>Applying</h3>
                <p>30 mins after meal</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>{{ medicinesDetail.medicineDescription }}</p>
            </div>

            <!-- <form action=""> -->
                <button @click="addToCart" type="submit" name="buy_drug">Add to Cart</button>
            <!-- </form> -->
        </article>
    </section>
</template>

<script scoped>

export default {
  name: "medicinesDetail",
  data() {
    return {
        value: "",
        medicinesDetail: {},
    };
  },
  created() {
    this.medicinesDetail = this.$store.state.selectedMedicine.find((item) => {
      return item.medicineId === this.$route.query.medicineId;
    });
    
  },
  methods: {
      addToCart() {
          if(this.value != 0) { 
            var temp = this.medicinesDetail;
            (temp['quantity'] = this.value);

            this.$store.state.cart.push(temp);
          } else {
            this.value = "";
          }
          this.value = "";
          this.$router.go(-1);
      }
  },
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

.drugs_detail {
    width: 100vw;
    height: 100vh;
}

.drugs_header {
    text-align: center;
    padding: 1em;
    justify-items: center;
}

.drugs_detail_img {
    width: 100%;
    height: 10em;
    justify-content: center;
}

.drugs_detail_img img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 100%;
}

.drugs_shopping_detail {
    padding: 1em;
    display: flex;
}

.add_to_cart {
    text-align: center;
    width: 35%;
    margin-bottom: auto;
    margin-left: auto;
    margin-top: 1.3em;
}

.add_to_cart button {
    padding: 1em;
    border-radius: 20px;
    border: 1px solid #396CF0;
    background-color: white;
    color: #6b6868;
}

.drugs_descriptions {
    text-align: center;
    width: 30%;
}

.drugs_descriptions p {
    margin-bottom: 0;
}

.drug_number {
    width:40%;
    padding-top: 2em;
}

.drug_usage {
    padding: 2em;
}

.drug_usage p {
    color: #999999;
}

.drug_usage button {
    margin-top: 2em;
    padding: 1em;
    width: 100%;
    border-radius: 10px;
    background-color: #396CF0;
    color: white;
    border: none;
}

</style>