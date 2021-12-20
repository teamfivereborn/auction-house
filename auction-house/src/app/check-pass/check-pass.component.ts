import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-check-pass',
  templateUrl: './check-pass.component.html',
  styleUrls: ['./check-pass.component.css']
})
export class CheckPassComponent implements OnInit {
    checck:any=""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  check(){
    if(this.checck=="2010hia97"){
      this.router.navigate(['/room'])
    }
    

  }

}
