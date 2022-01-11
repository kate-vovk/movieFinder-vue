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
import { defineComponent } from 'vue';
import AppSidebar from '@/components/Sidebar.vue';
import SearchBar from '@/components/SearchBar.vue';
import MoviesCards from '@/components/MoviesCards.vue';

import '@/styles/views/moviesPage.scss';
import { MoviesActionTypes } from '@/store/modules/movies/action-types';

export default defineComponent({
  components: {
    AppSidebar,
    SearchBar,
    MoviesCards,
  },
  beforeCreate() {
    this.$store.dispatch(MoviesActionTypes.GET_MOVIES_BY_QUERY);
  },
});
</script>
