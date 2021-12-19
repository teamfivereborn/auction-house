import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  data:any
  
  constructor(private Http:HttpClient) {
    this.Http.get<any>('http://localhost:5000/balance').subscribe((data)=>{
      this.data = [data]
      console.log("eee",this.data);
    ;})
  }
  


  ngOnInit(): void {
  }

}
