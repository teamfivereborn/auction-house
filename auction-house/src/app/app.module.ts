import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
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
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

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
    // CloudinaryUploader,
    // CloudinaryOptions,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
