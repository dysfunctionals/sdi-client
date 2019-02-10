import socketIo from 'socket.io-client';
import { apiUrl } from './config/settings'
export const socket = socketIo(`${apiUrl}/client`, {
  path: '/socket'
});

export const socketListener = () => {
  return new Promise((resolve) => {
    console.log("Initializing listener");
    socket.on('INVALID_NAME', () => {
      resolve('/');
    });
    socket.on('GAME_FULL', () => {
    
      console.log('socket listener full', "full")
      resolve('/full');
    });
    socket.on('ROLE_SELECTED', (encodedRoleData) => {
      console.log('socket listener role data', encodedRoleData)
      const roleData = JSON.parse(encodedRoleData);
      resolve(`/game/${roleData.ship}/${roleData.role}`);
    });
  });
};
