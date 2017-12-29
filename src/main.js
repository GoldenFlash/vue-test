// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',//以App标签替代el所挂载的元素，相当于直接在页面上使用<App></App>
  components: { 'App':App } //App标签中引用的App组件
  // render: h => h(App)//替代上面两行
})
