import { Component, OnInit } from '@angular/core';
import { BiddingService } from '../bidding.service';

@Component({
  selector: 'app-the-auction-room',
  templateUrl: './the-auction-room.component.html',
  styleUrls: ['./the-auction-room.component.css']
})
export class TheAuctionRoomComponent implements OnInit {
  newMessage: String=""
  messageList: String[] = [];

  constructor(private biddingService: BiddingService){

  }

  ngOnInit(){
    this.biddingService.getNewMessage().subscribe((message: String) => {
      this.messageList.push(message);
    })
  }

  sendMessage() {
    this.biddingService.sendMessage(this.newMessage);
    this.newMessage = "";
  }
}