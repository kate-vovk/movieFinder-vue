<template lang="">
  <div className="layout">
    <NavBar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import NavBar from './NavBar.vue';
import AppFooter from './Footer.vue';
import '@/styles/layout.scss';

export default {
  name: 'AppLayout',
  components: {
    NavBar,
    AppFooter,
  },
};
</script>
