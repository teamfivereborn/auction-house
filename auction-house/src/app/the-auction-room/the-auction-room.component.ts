import { Component, OnInit } from '@angular/core';
import { BiddingService } from '../bidding.service';
import { Load } from '../interface';
import { UserService } from '../_services/user.service';

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
  winner:String=""
  toggel :any = true
 
  
  

  constructor(
      private userService: UserService,
    private biddingService: BiddingService){

  }

  ngOnInit(){

    
    
    this.biddingService.getNewMessage().subscribe((load) => {
      
      
if(load){
  if(Number(load.message)>this.currentBidValue)
     { this.loadList.push(load);
      this.currentBidValue=Number(load.message)
      console.log(this.loadList);}
}
    })
    this.biddingService.getCounter().subscribe((counter:Number) => {
      
      this.counter=counter
      if(counter===1){this.winner=this.loadList[this.loadList.length-1].user.user.username}
    
    
  })
  }

 

  sendMessage() {
  this.userService.getProfile().subscribe((data) => { 
  var obj={user:data,message:this.newMessage}
  console.log("xx",obj);
    if(Number(this.newMessage)>this.currentBidValue||this.newMessage==="2010hia97")
    {this.biddingService.sendMessage(obj);}
    this.newMessage = "";
  })
  }


  // sendMessage2() {
  //   this.userService.getProfile().subscribe((data) => { 
  //   var obj={user:data,message:this.newMessage}
  //   console.log("xx",obj);
  //     if(Number(this.newMessage)>this.currentBidValue||this.newMessage==="2010hia97")
  //     {this.biddingService.sendMessage(obj);}
  //     this.newMessage = "";
  //   })
  // }
}