<template lang="">
  <div className="userChatContainer">
    <ul>
      <li v-for="(message, i) in messages" :key="i">
        <div v-if="message.type === 'info'">
          <p className="info">{{ message.userName }} {{ message.message }}</p>
        </div>
        <div v-else>
          <div v-if="userId !== message.userId" className="avatar"></div>
          <div
            class="message"
            :class="{
              myMessage: userId === message.userId,
              anotherMessage: userId !== message.userId,
            }"
          >
            <h4 v-if="userId !== message.userId">{{ message.userName }}:</h4>
            <p>{{ message.message }}</p>
          </div>
        </div>
      </li>
    </ul>
    <form @submit.prevent="send">
      <div className="form">
        <input
          className="messageInput"
          type="text"
          v-model="newMessage"
          placeholder="Enter message here"
        />
        <button className="sendButton" :disabled="!newMessage" type="button" @click="send">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
// 1) store chat history on server

import { defineComponent, watchEffect } from 'vue';
import SocketioService from '@/services/socketServiceWithDatabase';
import { store } from '@/store';
import '@/styles/views/userChat.scss';
import { IReceivedMessage } from '@/interfaces/userChatInterfaces';

export default defineComponent({
  name: 'UserChat',
  data() {
    return {
      messages: [] as IReceivedMessage[],
      newMessage: null,
      userId: store.state.auth.userId,
    };
  },
  methods: {
    send() {
      SocketioService.send(this.newMessage);
      this.newMessage = null;
    },
  },
  created() {
    SocketioService.setupSocketConnection();
    SocketioService.join();

    watchEffect(() => {
      SocketioService.getSocket().on('chat-broadcast', (messagesFromServer: IReceivedMessage[]) => {
        this.messages = messagesFromServer;
      });
    });
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
});

// 2) store chat history locally in vuex

// import { defineComponent, watchEffect } from 'vue';
// import SocketioService from '@/services/socketService';
// import { store } from '@/store';
// import '@/styles/userChat.scss';

// export default defineComponent({
//   name: 'UserChat',
//   data() {
//     return {
//       messages: [],
//       newMessage: null,
//       userId: store.state.auth.userId,
//     };
//   },
//   methods: {
//     send() {
//       SocketioService.send(this.newMessage);
//       this.newMessage = null;
//     },
//   },
//   created() {
//     SocketioService.setupSocketConnection();
//     SocketioService.join();

//     watchEffect(() => {
//       this.messages = store.state.userChat.messages as any;
//     });
//   },
//   beforeUnmount() {
//     SocketioService.disconnect();
//   },
// });
//
</script>

<style lang=""></style>
