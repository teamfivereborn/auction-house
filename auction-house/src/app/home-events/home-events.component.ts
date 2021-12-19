import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.css']
})
export class HomeEventsComponent implements OnInit {
  events:any
  constructor(private Http:HttpClient) {
    this.Http.get<any>('http://localhost:5000/events').subscribe((data)=>{
      this.events = data
     console.log(data);})
  }

  ngOnInit(): void {
  }
 

}
