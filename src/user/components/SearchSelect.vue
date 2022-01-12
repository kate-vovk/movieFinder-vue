<template lang="">
  <select v-model="selectParam">
    <option v-for="(option, i) in searchOptions" :key="i">{{ option }}</option>
  </select>
</template>
<script lang="ts">
import { SearchOption } from '@/interfaces/movieInterface';

export default {
  data() {
    return {
      selectParam: '',
      searchOptions: Object.values(SearchOption),
    };
  },
};
</script>
<style lang=""></style>
