import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import Login from '@/components/login/login';

Vue.use(Router);

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
