import { io } from 'socket.io-client';

class SocketioService {
  socket: any;

  setupSocketConnection() {
    console.warn('setupSocketConnection');
    this.socket = io(`${process.env.VUE_APP_SOCKET_ENDPOINT}`, { auth: { userId: 'userId' } });
    this.socket.emit('my message', 'Hello there from Vue.');
    this.socket.on('my broadcast', (data: string) => {
      console.log(data);
    });
  }

  disconnect() {
    if (this.socket) {
      console.warn('disconnect');
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
