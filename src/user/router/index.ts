import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { CLIENT_PATHS } from '@/user/constants/constants';
import SignInForm from '@/user/views/SignInForm.vue';
import MoviesPage from '@/user/views/MoviesPage.vue';
import UserChat from '@/user/views/UserChat.vue';
import NotFound from '@/user/views/NotFound.vue';

import { store } from '@/store';
import { ErrorActionTypes } from '@/store/modules/error/action-types';

const routes: Array<RouteRecordRaw> = [
  {
    path: CLIENT_PATHS.main,
    redirect: CLIENT_PATHS.movies,
  },
  {
    path: CLIENT_PATHS.movies,
    name: 'Movies',
    component: MoviesPage,
    meta: { requiresAuth: true },
  },
  {
    path: CLIENT_PATHS.userChat,
    name: 'UserChat',
    component: UserChat,
    meta: { requiresAuth: true },
  },
  {
    path: CLIENT_PATHS.signin,
    name: 'SignIn',
    component: SignInForm,
  },
  {
    path: CLIENT_PATHS.notFound,
    component: NotFound,
  },
  {
    path: '/:catchNotfound(.*)',
    name: 'NotFound',
    redirect: CLIENT_PATHS.notFound,
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// works like private routing;
router.beforeEach((to, from, next) => {
  store.dispatch(ErrorActionTypes.HIDE_ERROR);

  // if object contains meta with value  requiresAuth === true
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      return next(); // if use is logged in, go to the desired route
    }
    return next(CLIENT_PATHS.signin); // else if not logged in, redirect to /signin route
  }
  return next();
});
