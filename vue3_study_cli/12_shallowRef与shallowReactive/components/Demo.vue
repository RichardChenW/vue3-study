<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工资:{{ job.j1.salary }}</h2>
  <button @click="name += '~'">改名</button>
  <button @click="age++">长一岁</button>
  <button @click="job.j1.salary += 100">加薪</button>
</template>

<script>
import { reactive, toRefs,shallowReactive} from 'vue';

export default {
  name: 'Demo',
  setup() {
    let person = shallowReactive({
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
      ...toRefs(person)
    };
  },
};
</script>

<style>

</style>
