<template lang="">
  <div className="movieControlContainer">
    <button className="customButton favoriteButton">
      <img src="@/assets/star_black_24dp.svg" />
    </button>
    <button className="customButton">
      <img src="@/assets/shopping_cart_black_24dp.svg" />
    </button>
    <div className="price">{{ price }} $</div>
  </div>
</template>
<script lang="ts">
import '@/user/styles/components/customButton.scss';
import '@/user/styles/components/movieControl.scss';

export default {
  props: {
    movieId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
