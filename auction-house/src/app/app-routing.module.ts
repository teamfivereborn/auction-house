import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from '../app/home/home.component'
import { HomeEventsComponent } from './home-events/home-events.component';
import { MoneyChangeComponent } from './money-change/money-change.component';
import { TheAuctionRoomComponent } from './the-auction-room/the-auction-room.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import {AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'',component: HomeComponent},{path:'about',component: AboutUsComponent},{path:'create',component: CreateEventsComponent},{path:'room',component: TheAuctionRoomComponent},{path:'moneyChange',component: MoneyChangeComponent},{path:'homeEvents',component:HomeEventsComponent},
  {path: 'signup', component: SignUpComponent},{path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
