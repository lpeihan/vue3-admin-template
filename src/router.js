import NProgress from 'nprogress';
import { createRouter, createWebHistory } from 'vue-router';

import { isLogin } from '@/utils/auth';

import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      index: 0,
      auth: false,
    },
    component: () =>
      import(/* webpackChunkName: "layout" */ './layouts/BasicLayout.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, pos) {
    return pos || { x: 0, y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  if (isLogin()) {
    // todo
  } else {
    if (to.meta.auth) {
      next('/user/login');
      return;
    }
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
