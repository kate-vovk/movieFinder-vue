<template lang="">
  <select v-model="selectedParam">
    <option v-for="(option, i) in searchOptions" :key="i">{{ option }}</option>
  </select>
</template>
<script lang="ts">
import { SearchOption } from '@/interfaces/movieInterface';

export default {
  data() {
    return {
      selectedParam: '',
      searchOptions: Object.values(SearchOption),
    };
  },
};
</script>
