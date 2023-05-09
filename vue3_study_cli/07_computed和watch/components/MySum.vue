<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">求和</button>
  <div @click="msg += '!'">{{ msg }}</div>
  <h1 @click="person.name += '!'">姓名：{{ person.name }}</h1>
  <h1 @click="person.age++">年龄: {{ person.age }}</h1>
  <h1 @click="person.job.salary++">薪水{{ person.job.salary }}</h1>
</template>

<script>
import { ref, reactive, watch } from 'vue';

export default {
  name: 'MySum',
  setup() {
    let sum = ref(0);
    let msg = ref('hello world');
    let person = reactive({
      name: 'richard',
      age: 18,
      job: {
        salary: 100,
      },
    });
    // 监视
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log('newValue', newValue);
        console.log('oldValue', oldValue);
      },
      { deep: true }
    );

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style></style>
