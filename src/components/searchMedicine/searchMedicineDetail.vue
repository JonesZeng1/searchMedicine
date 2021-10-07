<template>
 <div class="price">
     <MedicineTitle titleText="Search Medicines"></MedicineTitle>
    
        <section class="search_medicines">
            <div class="search_box">
                <i class="fas fa-search"></i>
                <input type="text" name="search_medicines">
            </div>
    
            
            <div class="medicines_price_range">
                <h2>Prices</h2>
                    <form>
                        <van-slider class="slider" v-model="value" range @change="onChange" />

                        <div class="search_medicine_button">
                            <router-link to="/medicinesResultCat"><button id="search_medicine_button" type="submit">Search</button></router-link>
                        </div>
                    </form>
            </div>
    
        </section>
 </div>
</template>

<script>
import { Toast} from 'vant';
import MedicineTitle from "@/components/MedicineTitle";

export default {
  name: "searchMedicineDetail",
  components: {
      MedicineTitle,
  },
  data() {
    return {
      // 双滑块模式时，值必须是数组
      value: [10, 50],
    };
  },
  methods: {
    selected_Price() {
         this.$router.push({ path: "/medicinesResultCat" });
    },
    onChange(value) {
      Toast('Current value range：' + value);
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

/* .medicines_price_range form {
    width: 100%;
    height: 10em;
    text-align: left;
} */

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
  width: 85vw;
  padding: 1.2em;
  color: white;
  font-size: 1em;
  background-color: #396cf0;
  text-decoration: none;
  text-align: center;
}
</style>