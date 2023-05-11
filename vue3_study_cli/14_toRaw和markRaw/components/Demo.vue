<template>
  <h4></h4>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">求和</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>工资:{{ job.j1.salary }}</h2>
  <h2 v-if="person.car">车：{{ person.car }}</h2>
  <button @click="name += '~'">改名</button>
  <button @click="age++">长一岁</button>
  <button @click="job.j1.salary += 100">加薪</button>
  <button @click="showRawData">展示raw</button>
  <button @click="addCar">增加一辆车</button>
</template>

<script>
import { ref, reactive, toRaw, toRefs, markRaw } from 'vue';

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 1000,
        },
      },
    });

    function showRawData() {
      console.log('@person', person);
      console.log('@toRawPerson', toRaw(person));
      console.log('@响应式', JSON.stringify(person));
    }

    function addCar() {
      let car = {
        style: '宝马',
        new: true,
      };
      person.car = markRaw(car);
    }

    return {
      person,
      sum,
      showRawData,
      ...toRefs(person),
      addCar,
    };
  },
};
</script>

<style></style>
