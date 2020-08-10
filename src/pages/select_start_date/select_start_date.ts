import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Select_end_datePage } from '../select_end_date/select_end_date';

import { HttpClient } from '@angular/common/http';
import { BookingProvider } from '../../providers/booking/booking';
//import { DatePipe } from '@angular/common';
@Component({
  selector: 'page-select_start_date',
  templateUrl: 'select_start_date.html'
})
export class Select_start_datePage {
  public event = {
    // timeStarts: '07:30',
  }

  trip: any = { startDate: '' };
  constructor(public navCtrl: NavController, private http: HttpClient, private api: EbikeApiProvider, private booking: BookingProvider) {


  }

  select_end_date() {
    console.log("Selecting Start date ....", this.trip);
    this.booking.setStartDate(this.trip.startDate);
    //this.api.selectStartDate(this.trip).subscribe(response => { console.log(response) }, error => { console.log(error) })

    // this.http.post('http://localhost:3000/api/startDates', {
    //   startDate: moment(this.trip.startDate),
    // }).subscribe(response => { console.log(response) }, error => { console.log(error) })

    this.navCtrl.push(Select_end_datePage)
  }
}
