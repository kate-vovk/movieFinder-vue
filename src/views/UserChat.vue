<template lang="">
  <div></div>
</template>

<script lang="ts">
import SocketioService from '@/services/socketService';

export default {
  name: 'UserChat',
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
};
</script>

<style lang=""></style>
