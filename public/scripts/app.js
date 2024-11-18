import { initChat } from './chat.js';
import { initRTC } from './rtc.js';
import { initSocket } from './socket.js';

document.addEventListener('DOMContentLoaded', () => {
  const socket = initSocket();
  initChat(socket);
  initRTC(socket);
});
