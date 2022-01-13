<template lang="">
  <input
    class="searchInputContainer"
    :class="{ defaultText: !searchQuery }"
    type="text"
    @input="setSearchQuery"
    placeholder="search"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import debounce from 'lodash/debounce';
import { store } from '@/store';
import { MoviesActionTypes } from '@/store/modules/movies/action-types';

export default defineComponent({
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    setSearchQuery(e: Event) {
      this.debounceInput(e);
    },
    debounceInput(event: Event) {
      this.searchQuery = (event.target as HTMLInputElement).value;
      store.dispatch(MoviesActionTypes.SET_SEARCH_QUERY, { searchQuery: this.searchQuery });
    },
  },
  created() {
    this.debounceInput = debounce(this.debounceInput, 500);
  },
});
</script>
