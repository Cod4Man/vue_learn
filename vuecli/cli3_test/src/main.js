import Vue from 'vue'
import App from './App.vue'
import router from './router' // 要导入文件夹的index.js，可以省略，默认会找index.js
import store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
