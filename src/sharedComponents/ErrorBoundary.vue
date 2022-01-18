<template lang="">
  <div className="loading-error-emptyContainer">
    <div v-if="currentRouter === route">
      <h2>Error in {{ route }}:</h2>
      <p>{{ errorMessage }} in {{ route }}</p>
      <button @click="reloadPage">Try again</button>
    </div>
    <div v-else>
      <p>Something went wrong</p>
      <button @click="reloadPage">Reload page</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import '@/styles/loading-error-empty.scss';

export default defineComponent({
  computed: {
    ...mapGetters(['route', 'errorMessage', 'errorStatus']),
    currentRouter() {
      return this.$router.currentRoute.value.path;
    },
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
});
</script>
