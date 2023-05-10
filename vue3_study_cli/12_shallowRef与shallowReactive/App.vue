<template>
  <demo v-if="isShow"></demo>
  <button @click="isShowHandler">展示与否</button>
</template>

<script>
import { ref } from 'vue';
import Demo from './components/Demo.vue';

export default {
  name: 'App',
  components: {
    Demo,
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
};
</script>

<style lang="scss">

</style>
