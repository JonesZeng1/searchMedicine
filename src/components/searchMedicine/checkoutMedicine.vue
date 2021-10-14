<template>
    <div>
        <MedicineTitle titleText="Checkout"></MedicineTitle>


        <van-contact-card
        type="edit"
        name="John Snow"
        tel="13000000000"
        :editable="false"
        />

        <div class="order-detail">
            <van-card
            num="2"
            price="2.00"
            title="Title"
            desc="Description"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            />
            <van-card
            num="2"
            price="2.00"
            title="Title"
            desc="Description"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            />
            
        </div>

        <van-submit-bar :price="3050" button-text="Submit Order" currency=$ @submit="submit" />
        <button type="submit" @click="submitForm"></button>
    </div>
</template>

<script>
import MedicineTitle from "@/components/MedicineTitle";

export default {
    name: "checkoutMedicine",
    components: {
    MedicineTitle,
  },
  data() {
    return {
      currentContact: {
        name: 'John Snow',
        tel: '13000000000',
      },
    };
  },
  methods: {
      submit() {
          this.submitForm();
      },
      submitForm() {
          this.$router.push({ path: "/checkoutCompleted" });
      }
  },
}
</script>

<style scoped>

.order-detail {
    overflow: scroll;
}
</style>