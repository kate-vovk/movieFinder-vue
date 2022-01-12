<template lang="">
  <div className="searchBarContainer">
    <SearchInput />
  </div>
</template>

<script lang="ts">
import '@/user/styles/components/searchBar.scss';
import SearchInput from '@/user/components/SearchInput.vue';

export default {
  components: {
    SearchInput,
  },
};
</script>
