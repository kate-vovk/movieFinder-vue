<template lang="">
  <div className="layout">
    <NavBar />
    <div style="background-color: blue; overflow: auto; height: 90%">
      <router-view />
    </div>
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
