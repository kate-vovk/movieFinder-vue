<template lang="">
  <div>
    <button @click="login" type="submit">Sign in</button>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { defineComponent, watchEffect } from 'vue';

// import { reactive } from 'vue';
// import { getLoginData } from '@/businessLogic/login';
import { CLIENT_PATHS } from '@/constants/constants';
import { useStore } from '@/store';
// import { ILoginData } from '@/interfaces/authInterfaces';
// import { routerPush } from '@/router/index';
// import { useStore } from '@/store';

export default defineComponent({
  name: 'SignInForm',
  data() {
    return {
      // email: 'test@gmail.com',
      // password: 'Qwerty12345!',
      form: {
        email: 'test@gmail.com',
        password: 'Qwerty12345!',
      },
    };
  },
  methods: {
    ...mapActions(['LOG_IN']),
    async login() {
      const store = useStore();
      // const store = useStore();
      const User = new FormData();
      User.append('email', this.form.email);
      User.append('password', this.form.password);
      // await this.$store.dispatch('LogIn', { email: this.email, password: this.password });
      // routerPush(CLIENT_PATHS.movies);
      try {
        await this.LOG_IN({ email: this.form.email, password: this.form.password });
        this.$router.push(CLIENT_PATHS.movies);
        console.warn('store', store.state.auth);
        // this.showError = false
      } catch (error) {
        // this.showError = true
        console.warn('Error');
      }
    },
  },
  created() {
    const store = useStore();
    console.log('created');
    watchEffect(() => {
      console.warn(store.state.auth);
    });
  },
  // setup() {
  //   const form = reactive<ILoginData>({
  //     email: 'test@gmail.com',
  //     password: 'Qwerty12345!',
  //   });

  //   const login = () => {
  //     getLoginData(form).then(() => {
  //       routerPush(CLIENT_PATHS.movies);
  //     });
  //   };
  //   return {
  //     form,
  //     login,
  //   };
  // },
});
</script>
