// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// // 引入router
import router from './router'

// ajax打包时设置跨域内容
// import store from './store'

// 关闭vue的生产提示
Vue.config.productionTip = false
// 引入Element
import ElementUI from 'element-ui'
// 引入Element里的css文件
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);



new Vue({
  // el: '#app' 的意思就是告诉Vue挂载id为app的域下可以解析所有关于Vue的数据。用于指明 Vue 实例的挂载目标。
  el:'#app',
  router,
  // store,
  // 渲染APP组件
  render: h => h(App)
  // $mount(’#app’) ：手动挂载到id为app的dom中的意思
  // 当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
  // 假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载
}).$mount('#app')
