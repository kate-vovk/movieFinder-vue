<template>
  <AppLayout />
</template>

<script lang="ts">
import AppLayout from '@/sharedComponents/layout/Layout.vue';
import './reset.css';

export default {
  components: {
    AppLayout,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
  overflow: hidden;
  height: 100vh;
  background-color: aliceblue;
}
</style>
