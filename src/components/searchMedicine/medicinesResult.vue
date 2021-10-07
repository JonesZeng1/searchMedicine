<template>
  <div>
    <MedicineTitle titleText="Cold Pills"></MedicineTitle>

    <section class="pills_filter">
        <article class="pills_price">
            <p>Price</p>
            <div>
                <p id="filter_description">Low to high&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-up"></i></p>
            </div>
        </article>
        <div class="vertical_line"></div>
        <article class="pills_availability">
            <p>AVAILABILITY</p>
            <p id="filter_description">Non-Prescription</p>
        </article>
    </section>

    <section class="pills_list">
        <article @click="selected_specify_drug">
            <div class="pill_image">
                <img src="/assets/panadol.jpeg">
            </div>
            <div class="pill_description">
                <p id="pill_name">Panadol</p>
                <p id="pill_tablets">15 Tablets</p>
            </div>
            <div class="pill_price">
                <p id="pill_price">$18.6</p>
            </div>
        </article>
    </section>
  </div>
</template>

<script>
import MedicineTitle from "@/components/MedicineTitle";

export default {
  name: "medicinesResult",
  components: {
      MedicineTitle,
  },
  methods: {
    selected_specify_drug() {
         this.$router.push({ path: "medicinesDetail" });
    },
  },
}
</script>

<style scoped>

body {
    margin: 0;
    padding: 0;
    background-color: #FAFAFA;
}

.find_medicines_header {
    background-color: #396CF0;
    color: white;
    padding: 2em;
    border-radius: 0% 0% 10% 10%;
    display: flex;
}

#back_arrow_search_medicines {
    padding-top: 1em;
    font-size: 1.5em;
}

.find_header {
    width: 100%;
    text-align: center;
}

.pills_filter {
    margin-right: 1em;
    margin-left: 1em;
    display: flex;
    text-align: center;
    height: 4em;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    width: 90%;
    top: 7em;
    box-shadow: 5px 10px 18px #0000001A;
}

.vertical_line {
    border-left: 1px solid #e6e1e1;
    height: 30px;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    top: 1.3em;
}

.pills_filter p {
    font-size: 0.6em;
    color: #8F9596;
}

#filter_description {
    font-size: 0.8em;
    color: black;
    font-weight: bold;
}

.pills_price {
    width: 50%;
}

.price_level_description  {
    display: flex;
    justify-content: center;
}

.pills_availability {
    width: 50%;
}

.pills_list {
    padding-top: 6em;
    margin-left: 1em;
    margin-right: 1em;
}

.pills_list article {
    box-shadow: 5px 10px 18px #0000001A;
    height: 4em;
    width: 100%;
    border-radius: 10px;
    display: flex;
}

.pill_image {
    width: 30%;
}

.pill_description {
    width: 50%;
}

.pill_price {
    width: 20%;
}

#pill_price {
    text-align: center;
    color: #2D906C;
    padding-top: 0.5em;
}

#pill_name {
    margin-bottom: 0;
}

#pill_tablets {
    font-size: 0.6em;
    color: #999999;
}

.pill_image img {
    width: 60%;
    height: 4em;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>