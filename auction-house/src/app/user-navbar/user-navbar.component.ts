import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { BiddingService } from '../bidding.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  name:String=""

  constructor(
    private userService: UserService,
  private biddingService: BiddingService){}

  ngOnInit(): void {
  }
  sendMessage() {
    
    this.userService.getProfile().subscribe((data) => {
    console.log('hiiiiiiiiiiiiiiiiiii',data);
    
    })
  }
}
