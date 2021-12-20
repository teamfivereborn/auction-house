import { Component, OnInit } from '@angular/core';
import { User } from '../_classes/user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.css']
})
export class HomeEventsComponent implements OnInit {
  events:any
  model : any;
  email: any
  constructor(
              private Http:HttpClient,
              // private http:HttpClient
  ) {
    this.Http.get<any>('http://localhost:5000/events').subscribe((data)=>{
      this.events = data
     console.log(data);})
  }
  
  sendEmail(): void{
    var url =' http://localhost:5000/emaill';
    this.Http.post(url,{
      email : this.email
    })
    .subscribe( () =>{
      console.log(('hiiiiiiii'));
      
    })
  };
  

  ngOnInit(): void {
   this.model=localStorage.getItem('user',)
  this.email= JSON.parse(this.model).email
   
   
  }
 

}
