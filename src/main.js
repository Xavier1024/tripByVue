// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
// 解决移动端1px像素边框问题
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
