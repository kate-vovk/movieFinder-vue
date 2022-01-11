<template lang="">
  <div className="movieCardsContainer">
    <ul className="listItems">
      <li v-for="(movie, i) in movies" :key="i" className="listItem">
        <MovieCard :movie="movie" />
      </li>
    </ul>
    <AppPagination />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';
import MovieCard from '@/components/MovieCard.vue';
import AppPagination from '@/components/Pagination.vue';
import '@/styles/components/moviesCards.scss';

export default defineComponent({
  data() {
    return {
      movies: store.getters.movieList,
    };
  },
  components: {
    MovieCard,
    AppPagination,
  },
});
</script>
