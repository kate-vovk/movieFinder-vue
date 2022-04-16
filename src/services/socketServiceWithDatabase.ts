import { io, Socket } from 'socket.io-client';
import { store as globalStore } from '@/store';

interface IUserInfo {
  username: string;
  type: string;
}
class SocketioService {
  socket: Socket = io();

  info: IUserInfo[] = [];

  username = null;

  roomname = 'userChat12345';

  store = globalStore.state.auth;

  constructor() {
    this.info = [];
    this.username = null;
    this.store = globalStore.state.auth;
  }

  getSocket(): Socket {
    return this.socket;
  }

  setupSocketConnection() {
    this.socket = io(`${process.env.VUE_APP_SOCKET_ENDPOINT}`, {
      auth: { userName: this.store.userName, userId: this.store.userId, roomName: 'userChat12345' },
    });
  }

  send(input: string | null) {
    this.socket.emit('my-message', {
      message: input,
      userName: this.store.userName,
      userId: this.store.userId,
      roomname: this.roomname,
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.emit('leave', {
        userId: this.store.userId,
        userName: this.store.userName,
        roomname: this.roomname,
      });
      // this.socket.disconnect();
    }
  }

  join() {
    if (this.socket) {
      this.socket.emit('join', {
        userId: this.store.userId,
        userName: this.store.userName,
        roomname: this.roomname,
      });
    }
  }
}

export default new SocketioService();
