import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { UserService } from './_services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import { MoneyChangeComponent } from './money-change/money-change.component';
import { TheAuctionRoomComponent } from './the-auction-room/the-auction-room.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BiddingService } from './bidding.service';

import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserHomeComponent,
    NavbarComponent,
    UserNavbarComponent,
    HomeEventsComponent,
    MoneyChangeComponent,
    TheAuctionRoomComponent,
    CreateEventsComponent,
    AboutUsComponent,
    RegisterComponent,

  
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    

  ],
 
  providers: [
  AuthService,
  AuthGuardService,
  UserService,
  BiddingService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
















