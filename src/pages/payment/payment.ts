import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookedPage } from '../booked/booked';
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController) {

  }

   
  booked(){
        this.navCtrl.push(BookedPage)
  }  

}
