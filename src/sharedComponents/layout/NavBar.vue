<template>
  <header className="navigation">
    <div className="logoContainer" @click="goToMainPage">
      <img alt="Vue logo" className="logo" src="@/assets/logo.svg" />
    </div>
    <div className="buttonsContainer">
      <div className="buttonGroup">
        <button className="leftButton navBarButton">En</button>
        <button className="rightButton navBarButton">Ru</button>
      </div>
      <MenuButton />

      <button @click="goToCart" className="navBarButton">
        <img src="@/assets/shopping_cart_black_24dp.svg" />
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import '@/styles/layout/header.scss';
import { defineComponent } from 'vue';
import { CLIENT_PATHS } from '@/user/constants/constants';
import MenuButton from '@/user/components/MenuButton.vue';
import { MoviesActionTypes } from '@/store/modules/movies/action-types';

export default defineComponent({
  name: 'NavBar',
  components: {
    MenuButton,
  },
  methods: {
    goToCart() {
      this.$router.push(CLIENT_PATHS.cart);
    },
    goToMainPage() {
      this.$router.push(CLIENT_PATHS.movies);
      this.$store.dispatch(MoviesActionTypes.GET_MOVIES_BY_QUERY);
      // window.location.reload();
    },
  },
});
</script>
