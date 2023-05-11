<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue';

export default {
  name: 'Demo',
  setup() {
    //自定义ref,名为 myref
    function myref(value) {
      let timer
      return customRef((track, trigger) => {
        return {
          get: function () {
            track(); // 通知 vue 追踪 value 的变化
            return value;
          },
          set: function (newValue) {
            console.log(`有人更改了数据,${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue;
              trigger(); // 通知 Vue 去重新解析模板，调用get
            },1000)
          },
        };
      });
    }

    let keyWord = myref('hello');

    return {
      keyWord,
    };
  },
};
</script>

<style></style>
