<template>
  <my-name></my-name>
  <hr/>
  <my-sum></my-sum>
</template>

<script>
import MyName from "./components/MyName.vue";
import MySum from "./components/MySum.vue";

export default {
  name: 'App',
  components:{
    MyName,
    MySum
  },
  setup(){

  }
}
</script>

<style>
</style>
