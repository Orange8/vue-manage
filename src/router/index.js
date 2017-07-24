import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = resolve => require(['@/pages/index'], resolve);
const Login = resolve => require(['@/pages/login/login'], resolve);

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
