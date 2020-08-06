import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from "moment";

import { PaymentPage } from '../payment/payment';
@Component({
  selector: 'page-book_car',
  templateUrl: 'book_car.html'
})
export class Book_carPage {

  startTrip = moment('2020-08-05 18:00:00');
  stopTrip = moment('2020-08-06 14:01:00');

  _startedDate = this.startTrip.format('YYYY/MM/DD');
  _startedTime = this.startTrip.format('HH:mm:ss');

  _stopDate = this.stopTrip.format('YYYY/MM/DD');
  _stopTime = this.stopTrip.format('HH:mm:ss');

  _duration = this.stopTrip.diff(this.startTrip, 'hours');
  ;
  constructor(public navCtrl: NavController) {

  }

  payment() {
    this.navCtrl.push(PaymentPage)
  }

}
