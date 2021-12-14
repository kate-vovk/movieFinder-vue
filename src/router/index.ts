import { createRouter, createWebHistory, RouteRecordRaw, RouteParams } from 'vue-router';
import { CLIENT_PATHS } from '@/constants/constants';
import SignInForm from '@/views/SignInForm.vue';
import MoviesPage from '@/views/MoviesPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: CLIENT_PATHS.main,
    redirect: CLIENT_PATHS.movies,
  },
  {
    path: CLIENT_PATHS.movies,
    name: 'Movies',
    component: MoviesPage,
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

export function routerPush(path: any, params?: RouteParams): ReturnType<typeof router.push> {
  console.warn('params', params);
  if (params !== undefined) return router.push({ path, params });
  return router.push(path);
}
