<template lang="">
  <button class="customButton">
    <img v-if="Boolean(iconByType)" v-bind:src="require(iconByType)" />
    <span v-else>{{ name }}</span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { getIconByType } from '@/utils/iconByType';
import '@/styles/components/customButton.scss';

export default defineComponent({
  props: {
    name: { type: String, required: true },
    className: { type: String, default: '' },
  },
  computed: {
    iconByType() {
      return getIconByType(this.name);
    },
  },
});
</script>
<style lang=""></style>
