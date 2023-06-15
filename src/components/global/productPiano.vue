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
    'https://m.media-amazon.com/images/I/61nia2F6uiL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/51Z3d1YH2rL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/51JLjfu8ysL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/619kxt0r75L._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/5168Au2sJPL._AC_.jpg',
    'https://m.media-amazon.com/images/I/51Yi9MdS2hS._AC_SX522_.jpg',
    'https://m.media-amazon.com/images/I/61ZiL29EV6L._AC_SX522_.jpg',
    'https://m.media-amazon.com/images/I/61HkEjzgqfL._AC_SX522_.jpg'
]
export default {
  data: function () {
    return {
      color: "#888",
      amountInput: 1,
      dolor: 2000,
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
  name: "productPiano",
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