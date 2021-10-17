<template>
 <div class="price">
     <MedicineTitle titleText="Search Medicines"></MedicineTitle>
    
        <section class="search_medicines">

                <van-search v-model="inputValue" placeholder="Please input the keyword" />
            
            <div class="medicines_price_range">
                <h2>Prices: ${{ value[0] }} - ${{ value[1] }}</h2>
                    <form>
                        <van-slider class="slider" v-model="value" :min="5" :max="100" range />
                        <div class="price-indicator">
                          <div class="min-price">
                            <h4>$5</h4>
                          </div>
                          <div class="max-price">
                            <h4>$100</h4>
                          </div>
                        </div>
                        <div class="search_medicine_button">                            
                            <div @click="checksubmit" id="search_medicine_button">Search</div>
                        </div>
                    </form>
            </div>
    
        </section>
 </div>
</template>

<script>
import { Toast} from 'vant';
import MedicineTitle from "@/components/MedicineTitle";
import axios from "axios";
import qs from "qs";

export default {
  name: "searchMedicineDetail",
  components: {
      MedicineTitle,
  },
  data() {
    return {
      value: [5,100],
      inputValue:'',
    };
  },
  methods: {
    checksubmit() {
        if (!this.$data.inputValue) {
        Toast("Please input medicine keyword");
      } else {
        // Store all the values globally
        this.$store.state.keyWord = this.$data.inputValue;
        this.$store.state.highPrice = this.$data.value[1];
        this.$store.state.lowPrice = this.$data.value[0];
        this.submitMedicineDetail();
      }
    },
    submitMedicineDetail() {

        let medicineResult = this.$store.getters.getMedicineInfo;

        axios({
        method: "post",
        url: "http://deco.logfox.xyz/servlet_project/searchMedicineServlet",

        data: qs.stringify(medicineResult),
      }).then((e) => {
          this.$store.state.medicinesRespones = e;
          this.$router.push({ path: "/medicinesResultCat" });
      });
    },
  },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

.price {
    width: 100vw;
    height: 100vh;
}

.search_medicines {
    background-color: #FFFFFF;
    width: 100%;
}

.search_box {
    margin-top: 6em;
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
}

/* this code is refer to https://iframedev.blogspot.com/2020/10/search-box-with-search-icon-using-html.html */

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

.medicines_price_range  {
    padding: 1em;
    margin-top: 4em;
}

.slider {
    width: 100%;
}

.price-indicator {
  padding: 1em;
  display: flex;
}

.min-price {
  text-align: left;
  width: 50%;
}

.max-price {
  text-align: right;
  width: 50%;
}

.search_medicine_button {
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#search_medicine_button {
  border: none;
  border-radius: 15px;
  width: 75vw;
  padding: 1.2em;
  color: white;
  font-size: 1em;
  background-color: #396cf0;
  text-decoration: none;
  text-align: center;
}
</style>