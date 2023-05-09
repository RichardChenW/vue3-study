<template>
  <h1>一个人的信息</h1>
  <label for="firstName">姓：</label>
  <input
    type="text"
    placeholder="请输入姓："
    id="firstName"
    v-model="name.firstName"
  />
  <br />
  <label for="lastName">名：</label>
  <input
    type="text"
    placeholder="请输入名："
    id="lastName"
    v-model="name.lastName"
  />
  <br />
  <span>全名:{{ fullName }}</span>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'MyName',
  setup() {
    let name = reactive({
      firstName: '',
      lastName: '',
    });

    // 计算属性 (简写)
    let fullName = computed(() => {
      return name.firstName + '-' + name.lastName;
    });

    return {
      name,
      fullName,
    };
  },
};
</script>

<style lang="scss"></style>
