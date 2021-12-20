import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { BiddingService } from '../bidding.service';
import { Load } from '../interface';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  name:String=""
  data:any
  profilName:string=""
  local:any=""
  id:any=''
  

  constructor(
    private userService: UserService,
  private biddingService: BiddingService,
  private Http:HttpClient){
   this.local=localStorage.getItem('user')
   this.id=JSON.parse(this.local).id
  
   
    this.Http.get<any>(`http://localhost:5000/balance/${this.id}`).subscribe((data)=>{
      this.data = data.balance
      
    ;})
  }
  
 
  


  ngOnInit(): void {
    this.userService.getProfile().subscribe((data) => {
     this.profilName= data.user.username      
    })
  } 
}
