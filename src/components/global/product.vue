<template>
      <div class="card">
        <img v-if="selected" :src="selected" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title rounded-pill text-light">for sale</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><input class="w-100 form-range" type="range" step="1" min="1" max="10" v-model="amountInput"></li>
          <li class="list-group-item text-secondary">dolor: {{totalDolor}}</li>
          <li class="list-group-item text-secondary">dhr: {{totalDhr}}</li>
        </ul>
        <div class="card-body d-flex justify-content-between align-items-center">
          <a>amount: {{amountInput}}</a>
          <a class="btn btn-primary rounded-pill add-btn" @click="displayNone">add your item</a>
        </div>
      </div>
</template>

<script>
var photos = [
    'https://cdn.shopify.com/s/files/1/0371/2591/4668/products/SteinerViolin-V30MB4_34f0e465-d649-4cd8-bafc-aa565baf42d4_1800x1800.jpg?v=1664690975',
    'https://cdn.shopify.com/s/files/1/0371/2591/4668/products/2_9c95a131-979a-411c-89a8-257e3db90044_540x.jpg?v=1630404683',
    'https://cdn.shopify.com/s/files/1/0371/2591/4668/products/1_6be85fc7-5ea1-4082-bd5e-063e1257db54_540x.jpg?v=1630404424',
    'https://cdn.shopify.com/s/files/1/0371/2591/4668/products/SteinerViolin_dfa75303-83ae-4d08-b0f5-0f33837960ba_1800x1800.jpg?v=1619003906',
    'https://cdn.shopify.com/s/files/1/0371/2591/4668/products/SteinerViolinV-30-MB4.4_7865498f-a34e-4277-9a5d-85a3c812b2d0_1800x1800.jpg?v=1664690975',
    'https://m.media-amazon.com/images/I/615d4bw+OgS._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/61-hCHxZt6L.__AC_SX300_SY300_QL70_ML2_.jpg',
    'https://m.media-amazon.com/images/I/61FlL45YD8L._AC_SX679_.jpg'
]
export default {
  data: function () {
    return {
      color: "#888",
      amountInput: 1,
      dolor: 400,
      dhr: null,
      photos:photos,
      selected: null
    };
  },
  methods: {
    updateColors: function (e) {
      this.color = e.target.getAttribute("data-color");
    },
    displayNone: function (event) {
      event.target.style.display = "none";
    },
    changePhoto: function (imgs) {
    return imgs[Math.floor(Math.random() * photos.length)];
    },
  },

  computed: {
    totalDolor: function () {
      return this.amountInput * this.dolor;
    },
    totalDhr: function () {
      return this.dhr = this.totalDolor * 3.67
    }
  },
  created() {
    this.selected = this.changePhoto(this.photos);
  },
  name: "product",
};
</script>

<style lang="scss" scoped>
.all-pord {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 20px;
}
.card {
  color: #888 !important;
}
.card-title {
  background-color: var(--main-color);
}

</style>