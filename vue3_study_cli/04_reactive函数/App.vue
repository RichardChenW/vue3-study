<template>

  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>工作{{ job.type }},薪水{{ job.salary }}</h1>
  <h1>爱好：</h1>
  <ul>
    <li v-for="(hobby,index) in hobbies" :key="index">{{ hobby }}</li>
  </ul>
  <button @click="sayHello">按钮</button>
  <button @click="changeInfo">改数据</button>

</template>

<script>
import {ref,reactive} from "vue";


export default {
  name: 'App',
  // 此处只是测试 setup,不使用响应式
  setup() {

    let name = ref("richard");
    let age = ref(18);
    let job = reactive({
      type:"前端工程师",
      salary:"10k",
    });
    let hobbies = reactive(["喝酒","抽烟","烫头"])
    
    function changeInfo(){
      name.value = "James";
      age.value = 100;
      // job.value.type = "financial analyst";
      console.log(job);
      job.type = "financial analyst";
      hobbies.push("美女");
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
      hobbies,
    }
  }
}
</script>

<style>
</style>
