import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { ImagePreview } from 'vant';
import './style/reset.less'
//引入动画样式
import '../node_modules/animate.css/animate.css'
Vue.config.productionTip = false
Vue.prototype.site = '/api/';
Vue.use(ImagePreview);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
