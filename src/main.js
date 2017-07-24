// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';//ui框架
import 'element-ui/lib/theme-default/index.css';//ui框架样式
import '../static/css/reset.css';//页面初始化样式
import App from './App';

import './common/scss/index.scss';//页面样式

Vue.prototype.axios = axios; //全局注册axios
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
