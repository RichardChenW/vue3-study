<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">求和</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue';

export default {
  name: 'MySum',
  setup() {
    let sum = ref(0);
    let lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 监视
    watch(
      sum,
      (newValue, oldValue) => {
        console.log('newValue', newValue);
        console.log('oldValue', oldValue);
      },
      { immediate: true }
    );

    watchEffect(() => {
      let x = sum.value;
      console.log('watchEffect', x);
    });
    return {
      sum,
    };
  },
};
</script>

<style></style>
