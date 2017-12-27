import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Home from '@/components/Home';
import Message from '@/components/Message';
import Discover from '@/components/Discover';
import Mine from '@/components/Mine';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/home',
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
