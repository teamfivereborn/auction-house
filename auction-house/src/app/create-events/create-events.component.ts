import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import {CreateventService} from "../createvent.service"
// import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  title = 'reactive forms';
  myGroup:any;
  constructor(private createventService: CreateventService) { }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      title: new FormControl(""),
      pic: new FormControl(""),
      date:new FormControl(""),
      price:new FormControl("")
   });
  }

  onSubmit(){
    this.createventService.creatEvent(this.myGroup.value)
    console.log(this.myGroup.value)
  }

}
