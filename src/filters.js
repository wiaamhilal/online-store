import Vue from 'vue'

//make upercase
Vue.filter('upercase',function(v){
    return v.toUpperCase();
  });
  
  //make reverse
  Vue.filter('reversing',function(v){
    return v.split("").reverse().join("");
  });

//short text 
Vue.filter('short',function(value,textLenth,sufix){
  return value.substring(0,textLenth) + sufix;
});