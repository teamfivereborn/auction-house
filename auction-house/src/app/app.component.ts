import { Component } from '@angular/core';
// import { SocketioService } from './socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  showbar=true
  constructor() {}
  
  // ngOnInit() {
  //   this.socketService.setupSocketConnection();
  // }
  // ngOnDestroy() {
  //   this.socketService.disconnect();
  // }

}
