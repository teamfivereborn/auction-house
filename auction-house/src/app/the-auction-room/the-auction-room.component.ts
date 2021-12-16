import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-the-auction-room',
  templateUrl: './the-auction-room.component.html',
  styleUrls: ['./the-auction-room.component.css']
})
export class TheAuctionRoomComponent implements OnInit {
  bet:Number=0

  constructor(private socketService: SocketioService) { }

  ngOnInit() {
    this.socketService.setupSocketConnection();
  }
  ngOnDestroy() {
    this.socketService.disconnect();
  }

}
