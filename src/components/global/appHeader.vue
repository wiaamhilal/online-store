<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light" :style="{ '--main-color': color }">
  <div class="container">
    <a class="navbar-brand" href="/">WEAAM</a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="main">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <router-link to="/" tag="li" exact class="nav-item">
            <a class="nav-link" aria-current="page">home</a>
            </router-link>
            <router-link to="/portfolio" tag="li" class="nav-item">
            <a class="nav-link">Portfolio</a>
            </router-link>
            <router-link to="/freinds" tag="li" class="nav-item">
            <a class="nav-link">Friends</a>
            </router-link>
            <router-link to="/products" tag="li" class="nav-item">
            <a class="nav-link">Products</a>
            </router-link>
            <router-link to="/culcolater" tag="li" class="nav-item">
            <a class="nav-link">culcolater</a>
            </router-link>
      </ul>
    </div>
  </div>
</nav>        
</template>

<script>
export default {
    name: "appHeader",  
}
</script>

<style lang="scss" scoped>
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  border-radius: 10px;
  color: white;
  background-color: #0075ff;
}
// @keyframes show {
//   from {
//     opacity: 0;
//   }
//   to{
//     opacity: 1;
//   }
// }
// router-link {
//   animation: show linear 0.5s;
// }
</style>