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
  currentBidValue:Number=0
  // count:Number=0
  
  

  constructor(private biddingService: BiddingService){

  }

  ngOnInit(){
    this.biddingService.getNewMessage().subscribe((message: String) => {
      this.messageList.push(message);
      console.log(this.messageList);
    })
    // this.biddingService.getCount().subscribe((count:Number) => {
    //   console.log(count);
      
    //   this.count=count})
  }

  sendMessage() {
    this.biddingService.sendMessage(this.newMessage);
    this.newMessage = "";
  }
}