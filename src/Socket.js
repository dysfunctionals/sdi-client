import socketIo from 'socket.io-client';
import { encode } from 'punycode';

export const socket = socketIo('localhost:8080/client', {
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
    socket.on('ROLE_SELECTED', (encodedRoleData) => {
      const roleData = JSON.parse(encodedRoleData);
      resolve(`/game/${roleData.ship}/${roleData.role}`);
    });
  });
};
