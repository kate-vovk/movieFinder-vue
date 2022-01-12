<template lang="">
  <div @click="toggleOpenMenu" className="navBarButton dropdown">
    <img src="@/assets/account_circle_black_24dp.svg" />
    <ul class="dropdownContent" :class="{ dropdownContentOpen: openMenu }">
      <li v-for="({ name, link }, i) in menuLinks" :key="i" @click="this.$router.push(link)">
        {{ name }}
      </li>
      <li @click="logout">Signout</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import { CLIENT_PATHS } from '@/user/constants/constants';
import '@/user/styles/components/menuButton.scss';
import { userMenuLinks } from '@/user/constants/navBarMenuButton';

export default defineComponent({
  data() {
    return {
      openMenu: false,
      menuLinks: userMenuLinks,
    };
  },
  methods: {
    ...mapActions(['LOG_OUT']),
    async logout() {
      await this.LOG_OUT(); // instead of dispatch('LOG_IN')
      this.$router.push(CLIENT_PATHS.signin);
    },
    toggleOpenMenu() {
      this.openMenu = !this.openMenu;
    },
  },
});
</script>
<style lang=""></style>
