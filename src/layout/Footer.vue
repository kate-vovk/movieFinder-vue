<template lang="">
  <footer className="navigation">
    <router-link to="/">Home</router-link>
    <div className="logoContainer">
      <img alt="Vue logo" className="logo" src="../assets/logo.svg" />
    </div>
    <router-link to="/userChat">User Chat</router-link>
  </footer>
</template>

<script lang="ts">
import '@/styles/footer.scss';

export default {
  name: 'AppFooter',
};
</script>
