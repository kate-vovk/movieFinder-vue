import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { CLIENT_PATHS } from '@/constants/constants';
import SignInForm from '@/views/SignInForm.vue';
import MoviesPage from '@/views/MoviesPage.vue';
import UserChat from '@/views/UserChat.vue';
import { store } from '@/store';

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
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// works like private routing;
router.beforeEach((to, from, next) => {
  // if object contains meta with value  requiresAuth === true
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      console.log('private routing, go to', to);
      return next(); // if use is logged in, go to the desired route
    }
    console.log('private routing, redirect to login page, isLoggedIn', store.getters.isLoggedIn);
    return next(CLIENT_PATHS.signin); // else if not logged in, redirect to /signin route
  }
  return next();
});
// export function routerPush(path: any, params?: RouteParams): ReturnType<typeof router.push> {
//   console.warn('params', params);
//   if (params !== undefined) return router.push({ path, params });
//   return router.push(path);
// }
