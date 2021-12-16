import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket : any 

  constructor() { }
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('my message', 'Hello there from Angular.');
    this.socket.on('my broadcast', (data: string) => {
      console.log(data);
    });
  }
  
  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
}
}
