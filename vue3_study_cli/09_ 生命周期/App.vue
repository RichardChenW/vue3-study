<template>
  <my-sum v-if="isShow"></my-sum>
  <button @click="isShowHandler">展示与否</button>
</template>

<script>
import { ref } from 'vue';
import MySum from './components/MySum';

export default {
  name: 'App',
  components: {
    MySum,
  },
  setup() {
    let isShow = ref(true);

    function isShowHandler() {
      isShow.value = !isShow.value;
    }

    return {
      isShow,
      isShowHandler,
    };
  },
  //#region 
  // 通过配置项形式使用生命周期钩子
/*   beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('Unmounted');
  }, */
  //#endregion
};
</script>

<style></style>
