<template lang="">
  <div className="accordionContainer">
    <div @click="toggleOpenAccordion" className="accordion">
      {{ filter.name }}
      <img :class="{ expandMore: showAccordion }" src="../assets/expand_more_black_24dp.svg" />
    </div>
    <ul class="options" :class="{ optionsShow: showAccordion }">
      <li v-for="(option, i) in filter.options" :key="i">
        {{ option }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import '@/styles/components/accordion.scss';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppAccordion',
  data() {
    return {
      showAccordion: false,
    };
  },
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleOpenAccordion() {
      this.showAccordion = !this.showAccordion;
    },
  },
});
</script>
<style lang=""></style>
