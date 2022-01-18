<template>
  <div className="movieCardsContainer">
    <AppLoading v-if="moviesStatus === dataStatus.loading" />
    <MoviesIsEmpty v-if="moviesStatus === dataStatus.empty" />

    <div v-if="moviesStatus === dataStatus.success" className="contentContainer">
      <ul className="listItems">
        <li v-for="(movie, i) in movieList" :key="i" className="listItem">
          <MovieCard :movie="movie" />
        </li>
      </ul>
      <AppPagination />
    </div>

    <!-- <ErrorBoundary v-if="moviesStatus === dataStatus.error" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { DataStatus } from '@/interfaces/status';
import MovieCard from '@/user/components/MovieCard.vue';
import AppPagination from '@/user/components/Pagination.vue';
import AppLoading from '@/sharedComponents/Loading.vue';
import MoviesIsEmpty from '@/user/components/MoviesIsEmpty.vue';

import '@/user/styles/components/moviesCards.scss';

export default defineComponent({
  data() {
    return {
      dataStatus: DataStatus,
    };
  },
  components: {
    MovieCard,
    AppPagination,
    AppLoading,
    MoviesIsEmpty,
  },
  computed: {
    ...mapGetters(['movieList', 'moviesStatus']),

    // movies() {
    //   return store.getters.movieList;
    // },
    // stateStatus() {
    //   return store.getters.moviesStatus;
    // },
  },
});
</script>
