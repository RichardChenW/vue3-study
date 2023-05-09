// 引入的不再是 vue 构造函数，引入的是一个名为 creatapp 的工厂函数
import { createApp } from 'vue'

// 创建应用实例对象-App (类似于之前 vue2 中的 vm,但比 vm 要轻)
import App from './App.vue'

// 挂载到 dom 上
createApp(App).mount('#app')


/* //? 测试
let app = createApp(App)
app.mount("#app") */
