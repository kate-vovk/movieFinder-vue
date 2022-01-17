<template lang="">
  <div className="searchBarContainer">
    <SearchInput />
    <SearchSelect />
  </div>
</template>

<script lang="ts">
import '@/user/styles/components/searchBar.scss';
import SearchInput from '@/user/components/SearchInput.vue';
import SearchSelect from '@/user/components/SearchSelect.vue';

export default {
  components: {
    SearchInput,
    SearchSelect,
  },
};
</script>
