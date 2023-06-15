<template>
  <div class="home  d-flex align-items-center justify-content-center">
    <div class="landing text-center">
      <h1 class="text-black-50">wellcome to wiaam page</h1>
      <p class="text-black-50">get started with us by inform your data</p>
      <a class="btn btn-primary rounded-pill" href="http://localhost:8080/help">get started</a>
    </div>

  </div>
</template>

<script>
export default {
  data: function () {
    return{

    }
  },
  methods: {

  },
  name: 'HomeView',
  components: {

  }
}
</script>

<style lang="scss">
.home {
  background-image: url("../assets/pexels-karolina-grabowska-6958760.jpg");
  background-size: cover;
  height: calc(100vh - 56px);
}
</style>