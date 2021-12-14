<template>
  <header className="navigation">
    <div className="logoContainer">
      <img alt="Vue logo" className="logo" src="../assets/logo.svg" />
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/signin">Signin</router-link>
  </header>
</template>

<script lang="ts">
import '@/styles/header.scss';
// import { CLIENT_PATHS } from '@/constants/constants';
export default {
  name: 'NavBar',
};
</script>
