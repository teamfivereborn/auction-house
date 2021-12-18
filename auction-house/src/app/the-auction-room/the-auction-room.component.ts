import { Component, OnInit } from '@angular/core';
import { BiddingService } from '../bidding.service';
import { Load } from '../interface';

@Component({
  selector: 'app-the-auction-room',
  templateUrl: './the-auction-room.component.html',
  styleUrls: ['./the-auction-room.component.css']
})
export class TheAuctionRoomComponent implements OnInit {
  newMessage: String=""
  loadList: Load[] = [];
  currentBidValue:Number=0
  counter:Number=1
  
 
  
  

  constructor(private biddingService: BiddingService){

  }

  ngOnInit(){
    
    this.biddingService.getNewMessage().subscribe((load) => {
      
      
if(load){
      this.loadList.push(load);
      console.log(this.loadList);
}
    })
    this.biddingService.getCounter().subscribe((counter:Number) => {
      
      this.counter=counter})
  }

 

  sendMessage() {
    var x =JSON.parse(localStorage.getItem('user')||'{}')
 
  
  var obj={user:x,message:this.newMessage}
  
  
    
    this.biddingService.sendMessage(obj);
    this.newMessage = "";
  }
}