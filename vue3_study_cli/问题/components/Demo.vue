<template>
  <input type="text" v-model="myValue" />
  <h3>{{ showValue }}</h3>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Demo',
  setup() {
    let myValue = ref(0);
    let showValue = ref("");

    watch(myValue, (newValue, oldValue) => {
      showValue = oldValue + newValue;
      console.log(showValue);
    });

    return {
      myValue,
      showValue,
    };
  },
};
</script>

<style></style>
