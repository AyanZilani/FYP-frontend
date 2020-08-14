import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { Select_cityPage } from '../select_city/select_city';
import { Select_start_datePage } from '../select_start_date/select_start_date';
import { Select_end_datePage } from '../select_end_date/select_end_date';
import { Car_listPage } from '../car_list/car_list';
import { HttpClient } from '@angular/common/http';
import { BookingProvider } from '../../providers/booking/booking';
// import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public event = {
    startTip: '2019-06-15',
    endTrip: '2019-06-18'
  }

  // bike: any = { bike_number: '', bike_status: '' };

  constructor(public navCtrl: NavController, private http: HttpClient, private api: EbikeApiProvider, /*private book: BookingProvider*/) { }


  select_city() {
    this.navCtrl.push(Select_cityPage)

  }
  select_start_date() {
    this.navCtrl.push(Select_start_datePage)
  }
  select_end_date() {
    this.navCtrl.push(Select_end_datePage)
  }
  car_list() {
    // console.log("Getting list of bikes ....", this.bike);

    this.api.getAvailableBikes(() => {
      this.navCtrl.push(Car_listPage);
    });

    // let data: Observable<any>;

    // data = this.http.get('http://localhost:3000/api/bikes'),
    //   data.subscribe(response => {
    //     console.log(response),
    //       this.bike = response;
    //   }, error => { console.log(error) })
    // this.navCtrl.push(Car_listPage)
  }

  /*submitBooking() {
    this.book.submitBooking().subscribe()
  }*/

}
