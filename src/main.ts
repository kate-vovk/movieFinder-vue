import { createApp } from 'vue';
import { Store } from 'vuex';
// import VueRouter, { Route } from 'vue-router';
import App from './App.vue';
import { router } from '@/router';
import { store } from './store';
import { IAuth } from './interfaces/authInterfaces';

// declare module 'vue/types/vue' {
//   interface Vue {
//     $router: VueRouter;
//     $route: Route;
//   }
// }
// declare module '@vue/runtime-core' {
// declare your own store states
//   interface State {
//     count: number;
//   }

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<{ auth: IAuth }>;
  }
}

const app = createApp(App);
app.config.globalProperties.$store = store;
// app.provide('$store', store);
app.use(store);
app.use(router);
app.mount('#app');
// createApp(App).provide('$store', store).use(store).use(router).mount('#app');
