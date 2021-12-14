<template lang="">
  <form className="loginForm" @submit.prevent="login">
    <div className="loginForm_inputs_container" aria-required="true">
      <input
        v-model="form.email"
        className="inpText_Login"
        type="email"
        required
        placeholder="Email"
      />
      <input
        v-model="form.password"
        className="inpText_Login"
        type="password"
        required
        placeholder="Password"
      />
    </div>
    <button className="loginButton" @click="login" type="submit">Sign in</button>
  </form>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { defineComponent, watchEffect } from 'vue';

import { CLIENT_PATHS } from '@/constants/constants';
import { useStore } from '@/store';
import '@/styles/loginForm.scss';

export default defineComponent({
  name: 'SignInForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['LOG_IN']),
    async login() {
      const store = useStore();
      try {
        await this.LOG_IN({ email: this.form.email, password: this.form.password });
        this.$router.push(CLIENT_PATHS.movies);
        console.warn('store', store.state.auth);
        console.warn('isLoggedIn', this.isLoggedIn);
      } catch (error) {
        console.warn('Error', error);
      }
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
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
