import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from "moment";
//import {startDate} from '../select_start_date/select_start_date';
import { PaymentPage } from '../payment/payment';
@Component({
  selector: 'page-book_car',
  templateUrl: 'book_car.html'
})
export class Book_carPage {

  startTrip = moment('2020-08-12 08:30:00');
  stopTrip = moment('2020-08-13 08:30:00');

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
