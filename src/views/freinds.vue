<template>
    <div class="our-help container">
    <div class="valid-form">
      <form action="" class="first-line mt-3">
        <input type="text" class="feeld border-0 p-2 " v-model="taskText" placeholder="please add your name" />
        <button class="add-task btn btn-primary" @click.prevent="addTask" :disabled="!taskText">
          submit
        </button>
        <button
          class="delete-all btn btn-danger"
          @click.prevent="deleteAll"
          v-if="tasks.length > 1"
        >
          delete all
        </button>
      </form>
      <div class="row">
        <div class="group-tasks mt-5 col-sm-6 col-md-4 col-lg-3" v-for="(task,index) in tasks" :key="task">
          <div class="card text-start">
            <img src="https://us.123rf.com/450wm/jemastock/jemastock1912/jemastock191220509/135452255-young-man-anime-style-character-vector-illustration-design.jpg?ver=6" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">        <div
            class="taskdiv"
            @click="task.done = !task.done"
            :style="{ 'text-decoration': task.done ? 'line-through' : '' }"
          >
            {{ task }}
          </div></h5>
              <p class="card-text">wellcome m.r {{task}} to our page we are so thankfull to contect with us if you need any help</p>
          <button class="delete btn btn-danger" @click.prevent="deleteTask(index)">
            delete
          </button>
            </div>
          </div>                   
        </div>
      </div>
    </div>

      </div>                  
</template>

<script>

export default {
      data: function () {
    return {
      tasks: [],
      taskText: "",
    };
  },
  methods: {
    addTask: function () {
      this.tasks.push(this.taskText);
      this.taskText = "";
      // window.localStorage.setItem('taskPage',JSON.stringify(this.tasks));             
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
      // localStorage.setItem('taskPage',JSON.stringify(this.tasks));
    },
    deleteAll: function () {
      this.tasks = [];
      // localStorage.setItem('taskPage','');
    },
  },
  // updated: function () {
  //   localStorage.setItem('taskPage',JSON.stringify(this.tasks));
  // },
  // created: function () {
  //     this.tasks = JSON.parse(localStorage.getItem("taskPage"));
  // },

    name: "help",
}
</script>

<style lang="scss" scoped>
@keyframes trans {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.card {
  animation: trans 0.5s linear;
}

</style>