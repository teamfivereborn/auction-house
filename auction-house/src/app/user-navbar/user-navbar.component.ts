import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { BiddingService } from '../bidding.service';

// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  name:String=""
  data:any

  constructor(
    private userService: UserService,
  private biddingService: BiddingService){}
  
  // constructor(private Http:HttpClient) {
  //   this.Http.get<any>('http://localhost:5000/balance').subscribe((data)=>{
  //     this.data = [data]
  //     console.log("eee",this.data);
  //   ;})
  // }
  


  ngOnInit(): void {
  }
  sendMessage() {
    
    this.userService.getProfile().subscribe((data) => {
    console.log('hiiiiiiiiiiiiiiiiiii',data);
    
    })
  }
}
