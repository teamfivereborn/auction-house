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
    // get request balance
    
  })
  }

 

  sendMessage() {
  //   var x =JSON.parse(localStorage.getItem('user')||'{}')
 
  
  // var obj={user:x,message:this.newMessage}
  
  
  //   if(Number(this.newMessage)>this.currentBidValue||this.newMessage==="start")
  //   {this.biddingService.sendMessage(obj);}
  //   this.newMessage = "";
  this.userService.getProfile().subscribe((data) => {
    
  var obj={user:data,message:this.newMessage}
  console.log("xx",obj);
  
    if(Number(this.newMessage)>this.currentBidValue||this.newMessage==="start")
    {this.biddingService.sendMessage(obj);}
    this.newMessage = "";





  })




  }
}