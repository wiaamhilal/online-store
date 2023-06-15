<template>
  <div class="portfolio container">
    <ul class="m-3">
      <li
        class="btn btn-primary me-1"
        @click="activeTap = '1'"
        :class="[activeTap === '1' ? 'activeTap' : '']"
      >
        1
      </li>
      <li
        class="btn btn-primary me-1"
        @click="activeTap = '2'"
        :class="[activeTap === '2' ? 'activeTap' : '']"
      >
        2
      </li>
      <li
        class="btn btn-primary me-1"
        @click="activeTap = '3'"
        :class="[activeTap === '3' ? 'activeTap' : '']"
      >
        3
      </li>
      <li
        class="btn btn-primary me-1"
        @click="activeTap = '4'"
        :class="[activeTap === '4' ? 'activeTap' : '']"
      >
        4
      </li>
    </ul>
    <div class="row first" v-if="activeTap === '1'">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="row second" v-if="activeTap === '2'">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/112989/pexels-photo-112989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/112989/pexels-photo-112989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/112989/pexels-photo-112989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/112989/pexels-photo-112989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/112989/pexels-photo-112989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/112989/pexels-photo-112989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/112989/pexels-photo-112989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/112989/pexels-photo-112989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="row third" v-if="activeTap === '3'">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="row forth" v-if="activeTap === '4'">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box mb-3 bg-white">
          <img
            class="img-fluid"
            src="https://images.pexels.com/photos/697672/pexels-photo-697672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      activeTap: "1",
    };
  },
  updated: function () {
    localStorage.setItem('activeTap',JSON.stringify(this.activeTap));
  },
  created: function () {
    this.activeTap = JSON.parse(localStorage.getItem('activeTap'));
  },
  // watch: {
  //   tapMenu: function () {
  //     localStorage.setItem("actTap", this.activeTap);
  //   },
  // },
  // watch: {
  //   tapItem: function (newName) {
  //     localStorage.setItem
  //   }
  // },
  // created: function () {
  //   this.activeTap = localStorage.getItem("actTap");
  // },
  name: "portfolio",
};
// console.log(localStorage.getItem("activeTap"));
</script>

<style lang="scss" scoped>
ul li {
  background-color: #888;
  border: none;
}
.row img {
  border-radius: 6px;
}
.activeTap {
  background-color: #0075ff;
  border: none;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.box {
  animation: show linear 0.5s;
}
</style> 