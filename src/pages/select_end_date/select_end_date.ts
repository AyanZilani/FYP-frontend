import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-select_end_date',
  templateUrl: 'select_end_date.html'
})
export class Select_end_datePage {
  public event = {
    timeStarts: '10:30',
  }
  trip: any = { endDate: 'YYYY-MM-DD HH:mm:ss' };
  constructor(public navCtrl: NavController, private http: HttpClient, private api: EbikeApiProvider) {

  }

  home() {
    console.log("Selecting End date ....", this.trip);
    this.api.selectEndDate(this.trip).subscribe(response => { console.log(response) }, error => { console.log(error) })

    // this.http.post('http://localhost:3000/api/endDates', {
    //   endDate: this.trip.endDate,
    // }).subscribe(response => { console.log(response) }, error => { console.log(error) })

    this.navCtrl.setRoot(HomePage)
  }
}
