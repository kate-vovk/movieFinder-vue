<template lang="">
  <div class="accordionContainer searchSelectContainer">
    <div @click="toggleOpenAccordion" className="accordion">
      {{ selectedParam }}
      <img :class="{ expandMore: showAccordion }" src="@/assets/expand_more_black_24dp.svg" />
    </div>
    <ul class="options" :class="{ optionsShow: showAccordion }">
      <form>
        <li v-for="(option, i) in searchOptions" :key="i">
          {{ option }}
        </li>
      </form>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { SearchOption } from '@/interfaces/movieInterface';
import '@/user/styles/components/accordion.scss';

export default defineComponent({
  data() {
    return {
      showAccordion: false,

      selectedParam: '',
      searchOptions: Object.values(SearchOption),
    };
  },
  methods: {
    toggleOpenAccordion() {
      this.showAccordion = !this.showAccordion;
    },
    // setOption(selectedOption: string) {
    //   this.selectedOption = selectedOption;
    // },
  },
});
</script>
