<template>
  <h4></h4>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">求和</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工资:{{ job.j1.salary }}</h2>
  <button @click="name += '~'">改名</button>
  <button @click="age++">长一岁</button>
  <button @click="job.j1.salary += 100">加薪</button>
</template>

<script>
import { ref, toRefs, reactive, shallowReadonly } from 'vue';

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0);
    let person = shallowReadonly({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 1000,
        },
      },
    });

    return {
      person,
      sum,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
