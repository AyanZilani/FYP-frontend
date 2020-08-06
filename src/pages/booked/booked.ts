import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { My_bookingsPage } from '../my_bookings/my_bookings';
@Component({
  selector: 'page-booked',
  templateUrl: 'booked.html'
})
export class BookedPage {

  constructor(public navCtrl: NavController) {

  }
  
 my_bookings(){
        this.navCtrl.setRoot(My_bookingsPage)
  } 

}
