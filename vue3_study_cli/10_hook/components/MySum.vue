<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">求和</button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MySum',
  setup() {
    let sum = ref(0);
    return {
      sum,
    };
  },
};
</script>

<style></style>
