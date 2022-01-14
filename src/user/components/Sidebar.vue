<template lang="">
  <div className="sidebarContainer">
    <ul>
      <li v-for="(filter, i) in filters" :key="i">
        <AppSelect :filter="filter" />
      </li>
    </ul>
    <button className="filterButton" @click="filterMovies">filter</button>
  </div>
</template>
<script lang="ts">
import '@/user/styles/components/sidebar.scss';
import { defineComponent } from 'vue';
import { sidebarFilterNamesFields } from '@/user/constants/sidebarFilterNamesFields';
import AppSelect from '@/user/components/FilterSelect.vue';
import { MoviesActionTypes } from '@/store/modules/movies/action-types';

export default defineComponent({
  name: 'AppSidebar',
  components: {
    AppSelect,
  },
  data() {
    return {
      filters: sidebarFilterNamesFields,
    };
  },
  methods: {
    filterMovies() {
      this.$store.dispatch(MoviesActionTypes.SET_CURRENT_PAGE, { pageValue: 0 });
      this.$store.dispatch(MoviesActionTypes.GET_MOVIES_BY_QUERY);
    },
  },
});
</script>
<style lang=""></style>
