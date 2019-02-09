import socketIo from 'socket.io-client';

export const socket = socketIo('10.14.200.134:8080/client', {
  path: '/socket'
});

export const socketListener = () => {
  return new Promise((resolve) => {
    console.log("Initializing listener");
    socket.on('INVALID_NAME', () => {
      resolve('/');
    });
    socket.on('GAME_FULL', () => {
      resolve('/full');
    });
    socket.on('ROLE_SELECTED', (roleData) => {
      console.log("Receiving event");
      resolve(`/game/${roleData.ship}/${roleData.role}`);
    });
  });
};