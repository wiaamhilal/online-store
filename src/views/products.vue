<template>
  <div class="products" :style="{ '--main-color': color}">
    <div class="d-flex align-items-center justify-content-between hold-my-nav">
      <div class="dropdown justify-content-start d-flex mt-3 ms-3 mb-3">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        products color
      </a>
      <ul class="dropdown-menu switch-colors border-0 bg-transparent" aria-labelledby="dropdownMenuLink">
        <li class="btn btn-primary rounded-pill ms-1" data-color="#0075ff" @click="updateColors">blue</li>
        <li class="btn btn-primary rounded-pill ms-1" data-color="#f44336" @click="updateColors">red</li>
        <li class="btn btn-primary rounded-pill ms-1" data-color="#22c55e" @click="updateColors">green</li>
        <li class="btn btn-primary rounded-pill ms-1" data-color="#888" @click="updateColors">grey</li>
      </ul>
    </div> 
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Violins</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Piano</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Guitar</button>
  </li>
</ul>
</div>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">  <div class="container">
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">    <div class="all-pord mt-3">
        <product />
        <product />
        <product />
        <product />
        <product />
        <product /> 
        <product /> 
        <product />                          
    </div></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">    <div class="all-pord mt-3">
        <product />
        <product />
        <product />
        <product />
        <product />
        <product /> 
        <product /> 
        <product />                          
    </div></div>
  </div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">    <div class="all-pord mt-3">
        <product />
        <product />
        <product />
        <product />
        <product />
        <product /> 
        <product /> 
        <product />                          
    </div></div>
    </div>
        <ul class="nav nav-pills mb-3 d-flex justify-content-center m-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">1</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">2</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">3</button>
  </li>
</ul>
</div>
  </div></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
   <div class="container">
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">    <div class="all-pord mt-3">
        <product-piano />
        <product-piano />
        <product-piano />
        <product-piano />
        <product-piano />
        <product-piano /> 
        <product-piano /> 
        <product-piano />                          
    </div></div>
</div>
  </div>   
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
       <div class="container">
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">    <div class="all-pord mt-3">
        <gutar />
        <gutar />
        <gutar />
        <gutar />
        <gutar />
        <gutar /> 
        <gutar />
        <gutar />                          
    </div></div>
</div>
  </div> 
  </div>
</div>
</div>  
</template>

<script>
import product from '@/components/global/product.vue';
import ProductPiano from '@/components/global/productPiano.vue';
import Gutar from '@/components/global/gutar.vue';

export default {
  components: { product, ProductPiano, Gutar },
  data: function () {
    return {
      color: "#888",
      // price: null,
      amountInput: 1,
      dolor: 350,
      dhr: null,
    };
  },
  methods: {
    updateColors: function (e) {
      this.color = e.target.getAttribute("data-color");
      localStorage.setItem("color",e.target.getAttribute("data-color"))
    },
    displayNone: function (event) {
      event.target.style.display = "none";
    }
  },
  computed: {
    // ttttjh: function () {
    //     this.amountInput * this.dolor;
    // }


    totalDolor: function () {
      return this.amountInput * this.dolor;
    },
    totalDhr: function () {
      return this.dhr = this.totalDolor * 3.67
    }
  },
  created: function () {
       this.dhr = this.dolor * 3.67;
       this.color = localStorage.getItem("color");     
  },
  name: "products",
};
</script>

<style lang="scss">
.switch-colors {
  li {
    border: none;
    display: inline;
  }
  li:nth-child(1) {
    background-color: #0075ff;
  }
  li:nth-child(2) {
    background-color: #f44336;
  }
  li:nth-child(3) {
    background-color: #22c55e;
  }
  li:nth-child(4) {
    background-color: #888;
  }
  animation: color 0.5s linear ;
}
@keyframes color {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.all-pord {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 20px;
}
@media (max-width:767px) {
  .hold-my-nav {
    flex-wrap: wrap;
}
}
// .card {
//   color: #888 !important;
// }
// .card-title {
//   background-color: var(--main-color);
// }
</style>