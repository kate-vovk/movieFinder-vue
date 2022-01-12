<template lang="">
  <div>
    <input type="text" @input="setSearchQuery" placeholder="search" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import debounce from 'lodash/debounce';

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
    },
  },
  created() {
    this.debounceInput = debounce(this.debounceInput, 500);
  },
});
</script>

<style lang=""></style>
