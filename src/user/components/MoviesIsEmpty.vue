<template lang="">
  <div className="loading-error-emptyContainer">
    <img src="@/assets/search_black_24dp.svg" />
    <h1 className="title">Nothing Found</h1>
    <p>Your parameters did not match any movie.</p>

    <h4>Suggestions:</h4>
    <ul>
      <li>Suggestion First</li>
      <li>Suggestion Second</li>
      <li>Suggestion Third</li>
    </ul>
    <button @click="reloadPage">Refresh page</button>
  </div>
</template>

<script lang="ts">
import '@/styles/loading-error-empty.scss';
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
});
</script>
