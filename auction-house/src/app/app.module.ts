import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
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


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
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

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BiddingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
