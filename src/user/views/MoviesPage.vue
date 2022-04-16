<template lang="">
  <div style="height: 100%">
    <ErrorBoundary v-if="moviesStatus === dataStatus.error" />
    <div v-else className="moviesPageContainer">
      <AppSidebar />
      <div className="moviesPage">
        <SearchBar />
        <MoviesCards />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import AppSidebar from '@/user/components/Sidebar.vue';
import SearchBar from '@/user/components/SearchBar.vue';
import MoviesCards from '@/user/components/MoviesCards.vue';
import '@/user/styles/views/moviesPage.scss';
import { MoviesActionTypes } from '@/store/modules/movies/action-types';
import { DataStatus } from '@/interfaces/status';
import ErrorBoundary from '@/sharedComponents/ErrorBoundary.vue';

export default defineComponent({
  data() {
    return {
      dataStatus: DataStatus,
    };
  },
  components: {
    AppSidebar,
    SearchBar,
    MoviesCards,
    ErrorBoundary,
  },
  created() {
    this.$store.dispatch(MoviesActionTypes.GET_MOVIES_BY_QUERY);
  },
  computed: {
    ...mapGetters(['movieList', 'moviesStatus']),
  },
});
</script>
