<template>
  <div class="goBack-icon">
    <i class="fas fa-arrow-left fa-2x" @click="goBack"></i>
  </div>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.goBack-icon {
  display: flex;
  justify-content: flex-start;
  padding: 20px 1rem 0 1rem;
}
</style>
