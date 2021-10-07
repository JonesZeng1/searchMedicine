<template>
  <div class="title-container">
    <div class="goBack-icon">
      <i class="fas fa-arrow-left fa-2x" @click="goBack"></i>
    </div>
    <h2>{{ titleText }}</h2>
    <div class="empty"></div>
  </div>
</template>

<script>
export default {
  props: {
    titleText: [String],
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.title-container {
  padding: 0 10px;
  background-color: #396cf0;
  height: 130px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.title-container div {
  width: 50px;
}
.goBack-icon {
  color: white;
  display: flex;
  justify-content: flex-start;
}
h2 {
  color: white;
  display: flex;
  justify-content: flex-start;
}
</style>
