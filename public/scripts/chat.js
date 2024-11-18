export function initChat(socket) {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
  
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const message = chatInput.value;
        socket.emit('message', message);
        chatInput.value = '';
      }
    });
  
    socket.on('message', (message) => {
      const msgElem = document.createElement('p');
      msgElem.textContent = message;
      chatMessages.appendChild(msgElem);
    });
  }
  