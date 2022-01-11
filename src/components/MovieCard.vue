<template lang="">
  <div className="movieCardContainer">
    <div className="linkToMoviePage">
      <div className="title">{{ movie.title }}</div>
      <div>
        <img className="image" v-bind:src="movie.coverUrl" />
      </div>
      <p className="description">{{ movie.description }}</p>
    </div>
    <MovieControl :movieId="movie.id" :price="Number(movie.price)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/styles/components/movieCard.scss';
import MovieControl from '@/components/MovieControl.vue';

export default defineComponent({
  props: {
    movie: {
      type: Object,
    },
  },
  components: {
    MovieControl,
  },
});
</script>
