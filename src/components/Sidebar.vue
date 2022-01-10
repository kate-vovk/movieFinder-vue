<template lang="">
  <div className="sidebarContainer">
    <ul>
      <li v-for="(filter, i) in filters" :key="i">
        <AppAccordion :filter="filter" />
      </li>
    </ul>
    <button className="filterButton">filter</button>
  </div>
</template>
<script lang="ts">
import '@/styles/components/sidebar.scss';
import { sidebarFilterNamesFields } from '@/constants/sidebarFilterNamesFields';
import AppAccordion from '@/components/Accordion.vue';

export default {
  name: 'AppSidebar',
  components: {
    AppAccordion,
  },
  data() {
    return {
      filters: sidebarFilterNamesFields,
    };
  },
};
</script>
<style lang=""></style>
