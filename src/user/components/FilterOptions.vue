<template lang="">
  <div @click="selectOption">
    <input type="radio" :name="option" :value="option" :checked="checked" />
    <label :for="option">{{ option }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MoviesActionTypes } from '@/store/modules/movies/action-types';

export default defineComponent({
  props: {
    option: {
      type: String,
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
    },
    filterParam: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectOption() {
      if (this.selectedOption === this.option) {
        this.$emit('setNewOption', '');
      } else {
        this.$emit('setNewOption', this.option);
      }
      this.$store.dispatch(MoviesActionTypes.ADD_FILTER_OPTION, {
        filterParam: this.filterParam,
        filterOption: this.option,
      });
    },
  },
  computed: {
    checked() {
      return this.selectedOption === this.option;
    },
  },
});
</script>
<style lang=""></style>
