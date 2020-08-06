import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { PaymentPage } from '../payment/payment';
@Component({
  selector: 'page-book_car',
  templateUrl: 'book_car.html'
})
export class Book_carPage {

  constructor(public navCtrl: NavController) {

  } 
    
  payment(){
        this.navCtrl.push(PaymentPage)
  }  

}
