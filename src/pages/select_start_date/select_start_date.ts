import { EbikeApiProvider } from '../../providers/api/ebike-api';

import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Select_end_datePage } from '../select_end_date/select_end_date';


// import { HttpClient } from '@angular/common/http';
// import { BookingProvider } from '../../providers/booking/booking';
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
  constructor(
    public navCtrl: NavController,
    public alrt: AlertController,
    private api: EbikeApiProvider
  ) { }

  select_end_date() {
    console.log("Selecting Start date ....", this.trip);

    this.api.selectStartDate(this.trip).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error);
        this.alertPopup("Error", "Please select the time and date")
      }
    );

    this.navCtrl.push(Select_end_datePage);

  } alertPopup(title: string, Msg: string) {
    let alrt = this.alrt.create({
      title: title,
      subTitle: Msg,
      buttons: ['OK']
    });
    alrt.present();
  }
}
