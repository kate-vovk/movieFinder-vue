<template lang="">
  <form className="loginForm" @submit.prevent="login">
    <div className="loginForm_inputs_container" aria-required="true">
      <input
        @change="handleEmailChange"
        @blur="handleEmailChange"
        :value="email"
        name="email"
        className="inpText_Login"
        type="email"
        placeholder="Email"
      />
      <input
        name="password"
        @change="handlePasswordChange"
        @blur="handlePasswordChange"
        :value="password"
        className="inpText_Login"
        type="password"
        placeholder="Password"
      />
      <div className="errorMessage">{{ emailError }} {{ passwordError }} {{ error }}</div>
    </div>
    <button className="loginButton" @click="login" type="submit">Sign in</button>
  </form>
</template>

<script lang="ts">
import { computed } from 'vue';

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { useField } from 'vee-validate';
import { CLIENT_PATHS } from '@/user/constants/constants';

import '@/user/styles/components/loginForm.scss';

export default {
  name: 'SignInForm',
  setup() {
    const store = useStore();
    const router = useRouter();
    const error = computed(() => store.getters.errorMessage);

    const {
      value: email,
      errorMessage: emailError,
      handleChange: handleEmailChange,
    } = useField('email', (value: any) => {
      const requiredMessage = 'Email is required';

      if (value === undefined || value === null) return requiredMessage;
      if (!String(value).length) return requiredMessage;
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(String(value).toLowerCase())) {
        return 'Please enter a valid email address';
      }
      return true;
    });

    const {
      value: password,
      errorMessage: passwordError,
      handleChange: handlePasswordChange,
    } = useField('password', (value: any) => {
      const requiredMessage = 'Password is required';
      if (value === undefined || value === null) return requiredMessage;
      if (!String(value).length) return requiredMessage;

      return true;
    });

    const login = async () => {
      if (password.value && email.value && !emailError.value && !passwordError.value) {
        await store.dispatch('LOG_IN', { email: email.value, password: password.value }); // instead of dispatch('LOG_IN')
        router.push(CLIENT_PATHS.movies);
      }
    };

    return {
      login,
      email,
      emailError,
      handleEmailChange,
      password,
      passwordError,
      handlePasswordChange,
      error,
    };
  },
};
</script>
