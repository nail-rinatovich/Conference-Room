const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Настройка порта и хоста
const PORT = process.env.PORT || 3000; // Использует PORT из окружения, если указан
const HOST = '0.0.0.0'; // Слушает на всех сетевых интерфейсах

// Подключение статических файлов
app.use(express.static('public'));

// Работа с сокетами
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    io.emit('message', data);
  });

  socket.on('offer', (offer) => {
    socket.broadcast.emit('offer', offer);
  });

  socket.on('answer', (answer) => {
    socket.broadcast.emit('answer', answer);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Запуск сервера
server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
