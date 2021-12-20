import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from '../app/home/home.component'
import { HomeEventsComponent } from './home-events/home-events.component';
import { MoneyChangeComponent } from './money-change/money-change.component';
import { TheAuctionRoomComponent } from './the-auction-room/the-auction-room.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import {AboutUsComponent } from './about-us/about-us.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { CheckPassComponent } from './check-pass/check-pass.component';

const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},{path:'h',component: HomeComponent},{path:'about',component: AboutUsComponent},{path:'create',component: CreateEventsComponent},{path:'room',component: TheAuctionRoomComponent},{path:'moneyChange',component: MoneyChangeComponent},{path:'homeEvents',component:HomeEventsComponent},
  {path: 'signup', component: RegisterComponent},{path:'check',component: CheckPassComponent},{path: 'login', component: LoginComponent},{path: 'sell',component:SellCoinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
