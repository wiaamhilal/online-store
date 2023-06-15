<template>
  <div class="culcolater">
    <div class="rounded p-3" style="max-width:400px;background-color:#234;margin:50px auto;">
      <div class="head p-3 text-white text-end fw-bold rounded fs-5" style="background-color:#31475e;">
        {{culcolaterValue || 0 }}
      </div>
      <div class="row no-gutters position-relative">
        <div class="position-absolute wiaam-hilal">Wiaam Hilal</div>
        <div class="col-3" v-for ="n in elements" :key="n">
          <div class="py-3 mt-3 lead rounded text-center fw-bold text-white w-100 btns"  @click="action(n)" :class="{'green':['c','*','/','-','%','=','+'].includes(n)}">
            {{n}}
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
            userNmae: 'good',
            elements:["c","*","/","-",7,8,9,"+",4,5,6,"%",1,2,3,"=",0,"."],
            culcolaterValue: '',
            aperator:null
        }
    },
    methods: {
      action(n) {
        if (!isNaN(n) || n === ".") {
          this.culcolaterValue += n + "";
        }
        if (n === "c") {
          this.culcolaterValue = "";
        }
        if (n === "%") {
          this.culcolaterValue = this.culcolaterValue / 100 + "";
        }
        if (["*","+","/","-"].includes(n)) {
          this.previousCulcolaterValue = this.culcolaterValue;
          this.operator = n;
          this.culcolaterValue = "";
        }
        if (n === "=") {
          this.culcolaterValue = eval (this.previousCulcolaterValue + this.operator + this.culcolaterValue);
          previousCulcolaterValue = "";
          operator = null;          
        }

      }
    },
    name: "bootstrapOpj",
}
</script>

<style lang="scss" scoped>
.btns {
  background-color: #31475e;
}
.btns:hover {
  background-color: #3d5875;
  cursor: pointer;
}
.green {
  background-color: #3fb984;
}
.wiaam-hilal {
    right: -89px;
    bottom: 12px;
    font-weight: bold;
    font-size: 27px;  
}
</style>