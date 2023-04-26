<template>
  <h1>姓名: {{person.name}}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <color-block msg="你好啊" name="richard" @hello="showHello">
    <h1></h1>
  </color-block>
</template>

<script>
import {ref,reactive} from "vue";
import ColorBlock from './components/ColorBlock.vue';


export default {
  name: 'App',
  components:{
    ColorBlock
  },
  setup(){
    let person = reactive({
      name:"richard",
      age:18
    });

    function showHello(value){
      alert(`hello${value}`)
    }

    return {
      person,
      showHello
    }
  }
}
</script>

<style>
</style>
