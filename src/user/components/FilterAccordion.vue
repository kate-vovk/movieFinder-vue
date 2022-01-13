<template lang="">
  <div className="accordionContainer">
    <div @click="toggleOpenAccordion" className="accordion">
      {{ filter.name }}
      <img :class="{ expandMore: showAccordion }" src="@/assets/expand_more_black_24dp.svg" />
    </div>
    <ul class="options" :class="{ optionsShow: showAccordion }">
      <form>
        <li v-for="(option, i) in filter.options" :key="i">
          <FilterOptions
            :filterParam="filter.name"
            :option="option"
            @setNewOption="setOption"
            :selectedOption="selectedOption"
          />
        </li>
      </form>
    </ul>
  </div>
</template>
<script lang="ts">
import '@/user/styles/components/accordion.scss';
import { defineComponent } from 'vue';
import FilterOptions from '@/user/components/FilterOptions.vue';

export default defineComponent({
  name: 'AppAccordion',
  components: {
    FilterOptions,
  },
  data() {
    return {
      showAccordion: false,
      selectedOption: '',
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
    setOption(selectedOption: string) {
      this.selectedOption = selectedOption;
    },
  },
});
</script>
