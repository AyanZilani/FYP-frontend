import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { Select_cityPage } from '../select_city/select_city';
import { Select_start_datePage } from '../select_start_date/select_start_date';
import { Select_end_datePage } from '../select_end_date/select_end_date';
import { Car_listPage } from '../car_list/car_list';

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

  constructor(public navCtrl: NavController, private api: EbikeApiProvider) { }


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
    this.api.getAvailableBikes(() => {
      this.navCtrl.push(Car_listPage);
    });
  }
}
