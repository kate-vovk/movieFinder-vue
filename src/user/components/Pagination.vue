<template lang="">
  <div className="paginationContainer">
    <button className="customButton prevPageButton" @click="prevPage" :disabled="pageValue === 0">
      <img src="@/assets/navigate_before_black_24dp.svg" />
    </button>

    <div class="accordionContainer itemPerPageContainer">
      <div @click="toggleOpenAccordion" class="accordion">
        {{ moviePerPage }}
        <img :class="{ expandMore: showAccordion }" src="@/assets/expand_more_black_24dp.svg" />
      </div>
      <ul class="options" :class="{ optionsShow: showAccordion }">
        <li @click="selectMoviesPerPageAmount" v-for="(option, i) in moviesPerPageOptions" :key="i">
          {{ option }}
        </li>
      </ul>
    </div>

    <span>totalPages:{{ totalPages }} currentPage:{{ pageValue + 1 }}</span>
    <button
      className="customButton nextPageButton"
      @click="nextPage"
      :disabled="pageValue >= totalPages - 1"
    >
      <img src="@/assets/navigate_before_black_24dp.svg" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';
import { MoviesActionTypes } from '@/store/modules/movies/action-types';
import '@/user/styles/components/pagination.scss';
import { moviesPerPageOptions } from '@/utils/paginationData';
import '@/user/styles/components/accordion.scss';

export default defineComponent({
  name: 'AppPagination',
  data() {
    return {
      showAccordion: false,
      moviesPerPageOptions,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(store.getters.totalCount / store.getters.moviePerPage);
    },
    pageValue() {
      return store.getters.currentPage;
    },
    moviesPerPage() {
      return store.getters.moviesPerPage;
    },
  },
  methods: {
    toggleOpenAccordion() {
      this.showAccordion = !this.showAccordion;
    },
    prevPage() {
      store.dispatch(MoviesActionTypes.SET_CURRENT_PAGE, { pageValue: this.pageValue - 1 });
    },
    nextPage() {
      store.dispatch(MoviesActionTypes.SET_CURRENT_PAGE, { pageValue: this.pageValue + 1 });
    },
    selectMoviesPerPageAmount(event: { currentTarget: { innerHTML: string } }) {
      // this.selectedParam = event.currentTarget.innerHTML;
      console.warn('event.currentTarget.innerHTML', Number(event.currentTarget.innerHTML));
      store.dispatch(MoviesActionTypes.SET_MOVIES_PER_PAGE, {
        moviesPerPageOptions: Number(event.currentTarget.innerHTML),
      });
      this.toggleOpenAccordion();
    },
  },
});
</script>
<style lang=""></style>
