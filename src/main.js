import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.interceptors.response.use(function (response) {
  // 后端返回的数据，会被axios包装成下面的样子
  // response = {data: { status: xx, data: [], msg: xx }, ... }
  let res = response.data
  // 0 代表成功
  if (res.status == 0) {
    return res.data  // 这个才是前端需要的data数据
  } else if (res.status == 10) {
    // 登录验证
    window.location.href = '/#/login'
  } else {
    alert(res.msg);
  }
}, function () {})


Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
