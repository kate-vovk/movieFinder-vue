<template lang="">
  <div className="moviesPageContainer">
    <AppSidebar />
    <div className="moviesPage">
      <SearchBar />
      <MoviesCards />
    </div>
  </div>
</template>
<script lang="ts">
import AppSidebar from '@/components/Sidebar.vue';
import SearchBar from '@/components/SearchBar.vue';
import MoviesCards from '@/components/MoviesCards.vue';

import '@/styles/views/moviesPage.scss';

export default {
  components: {
    AppSidebar,
    SearchBar,
    MoviesCards,
  },
};
</script>
<style lang=""></style>
