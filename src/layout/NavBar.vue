<template>
  <header className="navigation">
    <div className="logoContainer">
      <img alt="Vue logo" className="logo" src="../assets/logo.svg" />
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/signin">Signin</router-link>
    <button @click="logout">Logout</button>
  </header>
</template>

<script lang="ts">
import '@/styles/header.scss';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import { CLIENT_PATHS } from '@/constants/constants';

// import { CLIENT_PATHS } from '@/constants/constants';
export default defineComponent({
  name: 'NavBar',
  methods: {
    ...mapActions(['LOG_OUT']),
    async logout() {
      await this.LOG_OUT(); // instead of dispatch('LOG_IN')
      this.$router.push(CLIENT_PATHS.signin);
    },
  },
});
</script>
