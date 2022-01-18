<template lang="">
  <div className="loading-error-emptyContainer">
    <FadeLoader />
  </div>
</template>

<script lang="ts">
import FadeLoader from 'vue-spinner/src/FadeLoader.vue';
import '@/styles/loading-error-empty.scss';

export default {
  name: 'AppLoading',
  components: {
    FadeLoader,
  },
};
</script>
