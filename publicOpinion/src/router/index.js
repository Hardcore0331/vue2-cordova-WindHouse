import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/main';
import Home from '@/components/home';
import Message from '@/components/message';
import Discover from '@/components/discover';
import Mine from '@/components/mine';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/message',
          name: 'message',
          component: Message,
        },
        {
          path: '/discover',
          name: 'discover',
          component: Discover,
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine,
        },
      ],
    },
  ],
});
