<template lang="">
  <div className="paginationContainer">
    <div style="display: flex; height: inherit">
      <div className="itemPerPageContainer">
        <div className="textContainer">Items per page:</div>
        <div className="invisibleContainer"></div>
        <div class="accordionContainer itemPerPageOptions">
          <div @click="toggleOpenAccordion" class="accordion">
            {{ moviesPerPage }}
            <img :class="{ expandMore: showAccordion }" src="@/assets/expand_more_black_24dp.svg" />
          </div>
          <ul class="options" :class="{ optionsShow: showAccordion }">
            <li
              @click="selectMoviesPerPageAmount"
              v-for="(option, i) in moviesPerPageOptions"
              :key="i"
            >
              {{ option }}
            </li>
          </ul>
        </div>
      </div>
      <div className="textContainer">{{ pageValue + 1 }} of {{ totalPages }}</div>
      <button
        class="prevPageButton"
        @click="prevPage"
        :disabled="pageValue === 0"
        :class="{ buttonHover: pageValue != 0 }"
      >
        <img v-if="pageValue === 0" src="@/assets/navigate_before_lightGrey_24dp.svg" />
        <img v-else src="@/assets/navigate_before_black_24dp.svg" />
      </button>
      <button
        class="nextPageButton"
        @click="nextPage"
        :disabled="pageValue >= totalPages - 1"
        :class="{ buttonHover: pageValue < totalPages - 1 }"
      >
        <img v-if="pageValue >= totalPages - 1" src="@/assets/navigate_before_lightGrey_24dp.svg" />
        <img v-else src="@/assets/navigate_before_black_24dp.svg" />
      </button>
    </div>
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
      return Math.ceil(store.getters.totalCount / store.getters.moviesPerPage);
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
      store.dispatch(MoviesActionTypes.SET_MOVIES_PER_PAGE, {
        moviesPerPage: Number(event.currentTarget.innerHTML),
      });
      this.toggleOpenAccordion();
    },
  },
});
</script>
<style lang=""></style>
