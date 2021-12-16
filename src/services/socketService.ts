/* eslint-disable camelcase */
import { io } from 'socket.io-client';
import { store as globalStore } from '@/store';

interface IMessage {
  message: string;
  type: number;
  user: string;
}
interface IUser {
  name: string;
  user_id: string;
  messages: any;
}
interface IUserInfo {
  username: string;
  type: string;
}
export class SocketioService {
  socket: any;

  info: IUserInfo[] = [];

  messages: IMessage[] = [];

  username = null;

  store = globalStore.state.auth;

  constructor() {
    this.info = [];
    this.messages = [];
    this.username = null;
    this.store = globalStore.state.auth;
    this.socket = io(`${process.env.VUE_APP_SOCKET_ENDPOINT}`, {
      auth: { userName: this.store.userName, userId: this.store.userId },
    });
  }

  setupSocketConnection() {
    console.log('setupSocketConnection');
    // this.socket = io(`${process.env.VUE_APP_SOCKET_ENDPOINT}`, {
    //   auth: { userName: this.store.userName, userId: this.store.userId },
    // });
    this.addUser();

    // this.socket.emit('my-message', 'Hello there from Vue.');

    this.socket.on('chat-broadcast', (data: IMessage) => {
      this.messages.push({
        message: data.message,
        type: 1,
        user: data.user,
      });
      console.log('chat-broadcast', data);
    });

    this.socket.on('joined', (data: IUser) => {
      this.info.push({
        username: data.name,
        type: 'joined',
      });
      this.messages.push(...data.messages);
    });
  }

  send(input: any) {
    console.warn('store', this.store, this.socket);
    this.messages.push({
      message: input,
      type: 0,
      user: 'Me',
    });

    this.socket.emit('my-message', {
      message: input,
      user: this.store.userName,
    });
  }

  disconnect() {
    if (this.socket) {
      console.warn('disconnect');
      this.socket.disconnect();
    }
  }

  addUser() {
    // this.ready = true;
    console.warn('addUser', this.store.userName);
    this.socket.emit('joined', this.store.userName);
  }

  // getMessages() {
  //   return this.messages;
  // }
}

// export default new SocketioService();
