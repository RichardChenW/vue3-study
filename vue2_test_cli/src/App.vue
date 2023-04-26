<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="getInfo">获取fast-api信息</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from "axios"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    async getInfo(){
      let res = await axios.get("http://127.0.0.1:8000/personInfo")
  }}
}
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
