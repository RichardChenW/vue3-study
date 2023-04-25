<template>
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>工作{{ job.type }},薪水{{ job.salary }}</h1>
  <button @click="sayHello">按钮</button>
  <button @click="changeInfo">改数据</button>
</template>

<script>
import {ref} from "vue";


export default {
  name: 'App',
  // 此处只是测试 setup,不使用响应式
  setup() {

    let name = ref("richard");
    let age = ref(18);
    let job = ref({
      type:"前端工程师",
      salary:"10k",
    })
    
    function changeInfo(){
      name.value = "James";
      age.value = 100;
      job.value.type = "financial analyst";
      console.log(job);
      console.log("数据改好了~");
    }

    function sayHello(){
      console.log(`我叫${name.value},今年${age.value}岁！`);
    }
    
    return {
      name,
      age,
      job,
      sayHello,
      changeInfo,
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
