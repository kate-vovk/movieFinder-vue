import { createApp } from 'vue';
import { Store } from 'vuex';
import App from './App.vue';
import { router } from '@/user/router';
import { store } from './store';
import { IAuth } from './interfaces/authInterfaces';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<{ auth: IAuth }>;
  }
}

const app = createApp(App);
app.config.globalProperties.$store = store;
app.use(store);
app.use(router);
app.mount('#app');
