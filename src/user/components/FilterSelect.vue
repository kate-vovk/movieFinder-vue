<template lang="">
  <div className="selectContainer">
    <div @click="toggleOpenSelect" className="select selectShadow">
      {{ filter.name }}
      <img :class="{ expandMore: showSelect }" src="@/assets/expand_more_black_24dp.svg" />
    </div>
    <ul class="options filterOption" :class="{ optionsShow: showSelect }">
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
import '@/user/styles/components/select.scss';
import { defineComponent } from 'vue';
import FilterOptions from '@/user/components/FilterOptions.vue';

export default defineComponent({
  name: 'AppSelect',
  components: {
    FilterOptions,
  },
  data() {
    return {
      showSelect: false,
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
    toggleOpenSelect() {
      this.showSelect = !this.showSelect;
    },
    setOption(selectedOption: string) {
      this.selectedOption = selectedOption;
    },
  },
});
</script>
