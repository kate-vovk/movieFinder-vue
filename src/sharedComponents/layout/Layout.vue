<template lang="">
  <div className="layout">
    <NavBar />
    <AppContent />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import NavBar from './NavBar.vue';
import AppFooter from './Footer.vue';
import AppContent from './Content.vue';
import '@/styles/layout/layout.scss';

export default {
  name: 'AppLayout',
  components: {
    NavBar,
    AppFooter,
    AppContent,
  },
};
</script>
