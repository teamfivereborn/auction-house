import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
   title: string=""
   img: string=""
   descriptions: string=""
   startDate: string=""
   startPrice: string=""
   
   x=JSON.parse(localStorage.getItem('user')||'{}')
  constructor(private Http:HttpClient) {
    console.log(this.x.name)
    }

  ngOnInit(): void {
    
  }
  create(){
   var body={title:this.title,ownerid:this.x.name, descriptions:this.descriptions, img:this.img, StartDate:this.startDate, startPrice:this.startPrice}
   
   console.log(body)
   this.Http.post<any>('http://localhost:5000/create',body).subscribe((data)=>{
    console.log(data);
    
  })
  }

}
