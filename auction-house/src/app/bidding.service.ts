

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";



@Injectable({
  providedIn: 'root',
})
export class BiddingService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  public count: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {}

  socket = io('http://localhost:5000');

  public sendMessage(message:String) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };

 
    
    public getCount = () => {
      this.socket.on('count', (count) =>{
        this.count.next(count);
      }) 
      return this.count.asObservable();
    }

}
