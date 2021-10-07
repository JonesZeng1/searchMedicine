<template>
  <keep-alive>
      <div>
          <MedicineTitle  titleText="Find pills"></MedicineTitle>

            <section class="symptoms_and_common_medicine">
                <article>
                    <a href="">
                        <div class="symptoms">
                            <div class="symptoms_description">
                                <h3>By symptoms</h3>
                                <p>..., etc.</p>
                            </div>
                            <div class="go_arrow">
                                <router-link to="/searchMedicineDetail"><i class="fas fa-arrow-right"></i></router-link>
                            </div>
                        </div>
                        </a>

                    <a href="">
                    <div class="medicine">
                        <div class="medicines">
                            <h3>Commonly used medicine</h3>
                            <p>cold, fever, etc.</p>
                        </div>
                        <div class="go_arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    </a>
                </article>
            </section>
      </div>
  </keep-alive>
</template>

<script>
import MedicineTitle from "@/components/MedicineTitle";

export default {
    name: "SearchMedicine",
    components: {
        MedicineTitle,
    },
    methods: {
        bySymptoms() {
            this.$router.push({ path: "searchMedicineDetail" });
        }
    }
}
</script>

<style scoped>
body {
    margin: 0;
    background-color: #F5F5F5;
}

.symptoms_and_common_medicine {
    background-color: #FFFFFF;
    height: 100vh;
    border-radius: 5% 5% 0% 0%;
}

article {
    padding: 2em;
    text-decoration: none;
}

article a {
    text-decoration: none;
    color: black;
}

article h3 {
    color: #404040;
}

article p {
    color: #898A8F;
}

.medicine, .symptoms {
    display: flex;
}

.medicines, .symptoms_description {
    width: 90%;
}

.go_arrow {
    width: 10%;
    padding-top: 3em;
    text-align: center;
    color: #333333;
}
</style>