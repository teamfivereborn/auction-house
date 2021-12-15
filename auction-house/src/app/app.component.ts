import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auction-house';
  constructor(private http: HttpClient){}
  ngOnInit() {
    ///////////////////post request///////////////////
    this.http.post<any>('http://localhost:5000/api/signup', {
      ownerid:11,
      title: 'ring in gold',
      img: 'https://www.cdiscount.com/pdt2/3/3/0/1/700x700/mp47245330/rw/2-pieces-ensemble-de-bague-de-mariage-plaque-or-14.jpg',
      startPrice: '150.000',
      StartDate:'16/12/2021',
      endDate:'17/12/2021',
    
    },).subscribe(data => {
     console.log(data);
      
    })
    
    //////////////////Get Request//////////////////////////
    // this.http.get<any>('http://localhost:5000/api/get').subscribe(data => {
    //   console.log(data)
  // })
}

}


