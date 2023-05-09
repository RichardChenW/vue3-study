import {reactive, onMounted } from 'vue';


export default function () {
  let point = reactive({
    x: 40,
    y: 40,
  });

  onMounted(() => {
    window.addEventListener('click', event => {
      point.x = event.pageX;
      point.y = event.pageY;
      console.log(event.pageX, event.pageY);
    });
  });

  return point
  
}
