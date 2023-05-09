<template>
  <div :style="{ '--top': point.x + 'px', '--left': point.y + 'px' }">
    <my-sum v-if="isShow"></my-sum>
    <button @click="isShowHandler">展示与否</button>
    <div class="block"></div>
    <hr />
    <h2>当前点击鼠标的坐标为 x:{{ point.x }} y:{{ point.y }}</h2>
  </div>
</template>

<script>
import { ref} from 'vue';
import MySum from './components/MySum';
import usePoints from "./hooks/usePoint"

export default {
  name: 'App',
  components: {
    MySum,
  },
  setup() {
    let isShow = ref(true);

    function isShowHandler() {
      isShow.value = !isShow.value;
    }

    const point = usePoints();

    return {
      isShow,
      isShowHandler,
      point
    };
  },
};
</script>

<style lang="scss">
$my-width: 100px;

.block {
  width: $my-width;
  height: $my-width;
  background-color: red;
  position: absolute;
  top: var(--top);
  left: var(--left);
}
</style>
