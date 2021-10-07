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
            <a href="">More</a>
        </div>
        
        <div class="medicines">
            <article @click="selected_drug" class="medicine_card" >
                <img src="">
                <p id="medicine_name">Panadol</p>
                <p>$price</p>
            </article>

            <article class="medicine_card">
                <img src="">
                <p id="medicine_name">Panadol</p>
                <p>$price</p>
            </article>

            <article class="medicine_card">
                <img src="">
                <p id="medicine_name">Panadol</p>
                <p>$price</p>
            </article>

            <article class="medicine_card">
                <img src="">
                <p id="medicine_name">Panadol</p>
                <p>$price</p>
            </article>

            <article class="medicine_card">
                <img src="">
                <p id="medicine_name">Panadol</p>
                <p>$price</p>
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
                <p>Fever</p>
                <a href="">More</a>
            </div>

            <div class="medicines">
                <article class="medicine_card">
                    <img src="">
                    <p id="medicine_name">Panadol</p>
                    <p>$price</p>
                </article>
    
                <article class="medicine_card">
                    <img src="">
                    <p id="medicine_name">Panadol</p>
                    <p>$price</p>
                </article>
    
                <article class="medicine_card">
                    <img src="">
                    <p id="medicine_name">Panadol</p>
                    <p>$price</p>
                </article>
    
                <article class="medicine_card">
                    <img src="">
                    <p id="medicine_name">Panadol</p>
                    <p>$price</p>
                </article>

                <article class="medicine_card">
                    <img src="">
                    <p id="medicine_name">Panadol</p>
                    <p>$price</p>
                </article>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import MedicineTitle from "@/components/MedicineTitle";

export default {
  name: "medicinesResultCat",
  components: {
    MedicineTitle,
  },
  data() {
  },
  methods: {
    selected_drug() {
         this.$router.push({ path: "medicinesResult" });
    },
  },
}
</script>

<style>

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

.symtoms_name a {
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
    width: 2em;
    height: 2em;
    padding: 2em;
    margin-left: 2em;
    margin-right: auto;
    border-radius: 10%;
    box-shadow: 5px 10px 18px #0000001A;
}

#medicine_name {
    font-size: 0.6em;
    color: black;
    font-weight: bold;
    margin-bottom: 0;
}

.medicines p {
    margin-top: 0;
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
</style>