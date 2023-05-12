<template>
  <teleport to="body">
    <div class="mask" v-if="isShow">
      <div class="dialog">
        <button @click="handleShow">取消弹窗</button>
      </div>
    </div>
    <button @click="handleShow">显示弹窗</button>
    <button @v-click-outside="eventHandler">点击外部</button>
  </teleport>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyWindow',
  setup() {
    let isShow = ref(false);
    function handleShow() {
      isShow.value = !isShow.value;
    }
    function eventHandler(e){
      console.log(e);
    }
    return {
      isShow,
      handleShow,
      eventHandler
    };
  },
};
</script>

<style lang="scss">
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    // 只有左边有圆角
    border-radius: 0px 0px 100px 0px;
    background-color: skyblue;
    position: absolute;
  }
}
</style>
