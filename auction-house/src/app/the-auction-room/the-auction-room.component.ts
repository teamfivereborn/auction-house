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
  counter:Number=1
 
  
  

  constructor(private biddingService: BiddingService){

  }

  ngOnInit(){
    this.biddingService.getNewMessage().subscribe((message: String) => {
      this.messageList.push(message);
      // console.log(this.messageList);
    })
    this.biddingService.getCounter().subscribe((counter:Number) => {
      
      this.counter=counter})
  }

 

  sendMessage() {
    this.biddingService.sendMessage(this.newMessage);
    this.newMessage = "";
  }
}