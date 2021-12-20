import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-sell-coins',
  templateUrl: './sell-coins.component.html',
  styleUrls: ['./sell-coins.component.css']
})
export class SellCoinsComponent implements OnInit {

  profilName:string=""
  paymentHandler:any = null;
  myBalance:any = null

  constructor(private Http:HttpClient,private userService: UserService,) { }

  ngOnInit() {
    this.userService.getProfile().subscribe((data) => {
      this.profilName= data.user.username      
     })
   
    this.loadStripe();
  }
  loadStripe() {
      
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}

  
 money(e:any){
  var money={balance:e}
  console.log("ùùùùùùùùùùùùùùùùùùùùùùù",money)
  this.Http.post<any>('http://localhost:5000/money',money).subscribe((myBalance)=>{
    console.log(myBalance);})

 }



  pay(amount:any) {    
   var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
  
    handler.open({
      name: 'Auction House Transfert',
      description: 'Welcome To Community',
      amount: amount * 100
    });
  
}
  
  

}
