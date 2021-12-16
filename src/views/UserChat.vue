<template lang="">
  <div>
    <ul>
      <!-- <small v-if="typing" class="text-white">{{ typing }} is typing</small> -->
      <li v-for="(message, i) in messages" :key="i">
        <span>
          <small>{{ message.user }}:</small>
          {{ message.message }}
        </span>
      </li>
    </ul>
    <form @submit.prevent="send">
      <div>
        <input type="text" v-model="newMessage" placeholder="Enter message here" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SocketioService } from '@/services/socketService';

// const newSocket = new SocketioService();

export default defineComponent({
  name: 'UserChat',
  data() {
    return {
      newSocket: new SocketioService(),
      messages: [],
      newMessage: null,
    };
  },
  methods: {
    send() {
      this.newSocket.send(this.newMessage);
      this.newMessage = null;
    },
  },
  created() {
    this.newSocket.setupSocketConnection();
    // this.newSocket.addUser();
    //     watchEffect(() => {
    //       this.messages = newSocket.getMessages();
    // },
  },

  beforeUnmount() {
    this.newSocket.disconnect();
  },
});
</script>

<style lang=""></style>
