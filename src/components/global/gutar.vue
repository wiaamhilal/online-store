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
    'https://m.media-amazon.com/images/I/61hcfmhylPL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/71nUyBXopLL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/711I36WdliL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/7108nMyOSLL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/71e2tS8uH5L._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/813h168sAEL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/6170biM2laL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/61ou7Q39m7L.__AC_SX300_SY300_QL70_ML2_.jpg'
]
export default {
  data: function () {
    return {
      color: "#888",
      amountInput: 1,
      dolor: 600,
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