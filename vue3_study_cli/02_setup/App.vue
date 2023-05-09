<template>
  <div>{{ name }},{{ age }}</div>
  <button @click="sayHello">按钮</button>
</template>

<script>
import { h } from 'vue';

export default {
  name: 'App',
  // 此处只是测试 setup,不使用响应式
  setup() {
    // let name = "richard";
    // let age = 18;

    // function sayHello(){
    //   console.log(`我叫${name},今年${age}岁！`);
    // }

    // return {
    //   name,
    //   age,
    //   sayHello,
    // }

    return () => h('h1', 'richard');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
