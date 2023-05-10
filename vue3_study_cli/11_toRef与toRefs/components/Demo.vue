<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工资:{{ job.j1.salary }}</h2>
  <button @click="name += '~'">改名</button>
  <button @click="age++">长一岁</button>
  <button @click="job.j1.salary += 100">加薪</button>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 1000,
        },
      },
    });

    // let name1 = person.name; // 不是响应式
    // let name2 = toRef(person, 'name'); // 是响应式

    return {
      person,
      ...toRefs(person)
    };
  },
};
</script>

<style></style>
