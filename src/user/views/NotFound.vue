<template lang="">
  <div>
    <h1>Oops!</h1>
    <h3>The resource you're looking for is not here.</h3>
    <button @click="returnToMainPage">Go to main page</button>
    <!-- <router-link :to="{ name: 'EventList' }">Back to the home page</router-link> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CLIENT_PATHS } from '@/user/constants/constants';

export default defineComponent({
  methods: {
    returnToMainPage() {
      this.$router.push(CLIENT_PATHS.main);
    },
  },
});
</script>
