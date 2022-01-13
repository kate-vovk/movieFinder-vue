<template lang="">
  <div class="accordionContainer searchSelectContainer">
    <div
      @click="toggleOpenAccordion"
      class="accordion searchSelectText"
      :class="{ defaultText: !selectedParam }"
    >
      {{ selectedParam || 'select option' }}
      <img :class="{ expandMore: showAccordion }" src="@/assets/expand_more_black_24dp.svg" />
    </div>
    <ul class="options" :class="{ optionsShow: showAccordion }">
      <li @click="selectSearchParam" v-for="(option, i) in searchOptions" :key="i">
        {{ option }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { SearchOption } from '@/interfaces/movieInterface';
import '@/user/styles/components/accordion.scss';
import { store } from '@/store';
import { MoviesActionTypes } from '@/store/modules/movies/action-types';

export default defineComponent({
  data() {
    return {
      showAccordion: false,

      selectedParam: '',
      searchOptions: Object.values(SearchOption).filter(
        (option: string) => option !== SearchOption.initial,
      ),
    };
  },
  methods: {
    toggleOpenAccordion() {
      this.showAccordion = !this.showAccordion;
    },
    selectSearchParam(event: { currentTarget: { innerHTML: string } }) {
      this.selectedParam = event.currentTarget.innerHTML;
      store.dispatch(MoviesActionTypes.SET_SEARCH_PARAM, { searchParam: this.selectedParam });
      this.toggleOpenAccordion();
    },
  },
});
</script>
