import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateventService {
  private _url: string = "http://localhost:5000/creat/event";
  constructor(private http: HttpClient) {}
  creatEvent(enetC:Object) {
     this.http.post<any>(this._url,enetC).subscribe(data => {
      console.log(data)
  });
  }
}
