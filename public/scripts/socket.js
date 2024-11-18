import { io } from 'socket.io-client';

export function initSocket() {
  const socket = io('http://localhost:3000');

  socket.on('connect', () => {
    console.log('Connected to server');
  });

  return socket;
}
